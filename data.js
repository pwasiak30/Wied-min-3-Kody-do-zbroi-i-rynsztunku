/* ==========================================================================
   Baza danych: Wiedźmin 3 - zbroje, rynsztunek i kody do gry (additem)
   Źródła: Steam Community Guide "The Witcher 3 Console Commands: Ultimate
   Edition" (abnox_007), commands.gg/witcher3, Official Witcher Wiki (Fandom).
   Kody testowane w wersji PC (Steam/GOG, wersja Complete Edition / 4.04+).
   Uwaga: dokładne wartości pancerza/obrażeń poszczególnych sztuk skalują się
   z poziomem postaci w chwili wykucia/znalezienia przedmiotu, dlatego zamiast
   sztywnych liczb podajemy rangę (tier) oraz rolę bojową danego zestawu.
   ========================================================================== */

const TIER_LABELS = {
  1: "Podstawowa (Witcher Gear)",
  2: "Ulepszona (Enhanced)",
  3: "Superior",
  4: "Mistrzowska (Mastercrafted)",
  5: "Grandmaster (wymaga NG+, Krew i Wino)"
};

const RANK_INFO = {
  S: { label: "S – TOP tier", desc: "Najlepszy wybór na najwyższy poziom trudności (Tryb Śmierci)." },
  A: { label: "A – bardzo dobry", desc: "Silny, konkurencyjny wybór dla większości build'ów." },
  B: { label: "B – solidny", desc: "Dobry, uniwersalny, ale ustępuje najlepszym zestawom." },
  C: { label: "C – sytuacyjny", desc: "Przydatny fabularnie/stylistycznie, słabszy mechanicznie." }
};

// Kategorie: armor, boots, gloves, pants, steelsword, silversword, crossbow, weapon, saddlebag, saddle, blinders
const DATA = [

/* ===================== SZKOŁA WILKA (Wolf School) ===================== */
{
  set: "Szkoła Wilka",
  setKey: "wolf",
  role: "Zestaw startowy/uniwersalny - zbalansowane wsparcie znaków i walki mieczem.",
  rank: "B",
  items: [
    { name: "Zbroja Szkoły Wilka", category: "armor", codeBase: "Wolf Armor", maxTier: 5,
      stats: "Pancerz bazowy + odporność na obrażenia fizyczne; premia zestawu zwiększa siłę znaków." },
    { name: "Buty Szkoły Wilka", category: "boots", codeBase: "Wolf Boots", maxTier: 5,
      stats: "Pancerz na nogi, część premii zestawu." },
    { name: "Rękawice Szkoły Wilka", category: "gloves", codeBase: "Wolf Gloves", maxTier: 5,
      stats: "Zwiększa obrażenia od ataków lekkich/mocnych." },
    { name: "Spodnie Szkoły Wilka", category: "pants", codeBase: "Wolf Pants", maxTier: 5,
      stats: "Pancerz na nogi, część premii zestawu." },
    { name: "Stalowy miecz Szkoły Wilka", category: "steelsword", codeBase: "Wolf School steel sword", maxTier: 4,
      stats: "Podstawowe obrażenia sieczne przeciw ludziom/potworom nie-magicznym." },
    { name: "Srebrny miecz Szkoły Wilka", category: "silversword", codeBase: "Wolf School silver sword", maxTier: 4,
      stats: "Obrażenia przeciw potworom." }
  ]
},

/* ===================== SZKOŁA NIEDŹWIEDZIA (Bear/Ursine) ===================== */
{
  set: "Szkoła Niedźwiedzia",
  setKey: "bear",
  role: "Najwyższy pancerz i zdrowie ze wszystkich zestawów - budowa 'tank'.",
  rank: "A",
  items: [
    { name: "Zbroja Szkoły Niedźwiedzia", category: "armor", codeBase: "Bear Armor", maxTier: 5,
      stats: "Najwyższy bazowy pancerz spośród szkół wiedźmińskich; premia zestawu zwiększa max. zdrowie i odporność na obrażenia." },
    { name: "Buty Szkoły Niedźwiedzia", category: "boots", codeBase: "Bear Boots", maxTier: 5,
      stats: "Wysoki pancerz na nogi." },
    { name: "Rękawice Szkoły Niedźwiedzia", category: "gloves", codeBase: "Bear Gloves", maxTier: 5,
      stats: "Zwiększa obrażenia mocnych ataków (Ursine premia)." },
    { name: "Spodnie Szkoły Niedźwiedzia", category: "pants", codeBase: "Bear Pants", maxTier: 5,
      stats: "Wysoki pancerz na nogi." },
    { name: "Stalowy miecz Szkoły Niedźwiedzia", category: "steelsword", codeBase: "Bear School steel sword", maxTier: 4,
      stats: "Wolniejszy, ale zadaje najwyższe obrażenia sieczne z mieczy stalowych szkół." },
    { name: "Srebrny miecz Szkoły Niedźwiedzia", category: "silversword", codeBase: "Bear School silver sword", maxTier: 4,
      stats: "Najwyższe obrażenia wśród srebrnych mieczy szkolnych, wolniejsze ataki." },
    { name: "Kusza Szkoły Niedźwiedzia", category: "crossbow", codeBase: "Bear School Crossbow", maxTier: 0,
      stats: "Unikalna kusza zestawu, brak poziomów - jeden kod." }
  ]
},

/* ===================== SZKOŁA GRYFA (Griffin) ===================== */
{
  set: "Szkoła Gryfa",
  setKey: "griffin",
  role: "Najlepszy zestaw pod build znakowy (Signs) - skraca czas odnowienia i zwiększa siłę znaków.",
  rank: "S",
  items: [
    { name: "Zbroja Szkoły Gryfa", category: "armor", codeBase: "Gryphon Armor", maxTier: 5,
      stats: "Premia zestawu: mocniejsze i tańsze w użyciu Znaki (Aard, Igni, Quen, Yrden, Axii), krótszy cooldown." },
    { name: "Buty Szkoły Gryfa", category: "boots", codeBase: "Gryphon Boots", maxTier: 5,
      stats: "Część premii znakowej zestawu." },
    { name: "Rękawice Szkoły Gryfa", category: "gloves", codeBase: "Gryphon Gloves", maxTier: 5,
      stats: "Zwiększa intensywność Znaków." },
    { name: "Spodnie Szkoły Gryfa", category: "pants", codeBase: "Gryphon Pants", maxTier: 5,
      stats: "Część premii znakowej zestawu." },
    { name: "Stalowy miecz Szkoły Gryfa", category: "steelsword", codeBase: "Gryphon School steel sword", maxTier: 4,
      stats: "Szybkie ataki, premia do obrażeń po użyciu Znaku." },
    { name: "Srebrny miecz Szkoły Gryfa", category: "silversword", codeBase: "Gryphon School silver sword", maxTier: 4,
      stats: "Szybkie ataki, dobrze synergizuje z build'em znakowym." }
  ]
},

/* ===================== SZKOŁA KOTA / FELINE (Lynx) ===================== */
{
  set: "Szkoła Kota (Feline)",
  setKey: "cat",
  role: "Najwyższe obrażenia i szansa/obrażenia krytyczne - top-tier build DPS/skrytobójczy.",
  rank: "S",
  items: [
    { name: "Zbroja Szkoły Kota", category: "armor", codeBase: "Lynx Armor", maxTier: 5,
      stats: "Lekki pancerz, premia zestawu: znaczny wzrost szansy i obrażeń krytycznych oraz skuteczności krwawienia/trucizny." },
    { name: "Buty Szkoły Kota", category: "boots", codeBase: "Lynx Boots", maxTier: 5,
      stats: "Lekki pancerz na nogi, część premii krytycznej." },
    { name: "Rękawice Szkoły Kota", category: "gloves", codeBase: "Lynx Gloves", maxTier: 5,
      stats: "Zwiększa szybkość ataku." },
    { name: "Spodnie Szkoły Kota", category: "pants", codeBase: "Lynx Pants", maxTier: 5,
      stats: "Lekki pancerz na nogi, część premii krytycznej." },
    { name: "Stalowy miecz Szkoły Kota", category: "steelsword", codeBase: "Lynx School steel sword", maxTier: 4,
      stats: "Najszybsze ataki spośród mieczy stalowych szkół, wysoka szansa na krytyka." },
    { name: "Srebrny miecz Szkoły Kota", category: "silversword", codeBase: "Lynx School silver sword", maxTier: 4,
      stats: "Najszybsze ataki spośród srebrnych mieczy szkolnych." },
    { name: "Kusza Szkoły Kota", category: "crossbow", codeBase: "Lynx School Crossbow", maxTier: 0,
      stats: "Unikalna kusza zestawu, brak poziomów - jeden kod." }
  ]
},

/* ===================== SZKOŁA ŻMII (Viper) - Hearts of Stone ===================== */
{
  set: "Szkoła Żmii (Viper)",
  setKey: "viper",
  role: "Zestaw z dodatku Serca z Kamienia - hybryda krytyk/trucizna, jeden poziom (bez ulepszeń numerowanych).",
  rank: "A",
  items: [
    { name: "Zbroja Szkoły Żmii", category: "armor", codeBase: "EP1 Witcher Armor", maxTier: 0,
      stats: "Premia zestawu: zwiększona odporność na trucizny + wzrost obrażeń krytycznych i toksyczności." },
    { name: "Buty Szkoły Żmii", category: "boots", codeBase: "EP1 Witcher Boots", maxTier: 0,
      stats: "Część premii zestawu Żmii." },
    { name: "Rękawice Szkoły Żmii", category: "gloves", codeBase: "EP1 Witcher Gloves", maxTier: 0,
      stats: "Część premii zestawu Żmii." },
    { name: "Spodnie Szkoły Żmii", category: "pants", codeBase: "EP1 Witcher Pants", maxTier: 0,
      stats: "Część premii zestawu Żmii." },
    { name: "Zatruty stalowy miecz Żmii", category: "steelsword", codeBase: "EP1 Viper School steel sword", maxTier: 0,
      stats: "Ataki mają szansę zadać dodatkowe obrażenia trucizną." },
    { name: "Zatruty srebrny miecz Żmii", category: "silversword", codeBase: "EP1 Viper School silver sword", maxTier: 0,
      stats: "Ataki mają szansę zadać dodatkowe obrażenia trucizną." }
  ]
},

/* ===================== SZKOŁA MANTIKORY (Manticore) - Blood and Wine ===================== */
{
  set: "Szkoła Mantikory",
  setKey: "manticore",
  role: "Zestaw z dodatku Krew i Wino, zorientowany na alchemię/toksyczność - najlepszy dla build'u alchemicznego po ukończeniu.",
  rank: "S",
  items: [
    { name: "Zbroja Mantikory", category: "armor", codeBase: "Red Wolf Armor", maxTier: 2, maxTierLabel: "Legendarna Mantikora",
      stats: "Premia zestawu: podnosi limit toksyczności i wzmacnia moce mutacji/eliksirów." },
    { name: "Rękawice Mantikory", category: "gloves", codeBase: "Red Wolf Gloves", maxTier: 2, maxTierLabel: "Legendarne Mantikory",
      stats: "Część premii alchemicznej zestawu." },
    { name: "Spodnie Mantikory", category: "pants", codeBase: "Red Wolf Pants", maxTier: 2, maxTierLabel: "Legendarne Mantikory",
      stats: "Część premii alchemicznej zestawu." },
    { name: "Buty Mantikory", category: "boots", codeBase: "Red Wolf Boots", maxTier: 2, maxTierLabel: "Legendarne Mantikory",
      stats: "Część premii alchemicznej zestawu." },
    { name: "Stalowy miecz Mantikory", category: "steelsword", codeBase: "Red Wolf School steel sword", maxTier: 1,
      stats: "Obrażenia rosną wraz z poziomem toksyczności Geralta." },
    { name: "Srebrny miecz Mantikory", category: "silversword", codeBase: "Red Wolf School silver sword", maxTier: 1,
      stats: "Obrażenia rosną wraz z poziomem toksyczności Geralta." }
  ]
}
];

/* ===================== UNIKALNE BRONIE (poza zestawami szkół) ===================== */
const UNIQUE_WEAPONS = [
  { name: "Miecz Geralta z Rivii", category: "steelsword", code: "sq701 Geralt of Rivia sword", rank: "A",
    stats: "Unikalny miecz stalowy z questu 'Ostatnie życzenie'." },
  { name: "Iris (szabla Olgierda)", category: "steelsword", code: "Olgierd Sabre", rank: "A",
    stats: "Unikalna szabla stalowa z dodatku Serca z Kamienia, zadaje dodatkowe obrażenia i leczy przy zabójstwie." },
  { name: "Aerondight", category: "silversword", code: "Aerondight EP2", rank: "S",
    stats: "Najsilniejszy srebrny miecz w grze (Krew i Wino) - z każdym trafieniem rośnie obrażenie do 5 stack'ów; siła rośnie wraz z relacją z Marleną." },
  { name: "Wykuty w ogniu", category: "steelsword", code: "mq7001 Toussaint steel sword", rank: "A",
    stats: "Unikalny stalowy miecz z dodatku Krew i Wino." },
  { name: "Miecz Krwi (Bloodsword)", category: "silversword", code: "Bloodsword", rank: "B",
    stats: "Unikalny srebrny miecz, obrażenia rosną wraz z utratą zdrowia Geralta." },
  { name: "Gesheft", category: "silversword", code: "Unique silver sword", rank: "B",
    stats: "Unikalny srebrny miecz z dodatku Serca z Kamienia." },
  { name: "Czarny Jednorożec", category: "steelsword", code: "Blackunicorn", rank: "B",
    stats: "Unikalny stalowy miecz." },
  { name: "Harpia", category: "silversword", code: "Harpy", rank: "B",
    stats: "Unikalny srebrny miecz." },
  { name: "Kusza Geralta z Rivii", category: "crossbow", code: "Geralt of Rivia Crossbow", rank: "B",
    stats: "Unikalna kusza." },
  { name: "Kusza Ravixa z Czterorogu", category: "crossbow", code: "Ravix of Fourhorn Crossbow", rank: "B",
    stats: "Unikalna kusza z dodatku Krew i Wino." }
];

/* ===================== INNE ZESTAWY PANCERZY (nie-wiedźmińskie) ===================== */
const OTHER_ARMOR_SETS = [
  {
    set: "Zbroja Skellige", setKey: "skellige", rank: "B",
    role: "Ciężki pancerz stylizowany na Wyspy Skellige (Krew i Wino).",
    items: [
      { name: "Zbroja Skellige", category: "armor", code: "DLC14 Skellige Armor" },
      { name: "Spodnie Skellige", category: "pants", code: "DLC14 Skellige Pants" },
      { name: "Rękawice Skellige", category: "gloves", code: "DLC14 Skellige Gloves" },
      { name: "Buty Skellige", category: "boots", code: "DLC14 Skellige Boots" },
      { name: "Kusza Skellige", category: "crossbow", code: "DLC13 Skellige Crossbow" }
    ]
  },
  {
    set: "Zbroja Nowiu (New Moon)", setKey: "newmoon", rank: "B",
    role: "Lekki pancerz złodziejski, dobry na skradanie.",
    items: [
      { name: "Zbroja Nowiu", category: "armor", code: "Thief Armor" },
      { name: "Rękawice Nowiu", category: "gloves", code: "Thief Gloves" },
      { name: "Spodnie Nowiu", category: "pants", code: "Thief Pants" },
      { name: "Buty Nowiu", category: "boots", code: "Thief Boots" }
    ]
  },
  {
    set: "Zbroja Hen Gaidth", setKey: "hengaidth", rank: "C",
    role: "Zbroja wampirza z questu w Krwi i Winie, głównie kosmetyczna.",
    items: [
      { name: "Zbroja Hen Gaidth", category: "armor", code: "q704_vampire_armor" },
      { name: "Rękawice Hen Gaidth", category: "gloves", code: "q704_vampire_gloves" },
      { name: "Spodnie Hen Gaidth", category: "pants", code: "q704_vampire_pants" },
      { name: "Buty Hen Gaidth", category: "boots", code: "q704_vampire_boots" }
    ]
  },
  {
    set: "Zbroja Ofieri", setKey: "ofieri", rank: "B",
    role: "Egzotyczny lekki pancerz z Krwi i Wina, wraz z osprzętem dla konia.",
    items: [
      { name: "Zbroja Ofieri", category: "armor", code: "Crafted Ofir Armor" },
      { name: "Spodnie Ofieri", category: "pants", code: "Crafted Ofir Pants" },
      { name: "Buty Ofieri", category: "boots", code: "Crafted Ofir Boots" },
      { name: "Rękawice Ofieri", category: "gloves", code: "Crafted Ofir Gloves" },
      { name: "Sakwy Ofieri (koń)", category: "saddlebag", code: "Ofir Horse Bag" },
      { name: "Siodło Ofieri", category: "saddle", code: "Horse Saddle 6" },
      { name: "Naoczniki Ofieri", category: "blinders", code: "Ofir Horse Blinders" }
    ]
  }
];

const CATEGORY_LABELS = {
  armor: "Zbroja (kaftan)",
  boots: "Buty",
  gloves: "Rękawice",
  pants: "Spodnie",
  steelsword: "Miecz stalowy",
  silversword: "Miecz srebrny",
  crossbow: "Kusza",
  weapon: "Broń",
  saddlebag: "Sakwy (koń)",
  saddle: "Siodło (koń)",
  blinders: "Naoczniki (koń)"
};
