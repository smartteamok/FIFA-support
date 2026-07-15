# FIFA Foundation & Raco Systems Corp. Support

Static support page for educational kits distributed through the FIFA Foundation Digital Education Programme.

## Files

- `index.html`
- `styles.css`
- `app.js`

Deploy the whole `fifa-support/` folder under:

```text
https://smartteamdigital.com/fifa-support/
```

## Kit ID behavior

The page reads the kit serial from the URL query parameter named `id`.

```text
https://smartteamdigital.com/fifa-support/?id=SR-2607-A-000001
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
http://localhost:8000/fifa-support/?id=SR-2607-A-000001
```

Expected: `Robotics Kit`, `Kit ID: SR-2607-A-000001`.

```text
http://localhost:8000/fifa-support/?id=SP-2607-A-000001
```

Expected: `Physical Computing Kit`, `Kit ID: SP-2607-A-000001`.

```text
http://localhost:8000/fifa-support/
```

Expected: manual Kit ID entry is requested.

```text
http://localhost:8000/fifa-support/?id=INVALID
```

Expected: the Kit ID is rejected and manual entry is requested.

## Configure form submission

Open `app.js` and replace:

```js
const SUPPORT_FORM_ENDPOINT = "REPLACE_WITH_FINAL_ENDPOINT";
```

The UI is backend-agnostic. It submits JSON with `fetch()` and keeps all vendor-specific details in the endpoint.

Recommended simple backend for WordPress:

1. Use a WordPress form plugin that stores entries in the WordPress database, such as Fluent Forms, Gravity Forms, or WPForms Pro.
2. If the plugin provides a webhook or REST endpoint, point `SUPPORT_FORM_ENDPOINT` to that endpoint.
3. Keep the WordPress plugin as the operational database for support reports.
4. Add optional Google Sheets export/sync from the plugin if the team wants spreadsheet visibility.

This is simpler and more reliable than making Google Sheets the primary database. Google Sheets is good for review and reporting, but WordPress database storage gives better validation, spam controls, file handling, admin access, and future migration to Odoo, Supabase, Firebase, or a Raco Systems API.

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
git add fifa-support
git commit -m "Add FIFA Foundation kit support page"
```

To push to GitHub under the `smartteamok` account, create a GitHub repository first, then add its remote:

```sh
git remote add origin git@github.com:smartteamok/fifa-support.git
git branch -M main
git push -u origin main
```

To share it with the web team, send them the GitHub repository link and ask them to deploy the `fifa-support/` folder to:

```text
https://smartteamdigital.com/fifa-support/
```

For WordPress, the simplest deployment options are:

1. Upload the `fifa-support/` folder to the site root using hosting file manager/SFTP, so it sits beside the WordPress files.
2. If direct static-folder upload is not available, ask the web team to create a WordPress page at `/fifa-support/` and enqueue or embed the HTML/CSS/JS assets from this folder.
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
