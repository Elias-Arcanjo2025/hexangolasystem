/**
 * ═══════════════════════════════════════════════════════════
 * HexaNgola Systems — Main Application JavaScript
 * ═══════════════════════════════════════════════════════════
 * 
 * Handles:
 *  - Navbar scroll effect
 *  - Scroll reveal (Intersection Observer)
 *  - Mobile navigation toggle
 *  - Bar chart animation stagger
 *  - Contact form submission
 *  - Hero parallax on mouse move
 *  - Active nav link highlighting
 */

'use strict';

/* ─── DOM References ────────────────────────────────────── */
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelector('.nav-links');
const allNavAnchors = document.querySelectorAll('.nav-links a');
const heroSection = document.getElementById('hero');
const formSuccess = document.getElementById('form-success');
const sections = document.querySelectorAll('section[id]');
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const bars = document.querySelectorAll('.bar');


/* ─── Navbar Scroll Effect ──────────────────────────────── */
function handleNavScroll() {
    mainNav.classList.toggle('scrolled', window.scrollY > 40);
}

/* ─── Active Nav Link Highlight ─────────────────────────── */
function highlightActiveLink() {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) {
            current = sec.id;
        }
    });
    allNavAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--green)' : '';
    });
}

/* ─── Combined Scroll Handler ───────────────────────────── */
function onScroll() {
    handleNavScroll();
    highlightActiveLink();
}

window.addEventListener('scroll', onScroll, { passive: true });


/* ─── Scroll Reveal (Intersection Observer) ─────────────── */
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    }
);

revealElements.forEach(el => revealObserver.observe(el));


/* ─── Mobile Menu Toggle ────────────────────────────────── */
function toggleMenu() {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.cssText = [
            'display:flex!important',
            'flex-direction:column',
            'position:fixed',
            'top:72px',
            'left:0',
            'right:0',
            'background:rgba(5,11,20,0.98)',
            'padding:20px 5%',
            'gap:16px',
            'border-bottom:1px solid rgba(0,230,118,0.15)',
            'backdrop-filter:blur(20px)',
            'z-index:999'
        ].join(';') + ';';
    }
}

// Close mobile menu on link click
allNavAnchors.forEach(a => {
    a.addEventListener('click', () => {
        if (window.innerWidth < 769) {
            navLinks.style.display = 'none';
        }
    });
});

// Make toggleMenu accessible from HTML onclick
window.toggleMenu = toggleMenu;


/* ─── Bar Chart Animation Stagger ───────────────────────── */
bars.forEach((bar, i) => {
    bar.style.animationDelay = (i * 0.12) + 's';
});


/* ─── Contact Form Handler ──────────────────────────────── */
function handleSubmit() {
    if (formSuccess) {
        formSuccess.style.display = 'block';
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 5000);
    }
}

// Make handleSubmit accessible from HTML onclick
window.handleSubmit = handleSubmit;


/* ─── Hero Mouse Parallax ───────────────────────────────── */
if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        document.querySelectorAll('.orb').forEach((orb, i) => {
            const factor = (i + 1) * 12;
            orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
    });
}

/* ─── Initialize Icons ──────────────────────────────────── */
lucide.createIcons();

