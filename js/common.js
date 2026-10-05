// Page behaviour: contact details from js/config.js, menu, light/dark theme, scroll effects,
// copy-to-clipboard and the Google search data. The page works without it; this adds to it.

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function escapeHtml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Fills elements marked with data-* attributes from PROFILE, so contact details live in one place:
//   data-email        email link (text filled in if the element has no text or icon)
//   data-phone        call link (text filled in if the element has no text or icon)
//   data-link="name"  link to PROFILE.links[name]; with data-show-handle, the handle is shown as its text
//   data-resume       download link to the resume PDF
//   data-year         the current year
function fillProfile() {
  document.querySelectorAll("[data-email]").forEach((el) => {
    el.href = "mailto:" + PROFILE.email;
    if (!el.children.length && !el.textContent.trim()) el.textContent = PROFILE.email;
  });
  document.querySelectorAll("[data-phone]").forEach((el) => {
    el.href = "tel:" + PROFILE.phone.number;
    if (!el.children.length && !el.textContent.trim()) el.textContent = PROFILE.phone.display;
  });
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.href = "https://wa.me/" + PROFILE.whatsapp.number + "?text=" + encodeURIComponent(PROFILE.whatsapp.message);
    if (!el.children.length && !el.textContent.trim()) el.textContent = PROFILE.whatsapp.display;
  });
  document.querySelectorAll("[data-link]").forEach((el) => {
    const link = PROFILE.links[el.dataset.link];
    if (!link) {
      el.closest("li")?.remove();
      return;
    }
    el.href = link.url;
    if (el.hasAttribute("data-show-handle")) el.textContent = link.handle;
  });
  document.querySelectorAll("[data-resume]").forEach((el) => {
    el.href = PROFILE.resume;
    el.setAttribute("download", PROFILE.name.replace(/\s+/g, "-") + "-Resume.pdf");
    el.setAttribute("type", "application/pdf");
  });
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

function currentTheme() {
  const chosen = document.documentElement.dataset.theme;
  if (chosen) return chosen;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function initThemeToggle() {
  const button = document.querySelector(".theme-toggle");
  const label = () => button.setAttribute("aria-label", currentTheme() === "dark" ? "Switch to light theme" : "Switch to dark theme");
  label();
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", label);
  button.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      // Private browsing can block storage; the theme still changes for this visit.
    }
    label();
  });
}

function initMenu() {
  const header = document.getElementById("site-header");
  const toggle = header.querySelector(".nav-toggle");
  const setOpen = (open) => {
    header.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  toggle.addEventListener("click", () => setOpen(!header.classList.contains("is-open")));
  header.querySelectorAll(".nav a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia("(min-width: 900px)").addEventListener("change", () => setOpen(false));
}

// Header gets a solid background once the page scrolls.
function initHeaderScroll() {
  const header = document.getElementById("site-header");
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

// Marks the menu link of the section being read. The intro is watched too, so nothing is marked at the top.
function initActiveSection() {
  const links = new Map();
  document.querySelectorAll('.nav a[href^="#"]').forEach((a) => links.set(a.getAttribute("href").slice(1), a));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.removeAttribute("aria-current"));
        links.get(entry.target.id)?.setAttribute("aria-current", "true");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  ["top", ...links.keys()].forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

// Fades sections in as they scroll into view.
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  items.forEach((el) => observer.observe(el));
}

// A soft light follows the pointer across cards (mouse and pen only).
function initSpotlight() {
  if (reduceMotion || !window.matchMedia("(hover: hover)").matches) return;
  document.querySelectorAll(".spotlight").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const box = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - box.left}px`);
      card.style.setProperty("--my", `${e.clientY - box.top}px`);
    });
  });
}

// Doubles the technology list so the moving row loops without a gap. Skipped for reduced motion.
function initMarquee() {
  const marquee = document.querySelector(".marquee");
  if (!marquee || reduceMotion) return;
  const track = marquee.querySelector(".marquee-track");
  [...track.children].forEach((li) => {
    const copy = li.cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    track.appendChild(copy);
  });
  marquee.classList.add("is-looping");
}

let toastTimer;
function showToast(message) {
  const toast = document.querySelector(".toast");
  toast.innerHTML = `<svg aria-hidden="true" class="icon"><use href="#i-check"></use></svg>${escapeHtml(message)}`;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function initCopyButtons() {
  document.querySelectorAll('[data-copy="email"]').forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(PROFILE.email);
        button.classList.add("is-done");
        setTimeout(() => button.classList.remove("is-done"), 2000);
        showToast("Email address copied");
      } catch (e) {
        window.location.href = "mailto:" + PROFILE.email;
      }
    });
  });
}

// Details for Google search results (schema.org Person).
function addPersonData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: PROFILE.jobTitle,
    description: PROFILE.headline,
    url: PROFILE.siteUrl,
    image: new URL("images/og-image.jpg", PROFILE.siteUrl).href,
    email: "mailto:" + PROFILE.email,
    worksFor: { "@type": "Organization", name: PROFILE.company },
    alumniOf: { "@type": "CollegeOrUniversity", name: "L.D. College of Engineering, Ahmedabad" },
    sameAs: Object.values(PROFILE.links).map((link) => link.url),
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", () => {
  fillProfile();
  initThemeToggle();
  initMenu();
  initHeaderScroll();
  initActiveSection();
  initReveal();
  initSpotlight();
  initMarquee();
  initCopyButtons();
  addPersonData();
});
