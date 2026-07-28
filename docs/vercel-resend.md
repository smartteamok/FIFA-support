# Vercel + Resend Setup

This project can send support form submissions by email using a Vercel Serverless Function and Resend.

## Flow

1. The teacher opens:

```text
https://fifafoundation.smartteamdigital.com/dep-support/?id=SR-2607-A-000001
```

2. The static page posts `multipart/form-data` to:

```text
/api/support-request
```

3. Vercel reads the form, validates it, attaches the optional file, and sends an email through Resend.

## Vercel environment variables

Configure these in Vercel Project Settings > Environment Variables:

```text
RESEND_API_KEY=re_xxxxxxxxx
SUPPORT_EMAIL_FROM=DEP Support <support@fifafoundation.smartteamdigital.com>
SUPPORT_EMAIL_TO=support@example.com
```

Optional:

```text
SUPPORT_EMAIL_CC=ops@example.com
```

After adding or changing environment variables, redeploy the production deployment.

## Resend configuration

In Resend:

1. Verify the sending domain, preferably `fifafoundation.smartteamdigital.com` or `smartteamdigital.com`.
2. Add the DNS records Resend provides.
3. Create an API key.
4. Use a `SUPPORT_EMAIL_FROM` address from the verified domain.

## Attachments

The form supports one optional file under the field name:

```text
evidence
```

Allowed extensions:

```text
jpg, jpeg, png, pdf, mp4, mov
```

Current frontend/server limit:

```text
15 MB
```

## Tradeoff

This is the simplest backend path because it removes WordPress from the first version. The tradeoff is that email is not a database. If support volume grows, add a database later, or forward the same payload to WordPress/Fluent Forms after the email send.
