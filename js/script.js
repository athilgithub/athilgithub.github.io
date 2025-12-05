/* ============================================
   NAVIGATION & SMOOTH SCROLLING
   ============================================ */

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/* ============================================
   HAMBURGER MENU & MOBILE NAVIGATION
   ============================================ */

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

/* ============================================
   THEME TOGGLE (DARK MODE)
   ============================================ */

const themeToggle = document.getElementById('themeToggle');

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save preference
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

/* ============================================
   FILTER FUNCTIONALITY
   ============================================ */

// Skills Filter
const skillsFilterButtons = document.querySelectorAll('.skills-filter .filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

skillsFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        skillsFilterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // Filter cards
        skillCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

// Certificates Filter
const certificatesFilterButtons = document.querySelectorAll('.certificates-filter .filter-btn');
const certificateCards = document.querySelectorAll('.certificate-card');

certificatesFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        certificatesFilterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        certificateCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

// Projects Filter
const projectsFilterButtons = document.querySelectorAll('.projects-filter .filter-btn');
const projectCards = document.querySelectorAll('.project-card');

projectsFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        projectsFilterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

// Add transition to cards
skillCards.forEach(card => {
    card.style.transition = 'opacity 0.3s ease';
    card.style.opacity = '1';
});

certificateCards.forEach(card => {
    card.style.transition = 'opacity 0.3s ease';
    card.style.opacity = '1';
});

projectCards.forEach(card => {
    card.style.transition = 'opacity 0.3s ease';
    card.style.opacity = '1';
});

/* ============================================
   CONTACT FORM HANDLING
   ============================================ */

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Validate form
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();

        // In a real application, you would send this data to your backend
        // Example using fetch:
        // fetch('your-backend-endpoint', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
    });
}

/* ============================================
   RESUME & CERTIFICATE DOWNLOAD
   ============================================ */

function downloadResume() {
    // Create a sample resume PDF or document
    // For now, this shows an alert. In production, link to your actual resume file.
    
    // Option 1: Direct link to a resume file
    // window.location.href = 'assets/resume.pdf';
    
    // Option 2: Using blob (for demonstration)
    const cvContent = `
    MY RESUME
    ==========
    
    Name: Your Name
    Email: your.email@example.com
    Phone: +1 (555) 123-4567
    
    PROFESSIONAL SUMMARY
    A skilled full-stack developer with expertise in modern web technologies.
    
    EXPERIENCE
    Senior Developer at Company (2022-Present)
    Developer at Previous Company (2020-2022)
    
    SKILLS
    React, Node.js, MongoDB, JavaScript, CSS, HTML
    
    EDUCATION
    Bachelor's Degree in Computer Science
    University Name (2020)
    
    CERTIFICATIONS
    AWS Certified Cloud Practitioner
    Full Stack Web Development Certificate
    `;
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cvContent));
    element.setAttribute('download', 'Resume.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

/* ============================================
   CERTIFICATE DOWNLOAD
   ============================================ */

function downloadCertificate(certName) {
    // Try to download certificate - first try .pdf, then .txt
    let certPath = `assets/certificates/${certName}.pdf`;
    let fileName = `${certName}.pdf`;
    
    // If PDF doesn't exist, try TXT version
    const tryDownload = (path, name) => {
        fetch(path)
            .then(response => {
                if (response.ok) {
                    return response.blob();
                } else {
                    throw new Error('File not found');
                }
            })
            .then(blob => {
                // Create download link
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = name;
                document.body.appendChild(link);
                link.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(link);
            })
            .catch(() => {
                // If PDF fails, try TXT
                if (path.endsWith('.pdf')) {
                    tryDownload(`assets/certificates/${certName}.txt`, `${certName}.txt`);
                } else {
                    // Both failed, show error
                    alert(`Certificate file not found.\n\nTo enable downloads, please:\n1. Save your certificate as ${certName}.pdf\n2. Place it in: assets/certificates/\n\nOr email me for certificate details.`);
                }
            });
    };
    
    tryDownload(certPath, fileName);
}

/* ============================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   ============================================ */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill cards and project cards for animation
document.querySelectorAll('.skill-card, .project-card, .certificate-card').forEach(el => {
    observer.observe(el);
});

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add any additional custom functionality here
console.log('Portfolio loaded successfully!');
