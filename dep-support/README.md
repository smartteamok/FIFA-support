# FIFA Foundation & Raco Systems Corp. Support

Static support page for educational kits distributed through the FIFA Foundation Digital Education Programme.

## Files

- `index.html`
- `styles.css`
- `app.js`
- `resources/` - guides listing and module guide pages
- `success/` - confirmation page opened after a successful Formspree submission

Deploy the whole `dep-support/` folder under:

```text
https://fifafoundation.smartteamdigital.com/dep-support/
```

The guides page is available at:

```text
https://fifafoundation.smartteamdigital.com/dep-support/resources/
```

It covers the 29 kit components in two formats: 13 full module guides taken from the hardware documentation, and 16 short identification cards for the parts that have no tutorial of their own. See "Resources page" below.

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

The UI submits the support request with `fetch()`. Formspree stores the submission and sends notification emails. After Formspree returns a successful response, the page opens `/dep-support/success/` in a new window with the Kit ID summary.

File uploads are hidden and disabled while using the Formspree Free plan. The form shows a note instead: "If possible, describe the issue. Photos may be requested by support later." The disabled `evidence` field remains in the HTML so it can be reactivated later.

Recommended Formspree configuration:

1. Create a form in Formspree.
2. Set `support@smartteamdigital.com` as the main recipient.
3. Add `mariano.batistelli@smartteamdigital.com` as an additional notification recipient.
4. Keep file uploads disabled on the Free plan.
5. If the account is upgraded later, re-enable the `evidence` file field and add validation for allowed file types and max size.

See `../docs/formspree-setup.md`.

This is the simplest first backend because it removes WordPress, Resend DNS setup, and custom server code from the submission path. The tradeoff is that Formspree becomes the submission store. If support volume grows, add WordPress/Fluent Forms, Supabase, Firebase, or Odoo later as the system of record.

For a very fast MVP, Google Apps Script can receive the JSON and append rows to Google Sheets, but repeat all validation server-side and do not treat the sheet as secure production infrastructure.

## Resources page

`resources/` holds the guides section. Data and prose are separate so translators
never touch layout code:

| File | Holds |
| --- | --- |
| `components.data.js` | The 29 components, their names and short summaries, kit and role labels, and the URL helpers shared by both pages |
| `modules.data.js` | Structure of the 13 full guides: image paths, wire lists, part lists, video and program ids, short labels |
| `modules.text.js` | All guide prose in EN, ES, FR and PT |
| `resources.js` | The listing page |
| `module/index.html`, `module.js`, `module.css` | The guide detail page, read as `resources/module/?m=<slug>` |

Every content block in `modules.data.js` is optional, and the detail page renders
a section only when its data exists. That is deliberate: the source material is
uneven. Some modules document two wiring figures and some one; the power adapter
documents charging states and has no program at all. Adding `states` or removing
`program` from a module changes the page with no code change.

URLs are built from `SITE_BASE` in `components.data.js` and are root-absolute, so
pages keep working under Vercel's `cleanUrls` and `trailingSlash` rewrites. If the
site ever moves out of `/dep-support/`, change that one constant.

### Publishing module material

Two things in `modules.data.js` stay `null` until the final material is approved,
and each one has a visible placeholder in the meantime:

1. **Video.** Upload the operation-steps video to Cloudflare Stream, then set
   `CLOUDFLARE_SUBDOMAIN` once and the per-module `video.id` to the Stream video
   id. `video.driveId` keeps the original Google Drive source for reference.
   Until `video.id` is set, the section shows "the video is being published".
2. **Program.** Commit the compiled file as
   `assets/guides/<slug>/<slug>.hex` and set `program.hex` to that path. Until
   then the card tells the teacher to rebuild the program from the blocks
   screenshot, which is always shown. `vercel.json` serves `.hex` as an
   attachment so browsers download instead of rendering it.

Troubleshooting for each module carries a `troubleshootingStatus` of `draft` or
`approved`. `draft` renders a visible "proposed guidance, pending review" note,
because only the color sensor's troubleshooting came from the manual; the rest
was derived from the documented operating principle.

Wire colours are only listed where the manual states them (both servos and the
RGB strip). Other modules list the connections to make without a colour swatch,
so the legend never invents a colour a teacher could follow into a miswiring.

French and Portuguese show a "translation pending review" banner, driven by
`REVIEW_PENDING_LANGUAGES` in `components.data.js`. Remove a language from that
list once its copy is signed off.

### Resources URL

`app.js` points the support form at the guides with:

```js
const RESOURCES_URL = "/dep-support/resources/";
```

The guide cards link back the other way: "request a replacement" opens the form
with the component preselected via `?component=`, carrying the `?id=` kit serial
through when the visitor arrived with one.

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
8. Leave the endpoint placeholder unchanged and confirm the form warns that the endpoint must be configured.
9. Configure a test endpoint and confirm the payload includes `kit_id`, `kit_type`, `page_url`, and `submitted_at`.
10. Open `resources/` and confirm 29 components appear, split into 13 full guides and 16 identification cards.
11. Open `resources/module/?m=power-adapter` and confirm the charging states appear and no program or parts section is rendered.
12. Open `resources/module/?m=unknown` and confirm the page redirects to the listing.
13. Switch to FR or PT and confirm the "translation pending review" banner appears on both pages.
14. On an identification card, follow "request a replacement" and confirm the form opens with that component selected.
