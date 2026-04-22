# CLAUDE.md — EnglishUp Project Brain

> File nay la "bo nao du an" — Claude doc file nay dau tien khi lam viec trong project.
> Xem root `CLAUDE.md` de co day du chi tiet. File nay la ban tom tat va mo rong.

---

## Project Identity

**Ten du an:** EnglishUp — English Communication Learning Platform
**Tao boi:** Hoang Minh Tri
**Doi tuong hoc vien:** To Trinh (B1-B2 CEFR, dinh huong nghe nghiep quoc te)

**Muc tieu cot loi:**
Giup To Trinh giao tiep tu tin bang tieng Anh trong moi truong lam viec — hop, email, thuyet trinh, networking voi doi tac nuoc ngoai.

---

## Quick Reference

- **Design:** Dark, minimal, professional (style ref: evervault.com/customers)
- **Stack:** HTML5 + CSS3 + Vanilla JS, no build tools
- **Language:** Tieng Viet cho noi dung, tieng Anh cho code
- **Rules chi tiet:** Xem `.claude/rules/` folder
- **Agents:** Xem `.claude/agents/` folder

---

## Files quan trong

| File | Vai tro |
|------|---------|
| `index.html` | Trang chu chinh |
| `course.html` | Trang chi tiet khoa hoc |
| `css/variables.css` | Design tokens |
| `js/main.js` | Core JS logic |

---

## Nguyen tac tuyet doi khong vi pham

1. Dark theme bat buoc — khong co light mode
2. Mobile-first — test 375px truoc
3. Scroll animations — moi section phai co `data-animate`
4. Khong placeholder text — noi dung that, phu hop muc dich
5. Screenshot sau moi thay doi lon de kiem tra visual
