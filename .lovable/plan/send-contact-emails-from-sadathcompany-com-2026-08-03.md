# Send contact emails from sadathcompany.com

Right now the contact form sends through Resend using `onboarding@resend.dev`, which Resend only delivers to your own Resend account address. To reliably receive inquiries at contact@sadathcompany.com, the domain has to be verified in Resend.

## What I found

The Resend API key connected to this project is a **send-only key** — it cannot create or verify domains programmatically (Resend returns "This API key is restricted to only send emails"). So domain verification has to be done by you in the Resend dashboard; I handle the app side.

## Your steps (one-time, ~5 minutes + DNS propagation)

1. In Resend, go to **Domains → Add Domain** and enter `sadathcompany.com` (or a subdomain like `mail.sadathcompany.com` if you prefer to keep the root domain's mail untouched).
2. Resend shows a set of DNS records (an MX record, an SPF TXT record, and a DKIM TXT record).
3. Add those records at your DNS provider for sadathcompany.com.
4. Back in Resend, click **Verify**. Status turns "Verified" once DNS propagates (usually minutes, up to 72 hours).
5. Tell me the verified domain and the sender address you want (suggested: `Sadath Company <contact@sadathcompany.com>`).

## What I do

- Set the `CONTACT_FROM_EMAIL` secret to the verified sender address (the send function already reads it, so no code change is strictly needed).
- Optionally hardcode the sender in the function and drop the `onboarding@resend.dev` fallback, so a misconfigured secret can never silently send from the sandbox address.
- Send a live test through the contact form and confirm it lands at contact@sadathcompany.com.

## Technical notes

- Function: `supabase/functions/send-contact-email/index.ts`. `FROM_EMAIL` = `Deno.env.get('CONTACT_FROM_EMAIL')` with the `onboarding@resend.dev` fallback; `TO_EMAIL` is already `contact@sadathcompany.com`, and `reply_to` is set to the submitter.
- After changing the secret or the file, the function is redeployed.
- Verification is per sending domain, so if you use a subdomain the `from` address must be on that subdomain.
