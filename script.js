// Form Submission Handler
document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        position: document.getElementById('position').value,
        experience: document.getElementById('experience').value,
        portfolio: document.getElementById('portfolio').value,
        bio: document.getElementById('bio').value,
        motivation: document.getElementById('motivation').value,
        submittedAt: new Date().toLocaleString('ar-SA')
    };

    // Save to localStorage
    let applications = JSON.parse(localStorage.getItem('applications')) || [];
    applications.push(formData);
    localStorage.setItem('applications', JSON.stringify(applications));

    // Log the submission
    console.log('تم استقبال الطلب:', formData);

    // Show success message
    const form = document.getElementById('applicationForm');
    const successMsg = document.getElementById('successMessage');
    
    form.style.display = 'none';
    successMsg.style.display = 'block';

    // Reset form after 3 seconds
    setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        successMsg.style.display = 'none';
    }, 3000);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add animation to role cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.role-card').forEach(card => {
    observer.observe(card);
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-links a.active {
        color: #f97316;
        border-bottom: 2px solid #f97316;
        padding-bottom: 5px;
    }
`;
document.head.appendChild(style);

// Toggle mobile menu if needed
function setupMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.menu-toggle')) {
            const toggleBtn = document.createElement('button');
            toggleBtn.classList.add('menu-toggle');
            toggleBtn.innerHTML = '☰';
            toggleBtn.style.display = 'none'; // Will be shown in CSS when needed
            navbar.querySelector('.container').appendChild(toggleBtn);
        }
    }
}

window.addEventListener('resize', setupMobileMenu);
document.addEventListener('DOMContentLoaded', setupMobileMenu);

// Console welcome message
console.log('%c🎉 مرحباً بك في Prime Clan 🎉', 'font-size: 20px; color: #f97316; font-weight: bold;');
console.log('%cشكراً لتقديمك للانضمام إلى فريقنا الرائع!', 'font-size: 14px; color: #3b82f6;');
