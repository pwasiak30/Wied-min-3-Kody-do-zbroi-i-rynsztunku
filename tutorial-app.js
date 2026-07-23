/* ==========================================================================
   Zakładka "Tutorial zadań" — wyszukiwanie, filtrowanie i renderowanie
   przebiegu zadań głównych i pobocznych z wynikami wyborów.
   Korzysta z globalnych TUTORIAL_QUESTS / CHAPTER_ORDER (tutorial-data.js)
   oraz normalize()/escapeHtml() zdefiniowanych w app.js.
   ========================================================================== */

const tutState = {
  query: "",
  type: "all",
  dlc: "all",
  expanded: new Set()
};

const DLC_LABELS = { base: "Podstawowa gra", hos: "Serca z Kamienia", bw: "Krew i Wino" };
const TYPE_LABELS = { main: "Zadanie główne", side: "Zadanie poboczne" };

function tutQuestMatchesQuery(q, normQuery) {
  if (!normQuery) return true;
  const haystack = [
    q.title, q.summary, q.chapter,
    ...(q.walkthrough || []),
    ...(q.choices || []).flatMap(c => [c.point, c.context, ...(c.options || []).flatMap(o => [o.label, o.outcome])]),
    q.consequences || ""
  ].join(" ");
  return normalize(haystack).includes(normQuery);
}

function tutFilterQuests() {
  const normQuery = normalize(tutState.query);
  return TUTORIAL_QUESTS.filter(q => {
    if (tutState.type !== "all" && q.type !== tutState.type) return false;
    if (tutState.dlc !== "all" && q.dlc !== tutState.dlc) return false;
    if (!tutQuestMatchesQuery(q, normQuery)) return false;
    return true;
  });
}

function renderChoiceBlock(choice) {
  const optionsHtml = (choice.options || []).map(o => `
    <div class="choice-option">
      <span class="opt-label">${escapeHtml(o.label)}</span>
      <p class="opt-outcome">${escapeHtml(o.outcome)}</p>
    </div>
  `).join("");

  return `
    <div class="choice-block">
      <p class="choice-point">${escapeHtml(choice.point)}</p>
      ${choice.context ? `<p class="choice-context">${escapeHtml(choice.context)}</p>` : ""}
      ${optionsHtml}
    </div>
  `;
}

function renderQuestCard(q) {
  const card = document.createElement("article");
  card.className = "quest-card type-" + q.type;
  card.dataset.questId = q.id;
  if (tutState.expanded.has(q.id)) card.classList.add("expanded");

  const walkthroughHtml = (q.walkthrough || []).map(step => `<li>${escapeHtml(step)}</li>`).join("");
  const choicesHtml = (q.choices && q.choices.length)
    ? `<div class="section-label">Wybory i ich wyniki</div>` + q.choices.map(renderChoiceBlock).join("")
    : "";
  const consequencesHtml = q.consequences
    ? `<div class="consequences-box"><strong>Dalsze konsekwencje</strong>${escapeHtml(q.consequences)}</div>`
    : "";

  card.innerHTML = `
    <button class="quest-card-toggle" type="button">
      <div class="quest-title-block">
        <h3>${escapeHtml(q.title)}</h3>
        <div class="quest-meta">
          <span class="badge badge-${q.type}">${TYPE_LABELS[q.type] || q.type}</span>
          <span class="badge badge-dlc">${DLC_LABELS[q.dlc] || q.dlc}</span>
          ${q.choices && q.choices.length ? `<span class="badge badge-dlc">${q.choices.length} ${q.choices.length === 1 ? "wybór" : "wybory/-ów"}</span>` : ""}
        </div>
      </div>
      <span class="quest-toggle-icon">+</span>
    </button>
    <div class="quest-card-body">
      <p class="quest-summary">${escapeHtml(q.summary)}</p>
      ${walkthroughHtml ? `<div class="section-label">Przebieg zadania</div><ol class="walkthrough-list">${walkthroughHtml}</ol>` : ""}
      ${choicesHtml}
      ${consequencesHtml}
    </div>
  `;

  card.querySelector(".quest-card-toggle").addEventListener("click", () => {
    const isExpanded = card.classList.toggle("expanded");
    if (isExpanded) tutState.expanded.add(q.id);
    else tutState.expanded.delete(q.id);
  });

  return card;
}

function renderTutorial() {
  const listEl = document.getElementById("tutResults");
  const emptyEl = document.getElementById("tutEmptyState");
  const countEl = document.getElementById("tutResultCount");

  const filtered = tutFilterQuests();
  listEl.innerHTML = "";

  if (filtered.length === 0) {
    emptyEl.style.display = "block";
    emptyEl.textContent = "Brak wyników. Spróbuj innej nazwy, np. \"Baron\", \"Yennefer\", \"Ciri\", \"Skellige\", \"Dettlaff\", \"Olgierd\".";
    countEl.textContent = "";
    return;
  }
  emptyEl.style.display = "none";
  countEl.textContent = `Znaleziono: ${filtered.length} z ${TUTORIAL_QUESTS.length} zadań`;

  // Grupowanie wg rozdziału, z zachowaniem kolejności CHAPTER_ORDER, a w środku wg pola "order".
  const byChapter = new Map();
  filtered.forEach(q => {
    if (!byChapter.has(q.chapter)) byChapter.set(q.chapter, []);
    byChapter.get(q.chapter).push(q);
  });

  const chapters = [...byChapter.keys()].sort((a, b) => {
    const ai = CHAPTER_ORDER.indexOf(a);
    const bi = CHAPTER_ORDER.indexOf(b);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });

  chapters.forEach(chapter => {
    const quests = byChapter.get(chapter).sort((a, b) => (a.order || 0) - (b.order || 0));

    const heading = document.createElement("div");
    heading.className = "chapter-heading";
    heading.innerHTML = `<span>${escapeHtml(chapter)}</span><span class="chapter-count">(${quests.length})</span>`;
    listEl.appendChild(heading);

    quests.forEach(q => listEl.appendChild(renderQuestCard(q)));
  });
}
window.renderTutorial = renderTutorial;

/* ---------------------------- ZDARZENIA UI ---------------------------- */

const tutSearchInputEl = document.getElementById("tutSearchInput");
tutSearchInputEl.addEventListener("input", () => {
  tutState.query = tutSearchInputEl.value;
  renderTutorial();
});

document.querySelectorAll(".tut-filter").forEach(btn => {
  btn.addEventListener("click", () => {
    const filterType = btn.dataset.filterType;
    const value = btn.dataset.value;

    document.querySelectorAll(`.tut-filter[data-filter-type="${filterType}"]`).forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    tutState[filterType] = value;
    renderTutorial();
  });
});

// Render początkowy (zakładka może nie być widoczna, ale to nie szkodzi).
renderTutorial();
