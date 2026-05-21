/**
 * main.js
 * Entry point — initialises all modules.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

  if (sections.length && navLinks.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle(
                'nav__link--active',
                link.getAttribute('href') === '#' + entry.target.id
              );
            });
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => io.observe(s));
  }

  // Pricing toggle logic
  const billingToggleBtn = document.getElementById('billing-toggle');
  if (billingToggleBtn) {
    const dot = billingToggleBtn.querySelector('.pricing-toggle-dot');
    const labelMonthly = document.getElementById('billing-monthly');
    const labelAnnually = document.getElementById('billing-annually');
    
    const basicPrice = document.getElementById('price-basic');
    const proPrice = document.getElementById('price-pro');
    const basicPeriod = document.getElementById('period-basic');
    const proPeriod = document.getElementById('period-pro');
    
    let isAnnual = false;
    
    billingToggleBtn.addEventListener('click', () => {
      isAnnual = !isAnnual;
      
      if (isAnnual) {
        dot.style.transform = 'translateX(24px)';
        labelMonthly.style.color = 'var(--text-secondary)';
        labelAnnually.style.color = 'var(--text-primary)';
        
        if (basicPrice) basicPrice.textContent = '479k';
        if (proPrice) proPrice.textContent = '960k';
        if (basicPeriod) basicPeriod.innerHTML = '/ tháng <span style="font-size:10px; display:block; color:var(--success); margin-top:2px;">Thanh toán theo năm (5.75tr)</span>';
        if (proPeriod) proPeriod.innerHTML = '/ tháng <span style="font-size:10px; display:block; color:var(--success); margin-top:2px;">Thanh toán theo năm (11.5tr)</span>';
      } else {
        dot.style.transform = 'translateX(0)';
        labelMonthly.style.color = 'var(--text-primary)';
        labelAnnually.style.color = 'var(--text-secondary)';
        
        if (basicPrice) basicPrice.textContent = '599k';
        if (proPrice) proPrice.textContent = '1.2tr';
        if (basicPeriod) basicPeriod.textContent = '/ tháng';
        if (proPeriod) proPeriod.textContent = '/ tháng';
      }
    });
  }
});
