"use strict";

/**
 * Module detail page.
 *
 * Sections are rendered from the data present on the module, never from a fixed
 * template: the source material is uneven, so a module with no program shows no
 * program section and the page index only lists what was actually drawn.
 */

const params = new URLSearchParams(window.location.search);
const slug = params.get("m");
const moduleData = MODULES.find((entry) => entry.slug === slug);

if (!moduleData) {
  window.location.replace(guidesUrl());
}

const state = { language: resolveLanguage() };

const elements = {
  languageSelect: document.getElementById("language-select"),
  breadcrumbs: document.getElementById("breadcrumbs"),
  kit: document.getElementById("module-kit"),
  name: document.getElementById("module-name"),
  summary: document.getElementById("module-summary"),
  chips: document.getElementById("module-chips"),
  photo: document.getElementById("module-photo"),
  content: document.getElementById("module-content"),
  aside: document.getElementById("module-aside"),
};

const label = (key) => MODULE_LABELS[state.language][key] || MODULE_LABELS.en[key] || key;
const shared = (key) => SHARED_COPY[state.language][key] || SHARED_COPY.en[key] || key;
const text = () => MODULE_TEXT[moduleData.slug][state.language] || MODULE_TEXT[moduleData.slug].en;
const componentName = (key) => COMPONENT_NAMES[state.language][key] || COMPONENT_NAMES.en[key] || key;
const partName = (key) => PART_NAMES[state.language][key] || PART_NAMES.en[key] || key;
const wireLabel = (key) => WIRE_LABELS[state.language][key] || WIRE_LABELS.en[key] || key;
const stateLabel = (key) => STATE_LABELS[state.language][key] || STATE_LABELS.en[key] || key;

function videoEmbedUrl(id) {
  switch (VIDEO_PROVIDER) {
    case "cloudflare":
      return `https://customer-${CLOUDFLARE_SUBDOMAIN}.cloudflarestream.com/${id}/iframe?autoplay=true`;
    case "youtube":
      return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    case "vimeo":
      return `https://player.vimeo.com/video/${id}?autoplay=1&dnt=1`;
    default:
      throw new Error(`Unsupported video provider: ${VIDEO_PROVIDER}`);
  }
}

function videoPosterUrl(id) {
  switch (VIDEO_PROVIDER) {
    case "cloudflare":
      return `https://customer-${CLOUDFLARE_SUBDOMAIN}.cloudflarestream.com/${id}/thumbnails/thumbnail.jpg`;
    case "youtube":
      return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    case "vimeo":
      return "";
    default:
      throw new Error(`Unsupported video provider: ${VIDEO_PROVIDER}`);
  }
}

/** Content blocks the module actually has, in page order. */
function availableSections() {
  const copy = text();
  const sections = [];
  if (isVideoPublished(moduleData.video)) sections.push({ id: "video", title: label("videoTitle"), render: renderVideo });
  if (copy.principle) sections.push({ id: "how-it-works", title: label("howTitle"), render: renderHowItWorks });
  if (moduleData.parts) sections.push({ id: "parts", title: label("partsTitle"), render: renderParts });
  if (moduleData.wiring) sections.push({ id: "connection", title: label("connectionTitle"), render: renderConnection });
  if (moduleData.states) sections.push({ id: "states", title: label("statesTitle"), render: renderStates });
  if (moduleData.program) sections.push({ id: "program", title: label("programTitle"), render: renderProgram });
  if (copy.troubleshooting && copy.troubleshooting.length) {
    sections.push({ id: "troubleshooting", title: label("troubleshootingTitle"), render: renderTroubleshooting });
  }
  return sections;
}

function renderVideo() {
  const { video } = moduleData;
  const poster = videoPosterUrl(video.id);
  const posterStyle = poster ? ` style="background-image:url('${escapeHtml(poster)}')"` : "";
  return `
    <div class="video-frame">
      <button class="video-facade" type="button" data-video-id="${escapeHtml(video.id)}"${posterStyle}>
        <span class="video-play" aria-hidden="true"></span>
        <span class="sr-only">${escapeHtml(`${label("videoPlay")} ${componentName(moduleData.componentKey)}`)}</span>
      </button>
    </div>
  `;
}

function renderHowItWorks() {
  const copy = text();
  const where = copy.applications
    ? `<h3>${escapeHtml(label("whereTitle"))}</h3><p>${escapeHtml(copy.applications)}</p>`
    : "";
  return `<p>${escapeHtml(copy.principle)}</p>${where}`;
}

function renderParts() {
  const { parts } = moduleData;
  const pills = parts.list
    .map((part) => `<li><span class="part-qty">${part.qty}</span>${escapeHtml(partName(part.key))}</li>`)
    .join("");
  const figure = parts.image
    ? `<figure class="parts-figure"><img src="${escapeHtml(assetUrl(parts.image))}" alt="${escapeHtml(label("partsTitle"))}" loading="lazy"></figure>`
    : "";
  return `<p class="section-note">${escapeHtml(label("partsNote"))}</p><ul class="part-list">${pills}</ul>${figure}`;
}

function renderConnection() {
  const { wiring } = moduleData;
  const copy = text();
  const figures = [
    { src: wiring.ports, caption: label("wiringPorts") },
    { src: wiring.order, caption: label("wiringOrder") },
    { src: wiring.done, caption: label("wiringDone") },
  ].filter((figure) => figure.src);

  const figureMarkup = figures
    .map(
      (figure) => `
      <figure class="wiring-figure">
        <img src="${escapeHtml(assetUrl(figure.src))}" alt="${escapeHtml(`${componentName(moduleData.componentKey)} — ${figure.caption}`)}" loading="lazy">
        <figcaption>${escapeHtml(figure.caption)}</figcaption>
      </figure>`
    )
    .join("");

  const note = copy.wiringNote ? `<p>${escapeHtml(copy.wiringNote)}</p>` : "";
  const legend = wiring.wires
    ? `<div class="wire-legend">
        <h3>${escapeHtml(label(wiring.wires.every((wire) => wire.color) ? "wireLegend" : "connectionLegend"))}</h3>
        <ul>${wiring.wires
          .map((wire) => {
            const dot = wire.color ? `<span class="wire-dot" style="background:${escapeHtml(wire.color)}"></span>` : "";
            return `<li>${dot}${escapeHtml(wireLabel(wire.key))}</li>`;
          })
          .join("")}</ul>
      </div>`
    : "";

  return `${note}<div class="wiring-grid${figures.length === 1 ? " is-single" : ""}">${figureMarkup}</div>${legend}`;
}

function renderStates() {
  const copy = text();
  const note = copy.statesNote ? `<p>${escapeHtml(copy.statesNote)}</p>` : "";
  const figures = moduleData.states
    .map(
      (entry) => `
      <figure class="wiring-figure">
        <img src="${escapeHtml(assetUrl(entry.image))}" alt="${escapeHtml(stateLabel(entry.key))}" loading="lazy">
        <figcaption><span class="wire-dot" style="background:${escapeHtml(entry.color)}"></span>${escapeHtml(stateLabel(entry.key))}</figcaption>
      </figure>`
    )
    .join("");
  return `${note}<div class="wiring-grid">${figures}</div>`;
}

function renderProgram() {
  const { program } = moduleData;
  const copy = text();
  const description = copy.programming ? `<p>${escapeHtml(copy.programming)}</p>` : "";
  const blocks = program.blocks
    ? `<figure class="blocks-figure"><img src="${escapeHtml(assetUrl(program.blocks))}" alt="${escapeHtml(label("programBlocks"))}" loading="lazy"><figcaption>${escapeHtml(label("programBlocks"))}</figcaption></figure>`
    : "";
  const download = program.hex
    ? `<div class="download-card">
        <p class="download-title">${escapeHtml(label("downloadTitle"))}</p>
        <p class="download-file">${escapeHtml(`${moduleData.slug}.hex`)}</p>
        <a class="download-action" href="${escapeHtml(assetUrl(program.hex))}" download="${escapeHtml(`${moduleData.slug}.hex`)}">${escapeHtml(label("downloadAction"))}</a>
        <p class="download-hint">${escapeHtml(label("downloadHint"))}</p>
      </div>`
    : "";
  return `${description}<div class="program-grid${download ? "" : " is-blocks-only"}">${blocks}${download}</div>`;
}

function renderTroubleshooting() {
  return text()
    .troubleshooting.map(
      (entry) => `
      <details class="issue">
        <summary>${escapeHtml(entry.issue)}</summary>
        <p>${escapeHtml(entry.fix)}</p>
      </details>`
    )
    .join("");
}

function renderClosing() {
  return `
    <section class="closing-card">
      <h2>${escapeHtml(label("stillTitle"))}</h2>
      <p>${escapeHtml(label("stillCopy"))}</p>
      <a class="closing-action" href="${escapeHtml(supportRequestUrl(componentFormName(), state.language))}">${escapeHtml(label("stillAction"))}</a>
    </section>
  `;
}

function componentFormName() {
  const component = COMPONENTS.find((entry) => entry.key === moduleData.componentKey);
  return component ? component.formName : "";
}

function renderAside(sections) {
  const index = sections
    .map((section) => `<li><a href="#${section.id}">${escapeHtml(section.title)}</a></li>`)
    .join("");

  const actions = [];
  if (isVideoPublished(moduleData.video)) {
    actions.push(`<li><a href="#video">${escapeHtml(label("quickVideo"))}</a></li>`);
  }
  if (moduleData.program && moduleData.program.hex) {
    actions.push(
      `<li><a href="${escapeHtml(assetUrl(moduleData.program.hex))}" download="${escapeHtml(`${moduleData.slug}.hex`)}">${escapeHtml(label("quickHex"))}</a></li>`
    );
  }
  actions.push(`<li><a href="${escapeHtml(guidesUrl())}">${escapeHtml(label("quickBack"))}</a></li>`);

  const related = MODULES.filter((entry) => entry.slug !== moduleData.slug)
    .sort((first, second) => Number(second.kit === moduleData.kit) - Number(first.kit === moduleData.kit))
    .slice(0, 4)
    .map(
      (entry) => `
      <li>
        <a href="${escapeHtml(moduleUrl(entry.slug))}">
          <img src="${escapeHtml(componentImageUrl(entry.componentKey))}" alt="" width="44" height="44" loading="lazy">
          <span>${escapeHtml(componentName(entry.componentKey))}</span>
        </a>
      </li>`
    )
    .join("");

  elements.aside.innerHTML = `
    <nav class="aside-block aside-index-block" aria-label="${escapeHtml(label("onThisPage"))}">
      <h2>${escapeHtml(label("onThisPage"))}</h2>
      <ul class="aside-index">${index}</ul>
    </nav>
    <div class="aside-block">
      <h2>${escapeHtml(label("quickActions"))}</h2>
      <ul class="aside-actions">${actions.join("")}</ul>
    </div>
    <div class="aside-block">
      <h2>${escapeHtml(label("relatedTitle"))}</h2>
      <ul class="aside-related">${related}</ul>
    </div>
  `;
}

function renderHero() {
  const copy = text();
  const name = componentName(moduleData.componentKey);

  elements.breadcrumbs.innerHTML = `
    <a href="${escapeHtml(SITE_BASE)}">${escapeHtml(label("breadcrumbSupport"))}</a>
    <span aria-hidden="true">/</span>
    <a href="${escapeHtml(guidesUrl())}">${escapeHtml(label("breadcrumbResources"))}</a>
    <span aria-hidden="true">/</span>
    <span aria-current="page">${escapeHtml(name)}</span>
  `;
  elements.kit.textContent = KIT_LABELS[state.language][moduleData.kit] || KIT_LABELS.en[moduleData.kit];
  elements.name.textContent = name;
  elements.summary.textContent = copy.summary;
  elements.photo.src = componentImageUrl(moduleData.componentKey);
  elements.photo.alt = name;

  const chips = [ROLE_LABELS[state.language][moduleData.role] || ROLE_LABELS.en[moduleData.role], "micro:bit V2"];
  if (isVideoPublished(moduleData.video)) chips.push("VIDEO");
  if (moduleData.program && moduleData.program.hex) chips.push(".HEX");
  elements.chips.innerHTML = chips.map((chip) => `<li>${escapeHtml(chip)}</li>`).join("");

  document.title = `${name} | FIFA Foundation`;
}

function render() {
  document.documentElement.lang = state.language;
  window.localStorage.setItem("supportLanguage", state.language);
  elements.languageSelect.value = state.language;

  renderHero();

  const sections = availableSections();
  elements.content.innerHTML =
    sections
      .map(
        (section) => `
      <section class="module-section" id="${section.id}" aria-labelledby="${section.id}-title">
        <h2 id="${section.id}-title">${escapeHtml(section.title)}</h2>
        ${section.render()}
      </section>`
      )
      .join("") + renderClosing();

  renderAside(sections);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = label(key) !== key ? label(key) : shared(key);
  });

  bindVideoFacade();
}

/** The player iframe is only inserted on click, so the page stays light on mobile. */
function bindVideoFacade() {
  const facade = document.querySelector(".video-facade");
  if (!facade) return;

  facade.addEventListener("click", () => {
    const frame = document.createElement("iframe");
    frame.src = videoEmbedUrl(facade.dataset.videoId);
    frame.title = `${label("videoTitle")} — ${componentName(moduleData.componentKey)}`;
    frame.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    frame.allowFullscreen = true;
    frame.loading = "lazy";
    facade.replaceWith(frame);
  });
}

if (moduleData) {
  elements.languageSelect.addEventListener("change", () => {
    state.language = elements.languageSelect.value;
    render();
  });

  // Teachers print the guide for the classroom, so every answer has to be on paper.
  window.addEventListener("beforeprint", () => {
    document.querySelectorAll(".issue").forEach((issue) => issue.setAttribute("open", ""));
  });

  render();
}
