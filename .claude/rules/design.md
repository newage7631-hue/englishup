# rules/design.md — Quy tac Thiet ke

> Day la quy tac thiet ke chi tiet cho du an EnglishUp.
> Moi quyet dinh thiet ke phai tuan theo tai lieu nay.

---

## Color System

```css
/* Bat buoc dung variables — khong hard-code colors */
--color-bg:        #0a0a0f;   /* Background chinh */
--color-surface:   #111118;   /* Card, panel */
--color-surface-2: #1a1a24;   /* Card hover, nested */
--color-border:    rgba(255,255,255,0.08);
--color-border-hover: rgba(124,58,237,0.4);

--color-accent:    #7c3aed;   /* Violet primary */
--color-accent-2:  #a855f7;   /* Purple gradient end */

--color-text:      #f8fafc;   /* Text chinh */
--color-text-2:    #94a3b8;   /* Text phu */
--color-text-muted:#475569;   /* Text mo */
--color-success:   #10b981;   /* Mau xanh la thanh cong */
```

---

## Typography Rules

| Element | Size | Weight | Letter-spacing |
|---------|------|--------|----------------|
| H1 | 3.5rem | 700 | -0.02em |
| H2 | 2.25rem | 700 | -0.02em |
| H3 | 1.5rem | 600 | -0.01em |
| H4 | 1.125rem | 600 | 0 |
| Body | 1rem | 400 | 0 |
| Label | 0.875rem | 500 | 0.04em |

**Mobile scaling:**
- H1: 2.25rem tren mobile
- H2: 1.75rem tren mobile
- Minimum font-size: 14px (0.875rem)

---

## Component Patterns

### Card chuan
```css
.card {
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s ease;
}
.card:hover {
  border-color: rgba(124,58,237,0.4);
  transform: translateY(-2px);
  box-shadow: 0 0 24px rgba(124,58,237,0.15);
}
```

### Gradient text
```css
.gradient-text {
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Button primary
```css
.btn-primary {
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  min-height: 44px; /* touch target */
  transition: all 0.2s ease;
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(124,58,237,0.35);
}
```

---

## Layout Rules

- Max width: 1200px, centered
- Padding inline: 24px (mobile), 48px (desktop)
- Section padding: 64px 0 (mobile), 96px 0 (desktop)
- Card gap: 24px
- Grid: CSS Grid, responsive

---

## Accessibility

- Contrast ratio: toi thieu 4.5:1 cho text thuong, 3:1 cho large text
- Focus visible: outline 2px solid #7c3aed
- Touch targets: toi thieu 44x44px
- Alt text cho tat ca images
- ARIA labels cho icons khong co text

---

## Khong duoc dung

- Shadow nang (thay bang glow)
- Anh stock (thay bang icons/so lieu)
- Colors khong nam trong design system
- Border-radius > 20px cho cards
- Animation phuc tap hoac mat nhieu thoi gian load
