# coding_style.md — Phong cach Viet Code

> Quy uoc code cho du an EnglishUp. Tuan theo de codebase nhat quan.

---

## HTML

```html
<!-- Dung semantic tags — LUON LUON -->
<header>, <nav>, <main>, <section>, <article>, <footer>

<!-- Class names: BEM hoac descriptive -->
.hero-cta        <!-- OK -->
.course-card     <!-- OK -->
.div1            <!-- KHONG OK -->

<!-- Moi section can data-animate -->
<section data-animate>
  <div class="card" data-animate-delay="1">...</div>
  <div class="card" data-animate-delay="2">...</div>
</section>

<!-- Lang attribute bat buoc -->
<html lang="vi">
```

## CSS

```css
/* Variables o :root — KHONG hard-code colors */
:root {
  --color-bg: #0a0a0f;
  --color-accent: #7c3aed;
  /* ... */
}

/* Dung vay nay */
color: var(--color-text);

/* KHONG dung vay nay */
color: #f8fafc;

/* Mobile-first: default = mobile, media query = mo rong */
.grid {
  display: grid;
  grid-template-columns: 1fr; /* mobile */
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* tablet+ */
  }
}

/* Khong dung !important tru khi that su can */
/* Hover transitions phai co */
.card {
  transition: all 0.2s ease;
}
```

## JavaScript

```javascript
// ES6+ — khong dung var
const observer = new IntersectionObserver(/* ... */);
const cards = document.querySelectorAll('.card');

// Arrow functions cho callbacks
cards.forEach(card => card.classList.add('active'));

// Khong co console.log trong production
// Comment cho logic phuc tap — khong comment cai hien nhien

// Lucide khoi tao SAU khi DOM ready
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});
```

---

## Naming Conventions

| Loai | Convention | Vi du |
|------|-----------|-------|
| CSS class | kebab-case | `.course-card`, `.hero-cta` |
| CSS variable | kebab-case | `--color-accent`, `--spacing-lg` |
| JS function | camelCase | `initAnimations()`, `toggleNav()` |
| JS variable | camelCase | `const courseCards` |
| File | kebab-case | `variables.css`, `nav.js` |

---

## File Organization

```
css/
├── variables.css   # Chi :root variables, khong co gi khac
├── base.css        # Reset + typography
├── layout.css      # Grid, container, section padding
└── components.css  # Cards, buttons, nav, badges

js/
├── animations.js   # IntersectionObserver — doc lap
├── nav.js          # Mobile nav toggle — doc lap
└── main.js         # Init + goi cac module khac
```

---

## Khong Duoc Lam

- `!important` (tru khi that su can)
- Hard-coded colors trong CSS
- `var` (dung `const`/`let`)
- Inline styles (tru khi bat buoc bang JS)
- Class names khong ro nghia (`.div1`, `.box2`)
- Mix tieng Viet va tieng Anh trong code comments (chon 1 ngon ngu)
