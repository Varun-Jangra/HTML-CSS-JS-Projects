# Sundown Studio - Animated Interactive Web Experience

A high-performance, visually engaging clone inspired by the Sundown Studio agency website. This project focuses on modern web design, seamless smooth scrolling, responsive layouts, and interactive JavaScript animations.

---

## 🚀 Live Demo & Preview

- **Live Site**: [https://sundown-ten-sandy.vercel.app/]
- **Repository**: [https://github.com/Varun-Jangra/HTML-CSS-JS-Projects/tree/main/Sundown]

---

## ✨ Features & Highlights

- **Smooth Scrolling Experience**: Integrated **Locomotive Scroll** to deliver inertia-driven, fluid scrolling mechanics across all viewports.
- **Dynamic Fixed-Image Hover Previews**: Custom JavaScript triggers floating background preview cards as users hover over featured projects.
- **Interactive Preloader Screen**: Animated entry loader sequence using CSS text gradients and keyframes.
- **Infinite Marquee Text Banner**: Seamless horizontal looping text created with custom CSS keyframe animations.
- **Swiper.js Content Carousel**: Responsive touch slider showcasing clients and project background stories.
- **Fluid Morphing Shapes**: Background liquid/gooey glow effect built purely with CSS gradients, keyframe animations, and filter blurs.
- **Full-Screen Responsive Navigation**: Mobile-first overlay navigation menu with animated hamburger toggles.

---

## 🛠️ Tech Stack & Libraries

- **HTML5**: Semantic structure.
- **CSS3**: Custom font faces (`Neue Haas Display`), Flexbox, CSS Variables, `@keyframes`, backdrop filters, and media query breakpoints.
- **JavaScript (ES6+)**: Event delegation, DOM manipulation, state toggles, and library initialization.
- **Locomotive Scroll (v3.5.4)**: Smooth scrolling library.
- **Swiper.js (v11)**: Touch-enabled carousel slider.

---

## 💡 Key Learnings & Technical Insights

1. **Mastering Locomotive Scroll**:
   - Initialized `LocomotiveScroll` on custom container wrappers (`#main`).
   - Dynamically re-calculated scroll dimensions (`scroll.update()`) on full page window loads to maintain correct viewport offsets.

2. **DOM Events & Image Tracking**:
   - Implemented `mouseenter` and `mouseleave` listeners across interactive grid nodes (`.elem`) to dynamically set background images (`data-image`) on a fixed floating target (`.fixed-image`).

3. **Advanced CSS Keyframes & Visual Effects**:
   - Built fluid ambient shapes (`#hero-shape`, `#gooey`) using non-linear animation curves and heavy `blur()` filters.
   - Designed responsive marquee tracks with `translateX(-100%)` keyframe loops.

---

## 🔧 Local Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/Varun-Jangra/HTML-CSS-JS-Projects/tree/main/Sundown]
   ```
