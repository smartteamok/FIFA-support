"use strict";

/**
 * Component listing.
 *
 * Thirteen components have a full guide and link to their detail page; the other
 * sixteen get an identification card with a replacement request, because the
 * source material has no tutorial for them and inventing one would be worse than
 * saying nothing.
 */

const COPY = {
  en: {
    skipLink: "Skip to component guides",
    pageTitle: "Guides and Resources | FIFA Foundation",
    supportPage: "Support page",
    title: "Guides and Resources",
    intro: "Practical component guides for the Digital Education Programme kits. Choose a component to review its setup, activity and first checks.",
    components: "kit components",
    platform: "learning platform",
    fullGuides: "full module guides",
    browseEyebrow: "Browse the kit",
    browseTitle: "Find a component guide",
    searchLabel: "Search components",
    searchPlaceholder: "Search components",
    filterLabel: "Filter by kit",
    allKits: "All kit components",
    depthLabel: "Filter by content",
    allContent: "All content",
    onlyFull: "Full guides only",
    onlyBasic: "Other components only",
    results: "components shown",
    noResults: "No components match your search. Try another term.",
    openGuide: "Open full guide",
    badgeWiring: "WIRING",
    otherTitle: "Other kit components",
    otherCopy: "These parts have no video tutorial. Use the card to identify the part and request a replacement.",
    noteTitle: "About these resources",
    noteText: "The full guides follow the approved hardware documentation. Troubleshooting marked as proposed is still pending review by the hardware team, and should not replace the safety instructions supplied with the kit.",
  },
  es: {
    skipLink: "Saltar a las guías de componentes",
    pageTitle: "Guías y recursos | FIFA Foundation",
    supportPage: "Página de soporte",
    title: "Guías y recursos",
    intro: "Guías prácticas de los componentes de los kits del Programa de Educación Digital. Elija un componente para revisar su conexión, su actividad y las primeras verificaciones.",
    components: "componentes del kit",
    platform: "plataforma de aprendizaje",
    fullGuides: "guías completas de módulo",
    browseEyebrow: "Explorar el kit",
    browseTitle: "Buscar una guía de componente",
    searchLabel: "Buscar componentes",
    searchPlaceholder: "Buscar componentes",
    filterLabel: "Filtrar por kit",
    allKits: "Todos los componentes",
    depthLabel: "Filtrar por contenido",
    allContent: "Todo el contenido",
    onlyFull: "Solo guías completas",
    onlyBasic: "Solo otros componentes",
    results: "componentes mostrados",
    noResults: "No hay componentes que coincidan con la búsqueda. Pruebe con otro término.",
    openGuide: "Abrir la guía completa",
    badgeWiring: "CONEXIÓN",
    otherTitle: "Otros componentes del kit",
    otherCopy: "Estas piezas no tienen video tutorial. Use la ficha para identificar la pieza y pedir un repuesto.",
    noteTitle: "Sobre estos recursos",
    noteText: "Las guías completas siguen la documentación de hardware aprobada. El diagnóstico marcado como propuesta está pendiente de revisión por el equipo de hardware y no reemplaza las instrucciones de seguridad que vienen con el kit.",
  },
  fr: {
    skipLink: "Aller aux guides des composants",
    pageTitle: "Guides et ressources | FIFA Foundation",
    supportPage: "Page de support",
    title: "Guides et ressources",
    intro: "Guides pratiques des composants des kits du Programme d'éducation numérique. Choisissez un composant pour vérifier sa connexion, son activité et ses premiers contrôles.",
    components: "composants du kit",
    platform: "plateforme d'apprentissage",
    fullGuides: "guides de module complets",
    browseEyebrow: "Parcourir le kit",
    browseTitle: "Trouver un guide de composant",
    searchLabel: "Rechercher des composants",
    searchPlaceholder: "Rechercher des composants",
    filterLabel: "Filtrer par kit",
    allKits: "Tous les composants",
    depthLabel: "Filtrer par contenu",
    allContent: "Tout le contenu",
    onlyFull: "Guides complets seulement",
    onlyBasic: "Autres composants seulement",
    results: "composants affichés",
    noResults: "Aucun composant ne correspond à votre recherche. Essayez un autre terme.",
    openGuide: "Ouvrir le guide complet",
    badgeWiring: "CONNEXION",
    otherTitle: "Autres composants du kit",
    otherCopy: "Ces pièces n'ont pas de tutoriel vidéo. Utilisez la fiche pour identifier la pièce et demander un remplacement.",
    noteTitle: "À propos de ces ressources",
    noteText: "Les guides complets suivent la documentation matérielle validée. Le diagnostic indiqué comme proposition est en attente de validation par l'équipe matériel et ne remplace pas les consignes de sécurité fournies avec le kit.",
  },
  pt: {
    skipLink: "Ir para os guias de componentes",
    pageTitle: "Guias e recursos | FIFA Foundation",
    supportPage: "Página de suporte",
    title: "Guias e recursos",
    intro: "Guias práticos dos componentes dos kits do Programa de Educação Digital. Escolha um componente para rever a conexão, a atividade e as primeiras verificações.",
    components: "componentes do kit",
    platform: "plataforma de aprendizagem",
    fullGuides: "guias completos de módulo",
    browseEyebrow: "Explorar o kit",
    browseTitle: "Encontrar um guia de componente",
    searchLabel: "Pesquisar componentes",
    searchPlaceholder: "Pesquisar componentes",
    filterLabel: "Filtrar por kit",
    allKits: "Todos os componentes",
    depthLabel: "Filtrar por conteúdo",
    allContent: "Todo o conteúdo",
    onlyFull: "Somente guias completos",
    onlyBasic: "Somente outros componentes",
    results: "componentes exibidos",
    noResults: "Nenhum componente corresponde à pesquisa. Tente outro termo.",
    openGuide: "Abrir o guia completo",
    badgeWiring: "CONEXÃO",
    otherTitle: "Outros componentes do kit",
    otherCopy: "Estas peças não têm vídeo tutorial. Use o cartão para identificar a peça e solicitar uma reposição.",
    noteTitle: "Sobre estes recursos",
    noteText: "Os guias completos seguem a documentação de hardware aprovada. O diagnóstico marcado como proposta está pendente de revisão pela equipe de hardware e não substitui as instruções de segurança fornecidas com o kit.",
  },
};

const state = { language: resolveLanguage(), query: "", kit: "all", depth: "all" };

const elements = {
  list: document.getElementById("module-list"),
  otherSection: document.getElementById("other-section"),
  otherList: document.getElementById("other-list"),
  otherCount: document.getElementById("other-count"),
  count: document.getElementById("results-count"),
  empty: document.getElementById("empty-state"),
  languageSelect: document.getElementById("language-select"),
  search: document.getElementById("module-search"),
  kitFilter: document.getElementById("kit-filter"),
  depthFilter: document.getElementById("depth-filter"),
  componentTotal: document.getElementById("component-total"),
  guideTotal: document.getElementById("guide-total"),
};

const t = (key) => COPY[state.language][key] || COPY.en[key] || key;
const componentName = (key) => COMPONENT_NAMES[state.language][key] || COMPONENT_NAMES.en[key] || key;
const kitLabel = (kit) => KIT_LABELS[state.language][kit] || KIT_LABELS.en[kit];

const moduleBySlug = new Map(MODULES.map((entry) => [entry.componentKey, entry]));

function moduleFor(component) {
  return moduleBySlug.get(component.key);
}

function summaryFor(component) {
  const module = moduleFor(component);
  if (module) {
    const copy = MODULE_TEXT[module.slug][state.language] || MODULE_TEXT[module.slug].en;
    return copy.summary;
  }
  return COMPONENT_SUMMARY[state.language][component.key] || COMPONENT_SUMMARY.en[component.key] || "";
}

/** Badges reflect what is published, not what is planned. */
function badgesFor(module) {
  const badges = [];
  if (isVideoPublished(module.video)) badges.push({ text: "VIDEO", kind: "video" });
  if (module.program && module.program.hex) badges.push({ text: ".HEX", kind: "hex" });
  if (module.wiring) badges.push({ text: t("badgeWiring"), kind: "wiring" });
  return badges;
}

function matchesFilters(component) {
  const query = state.query.trim().toLowerCase();
  const matchesKit = state.kit === "all" || component.kit === state.kit;
  const matchesQuery = !query || componentName(component.key).toLowerCase().includes(query) || summaryFor(component).toLowerCase().includes(query);
  return matchesKit && matchesQuery;
}

function renderGuideCard(component) {
  const module = moduleFor(component);
  const badges = badgesFor(module)
    .map((badge) => `<li class="badge is-${badge.kind}">${badge.text}</li>`)
    .join("");

  return `
    <a class="module-card is-linked" href="${escapeHtml(moduleUrl(module.slug))}">
      <div class="module-top">
        <div class="module-image"><img src="${escapeHtml(assetUrl(`components/${component.image}`))}" alt="" loading="lazy"></div>
        <div class="module-summary">
          <p class="module-kicker">${escapeHtml(kitLabel(component.kit))}</p>
          <h3>${escapeHtml(componentName(component.key))}</h3>
          <p>${escapeHtml(summaryFor(component))}</p>
          <ul class="badge-row">${badges}</ul>
        </div>
      </div>
      <p class="card-footer">${escapeHtml(t("openGuide"))} <span aria-hidden="true">→</span></p>
    </a>
  `;
}

function renderBasicCard(component) {
  return `
    <article class="module-card is-basic">
      <div class="module-top">
        <div class="module-image"><img src="${escapeHtml(assetUrl(`components/${component.image}`))}" alt="" loading="lazy"></div>
        <div class="module-summary">
          <p class="module-kicker">${escapeHtml(kitLabel(component.kit))}</p>
          <h3>${escapeHtml(componentName(component.key))}</h3>
          <p>${escapeHtml(summaryFor(component))}</p>
        </div>
      </div>
      <p class="card-footer">
        <a href="${escapeHtml(supportRequestUrl(component.formName))}">${escapeHtml(SHARED_COPY[state.language].requestReplacement)} <span aria-hidden="true">→</span></a>
      </p>
    </article>
  `;
}

function render() {
  const visible = COMPONENTS.filter(matchesFilters);
  const guides = state.depth === "basic" ? [] : visible.filter((component) => moduleFor(component));
  const others = state.depth === "full" ? [] : visible.filter((component) => !moduleFor(component));

  elements.list.innerHTML = guides.map(renderGuideCard).join("");
  elements.list.hidden = guides.length === 0;

  elements.otherList.innerHTML = others.map(renderBasicCard).join("");
  elements.otherSection.hidden = others.length === 0;
  elements.otherCount.textContent = String(others.length);

  const total = guides.length + others.length;
  elements.count.textContent = `${total} ${t("results")}`;
  elements.empty.hidden = total > 0;
  elements.componentTotal.textContent = String(COMPONENTS.length);
  elements.guideTotal.textContent = String(MODULES.length);
}

function applyLanguage(language) {
  state.language = COPY[language] ? language : "en";
  elements.languageSelect.value = state.language;
  document.documentElement.lang = state.language;
  document.title = t("pageTitle");
  window.localStorage.setItem("supportLanguage", state.language);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = COPY[state.language][key] || SHARED_COPY[state.language][key] || COPY.en[key] || key;
  });
  document.querySelectorAll("[data-i18n-kit]").forEach((node) => {
    node.textContent = kitLabel(node.dataset.i18nKit);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  applyTranslationNotice(state.language);

  render();
}

applyLanguage(state.language);

elements.languageSelect.addEventListener("change", () => applyLanguage(elements.languageSelect.value));
elements.search.addEventListener("input", () => {
  state.query = elements.search.value;
  render();
});
elements.kitFilter.addEventListener("change", () => {
  state.kit = elements.kitFilter.value;
  render();
});
elements.depthFilter.addEventListener("change", () => {
  state.depth = elements.depthFilter.value;
  render();
});
