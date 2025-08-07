// Terminal animation effects for Joseph Adams' Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Start terminal animation when the page loads
    initTerminalAnimation();
});

function initTerminalAnimation() {
    const terminalText = document.getElementById('terminal-text');
    const welcomeText = document.getElementById('welcome-text');
    const profileInfo = document.querySelector('.profile-info');
    
    // Terminal text lines to display
    const lines = [
        'Establishing secure connection...',
        'Access granted.',
        'Loading Joseph Adams\' Digital Space...'
    ];
    
    // Welcome message to type after terminal animation
    const welcomeMessage = 'Welcome, fellow cyber explorer. Let\'s dive in';
    
    // Function to simulate typing
    function typeText(element, text, speed, callback) {
        let i = 0;
        const interval = setInterval(function() {
            element.innerHTML += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                if (callback) setTimeout(callback, 500);
            }
        }, speed);
    }
    
    // Function to add a new line to the terminal
    function addLine(text, callback) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.innerHTML = '<span class="terminal-prompt">&gt;</span> ';
        terminalText.appendChild(line);
        
        // Scroll to bottom of terminal
        const terminalContent = document.querySelector('.terminal-content');
        terminalContent.scrollTop = terminalContent.scrollHeight;
        
        // Type the text
        typeText(line, text, 50, callback);
    }
    
    // Start the animation sequence
    function startAnimation() {
        // Add first line
        setTimeout(() => {
            addLine(lines[0], () => {
                // Add second line after a delay
                setTimeout(() => {
                    addLine(lines[1], () => {
                        // Add third line after a delay
                        setTimeout(() => {
                            addLine(lines[2], () => {
                                // Start welcome message typing after a delay
                                setTimeout(() => {
                                    typeText(welcomeText, welcomeMessage, 70, () => {
                                        // Show profile info after typing is complete
                                        setTimeout(() => {
                                            profileInfo.classList.remove('hidden');
                                            setTimeout(() => {
                                                profileInfo.classList.add('visible');
                                            }, 100);
                                        }, 1000);
                                    });
                                }, 1000);
                            });
                        }, 800);
                    });
                }, 800);
            });
        }, 500);
    }
    
    // Start the animation
    startAnimation();
}

// Function to create a typing animation for any element
function createTypingAnimation(element, text, speed = 70, startDelay = 0) {
    // Clear the element first
    element.textContent = '';
    
    // Create a span for the cursor
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    cursor.textContent = '_';
    
    // Add the cursor to the element
    element.appendChild(cursor);
    
    // Start typing after the specified delay
    setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                // Insert the character before the cursor
                element.insertBefore(document.createTextNode(text.charAt(i)), cursor);
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);
    }, startDelay);
}

// Add typing animation to section titles when they come into view
function initSectionTitleAnimations() {
    const sectionTitles = document.querySelectorAll('.section-title');
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the title text without the terminal prompt and cursor
                const titleElement = entry.target;
                const titleText = titleElement.textContent.replace('> ', '').replace('_', '');
                
                // Clear the title and add the terminal prompt back
                titleElement.innerHTML = '<span class="terminal-prompt">&gt;</span> ';
                
                // Add typing animation
                createTypingAnimation(titleElement, titleText);
                
                // Unobserve after animation is triggered
                observer.unobserve(titleElement);
            }
        });
    }, { threshold: 0.5 });
    
    // Observe each section title
    sectionTitles.forEach(title => {
        observer.observe(title);
    });
}

// Initialize section title animations when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit before initializing to ensure all elements are loaded
    setTimeout(initSectionTitleAnimations, 2000);
});