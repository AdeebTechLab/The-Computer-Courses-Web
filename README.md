# 🚀 Adeeb Technology Lab — Institute Website Template

## 📋 Project Overview
A premium, modern, and fully responsive static website template for **Adeeb Technology Lab** — a leading technology institute with campuses in **Bahawalpur (21 courses)** and **Islamabad (13 courses)**. The website features 3 main pages: Home, Bahawalpur Campus, and Islamabad Campus.

## ✅ Completed Features

### 🎨 Design & Theme
- **Dark/Light theme toggle** with localStorage persistence (works across all pages)
- Clean, modern, professional design with gradient accents
- **Bahawalpur** — Purple/Indigo gradient theme
- **Islamabad** — Green/Teal gradient theme (unique identity)
- Custom scrollbar styling, glassmorphism effects

### 📄 Pages

#### 1. `index.html` — Main Home Page
- Hero section with animated stats, floating cards illustration
- About section with 6 feature cards
- Courses section (all 34 courses with campus & category filters)
- Campuses section with links to dedicated pages
- Testimonials section
- Contact form + contact info
- Full footer with navigation

#### 2. `bahawalpur.html` — Bahawalpur Campus (21 Courses)
- Dedicated campus hero with stats (21 courses, 3000+ students, 35 trainers, 95% placement)
- Campus info card with address, phone, email, timings
- Category quick-nav cards (Development 9, Design 4, Marketing 3, Data & AI 2, Business 3)
- All 21 courses rendered with animated cards
- "Why Bahawalpur Campus" section (6 reasons)
- Contact form pre-populated with campus courses
- Link to Islamabad campus

#### 3. `islamabad.html` — Islamabad Campus (13 Courses)
- Dedicated campus hero with green/teal theme
- Campus info card with Islamabad-specific details
- Category quick-nav cards (Development 6, Design 2, Marketing 1, Data & AI 2, Business 2)
- All 13 courses with ISB-themed cards (green accents)
- "Why Islamabad Campus" section (6 reasons)
- Contact form pre-populated with campus courses
- Link to Bahawalpur campus

### 🃏 Course Cards (Special Features on ALL Pages)
- **Beautiful card design** with image, description, features
- **Old price with strikethrough** (red line cut) + **New discounted price**
- **Discount badge** (e.g., "44% OFF") or **HOT badge** for trending
- **Campus badge** (purple for BWP, green for ISB)
- **Duration badge** on image overlay
- **Star ratings** with student count
- **Shine effect** on hover
- **3D tilt effect** on desktop hover
- **Staggered animation** on load
- **Enroll button** scrolls to contact form and pre-selects course

### 📱 Responsive Design
- Fully responsive for all screen sizes (mobile, tablet, desktop)
- Mobile hamburger navigation
- Adaptive grid layouts
- Touch-friendly buttons and interactions

## 📁 File Structure
```
├── index.html                (Main home page - all 34 courses)
├── bahawalpur.html           (Bahawalpur campus - 21 courses)
├── islamabad.html            (Islamabad campus - 13 courses)
├── css/
│   ├── style.css             (Main stylesheet with themes)
│   └── campus-page.css       (Campus-specific page styles)
├── js/
│   ├── courses-data.js       (34 courses data array)
│   ├── main.js               (Home page interactivity)
│   └── campus-page.js        (Campus page shared logic)
└── README.md                 (This file)
```

## 🔗 Entry URIs
| Page | Path | Description |
|------|------|-------------|
| Home | `index.html` | Main landing page with all 34 courses |
| Bahawalpur | `bahawalpur.html` | Dedicated page for 21 Bahawalpur courses |
| Islamabad | `islamabad.html` | Dedicated page for 13 Islamabad courses |

### Section Anchors (all pages)
- `#home` — Hero section
- `#courses` — Courses section
- `#contact` — Contact section
- `#categories` — Category nav (campus pages)

## 📊 Courses Breakdown

### Bahawalpur Campus (21 Courses)
| # | Course | Category | Old Price | New Price |
|---|--------|----------|-----------|-----------|
| 1 | Full Stack Web Development | Development | Rs. 45,000 | Rs. 25,000 |
| 2 | Graphic Design Masterclass | Design | Rs. 35,000 | Rs. 18,000 |
| 3 | Python Programming | Development | Rs. 40,000 | Rs. 22,000 |
| 4 | Digital Marketing Pro | Marketing | Rs. 30,000 | Rs. 15,000 |
| 5 | UI/UX Design | Design | Rs. 35,000 | Rs. 19,000 |
| 6 | Mobile App Development | Development | Rs. 50,000 | Rs. 28,000 |
| 7 | WordPress Development | Development | Rs. 25,000 | Rs. 12,000 |
| 8 | Video Editing & Motion Graphics | Design | Rs. 35,000 | Rs. 18,000 |
| 9 | Data Science & Analytics | Data & AI | Rs. 55,000 | Rs. 30,000 |
| 10 | AI & Machine Learning | Data & AI | Rs. 60,000 | Rs. 35,000 |
| 11 | Cyber Security Fundamentals | Development | Rs. 45,000 | Rs. 25,000 |
| 12 | Amazon FBA & E-Commerce | Business | Rs. 40,000 | Rs. 20,000 |
| 13 | Freelancing Mastery | Business | Rs. 20,000 | Rs. 8,000 |
| 14 | AutoCAD & 3D Modeling | Design | Rs. 35,000 | Rs. 18,000 |
| 15 | Microsoft Office Professional | Business | Rs. 15,000 | Rs. 8,000 |
| 16 | Cloud Computing (AWS) | Development | Rs. 50,000 | Rs. 28,000 |
| 17 | Content Writing & Copywriting | Marketing | Rs. 20,000 | Rs. 10,000 |
| 18 | Social Media Management | Marketing | Rs. 25,000 | Rs. 12,000 |
| 19 | Database Management (SQL) | Development | Rs. 30,000 | Rs. 16,000 |
| 20 | IoT & Embedded Systems | Development | Rs. 35,000 | Rs. 20,000 |
| 21 | DevOps & CI/CD Pipeline | Development | Rs. 48,000 | Rs. 27,000 |

### Islamabad Campus (13 Courses)
| # | Course | Category | Old Price | New Price |
|---|--------|----------|-----------|-----------|
| 1 | Full Stack Web Development | Development | Rs. 55,000 | Rs. 32,000 |
| 2 | AI & Machine Learning | Data & AI | Rs. 70,000 | Rs. 42,000 |
| 3 | Cyber Security Advanced | Development | Rs. 60,000 | Rs. 35,000 |
| 4 | Data Science & Analytics | Data & AI | Rs. 55,000 | Rs. 32,000 |
| 5 | Cloud Computing (AWS & Azure) | Development | Rs. 55,000 | Rs. 30,000 |
| 6 | Mobile App Development | Development | Rs. 55,000 | Rs. 30,000 |
| 7 | UI/UX Design Pro | Design | Rs. 45,000 | Rs. 25,000 |
| 8 | Digital Marketing Pro | Marketing | Rs. 40,000 | Rs. 22,000 |
| 9 | Blockchain & Web3 Development | Development | Rs. 60,000 | Rs. 35,000 |
| 10 | Graphic Design Professional | Design | Rs. 42,000 | Rs. 24,000 |
| 11 | Project Management (PMP) | Business | Rs. 50,000 | Rs. 28,000 |
| 12 | Amazon & E-Commerce Business | Business | Rs. 45,000 | Rs. 25,000 |
| 13 | Python & Automation | Development | Rs. 40,000 | Rs. 22,000 |

## 🛠 Technologies Used
- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, Animations, Transitions
- **JavaScript (ES6+)** — DOM manipulation, IntersectionObserver, localStorage
- **Font Awesome 6** — Icons
- **Google Fonts** — Inter & Space Grotesk
- No external JS frameworks (100% vanilla JavaScript)

## 🚀 Recommended Next Steps
1. Replace placeholder images with actual campus/course photos
2. Update contact information (phone, email, address)
3. Add actual social media links
4. Connect contact form to backend (Formspree, EmailJS, etc.)
5. Add individual course detail pages
6. Add a blog section for SEO
7. Integrate Google Maps for campus locations
8. Add WhatsApp chat widget
9. Set up analytics (Google Analytics)
10. Deploy to production via **Publish tab**
