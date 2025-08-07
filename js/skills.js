// Skills and certifications data and functionality for Joseph Adams' Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize skills
    loadSkills();
});

// Skills and certifications data
const skills = [
    {
        name: 'Cisco Networking Certificate',
        description: 'Comprehensive understanding of network infrastructure, routing, switching, and security protocols.',
        level: 90, // Percentage of proficiency
        type: 'certification'
    },
    {
        name: 'CompTIA Security+ (In Progress)',
        description: 'Foundation-level security certification that validates essential skills in network security and risk management.',
        level: 75,
        type: 'certification'
    },
    {
        name: 'Kali Linux Mastery',
        description: 'Advanced proficiency in Kali Linux for penetration testing, vulnerability assessment, and security auditing.',
        level: 95,
        type: 'skill'
    },
    {
        name: 'Python',
        description: 'Expertise in Python programming for automation, scripting, data analysis, and security tools development.',
        level: 90,
        type: 'skill'
    },
    {
        name: 'SQL',
        description: 'Database query language proficiency for data manipulation, extraction, and security testing.',
        level: 85,
        type: 'skill'
    },
    {
        name: 'Bash Scripting',
        description: 'Shell scripting for automation, system administration, and security tasks in Unix/Linux environments.',
        level: 88,
        type: 'skill'
    },
    {
        name: 'Git & GitHub Workflow',
        description: 'Version control and collaborative development using Git and GitHub platforms.',
        level: 92,
        type: 'skill'
    },
    {
        name: 'Android Security',
        description: 'Mobile application security assessment, vulnerability testing, and secure coding practices for Android.',
        level: 70,
        type: 'skill'
    }
];

// Function to load skills into the DOM
function loadSkills() {
    const skillLog = document.getElementById('skill-log');
    
    if (!skillLog) return;
    
    // Clear container
    skillLog.innerHTML = '';
    
    // Add terminal header text
    const headerText = document.createElement('div');
    headerText.className = 'terminal-line';
    headerText.innerHTML = `<span class="terminal-prompt">&gt;</span> <span class="command">./display_skills.sh</span>`;
    skillLog.appendChild(headerText);
    
    // Add loading text
    const loadingText = document.createElement('div');
    loadingText.className = 'terminal-line';
    loadingText.innerHTML = `<span class="terminal-prompt">&gt;</span> Loading skills database...`;
    skillLog.appendChild(loadingText);
    
    // Add skills with delay for terminal effect
    setTimeout(() => {
        // Add success message
        const successText = document.createElement('div');
        successText.className = 'terminal-line';
        successText.innerHTML = `<span class="terminal-prompt">&gt;</span> <span class="success">Database loaded successfully.</span>`;
        skillLog.appendChild(successText);
        
        // Add divider
        const divider = document.createElement('div');
        divider.className = 'terminal-line';
        divider.innerHTML = `<span class="terminal-prompt">&gt;</span> <span class="divider">------------------------------</span>`;
        skillLog.appendChild(divider);
        
        // Add each skill with delay
        skills.forEach((skill, index) => {
            setTimeout(() => {
                const skillItem = createSkillItem(skill);
                skillLog.appendChild(skillItem);
                
                // Animate progress bar
                setTimeout(() => {
                    const progressBar = skillItem.querySelector('.skill-progress-bar');
                    if (progressBar) {
                        progressBar.style.width = `${skill.level}%`;
                    }
                }, 300);
            }, index * 500); // Stagger the appearance of skills
        });
    }, 1000);
}

// Function to create a skill item
function createSkillItem(skill) {
    const item = document.createElement('div');
    item.className = 'skill-item';
    
    // Determine color based on skill type
    let typeColor = skill.type === 'certification' ? 'var(--secondary-color)' : 'var(--primary-color)';
    
    item.innerHTML = `
        <div class="skill-header">
            <span class="terminal-prompt">&gt;</span> 
            <span class="skill-name" style="color: ${typeColor}">${skill.name}</span>
        </div>
        <div class="skill-description">${skill.description}</div>
        <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 0%; background-color: ${typeColor}"></div>
        </div>
        <div class="skill-level">
            <span class="level-text">${skill.level}%</span>
        </div>
    `;
    
    return item;
}

// Add animation when skills section comes into view
function initSkillsAnimation() {
    const skillsSection = document.getElementById('skills');
    const skillLog = document.getElementById('skill-log');
    
    if (!skillsSection || !skillLog) return;
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reset and reload skills when section comes into view
                skillLog.innerHTML = '';
                loadSkills();
                
                // Unobserve after animation is triggered
                observer.unobserve(skillsSection);
            }
        });
    }, { threshold: 0.3 });
    
    // Observe the skills section
    observer.observe(skillsSection);
}

// Add CSS for skills
function addSkillStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .terminal-line {
            margin-bottom: 0.8rem;
            font-family: var(--main-font);
            font-size: 0.95rem;
        }
        
        .command {
            color: var(--accent-color);
            font-weight: 600;
        }
        
        .success {
            color: var(--primary-color);
        }
        
        .divider {
            color: rgba(255, 255, 255, 0.3);
        }
        
        .skill-header {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
        }
        
        .skill-name {
            font-weight: 600;
            margin-left: 0.3rem;
        }
        
        .skill-level {
            display: flex;
            justify-content: flex-end;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.7);
            margin-top: 0.3rem;
        }
    `;
    
    document.head.appendChild(style);
}

// Call the function to add skill styles
addSkillStyles();

// Initialize skills animation when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit before initializing to ensure all elements are loaded
    setTimeout(initSkillsAnimation, 1000);
});