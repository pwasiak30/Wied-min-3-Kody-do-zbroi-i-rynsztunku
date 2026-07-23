/* ==========================================================================
   Baza danych: Wiedźmin 3 - Dziki Gon (gra podstawowa)
   Zakres: od wyjazdu na Skellige (początek Aktu II) do końca gry, wraz ze
   WSZYSTKIMI wariantami zakończenia (los Ciri, los Geralta, władcy Skellige
   i Północy). Nie obejmuje dodatków Hearts of Stone / Blood and Wine.
   Źródła: witcher.fandom.com, thewitcher3.wiki.fextralife.com,
   gamepressure.com (m.in. strony "Ciri's fate", "Fate of the world",
   "Ruler of Skellige", pełny walkthrough głównego wątku), gosunoob.com
   (All Endings), pcgamer.com, thegamer.com (m.in. "Reason of State",
   "Battle of Kaer Morhen", "Blood on the Battlefield", "Child of the Elder
   Blood", "rulers & kingdoms ending guide"), game8.co, gamerguides.com,
   gamebanshee.com, Steam Community Guide "Ciri's Endings Guide", IGN wikis.
   Zweryfikowano lipiec 2026.
   ========================================================================== */

const MAIN_ACT23 = [
  {
    id: "the-king-is-dead-long-live-the-king",
    title: "Nie żyje król, niech żyje król (The King is Dead - Long Live the King)",
    type: "main",
    dlc: "base",
    chapter: "Akt II",
    order: 19,
    summary: "Geralt płynie na Skellige, by odnaleźć Yennefer i skorzystać z jej wiedzy o klątwach w sprawie tajemniczej istoty (Umy) przywiezionej z Wielenia. Trafia na wyspy w dniu pogrzebu króla Brana - poległego władcy Skellige - i bierze udział w stypie na zamku Kaer Trolde, gdzie ponownie spotyka Yennefer.",
    walkthrough: [
      "Geralt przybija do Skellige i dowiaduje się o śmierci króla Brana oraz o trwających przygotowaniach do stypy w Kaer Trolde.",
      "Wiedźmin odnajduje pokój Yennefer w gospodzie i przebiera się w strój odpowiedni na uroczystość, po czym udaje się na zamek.",
      "Na stypie Geralt może wziąć udział w wyścigu łodzi z Cerys an Craite oraz stanąć w obronie honoru Yennefer w bójce z pijanym Lugosem Szaleńcem.",
      "Yennefer namawia Geralta na wspólną eskapadę do laboratorium maga Ermiona po Maskę Uroborosa - razem przechodzą przez pułapki, halucynacje i pokonują elementala ziemi.",
      "W trakcie ucieczki z laboratorium para zostaje uwięziona w zamkniętym pomieszczeniu z trującym gazem, co (przy odpowiednich wcześniejszych wyborach w grze) prowadzi do sceny zbliżenia Geralta z Yennefer.",
      "Crach an Craite prosi Geralta o pomoc swoim dzieciom, Cerys i Hjalmarowi, by mogły udowodnić, że zasługują na tron Skellige."
    ],
    choices: [
      {
        point: "Zbliżenie z Yennefer w laboratorium Ermiona",
        context: "Uwięzieni w komnacie pełnej trującego gazu, Geralt i Yennefer mają chwilę tylko dla siebie.",
        options: [
          { label: "Podjąć wątek romantyczny", outcome: "To jeden z kroków budujących ścieżkę romansu z Yennefer, potwierdzaną później m.in. w zadaniu 'Ostatnie życzenie' na Hindarsfjall i w scenach finałowych." },
          { label: "Zachować dystans", outcome: "Wątek romantyczny z Yennefer nie zostaje pogłębiony w tym miejscu, co utrudnia later uzyskanie zakończenia 'Geralt z Yennefer'." }
        ]
      }
    ],
    consequences: "Wątek Umy i klątwy trafia w ręce Yennefer, co uruchamia śledztwo prowadzące przez kolejne zadania Skellige. Rozpoczyna się też poboczny wątek sukcesji tronu Skellige (Cerys/Hjalmar), który wpływa na jedno z zakończeń gry."
  },
  {
    id: "echoes-of-the-past",
    title: "Echa przeszłości (Echoes of the Past)",
    type: "main",
    dlc: "base",
    chapter: "Akt II",
    order: 20,
    summary: "Geralt i Yennefer badają miejsce dawnej katastrofy magicznej na wyspie Ard Skellig, próbując za pomocą Maski Uroborosa odnaleźć ślady prowadzące do wyjaśnienia natury klątwy Umy.",
    walkthrough: [
      "Geralt spotyka Yennefer w miejscu kataklizmu na wschodzie Ard Skellig.",
      "Para odpiera atak dwóch meandrowców, po czym Yennefer używa magii, by odsłonić ukryte ślady.",
      "Geralt zakłada Maskę Uroborosa i podąża za niebiesko-zielonymi błyskami wskazującymi trop, walcząc po drodze z kolejnymi meandrowcami.",
      "Wiedźmin odnajduje pod powalonym drzewem ciało, które dostarcza kolejnych poszlak w śledztwie."
    ],
    choices: [],
    consequences: "Trop prowadzi do kolejnego etapu śledztwa w Skellige (Zaginieni) i stopniowo zbliża Geralta do prawdy o tożsamości Umy oraz jego związku z Ciri."
  },
  {
    id: "missing-persons",
    title: "Zaginieni (Missing Persons)",
    type: "main",
    dlc: "base",
    chapter: "Akt II",
    order: 21,
    summary: "Kontynuacja śledztwa z Yennefer - Geralt podąża za nią przez Lofoten do Ogrodu Freyi, zbierając kolejne poszlaki dotyczące klątwy nałożonej na Umę i dawnych wydarzeń związanych z ucieczką Ciri przed Dzikim Gonem.",
    walkthrough: [
      "Geralt spotyka Yennefer na Lofoten (Hindarsfjall) i razem badają okolicę Maską Uroborosa.",
      "Para udaje się do pobliskiego Ogrodu Freyi, tropiąc magiczne echa."
    ],
    choices: [],
    consequences: "Śledztwo prowadzi wprost do zadania 'Bezimienny', w którym para dociera do jaskini z ciałem powiązanym z tajemnicą Umy."
  },
  {
    id: "nameless",
    title: "Bezimienny (Nameless)",
    type: "main",
    dlc: "base",
    chapter: "Akt II",
    order: 22,
    summary: "Finał śledztwa prowadzonego z Yennefer w Ogrodzie Freyi. Geralt odkrywa ukrytą jaskinię, w której znajduje kolejne poszlaki łączące Umę z zaginioną grupą uciekającą przed Dzikim Gonem.",
    walkthrough: [
      "Geralt podąża za Yennefer schodami przy Ogrodzie Freyi i za pomocą zmysłów wiedźmińskich bada okolicę drzewa.",
      "Wiedźmin tropi ślady stóp, walcząc z czterema wilkami, po czym otwiera zamknięte drzwi dźwigniami i przepływa przez zalane bramy.",
      "Na dnie studni Geralt eksploruje jaskinię i odnajduje zwłoki niosące kluczowe informacje o przeszłości Umy."
    ],
    choices: [],
    consequences: "Zebrane poszlaki uruchamiają grywalny epizod wspomnień Ciri ('Cisza przed burzą') oraz ostatecznie prowadzą Geralta z powrotem do Kaer Morhen, gdzie klątwa Umy zostanie zdjęta."
  },
  {
    id: "ciris-story-calm-before-the-storm",
    title: "Opowieść Ciri: Cisza przed burzą (Ciri's Story: The Calm Before the Storm)",
    type: "main",
    dlc: "base",
    chapter: "Akt II",
    order: 23,
    summary: "Grywalny retrospektywny epizod z Ciri w roli głównej. Gracz poznaje fragment jej losów sprzed przybycia do świata Geralta - kolejny element budujący obraz relacji Ciri z Dzikim Gonem i jej determinacji, by uciec przed przeznaczeniem.",
    walkthrough: [
      "Gracz przejmuje kontrolę nad Ciri w retrospekcji ukazującej wydarzenia sprzed jej ucieczki do świata Geralta.",
      "Odcinek łączy eksplorację i walkę charakterystyczną dla scen 'Opowieści Ciri', przybliżając kolejny fragment układanki dotyczącej Umy, Avallac'ha i Dzikiego Gonu."
    ],
    choices: [],
    consequences: "Fabularnie spina wątek śledztwa w Skellige z powrotem Geralta do Kaer Morhen, gdzie rozpocznie się próba zdjęcia klątwy z Umy."
  },
  {
    id: "ugly-baby",
    title: "Brzydkie niemowlę (Ugly Baby)",
    type: "main",
    dlc: "base",
    chapter: "Akt II",
    order: 24,
    summary: "Geralt przywozi tajemniczą, przypominającą niemowlę istotę zwaną Umą do Kaer Morhen, licząc na to, że zgromadzeni tam wiedźmini i Yennefer pomogą zdjąć z niej klątwę i tym samym przybliżą go do odnalezienia Ciri.",
    walkthrough: [
      "Po przekonaniu cesarza Emhyra, że trop Umy jest wart śledzenia, Geralt zabiera istotę do Kaer Morhen.",
      "Na miejscu Vesemir proponuje najpierw łagodniejszą, mniej inwazyjną próbę zdjęcia klątwy.",
      "Gdy pierwsza próba Vesemira zawodzi, Yennefer zapowiada bardziej radykalne rozwiązanie - rytuał oparty na Próbie Traw, jeśli inne metody nie pomogą."
    ],
    choices: [],
    consequences: "Uma trafia pod opiekę zgromadzonych w Kaer Morhen wiedźminów i Yennefer, co otwiera kolejne zadania poświęcone próbom zdjęcia klątwy."
  },
  {
    id: "no-place-like-home",
    title: "Wszędzie dobrze, ale w domu najlepiej (No Place Like Home)",
    type: "main",
    dlc: "base",
    chapter: "Akt II",
    order: 25,
    summary: "Chwila oddechu w Kaer Morhen przed decydującymi wydarzeniami. Geralt spędza wieczór ze starymi przyjaciółmi - Eskelem, Lambertem, Zoltanem i innymi - grając w Gwinta, opowiadając historie i odpoczywając przed nadchodzącą burzą.",
    walkthrough: [
      "Po ogłoszeniu przez Vesemira planu 'mniej inwazyjnego' zdjęcia klątwy z Umy, Geralt zyskuje wolny wieczór w twierdzy.",
      "Gracz może wziąć udział w piciu z wiedźminami, opowiadaniu historii, grze w 'Nigdy przenigdy' oraz partiach Gwinta.",
      "Jeśli Geralt rozwija wątek romansu z Yennefer, wieczór oferuje okazję do intymnej sceny (m.in. przebranie się w jej strój, by skorzystać z megaskopu).",
      "Odnalezienie śpiącego przy Kózce Eskela nawiązuje do wcześniejszego pobocznego zadania z przynętą na wywernę."
    ],
    choices: [
      {
        point: "Wieczór z Yennefer",
        context: "Kaer Morhen daje chwilę wytchnienia przed bitwą.",
        options: [
          { label: "Skorzystać z okazji na zbliżenie", outcome: "Pogłębia wątek romantyczny z Yennefer, istotny dla finałowego wyboru 'Los Geralta'." },
          { label: "Pominąć wątek", outcome: "Brak dodatkowego rozwoju relacji w tym miejscu; nie wyklucza to jednak innych scen budujących romans." }
        ]
      }
    ],
    consequences: "Czysto obyczajowe, kameralne zadanie bez wpływu na przebieg fabuły - buduje jednak atmosferę przed bitwą i (opcjonalnie) wątek romansu."
  },
  {
    id: "va-fail-elaine",
    title: "Va Fail, Elaine",
    type: "main",
    dlc: "base",
    chapter: "Akt II",
    order: 26,
    summary: "Yennefer zbiera w Kaer Morhen wszystkich obecnych wiedźminów, by wspólnie z nimi przygotować i przeprowadzić rytuał mający ostatecznie zdjąć klątwę z Umy przy użyciu Wywaru z Traw.",
    walkthrough: [
      "Yennefer instruuje wiedźminów, by przygotowali Wywar z Traw potrzebny do rytuału.",
      "Geralt zbiera brakujące składniki (m.in. korzeń mandragory, gruczoł jadowy mantikory, język albinos-bruksy) i warzy miksturę.",
      "Wywar zostaje podany Umie, po czym Yennefer przeprowadza rytuał zdejmujący klątwę.",
      "Po zdjęciu klątwy okazuje się, że Uma to w rzeczywistości przebrany Avallac'h - elficki mędrzec i doradca Ciri."
    ],
    choices: [],
    consequences: "Avallac'h wręcza Geraltowi magiczny robaczek świętojański, prowadzący do Wyspy Mgieł - klucz do odnalezienia Ciri i jednocześnie wstęp do najbliższej konfrontacji z Dzikim Gonem."
  },
  {
    id: "isle-of-mists",
    title: "Wyspa Mgieł (The Isle of Mists)",
    type: "main",
    dlc: "base",
    chapter: "Akt II",
    order: 27,
    summary: "Podążając za wskazówką Avallac'ha, Geralt trafia na tajemniczą Wyspę Mgieł, gdzie musi pomóc zamieszkującym ją krasnoludom, zanim pozna dalsze fakty o losach Ciri i nadciągającym ataku Dzikiego Gonu na Kaer Morhen.",
    walkthrough: [
      "Geralt podąża za magicznym robaczkiem świętojańskim na wyspę i spotyka grupę krasnoludów, którzy zgodzą się pomóc dopiero po odnalezieniu trzech zaginionych towarzyszy.",
      "Wiedźmin odnajduje Ivo na północy wyspy (pokonując bagienne wiedźmy), Gasparda na szczycie latarni morskiej oraz zwłoki Ferenca na zachodzie wyspy, gdzie musi stoczyć walkę z bagiennikiem.",
      "Po skompletowaniu całej trójki krasnoludów w chacie następuje seria scen przybliżających kulisy ucieczki Ciri przed Dzikim Gonem.",
      "Zadanie stanowi 'lekki punkt bez powrotu' - część aktywności pobocznych ulega automatycznemu nieudaniu się, a swoboda eksploracji zostaje tymczasowo ograniczona."
    ],
    choices: [],
    consequences: "Wydarzenia na wyspie bezpośrednio poprzedzają szturm Dzikiego Gonu na Kaer Morhen - od tego momentu fabuła przyspiesza aż do wielkiej bitwy."
  },
  {
    id: "battle-of-kaer-morhen",
    title: "Bitwa o Kaer Morhen (The Battle of Kaer Morhen)",
    type: "main",
    dlc: "base",
    chapter: "Akt II",
    order: 28,
    summary: "Kulminacyjna, wieloetapowa bitwa obronna: Dziki Gon pod wodzą Eredina i Imlerith atakuje twierdzę wiedźmińską, by odzyskać Ciri. Geralt musi zebrać sprzymierzeńców, przygotować fortecę i przetrwać starcie, które okaże się okupione bolesną stratą.",
    walkthrough: [
      "Przed bitwą Geralt wysyła listy do potencjalnych sojuszników - część (Vesemir, Eskel, Lambert, Zoltan, Ermion) dołącza automatycznie, inni (Triss, Hjalmar, Keira Metz, Letho, Vernon Roche i Ves) tylko pod warunkiem ukończenia wcześniej ich wątków fabularnych.",
      "Gracz dokonuje wyborów przygotowawczych: mikstury czy pułapki na dziedzińcu oraz zbrojownia (srebrny miecz) czy wzmocnienie murów (mniej wrogów).",
      "Bitwa toczy się na przemian jako Geralt i jako Ciri - trzeba m.in. zamykać portale Dzikiego Gonu bombami dimerytowymi lub znakiem Yrden oraz bronić sojuszników na kolejnych liniach obrony.",
      "W kulminacyjnym starciu Imlerith, generał Dzikiego Gonu, zabija Vesemira, mimo prób obrony ze strony Geralta i Ciri.",
      "Po bitwie ocaleni świętują gorzkie zwycięstwo, opłakując poległego mistrza."
    ],
    choices: [
      {
        point: "Przygotowania obronne",
        context: "Przed szturmem Geralt musi zdecydować, jak przygotować twierdzę i jakich sojuszników zaangażować.",
        options: [
          { label: "Mikstury zamiast pułapek / zbrojownia zamiast murów", outcome: "Więcej zasobów walki (eliksiry, srebrny miecz), ale twierdzę atakuje więcej wrogów." },
          { label: "Pułapki zamiast mikstur / wzmocnienie murów", outcome: "Mniejsza liczba nacierających przeciwników kosztem mniejszych zasobów bojowych." }
        ]
      }
    ],
    consequences: "Śmierć Vesemira jest stała we wszystkich wariantach przejścia i mocno wpływa na emocjonalny wydźwięk kolejnego zadania. Bitwa jest też ostatnim epizodem rozgrywanym w Kaer Morhen w tej części fabuły - stąd fabuła przenosi się do Novigradu i finalnie do Skellige."
  },
  {
    id: "blood-on-the-battlefield",
    title: "Krew na polu bitwy (Blood on the Battlefield)",
    type: "main",
    dlc: "base",
    chapter: "Akt II",
    order: 29,
    summary: "Nazajutrz po bitwie Geralt musi pocieszyć załamaną Ciri i zdecydować, jaką drogą pójść dalej: czy od razu ruszyć tropem Imlerith na Łysą Górę, czy najpierw odwiedzić cesarza Emhyra. To jedno z najważniejszych zadań determinujących ostateczny los Ciri.",
    walkthrough: [
      "Geralt rozmawia z Ciri o żałobie po Vesemirze i szuka sposobu, by poprawić jej nastrój.",
      "W zależności od wyboru dochodzi do bitwy na śnieżki (rozładowującej napięcie) albo do wspólnego picia w duchu wiedźmińskiej tradycji.",
      "Geralt decyduje, czy jechać prosto do Wielenia (na Łysą Górę, tropem Imlerith) czy najpierw stawić się przed cesarzem Emhyrem, który życzy sobie raportu o Ciri.",
      "Jeśli dochodzi do spotkania z Emhyrem, cesarz oferuje Geraltowi zapłatę za dostarczenie informacji o córce."
    ],
    choices: [
      {
        point: "Jak pocieszyć Ciri",
        context: "Ciri jest przybita śmiercią Vesemira i całą sytuacją.",
        options: [
          { label: "'Chyba wiem, co poprawi ci humor' (bitwa na śnieżki)", outcome: "Pozytywny punkt na 'liczniku' relacji Geralt-Ciri, zbliżający do dobrego zakończenia." },
          { label: "'Nie musisz być dobra we wszystkim' / wspólne picie", outcome: "Negatywny punkt na liczniku relacji - oddala od najlepszych zakończeń." }
        ]
      },
      {
        point: "Łysa Góra czy cesarz Emhyr",
        context: "Geralt musi zdecydować, dokąd skierować się najpierw.",
        options: [
          { label: "Prosto do Wielenia (pominięcie cesarza)", outcome: "Otwiera możliwość zakończenia 'Ciri zostaje wiedźminką' (Empress jest wtedy niedostępna)." },
          { label: "Wizyta u cesarza Emhyra", outcome: "Otwiera możliwość zakończenia 'Ciri zostaje cesarzową Nilfgaardu' - pod warunkiem dalszych pozytywnych wyborów." }
        ]
      },
      {
        point: "Zapłata od cesarza (jeśli doszło do spotkania)",
        context: "Emhyr oferuje Geraltowi wynagrodzenie za informacje o córce.",
        options: [
          { label: "Odmówić zapłaty", outcome: "Pozytywny punkt na liczniku relacji - buduje szacunek Ciri do Geralta." },
          { label: "Przyjąć zapłatę", outcome: "Negatywny punkt na liczniku relacji - odczytywane przez Ciri jako 'sprzedanie' informacji o niej." }
        ]
      }
    ],
    consequences: "To zadanie uruchamia trzy z pięciu kluczowych decyzji budujących licznik sympatii Ciri, decydujący później o tym, czy przeżyje ona starcie z Białym Mrozem, oraz - jeśli przeżyje - czy zostanie wiedźminką, czy cesarzową."
  },
  {
    id: "bald-mountain",
    title: "Łysa Góra (Bald Mountain)",
    type: "main",
    dlc: "base",
    chapter: "Akt III",
    order: 30,
    summary: "Pierwsze zadanie Aktu III. Geralt (i w retrospekcji Ciri) tropi generała Dzikiego Gonu, Imlerith, przechodząc przez opuszczoną wioskę u podnóża Łysej Góry, siedziby trzech Wiedźm z Wielenia (Krone).",
    walkthrough: [
      "Mieszkańcy opuszczonej wioski blokują drogę - trzeba przekonać Teklę, oddając jej 'monetę wrzuconą do stawu', by uzyskać przejście.",
      "Geralt musi pokonać silvana, który (w odróżnieniu od typowych przedstawicieli gatunku) atakuje ogniem, a nie jest na niego podatny.",
      "W retrospekcji gracz przejmuje kontrolę nad Ciri i walczy z trzema Wiedźmami (Warzyecha, Szeptucha, Prządka).",
      "Geralt staje do finałowego starcia z Imlerith - walka toczy się w dwóch fazach, z teleportacjami i atakami z powietrza w drugiej odsłonie."
    ],
    choices: [],
    consequences: "Śmierć Imlerith mści Vesemira i usuwa jednego z dwóch generałów Dzikiego Gonu z gry, torując drogę do ostatecznej rozprawy z Eredinem."
  },
  {
    id: "reason-of-state",
    title: "Racja stanu (Reason of State)",
    type: "main",
    dlc: "base",
    chapter: "Akt III",
    order: 31,
    summary: "Kulminacja politycznego wątku Novigradu i Redanii. Geralt dołącza do spisku Dijkstry, Vernona Roche'a, Ves i Thalera wymierzonego w króla Radowida, co decyduje o tym, kto ostatecznie zapanuje nad Północą i jaki będzie los wojny z Nilfgaardem.",
    walkthrough: [
      "Zadanie odblokowuje się po ukończeniu wątku Triss oraz questów 'Zdradziecki spisek' ('A Deadly Plot'), 'Oko za oko' i 'Najbardziej poszukiwany w Redanii', a także po przekupieniu (nie zaatakowaniu) Dijkstry informacjami o Emhyrze w zadaniu 'Aż nazbyt oczywiste'.",
      "Spiskowcy spotykają się w magazynie na południowym zachodzie Novigradu, by ustalić plan zamachu.",
      "Geralt wywabia Radowida z jego okrętu, po czym wraz z Roche'em i Ves przebija się przez jego straż.",
      "Po konfrontacji z udziałem Filippy Eilhart, Dijkstra zdradza sojuszników i jest gotów pozwolić zginąć Roche'owi, Ves i Thalerowi."
    ],
    choices: [
      {
        point: "Zdrada Dijkstry",
        context: "Po śmierci Radowida Dijkstra ujawnia zamiar pozbycia się dawnych sojuszników - Roche'a, Ves i Thalera.",
        options: [
          { label: "'Nie pozwolę ci ich zabić' - stanąć po stronie Roche'a", outcome: "Geralt zabija Dijkstrę. Roche i Thaler przeżywają, a w konsekwencji Nilfgaard (Emhyr) podbija osłabioną Północ, przywracając Temerię jako wasala pod rządami Roche'a i Thalera." },
          { label: "'Rób, co chcesz' - nie interweniować", outcome: "Dijkstra zabija Roche'a, Ves i Thalera. W konsekwencji Redania pod wodzą Dijkstry pokonuje Nilfgaard - kontynent zyskuje sprawną administrację i uprzemysłowienie, ale kosztem wolności obywateli." }
        ]
      }
    ],
    consequences: "Jeśli gracz w ogóle nie podejmie wątku zamachu na Radowida, król pozostaje przy władzy, kontynuując prześladowania magów i nieludzi ('Odnowa Moralna'), a wojna toczy się dalej bez rozstrzygnięcia korzystnego dla żadnej ze stron opisanych powyżej. Wynik tego zadania jest jedną z głównych zmiennych finałowego epilogu ('Los Radowida i Dijkstry')."
  },
  {
    id: "final-preparations",
    title: "Ostatnie przygotowania (Final Preparations)",
    type: "main",
    dlc: "base",
    chapter: "Akt III",
    order: 32,
    summary: "Zadanie-hub w Novigradzie, w którym Geralt spina wszystkie wątki przed wyprawą do Krainy Lodu: rozmawia z Triss, Yennefer, Ciri i Avallac'hem, kończąc powiązane z nimi questy poboczne. Kluczowy moment to rozmowa z Ciri przed jej spotkaniem z Loży Czarodziejek.",
    walkthrough: [
      "Zadanie można realizować w dowolnej kolejności: rozmowa z Triss prowadzi do questu 'Aż nazbyt oczywiste' (schwytanie Filippy Eilhart), rozmowa z Yennefer do 'Wielkiej ucieczki' (uwolnienie Margarity Laux-Antille z więzienia).",
      "Rozmowa z Ciri otwiera zadanie 'Odwet' ('Payback'), pomagające jej załatwić własne sprawy w Novigradzie, w tym pomoc nieludzkim uchodźcom w zdobyciu koni.",
      "Kluczowa scena rozgrywa się w karczmie Pod Rozmarynem i Tymiankiem: Ciri szykuje się na spotkanie z resztkami Loży Czarodziejek i pyta Geralta o zdanie.",
      "Rozmowa z Avallac'hem uruchamia zadanie 'W czasie i przestrzeni' ('Through Time and Space') - wyprawę przez wymiary w poszukiwaniu Ge'els.",
      "Po ukończeniu wszystkich czterech wątków fabuła przechodzi do 'Przygotowań do bitwy'."
    ],
    choices: [
      {
        point: "Spotkanie Ciri z Lożą Czarodziejek",
        context: "Ciri waha się, czy pójść na spotkanie sama, czy poprosić Geralta o towarzystwo.",
        options: [
          { label: "'Poradzisz sobie sama'", outcome: "Buduje pewność siebie Ciri - pozytywny punkt na liczniku relacji, zbliżający do dobrego zakończenia." },
          { label: "'Pójdę z tobą'", outcome: "Ciri czuje się bardziej zależna od Geralta - negatywny punkt na liczniku, oddalający od najlepszych zakończeń." }
        ]
      }
    ],
    consequences: "To druga z pięciu kluczowych decyzji wpływających na los Ciri w finale gry."
  },
  {
    id: "battle-preparations",
    title: "Przygotowania do bitwy (Battle Preparations)",
    type: "main",
    dlc: "base",
    chapter: "Akt III",
    order: 33,
    summary: "Geralt spotyka się z sojusznikami na statku Avallac'ha, gdzie trzeba dopiąć ostatnie kwestie przed otwarciem przejścia do świata Białego Mrozu: znaleźć Kamień Słońca, pomóc Ciri zmierzyć się z demonami przeszłości i towarzyszyć jej (lub nie) przy grobie Skjalla.",
    walkthrough: [
      "Geralt melduje się u Avallac'ha na statku, gdzie odbywa się spotkanie z zebranymi sojusznikami.",
      "Odblokowują się cztery powiązane zadania: 'Kamień Słońca' i 'Veni Vidi Vigo' są dostępne od razu, 'Dziecko Starszej Krwi' odblokowuje się po postępach w 'Kamieniu Słońca', a 'Grób Skjalla' - dopiero po ukończeniu 'Dziecka Starszej Krwi'.",
      "Po skompletowaniu wszystkich wątków Geralt melduje Avallac'howi gotowość do przekroczenia granicy światów."
    ],
    choices: [],
    consequences: "Zadanie stanowi bramę do dwóch kolejnych, kluczowych dla losu Ciri questów - 'Dziecka Starszej Krwi' i 'Grobu Skjalla'."
  },
  {
    id: "child-of-the-elder-blood",
    title: "Dziecko Starszej Krwi (Child of the Elder Blood)",
    type: "main",
    dlc: "base",
    chapter: "Akt III",
    order: 34,
    summary: "Geralt, Yennefer i Ciri docierają do ukrytego laboratorium Avallac'ha na wybrzeżu Skellige, gdzie odkrywają prawdę o pochodzeniu Ciri od Lary Dorren i mierzą się z upokarzającą reakcją byłej kochanki Avallac'ha.",
    walkthrough: [
      "Trójka dociera do kryjówki Avallac'ha na Pali Gap Coast, pokonując strzegącego wejścia golema.",
      "W laboratorium, korzystając ze zmysłów wiedźmińskich, gracz odnajduje fresk przedstawiający drzewo genealogiczne Lary Dorren, ukazujący Ciri jako jej najnowszą potomkinię.",
      "Elfka, dawna kochanka Avallac'ha, upokarza i obraża Ciri, po czym odchodzi.",
      "Reakcja Geralta na jej wyjście oraz rozgoryczenie Ciri to kluczowy, ograniczony czasowo wybór dialogowy.",
      "Po opanowaniu emocji Ciri prosi Geralta o wspólną wizytę na grobie Skjalla - druida, który zginął, ratując ją."
    ],
    choices: [
      {
        point: "Reakcja na upokorzenie Ciri w laboratorium",
        context: "Elfka obraża Ciri i odchodzi, zostawiając ją zdruzgotaną.",
        options: [
          { label: "'Dawaj' (wspólne zdemolowanie laboratorium)", outcome: "Pozwala Ciri wyładować frustrację - pozytywny punkt na liczniku relacji." },
          { label: "'Uspokój się'", outcome: "Ciri czuje się jeszcze bardziej odrzucona przez Geralta - negatywny punkt na liczniku." }
        ]
      },
      {
        point: "Wizyta na grobie Skjalla",
        context: "Ciri prosi Geralta, by towarzyszył jej przy grobie druida, który oddał za nią życie.",
        options: [
          { label: "'Jasne, chodźmy razem'", outcome: "Uruchamia zadanie 'Grób Skjalla' i dodaje pozytywny punkt na liczniku relacji." },
          { label: "'Nie mam czasu'", outcome: "Ciri odczuwa odrzucenie - negatywny punkt na liczniku, zadanie 'Grób Skjalla' nie zostaje podjęte wspólnie." }
        ]
      }
    ],
    consequences: "To trzecia i czwarta z pięciu kluczowych decyzji determinujących finałowy los Ciri."
  },
  {
    id: "skjalls-grave",
    title: "Grób Skjalla (Skjall's Grave)",
    type: "main",
    dlc: "base",
    chapter: "Akt III",
    order: 35,
    summary: "Krótkie, kameralne zadanie - jeśli Geralt zgodził się towarzyszyć Ciri, odwiedzają razem grób druida Skjalla, który poświęcił dla niej życie. To ostatni z pięciu kluczowych momentów budujących relację przed finałową konfrontacją.",
    walkthrough: [
      "Geralt i Ciri udają się na miejsce pochówku Skjalla.",
      "Podczas rozmowy przy grobie Ciri dzieli się z Geraltem swoimi obawami i wdzięcznością wobec tych, którzy oddali za nią życie."
    ],
    choices: [],
    consequences: "Zamyka piątkę kluczowych wyborów wpływających na 'licznik sympatii' decydujący o losie Ciri w zakończeniu gry."
  },
  {
    id: "on-thin-ice",
    title: "Na cienkim lodzie (On Thin Ice)",
    type: "main",
    dlc: "base",
    chapter: "Akt III",
    order: 36,
    summary: "Przedostatnie zadanie gry. Sprzymierzeni z Nilfgaardczykami na Undvik, Geralt i Ciri przedzierają się przez szeregi Dzikiego Gonu, by dotrzeć do Caranthira, a następnie wejść na pokład Naglfaru i stoczyć decydujący pojedynek z Eredinem.",
    walkthrough: [
      "Geralt koordynuje działania z sojusznikami w obozie nilfgaardzkim na Undvik.",
      "Po sygnale dla Avallac'ha gracz przejmuje kontrolę nad wzmocnioną Ciri, by przebić się przez szeregi Dzikiego Gonu do Caranthira.",
      "Starcie z Caranthirem toczy się w dwóch fazach - najpierw jako Ciri, potem jako Geralt.",
      "Po powrocie na powierzchnię drużyna wchodzi na pokład okrętu Dzikiego Gonu, Naglfar, przebijając się przez kolejnych wrogów.",
      "Zadanie kończy się dwufazowym pojedynkiem Geralta z Eredinem, władcą Dzikiego Gonu."
    ],
    choices: [],
    consequences: "Pokonanie Eredina otwiera drogę do świata Białego Mrozu i ostatecznej rozgrywki o los Ciri w zadaniu 'Tedd Deireadh, Czas Pogardy'."
  },
  {
    id: "tedd-deireadh-final-age",
    title: "Tedd Deireadh, Ostatni Wiek (Tedd Deireadh, The Final Age)",
    type: "main",
    dlc: "base",
    chapter: "Akt III",
    order: 37,
    summary: "Finałowe zadanie fabuły głównej. Geralt, prowadzony przez Yennefer, dociera do wieży Tor Gvalch'ca, gdzie Avallac'h i Ciri szykują się do wkroczenia w świat ogarnięty Białym Mrozem, by raz na zawsze powstrzymać nadciągającą zagładę.",
    walkthrough: [
      "Geralt podąża za Yennefer do wieży Tor Gvalch'ca, unikając kul ognia i elementali lodu - Yennefer chroni go magicznie aż do bariery otaczającej wieżę, którą tylko ona może przełamać.",
      "W wieży Avallac'h tłumaczy się z dotychczasowej współpracy z Ciri i ujawnia, że działał w porozumieniu z nią, a nie przeciwko niej.",
      "Ciri postanawia wejść w portal prowadzący do świata Białego Mrozu, by spróbować powstrzymać spełnienie się Przepowiedni Ithlinne.",
      "To, co dzieje się dalej i czy Ciri wraca, zależy od sumy wcześniejszych decyzji z zadań 'Krew na polu bitwy', 'Ostatnie przygotowania', 'Dziecko Starszej Krwi' i 'Grób Skjalla'."
    ],
    choices: [],
    consequences: "Wynik starcia z Białym Mrozem jest bezpośrednio przenoszony do ostatniego zadania gry, 'Coś się kończy, coś zaczyna', w którym gracz ogląda właściwe zakończenie."
  },
  {
    id: "something-ends-something-begins",
    title: "Coś się kończy, coś zaczyna (Something Ends, Something Begins)",
    type: "main",
    dlc: "base",
    chapter: "Zakończenie",
    order: 38,
    summary: "Ostatnie zadanie gry i epilog. To, co zobaczy gracz, zależy niemal wyłącznie od wcześniejszych decyzji: losu Ciri (przeżycie i to, kim się stanie, albo jej śmierć), związku Geralta (Yennefer, Triss lub samotność) oraz od politycznego układu sił na Północy i Skellige ustalonego w poprzednich zadaniach.",
    walkthrough: [
      "Gra sprawdza wynik 'licznika sympatii' Ciri (pięć kluczowych decyzji z zadań 'Krew na polu bitwy', 'Ostatnie przygotowania', 'Dziecko Starszej Krwi' i 'Grób Skjalla') oraz to, czy Geralt zabrał Ciri do cesarza Emhyra.",
      "W zależności od wyniku gracz ogląda jedną z trzech scen dotyczących Ciri oraz jedną z trzech scen dotyczących związku Geralta.",
      "Dodatkowo gra uwzględnia rozstrzygnięcia polityczne: los Radowida/Dijkstry/Nilfgaardu (zadanie 'Racja stanu') oraz władcę Skellige (poboczny wątek sukcesji: 'Opętanie', 'Władca Undvik' i 'Gambit królewski')."
    ],
    choices: [
      {
        point: "Los Ciri",
        context: "O losie Ciri decyduje suma pięciu kluczowych wyborów (tzw. 'licznik sympatii') zebranych w zadaniach: reakcja na żałobę w 'Krwi na polu bitwy' (bitwa na śnieżki vs. picie), decyzja o zapłacie od Emhyra w tym samym zadaniu, sposób pożegnania przed Lożą Czarodziejek w 'Ostatnich przygotowaniach', reakcja na jej wybuch emocji w laboratorium Avallac'ha oraz wspólna (lub nie) wizyta na grobie Skjalla w 'Dziecku Starszej Krwi'. Dodatkowym warunkiem rozróżniającym dwa dobre zakończenia jest to, czy Geralt zabrał Ciri do cesarza Emhyra w 'Krwi na polu bitwy'.",
        options: [
          { label: "Ciri zostaje wiedźminką (co najmniej 3 z 5 wyborów pozytywne + Ciri NIE spotkała się z cesarzem Emhyrem)", outcome: "Najlepsze zakończenie. Ciri przeżywa starcie z Białym Mrozem i wraca na Kontynent. W scenie finałowej w gospodzie w Białym Sadzie Geralt wręcza jej srebrny miecz od płatnerza Orta, oficjalnie czyniąc ją pełnoprawną wiedźminką - odtąd będzie polować na potwory u boku Geralta." },
          { label: "Ciri zostaje cesarzową Nilfgaardu (co najmniej 3 z 5 wyborów pozytywne + Ciri spotkała się z Emhyrem i Geralt odmówił zapłaty)", outcome: "Ciri przeżywa, ale postanawia, że więcej zmieni jako władczyni potężnego imperium niż jako wiedźmin. Cesarz Emhyr żegna się z Geraltem, mówiąc, że nie chce go już nigdy widzieć. Zimą, w Białym Sadzie, podczas wspólnego polowania Ciri wyznaje Geraltowi, że przyjęła propozycję objęcia tronu i odjeżdża z nilfgaardzką delegacją." },
          { label: "Ciri ginie (mniej niż 3 z 5 wyborów pozytywne, tj. przewaga wyborów negatywnych)", outcome: "Najgorsze zakończenie. Ciri nie wraca ze starcia z Białym Mrozem - poświęca się, by powstrzymać zagładę. Geralt wraca do Mokradeł Wrzosowca (Crookback Bog) i odzyskuje od Prządki jej medalion w zamian za przysługę, po czym siedzi samotnie, otoczony nadciągającymi potworami, załamany utratą wszystkiego, co miało dla niego znaczenie." }
        ]
      },
      {
        point: "Los Geralta (związek uczuciowy)",
        context: "Wybór partnerki (lub jej braku) budowany jest przez całą grę wątkami romansowymi: z Yennefer m.in. w zadaniach 'Nie żyje król, niech żyje król', 'Wszędzie dobrze, ale w domu najlepiej' oraz w pobocznym 'Ostatnim życzeniu' na Hindarsfjall; z Triss - w pobocznych 'Rzecz o życiu i śmierci' oraz głównym 'Teraz albo nigdy'.",
        options: [
          { label: "Związek z Yennefer", outcome: "Para postanawia zamieszkać razem z dala od polityki i codziennych trosk Kontynentu, ciesząc się spokojnym, beztroskim życiem u boku siebie." },
          { label: "Związek z Triss", outcome: "Geralt osiedla się w Kovirze, gdzie Triss zostaje cenioną doradczynią miejscowego króla - żyją dostatnio, z dala od wojny na południu." },
          { label: "Romans z obiema jednocześnie (lub z żadną)", outcome: "Geralt pozostaje samotnym wiedźminem-wędrowcem, kontynuującym pracę łowcy potworów i wspominającym minione lata." }
        ]
      },
      {
        point: "Los Radowida, Dijkstry i Nilfgaardu (władca Północy)",
        context: "Zależy od przebiegu zadania 'Racja stanu' i poprzedzającej je politycznej intrygi wokół Redanii i Dijkstry.",
        options: [
          { label: "Radowid pozostaje królem (gracz nie podejmuje wątku zamachu)", outcome: "Najgorszy wariant - Radowid utrzymuje władzę w Redanii i kontynuuje prześladowania magów, nieludzi i uzdrowicieli w ramach 'Odnowy Moralnej', poświęcając wolny czas na szachy i palenie 'czarownic' na stosie." },
          { label: "Rządzi Dijkstra (w 'Racji stanu' gracz nie interweniuje - Dijkstra zabija Roche'a, Ves i Thalera)", outcome: "Redania pod wodzą Dijkstry pokonuje Nilfgaard. Kontynent zyskuje sprawną administrację i szybki rozwój przemysłowy, lecz okupiony utratą swobód obywatelskich i twardymi rządami." },
          { label: "Nilfgaard podbija Północ (w 'Racji stanu' gracz ratuje Roche'a i zabija Dijkstrę)", outcome: "Osłabiona wojną domową Północ zostaje podbita przez cesarza Emhyra. Vernon Roche i Thaler doprowadzają jednak do częściowego przywrócenia niezależności Temerii jako wasala Nilfgaardu." }
        ]
      },
      {
        point: "Władca Skellige",
        context: "Rozstrzyga się w pobocznym wątku sukcesji tronu (questy 'Opętanie', 'Władca Undvik' i finałowy 'Gambit królewski'), rozpoczętym jeszcze w zadaniu 'Nie żyje król, niech żyje król'.",
        options: [
          { label: "Cerys an Craite (ukończenie 'Opętania' i poparcie Cerys w 'Gambicie królewskim')", outcome: "Najlepszy wariant - Cerys zostaje królową, zapewniając wyspom stabilność, pokój i dobrobyt, udowadniając, że płeć nie ma znaczenia w sprawowaniu władzy." },
          { label: "Hjalmar an Craite (ukończenie 'Władcy Undvik' i poparcie Hjalmara)", outcome: "Hjalmar zostaje królem i kontynuuje tradycję regularnych najazdów łupieżczych na wybrzeża Nilfgaardu, co kosztuje życie wielu mieszkańców Skellige." },
          { label: "Svanrige Tuirseach (gracz ignoruje wątek sukcesji lub nie angażuje się w 'Gambit królewski')", outcome: "Najgorszy wariant - tron obejmuje Svanrige (zgodnie z planem swojej matki Birny), co prowadzi do wojny domowej z pozostałymi klanami i rodami zagrażającymi jego pozycji." }
        ]
      }
    ],
    consequences: "To ostatnie zadanie głównego wątku fabularnego gry podstawowej. Stan świata i relacji ustalony tutaj (poza losem Ciri i związkiem Geralta) jest w dużej mierze kosmetyczny fabularnie w samej grze podstawowej, ale bywa przywoływany we wspomnieniach postaci w dodatku Serca z Kamienia oraz - pośrednio - wpływa na to, kto odwiedza Geralta w epilogowych scenach dodatku Krew i Wino."
  }
];

if (typeof module !== "undefined") { module.exports = MAIN_ACT23; }
