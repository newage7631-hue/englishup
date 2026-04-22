# core_principles.md — Nguyen tac Cot loi

> Nhung nguyen tac BAT BUOC tuyet doi — khong duoc vi pham trong bat ky tinh huong nao.

---

## 1. Dark Theme — Bat Buoc

- Background luon la `#0a0a0f` — khong thay doi
- Khong co light mode tru khi duoc yeu cau ro rang
- Moi surface/card dung `#111118` den `#1a1a24`
- Accent mau duy nhat: `#7c3aed` (violet) gradient sang `#a855f7`

## 2. Mobile-First — Khong Phai Afterthought

- Viet CSS cho mobile truoc, sau do mo rong len desktop
- Test o `375px` (iPhone SE) truoc khi lam bat cu thu gi khac
- Breakpoints bat buoc: `375px` | `640px` | `768px` | `1024px` | `1280px`
- Touch targets: toi thieu `44x44px`
- Khong co horizontal scroll o bat ky kich thuoc man hinh nao
- Navigation: chuyen sang hamburger menu duoi `768px`

## 3. Noi dung That — Khong Placeholder

- Khong bao gio dung "Lorem ipsum" hoac text gia
- Moi noi dung phai phu hop muc dich website: giup To Trinh phat trien su nghiep
- Headings: ngan gon, ro rang, co benefit cu the
- CTA: dong tu hanh dong cu the ("Bat dau hoc", "Xem lo trinh", "Dang ky mien phi")

## 4. Scroll Animations — Moi Section Bat Buoc

- Moi `<section>` PHAI co `data-animate` attribute
- Dung `data-animate-delay="n"` cho items trong grid (stagger effect)
- Hero section: animate ngay khi load, KHONG dung IntersectionObserver
- Chi chay animation 1 lan (`observer.unobserve(entry.target)`)
- Khong dung thu vien ngoai (AOS, GSAP) — giu native, nhe

## 5. Screenshot & Kiem tra Visual

Sau moi thay doi lon:
1. Chup screenshot trang hien tai
2. So sanh voi design goc (`evervault.com_customers_ref=godly.png`)
3. Neu co lech → dieu chinh TRUOC khi move sang buoc tiep
4. **Chua kiem tra visual = chua "xong"**

## 6. Performance La Uu Tien

- Khong load font weights thua (chi 400, 500, 600, 700)
- Khong dung jQuery hay bat ky library khong can thiet
- Khong co JavaScript blocking render
- Images dung `loading="lazy"`

## 7. Accessibility — WCAG AA

- Contrast ratio: toi thieu 4.5:1 cho text thuong, 3:1 cho large text
- `aria-label` cho tat ca icons khong co text
- Focus visible: `outline: 2px solid #7c3aed`
- Semantic HTML — khong dung `<div>` thay `<button>` hoac `<nav>`
