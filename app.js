/* ==========================================================================
   Wyszukiwarka zbroi, rynsztunku i kodów - Wiedźmin 3
   Buduje płaski indeks przeszukiwalny z danych w data.js i obsługuje UI.
   ========================================================================== */

function buildIndex() {
  const index = [];

  // Zestawy szkół wiedźmińskich
  DATA.forEach(group => {
    group.items.forEach(item => {
      const tiers = [];
      const maxTier = item.maxTier || 0;
      if (maxTier === 0) {
        tiers.push({ level: 1, label: "Jedyna wersja", code: item.codeBase });
      } else {
        for (let lvl = 1; lvl <= maxTier; lvl++) {
          tiers.push({
            level: lvl,
            label: (item.maxTierLabel && lvl === maxTier) ? item.maxTierLabel : (TIER_LABELS[lvl] || ("Poziom " + lvl)),
            code: `${item.codeBase} ${lvl}`
          });
        }
      }
      index.push({
        name: item.name,
        set: group.set,
        setKey: group.setKey,
        category: item.category,
        rank: group.rank,
        role: group.role,
        stats: item.stats,
        tiers,
        maxCode: tiers[tiers.length - 1].code,
        searchBlob: (item.name + " " + group.set + " " + item.codeBase).toLowerCase()
      });
    });
  });

  // Unikalne bronie
  UNIQUE_WEAPONS.forEach(w => {
    index.push({
      name: w.name,
      set: "Unikalna broń",
      setKey: "unique",
      category: w.category,
      rank: w.rank,
      role: "Unikalna broń spoza zestawów szkół wiedźmińskich.",
      stats: w.stats,
      tiers: [{ level: 1, label: "Jedyna wersja", code: w.code }],
      maxCode: w.code,
      searchBlob: (w.name + " " + w.code).toLowerCase()
    });
  });

  // Inne zestawy pancerzy
  OTHER_ARMOR_SETS.forEach(group => {
    group.items.forEach(item => {
      index.push({
        name: item.name,
        set: group.set,
        setKey: group.setKey,
        category: item.category,
        rank: group.rank,
        role: group.role,
        stats: item.stats || "",
        tiers: [{ level: 1, label: "Jedyna wersja", code: item.code }],
        maxCode: item.code,
        searchBlob: (item.name + " " + group.set + " " + item.code).toLowerCase()
      });
    });
  });

  return index;
}

const INDEX = buildIndex();

function normalize(str) {
  return str.toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "") // usuń diakrytyki (ą,ć,ę...)
    .trim();
}

function search(query) {
  const q = normalize(query);
  if (!q) return [];

  // Czy zapytanie wygląda na kod (np. "Wolf Armor 3", "additem('...')")
  const cleanedCodeQuery = q.replace(/additem\(|'|\)/g, "").trim();

  const results = INDEX.map(entry => {
    let score = 0;
    const nameNorm = normalize(entry.name);
    const setNorm = normalize(entry.set);

    if (nameNorm === q) score += 100;
    else if (nameNorm.includes(q)) score += 50;
    else if (setNorm.includes(q)) score += 30;
    else if (normalize(entry.searchBlob).includes(q)) score += 20;

    // Dopasowanie po kodzie / fragmencie kodu
    entry.tiers.forEach(t => {
      const codeNorm = normalize(t.code);
      if (codeNorm === cleanedCodeQuery) score += 200;
      else if (codeNorm.includes(cleanedCodeQuery) && cleanedCodeQuery.length > 2) score += 40;
    });

    return { entry, score };
  }).filter(r => r.score > 0);

  results.sort((a, b) => b.score - a.score);
  return results.map(r => r.entry);
}

/* ---------------------------- RENDEROWANIE UI ---------------------------- */

const resultsEl = document.getElementById("results");
const inputEl = document.getElementById("searchInput");
const emptyStateEl = document.getElementById("emptyState");
const countEl = document.getElementById("resultCount");
const categoryFilterEl = document.getElementById("categoryFilter");

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = "Skopiowano!";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove("copied");
    }, 1200);
  });
}

function renderCard(entry) {
  const rankInfo = RANK_INFO[entry.rank] || { label: entry.rank, desc: "" };
  const card = document.createElement("article");
  card.className = "card";

  const tiersHtml = entry.tiers.map(t => {
    const isMax = t.code === entry.maxCode;
    return `
      <div class="tier-row ${isMax ? 'tier-max' : ''}">
        <div class="tier-label">
          ${isMax ? '<span class="max-badge">MAX</span>' : ''}
          <span>${t.label}</span>
        </div>
        <div class="tier-code-wrap">
          <code class="tier-code">additem('${escapeHtml(t.code)}')</code>
          <button class="copy-btn" data-code="additem('${escapeHtml(t.code)}')">Kopiuj</button>
        </div>
      </div>`;
  }).join("");

  card.innerHTML = `
    <div class="card-header">
      <div>
        <h3>${escapeHtml(entry.name)}</h3>
        <div class="card-meta">
          <span class="tag category-tag">${CATEGORY_LABELS[entry.category] || entry.category}</span>
          <span class="tag set-tag">${escapeHtml(entry.set)}</span>
          <span class="tag rank-tag rank-${entry.rank}">${rankInfo.label}</span>
        </div>
      </div>
    </div>
    <p class="card-role">${escapeHtml(entry.role)}</p>
    ${entry.stats ? `<p class="card-stats"><strong>Statystyki / działanie:</strong> ${escapeHtml(entry.stats)}</p>` : ""}
    <div class="tiers">
      ${tiersHtml}
    </div>
  `;

  card.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => copyToClipboard(btn.dataset.code, btn));
  });

  return card;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderResults(query) {
  const catFilter = categoryFilterEl.value;
  let results = query.trim() ? search(query) : [];

  if (catFilter !== "all") {
    results = results.filter(r => r.category === catFilter);
  }

  resultsEl.innerHTML = "";

  if (!query.trim()) {
    emptyStateEl.style.display = "block";
    emptyStateEl.textContent = "Zacznij wpisywać nazwę przedmiotu (np. \"Gryf\", \"Aerondight\", \"Mantikora\") lub kod (np. \"Wolf Armor\"), aby zobaczyć wyniki.";
    countEl.textContent = "";
    return;
  }

  if (results.length === 0) {
    emptyStateEl.style.display = "block";
    emptyStateEl.textContent = "Brak wyników. Spróbuj innej nazwy, np. \"Kot\", \"Niedźwiedź\", \"Żmija\", \"Skellige\".";
    countEl.textContent = "";
    return;
  }

  emptyStateEl.style.display = "none";
  countEl.textContent = `Znaleziono: ${results.length}`;
  results.forEach(entry => resultsEl.appendChild(renderCard(entry)));
}

inputEl.addEventListener("input", () => renderResults(inputEl.value));
categoryFilterEl.addEventListener("change", () => renderResults(inputEl.value));

// Renderuj przy starcie (pusty stan)
renderResults("");
