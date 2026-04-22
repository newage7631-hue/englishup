/**
 * nav.js
 * Mobile navigation toggle + scroll shadow on nav.
 */

(function () {
  'use strict';

  function init() {
    const hamburger = document.querySelector('.nav__hamburger');
    const mobileMenu = document.querySelector('.nav__mobile');
    const nav = document.querySelector('.nav');

    // Hamburger toggle
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('is-open');
        mobileMenu.classList.toggle('is-open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      // Close on link click
      mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('is-open');
          mobileMenu.classList.remove('is-open');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }

    // Nav scroll shadow
    if (nav) {
      const onScroll = () => {
        nav.style.borderBottomColor =
          window.scrollY > 10 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.08)';
      };
      window.addEventListener('scroll', onScroll, { passive: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
