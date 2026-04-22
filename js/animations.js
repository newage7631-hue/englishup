/**
 * animations.js
 * IntersectionObserver-based scroll animations.
 * Each element with [data-animate] fades in once when entering viewport.
 */

(function () {
  'use strict';

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  function init() {
    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
