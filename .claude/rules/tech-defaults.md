# rules/tech-defaults.md — Mac dinh Ky thuat

> Cac quyet dinh ky thuat mac dinh cho du an EnglishUp.
> Khong thay doi nhung thu nay tru khi co ly do ro rang.

---

## Stack mac dinh

| Hang muc | Lua chon | Ly do |
|----------|----------|-------|
| HTML | HTML5, semantic | SEO, accessibility |
| CSS | Custom properties, no framework | Gon nhe, full control |
| JS | Vanilla ES6+ | Khong can build tool |
| Icons | Lucide Icons (CDN) | Dep, nhe, consistent |
| Font | Google Fonts — Inter | Pro, free, fast |
| Build tool | Khong co | Don gian, deploy nhanh |

---

## CDN Links chuan

```html
<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>

<!-- Google Fonts: Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## File Structure mac dinh

```
/
├── index.html          # Trang chu
├── course.html         # Chi tiet khoa hoc
├── css/
│   ├── variables.css   # Design tokens (:root variables)
│   ├── base.css        # Reset + typography
│   ├── layout.css      # Grid + containers
│   └── components.css  # Cards, buttons, badges, nav
├── js/
│   ├── main.js         # Init + scroll animations
│   ├── nav.js          # Mobile nav toggle
│   └── animations.js   # IntersectionObserver logic
├── assets/
│   └── icons/
└── .claude/
```

---

## HTML Template chuan

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EnglishUp — Ten trang</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/components.css">
</head>
<body>
  <!-- Content -->
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
  <script>lucide.createIcons();</script>
  <script src="js/animations.js"></script>
  <script src="js/nav.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

---

## Breakpoints

```css
/* Mobile first */
/* Default: < 640px (mobile) */
@media (min-width: 640px) { /* Small tablet */ }
@media (min-width: 768px) { /* Tablet / nav switch */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large desktop */ }
```

---

## Animation chuan (IntersectionObserver)

```javascript
// Copy nguyen xi vao js/animations.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

---

## Performance

- Khong load font weights khong dung (chi 400, 500, 600, 700)
- Dung `display=swap` cho Google Fonts
- Minimize inline styles — dung CSS classes
- Khong dung jQuery hoac bat ky library nao tru Lucide
- Lazy load images neu co (dung `loading="lazy"`)
