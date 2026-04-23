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
- **Skills:** Xem `.claude/skills/generate-teaching-session.md`

---

## Files quan trong

| File | Vai tro |
|------|---------|
| `index.html` | Trang chu — 5 lesson cards hien tai |
| `css/variables.css` | Design tokens |
| `css/lesson.css` | Styles rieng cho lesson pages (scene frames, video embed, etc.) |
| `js/animations.js` | IntersectionObserver cho scroll animations |
| `.claude/skills/generate-teaching-session.md` | Skill tao lesson tu topic HOAC video |

---

## Nguyen tac tuyet doi khong vi pham

1. Dark theme bat buoc — khong co light mode
2. Mobile-first — test 375px truoc
3. Scroll animations — moi section phai co `data-animate`
4. Khong placeholder text — noi dung that, phu hop muc dich
5. Screenshot sau moi thay doi lon de kiem tra visual

---

## Session Achievements — April 2026

### Lesson Infrastructure
- `css/lesson.css` — shared stylesheet cho tat ca lesson pages
- Scene snapshot component: `.scene-frame`, `.scene-strip`, `.scene-snapshots` — cinematic 16:9 cards voi subtitle, speaker badge, timestamp, Vietnamese translation
- YouTube embed component: `.lesson-video__wrapper` — responsive 16:9 iframe (padding-bottom trick)

### Lessons Published (5 total)

| # | File | Film | Skill day |
|---|------|------|-----------|
| 1 | `lessons/joining-a-meeting.html` | — (topic-based) | Joining a meeting professionally |
| 2 | `lessons/surprise-confidence-reactions.html` | Despicable Me 4 | Surprise, confidence & reactions |
| 3 | `lessons/inside-out-2-anxiety.html` | Inside Out 2 | Self-introduction & self-correction |
| 4 | `lessons/puss-boots-team-friendship.html` | Puss in Boots: The Last Wish | Disagreeing diplomatically |
| 5 | `lessons/elemental-bad-news.html` | Elemental | Delivering bad news professionally |

Moi lesson deu co: YouTube embed → 4 scene snapshot cards → 4 steps → phrases table → 5-question test + answer key → wrap-up.

### Skills & Agents
- `generate-teaching-session.md` cap nhat: dual-mode (Topic Mode + Video Mode)
- Video Mode tu dong tao: YouTube embed HTML + 4 scene-frame cards HTML voi mau sac, dialogue, dich thuat
- Researcher agent chay de tim + rank 7 canh phim hoat hinh (2022–2025) phu hop day tieng Anh

### Infrastructure
- GitHub repo: `https://github.com/newage7631-hue/englishup.git`
- Netlify auto-deploy: push to master → live trong ~60 giay
- `.gitignore` da loai tru `.claude/CLAUDE.local.md`, `settings.local.json`

---

## Optimization & Enhancement Roadmap

Sap xep theo Priority: **High → Medium → Low**

### HIGH — Anh huong truc tiep den trai nghiem hoc

**1. Lesson Index Page (`lessons/index.html`)**
- Hien tai tat ca lesson cards nam tren trang chu → khi co 10+ lessons, trang chu se qua tai
- Tao trang rieng `/lessons/` voi grid + filter theo chu de (Cong so, Tu phim, Email...)
- Trang chu giu 3 lessons noi bat + nut "Xem tat ca bai giang →"

**2. Key Phrase Flashcard Mode**
- Sau moi lesson, them nut "Luyen tu vung" mo flashcard popup
- Flip card: mat truoc = tieng Anh, mat sau = nghia + vi du
- Luu bang `localStorage` — track phrase nao da hoc
- Pure CSS flip animation, khong can library

**3. Progress Tracking (localStorage)**
- Danh dau lesson da hoc xong (checkbox hoac badge "Hoan thanh")
- Hien thi tren trang chu: "Ban da hoc 3/5 bai giang"
- Reset duoc — khong can backend

**4. Audio Pronunciation for Key Phrases**
- Dung Web Speech API (built-in browser, free) de doc to cac key phrases
- Nut speaker icon canh moi phrase trong bang tu vung
- `speechSynthesis.speak()` — khong can API key, khong can file am thanh

---

### MEDIUM — Nang cao chat luong noi dung

**5. More Movie Lessons (Next Queue)**
- Researcher da chon san: Spider-Man: Across the Spider-Verse (storytelling), Kung Fu Panda 4 (negotiation), Migration (concise explanation)
- Dung skill `generate-teaching-session.md` Video Mode de tao nhanh
- Moi thang them 1–2 lessons moi

**6. Topic-Based Lesson Series**
- Hien tai: 4/5 lessons tu phim → them series tu chu de thuc te
- De xuat: "Email writing", "Small talk", "Giving presentations", "Handling objections"
- Dung skill Topic Mode de tao

**7. Print / Export Lesson**
- Nut "In bai giang" → `window.print()` voi CSS `@media print` toi uu
- Loai bo nav, sidebar, video embed khi in
- Giu lai: steps, examples, phrases table, test questions
- Khong can Word — PDF tu browser la du

**8. Related Lessons Panel**
- Cuoi moi lesson, hien thi 2–3 lessons lien quan (cung chu de hoac cung cap do)
- Hard-coded HTML ban dau — sau co the chuyen sang JSON data

---

### LOW — Long-term / Nice-to-have

**9. SEO Optimization**
- Them `<meta name="description">` day du cho tung lesson
- Them `<meta property="og:*">` cho social sharing
- Tao `sitemap.xml` don gian
- Them structured data (JSON-LD) cho Google

**10. PWA — Offline Access**
- Them `manifest.json` + service worker don gian
- Cache CSS, JS, fonts de hoat dong khi mat mang
- "Add to Home Screen" tren mobile

**11. Lesson Search**
- Input search tren trang lessons/index.html
- Filter real-time bang JS: loc theo ten lesson, key phrase, film
- Khong can backend — tim trong DOM hoac JSON

**12. Lesson Rating / Feedback**
- Cuoi moi lesson: 3 emoji reaction (👍 De hieu / 🤔 Kho / 💡 Rat hay)
- Luu vao localStorage — chi la UX, khong gui len server
- Hien thi aggregate tren lesson cards: "92% thay de hieu"

---

## Lesson Template Reminder

Moi lesson page moi PHAI co day du:
1. `data-animate` tren moi `<section>`
2. YouTube embed (neu la Video Mode)
3. 4 scene snapshot cards (neu la Video Mode)
4. 4 lesson steps voi: example → note → practice
5. Phrases table (5–8 phrases)
6. Quick test (Part A fill + Part B MC + Part C open)
7. Answer key (an ban dau, hien khi click)
8. Wrap-up (3 diem chinh + homework + next session)
9. CSS load tu `../css/` (relative path)
10. Footer voi link quay lai `#bai-giang`
