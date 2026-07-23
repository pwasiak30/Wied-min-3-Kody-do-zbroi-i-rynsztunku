# Wiedźmin 3 – Kody i Tutorial

Statyczna strona (HTML/CSS/vanilla JS, bez buildu) w dwóch zakładkach:

1. **Kody do zbroi** – wyszukiwarka kodów konsoli `additem()` dla zbroi,
   uzbrojenia i rynsztunku z gry *Wiedźmin 3: Dziki Gon*.
2. **Tutorial zadań** – pełny przebieg wszystkich zadań głównych (podstawka +
   *Serca z Kamienia* + *Krew i Wino*) oraz kluczowych zadań pobocznych z
   realnymi wyborami, wraz z wynikiem każdej opcji.

Styl graficzny nawiązuje do oficjalnej witryny thewitcher.com (ciemne tło,
czerwień i złoto, gotycka typografia).

## Zakładka 1: Kody do zbroi

- Wyszukiwanie po nazwie przedmiotu (np. „Gryf”, „Aerondight”, „Mantikora”)
  lub po kodzie (np. „Wolf Armor”).
- Dla każdego przedmiotu: kody dla wszystkich poziomów ulepszenia, z
  wyraźnym oznaczeniem wersji **MAX**.
- Ranking zestawów (S/A/B/C) wraz z krótkim opisem roli bojowej.
- Filtr po kategorii (zbroja, buty, rękawice, spodnie, miecz stalowy/srebrny,
  kusza, akcesoria konia, mikstury, oleje, bomby, komendy...).
- Przycisk „Kopiuj” do szybkiego skopiowania pełnej komendy `additem('...')`.

## Zakładka 2: Tutorial zadań

- **84 zadania**: wszystkie zadania główne podstawowej gry, *Serc z Kamienia*
  i *Krwi i Wina*, oraz 19 najważniejszych zadań pobocznych z istotnymi
  wyborami (wątek Krwawego Barona, romanse, polityka Novigradu i Skellige,
  finały obu dodatków).
- Dla każdego zadania: krótkie streszczenie, przebieg krok po kroku oraz — o
  ile występują — punkty decyzyjne z **wszystkimi opcjami wyboru i ich
  wynikami** (bezpośrednimi i długofalowymi konsekwencjami dla fabuły).
- Osobna sekcja dla zakończenia gry z pełnym drzewem zależności (los Ciri,
  związek Geralta, władca Północy, władca Skellige).
- Wyszukiwarka pełnotekstowa oraz filtry: typ zadania (główne/poboczne) i
  część gry (podstawka / Serca z Kamienia / Krew i Wino).
- Zadania pogrupowane rozdziałami (Prolog, Akt I/II/III, Velen, Novigrad,
  Skellige, Kaer Morhen, Zakończenie, Serca z Kamienia, Krew i Wino);
  karty rozwijają się po kliknięciu.

Uwaga: opisy wyborów i konsekwencji są zwięzłym przewodnikiem po najważniejszych
rozgałęzieniach fabuły — pełne dialogi w grze bywają bogatsze w niuanse.

## Jak włączyć konsolę w grze

1. Otwórz plik `bin/config/base/general.ini` w folderze instalacyjnym gry.
2. Dodaj linię: `DBGConsoleOn=true` i zapisz plik.
3. W grze naciśnij `~` (tylda), aby otworzyć konsolę, i wklej komendę,
   np. `additem('Wolf Armor 3')`.

## Uruchomienie lokalne

To zwykła statyczna strona – wystarczy otworzyć `index.html` w przeglądarce,
albo uruchomić lokalny serwer, np.:

```bash
python3 -m http.server 8000
```

i wejść na `http://localhost:8000`.

## Wdrożenie

### GitHub Pages
1. Wypchnij zawartość tego folderu do repozytorium na GitHubie.
2. W ustawieniach repo włącz GitHub Pages (branch `main`, folder `/root`).

### Netlify
1. Zaimportuj repozytorium z GitHuba w Netlify.
2. Build command: (brak / puste) — to statyczna strona.
3. Publish directory: `.` (katalog główny).

## Źródła danych

Kody i opisy zestawów oraz przebieg zadań oparte na publicznie dostępnych
community guide'ach, m.in.:
- Steam Community Guide: *The Witcher 3 Console Commands: Ultimate Edition*
- commands.gg/witcher3
- witcher.fandom.com / wiedzmin.fandom.com (The Official Witcher Wiki)
- fextralife.com, gamepressure.com/gry-online.pl, game8.co, gamerguides.com,
  thegamer.com i inne poradniki społecznościowe

Dokładne wartości pancerza/obrażeń skalują się z poziomem postaci w chwili
wykucia/znalezienia przedmiotu — dlatego w bazie podano rangę (tier) i rolę
bojową zamiast sztywnych liczb, które i tak różniłyby się w zależności od
poziomu Geralta.

## Struktura plików

```
index.html        - struktura strony (2 zakładki)
styles.css        - style (motyw wiedźmiński, inspirowany thewitcher.com)
data.js           - baza danych przedmiotów i kodów (zakładka 1)
data-extra.js     - dodatkowe dane (mikstury, oleje, komendy...) (zakładka 1)
app.js            - logika wyszukiwarki kodów (zakładka 1)
tutorial-data.js  - baza 84 zadań głównych/pobocznych z wyborami (zakładka 2)
tutorial-app.js   - logika wyszukiwania/filtrowania/renderowania (zakładka 2)
tabs.js           - przełączanie zakładek
data-src/         - surowe pliki źródłowe researchu (main-act1.js, main-act23.js,
                    hos.js, bw.js, side.js) - scalone w tutorial-data.js,
                    zachowane jako materiał referencyjny do przyszłej edycji
LICENSE           - licencja MIT (kod) + disclaimer dot. treści gry
```

## Licencja

Kod źródłowy tej strony jest objęty licencją **MIT** (patrz plik `LICENSE`).
Nazwy przedmiotów, zadań i inne treści związane z grą są własnością CD PROJEKT
S.A. i zostały użyte wyłącznie informacyjnie — to niezależny, niekomercyjny
projekt fanowski, niezwiązany z CD PROJEKT S.A.
