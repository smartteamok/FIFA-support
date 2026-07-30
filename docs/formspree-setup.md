# Formspree Setup

This is the simplest backend option for the support page.

## Flow

```text
Vercel static frontend
  -> Formspree form endpoint
  -> Email notifications
  -> Formspree submissions dashboard
```

## Create the form

1. Create or log in to a Formspree account.
2. Create a new form.
3. Set the recipient email:

```text
support@smartteamdigital.com
```

4. Add an additional notification/recipient for:

```text
mariano.batistelli@smartteamdigital.com
```

Use a second notification if the Formspree dashboard does not expose BCC directly.

5. Copy the form endpoint. This project is currently configured with:

```text
https://formspree.io/f/xeeydyyl
```

## Configure this repo

Open:

```text
dep-support/app.js
```

Confirm this constant:

```js
const SUPPORT_FORM_ENDPOINT = "https://formspree.io/f/xeeydyyl";
```

The HTML form also includes the same endpoint as a fallback:

```html
<form action="https://formspree.io/f/xeeydyyl" method="POST" enctype="multipart/form-data">
```

If the endpoint changes later, update both `dep-support/app.js` and `dep-support/index.html`.

## File uploads

File uploads are currently hidden and disabled because Formspree Free does not permit attachments.

```text
If possible, describe the issue. Photos may be requested by support later.
```

The HTML keeps a hidden disabled file input named:

```text
evidence
```

If the Formspree account is upgraded later, remove `hidden` from `#file-upload-field`, remove `disabled` from `#evidence`, and restore frontend validation before submitting files.

Recommended future upload rules:

- Maximum size: 15 MB
- Allowed extensions: jpg, jpeg, png, pdf, mp4, mov

## Fields sent

- `kit_id`
- `kit_type`
- `institution`
- `full_name`
- `email`
- `phone`
- `country`
- `city_district`
- `component`
- `issue_category`
- `description`
- `troubleshooting`
- `page_url`
- `submitted_at`
- `language`
- `user_agent`

## Notes

The user email remains the `email` field. Configure Formspree notifications so replies go to that submitted address if needed.

For production, submit a test report and confirm:

- email reaches `support@smartteamdigital.com`
- Mariano receives a copy
- the Kit ID is included in the notification

Endpoint smoke test:

```text
2026-07-30: https://formspree.io/f/xeeydyyl returned {"ok":true} for a test submission marked "TEST - Codex integration check".
```
