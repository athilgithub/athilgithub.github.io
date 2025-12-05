# My Portfolio

A clean, modern, and fully responsive portfolio website built with HTML, CSS, and JavaScript.

## 📋 Features

✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile  
✅ **Dark Mode Toggle** - Theme switcher with localStorage persistence  
✅ **Smooth Navigation** - Active link highlighting and smooth scrolling  
✅ **Skills Section** - Filterable skill cards organized by category  
✅ **Certificates Section** - Display your credentials with links and downloads  
✅ **Projects Showcase** - Filterable project gallery with tech stack and links  
✅ **Contact Form** - Functional contact form with validation  
✅ **Animations** - Smooth animations and transitions throughout  
✅ **SEO Friendly** - Meta tags and semantic HTML  
✅ **Performance Optimized** - Fast loading and efficient code  

## 🗂️ Project Structure

```
Portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Complete stylesheet with responsive design
├── js/
│   └── script.js          # JavaScript for interactivity
├── images/                # Directory for your images and assets
├── assets/                # Directory for resumes, PDFs, etc.
└── README.md              # This file
```

## 🚀 Quick Start

1. **Open the Portfolio**
   - Simply open `index.html` in your web browser
   - No server or build tools required!

2. **Local Server (Optional)**
   - For best results, run it on a local server
   - Using Python: `python -m http.server 8000`
   - Using Node.js: `npx http-server`
   - Using Live Server in VS Code

3. **View in Browser**
   - Open `http://localhost:8000` in your browser

## ✏️ Customization Guide

### 1. **Update Personal Information**

Open `index.html` and update:

```html
<!-- Hero Section -->
<h1>Welcome to My Portfolio</h1>
<p class="hero-subtitle">Your Title Here</p>

<!-- About Section -->
<p>Your About text here...</p>

<!-- Contact Section -->
<p>your.email@example.com</p>
<p>+1 (555) 123-4567</p>
<p>Your City, Country</p>
```

### 2. **Add Your Skills**

In the Skills section, modify the skill cards:

```html
<div class="skill-card" data-category="frontend">
    <div class="skill-icon">
        <i class="fab fa-react"></i>
    </div>
    <h3>Your Skill</h3>
    <p>Your Level (Expert/Advanced/Intermediate)</p>
</div>
```

**Categories:** frontend, backend, tools

### 3. **Add Your Certificates**

Modify the certificate cards with your actual credentials:

```html
<div class="certificate-card" data-category="web">
    <div class="certificate-header">
        <div class="cert-icon">
            <i class="fas fa-certificate"></i>
        </div>
        <div class="cert-meta">
            <h3>Your Certification Name</h3>
            <p class="cert-issuer">Issuing Organization</p>
        </div>
    </div>
    <p class="cert-date">Issued: Month Year</p>
    <p class="cert-description">Description of your certification</p>
    <div class="cert-buttons">
        <a href="https://your-credential-link.com" class="cert-link" target="_blank">View Credential</a>
        <button class="cert-download" onclick="downloadCertificate('filename')">Download</button>
    </div>
</div>
```

**Categories:** web, cloud, professional

### 4. **Add Your Projects**

Update the project cards with your work:

```html
<div class="project-card" data-category="fullstack">
    <div class="project-image">
        <div class="image-placeholder-dark">
            <i class="fas fa-icon"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p class="project-description">Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="https://github.com/yourrepo" class="link-btn" target="_blank">
                <i class="fab fa-github"></i> View Code
            </a>
            <a href="https://your-project-demo.com" class="link-btn" target="_blank">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

**Categories:** web, mobile, fullstack

### 5. **Update Social Links**

Find the social links section and update the href attributes:

```html
<div class="social-links">
    <a href="https://github.com/yourprofile" target="_blank" aria-label="GitHub">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
    </a>
    <!-- Add more as needed -->
</div>
```

### 6. **Add Resume/CV**

To enable resume download:

1. Add your resume file to the `assets/` directory (e.g., `resume.pdf`)
2. In `js/script.js`, update the `downloadResume()` function:

```javascript
function downloadResume() {
    window.location.href = 'assets/resume.pdf';
}
```

### 7. **Add Profile Images**

1. Save your images in the `images/` directory
2. Replace placeholder divs with actual images:

```html
<!-- Instead of: -->
<div class="image-placeholder">
    <i class="fas fa-user-circle"></i>
</div>

<!-- Use: -->
<img src="images/profile.jpg" alt="Your Name" class="profile-image">
```

### 8. **Customize Colors**

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #0f62fe;      /* Main accent color */
    --secondary-color: #ff6b6b;    /* Secondary accent */
    --text-dark: #1a1a1a;
    --text-light: #666666;
    --bg-light: #ffffff;
    --bg-gray: #f5f5f5;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 769px to 1199px
- **Mobile**: 480px to 768px
- **Small Mobile**: Below 480px

## 🎨 Available Icons

This portfolio uses Font Awesome icons. Visit [fontawesome.com](https://fontawesome.com) for all available icons.

Common icons:
- `fa-react`, `fa-node-js`, `fa-python` - Technologies
- `fa-github`, `fa-linkedin`, `fa-twitter` - Social links
- `fa-certificate` - Credentials
- `fa-project-diagram`, `fa-tasks` - Projects

## 💾 Enable Contact Form

To make the contact form functional, you can use a service like:

1. **Formspree** (Easy, free)
   - Create account at formspree.io
   - Update form action:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
   ```

2. **EmailJS** (JavaScript based)
   - Setup at emailjs.com
   - Integrate with provided JavaScript

## 🌐 Deployment

### Deploy to GitHub Pages (Free)

1. Create a GitHub repository named `yourusername.github.io`
2. Push all files to the repository
3. Your portfolio is live at `https://yourusername.github.io`

### Deploy to Netlify (Free)

1. Push code to GitHub
2. Connect repository to Netlify
3. Automatic deployment on every push

### Deploy to Vercel (Free)

1. Push code to GitHub
2. Import project to Vercel
3. Auto-deployment enabled

## 🔧 Troubleshooting

**Styles not loading?**
- Check file paths in `index.html`
- Make sure CSS file is in `css/` directory

**JavaScript not working?**
- Verify `script.js` path in `index.html`
- Check browser console for errors (F12 > Console)

**Icons not showing?**
- Font Awesome CDN might be blocked
- Check internet connection or add Font Awesome locally

**Dark mode not persisting?**
- localStorage might be disabled
- Check browser privacy settings

## 📝 Tips for Best Results

1. ✅ Keep descriptions concise and impactful
2. ✅ Use high-quality images
3. ✅ Update regularly with new projects
4. ✅ Test on multiple devices
5. ✅ Keep links up-to-date
6. ✅ Optimize images for faster loading
7. ✅ Use descriptive project titles
8. ✅ Add meaningful tech stack tags

## 📄 License

Feel free to use this portfolio template for your personal portfolio.

## 🤝 Support

For issues or questions about the portfolio, refer to the inline comments in the code or customize as needed.

---

**Happy coding! 🚀**
