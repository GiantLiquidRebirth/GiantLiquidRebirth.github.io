// ===== MAIN JAVASCRIPT FILE =====

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeScrollEffects();
    initializeMobileMenu();
    initializeProfileImage();
    initializeStats();
    initializeVisitCounter();
    initializeLastUpdated();
});

// ===== NAVIGATION =====
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Handle scroll effect on navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Handle smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Handle active navigation link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ===== MOBILE MENU =====
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.publication-item, .project-card, .honor-item, .education-item, .experience-item, .news-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== PROFILE IMAGE =====
function initializeProfileImage() {
    const profileImg = document.getElementById('profile-img');
    
    if (profileImg) {
        // Add loading event to debug
        profileImg.addEventListener('load', function() {
            console.log('✅ Profile image loaded successfully');
            this.style.opacity = '1';
        });
        
        // Set default profile image if not found
        profileImg.addEventListener('error', function() {
            console.log('❌ Profile image failed to load, using fallback');
            this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg width="400" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="400" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" font-size="24" text-anchor="middle" dy=".3em" fill="%236b7280"%3E李月%3C/text%3E%3C/svg%3E';
        });
        
        // Add click effect
        profileImg.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
        
        // Force reload if needed
        if (profileImg.complete && profileImg.naturalHeight === 0) {
            profileImg.src = profileImg.src + '?t=' + Date.now();
        }
    }
}

// ===== STATISTICS =====
function initializeStats() {
    // Animate numbers on scroll
    const stats = document.querySelectorAll('.stat-number');
    
    const animateNumber = (element) => {
        const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        const stepDuration = duration / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Preserve original formatting
            const originalText = element.textContent;
            if (originalText.includes('+')) {
                element.textContent = Math.floor(current) + '+';
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepDuration);
    };
    
    // Observe stats for animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.animated) {
                animateNumber(entry.target);
                entry.target.animated = true;
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
}

// ===== VISIT COUNTER =====
function initializeVisitCounter() {
    const visitCountElement = document.getElementById('visit-count');
    
    if (visitCountElement) {
        // Simple localStorage-based visit counter
        let visitCount = localStorage.getItem('visitCount');
        if (!visitCount) {
            visitCount = Math.floor(Math.random() * 1000) + 500; // Start with random number
        } else {
            visitCount = parseInt(visitCount) + 1;
        }
        
        localStorage.setItem('visitCount', visitCount);
        
        // Animate the counter
        let currentCount = 0;
        const increment = visitCount / 50;
        const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= visitCount) {
                currentCount = visitCount;
                clearInterval(timer);
            }
            visitCountElement.textContent = Math.floor(currentCount).toLocaleString();
        }, 50);
    }
}

// ===== LAST UPDATED =====
function initializeLastUpdated() {
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            timeZone: 'Asia/Shanghai'
        };
        lastUpdatedElement.textContent = now.toLocaleDateString('zh-CN', options);
    }
}

// ===== CITATION COUNT (Google Scholar Integration) =====
function initializeCitationCount() {
    // This would typically integrate with Google Scholar API
    // For demo purposes, we'll use a placeholder
    const citationElement = document.getElementById('citation-count');
    if (citationElement) {
        // Simulate API call delay
        setTimeout(() => {
            const citations = [120, 135, 142, 156, 168];
            const randomCitation = citations[Math.floor(Math.random() * citations.length)];
            citationElement.textContent = randomCitation;
        }, 1000);
    }
}

// ===== PUBLICATION LINKS =====
function initializePublicationLinks() {
    const pubLinks = document.querySelectorAll('.pub-link');
    
    pubLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Show placeholder message for demo
            if (this.textContent.includes('PDF') || this.textContent.includes('Code')) {
                showNotification('论文/代码链接将在正式发布后提供', 'info');
            }
        });
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'info' ? '#2563eb' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        font-size: 0.9rem;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===== UTILITY FUNCTIONS =====
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', function(e) {
    // Press 'h' to go to home/about section
    if (e.key.toLowerCase() === 'h' && !e.ctrlKey && !e.metaKey) {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'p' to go to publications section
    if (e.key.toLowerCase() === 'p' && !e.ctrlKey && !e.metaKey) {
        document.querySelector('#publications').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'c' to copy email
    if (e.key.toLowerCase() === 'c' && e.ctrlKey) {
        const email = 'liyue@pku.edu.cn';
        navigator.clipboard.writeText(email).then(() => {
            showNotification('邮箱地址已复制到剪贴板', 'info');
        });
    }
});

// ===== ANIMATIONS CSS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .notification {
        animation: slideInRight 0.3s ease;
    }
`;
document.head.appendChild(style);

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // Could send error reports to analytics service
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // Could send error reports to analytics service
});

// ===== INITIALIZATION COMPLETE =====
console.log('🎉 李月的个人网站加载完成！');
console.log('💡 快捷键: h-首页, p-论文, Ctrl+C-复制邮箱');

// Initialize additional features after DOM is ready
setTimeout(() => {
    initializeCitationCount();
    initializePublicationLinks();
}, 1000);