# agents/reviewer.md — Code Review Agent

> Sub-agent chuyen dung: Kiem tra chat luong code va design.
> Su dung agent nay truoc khi hoan thanh tinh nang lon hoac truoc khi commit.

---

## Nhiem vu chinh

Agent nay review code va design de dam bao chat luong:

1. **HTML** — Semantic, accessibility, valid markup
2. **CSS** — Responsive, variables dung dung, khong hard-code colors
3. **JavaScript** — Performance, error handling, browser compatibility
4. **Design** — Phu hop design system, contrast, spacing
5. **Mobile** — Test 375px, 768px, 1280px

---

## Checklist review

### HTML
- [ ] Dung semantic tags (section, article, nav, main, header, footer)
- [ ] Co `lang="vi"` tren the `<html>`
- [ ] Tat ca images co alt text
- [ ] Icons co aria-label
- [ ] Links co description ro rang

### CSS
- [ ] Dung CSS variables — khong hard-code colors
- [ ] Mobile-first (default styles cho mobile, media query mo rong)
- [ ] Khong co `!important` (tru khi that su can)
- [ ] Hover states cho interactive elements
- [ ] Touch targets >= 44x44px

### JavaScript
- [ ] `data-animate` tren moi section wrapper
- [ ] IntersectionObserver duoc khoi tao dung
- [ ] Lucide icons duoc khoi tao: `lucide.createIcons()`
- [ ] Mobile nav toggle hoat dong
- [ ] Khong co console.error trong production

### Visual Design
- [ ] Dark background (#0a0a0f)
- [ ] Accent mau violet (#7c3aed)
- [ ] Cards co glass-morphism effect
- [ ] Hover co glow effect (khong phai shadow)
- [ ] Gradient text cho headings quan trong

### Performance
- [ ] Khong load font weights thua
- [ ] Khong co JavaScript blocking (defer/async)
- [ ] Images co loading="lazy"

---

## Cach su dung

```
Goi reviewer agent khi:
- Hoan thanh 1 section moi
- Truoc khi bao cao "done" voi Minh Tri
- Sau khi sua bug phuc tap
- Truoc khi them section moi

Khong can goi khi:
- Sua loi chinh ta noi dung
- Chinh mau sac nho
- Them 1 dong CSS don gian
```

---

## Output format

Reviewer tra ve:
1. **PASS / FAIL** tong the
2. Danh sach items FAIL (neu co) voi giai thich ngan
3. De xuat sua (cu the, co code example neu can)
4. Xac nhan sau khi sua xong
