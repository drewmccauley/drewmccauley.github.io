window.addEventListener("DOMContentLoaded", () => {
        const header = document.getElementById("site-header");
        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!reduceMotion) {
          header.classList.remove("is-visible");
          requestAnimationFrame(() => header.classList.add("is-visible"));
        } else {
          header.classList.add("is-visible");
        }

        const current = location.pathname.split("/").pop() || "index.html";
        document.querySelectorAll(".nav-link").forEach((a) => {
          if (a.getAttribute("href") === current) {
            a.setAttribute("aria-current", "page");
          }
        });
      });

// Reveal-up on scroll (About page and anywhere you use .reveal-up)
(function () {
  const items = document.querySelectorAll('.reveal-up');
  if (!items.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    items.forEach(el => el.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          obs.unobserve(entry.target); // reveal once
        }
      });
    },
    { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
  );

  items.forEach(el => io.observe(el));
})();


document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".about-slide");
    let current = 0;
    const interval = 4000; // 4 seconds

    if (slides.length <= 1) return;

    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, interval);
  });