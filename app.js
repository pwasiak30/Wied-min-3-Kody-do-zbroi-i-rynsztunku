/* ==========================================================================
   Wyszukiwarka zbroi, rynsztunku i kodów - Wiedźmin 3
   Buduje płaski indeks przeszukiwalny z danych w data.js / data-extra.js
   i obsługuje UI.
   ========================================================================== */

function tieredEntries(codeBase, maxTier) {
  const tiers = [];
  if (!maxTier || maxTier === 0) {
    tiers.push({ level: 1, label: "Jedyna wersja", code: codeBase });
  } else {
    for (let lvl = 1; lvl <= maxTier; lvl++) {
      tiers.push({ level: lvl, label: TIER_LABELS[lvl] || ("Poziom " + lvl), code: `${codeBase} ${lvl}` });
    }
  }
  return tiers;
}

function buildIndex() {
  const index = [];

  /* ---------- Zestawy szkół wiedźmińskich ---------- */
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
        type: "item", name: item.name, set: group.set, setKey: group.setKey,
        category: item.category, rank: group.rank, role: group.role, stats: item.stats,
        tiers, maxCode: tiers[tiers.length - 1].code,
        searchBlob: (item.name + " " + group.set + " " + item.codeBase).toLowerCase()
      });
    });
  });

  /* ---------- Unikalne bronie ---------- */
  UNIQUE_WEAPONS.forEach(w => {
    index.push({
      type: "item", name: w.name, set: "Unikalna broń", setKey: "unique",
      category: w.category, rank: w.rank, role: "Unikalna broń spoza zestawów szkół wiedźmińskich.",
      stats: w.stats, tiers: [{ level: 1, label: "Jedyna wersja", code: w.code }], maxCode: w.code,
      searchBlob: (w.name + " " + w.code).toLowerCase()
    });
  });

  /* ---------- Inne zestawy pancerzy ---------- */
  OTHER_ARMOR_SETS.forEach(group => {
    group.items.forEach(item => {
      index.push({
        type: "item", name: item.name, set: group.set, setKey: group.setKey,
        category: item.category, rank: group.rank, role: group.role, stats: item.stats || "",
        tiers: [{ level: 1, label: "Jedyna wersja", code: item.code }], maxCode: item.code,
        searchBlob: (item.name + " " + group.set + " " + item.code).toLowerCase()
      });
    });
  });

  /* ---------- Barwniki ---------- */
  DYES.forEach(d => {
    index.push({
      type: "item", name: d.name, set: "Barwniki", setKey: "dye", category: "dye",
      rank: null, role: "Barwnik do zmiany koloru zbroi (nakładany u rusznikarza/zbrojmistrza).",
      stats: "", tiers: [{ level: 1, label: "Jedyna wersja", code: d.code }], maxCode: d.code,
      searchBlob: (d.name + " " + d.code).toLowerCase()
    });
  });

  /* ---------- Mikstury (tierowane + pojedyncze) ---------- */
  POTION_FAMILIES.forEach(p => {
    const tiers = tieredEntries(p.codeBase, p.maxTier);
    index.push({
      type: "item", name: p.name, set: "Mikstury", setKey: "potion", category: "potion",
      rank: null, role: "Mikstura wiedźmińska - wypij po medytacji, efekt toksyczny.",
      stats: "", tiers, maxCode: tiers[tiers.length - 1].code,
      searchBlob: (p.name + " " + p.codeBase).toLowerCase()
    });
  });
  POTION_SINGLES.forEach(p => {
    index.push({
      type: "item", name: p.name, set: "Mikstury", setKey: "potion", category: "potion",
      rank: null, role: "Specjalna mikstura/eliksir.", stats: "",
      tiers: [{ level: 1, label: "Jedyna wersja", code: p.code }], maxCode: p.code,
      searchBlob: (p.name + " " + p.code).toLowerCase()
    });
  });

  /* ---------- Dekokty ---------- */
  DECOCTIONS.forEach(d => {
    index.push({
      type: "item", name: d.name, set: "Dekokty", setKey: "decoction", category: "decoction",
      rank: null, role: "Dekokt potworski - silny efekt, ogranicza użycie innych toksyn.", stats: "",
      tiers: [{ level: 1, label: "Jedyna wersja", code: d.code }], maxCode: d.code,
      searchBlob: (d.name + " " + d.code).toLowerCase()
    });
  });

  /* ---------- Oleje ---------- */
  OIL_FAMILIES.forEach(o => {
    const tiers = tieredEntries(o.codeBase, o.maxTier);
    index.push({
      type: "item", name: o.name, set: "Oleje", setKey: "oil", category: "oil",
      rank: null, role: "Olej do nakładania na miecz - zwiększa obrażenia przeciw danej kategorii przeciwników.",
      stats: "", tiers, maxCode: tiers[tiers.length - 1].code,
      searchBlob: (o.name + " " + o.codeBase).toLowerCase()
    });
  });

  /* ---------- Bomby ---------- */
  BOMB_FAMILIES.forEach(b => {
    const tiers = tieredEntries(b.codeBase, b.maxTier);
    index.push({
      type: "item", name: b.name, set: "Bomby", setKey: "bomb", category: "bomb",
      rank: null, role: "Bomba alchemiczna do rzucania w przeciwników/otoczenie.",
      stats: "", tiers, maxCode: tiers[tiers.length - 1].code,
      searchBlob: (b.name + " " + b.codeBase).toLowerCase()
    });
  });

  /* ---------- Mutageny barwne ---------- */
  COLOR_MUTAGENS.forEach(m => {
    index.push({
      type: "item", name: m.name, set: "Mutageny", setKey: "mutagen", category: "mutagen",
      rank: null, role: "Mutagen do osadzenia w slotach mutagenów (bonus statystyk).", stats: "",
      tiers: [{ level: 1, label: "Jedyna wersja", code: m.code }], maxCode: m.code,
      searchBlob: (m.name + " " + m.code).toLowerCase()
    });
  });

  /* ---------- Glify i runy ---------- */
  GLYPHS_RUNES.forEach(g => {
    index.push({
      type: "item", name: g.name, set: "Glify i runy", setKey: "glyph", category: "schematic",
      rank: null, role: "Schemat rzemieślniczy - wykuj u zbrojmistrza/płatnerza i osadź w gnieździe.",
      stats: "", tiers: [{ level: 1, label: "Jedyna wersja", code: g.code }], maxCode: g.code,
      searchBlob: (g.name + " " + g.code).toLowerCase()
    });
  });

  /* ---------- Rzadkie materiały ---------- */
  CRAFTING_MATERIALS.forEach(m => {
    index.push({
      type: "item", name: m.name, set: "Materiały rzemieślnicze", setKey: "material", category: "material",
      rank: null, role: "Rzadki materiał używany do craftingu wyższych tierów zbroi/broni.", stats: "",
      tiers: [{ level: 1, label: "Jedyna wersja", code: m.code }], maxCode: m.code,
      searchBlob: (m.name + " " + m.code).toLowerCase()
    });
  });

  /* ---------- Komendy (walka, pieniądze, eksploracja, pogoda, wygląd) ---------- */
  Object.entries(COMMANDS).forEach(([key, group]) => {
    group.items.forEach(c => {
      index.push({
        type: "command", name: c.cmd, set: group.title, setKey: key, category: key,
        rank: null, role: group.note || "", desc: c.desc, code: c.cmd,
        searchBlob: (c.cmd + " " + c.desc + " " + group.title).toLowerCase()
      });
    });
  });

  /* ---------- Umiejętności ---------- */
  SKILLS.groups.forEach(g => {
    g.ids.forEach(id => {
      index.push({
        type: "command", name: id, set: "Umiejętności: " + g.title, setKey: "skill", category: "skill",
        rank: null, role: SKILLS.note, desc: "Gałąź: " + g.title, code: `learnskill('${id}')`,
        searchBlob: (id + " " + g.title + " umiejetnosc skill").toLowerCase()
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

  const cleanedCodeQuery = q.replace(/additem\(|learnskill\(|'|\)/g, "").trim();

  const results = INDEX.map(entry => {
    let score = 0;
    const nameNorm = normalize(entry.name);
    const setNorm = normalize(entry.set);

    if (nameNorm === q) score += 100;
    else if (nameNorm.includes(q)) score += 50;
    else if (setNorm.includes(q)) score += 30;
    else if (normalize(entry.searchBlob).includes(q)) score += 20;

    if (entry.type === "item") {
      entry.tiers.forEach(t => {
        const codeNorm = normalize(t.code);
        if (codeNorm === cleanedCodeQuery) score += 200;
        else if (codeNorm.includes(cleanedCodeQuery) && cleanedCodeQuery.length > 2) score += 40;
      });
    } else {
      const codeNorm = normalize(entry.code);
      if (codeNorm === cleanedCodeQuery) score += 200;
      else if (codeNorm.includes(cleanedCodeQuery) && cleanedCodeQuery.length > 2) score += 40;
    }

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

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderItemCard(entry) {
  const card = document.createElement("article");
  card.className = "card";

  const rankTag = entry.rank
    ? `<span class="tag rank-tag rank-${entry.rank}">${(RANK_INFO[entry.rank] || { label: entry.rank }).label}</span>`
    : "";

  const tiersHtml = entry.tiers.map(t => {
    const isMax = t.code === entry.maxCode;
    return `
      <div class="tier-row ${isMax ? 'tier-max' : ''}">
        <div class="tier-label">
          ${isMax && entry.tiers.length > 1 ? '<span class="max-badge">MAX</span>' : ''}
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
          ${rankTag}
        </div>
      </div>
    </div>
    ${entry.role ? `<p class="card-role">${escapeHtml(entry.role)}</p>` : ""}
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

function renderCommandCard(entry) {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <div class="card-header">
      <div>
        <h3>${escapeHtml(entry.name)}</h3>
        <div class="card-meta">
          <span class="tag category-tag">${CATEGORY_LABELS[entry.category] || entry.category}</span>
          <span class="tag set-tag">${escapeHtml(entry.set)}</span>
        </div>
      </div>
    </div>
    ${entry.role ? `<p class="card-role">${escapeHtml(entry.role)}</p>` : ""}
    <p class="card-stats">${escapeHtml(entry.desc)}</p>
    <div class="tiers">
      <div class="tier-row tier-max">
        <div class="tier-label"><span>Komenda</span></div>
        <div class="tier-code-wrap">
          <code class="tier-code">${escapeHtml(entry.code)}</code>
          <button class="copy-btn" data-code="${escapeHtml(entry.code)}">Kopiuj</button>
        </div>
      </div>
    </div>
  `;

  card.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => copyToClipboard(btn.dataset.code, btn));
  });

  return card;
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
    emptyStateEl.innerHTML = "Zacznij wpisywać nazwę (np. \"Gryf\", \"Aerondight\", \"Mantikora\", \"barwnik\", \"pogoda\", \"Yennefer\", \"umiejętność\") lub kod (np. \"Wolf Armor\", \"god\", \"addmoney\"), aby zobaczyć wyniki.";
    countEl.textContent = "";
    return;
  }

  if (results.length === 0) {
    emptyStateEl.style.display = "block";
    emptyStateEl.textContent = "Brak wyników. Spróbuj innej nazwy, np. \"Kot\", \"Niedźwiedź\", \"Żmija\", \"Skellige\", \"olej\", \"bomba\", \"pieniądze\", \"Triss\".";
    countEl.textContent = "";
    return;
  }

  emptyStateEl.style.display = "none";
  countEl.textContent = `Znaleziono: ${results.length}`;
  results.forEach(entry => {
    resultsEl.appendChild(entry.type === "command" ? renderCommandCard(entry) : renderItemCard(entry));
  });
}

inputEl.addEventListener("input", () => renderResults(inputEl.value));
categoryFilterEl.addEventListener("change", () => renderResults(inputEl.value));

// Chipy szybkiego dostępu
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    inputEl.value = chip.dataset.q;
    renderResults(inputEl.value);
    inputEl.focus();
  });
});

// Renderuj przy starcie (pusty stan)
renderResults("");
