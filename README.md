# Wiedźmin 3 – Kody do zbroi i rynsztunku

Prosta, statyczna wyszukiwarka (HTML/CSS/vanilla JS, bez buildu) do kodów
konsoli `additem()` dla zbroi, uzbrojenia i rynsztunku z gry *Wiedźmin 3:
Dziki Gon*.

## Funkcje

- Wyszukiwanie po nazwie przedmiotu (np. „Gryf”, „Aerondight”, „Mantikora”)
  lub po kodzie (np. „Wolf Armor”).
- Dla każdego przedmiotu: kody dla wszystkich poziomów ulepszenia, z
  wyraźnym oznaczeniem wersji **MAX**.
- Ranking zestawów (S/A/B/C) wraz z krótkim opisem roli bojowej.
- Filtr po kategorii (zbroja, buty, rękawice, spodnie, miecz stalowy/srebrny,
  kusza, akcesoria konia).
- Przycisk „Kopiuj” do szybkiego skopiowania pełnej komendy `additem('...')`.

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

Kody i opisy zestawów oparte na publicznie dostępnych community guide'ach:
- Steam Community Guide: *The Witcher 3 Console Commands: Ultimate Edition*
- commands.gg/witcher3
- The Official Witcher Wiki (Fandom)

Dokładne wartości pancerza/obrażeń skalują się z poziomem postaci w chwili
wykucia/znalezienia przedmiotu — dlatego w bazie podano rangę (tier) i rolę
bojową zamiast sztywnych liczb, które i tak różniłyby się w zależności od
poziomu Geralta.

## Struktura plików

```
index.html    - struktura strony
styles.css    - style (motyw wiedźmiński)
data.js       - baza danych przedmiotów i kodów
app.js        - logika wyszukiwania i renderowania
```
