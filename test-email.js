// Test script for email functionality
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Check if email configuration exists
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('❌ Email configuration missing. Please set EMAIL_USER and EMAIL_PASS in .env file');
  process.exit(1);
}

console.log('🔍 Testing email configuration...');
console.log(`📧 Using email: ${process.env.EMAIL_USER}`);
console.log(`📬 Sending to: ${process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER}`);

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Email options
const mailOptions = {
  from: `"Portfolio Test" <${process.env.EMAIL_USER}>`,
  to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
  subject: 'Portfolio Contact Form Test',
  text: 'This is a test email to verify your contact form setup is working correctly.',
  html: `
    <h3>Portfolio Email Test</h3>
    <p>This is a test email to verify your contact form setup is working correctly.</p>
    <p>If you received this email, your configuration is working!</p>
  `
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('❌ Error sending test email:', error);
    if (error.code === 'EAUTH') {
      console.log('\n🔑 Authentication failed. If using Gmail, make sure you:');
      console.log('  1. Have enabled "Less secure app access" OR');
      console.log('  2. Are using an App Password (recommended)');
      console.log('  → Create one at: https://myaccount.google.com/apppasswords');
    }
    process.exit(1);
  } else {
    console.log('✅ Test email sent successfully!');
    console.log(`📊 Response: ${info.response}`);
    process.exit(0);
  }
});