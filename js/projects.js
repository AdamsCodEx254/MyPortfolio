// Projects data and functionality for Joseph Adams' Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize projects
    loadProjects();
});

// Project data
const projects = [
    {
        title: 'Real Estate Search System',
        description: 'A comprehensive real estate search platform with advanced filtering options, map integration, and user authentication.',
        image: 'img/projects/real-estate.jpg',
        technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'Google Maps API'],
        demoLink: '#',
        codeLink: '#',
        glowClass: 'green-glow'
    },
    {
        title: 'InternTrack App',
        description: 'University intern management tool that helps track student internships, company relationships, and performance evaluations.',
        image: 'img/projects/interntrack.jpg',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Authentication'],
        demoLink: '#',
        codeLink: '#',
        glowClass: 'blue-glow'
    },
    {
        title: 'Rental Payment App',
        description: 'Mobile application for rental payments integrated with M-Pesa API, featuring payment tracking, receipts, and landlord dashboard.',
        image: 'img/projects/rental-payment.jpg',
        technologies: ['React Native', 'Firebase', 'M-Pesa API', 'Cloud Functions'],
        demoLink: '#',
        codeLink: '#',
        glowClass: 'purple-glow'
    },
    {
        title: 'Wireless Network Hacking Lab',
        description: 'Educational lab environment for learning about wireless network security, including WPA2 brute force attacks and network monitoring.',
        image: 'img/projects/wireless-lab.jpg',
        technologies: ['Kali Linux', 'Aircrack-ng', 'Python', 'Wireshark', 'Hashcat'],
        demoLink: '#',
        codeLink: '#',
        glowClass: 'green-glow'
    },
    {
        title: 'PGP Email Encryption Demo',
        description: 'Demonstration of secure email communication using PGP encryption with Thunderbird and Mailvelope integration.',
        image: 'img/projects/pgp-email.jpg',
        technologies: ['PGP', 'Thunderbird', 'Mailvelope', 'JavaScript', 'HTML/CSS'],
        demoLink: '#',
        codeLink: '#',
        glowClass: 'blue-glow'
    }
];

// Function to load projects into the DOM
function loadProjects() {
    const projectsContainer = document.querySelector('.projects-container');
    
    if (!projectsContainer) return;
    
    // Clear container
    projectsContainer.innerHTML = '';
    
    // Add each project
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });
    
    // Initialize tilt effect
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.project-card'), {
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.3,
            scale: 1.05
        });
    }
    
    // Add intersection observer for animation
    addProjectAnimations();
}

// Function to create a project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card ${project.glowClass}`;
    
    // Create placeholder image if no image is available
    const imageUrl = project.image || 'img/placeholder.jpg';
    
    // Create technologies list
    const techList = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="project-image-container">
            <div class="project-image" style="background-image: url('${imageUrl}');"></div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${techList}
            </div>
            <div class="project-links">
                <a href="${project.demoLink}" class="btn outline-btn" target="_blank">View Demo</a>
                <a href="${project.codeLink}" class="btn outline-btn" target="_blank">View Code</a>
            </div>
        </div>
    `;
    
    return card;
}

// Function to add animations to project cards
function addProjectAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add animation with delay based on index
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Set initial styles and observe each card
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// Add CSS for project cards
function addProjectStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .project-image-container {
            height: 200px;
            overflow: hidden;
            position: relative;
        }
        
        .project-image {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            transition: transform 0.5s ease;
        }
        
        .project-card:hover .project-image {
            transform: scale(1.1);
        }
        
        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin: 1rem 0;
        }
        
        .tech-tag {
            background-color: rgba(0, 0, 0, 0.3);
            padding: 0.3rem 0.6rem;
            border-radius: 4px;
            font-size: 0.8rem;
            color: var(--text-color);
        }
        
        .green-glow .tech-tag {
            border: 1px solid rgba(0, 255, 65, 0.3);
        }
        
        .blue-glow .tech-tag {
            border: 1px solid rgba(9, 132, 227, 0.3);
        }
        
        .purple-glow .tech-tag {
            border: 1px solid rgba(177, 74, 237, 0.3);
        }
    `;
    
    document.head.appendChild(style);
}

// Call the function to add project styles
addProjectStyles();

// Create placeholder images directory and files
function createPlaceholderImages() {
    // This would normally create actual image files
    // For this implementation, we'll use CSS background colors instead
    const style = document.createElement('style');
    style.textContent = `
        /* Placeholder backgrounds for project images */
        .project-card:nth-child(1) .project-image {
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
        }
        
        .project-card:nth-child(2) .project-image {
            background: linear-gradient(135deg, #2c3e50, #4ca1af);
        }
        
        .project-card:nth-child(3) .project-image {
            background: linear-gradient(135deg, #834d9b, #d04ed6);
        }
        
        .project-card:nth-child(4) .project-image {
            background: linear-gradient(135deg, #093028, #237a57);
        }
        
        .project-card:nth-child(5) .project-image {
            background: linear-gradient(135deg, #1e3c72, #2a5298);
        }
    `;
    
    document.head.appendChild(style);
}

// Call the function to create placeholder images
createPlaceholderImages();