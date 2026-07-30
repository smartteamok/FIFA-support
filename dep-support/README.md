# FIFA Foundation & Raco Systems Corp. Support

Static support page for educational kits distributed through the FIFA Foundation Digital Education Programme.

## Files

- `index.html`
- `styles.css`
- `app.js`
- `resources/` - module guides and learning resources page

Deploy the whole `dep-support/` folder under:

```text
https://fifafoundation.smartteamdigital.com/dep-support/
```

The guides page is available at:

```text
https://fifafoundation.smartteamdigital.com/dep-support/resources/
```

It currently includes 13 module guide outlines based on the FIFA micro:bit tutorial brief. Video links, wiring diagrams and source files are intentionally marked as coming soon until the final materials are approved. The first-check content is a review draft derived from the kit context, not a replacement for final safety instructions.

## Kit ID behavior

The page reads the kit serial from the URL query parameter named `id`.

```text
https://fifafoundation.smartteamdigital.com/dep-support/?id=SR-2607-A-000001
```

Accepted formats:

- `SR-YYMM-B-XXXXXX` for Robotics Kit
- `SP-YYMM-B-XXXXXX` for Physical Computing Kit

The JavaScript uses:

```js
const params = new URLSearchParams(window.location.search);
const kitId = params.get("id");
```

If the parameter is missing or invalid, the page asks the teacher to manually enter the Kit ID printed next to the QR code.

## Test URLs

```text
http://localhost:8000/dep-support/?id=SR-2607-A-000001
```

Expected: `Robotics Kit`, `Kit ID: SR-2607-A-000001`.

```text
http://localhost:8000/dep-support/?id=SP-2607-A-000001
```

Expected: `Physical Computing Kit`, `Kit ID: SP-2607-A-000001`.

```text
http://localhost:8000/dep-support/
```

Expected: manual Kit ID entry is requested.

```text
http://localhost:8000/dep-support/?id=INVALID
```

Expected: the Kit ID is rejected and manual entry is requested.

## Configure form submission

The form is configured for Formspree with this endpoint:

```js
const SUPPORT_FORM_ENDPOINT = "https://formspree.io/f/xeeydyyl";
```

The HTML fallback uses the same endpoint:

```html
<form action="https://formspree.io/f/xeeydyyl" method="POST" enctype="multipart/form-data">
```

The UI submits `multipart/form-data` with `fetch()` so evidence files can be uploaded. Formspree stores the submission and sends notification emails.

Recommended Formspree configuration:

1. Create a form in Formspree.
2. Set `support@smartteamdigital.com` as the main recipient.
3. Add `mariano.batistelli@smartteamdigital.com` as an additional notification recipient.
4. Enable file uploads for the `evidence` field.
5. Add validation for allowed file types and max size if available in the selected plan.

See `../docs/formspree-setup.md`.

This is the simplest first backend because it removes WordPress, Resend DNS setup, and custom server code from the submission path. The tradeoff is that Formspree becomes the submission store. If support volume grows, add WordPress/Fluent Forms, Supabase, Firebase, or Odoo later as the system of record.

For a very fast MVP, Google Apps Script can receive the JSON and append rows to Google Sheets, but repeat all validation server-side and do not treat the sheet as secure production infrastructure.

## Resources URL

Open `app.js` and update:

```js
const RESOURCES_URL = "";
```

Keep this empty until the final learning resources URL is available. There is also a TODO comment in `index.html` beside the resources action.

## Languages

The page includes a language selector for:

- EN
- FR
- ES
- PT

Main interface text is translated in `TRANSLATIONS` inside `app.js`. The selector stores the last selected language in the browser with `localStorage`.

## Components

Component thumbnails are populated according to the detected kit type:

- `SR-` shows Robotics Kit components from the Bhutan kit component list and robotics kit PDF.
- `SP-` shows Physical Computing Kit components from the Bhutan kit component list and kit PDF.

Images live in `assets/components/`. Map filenames in `COMPONENT_IMAGES` inside `app.js`.
To update the lists later, edit `COMPONENTS_BY_KIT_TYPE` in `app.js`.

Deploy must include the `assets/` folder next to `index.html`.

## Future API lookup

`app.js` includes a placeholder:

```js
async function loadKitRecord(kitId) {
  return { kitId };
}
```

Use this later to call Raco Systems APIs, Odoo, Supabase, or Firebase. Keep private production, carton, shipment, school assignment, and logistics data out of the public page unless explicitly authorized.

## GitHub and web handoff

This folder is ready to commit from the repository root:

```sh
git add dep-support
git commit -m "Add FIFA Foundation kit support page"
```

To push to GitHub under the `smartteamok` account, create a GitHub repository first, then add its remote:

```sh
git remote add origin git@github.com:smartteamok/FIFA-support.git
git branch -M main
git push -u origin main
```

To share it with the web team, send them the GitHub repository link and ask them to deploy the `dep-support/` folder to:

```text
https://fifafoundation.smartteamdigital.com/dep-support/
```

For WordPress, the simplest deployment options are:

1. Upload the `dep-support/` folder to the site root using hosting file manager/SFTP, so it sits beside the WordPress files.
2. If direct static-folder upload is not available, ask the web team to create a WordPress page at `/dep-support/` and enqueue or embed the HTML/CSS/JS assets from this folder.
3. Configure the final form endpoint in `app.js` before publishing.

## Manual test cases

1. Open a valid `SR-` URL and confirm Robotics components appear.
2. Open a valid `SP-` URL and confirm Physical Computing components appear.
3. Open the page without `id` and confirm submit is disabled until a valid manual Kit ID is entered.
4. Enter lowercase or spaced Kit ID text and confirm it normalizes to uppercase.
5. Select `Other` for component and confirm the extra field becomes required.
6. Try submitting a description shorter than 20 characters and confirm the error message appears.
7. Try an invalid email and confirm the form blocks submission.
8. Attach a file larger than 15 MB and confirm the file size error appears.
9. Leave the endpoint placeholder unchanged and confirm the form warns that the endpoint must be configured.
10. Configure a test endpoint and confirm the JSON payload includes `kit_id`, `kit_type`, `page_url`, and `submitted_at`.
