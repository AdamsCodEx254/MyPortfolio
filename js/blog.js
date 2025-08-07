// Blog posts data and functionality for Joseph Adams' Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize blog posts
    loadBlogPosts();
});

// Blog posts data
const blogPosts = [
    {
        title: 'Nmap Scanning: Real-World Recon',
        excerpt: 'A deep dive into using Nmap for reconnaissance in ethical hacking scenarios. Learn about stealth scanning, service detection, and script automation.',
        date: '2025-03-15',
        readTime: '8 min read',
        link: '#',
        tags: ['Nmap', 'Reconnaissance', 'Ethical Hacking']
    },
    {
        title: 'My First Email Spoof Test (Ethical)',
        excerpt: 'Exploring email security vulnerabilities through ethical spoofing tests. This writeup covers SPF, DKIM, and DMARC configurations to prevent email spoofing.',
        date: '2025-02-20',
        readTime: '6 min read',
        link: '#',
        tags: ['Email Security', 'Spoofing', 'DMARC']
    },
    {
        title: 'Wi-Fi Pentesting: WEP vs WPA2 Hands-on',
        excerpt: 'Comparing the security of WEP and WPA2 wireless protocols through practical penetration testing. Includes methodology and mitigation strategies.',
        date: '2025-01-10',
        readTime: '10 min read',
        link: '#',
        tags: ['Wi-Fi Security', 'WPA2', 'Penetration Testing']
    },
    {
        title: 'Ethical Hacking Tools I Use (2025 Edition)',
        excerpt: 'An overview of my essential toolkit for ethical hacking and cybersecurity assessments, including both open-source and commercial solutions.',
        date: '2025-01-05',
        readTime: '7 min read',
        link: '#',
        tags: ['Tools', 'Kali Linux', 'Cybersecurity']
    }
];

// Function to load blog posts into the DOM
function loadBlogPosts() {
    const blogContainer = document.querySelector('.blog-container');
    
    if (!blogContainer) return;
    
    // Clear container
    blogContainer.innerHTML = '';
    
    // Add each blog post
    blogPosts.forEach(post => {
        const blogPost = createBlogPost(post);
        blogContainer.appendChild(blogPost);
    });
    
    // Add animation
    addBlogAnimations();
}

// Function to create a blog post
function createBlogPost(post) {
    const article = document.createElement('article');
    article.className = 'blog-post';
    
    // Create tags HTML
    const tagsHTML = post.tags.map(tag => 
        `<span class="blog-tag">${tag}</span>`
    ).join('');
    
    article.innerHTML = `
        <div class="blog-content">
            <div class="blog-header">
                <div class="terminal-header">
                    <div class="terminal-buttons">
                        <span class="terminal-button close"></span>
                        <span class="terminal-button minimize"></span>
                        <span class="terminal-button maximize"></span>
                    </div>
                    <div class="terminal-title">${post.title.toLowerCase().replace(/\s+/g, '-')}.md</div>
                </div>
            </div>
            <h3 class="blog-title">${post.title}</h3>
            <div class="blog-tags">
                ${tagsHTML}
            </div>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-meta">
                <span class="blog-date">${post.date}</span>
                <span class="blog-read-time">${post.readTime}</span>
            </div>
            <a href="${post.link}" class="read-more">Read Full Article <span class="arrow">→</span></a>
        </div>
    `;
    
    return article;
}

// Function to add animations to blog posts
function addBlogAnimations() {
    const blogPosts = document.querySelectorAll('.blog-post');
    
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
    
    // Set initial styles and observe each post
    blogPosts.forEach(post => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(30px)';
        post.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(post);
    });
}

// Add CSS for blog posts
function addBlogStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .blog-header {
            margin-bottom: 1rem;
        }
        
        .blog-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin: 0.8rem 0;
        }
        
        .blog-tag {
            background-color: rgba(9, 132, 227, 0.2);
            border: 1px solid rgba(9, 132, 227, 0.3);
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-size: 0.8rem;
            color: var(--secondary-color);
        }
        
        .arrow {
            display: inline-block;
            transition: transform 0.3s ease;
        }
        
        .read-more:hover .arrow {
            transform: translateX(5px);
        }
        
        .blog-post .terminal-header {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
    `;
    
    document.head.appendChild(style);
}

// Call the function to add blog styles
addBlogStyles();