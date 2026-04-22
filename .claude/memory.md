# memory.md — Bo nho ca nhan cua Claude

> Claude su dung file nay de ghi lai nhung dieu quan trong da hoc duoc trong qua trinh lam viec.
> Cap nhat sau moi session lam viec.

---

## Ve du an EnglishUp

- Day la website cua Minh Tri lam tang cho To Trinh — co yeu to cam xuc, khong chi la project thong thuong
- To Trinh dang di lam, nen noi dung phai thiet thuc, huong vao cong viec
- Design phai dep nhu evervault.com — To Trinh la nguoi co thau my

## Quyet dinh thiet ke da duoc chot

- Mau nen: `#0a0a0f` — khong thay doi
- Accent: `#7c3aed` (violet) — la mau thuong hieu chinh
- Font: Inter — khong dung font khac
- Khong dung anh stock — chi icons va so lieu

## Nhung gi hoat dong tot

- Scroll animations voi `data-animate` + IntersectionObserver — To Trinh thich hieu ung nay
- Glass-morphism cards voi `rgba(255,255,255,0.03)` + `backdrop-filter: blur(12px)`
- Gradient text cho headings quan trong

## Nhung gi can tranh

- Khong dung shadow nang — dung glow thay the
- Khong placeholder text — To Trinh muon thay noi dung that
- Khong light mode — dark theme la yeu cau bat buoc

## Trang thai hien tai (2026-04-13)

- `index.html`: Hoan thien phan lon, can test mobile
- `course.html`: Dang xay dung chi tiet tung session
- Pricing section: Chua co so lieu final

## Ghi chu ky thuat

- Lucide Icons qua CDN: `https://unpkg.com/lucide@latest`
- Google Fonts Inter: Weights 400, 500, 600, 700
- Khong co build tool — deploy truc tiep HTML/CSS/JS
