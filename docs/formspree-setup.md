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

The frontend sends `multipart/form-data` and the file field is named:

```text
evidence
```

Current frontend limit:

```text
15 MB
```

Allowed extensions:

```text
jpg, jpeg, png, pdf, mp4, mov
```

In Formspree, enable file uploads and add validation for the `evidence` field if available in the selected plan.

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
- `evidence` file, optional

## Notes

The user email remains the `email` field. Configure Formspree notifications so replies go to that submitted address if needed.

For production, submit a test report with a photo and confirm:

- email reaches `support@smartteamdigital.com`
- Mariano receives a copy
- the file appears in the Formspree submission
- the Kit ID is included in the notification
