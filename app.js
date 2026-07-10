// =============================================================
// Renders portfolio data (from data.js) into index.html.
// You shouldn't need to edit this file to add content — edit data.js instead.
// =============================================================

const $ = (id) => document.getElementById(id);
const el = (tag, className, html) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
};

// --- Hero + nav ---
$("nav-brand").textContent = portfolio.name;
$("hero-name").textContent = portfolio.name;
$("hero-tagline").textContent = portfolio.tagline;
$("hero-intro").textContent = portfolio.intro;
$("hero-photo").src = portfolio.photo;
$("hero-photo").alt = `${portfolio.name} — profile photo`;

// Clicking the hero photo opens a fullscreen lightbox; click again to close.
$("hero-photo").addEventListener("click", () => {
  const overlay = el("div", "lightbox");
  overlay.appendChild(Object.assign(new Image(), { src: portfolio.photo, alt: "" }));
  overlay.addEventListener("click", () => overlay.remove());
  document.addEventListener("keydown", function esc(e) {
    if (e.key === "Escape") { overlay.remove(); document.removeEventListener("keydown", esc); }
  });
  document.body.appendChild(overlay);
});

// --- Projects ---
const projectsGrid = $("projects-grid");
portfolio.projects.forEach((p) => {
  const card = el("div", "card project");
  card.appendChild(el("h3", null, p.link ? `<a href="${p.link}" target="_blank" rel="noopener">${p.title}</a>` : p.title));
  card.appendChild(el("p", null, p.description));
  if (p.tech?.length) {
    const tags = el("div", "tags");
    p.tech.forEach((t) => tags.appendChild(el("span", "tag", t)));
    card.appendChild(tags);
  }
  projectsGrid.appendChild(card);
});

// --- Experience ---
const expList = $("experience-list");
portfolio.experience.forEach((job) => {
  const card = el("div", "card");
  card.appendChild(el("h3", null, job.role));
  card.appendChild(el("div", "meta", `${job.org} • ${job.period}`));
  if (job.points?.length) {
    const ul = el("ul");
    job.points.forEach((pt) => ul.appendChild(el("li", null, pt)));
    card.appendChild(ul);
  }
  expList.appendChild(card);
});

// --- Education ---
const eduList = $("education-list");
portfolio.education.forEach((e) => {
  const card = el("div", "card");
  card.appendChild(el("h3", null, e.school));
  card.appendChild(el("div", "meta", `${e.degree} • ${e.period}`));
  if (e.note) card.appendChild(el("p", null, e.note));
  eduList.appendChild(card);
});

// --- Skills + certifications ---
const skillsGrid = $("skills-grid");
const renderSkillBlock = (title, items) => {
  const block = el("div", "skill-block");
  block.appendChild(el("h4", null, title));
  const tags = el("div", "tags");
  items.forEach((t) => tags.appendChild(el("span", "tag", t)));
  block.appendChild(tags);
  return block;
};
skillsGrid.appendChild(renderSkillBlock("Languages", portfolio.skills.languages));
skillsGrid.appendChild(renderSkillBlock("Tools", portfolio.skills.tools));
skillsGrid.appendChild(renderSkillBlock("Traits", portfolio.skills.traits));

// Certifications are long strings — render as a list, not pill tags.
const certBlock = el("div", "skill-block cert-block");
certBlock.appendChild(el("h4", null, "Certifications"));
const certList = el("ul", "cert-list");
portfolio.certifications.forEach((c) => certList.appendChild(el("li", null, c)));
certBlock.appendChild(certList);
skillsGrid.appendChild(certBlock);

// --- Contact ---
const links = $("contact-links");
const { github, linkedin, email, phone } = portfolio.social;
if (email) links.appendChild(Object.assign(document.createElement("a"), { href: `mailto:${email}`, textContent: `✉ ${email}` }));
if (github) links.appendChild(Object.assign(document.createElement("a"), { href: github, target: "_blank", rel: "noopener", textContent: "GitHub" }));
if (linkedin) links.appendChild(Object.assign(document.createElement("a"), { href: linkedin, target: "_blank", rel: "noopener", textContent: "LinkedIn" }));
if (phone) links.appendChild(Object.assign(document.createElement("span"), { className: "contact-static", textContent: `☎ ${phone}` }));

// --- Footer ---
$("footer-text").textContent = `© ${new Date().getFullYear()} ${portfolio.name} • ${portfolio.location}`;
