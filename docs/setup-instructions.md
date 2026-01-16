# Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Resend API Key for email sending
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here

# Email Configuration
# Email address to receive BOQ requests
CONTACT_EMAIL=info@commercialtiling.com

# Email address to send from (must be verified in Resend)
EMAIL_FROM=noreply@commercialtiling.com

# Optional: S3 Configuration for file uploads
# AWS_ACCESS_KEY_ID=your_access_key
# AWS_SECRET_ACCESS_KEY=your_secret_key
# AWS_REGION=us-east-1
# AWS_S3_BUCKET=your-bucket-name

# Optional: Rate Limiting (Redis)
# REDIS_URL=redis://localhost:6379
```

## Resend Setup

1. Sign up for a Resend account at https://resend.com
2. Get your API key from https://resend.com/api-keys
3. Add the API key to `.env.local` as `RESEND_API_KEY`
4. Verify your domain in Resend dashboard
5. Set `EMAIL_FROM` to a verified email address

## Dependencies

Install required dependencies:

```bash
npm install resend zod
```

## File Uploads

Currently, file uploads use Base64 encoding for files under 5MB. For production with larger files:

1. Set up AWS S3 or compatible storage
2. Implement presigned URL generation
3. Upload files to S3 before form submission
4. Send file URLs in the form data instead of Base64

## Testing

1. Start the development server: `npm run dev`
2. Navigate to `/request-pricing`
3. Fill out the form and submit
4. Check your email (configured in `CONTACT_EMAIL`) for the submission

## Production Deployment

1. Set environment variables in your hosting platform (Vercel, etc.)
2. Ensure Resend API key is set
3. Verify email domain in Resend
4. Test form submission in production

