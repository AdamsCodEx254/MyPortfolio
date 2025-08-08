# Joseph Adams - Cybersecurity Portfolio

## Overview
This is a personal portfolio website for Joseph Adams, showcasing skills, projects, and experience in cybersecurity.

## Features
- Responsive design with mobile compatibility
- Interactive terminal-style interface
- Project showcase
- Skills and certifications section
- Blog/writeups section
- Contact form with email functionality
- Theme switching (Neon, Hacker, Retro)
- Easter egg functionality

## Contact Form Setup
The contact form is configured to send emails using Nodemailer. Follow these steps to set it up:

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory based on the `.env.example` template:
   ```
   cp .env.example .env
   ```

3. Edit the `.env` file with your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   PORT=3000
   ```
   
   **Note for Gmail users:** You'll need to use an App Password instead of your regular password. 
   [Learn how to create an App Password](https://support.google.com/accounts/answer/185833)

4. Start the server:
   ```
   npm start
   ```

5. For development with auto-restart:
   ```
   npm run dev
   ```

## Usage
After starting the server, visit `http://localhost:3000` in your browser. The contact form will now send emails to your specified email address when visitors submit the form.

## Technologies Used
- HTML5, CSS3, JavaScript
- Node.js and Express
- Nodemailer for email functionality
- Vanilla Tilt for 3D card effects

A personal portfolio website with a dark hacker theme for Joseph Adams, a graduating Computer Science student specializing in cybersecurity and ethical hacking.

## 🔐 Features

- **Terminal-Style Interface**: Interactive command-line inspired design
- **Dark Hacker Theme**: Matrix-inspired aesthetic with neon glow effects
- **3D Project Cards**: Interactive cards with tilt effect and neon glow
- **Responsive Design**: Optimized for both mobile and desktop viewing
- **Theme Switcher**: Toggle between hacker, neon, and retro themes
- **Easter Egg**: Type "sudo access" anywhere to unlock hidden CV section
- **Matrix Background**: Subtle animated binary code rain effect

## 📋 Website Structure

- **Home**: Terminal-style animation intro with typing effect
- **About**: Code-formatted personal information with ASCII avatar
- **Projects**: 3D cards showcasing portfolio projects with hover effects
- **Skills**: Terminal-style display of certifications and technical skills
- **Blog**: Markdown-style blog posts/writeups on cybersecurity topics
- **Contact**: Terminal commands and contact form

## 🚀 Technologies Used

- HTML5
- CSS3 (with custom animations and effects)
- JavaScript (vanilla)
- VanillaTilt.js (for 3D card effects)

## 🔧 Setup and Usage

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No build process or dependencies required!

## 🎨 Customization

To customize this portfolio for your own use:

1. Update personal information in `index.html`
2. Modify project data in `js/projects.js`
3. Edit skills and certifications in `js/skills.js`
4. Change blog posts in `js/blog.js`
5. Replace the profile avatar in `img/profile-avatar.svg`

## 🌐 Browser Compatibility

Tested and optimized for:
- Chrome
- Firefox
- Edge
- Safari

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔍 Easter Eggs

Try typing "sudo access" anywhere on the page to unlock a hidden section with additional information.

## 📄 License

Feel free to use this template for your personal portfolio. Attribution appreciated but not required.

---

Created by Joseph Adams © 2025