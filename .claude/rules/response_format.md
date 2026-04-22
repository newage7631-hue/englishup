# response_format.md — Dinh dang Phan hoi

> Claude phai tra loi theo dinh dang nay khi lam viec trong du an EnglishUp.

---

## Nguyen tac chung

- **Ngan gon, tap trung** — khong giai thich cai hien nhien
- **Hanh dong truoc, giai thich sau** — show code truoc, comment sau
- **Khong tom tat lai nhung gi da lam** — nguoi dung co the doc code
- **Neu van de neu co** — khong giau loi hoac lo ngai

---

## Khi nhan yeu cau

**Format phan hoi:**
1. Lam viec ngay (khong hoi lai tru khi that su khong ro)
2. Neu thay doi lon → bao truoc trong 1 cau
3. Show ket qua
4. Neu van de hoac gioi han (neu co)
5. De xuat buoc tiep theo (neu phu hop)

**Vi du phan hoi tot:**
```
Cap nhat section Courses voi 5 khoa hoc theo lo trinh.

[code changes]

Luu y: Pricing section chua co so lieu final — de placeholder "Lien he de biet gia".
Buoc tiep theo: Test mobile o 375px.
```

**Vi du phan hoi khong tot:**
```
Da hoan thanh yeu cau cua ban. Toi da cap nhat section Courses
bang cach them 5 khoa hoc theo lo trinh tu Foundation den Advanced
Communication. Toi da dam bao rang moi khoa hoc co icon, mo ta,
va nut CTA. Toi cung da them hover effect theo design system...
[tiep tuc giai thich nhung gi hien nhien]
```

---

## Khi bao cao "Xong"

Truoc khi noi "xong", Claude PHAI:
- [ ] Da doc file hien tai truoc khi sua
- [ ] Da test visual (hoac ghi ro chua test)
- [ ] Da kiem tra responsive (hoac ghi ro chua test)
- [ ] Khong co console.error obvious
- [ ] Noi dung that, khong placeholder

Format bao cao hoan thanh:
```
Hoan thanh: [Mo ta ngan]
- Thay doi: [Nhung gi da lam, gon]
- Can luu y: [Van de / gioi han neu co]
- Chua test: [Neu co gi chua test]
```

---

## Khi Gap Loi

```
Loi: [Mo ta loi ngan]
Nguyen nhan: [Giai thich ngan]
Giai phap: [Cach sua]

[code fix]
```

---

## Khi Co Nhieu Lua Chon

Neu co >= 2 cach tiep can:
```
Option A: [Ten] — [Uu/nhuoc diem 1 cau]
Option B: [Ten] — [Uu/nhuoc diem 1 cau]

De xuat: Option [X] vi [ly do cu the].
```

---

## Cau hoi Lam ro

Chi hoi lai khi:
- Yeu cau co the hieu theo 2 cach hoan toan khac nhau
- Quyet dinh se anh huong nhieu den sau (pricing, structure)
- Thieu thong tin bat buoc (so lieu, noi dung cu the)

Khong hoi lai khi:
- Co the doan hop ly duoc
- La quyet dinh ky thuat thong thuong
- La preference nho (mau sac, spacing)

---

## Code Blocks

- Luon dung code blocks cho code (```` ```html ````)
- Specify language de highlight dung
- Chi show phan code thay doi, khong copy nguyen file
- Comment giai thich dong kho hieu
