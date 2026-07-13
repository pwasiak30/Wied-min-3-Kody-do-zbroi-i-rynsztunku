/* ==========================================================================
   Rozszerzenie bazy danych: barwniki, przedmioty (mikstury/oleje/bomby/
   dekokty/mutageny/glify/runy/materiały), oraz komendy (walka, pieniądze,
   eksploracja, pogoda, wygląd/zachowanie/umiejętności Geralta, wygląd innych
   postaci). Źródła jak w data.js (Steam Community Guide, commands.gg,
   gamepressure.com, Witcher Wiki).
   ========================================================================== */

/* ===================== BARWNIKI (DYE) ===================== */
const DYES = [
  { name: "Barwnik domyślny", code: "Dye Default" },
  { name: "Barwnik czarny", code: "Dye Black" },
  { name: "Barwnik niebieski", code: "Dye Blue" },
  { name: "Barwnik brązowy", code: "Dye Brown" },
  { name: "Barwnik szary", code: "Dye Gray" },
  { name: "Barwnik zielony", code: "Dye Green" },
  { name: "Barwnik pomarańczowy", code: "Dye Orange" },
  { name: "Barwnik różowy", code: "Dye Pink" },
  { name: "Barwnik fioletowy", code: "Dye Purple" },
  { name: "Barwnik czerwony", code: "Dye Red" },
  { name: "Barwnik turkusowy", code: "Dye Turquoise" },
  { name: "Barwnik biały", code: "Dye White" },
  { name: "Barwnik żółty", code: "Dye Yellow" }
];

/* ===================== MIKSTURY (tiery: 1=Base 2=Enhanced 3=Superior) ===================== */
const POTION_FAMILIES = [
  { name: "Czarna Krew", codeBase: "Black Blood", maxTier: 3 },
  { name: "Zamieć", codeBase: "Blizzard", maxTier: 3 },
  { name: "Kot", codeBase: "Cat", maxTier: 3 },
  { name: "Pełnia Księżyca", codeBase: "Full Moon", maxTier: 3 },
  { name: "Złota Oriolka", codeBase: "Golden Oriole", maxTier: 3 },
  { name: "Zabójca Wielorybów (Killer Whale)", codeBase: "Killer Whale", maxTier: 1 },
  { name: "Las Maribor", codeBase: "Maribor Forest", maxTier: 3 },
  { name: "Filtr Petriego", codeBase: "Petri Philtre", maxTier: 3 },
  { name: "Jaskółka", codeBase: "Swallow", maxTier: 3 },
  { name: "Płomykówka", codeBase: "Tawny Owl", maxTier: 3 },
  { name: "Piorun", codeBase: "Thunderbolt", maxTier: 3 },
  { name: "Biały Miód", codeBase: "White Honey", maxTier: 3 },
  { name: "Wywar Białego Raffarda", codeBase: "White Raffards Decoction", maxTier: 3 }
];
const POTION_SINGLES = [
  { name: "Feromony Niedźwiedzia", code: "Pheromone Potion Bear 1" },
  { name: "Feromony Topielca", code: "Pheromone Potion Drowner 1" },
  { name: "Feromony Nekkera", code: "Pheromone Potion Nekker 1" },
  { name: "Wilcza Godzina", code: "Wolf Hour" },
  { name: "Mikstura Oczyszczająca", code: "Clearing Potion" },
  { name: "Antidotum Popa", code: "Pops Antidote" }
];

/* ===================== DEKOKTY (Decoction - Mutagen 1-28) ===================== */
const DECOCTIONS = [
  { name: "Dekokt kataka", code: "Mutagen 1" },
  { name: "Dekokt arachasa", code: "Mutagen 2" },
  { name: "Dekokt kuroliszka", code: "Mutagen 3" },
  { name: "Dekokt archigryfona", code: "Mutagen 4" },
  { name: "Dekokt wodnej hagi", code: "Mutagen 5" },
  { name: "Dekokt nocnicy", code: "Mutagen 6" },
  { name: "Dekokt ekwimy", code: "Mutagen 7" },
  { name: "Dekokt czorta", code: "Mutagen 8" },
  { name: "Dekokt mglaka", code: "Mutagen 9" },
  { name: "Dekokt wyverny", code: "Mutagen 10" },
  { name: "Dekokt dopplera", code: "Mutagen 11" },
  { name: "Dekokt trolla", code: "Mutagen 12" },
  { name: "Dekokt południcy", code: "Mutagen 13" },
  { name: "Dekokt sukuba", code: "Mutagen 14" },
  { name: "Dekokt alghula", code: "Mutagen 15" },
  { name: "Dekokt fiend", code: "Mutagen 16" },
  { name: "Dekokt widłogona", code: "Mutagen 17" },
  { name: "Dekokt grobowej hagi", code: "Mutagen 18" },
  { name: "Dekokt zjawy", code: "Mutagen 19" },
  { name: "Dekokt żywiołaka ziemi", code: "Mutagen 20" },
  { name: "Dekokt echidny", code: "Mutagen 21" },
  { name: "Dekokt starożytnego leszego", code: "Mutagen 22" },
  { name: "Dekokt bazyliszka", code: "Mutagen 23" },
  { name: "Dekokt wilkołaka", code: "Mutagen 24" },
  { name: "Dekokt nekkera wojownika", code: "Mutagen 25" },
  { name: "Dekokt leszego", code: "Mutagen 26" },
  { name: "Dekokt gryfona", code: "Mutagen 27" },
  { name: "Dekokt uzdrowiciela", code: "Mutagen 28" }
];

/* ===================== OLEJE (tiery 1-3) ===================== */
const OIL_FAMILIES = [
  { name: "Olej na bestie", codeBase: "Beast Oil", maxTier: 3 },
  { name: "Przeklęty olej", codeBase: "Cursed Oil", maxTier: 3 },
  { name: "Jad wisielca", codeBase: "Hanged Man Venom", maxTier: 3 },
  { name: "Olej hybrydowy", codeBase: "Hybrid Oil", maxTier: 3 },
  { name: "Olej na owadopodobne", codeBase: "Insectoid Oil", maxTier: 3 },
  { name: "Olej magiczny", codeBase: "Magicals Oil", maxTier: 3 },
  { name: "Olej na nekrofagi", codeBase: "Necrophage Oil", maxTier: 3 }
];

/* ===================== BOMBY (tiery 1-3) ===================== */
const BOMB_FAMILIES = [
  { name: "Diabelski pieczarniak", codeBase: "Devils Puffball", maxTier: 3 },
  { name: "Smoczy Sen", codeBase: "Dragons Dream", maxTier: 3 },
  { name: "Bomba dwimerytowa", codeBase: "Dwimeritium Bomb", maxTier: 3 },
  { name: "Kartacz", codeBase: "Grapeshot", maxTier: 3 },
  { name: "Samum", codeBase: "Samum", maxTier: 3 },
  { name: "Pył księżycowy", codeBase: "Silver Dust Bomb", maxTier: 3 },
  { name: "Północny Wiatr", codeBase: "White Frost", maxTier: 3 },
  { name: "Tańcząca Gwiazda", codeBase: "Dancing Star", maxTier: 3 }
];

/* ===================== MUTAGENY BARWNE (crafting) ===================== */
const COLOR_MUTAGENS = [
  { name: "Wielki czerwony mutagen", code: "Greater mutagen red" },
  { name: "Wielki zielony mutagen", code: "Greater mutagen green" },
  { name: "Wielki niebieski mutagen", code: "Greater mutagen blue" },
  { name: "Czerwony mutagen", code: "Mutagen red" },
  { name: "Zielony mutagen", code: "Mutagen green" },
  { name: "Niebieski mutagen", code: "Mutagen blue" },
  { name: "Mały czerwony mutagen", code: "Lesser mutagen red" },
  { name: "Mały zielony mutagen", code: "Lesser mutagen green" },
  { name: "Mały niebieski mutagen", code: "Lesser mutagen blue" }
];

/* ===================== GLIFY I RUNY (schematy) ===================== */
const GLYPHS_RUNES = [
  { name: "Wielki glif Aard", code: "Glyph aard greater schematic" },
  { name: "Mały glif Aard", code: "Glyph aard lesser schematic" },
  { name: "Glif Aard", code: "Glyph aard schematic" },
  { name: "Wielki glif Axii", code: "Glyph axii greater schematic" },
  { name: "Mały glif Axii", code: "Glyph axii lesser schematic" },
  { name: "Glif Axii", code: "Glyph axii schematic" },
  { name: "Wielki glif Igni", code: "Glyph igni greater schematic" },
  { name: "Mały glif Igni", code: "Glyph igni lesser schematic" },
  { name: "Glif Igni", code: "Glyph igni schematic" },
  { name: "Duży zadymiony glif", code: "Glyph infusion greater schematic" },
  { name: "Mały zadymiony glif", code: "Glyph infusion lesser schematic" },
  { name: "Wielki glif Quen", code: "Glyph quen greater schematic" },
  { name: "Mały glif Quen", code: "Glyph quen lesser schematic" },
  { name: "Glif Quen", code: "Glyph quen schematic" },
  { name: "Wielki glif Yrden", code: "Glyph yrden greater schemati" },
  { name: "Mały glif Yrden", code: "Glyph yrden lesser schematic" },
  { name: "Glif Yrden", code: "Glyph yrden schematic" },
  { name: "Mały kamień runiczny Dażboga", code: "Rune dazhbog lesser schematic" },
  { name: "Kamień runiczny Dażboga", code: "Rune dazhbog schematic" },
  { name: "Wielki kamień runiczny Dziewanny", code: "Rune devana greater schematic" },
  { name: "Mały kamień runiczny Dziewanny", code: "Rune devana lesser schematic" },
  { name: "Kamień runiczny Dziewanny", code: "Rune devana schematic" },
  { name: "Wielki kamień runiczny Czarnoboga", code: "Rune elemental greater schematic" },
  { name: "Mały kamień runiczny Czarnoboga", code: "Rune elemental lesser schematic" },
  { name: "Kamień runiczny Czarnoboga", code: "Rune elemental schematic" },
  { name: "Wielki kamień runiczny Marzanny", code: "Rune morana greater schematic" },
  { name: "Mały kamień runiczny Marzanny", code: "Rune morana lesser schematic" },
  { name: "Kamień runiczny Marzanny", code: "Rune morana schematic" },
  { name: "Wielki kamień runiczny Peruna", code: "Rune perun greater schematic" },
  { name: "Kamień runiczny Peruna", code: "Rune perun schematic" },
  { name: "Wielki kamień runiczny Strzyboga", code: "Rune stribog greater schematic" },
  { name: "Mały kamień runiczny Strzyboga", code: "Rune stribog lesser schematic" },
  { name: "Kamień runiczny Strzyboga", code: "Rune stribog schematic" },
  { name: "Wielki kamień runiczny Swaroga", code: "Rune svarog greater schematic" },
  { name: "Mały kamień runiczny Swaroga", code: "Rune svarog lesser schematic" },
  { name: "Kamień runiczny Swaroga", code: "Rune svarog schematic" },
  { name: "Wielki kamień runiczny Trygława", code: "Rune triglav greater schematic" },
  { name: "Mały kamień runiczny Trygława", code: "Rune triglav lesser schematic" },
  { name: "Kamień runiczny Trygława", code: "Rune triglav schematic" },
  { name: "Wielki kamień runiczny Welesa", code: "Rune veles greater schematic" },
  { name: "Mały kamień runiczny Welesa", code: "Rune veles lesser schematic" },
  { name: "Kamień runiczny Welesa", code: "Rune veles schematic" },
  { name: "Wielki kamień runiczny Zorii", code: "Rune zoria greater schematic" },
  { name: "Mały kamień runiczny Zorii", code: "Rune zoria lesser schematic" },
  { name: "Kamień runiczny Zorii", code: "Rune zoria schematic" }
];

/* ===================== RZADKIE MATERIAŁY RZEMIEŚLNICZE ===================== */
const CRAFTING_MATERIALS = [
  { name: "Biała Gula", code: "White Gull 1" },
  { name: "Alkohest", code: "Alcohest" },
  { name: "Mroczna esencja (nocnica)", code: "Nightwraith dark essence" },
  { name: "Ekstrakt kwasu", code: "Acid extract" },
  { name: "Sztabka dwimerytu", code: "Dwimeryte ingot" },
  { name: "Płyta dwimerytu", code: "Dwimeryte plate" },
  { name: "Wzbogacona sztabka dwimerytu", code: "Dwimeryte enriched ingot" },
  { name: "Wzbogacona ruda dwimerytu", code: "Dwimeryte enriched ore" },
  { name: "Sztabka meteorytu", code: "Meteorite ingot schematic" },
  { name: "Srebrna sztabka meteorytu", code: "Meteorite silver ingot schematic" },
  { name: "Sztabka mrocznego żelaza", code: "Dark iron ingot" },
  { name: "Płyta mrocznego żelaza", code: "Dark iron plate" },
  { name: "Sztabka mrocznej stali", code: "Dark steel ingot" },
  { name: "Płyta mrocznej stali", code: "Dark steel plate" }
];

/* ==========================================================================
   KOMENDY (nie-additem) - walka, pieniądze, eksploracja, pogoda, wygląd i
   umiejętności Geralta, wygląd innych postaci.
   ========================================================================== */

const COMMANDS = {

  combat: {
    title: "Walka i tryb boga",
    items: [
      { cmd: "god", desc: "Nieśmiertelność (włącz/wyłącz ponownym wpisaniem)." },
      { cmd: "god2()", desc: "Nieskończona energia (Vigor) do znaków." },
      { cmd: "healme", desc: "Natychmiast przywraca pełne zdrowie Geralta." },
      { cmd: "killall", desc: "Zabija wszystkich aktywnych przeciwników w walce." },
      { cmd: "likeaboss", desc: "Przełącznik: zadawane obrażenia = 40% aktualnego zdrowia celu." },
      { cmd: "setlevel(*)", desc: "Ustawia poziom postaci na podaną wartość." },
      { cmd: "levelup", desc: "Podnosi poziom postaci o 1." },
      { cmd: "addexp(*)", desc: "Dodaje podaną liczbę punktów doświadczenia." },
      { cmd: "addskillpoints(*)", desc: "Dodaje podaną liczbę punktów umiejętności." },
      { cmd: "cleardevelop", desc: "Resetuje rozwój postaci do wartości startowych." }
    ]
  },

  money: {
    title: "Gotówka",
    items: [
      { cmd: "addmoney(*)", desc: "Dodaje podaną liczbę orenów (np. addmoney(500))." },
      { cmd: "removemoney(*)", desc: "Odejmuje podaną liczbę orenów." }
    ]
  },

  exploration: {
    title: "Eksploracja mapy",
    items: [
      { cmd: "ShowAllFT(1)", desc: "Odkrywa wszystkie punkty szybkiej podróży na mapie." },
      { cmd: "ShowPins(1)", desc: "Odkrywa wszystkie znane lokacje i ikony na mapie." },
      { cmd: "ShowKnownPins(1)", desc: "Pokazuje nieodkryte miejsca jako znaki zapytania." },
      { cmd: "AllowFT(1)", desc: "Pozwala na szybką podróż z dowolnego miejsca (nie tylko punktów FT)." },
      { cmd: "testpause", desc: "Pauzuje grę (tryb testowy)." },
      { cmd: "testunpause", desc: "Wznawia grę po pauzie testowej." },
      { cmd: "mainmenu", desc: "Natychmiast przenosi do menu głównego." }
    ]
  },

  weather: {
    title: "Pogoda i czas",
    items: [
      { cmd: "settime(godzina)", desc: "Ustawia porę dnia, np. settime(20) - godzina 20:00." },
      { cmd: "TM(liczba)", desc: "Zmienia mnożnik prędkości upływu czasu w grze." },
      { cmd: "changeweather(WT_Clear)", desc: "Ustawia pogodę: bezchmurnie/słonecznie." },
      { cmd: "changeweather(WT_Light_Clouds)", desc: "Ustawia pogodę: lekkie zachmurzenie." },
      { cmd: "changeweather(WT_Mid_Clouds)", desc: "Ustawia pogodę: średnie zachmurzenie." },
      { cmd: "changeweather(WT_Heavy_Clouds)", desc: "Ustawia pogodę: silne zachmurzenie." },
      { cmd: "changeweather(WT_Light_Rain)", desc: "Ustawia pogodę: lekki deszcz." },
      { cmd: "changeweather(WT_Light_Snow)", desc: "Ustawia pogodę: lekki śnieg." },
      { cmd: "changeweather(WT_Blizzard)", desc: "Ustawia pogodę: zamieć śnieżna." },
      { cmd: "changeweather(WT_Rain_Storm)", desc: "Ustawia pogodę: burza z deszczem." }
    ]
  },

  geraltLook: {
    title: "Wygląd i zachowanie Geralta",
    items: [
      { cmd: "Cat(1)", desc: "Włącza noktowizję (wiedźmiński Kot)." },
      { cmd: "Cat(0)", desc: "Wyłącza noktowizję." },
      { cmd: "Drunk(1)", desc: "Włącza stan 'pijany' (chwiejny chód, rozmazany ekran)." },
      { cmd: "Drunk(0)", desc: "Wyłącza stan pijany." },
      { cmd: "addHair1", desc: "Fryzura: standardowa." },
      { cmd: "addHair2", desc: "Fryzura: kucyk." },
      { cmd: "addHair3", desc: "Fryzura: długie rozpuszczone włosy." },
      { cmd: "addHairDLC1", desc: "Fryzura: krótkie rozpuszczone włosy (DLC)." },
      { cmd: "addHairDLC2", desc: "Fryzura: irokez z warkoczykami (DLC)." },
      { cmd: "addHairDLC3", desc: "Fryzura: krótkie włosy zaczesane do tyłu (DLC)." },
      { cmd: "setbeard(1)", desc: "Ustawia długą brodę." },
      { cmd: "setbeard(0)", desc: "Ogolony (brak zarostu)." },
      { cmd: "setcustomhead(1)", desc: "Ustawia lekki zarost/szczecinę." }
    ]
  },

  npcLook: {
    title: "Wygląd Ciri, Triss, Yennefer i Keiry Metz",
    note: "Wpisz komendę mając wybraną (namierzoną) daną postać jako cel, albo użyj jej grając nią bezpośrednio (np. Ciri w rozdziałach 'W sercu zamieci'). Komenda appearance() zmienia model/strój na czas sceny.",
    items: [
      { cmd: "appearance('ciri_player')", desc: "Ciri - domyślny strój grywalny." },
      { cmd: "appearance('ciri_player_towel')", desc: "Ciri - w ręczniku." },
      { cmd: "appearance('ciri_player_wounded')", desc: "Ciri - zakrwawiona/ranna." },
      { cmd: "appearance('ciri_winter')", desc: "Ciri - zimowy strój (kurtka)." },
      { cmd: "appearance('__q103_dirty')", desc: "Ciri - brudne ubranie (wątek fabularny)." },
      { cmd: "appearance('__q103_wounded')", desc: "Ciri - ubranie we krwi (wątek fabularny)." },
      { cmd: "appearance('__q505_hooded')", desc: "Ciri - w pelerynie z kapturem." },
      { cmd: "appearance('keira_metz_sorceress')", desc: "Keira Metz - strój czarodziejki." },
      { cmd: "appearance('triss')", desc: "Triss - domyślny wygląd." },
      { cmd: "appearance('triss_dress')", desc: "Triss - suknia." },
      { cmd: "appearance('triss_hooded_01')", desc: "Triss - z kapturem (wariant 1)." },
      { cmd: "appearance('triss_hooded_02')", desc: "Triss - z kapturem (wariant 2)." },
      { cmd: "appearance('triss_tortured')", desc: "Triss - po torturach (wątek fabularny)." },
      { cmd: "appearance('yennefer_gown')", desc: "Yennefer - suknia balowa." },
      { cmd: "appearance('yennefer_head_towel')", desc: "Yennefer - ręcznik na głowie." },
      { cmd: "appearance('yennefer_hooded')", desc: "Yennefer - z kapturem (wariant 1)." },
      { cmd: "appearance('yennefer_hooded_02')", desc: "Yennefer - z kapturem (wariant 2)." },
      { cmd: "appearance('yennefer_no_pendant')", desc: "Yennefer - bez medalionu." },
      { cmd: "appearance('yennefer_travel_outfit')", desc: "Yennefer - strój podróżny." }
    ]
  }
};

/* ===================== rozszerzenie etykiet kategorii ===================== */
Object.assign(CATEGORY_LABELS, {
  dye: "Barwnik",
  potion: "Mikstura",
  decoction: "Dekokt",
  oil: "Olej",
  bomb: "Bomba",
  mutagen: "Mutagen",
  schematic: "Glif / Runa (schemat)",
  material: "Materiał rzemieślniczy",
  combat: "Komenda: Walka",
  money: "Komenda: Gotówka",
  exploration: "Komenda: Eksploracja mapy",
  weather: "Komenda: Pogoda i czas",
  geraltLook: "Komenda: Wygląd/zachowanie Geralta",
  npcLook: "Komenda: Wygląd postaci",
  skill: "Umiejętność Geralta"
});

/* ===================== UMIEJĘTNOŚCI GERALTA (learnskill) ===================== */
const SKILLS = {
  note: "Dokładne nazwy umiejętności (np. 'Rozprucie', 'Zbierz żniwo') sprawdzisz w drzewku umiejętności w grze - identyfikatory poniżej pogrupowane są wg gałęzi. Użyj: learnskill('ID').",
  groups: [
    {
      title: "Miecz (Combat)",
      ids: ["sword_2", "sword_5", "sword_s1", "sword_s2", "sword_s3", "sword_s4", "sword_s5",
        "sword_s6", "sword_s7", "sword_s8", "sword_s9", "sword_s10", "sword_s11", "sword_s12",
        "sword_s13", "sword_s15", "sword_s16", "sword_s17", "sword_s18", "sword_s19", "sword_s20", "sword_s21"]
    },
    {
      title: "Znaki (Signs)",
      ids: ["magic_1", "magic_2", "magic_3", "magic_4", "magic_5",
        "magic_s1", "magic_s2", "magic_s3", "magic_s4", "magic_s5", "magic_s6", "magic_s7",
        "magic_s8", "magic_s9", "magic_s10", "magic_s11", "magic_s12", "magic_s13", "magic_s14",
        "magic_s15", "magic_s16", "magic_s17", "magic_s18", "magic_s19", "magic_s20"]
    },
    {
      title: "Alchemia",
      ids: ["alchemy_s1", "alchemy_s2", "alchemy_s3", "alchemy_s4", "alchemy_s5", "alchemy_s6",
        "alchemy_s7", "alchemy_s8", "alchemy_s9", "alchemy_s10", "alchemy_s11", "alchemy_s12",
        "alchemy_s13", "alchemy_s14", "alchemy_s15", "alchemy_s16", "alchemy_s17", "alchemy_s18", "alchemy_s19"]
    },
    {
      title: "Umiejętności ogólne / mutacje",
      ids: ["perk_1", "perk_1_day_ability", "perk_1_night_ability", "perk_2", "perk_3", "perk_4",
        "perk_5", "perk_6", "perk_7", "perk_10", "perk_11", "perk_12"]
    }
  ]
};
