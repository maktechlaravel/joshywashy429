let scrollBooted = false;

// ── NAV SCROLL ──
function bootScrollNav() {
    if (scrollBooted) {
        return;
    }

    scrollBooted = true;

    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');

        if (!navbar) {
            return;
        }

        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ── PAGE SWITCHING ──
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + id);

    if (target) {
        target.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    observeReveal();
}

function setActive(el) {
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    if (el) el.classList.add('active');
}

// ── MOBILE ──
function toggleMobile() {
    const menu = document.getElementById('mobileMenu');
    const ham = document.getElementById('hamburger');

    if (!menu || !ham) {
        return;
    }

    menu.classList.toggle('open');
    ham.classList.toggle('open');
    document.body.classList.toggle('mobile-menu-open', menu.classList.contains('open'));
}

// ── SCROLL REVEAL ──
let revealObserver = null;

function getRevealObserver() {
    if (revealObserver) {
        return revealObserver;
    }

    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (!entry.isIntersecting) {
                return;
            }

            const delay = entry.target.closest('#property-grid, .property-grid') ? 0 : index * 80;
            setTimeout(() => entry.target.classList.add('visible'), delay);
            revealObserver.unobserve(entry.target);
        });
    }, { threshold: 0, rootMargin: '0px 0px 80px 0px' });

    return revealObserver;
}

function revealIfInView(element) {
    const rect = element.getBoundingClientRect();
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top < viewHeight && rect.bottom > 0) {
        element.classList.add('visible');
        return true;
    }

    return false;
}

function observeReveal() {
    const obs = getRevealObserver();

    document.querySelectorAll('.reveal:not(.visible)').forEach((element) => {
        if (revealIfInView(element)) {
            return;
        }

        if (element.dataset.revealBound === 'true') {
            return;
        }

        element.dataset.revealBound = 'true';
        obs.observe(element);
    });
}

function bootUi() {
    bootScrollNav();
    observeReveal();

    const menu = document.getElementById('mobileMenu');
    const ham = document.getElementById('hamburger');

    if (menu && ham && menu.dataset.bound !== 'true') {
        menu.dataset.bound = 'true';

        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                menu.classList.remove('open');
                ham.classList.remove('open');
                document.body.classList.remove('mobile-menu-open');
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                menu.classList.remove('open');
                ham.classList.remove('open');
                document.body.classList.remove('mobile-menu-open');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', bootUi);
document.addEventListener('site-components-loaded', () => {
    bootUi();
    requestAnimationFrame(() => observeReveal());
});
window.addEventListener('load', () => observeReveal());

window.observeReveal = observeReveal;
