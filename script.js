// Smooth scroll for navigation links
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

// Download functions
function downloadForWindows() {
    // Replace with actual download link
    const downloadUrl = 'https://github.com/DAWLab-cse115/DAWLab-FrontEnd/releases/latest/download/DAWLab-Setup-Windows.exe';
    
    // Show download started message
    showDownloadMessage('Windows');
    
    // Trigger download
    window.location.href = downloadUrl;
    
    // Track download (analytics)
    trackDownload('Windows');
}

function downloadForMac() {
    // Replace with actual download link
    const downloadUrl = 'https://github.com/DAWLab-cse115/DAWLab-FrontEnd/releases/latest/download/DAWLab-Setup-macOS.dmg';
    
    // Show download started message
    showDownloadMessage('macOS');
    
    // Trigger download
    window.location.href = downloadUrl;
    
    // Track download (analytics)
    trackDownload('macOS');
}

function downloadForLinux() {
    // Replace with actual download link
    const downloadUrl = 'https://github.com/DAWLab-cse115/DAWLab-FrontEnd/releases/latest/download/DAWLab-Setup-Linux.AppImage';
    
    // Show download started message
    showDownloadMessage('Linux');
    
    // Trigger download
    window.location.href = downloadUrl;
    
    // Track download (analytics)
    trackDownload('Linux');
}

// Show download message
function showDownloadMessage(platform) {
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'download-toast';
    toast.innerHTML = `
        <div class="toast-content">
            <div class="toast-icon">✓</div>
            <div class="toast-text">
                <strong>Download Started</strong>
                <p>DAWLab for ${platform} is downloading...</p>
            </div>
        </div>
    `;
    
    // Add toast styles if not already present
    if (!document.getElementById('toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.innerHTML = `
            .download-toast {
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                background: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                z-index: 10000;
                animation: slideInUp 0.3s ease;
            }
            
            .toast-content {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            
            .toast-icon {
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
            }
            
            .toast-text strong {
                display: block;
                margin-bottom: 0.25rem;
                color: #1a202c;
            }
            
            .toast-text p {
                margin: 0;
                color: #718096;
                font-size: 0.875rem;
            }
            
            @keyframes slideInUp {
                from {
                    transform: translateY(100%);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutDown {
                from {
                    transform: translateY(0);
                    opacity: 1;
                }
                to {
                    transform: translateY(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add toast to page
    document.body.appendChild(toast);
    
    // Remove toast after 5 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOutDown 0.3s ease';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 5000);
}

// Track downloads (replace with actual analytics)
function trackDownload(platform) {
    // Google Analytics example:
    // gtag('event', 'download', {
    //     'event_category': 'Downloads',
    //     'event_label': platform,
    //     'value': 1
    // });
    
    console.log(`Download tracked: ${platform}`);
}

// Auto-detect platform and highlight appropriate download button
function detectPlatform() {
    const userAgent = navigator.userAgent.toLowerCase();
    let platform = 'unknown';
    
    if (userAgent.indexOf('win') !== -1) {
        platform = 'windows';
    } else if (userAgent.indexOf('mac') !== -1) {
        platform = 'mac';
    } else if (userAgent.indexOf('linux') !== -1) {
        platform = 'linux';
    }
    
    // Highlight the detected platform's download button
    if (platform !== 'unknown') {
        const downloadCards = document.querySelectorAll('.download-card');
        downloadCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(platform)) {
                card.style.borderColor = '#667eea';
                card.style.transform = 'scale(1.05)';
            }
        });
    }
}

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
    } else if (currentScroll > lastScroll) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add transition to header
header.style.transition = 'all 0.3s ease';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    detectPlatform();
});

// Add fade-in animation to sections on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards, download cards, and contact cards
document.querySelectorAll('.feature-card, .download-card, .contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});
