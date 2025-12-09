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
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Create mailto link with form data
        const mailtoLink = `mailto:athils.23cse@kongu.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Show success message
        setTimeout(() => {
            alert('Your default email client should open. If not, please email me directly at athils.23cse@kongu.edu');
            contactForm.reset();
        }, 500);
    });
}

/* ============================================
   RESUME & CERTIFICATE DOWNLOAD
   ============================================ */

function downloadResume() {
    const resumePath = 'assets/resume.pdf';
    const fallbackPath = 'assets/resume.txt';

    const triggerDownload = (blob, filename) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
    };

    // Try PDF first, then TXT fallback, else show guidance
    fetch(resumePath)
        .then(res => {
            if (!res.ok) throw new Error('pdf-missing');
            return res.blob();
        })
        .then(blob => triggerDownload(blob, 'AtHiL_Resume.pdf'))
        .catch(() => {
            fetch(fallbackPath)
                .then(res => {
                    if (!res.ok) throw new Error('txt-missing');
                    return res.blob();
                })
                .then(blob => triggerDownload(blob, 'AtHiL_Resume.txt'))
                .catch(() => {
                    alert('Resume file not found. Please place your resume at assets/resume.pdf (or resume.txt) to enable downloads.');
                });
        });
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

/* ============================================
   VIDEO MODAL FUNCTIONS
   ============================================ */

function openVideoModal(videoSrc) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    const source = document.getElementById('videoSource');
    
    // Clear previous sources
    source.src = videoSrc;
    
    // Force reload
    video.load();
    
    modal.style.display = 'block';
    
    // Try to play, with error handling
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log('Video autoplay prevented:', error);
        });
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    
    modal.style.display = 'none';
    video.pause();
    video.currentTime = 0;
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the video
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        closeVideoModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeVideoModal();
        closeResumeModal();
    }
});

/* ============================================
   RESUME MODAL FUNCTIONS
   ============================================ */

function openResumeModal() {
    const modal = document.getElementById('resumeModal');
    const iframe = document.getElementById('resumeFrame');
    
    iframe.src = 'assets/resume.pdf';
    modal.style.display = 'block';
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
    const modal = document.getElementById('resumeModal');
    const iframe = document.getElementById('resumeFrame');
    
    modal.style.display = 'none';
    iframe.src = 'about:blank';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const videoModal = document.getElementById('videoModal');
    const resumeModal = document.getElementById('resumeModal');
    
    if (event.target === videoModal) {
        closeVideoModal();
    }
    if (event.target === resumeModal) {
        closeResumeModal();
    }
});

// Add any additional custom functionality here
console.log('Portfolio loaded successfully!');
