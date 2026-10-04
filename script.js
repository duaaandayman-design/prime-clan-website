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
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Prime | انضم إلى فريقنا</title>
    <meta
      name="description"
      content="Prime — موقع رسمي لتقديم الطلبات للانضمام ككاتب محتوى، صانع محتوى أو إداري."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="topbar">
      <div class="container topbar-inner">
        <div class="brand">
          <span class="brand-mark">P</span>
          <span>Prime</span>
        </div>

        <nav class="main-nav">
          <a href="#home">الرئيسية</a>
          <a href="#about">من نحن</a>
          <a href="#roles">الوظائف</a>
          <a href="#apply">التقديم</a>
          <a href="#contact">تواصل</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="home" class="hero">
        <div class="container hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">مجتمع إبداعي</p>
            <h1>نصنع محتوى أقوى، وفريقًا أكثر تميزًا.</h1>
            <p class="lead">
              Prime هو بيت الإبداع والاحتراف، نبحث عن أعضاء جدد يملكون الفكرة،
              الطابع، والانضباط ليصنعوا محتوى يترك أثرًا.
            </p>

            <div class="hero-actions">
              <button class="primary-btn" id="goApply">ابدأ التقديم</button>
              <a class="secondary-btn" href="#roles">استعرض الوظائف</a>
            </div>

            <div class="stats-row">
              <div>
                <strong>50+</strong>
                <span>عضو نشط</span>
              </div>
              <div>
                <strong>1000+</strong>
                <span>محتوى منشور</span>
              </div>
              <div>
                <strong>100K</strong>
                <span>متابع</span>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="glass-card">
              <div class="window-bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="mini-panel">
                <p>نحن نبحث عن</p>
                <ul>
                  <li>كاتب محتوى</li>
                  <li>صانع محتوى</li>
                  <li>إداري</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="about section">
        <div class="container">
          <div class="section-head">
            <span>من نحن</span>
            <h2>فريق يكتب المستقبل بطريقة مختلفة</h2>
          </div>

          <div class="about-grid">
            <div class="about-card">
              <p>
                Prime هو مجتمع عربي يعزز الإبداع والتعاون بين مبدعين، كتاب، وصانعي
                محتوى ومديرين يضعون الموهبة في خدمة رسالة قوية.
              </p>
              <p>
                نحن نؤمن بأن الجودة تبدأ بالفكرة، ثم بالعمل المنظم، ثم بالتنفيذ
                المستمر، لذلك نبحث عن أعضاء يملكون شغفًا حقيقيًا بالإنجاز والتعلم.
              </p>
            </div>

            <div class="stats-grid">
              <div class="stat-box">
                <h3>+50</h3>
                <p>عضو نشط</p>
              </div>
              <div class="stat-box">
                <h3>+1000</h3>
                <p>محتوى منشور</p>
              </div>
              <div class="stat-box">
                <h3>+100K</h3>
                <p>متابع</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roles" class="roles section">
        <div class="container">
          <div class="section-head center">
            <span>الوظائف المتاحة</span>
            <h2>اختر المسار المناسب لك</h2>
          </div>

          <div class="roles-grid">
            <article class="role-card">
              <div class="role-icon">✍️</div>
              <h3>كاتب محتوى</h3>
              <p>
                اكتب أفكارًا قوية، مقالات احترافية، ومنشورات مميزة تعكس هوية
                الفريق.
              </p>
              <ul>
                <li>إتقان اللغة العربية</li>
                <li>قدرة على البحث والتوثيق</li>
                <li>مهارة الابتكار</li>
              </ul>
            </article>

            <article class="role-card">
              <div class="role-icon">🎬</div>
              <h3>صانع محتوى</h3>
              <p>
                قدّم محتوى بصريًا جذابًا عبر الصور والفيديوهات والتقنيات الحديثة.
              </p>
              <ul>
                <li>مهارة في التحرير</li>
                <li>إلمام بأدوات التصميم</li>
                <li>حس بصري قوي</li>
              </ul>
            </article>

            <article class="role-card">
              <div class="role-icon">⚙️</div>
              <h3>إداري</h3>
              <p>
                المنظم الذي يضمن تنفيذ المشاريع بسلاسة داخل الفريق وتنسيق الجهود.
              </p>
              <ul>
                <li>مهارة تنظيمية عالية</li>
                <li>قدرة على التنسيق</li>
                <li>حل المشكلات</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="apply" class="apply section">
        <div class="container">
          <div class="section-head center">
            <span>التقديم</span>
            <h2>قدّم طلبك الآن</h2>
          </div>

          <form class="apply-form" id="applicationForm">
            <div class="form-grid">
              <div class="field">
                <label for="name">الاسم الكامل</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div class="field">
                <label for="email">البريد الإلكتروني</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div class="field">
                <label for="phone">رقم الهاتف</label>
                <input type="tel" id="phone" name="phone" required />
              </div>

              <div class="field">
                <label for="position">الوظيفة المرغوبة</label>
                <select id="position" name="position" required>
                  <option value="">اختر الوظيفة</option>
                  <option value="writer">كاتب محتوى</option>
                  <option value="creator">صانع محتوى</option>
                  <option value="admin">إداري</option>
                </select>
              </div>

              <div class="field">
                <label for="experience">سنوات الخبرة</label>
                <input type="number" id="experience" name="experience" min="0" required />
              </div>

              <div class="field">
                <label for="portfolio">رابط المحفظة</label>
                <input type="url" id="portfolio" name="portfolio" placeholder="https://..." />
              </div>
            </div>

            <div class="field full">
              <label for="bio">نبذة مختصرة عنك</label>
              <textarea id="bio" name="bio" rows="4" required></textarea>
            </div>

            <div class="field full">
              <label for="motivation">لماذا تريد الانضمام إلى Prime؟</label>
              <textarea id="motivation" name="motivation" rows="4" required></textarea>
            </div>

            <button type="submit" class="primary-btn submit-btn">إرسال الطلب</button>
          </form>

          <div id="successMessage" class="success-message">
            تم استلام طلبك بنجاح، وسنقوم بالتواصل معك قريبًا.
          </div>
        </div>
      </section>

      <section id="contact" class="contact section">
        <div class="container">
          <div class="section-head center">
            <span>تواصل معنا</span>
            <h2>دعنا نبدأ مشروعًا جديدًا معًا</h2>
          </div>

          <div class="contact-box">
            <div class="contact-item">
              <span>📧</span>
              <p>info@prime.com</p>
            </div>
            <div class="contact-item">
              <span>📱</span>
              <p>+966 50 0000 000</p>
            </div>
            <div class="contact-item">
              <span>🌐</span>
              <p>@Prime</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer-inner">
        <p>© 2024 Prime. جميع الحقوق محفوظة.</p>
      </div>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
