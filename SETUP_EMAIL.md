# Setting Up Email Functionality for Your Portfolio Contact Form

## Prerequisites
- Node.js installed on your system
- A Gmail account (or another email provider, but these instructions focus on Gmail)

## Step 1: Install Dependencies
Open a terminal in your portfolio directory and run:
```
npm install
```

This will install all required packages including Express, Nodemailer, and dotenv.

## Step 2: Set Up Gmail for Sending Emails

### Option A: Using App Passwords (Recommended for security)
1. Go to your Google Account settings: https://myaccount.google.com/
2. Select "Security" from the left menu
3. Under "Signing in to Google," select "2-Step Verification" (enable it if not already enabled)
4. At the bottom of the page, select "App passwords"
5. Select "Mail" as the app and "Other" as the device (name it "Portfolio Contact Form")
6. Click "Generate"
7. Google will display a 16-character password. **Copy this password**

### Option B: Allow Less Secure Apps (Not recommended)
If you can't use App Passwords for some reason:
1. Go to https://myaccount.google.com/lesssecureapps
2. Turn on "Allow less secure apps"

## Step 3: Configure Your Environment Variables
1. Open the `.env` file in your portfolio directory
2. Update the following values:
   ```
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASS=your-app-password-from-step-2
   RECIPIENT_EMAIL=where-you-want-to-receive-emails@example.com
   ```
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: The App Password you generated (or your regular password if using Option B)
   - `RECIPIENT_EMAIL`: Where you want to receive contact form submissions (can be the same as EMAIL_USER)

## Step 4: Test Your Email Configuration
Run the test script to verify your email setup:
```
npm run test-email
```

If successful, you'll see a confirmation message and receive a test email.

If you encounter errors:
- Check that your email and password are correct in the `.env` file
- Verify that you've properly set up App Passwords or Less Secure Apps access
- Check your internet connection

## Step 5: Start Your Server
Start the server to enable the contact form:
```
npm start
```

Your contact form should now be fully functional! When visitors submit the form, you'll receive their messages at your specified email address.

## Troubleshooting

### Common Issues:

1. **Authentication Error**
   - Verify your email and password in the `.env` file
   - Make sure you're using an App Password if you have 2-Step Verification enabled
   - Check if you need to allow less secure apps

2. **Connection Error**
   - Check your internet connection
   - Verify that port 587 (Gmail SMTP) is not blocked by your firewall

3. **Form Submission Not Working**
   - Check browser console for JavaScript errors
   - Verify that the server is running (`npm start`)
   - Check server logs for any errors

### Gmail Sending Limits
Be aware that Gmail has sending limits:
- 500 emails per day for regular Gmail accounts
- 2,000 emails per day for Google Workspace accounts

If you expect high volume, consider using a dedicated email service like SendGrid, Mailgun, or Amazon SES.