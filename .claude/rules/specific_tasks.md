# specific_tasks.md — Nhiem vu Cu the

> Huong dan step-by-step cho cac nhiem vu pho bien trong du an EnglishUp.

---

## Them Section Moi

**Thu tu bat buoc:**
1. Doc `index.html` (hoac file dich) truoc khi them bat cu gi
2. Them HTML voi `data-animate` tren section wrapper
3. Them `data-animate-delay="n"` cho tung item trong grid
4. Viet CSS dung variables — khong hard-code
5. Test o 375px → 768px → 1280px
6. Kiem tra hover states
7. Kiem tra contrast ratio

**Template section chuan:**
```html
<section class="[ten-section]" data-animate>
  <div class="container">
    <div class="section-header">
      <span class="section-label">[Label]</span>
      <h2>[Heading chinh]</h2>
      <p>[Mo ta ngan]</p>
    </div>
    <div class="[ten]-grid">
      <div class="[ten]-card" data-animate-delay="1">...</div>
      <div class="[ten]-card" data-animate-delay="2">...</div>
      <div class="[ten]-card" data-animate-delay="3">...</div>
    </div>
  </div>
</section>
```

---

## Them Khoa Hoc Moi

Moi khoa hoc can co:
- **Ten khoa hoc** (tieng Anh)
- **Cap do** (Foundation / Everyday / Workplace / Fluency / Advanced)
- **Mo ta ngan** (1-2 cau, tieng Viet, huong vao benefit)
- **So bai hoc** hoac **thoi luong**
- **Icon Lucide** phu hop noi dung
- **Badge cap do** (mau sac phan biet)

```html
<article class="course-card" data-animate-delay="1">
  <div class="course-icon">
    <i data-lucide="[icon-name]"></i>
  </div>
  <div class="course-badge course-badge--[level]">[Level]</div>
  <h3>[Ten khoa hoc]</h3>
  <p>[Mo ta benefit]</p>
  <div class="course-meta">
    <span>[So bai] bai hoc</span>
    <span>[Thoi gian] gio</span>
  </div>
  <a href="course.html#[id]" class="btn-secondary">Xem chi tiet</a>
</article>
```

---

## Cap nhat Scroll Animations

**Kiem tra section chua co animation:**
```javascript
// Chay trong console de kiem tra
const sectionsWithoutAnimate = document.querySelectorAll('section:not([data-animate])');
console.log('Sections thieu data-animate:', sectionsWithoutAnimate.length);
```

**Them animation cho section cu:**
1. Tim tat ca `<section>` chua co `data-animate`
2. Them attribute vao opening tag
3. Kiem tra `js/animations.js` da duoc load trong HTML

---

## Sua Loi Responsive

Thu tu debug:
1. Mo Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M)
2. Chon "iPhone SE" (375px) — check truoc
3. Tim element bi tran hoac vo layout
4. Inspect element → xem CSS dang apply
5. Sua bang media query, khong phai bang fix cung

Loi pho bien:
```css
/* Fixed width gay tran */
.card { width: 400px; } /* SAI */
.card { width: 100%; max-width: 400px; } /* DUNG */

/* Khong co min-width cho flex/grid */
.grid { display: flex; } /* Co the bi squeeze */
.grid { display: flex; flex-wrap: wrap; } /* DUNG */

/* Font qua lon tren mobile */
h1 { font-size: 3.5rem; } /* Chi cho desktop */
/* Can them: */
@media (max-width: 640px) {
  h1 { font-size: 2.25rem; }
}
```

---

## Toi uu Performance

Khi website chay cham:
1. Kiem tra font weights — xoa nhung weight khong dung
2. Kiem tra JS files — co phai load theo thu tu dung khong
3. Kiem tra CSS — co duplicate rules khong
4. Images — them `loading="lazy"`, nen neu >100KB

**Font toi uu:**
```html
<!-- Chi load weights thuc su dung -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Deploy / Chia se

Vi du chi dung HTML/CSS/JS:
1. Zip toan bo folder (tru `.claude/`, `node_modules/` neu co)
2. Dung Netlify Drop: keo folder vao netlify.com/drop
3. Lay URL chia se voi To Trinh
4. Test URL tren dien thoai thuc

Checklist truoc deploy:
- [ ] Xoa tat ca `console.log`
- [ ] Kiem tra tat ca links hoat dong
- [ ] Test tren dien thoai thuc (khong chi DevTools)
- [ ] Kiem tra tab title phu hop
- [ ] Meta description da viet
