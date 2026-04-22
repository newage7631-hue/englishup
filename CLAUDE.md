# CLAUDE.md

This file provides guidance to Claude Code when working in this project.

---

## Project Overview

**Project Name:** EnglishUp — English Communication Learning Platform

**Created by:** Hoang Minh Tri

**Primary User:** To Trinh
- Co nen tang tieng Anh dai hoc (B1–B2 CEFR)
- Kha nang giao tiep co ban, muon nang cap len muc tu tin va tu nhien
- Dinh huong phat trien su nghiep va mo rong co hoi nghe nghiep quoc te

**Core Purpose:**
Website duoc Minh Tri tao ra danh rieng de giup To Trinh tang cuong kha nang giao tiep bang tieng Anh — khong chi de noi tot hon, ma con de mo rong co hoi nghe nghiep, thang tien trong su nghiep va dinh huong tuong lai ro rang hon.

**Mission Statement (dung trong noi dung website):**
> "Tieng Anh khong chi la ngon ngu — do la chiec ve mo cua cho su nghiep cua ban."

**Goals cu the cho To Trinh:**
1. Giao tiep tu tin trong moi truong lam viec (hop, email, thuyet trinh)
2. Xay dung hinh anh chuyen nghiep voi dong nghiep va doi tac nuoc ngoai
3. Mo rong co hoi nghe nghiep: thang tien, chuyen nganh, lam viec quoc te
4. Dinh huong tuong lai ro rang hon nho kha nang tu bieu dat bang tieng Anh

**Key Sections:**
1. Hero — Tagline manh, CTA ro rang
2. Learning Milestones — Cac moc thanh tuu nguoi dung co the dat duoc
3. Courses — Danh sach khoa hoc theo lo trinh (Basic → Intermediate → Advanced → Business)
4. How It Works — Quy trinh hoc tap
5. Testimonials / Social Proof — Danh gia tu nguoi hoc
6. Pricing — Bang gia ro rang, don gian
7. Footer — Links, lien he

---

## Design System

**Style Reference:** evervault.com/customers — dark, minimal, modern, professional

**Color Palette:**
- Background: `#0a0a0f` (near black)
- Surface / Card: `#111118` — `#1a1a24`
- Border: `#ffffff10` — `#ffffff18` (subtle white borders)
- Primary Accent: `#7c3aed` (violet-600) — gradient sang `#a855f7` (purple-500)
- Text Primary: `#f8fafc`
- Text Secondary: `#94a3b8`
- Text Muted: `#475569`
- Success: `#10b981`

**Typography:**
- Font: `Inter` (primary), fallback `system-ui`
- Heading sizes: 3.5rem / 2.25rem / 1.5rem / 1.125rem
- Body: 1rem, line-height 1.7
- Letter-spacing heading: `-0.02em`
- Font weights: 400 (body), 500 (label), 600 (subheading), 700 (heading)

**Spacing & Layout:**
- Max content width: `1200px`, padding inline `24px`
- Section padding: `96px 0` (desktop), `64px 0` (mobile)
- Card border-radius: `12px` — `16px`
- Gap giua cac cards: `24px`
- Grid: 12-column, responsive (1 → 2 → 3 → 4 col)

**Visual Language:**
- Subtle gradient glow (purple/violet) o hero section
- Glass-morphism nhe cho cards: `background: rgba(255,255,255,0.03)`, `backdrop-filter: blur(12px)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Hover: border sang len `rgba(124,58,237,0.4)`, nhe nang len bang `translateY(-2px)`
- Khong dung shadow nang — dung glow thay the: `box-shadow: 0 0 24px rgba(124,58,237,0.15)`
- Icons: Lucide hoac Heroicons (outline style)
- Khong dung anh stock — dung icons, illustrations, so lieu thay the

**Animations:**
- Transition: `all 0.2s ease` cho hover
- Fade-in on scroll (IntersectionObserver, `opacity 0 → 1`, `translateY 16px → 0`)
- Khong dung animation phuc tap hoac mat nhieu thoi gian load

---

## Tech Stack

- **Framework:** HTML5 + CSS3 + Vanilla JavaScript (hoac Next.js neu can SSR/SEO)
- **Styling:** CSS custom properties (variables) — khong dung framework CSS nhu Tailwind tru khi duoc yeu cau
- **Icons:** Lucide Icons (CDN)
- **Font:** Google Fonts — Inter
- **No build tools** tru khi can thiet — uu tien don gian, deploy nhanh

---

## Development Setup

```bash
# Neu chi dung HTML/CSS/JS
# Mo file index.html truc tiep tren trinh duyet hoac dung Live Server (VS Code extension)

# Neu dung Next.js
npm install
npm run dev
```

---

## Common Commands

```bash
# Kiem tra loi HTML
npx html-validate index.html

# Format code
npx prettier --write .

# Build (neu dung Next.js)
npm run build
npm run start
```

---

## Code Style & Conventions

**General:**
- Tat ca file HTML dung semantic tags: `<section>`, `<article>`, `<nav>`, `<main>`, `<header>`, `<footer>`
- Class names theo BEM hoac descriptive (`.course-card`, `.milestone-badge`, `.hero-cta`)
- CSS variables dinh nghia o `:root` — khong dung hard-coded colors
- Khong dung `!important` tru khi that su can thiet
- Mobile-first responsive design — breakpoints: `640px`, `768px`, `1024px`, `1280px`

**Content Guidelines:**
- Ngon ngu: Tieng Viet cho noi dung website (target users la nguoi Viet)
- Tone: Chuyen nghiep nhung than thien, khich le, ro rang
- Headings: Ngan gon, co action hoac benefit ro rang
- CTA buttons: Dung dong tu hanh dong cu the ("Bat dau hoc", "Xem lo trinh", "Dang ky mien phi")
- Tranh dung jargon ky thuat — giai thich don gian

**Course Structure (Lo trinh hoc):**
1. **Foundation** — Phat am chuan, ngu phap giao tiep co ban
2. **Everyday English** — Hoi thoai hang ngay, tinh huong thuc te
3. **Workplace English** — Email, hop, thuyet trinh, networking
4. **Fluency & Confidence** — Noi tu nhien, dien dat y tuong phuc tap
5. **Advanced Communication** — Tranh luan, thuyet phuc, public speaking

**Milestone Badges** (hien thi nhu achievements):
- "Tu tin chao hoi va gioi thieu ban than"
- "Giao tiep trong moi truong lam viec"
- "Thuyet trinh bang tieng Anh"
- "Tro chuyen tu nhien voi nguoi ban ngu"

---

## File Structure

```
/
├── index.html
├── css/
│   ├── variables.css      # Design tokens
│   ├── base.css           # Reset, typography
│   ├── layout.css         # Grid, containers
│   └── components.css     # Cards, buttons, badges
├── js/
│   ├── main.js            # Init, scroll animations
│   └── nav.js             # Mobile nav toggle
├── assets/
│   └── icons/
└── CLAUDE.md
```

---

## Important Notes for Claude

- **Luon uu tien design dep, sach, chuyen nghiep** — khong them tinh nang phuc tap neu khong duoc yeu cau
- **Moi component phai responsive** — test o 375px, 768px, 1280px
- **Dark theme la bat buoc** — khong co light mode tru khi duoc yeu cau them
- **Khong dung placeholder text** — viet noi dung that, phu hop voi muc dich website
- **Performance la uu tien** — tranh load qua nhieu font weights, optimize CSS
- **Accessibility** — dung `aria-label`, contrast ratio dam bao tieu chuan WCAG AA

---

## Mandatory Rules (BAT BUOC TUYET DOI)

### 1. Screenshot & Design Comparison
Sau moi thay doi lon (them section moi, sua layout, cap nhat component quan trong):
- Chup screenshot trang hien tai
- So sanh voi design goc (`evervault.com_customers_ref=godly.png`) hoac mockup da duoc duyet
- Neu co lech, dieu chinh truoc khi move sang buoc tiep theo
- **Khong duoc coi "xong" neu chua kiem tra visual**

### 2. Mobile Friendly — Bat Buoc
Moi element, section, component deu phai:
- Hoat dong dung tren man hinh `375px` (iPhone SE) tren len
- Breakpoints bat buoc: `375px` | `640px` | `768px` | `1024px` | `1280px`
- Touch targets toi thieu `44x44px`
- Khong co horizontal scroll o bat ky kich thuoc man hinh nao
- Navigation chuyen sang hamburger menu o duoi `768px`
- Font size toi thieu `14px` tren mobile, headings scale xuong hop ly
- Test mobile truoc khi commit — mobile-first, khong phai afterthought

### 3. Scroll Animations — Moi Section Bat Buoc
Moi `<section>` tren trang phai co animation khi scroll vao viewport:

**Implementation chuan (dung IntersectionObserver):**
```javascript
// js/animations.js — load file nay o moi trang
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // chi chay 1 lan
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

**CSS chuan:**
```css
[data-animate] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
[data-animate].is-visible {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger cho nhieu items cung luc */
[data-animate-delay="1"] { transition-delay: 0.1s; }
[data-animate-delay="2"] { transition-delay: 0.2s; }
[data-animate-delay="3"] { transition-delay: 0.3s; }
[data-animate-delay="4"] { transition-delay: 0.4s; }
```

**Quy tac su dung:**
- Them `data-animate` vao wrapper cua moi section
- Them `data-animate-delay="n"` cho tung card/item trong grid de co stagger effect
- Hero section: khong dung IntersectionObserver — animate ngay khi load (`animation-delay`)
- **Khong duoc de section nao khong co animation**
- Khong dung thu vien nang (AOS, GSAP) tru khi duoc yeu cau — giu nhe, native
