# rules/workflow.md — Quy trinh lam viec

> Quy tac nay ap dung cho moi thay doi trong du an EnglishUp.
> Claude PHAI tuan theo thu tu nay khi lam viec.

---

## Thu tu lam viec chuan

### Buoc 1 — Hieu yeu cau
- Doc ky yeu cau truoc khi viet bat ky code nao
- Neu chua ro, hoi lai — khong doan
- Xac dinh file nao can thay doi

### Buoc 2 — Doc code hien tai
- Luon doc file truoc khi sua
- Khong sua code chua doc
- Kiem tra dependencies (CSS variables, JS functions)

### Buoc 3 — Thuc hien thay doi
- Giu thay doi nho, tap trung
- Khong them tinh nang khong duoc yeu cau
- Giu code don gian, readable

### Buoc 4 — Kiem tra visual (BAT BUOC)
- Mo index.html tren trinh duyet
- Test o 3 kich thuoc: 375px / 768px / 1280px
- So sanh voi design goc neu can

### Buoc 5 — Bao cao
- Mo ta ngan gon nhung gi da lam
- Neu van de neu co
- De xuat buoc tiep theo neu can

---

## Quy tac commit

- Commit message ro rang: `feat:`, `fix:`, `style:`, `refactor:`
- Khong commit file `.claude/CLAUDE.local.md` hoac `settings.local.json`
- Luon test truoc khi commit

---

## Quy tac khi them section moi

1. Them `data-animate` vao section wrapper
2. Them `data-animate-delay="n"` cho tung item trong grid
3. Dam bao responsive o tat ca breakpoints
4. Kiem tra contrast ratio (WCAG AA)
5. Test hover states

---

## Khong duoc lam

- Khong sua nhieu file cung luc neu khong can thiet
- Khong them dependency moi ma khong bao truoc
- Khong xoa code cua nguoi khac ma khong hoi
- Khong dung `!important` trong CSS
