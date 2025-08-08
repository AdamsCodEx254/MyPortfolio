// Main JavaScript file for Joseph Adams' Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the theme
    initTheme();
    
    // Mobile menu toggle
    initMobileMenu();
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Initialize 3D tilt effect for project cards
    initTiltEffect();
    
    // Initialize the Easter Egg
    initEasterEgg();
    
    // Initialize form submission
    initContactForm();
    
    // Initialize matrix background effect
    initMatrixBackground();
});

// Theme initialization and switching
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('theme') || 'neon';
    
    // Set initial theme
    document.body.className = `theme-${storedTheme}`;
    themeToggle.textContent = `setTheme ${storedTheme}`;
    
    // Theme cycling: neon -> hacker -> retro -> neon
    themeToggle.addEventListener('click', function() {
        let currentTheme = '';
        
        if (document.body.classList.contains('theme-neon')) {
            currentTheme = 'hacker';
        } else if (document.body.classList.contains('theme-hacker')) {
            currentTheme = 'retro';
        } else {
            currentTheme = 'neon';
        }
        
        // Remove all theme classes
        document.body.classList.remove('theme-neon', 'theme-hacker', 'theme-retro');
        
        // Add new theme class
        document.body.classList.add(`theme-${currentTheme}`);
        
        // Update button text
        themeToggle.textContent = `setTheme ${currentTheme}`;
        
        // Save to localStorage
        localStorage.setItem('theme', currentTheme);
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Toggle animation for menu bars
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.toggle('active'));
    });
    
    // Close menu when clicking a link
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            
            // Reset menu bars
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.remove('active'));
        });
    });
}

// Smooth scrolling for navigation
function initSmoothScrolling() {
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        });
    });
}

// Initialize 3D tilt effect for project cards
function initTiltEffect() {
    // Using Vanilla-Tilt.js library
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.project-card'), {
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.3,
            scale: 1.05
        });
    }
}

// Easter egg functionality
function initEasterEgg() {
    let keySequence = '';
    const secretCode = 'sudo access';
    
    document.addEventListener('keydown', function(e) {
        // Add the key to the sequence
        keySequence += e.key.toLowerCase();
        
        // Check if the sequence contains the secret code
        if (keySequence.includes(secretCode)) {
            // Reset the sequence
            keySequence = '';
            
            // Show hidden CV section or perform other action
            unlockHiddenContent();
        }
        
        // Limit the sequence length to avoid memory issues
        if (keySequence.length > 50) {
            keySequence = keySequence.slice(-20);
        }
    });
}

// Function to unlock hidden content when easter egg is triggered
function unlockHiddenContent() {
    // Create a modal or reveal hidden section
    const modal = document.createElement('div');
    modal.className = 'hidden-cv-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="terminal-header">
                <div class="terminal-buttons">
                    <span class="terminal-button close"></span>
                    <span class="terminal-button minimize"></span>
                    <span class="terminal-button maximize"></span>
                </div>
                <div class="terminal-title">sudo_access_granted.sh</div>
            </div>
            <div class="modal-body">
                <h2><span class="terminal-prompt">&gt;</span> Restricted Area Access Granted</h2>
                <p>Congratulations, you've discovered the hidden section!</p>
                <div class="cv-content">
                    <h3>Full Curriculum Vitae</h3>
                    <div class="cv-section">
                        <h4>Education</h4>
                        <p><strong>BSc Computer Science</strong> - 2nd Class Upper</p>
                        <p>Graduation: November 2025</p>
                    </div>
                    <div class="cv-section">
                        <h4>Work Experience</h4>
                        <p><strong>Cybersecurity Intern</strong> - Tech Solutions Ltd</p>
                        <p>June 2024 - August 2024</p>
                        <ul>
                            <li>Conducted vulnerability assessments</li>
                            <li>Assisted in penetration testing</li>
                            <li>Developed security monitoring scripts</li>
                        </ul>
                    </div>
                    <div class="cv-section">
                        <h4>Projects</h4>
                        <ul>
                            <li>Network Traffic Analyzer</li>
                            <li>Secure File Encryption Tool</li>
                            <li>Password Strength Evaluator</li>
                        </ul>
                    </div>
                    <div class="cv-section">
                        <h4>References</h4>
                        <p>Available upon request</p>
                    </div>
                </div>
                <a href="#" class="btn glow-btn download-full-cv">Download Full CV</a>
                <button class="btn outline-btn close-modal">Close Terminal</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add animation
    setTimeout(() => {
        modal.classList.add('visible');
    }, 10);
    
    // Close button functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('visible');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 500);
    });
    
    // Download CV button
    const downloadBtn = modal.querySelector('.download-full-cv');
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('CV download would start here in a real implementation');
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Send data to server
            fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => response.json())
            .then(data => {
                // Reset button
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                
                if (data.success) {
                    // Create success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'form-success';
                    successMessage.innerHTML = `
                        <div class="terminal-line">
                            <span class="terminal-prompt">&gt;</span> Message sent successfully!
                        </div>
                        <div class="terminal-line">
                            <span class="terminal-prompt">&gt;</span> Thank you, ${name}. I will get back to you soon.
                        </div>
                    `;
                    
                    // Replace form with success message
                    contactForm.innerHTML = '';
                    contactForm.appendChild(successMessage);
                    
                    // Reset form after 5 seconds
                    setTimeout(() => {
                        contactForm.innerHTML = `
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Message:</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <button type="submit" class="btn glow-btn">Send Packet</button>
                        `;
                    }, 5000);
                } else {
                    // Show error message
                    alert('Failed to send message. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
                alert('An error occurred. Please try again later.');
            });
        });
    }
}

// Matrix background effect
function initMatrixBackground() {
    const matrixBg = document.querySelector('.matrix-bg');
    
    // Create canvas for matrix effect
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    matrixBg.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Characters to display
    const chars = '01';
    const charSize = 14;
    const columns = canvas.width / charSize;
    const drops = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -100);
    }
    
    function draw() {
        // Set semi-transparent black background to create trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Set text color and font
        ctx.fillStyle = '#00ff41';
        ctx.font = `${charSize}px Fira Code, monospace`;
        
        // Draw characters
        for (let i = 0; i < drops.length; i++) {
            // Get random character
            const char = chars[Math.floor(Math.random() * chars.length)];
            
            // Draw character
            ctx.fillText(char, i * charSize, drops[i] * charSize);
            
            // Move drop down
            if (drops[i] * charSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    // Resize canvas when window is resized
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Reset drops
        const columns = canvas.width / charSize;
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * -100);
        }
    });
    
    // Run animation
    setInterval(draw, 50);
}

// Add CSS styles for the hidden CV modal
function addHiddenCVStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .hidden-cv-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        .hidden-cv-modal.visible {
            opacity: 1;
        }
        
        .modal-content {
            width: 90%;
            max-width: 800px;
            background-color: var(--terminal-bg);
            border-radius: 8px;
            box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);
            overflow: hidden;
            transform: translateY(20px);
            transition: transform 0.5s ease;
        }
        
        .hidden-cv-modal.visible .modal-content {
            transform: translateY(0);
        }
        
        .modal-body {
            padding: 2rem;
        }
        
        .cv-content {
            margin: 2rem 0;
        }
        
        .cv-section {
            margin-bottom: 1.5rem;
        }
        
        .cv-section h4 {
            color: var(--primary-color);
            margin-bottom: 0.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 0.5rem;
        }
        
        .cv-section ul {
            padding-left: 1.5rem;
        }
        
        .cv-section li {
            margin-bottom: 0.3rem;
        }
    `;
    
    document.head.appendChild(style);
}

// Call the function to add hidden CV styles
addHiddenCVStyles();