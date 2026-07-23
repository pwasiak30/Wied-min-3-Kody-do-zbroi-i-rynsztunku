/* ==========================================================================
   Baza danych: Wiedźmin 3 - Dziki Gon - Zadania GŁÓWNE
   Zakres: Prolog (Biały Sad) + cały Akt I (Velen, Novigrad) aż do wyjazdu
   na Skellige ("Audiencja u królowej" / "Miejsce przeznaczenia: Skellige"
   rozpoczyna już Akt II i NIE wchodzi w zakres tego pliku).

   UWAGA: Zgodnie z podziałem prac, pełna questlinia Krwawego Barona
   ("Sprawy rodzinne", "Panie lasu", "Po omacku", "Szepczące wzgórze") jest
   opisywana osobno jako materiał POBOCZNY i NIE jest tu powtórzona - w tym
   pliku uwzględniono jedynie zadanie "Krwawy Baron" (pierwsze spotkanie
   i zawarcie układu) jako element głównego wątku.

   Źródła: witcher.fandom.com/wiki/The_Witcher_3_main_quests, wiedzmin.fandom.com
   (polskie tytuły: Audiencja, Nilfgaardzki łącznik, Krwawy Baron, Historia Ciri:
   Król Wilków / Wyścig / Wyjście z cienia / Ucieczka z moczarów / Z wizytą u
   Juniora / Na złamanie karku, Na ratunek Księżniczce, Polowanie na czarownicę,
   Stosy Novigradu, Sen w wielkim mieście, Spis cudzołożnic, Dorwać Juniora,
   Skarb hrabiego Reuvena, Przysługa dla Radowida, Niech żyje sztuka!, Poeta
   w opałach), thewitcher3.wiki.fextralife.com, gamepressure.com/gry-online.pl,
   game8.co, mmo4ever.com, gamerguides.com, thegamer.com. Zweryfikowano lipiec 2026.
   ========================================================================== */

const MAIN_ACT1 = [
  {
    id: "kaer-morhen",
    title: "Kaer Morhen",
    type: "main",
    dlc: "base",
    chapter: "Prolog",
    order: 1,
    summary: "Gra rozpoczyna się od onirycznej sekwencji rozgrywającej się w twierdzy Kaer Morhen. Geralt budzi się po kąpieli przerwanej przez Yennefer, spotyka Ciri i Vesemira, po czym scena okazuje się snem/wspomnieniem przerwanym atakiem Dzikiego Gonu. To czysty samouczek wprowadzający w mechanikę gry.",
    walkthrough: [
      "Obudź się w kwaterze gościnnej Kaer Morhen po kąpieli przerwanej przez Yennefer.",
      "Użyj Zmysłów Wiedźmina, by odnaleźć klucz i opuścić pokój.",
      "Zejdź do dolnych poziomów twierdzy, gdzie spotkasz Ciri i Vesemira.",
      "Opcjonalnie prześcigaj się z Ciri po blankach murów.",
      "Przejdź trening walki (znaki, miecze) prowadzony przez Vesemira.",
      "Obejrzyj scenę ataku Dzikiego Gonu na twierdzę i pozorną 'śmierć' Ciri.",
      "Obudź się jako Geralt jadący u boku Vesemira w stronę Białego Sadu - koniec snu."
    ],
    choices: [],
    consequences: "Czysto samouczkowy prolog bez wpływu na fabułę - wprowadza mechanikę walki i przedstawia relację Geralt-Ciri-Vesemir-Yennefer, kluczową dla motywacji bohatera w dalszej grze."
  },
  {
    id: "bez-i-agrest",
    title: "Bez i agrest (Lilac and Gooseberries)",
    type: "main",
    dlc: "base",
    chapter: "Prolog",
    order: 2,
    summary: "Geralt i Vesemir docierają do zniszczonego wojną Białego Sadu, wioski pod okupacją Nilfgaardu, tropiąc Yennefer. Po drodze odpierają atak ghuli i rozpytują miejscowych o czarodziejkę, trafiając ostatecznie do nilfgaardzkiego garnizonu.",
    walkthrough: [
      "Jedź z Vesemirem w stronę Białego Sadu, ucząc się podstaw jazdy konnej i walki.",
      "Stocz walkę z ghulami przy przydrożnym obozowisku.",
      "Dotrzyj do wioski Biały Sad, zniszczonej działaniami wojennymi.",
      "W miejscowej karczmie porozmawiaj z podróżnymi o poszukiwanej kobiecie.",
      "Kupiec Gaunter O'Dimm rozpoznaje opis Yennefer i wskazuje, że rozmawiała z nilfgaardzkim kapitanem.",
      "Udaj się do nilfgaardzkiego garnizonu i porozmawiaj z kapitanem Peterem Saarem Gwynleve.",
      "Zawrzyj układ: informacje o Yennefer w zamian za zabicie gryfa terroryzującego okolicę - zlecenie przechodzi w zadanie 'Bestia z Białego Sadu'."
    ],
    choices: [],
    consequences: "Quest wprowadza gracza w realia wojny Nilfgaardu z Redanią i ustanawia główny cel prologu: odnalezienie Yennefer poprzez rozwiązanie problemu gryfa."
  },
  {
    id: "bestia-z-bialego-sadu",
    title: "Bestia z Białego Sadu (The Beast of White Orchard)",
    type: "main",
    dlc: "base",
    chapter: "Prolog",
    order: 3,
    summary: "Geralt tropi i zabija gryfa terroryzującego okolice Białego Sadu, by w zamian uzyskać od Nilfgaardczyków informacje o miejscu pobytu Yennefer. Śledztwo ujawnia, że agresja bestii wynika z zabicia przez żołnierzy jej samicy w gnieździe.",
    walkthrough: [
      "Porozmawiaj z myśliwym Mislavem o miejscu ataku na nilfgaardzki patrol.",
      "Użyj Zmysłów Wiedźmina na miejscu ataku, by ustalić, że żołnierze zabili samicę gryfa śpiącą w gnieździe.",
      "Odwiedź zielarkę Tomirę i dowiedz się o kolcowoju - przynęcie potrzebnej do pułapki.",
      "Zbierz kolcowój nad brzegiem pobliskiej rzeki.",
      "Spotkaj się z Vesemirem w karczmie w Białym Sadzie i zaplanujcie zasadzkę na polu farmera Boyana.",
      "Rozstaw przynętę i stocz walkę z gryfem, gdy przyleci do pułapki.",
      "Wróć do nilfgaardzkiego dowódcy po nagrodę i informację, że Yennefer pojechała do Wyzimy."
    ],
    choices: [
      {
        point: "Zapłata za wykonanie kontraktu",
        context: "Po zabiciu gryfa nilfgaardzki dowódca oferuje Geraltowi zapłatę za wykonanie zlecenia.",
        options: [
          { label: "Przyjmij zapłatę", outcome: "Geralt otrzymuje ok. 300 pkt. doświadczenia i 150 koron - bez dalszych konsekwencji fabularnych." },
          { label: "Odmów zapłaty", outcome: "Geralt otrzymuje więcej doświadczenia (ok. 400 pkt.) kosztem korony - czysto mechaniczny wybór bez wpływu na fabułę." }
        ]
      }
    ],
    consequences: "Zabicie gryfa jest warunkiem koniecznym do uzyskania od Nilfgaardu informacji, że Yennefer przebywa w Wyzimie, co prowadzi do kolejnych wydarzeń prologu."
  },
  {
    id: "incydent-w-bialym-sadzie",
    title: "Incydent w Białym Sadzie (The Incident at White Orchard)",
    type: "main",
    dlc: "base",
    chapter: "Prolog",
    order: 4,
    summary: "Geralt i Vesemir wracają do karczmy w Białym Sadzie, gdzie wybucha bójka z bandytami. Po jej stłumieniu przerażony karczmarz wyrzuca ich, a na zewnątrz witcherowie natykają się na nilfgaardzki patrol prowadzony przez samą Yennefer.",
    walkthrough: [
      "Wejdź z Vesemirem do karczmy w Białym Sadzie.",
      "Obserwuj eskalację konfliktu - Vesemir staje w obronie karczmarza.",
      "Stocz krótką walkę z bandytami/maruderami w karczmie.",
      "Po walce zostań wyproszony przez przestraszonego karczmarza.",
      "Na zewnątrz natknij się na nilfgaardzki patrol dowodzony przez Yennefer."
    ],
    choices: [],
    consequences: "Rozpoczęcie tego zadania kończy dostępność większości aktywności pobocznych w Białym Sadzie i bezpośrednio prowadzi do spotkania z Yennefer oraz wyjazdu do Wyzimy na audiencję u cesarza."
  },
  {
    id: "audiencja",
    title: "Audiencja (Imperial Audience)",
    type: "main",
    dlc: "base",
    chapter: "Prolog",
    order: 5,
    summary: "Geralt jedzie z Yennefer i nilfgaardzkim orszakiem do Wyzimy na audiencję u cesarza Emhyra var Emreisa. Po przygotowaniach (kąpiel, ogolenie brody, przesłuchanie przez generała Voorhisa) wiedźmin dowiaduje się, że Ciri żyje i jest ścigana przez Dziki Gon, a jego zadaniem jest ją odnaleźć.",
    walkthrough: [
      "Dotrzyj do Wyzimy w towarzystwie Yennefer i wojsk Nilfgaardu.",
      "Przejdź przygotowania do audiencji - kąpiel i przymusowe ogolenie brody na życzenie szambelana.",
      "Odpowiadaj na pytania generała Morvrana Voorhisa dotyczące przeszłości Geralta (możliwa symulacja wyborów z Wiedźmina 2, jeśli zaimportowano zapis).",
      "Wybierz strój na audiencję.",
      "Stań przed cesarzem Emhyrem var Emreisem i zdecyduj, czy się ukłonić.",
      "Wysłuchaj propozycji: odnajdź Ciri, zanim zrobi to Dziki Gon, w zamian za sowitą zapłatę.",
      "Porozmawiaj z Yennefer o podziale sił - ona jedzie na Skellige, Geralt ma przeszukać Velen, a oboje spotkają się później z Triss w Novigradzie."
    ],
    choices: [
      {
        point: "Ukłon przed Emhyrem",
        context: "Podczas audiencji Geralt staje twarzą w twarz z cesarzem Nilfgaardu.",
        options: [
          { label: "Ukłoń się", outcome: "Emhyr reaguje złośliwą, lecz niegroźną uwagą - okazanie szacunku nie ma dalszych skutków fabularnych." },
          { label: "Nie kłaniaj się", outcome: "Szambelan jest oburzony brakiem etykiety i to on, nie Geralt, zostaje ukarany za ten afront - czysto charakterystyczny wybór roleplayowy, bez wpływu na główny wątek." }
        ]
      }
    ],
    consequences: "Audiencja formalnie otwiera Akt I: ustanawia cel (odnalezienie Ciri przed Dzikim Gonem), wynagrodzenie oraz podział zadań między Geralta i Yennefer (Velen/Novigrad kontra Skellige)."
  },
  {
    id: "nilfgaardzki-lacznik",
    title: "Nilfgaardzki łącznik (The Nilfgaardian Connection)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 6,
    summary: "Geralt przybywa do spustoszonego wojną Velen w poszukiwaniu cesarskiego agenta Hendrika, który miał trop na Ciri. W Karczmie Pod Rozstajami natyka się na ludzi Krwawego Barona, a finalnie odkrywa, że Dziki Gon dotarł do Hendrika pierwszy.",
    walkthrough: [
      "Dotrzyj do Velen i Karczmy Pod Rozstajami.",
      "Rozpytaj o agenta Hendrika, prowadzącego śledztwo w sprawie Ciri.",
      "Skonfrontuj się z ludźmi Krwawego Barona nagabującymi Geralta w karczmie.",
      "Podążaj tropem do wsi Heatherton, gdzie ukrywał się Hendrik.",
      "Odkryj ślady rzezi - Dziki Gon dotarł tam pierwszy, torturując i zabijając Hendrika.",
      "Przeszukaj ukrytą piwniczkę Hendrika Zmysłami Wiedźmina.",
      "Znajdź notatki wskazujące na dwa tropy: Krwawego Barona w Wrońcach oraz czarownicę pod Midcopse."
    ],
    choices: [
      {
        point: "Konfrontacja z ludźmi Barona w karczmie",
        context: "Zbrojni ludzie Krwawego Barona zaczepiają Geralta, żądając wyjaśnień powodów jego wizyty.",
        options: [
          { label: "Stoczyć walkę", outcome: "Ludzie Barona zostają pokonani lub zabici - w efekcie przy wejściu do Wroniec w zadaniu 'Krwawy Baron' strażnicy są wrogo nastawieni i blokują wejście, wymuszając przejście siłą przez jaskinie." },
          { label: "Zastraszyć ich, ujawniając się jako wiedźmin", outcome: "Ludzie Barona wycofują się bez walki, co ułatwia (choć nie gwarantuje pełnego zaufania) późniejsze wejście do Wroniec." },
          { label: "Postawić im kolejkę / rozładować sytuację towarzysko", outcome: "Konflikt zostaje rozwiązany polubownie - strażnicy Wroniec wpuszczają później Geralta bez większych utrudnień." }
        ]
      }
    ],
    consequences: "Zadanie wyznacza dwa równoległe tropy poszukiwań Ciri w Velen - Krwawego Barona i tajemniczą czarownicę - a sposób potraktowania ludzi Barona wpływa na przyjęcie, jakie spotka Geralta w Wrońcach."
  },
  {
    id: "krwawy-baron",
    title: "Krwawy Baron (Bloody Baron)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 7,
    summary: "Geralt dociera do zamku Wrońce, siedziby Krwawego Barona - lokalnego watażki, który jako jeden z niewielu wie, że Ciri przebywała w regionie. W zamian za pełne informacje baron żąda pomocy w odnalezieniu swojej zaginionej żony i córki.",
    walkthrough: [
      "Podejdź do bram Wroniec - sposób przyjęcia zależy od wcześniejszych decyzji podjętych w 'Nilfgaardzkim łączniku'.",
      "W razie wrogości strażników znajdź alternatywne wejście przez system jaskiń, wskazany przez starca przy bramie.",
      "W wariancie pokojowym przejdź eskortowany przez sierżanta, prowadząc po drodze rozmowę o toczącej się wojnie.",
      "Dotrzyj do komnat barona i porozmawiaj z nim o Ciri.",
      "Wysłuchaj relacji: Ciri pojawiła się w Wrońcach wyczerpana, ranna i przemoczona.",
      "Zgódź się na układ barona: pomoc w odnalezieniu jego żony Anny i córki Tamary w zamian za pełne informacje o Ciri."
    ],
    choices: [
      {
        point: "Droga do zamku przez jaskinie (gdy strażnicy są wrogo nastawieni)",
        context: "Napotkany przy jaskiniach starzec oferuje wskazanie bezpieczniejszej drogi do Wroniec.",
        options: [
          { label: "Zapłać staruszkowi 15 koron", outcome: "Geralt otrzymuje jasne wskazówki i sprawniej przechodzi przez jaskinie." },
          { label: "Odmów zapłaty i szukaj drogi samodzielnie", outcome: "Geralt musi znaleźć wejście sam, co wiąże się z dodatkowymi starciami w jaskiniach, ale oszczędza monety." }
        ]
      }
    ],
    consequences: "Zawarty z baronem układ uruchamia poboczny, lecz istotny dla Velen wątek poszukiwania jego rodziny (rozwijany w osobnym zestawie zadań pobocznych), niezbędny do uzyskania pełnych informacji o dalszych losach Ciri w regionie."
  },
  {
    id: "historia-ciri-krol-wilkow",
    title: "Historia Ciri: Król Wilków (Ciri's Story: The King of the Wolves)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 8,
    summary: "Pierwsza grywalna retrospekcja Ciri w Velen - uciekając przez las, dziewczyna trafia na zagubioną dziewczynkę Gretkę, po czym tropi wilkołaka odpowiedzialnego za śmierć wieśniaka. Epizod kończy się przybyciem do Wroniec i pierwszym kontaktem z baronem.",
    walkthrough: [
      "Steruj Ciri uciekającą przez las i spadającą do koryta rzeki.",
      "Podążaj wzdłuż rzeki i uratuj dziewczynkę imieniem Gretka, osaczoną przez wilki na drzewie.",
      "Zbadaj zmasakrowane zwłoki, by Zmysłami Wiedźmina ustalić, że zabójcą jest wilkołak.",
      "Przygotuj odpowiedni olej/składniki alchemiczne do walki z bestią.",
      "Wejdź do jaskini i pokonaj 'Króla Wilków' - wilkołaka czyhającego na kolejną ofiarę.",
      "Uratuj ocalałego wieśniaka i razem z Gretką udaj się do Wroniec po nagrodę u barona."
    ],
    choices: [],
    consequences: "Epizod pokazuje pierwsze kroki Ciri w Velen i jej relację z baronem, który zatrzymuje Gretkę do pracy w kuchni zamiast odesłać ją do głodującej rodziny - sygnał moralnej dwuznaczności barona, zanim odmówi ujawnienia dalszych informacji o Ciri bez pomocy w odnalezieniu własnej rodziny."
  },
  {
    id: "na-ratunek-ksiezniczce",
    title: "Na ratunek Księżniczce (A Princess in Distress)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 9,
    summary: "Poszukując guślarza, który mógłby pomóc namierzyć zaginioną rodzinę barona, Geralt musi najpierw odzyskać jego zbiegłą kozę o imieniu Księżniczka. Dopiero po jej odnalezieniu guślarz zgadza się pomóc w dalszym śledztwie.",
    walkthrough: [
      "Odnajdź chatę guślarza w Velen i wysłuchaj jego żądania.",
      "Weź od niego dzwonek przywabiający kozę Księżniczkę.",
      "Wejdź do lasu za chatą i użyj Zmysłów Wiedźmina oraz dzwonka, by odnaleźć zwierzę.",
      "Prowadź kozę z powrotem, dzwoniąc, gdy odbiega w poszukiwaniu jedzenia.",
      "Obroń kozę przed atakiem niedźwiedzia (lub unikaj starcia, uspokajając ją znakiem Axii).",
      "Dostarcz Księżniczkę guślarzowi i uzyskaj jego pomoc w wróżbie dotyczącej rodziny barona."
    ],
    choices: [
      {
        point: "Sposób prowadzenia kozy",
        context: "Koza Księżniczka nieustannie odbiega w stronę jedzenia, co grozi starciem z niedźwiedziem.",
        options: [
          { label: "Prowadzić kozę zwykłym dzwonieniem", outcome: "W pewnym momencie dochodzi do ataku niedźwiedzia, którego trzeba pokonać w walce." },
          { label: "Użyć znaku Axii, by uspokoić kozę", outcome: "Koza porusza się wolniej, ale spotkanie z niedźwiedziem zostaje ominięte - czysto gameplayowy wybór bez wpływu na fabułę." }
        ]
      }
    ],
    consequences: "Odzyskanie kozy jest warunkiem koniecznym do kontynuowania śledztwa w sprawie zaginionej rodziny barona, prowadzącego do wątku pobocznego rozwijanego w kolejnych zadaniach."
  },
  {
    id: "historia-ciri-wyscig",
    title: "Historia Ciri: Wyścig (Ciri's Story: The Race)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 10,
    summary: "Druga retrospekcja Ciri w Wrońcach: dziewczyna, ciesząc się gościnnością barona, wyzywa go na wyścig konny o wybranego przez siebie wierzchowca. Beztroska rywalizacja zostaje brutalnie przerwana atakiem bazyliszka.",
    walkthrough: [
      "Obserwuj ucztę przy ognisku, podczas której Ciri rzuca baronowi wyzwanie na wyścig konny.",
      "Następnego ranka stań na starcie wyścigu.",
      "Prowadź konia wyznaczoną trasą, wyprzedzając barona.",
      "Dotrzyj w pobliże wieży na mecie, gdzie na parę spada bazyliszek.",
      "Dobądź broni do walki z bestią wraz z baronem."
    ],
    choices: [],
    consequences: "Beztroski epizod kończy się atakiem bazyliszka, który porywa barona i bezpośrednio prowadzi do dramatycznej kontynuacji w retrospekcji 'Wyjście z cienia'."
  },
  {
    id: "historia-ciri-wyjscie-z-cienia",
    title: "Historia Ciri: Wyjście z cienia (Ciri's Story: Out of the Shadows)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 11,
    summary: "Bazyliszek porywa barona do swojego gniazda na szczycie wieży, a Ciri rusza mu na ratunek. Podczas finałowej walki dziewczyna po raz pierwszy świadomie używa mocy Starszej Krwi, by dosięgnąć bestii - co ma poważne, dalekosiężne konsekwencje.",
    walkthrough: [
      "Ścigaj bazyliszka niosącego barona do jego wieży-gniazda.",
      "Wspinaj się po skalnych półkach wieży w stronę szczytu.",
      "Stocz walkę z bazyliszkiem, redukując jego punkty zdrowia.",
      "Gdy bestia wzbija się z baronem na szczyt, użyj mocy teleportacji Ciri, by go dosięgnąć.",
      "Zabij bazyliszka i uratuj barona.",
      "Wysłuchaj, jak Ciri uświadamia sobie, że użycie magii mogło zdradzić jej lokalizację Dzikiemu Gonowi."
    ],
    choices: [],
    consequences: "Użycie przez Ciri Starszej Krwi zostaje wyczute przez Eredina, dowódcę Dzikiego Gonu, co zmusza dziewczynę do natychmiastowej ucieczki z Wroniec w stronę Novigradu, by nie sprowadzić zagrożenia na nowych sprzymierzeńców."
  },
  {
    id: "polowanie-na-czarownice",
    title: "Polowanie na czarownicę (Hunting a Witch)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 12,
    summary: "Drugi trop z notatek Hendrika prowadzi Geralta do tajemniczej czarownicy mieszkającej niedaleko Midcopse. W jej opuszczonej chacie Geralt odkrywa magiczny portal prowadzący do podziemnej groty, gdzie poznaje Keirę Metz - swoją starą znajomą.",
    walkthrough: [
      "Rozpytaj mieszkańców Midcopse (plotki przy studni, starzec przy wjeździe, mąż plotkującej kobiety) o lokalizację czarownicy.",
      "Podążaj na północ od wsi do stawu, a następnie do charakterystycznego głazu wskazującego zarośniętą ścieżkę.",
      "Pokonaj piątkę nekkerów strzegących porzuconego wozu.",
      "Wejdź do opuszczonej chaty i użyj Zmysłów Wiedźmina, by znaleźć pentagram i naznaczoną czaszkę.",
      "Dotknij czaszki, by aktywować portal do podziemnej groty.",
      "Spotkaj Keirę Metz i dowiedz się, że zamaskowany elfi mag wypytywał ją o Ciri.",
      "Zgódź się na wspólną wyprawę do elfich ruin na północny zachód od Byways, gdzie ukrywa się ów mag."
    ],
    choices: [],
    consequences: "Spotkanie z Keirą Metz otwiera drugi, niezależny od barona trop poszukiwań Ciri - prowadzący do elfich ruin, gdzie odkryte zostaną ślady obecności Dzikiego Gonu (rozwijane w dalszym, poufnym wątku pobocznym)."
  },
  {
    id: "historia-ciri-ucieczka-z-moczarow",
    title: "Historia Ciri: Ucieczka z moczarów (Ciri's Story: Fleeing the Bog)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 13,
    summary: "Chronologicznie najwcześniejsza retrospekcja Ciri w Velen, choć odblokowywana jako ostatnia: dziewczyna budzi się w chacie Wiedźm z Kaczego Bagna i, poznawszy ich mroczne zamiary, ucieka przez trzęsawiska przed Imlerithem, generałem Dzikiego Gonu.",
    walkthrough: [
      "Obudź się jako Ciri w chacie na Kaczym Bagnie i odkryj złowieszcze zamiary Wiedźm.",
      "Rusz przez bagna, unikając (lub eliminując) topielców i wojowników Dzikiego Gonu wychodzących z portali.",
      "Uciekaj przed Imlerithem - generałem Dzikiego Gonu wysłanym po Ciri.",
      "Skorzystaj z możliwości ukrycia się na drzewie, by przeczekać zagrożenie.",
      "Zeskocz i kontynuuj ucieczkę, pokonując kolejne przeszkody terenowe.",
      "Dotrzyj do celu, kończąc epizod ucieczki z bagien."
    ],
    choices: [],
    consequences: "Retrospekcja domyka wątek Ciri w Velen, wyjaśniając, jak trafiła w ręce Wiedźm z Kaczego Bagna, zanim uciekła stamtąd, trafiła do lasu i wreszcie do Wroniec - zamykając w ten sposób krąg wydarzeń opisanych we wcześniejszych retrospekcjach."
  },
  {
    id: "stosy-novigradu",
    title: "Stosy Novigradu (Pyres of Novigrad)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 14,
    summary: "Geralt przybywa do Novigradu, miasta ogarniętego religijnym fanatyzmem Kościoła Wiecznego Ognia, gdzie na stosach płoną oskarżeni o czary. Wiedźmin szuka Triss Merigold, by z jej pomocą trafić na trop Ciri, lecz musi najpierw pomóc jej w niebezpiecznym zleceniu przemytniczym.",
    walkthrough: [
      "Wjedź do Novigradu i bądź świadkiem publicznego palenia domniemanych magów przez Prześladowców Caleba Menge'a.",
      "Odwiedź dawną kryjówkę Triss - jest splądrowana przez szabrowników, którzy sugerują, że uciekła do Zgniłego Gaju.",
      "Skonfrontuj się z Calebem Menge, który grozi Geraltowi jako 'niepożądanemu' wiedźminowi w mieście.",
      "Wybierz sposób dotarcia do ukrytego Zgniłego Gaju (tropienie złodziei, przekupienie żebraków lub wejście przez kanały).",
      "Spotkaj Triss oraz Króla Żebraków w Zgniłym Gaju.",
      "Pomóż Triss w robocie przemytniczej - rozstaw kadzidło w magazynie zgodnie z jej instrukcjami.",
      "Stocz walkę z Prześladowcami, którzy nadciągają wraz z konkurentem Brandonem.",
      "Uzyskaj od Triss trop na oniromantkę Corinne Tilly, mogącą pomóc odnaleźć Ciri poprzez sny."
    ],
    choices: [
      {
        point: "Sposób dotarcia do Zgniłego Gaju",
        context: "Wejście do ukrytej kryjówki podziemia Novigradu jest strzeżone; istnieje kilka sposobów na znalezienie drogi.",
        options: [
          { label: "Podążyć za złodziejaszkami", outcome: "Prowadzi do starcia z drobnymi przestępcami, ale otwiera dojście do Gaju." },
          { label: "Przekupić żebraków", outcome: "Kosztuje monety, lecz pozwala uniknąć walki po drodze." },
          { label: "Znaleźć wejście przez kanały", outcome: "Alternatywna, ukryta droga - inny przebieg eksploracji, ten sam efekt końcowy." }
        ]
      }
    ],
    consequences: "Zadanie na nowo łączy Geralta z Triss i wprowadza go w podziemny świat Novigradu rządzony przez Króla Żebraków, otwierając novigradzki wątek poszukiwań Ciri."
  },
  {
    id: "sen-w-wielkim-miescie",
    title: "Sen w wielkim mieście (Novigrad Dreaming)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 15,
    summary: "Triss kieruje Geralta do oniromantki Corinne Tilly, pogrążonej w magicznym śnie za sprawą godlinga imieniem Sarah. Po uwolnieniu Corinne kobieta przeprowadza sesję śnienia, dającą pierwszy konkretny trop na obecność Ciri w Novigradzie.",
    walkthrough: [
      "Udaj się do domu Corinne Tilly i odkryj, że śpi zaklęta magicznym snem.",
      "Podążaj za wskazówkami dotyczącymi lalki i strychu, by odnaleźć szmacianą lalkę.",
      "Umieść lalkę w kołysce i odczytaj rysunek na drzwiach.",
      "Zejdź do piwnicy i odnajdź piec, w którym ukrywa się godling Sarah.",
      "Porozmawiaj z Sarah i zdecyduj o jej dalszym losie.",
      "Spotkaj przebudzoną Corinne w karczmie Złoty Jesiotr.",
      "Weź udział w seansie śnienia, odpowiadając na osobiste pytania o Ciri.",
      "Zdobądź informację, że Ciri kontaktowała się w Novigradzie z Jaskrem, który odziedziczył burdel Pod Rozmarynem i Tymiankiem."
    ],
    choices: [
      {
        point: "Los godlinga Sarah",
        context: "Godling Sarah nawiedza dom Corinne Tilly i utrzymuje ją w magicznym śnie.",
        options: [
          { label: "Pozwól jej zostać (zawrzyj układ)", outcome: "Sarah pozostaje w domu na uzgodnionych warunkach - łagodne rozwiązanie bez przemocy wobec istoty." },
          { label: "Wypędź ją (spal ziele przy użyciu znaku Igni)", outcome: "Sarah zostaje zmuszona do opuszczenia domu - miejsce staje się bezpieczne dla Corinne, kosztem losu godlinga." }
        ]
      }
    ],
    consequences: "Trop uzyskany od Corinne Tilly bezpośrednio kieruje Geralta do Jaskra i burdelu Pod Rozmarynem i Tymiankiem, otwierając kolejny etap śledztwa w Novigradzie."
  },
  {
    id: "spis-cudzoloznic",
    title: "Spis cudzołożnic (Broken Flowers)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 16,
    summary: "Trop prowadzi do Jaskra, lecz w burdelu Pod Rozmarynem i Tymiankiem Geralt zastaje jedynie Zoltana Chivaya. Wspólnie, na podstawie kalendarzyka spotkań barda, odwiedzają kolejne kobiety, by ustalić miejsce pobytu poety i jego związek z Ciri.",
    walkthrough: [
      "Odwiedź burdel Jaskra i porozmawiaj z Zoltanem Chivayem o zaginięciu przyjaciela.",
      "Przejrzyj kalendarzyk spotkań Jaskra, wskazujący pięć kobiet do odwiedzenia.",
      "Odszukaj praczkę Vespulę, nękaną przez zbirów, i dowiedz się, że Jaskier porzucił ją po tygodniu.",
      "Odwiedź krawca Elihala i dowiedz się o obsesji Jaskra na punkcie zamordowanego alchemika Kalksteina.",
      "Porozmawiaj z Molly w rezydencji Vegelbudów - Jaskier pożyczał pieniądze na barkę i widziano go z blondynką (jego siostrą).",
      "Spotkaj nauczycielkę Marabellę, wspominającą rozmowę o pleśni.",
      "Stocz dwa pojedynki z Rosą var Attre i wysłuchaj historii o lekcji retoryki na cmentarzu, dotyczącej margrabiego Henckla i trubadurki Callonetty.",
      "Zidentyfikuj tajemniczą kobietę jako Priscillę, artystkę z karczmy Kingfisher.",
      "Wysłuchaj występu Priscilli i dowiedz się, że Jaskier planował okraść Sigiego Reuvena i jest ścigany przez ludzi Whoreson Juniora."
    ],
    choices: [],
    consequences: "Śledztwo ujawnia, że Ciri i Jaskier próbowali zdobyć pieniądze kradzieżą u Sigiego Reuvena (w rzeczywistości Dijkstry), co uruchamia dwa równoległe wątki: konieczność kontaktu z Dijkstrą oraz konfrontację z Whoreson Juniorem."
  },
  {
    id: "dorwac-juniora",
    title: "Dorwać Juniora (Get Junior)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 17,
    summary: "By dotrzeć do Jaskra, Geralt musi zmierzyć się z Whoreson Juniorem - bezwzględnym gangsterem z novigradzkiego półświatka, powiązanym z królem Radowidem. Śledztwo prowadzi przez trzy jego przybytki, aż do finałowej konfrontacji.",
    walkthrough: [
      "Spotkaj się z Sigim Reuvenem (Dijkstrą) i innymi przedstawicielami novigradzkiej 'wielkiej czwórki' w łaźni Sigismunda.",
      "Zbadaj trzy miejsca należące do Juniora: rezydencję, arenę i kasyno, szukając poszlak.",
      "Na arenie i w kasynie zdecyduj, czy wejść siłą, czy podstępem/pokojowo.",
      "Odkryj dokumenty świadczące o powiązaniach Juniora z królem Radowidem.",
      "Uwolnij związanego niziołka w kasynie, by zdobyć dodatkowe informacje.",
      "Spotkaj się z Vernonem Roche'em w Oksenfurckim Klubie Szachistów, gdzie sam król Radowid zdradza lokalizację kryjówki Juniora.",
      "Przebij się przez strażników do kryjówki i skonfrontuj się z Whoreson Juniorem."
    ],
    choices: [
      {
        point: "Los Whoreson Juniora",
        context: "Po dotarciu do kryjówki Geralt ma Juniora w swojej mocy i musi zdecydować, co z nim zrobić.",
        options: [
          { label: "Zabić Juniora", outcome: "Geralt bez wahania zabija bandytę - szybkie, ostateczne rozwiązanie eliminujące go z dalszych wątków fabularnych." },
          { label: "Oszczędzić go (okaleczyć/zhańbić)", outcome: "Junior zostaje przy życiu w hańbie i cierpieniu - decyzja ma odzwierciedlenie jedynie w drobnej wzmiance/epilogu później w grze i nie zmienia głównego przebiegu fabuły." }
        ]
      }
    ],
    consequences: "Pokonanie Juniora otwiera dostęp do informacji o miejscu ukrycia Jaskra i uruchamia retrospekcję Ciri pokazującą jej wcześniejszą wizytę u tego samego gangstera."
  },
  {
    id: "historia-ciri-z-wizyta-u-juniora",
    title: "Historia Ciri: Z wizytą u Juniora (Ciri's Story: Visiting Junior)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 18,
    summary: "Retrospekcja ukazująca wcześniejsze wydarzenia: Ciri i doppler Dudu włamują się do rezydencji Whoreson Juniora, by uratować torturowanego za niedotrzymanie obietnicy Dudu. Udana akcja kończy się jednak brutalnym pościgiem.",
    walkthrough: [
      "Steruj Ciri włamującą się do posiadłości Whoreson Juniora wraz z Dudu.",
      "Pokonaj Juniora i jego ludzi, uwalniając torturowanego Dudu.",
      "Obserwuj, jak Dudu zmiennokształtny wtapia się w tłum, unikając pościgu.",
      "Uciekaj z Jaskrem przez ulice Novigradu, ścigana przez zbirów Juniora."
    ],
    choices: [],
    consequences: "Nieudany plan zdobycia pieniędzy u Juniora oraz następująca po nim ucieczka bezpośrednio prowadzą do pojmania Jaskra przez Straż Świątynną na Wyspie Świątynnej, co staje się kluczowym wątkiem końcówki Aktu I."
  },
  {
    id: "skarb-hrabiego-reuvena",
    title: "Skarb hrabiego Reuvena (Count Reuven's Treasure)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 19,
    summary: "Sigismund Dijkstra, ukrywający się pod przybraną tożsamością hrabiego Sigiego Reuvena, zleca Geraltowi odnalezienie skradzionego mu skarbu w zamian za informacje o Jaskrze. Śledztwo prowadzi do odkrycia niewygodnej prawdy - złodziejami byli sami Jaskier i Ciri.",
    walkthrough: [
      "Spotkaj się z Sigim Reuvenem (Dijkstrą) i podejmij się odnalezienia skradzionego skarbu.",
      "Zbadaj miejsce włamania w łaźni oraz kanały, przez które uciekli sprawcy.",
      "Znajdź fragment bomby ze śladami oleju wiwerniego i karmelu, wskazujący na celowy sabotaż, a nie działanie magiczne.",
      "Powiąż miejsce zbrodni z rezydencją zmarłego margrabiego Henckla, którego tożsamości ktoś użył.",
      "Przeszukaj rezydencję Henckla i odkryj kryjówkę z materiałami do budowy bomby oraz dowody wskazujące na Jaskra i Ciri jako sprawców.",
      "Zdecyduj, jak przedstawić sprawę Dijkstrze i/lub Prześladowcom (Mengemu)."
    ],
    choices: [
      {
        point: "Co powiedzieć o sprawcach kradzieży",
        context: "Geralt odkrywa, że za skradzionym skarbem Dijkstry stoją w rzeczywistości Jaskier i Ciri, próbujący zdobyć fundusze.",
        options: [
          { label: "Zataić prawdę i obciążyć winą Prześladowców/Mengego", outcome: "Ciri i Jaskier zostają osłonięci, lecz Geralt naraża się dodatkowo Prześladowcom Wiecznego Ognia, a Dijkstra nie poznaje pełnej prawdy o swoim skarbie." },
          { label: "Ujawnić Dijkstrze prawdę o Jaskrze i Ciri", outcome: "Dijkstra poznaje realny obraz sytuacji, co może wpłynąć na jego późniejszą gotowość do udzielenia Geraltowi pomocy militarnej podczas bitwy o Kaer Morhen w dalszej części gry." }
        ]
      }
    ],
    consequences: "Sposób rozegrania tej sprawy z Dijkstrą ma odroczone, ale realne skutki - wpływa na to, czy szpieg zdecyduje się wesprzeć Geralta swoimi ludźmi w kluczowej bitwie o Kaer Morhen później w fabule."
  },
  {
    id: "przysluga-dla-radowida",
    title: "Przysługa dla Radowida (A Favor for Radovid)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 20,
    summary: "Zaraz po rozprawieniu się z Whoreson Juniorem Geralta przechwytują żołnierze króla Radowida i sprowadzają na pokład okrętu HMS Oksenfurt-Tretogor. Król żąda odnalezienia i schwytania znienawidzonej przez siebie czarodziejki Philippy Eilhart.",
    walkthrough: [
      "Daj się eskortować (lub zostań zatrzymany) przez żołnierzy Radowida po zakończeniu sprawy Juniora.",
      "Wysłuchaj żądań króla na pokładzie okrętu HMS Oksenfurt-Tretogor.",
      "Przyjmij (formalnie lub z rezerwą) zlecenie odnalezienia Philippy Eilhart."
    ],
    choices: [],
    consequences: "Rozmowa uruchamia poboczny wątek dotyczący Philippy Eilhart oraz pogłębia napięcie między Geraltem a paranoicznym, opętanym nienawiścią do magów królem Radowidem."
  },
  {
    id: "niech-zyje-sztuka",
    title: "Niech żyje sztuka! (The Play's the Thing)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 21,
    summary: "By namierzyć ukrywającego się w Novigradzie zmiennokształtnego doppelgangera Dudu, Geralt i Priscilla organizują przedstawienie teatralne mające wywabić go z ukrycia. Przygotowania obejmują casting, angażowanie obsady i naganiaczy.",
    walkthrough: [
      "Porozmawiaj z Priscillą o planie wystawienia sztuki jako przynęty na Dudu.",
      "Wybierz gatunek przedstawienia - komedię lub dramat.",
      "Zatrudnij bileterów (zapłać lub wygraj zakład w bijatyce 2 na 1).",
      "Rozwiąż problem z konkurencyjnymi naganiaczami (walka, zapłata lub znak Axii).",
      "Wybierz aktorkę do roli księżniczki - Priscillę lub Irinę Renarde.",
      "Zagraj rolę wiedźmina na scenie, trafnie dobierając kwestie w kluczowych momentach.",
      "Podczas przedstawienia rozpoznaj Dudu na widowni i wciągnij go dyskretnie na scenę, nie zdradzając jego tożsamości."
    ],
    choices: [
      {
        point: "Gatunek sztuki",
        context: "Priscilla pyta, czy przedstawienie ma być komedią, czy dramatem.",
        options: [
          { label: "Komedia", outcome: "Publiczność jest zadowolona, Geralt otrzymuje dodatkową zapłatę; przedstawienie kończy się bez zakłóceń." },
          { label: "Dramat", outcome: "Podburzony przez prowokatora tłum wznieca zamieszki, zmuszając Geralta i Zoltana do walki podczas spektaklu." }
        ]
      },
      {
        point: "Obsada roli księżniczki",
        context: "Do roli księżniczki w sztuce trzeba wybrać jedną z dwóch aktorek.",
        options: [
          { label: "Priscilla", outcome: "Priscilla gra główną rolę - wpływa na przebieg niektórych scen i pulę nagród związanych z jej wątkiem." },
          { label: "Irina Renarde", outcome: "Rolę obejmuje Irina - alternatywny przebieg castingu z inną dynamiką sceniczną i inną pulą nagród." }
        ]
      }
    ],
    consequences: "Udane przedstawienie pozwala bezpiecznie zidentyfikować i skontaktować się z Dudu, który dostarcza dalszych informacji o Jaskrze i wydarzeniach związanych z Ciri."
  },
  {
    id: "poeta-w-opalach",
    title: "Poeta w opałach (A Poet Under Pressure)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 22,
    summary: "Jaskier trafia do więzienia na Wyspie Świątynnej, skąd Geralt organizuje jego brawurowe odbicie. Po udanej, choć niepełnej zasadzce wiedźmin musi tropić eskortę więzienną, by uwolnić przyjaciela przed egzekucją.",
    walkthrough: [
      "Zorganizuj grupę ratunkową z Zoltanem Chivayem przy Gospodzie Pod Siedmioma Kotami.",
      "Jeśli wcześniej pomogłeś Dijkstrze w 'Skarbie hrabiego Reuvena', poproś go o dodatkowych ludzi do zasadzki.",
      "Poczekaj na transport więzienny, korzystając np. z partyjki Gwinta z Priscillą.",
      "Zaatakuj konwój w zasadzce - część strażników pada, lecz jeden ucieka z Jaskrem na koniu.",
      "Użyj Zmysłów Wiedźmina, by tropić ślady przez kolejne lokacje, zbierając po drodze pierścień i kartki z wierszami Jaskra.",
      "Dotrzyj do odosobnionej chaty zamieszkanej przez niziołków i skorzystaj z tajnego tunelu.",
      "Pokonaj Prześladowcę pilnującego związanego Jaskra i uwolnij barda."
    ],
    choices: [
      {
        point: "Liczba ludzi Dijkstry do zasadzki",
        context: "Jeśli wcześniej Geralt pomógł Dijkstrze odzyskać skarb, szpieg oferuje wsparcie zbrojne do akcji odbicia Jaskra.",
        options: [
          { label: "Przyjąć podstawowe 3 osoby", outcome: "Zasadzka odbywa się z minimalnym wsparciem Dijkstry." },
          { label: "Nalegać na więcej ludzi, zachowując misję w tajemnicy", outcome: "Dijkstra zgadza się dać 4 ludzi w zamian za dyskrecję." },
          { label: "Nalegać na więcej ludzi, ujawniając cel misji", outcome: "Dijkstra zgadza się dać aż 6 ludzi, wiedząc dokładnie, o co chodzi w akcji." }
        ]
      }
    ],
    consequences: "Uratowanie Jaskra kończy novigradzki wątek poszukiwań i otwiera drogę do finałowej retrospekcji Ciri, pokazującej wydarzenia bezpośrednio poprzedzające jego pojmanie."
  },
  {
    id: "historia-ciri-na-zlamanie-karku",
    title: "Historia Ciri: Na złamanie karku (Ciri's Story: Breakneck Speed)",
    type: "main",
    dlc: "base",
    chapter: "Akt I",
    order: 23,
    summary: "Retrospekcja tłumacząca okoliczności pojmania Jaskra: po starciu z Whoreson Juniorem Ciri i bard próbują uciec z Novigradu, lecz zostają osaczeni przez Straż Świątynną. Broniąc przyjaciela, Ciri po raz kolejny sięga po moc Starszej Krwi, płacąc za to rozdzieleniem z Jaskrem.",
    walkthrough: [
      "Steruj Ciri uciekającą wraz z Jaskrem konno z kryjówki Juniora w stronę Wyspy Świątynnej.",
      "Przedzieraj się przez ulice, ścigana przez zbirów Juniora.",
      "Na Wyspie Świątynnej natknij się na Nathaniela Pastodiego i pokonaj kolejnych siepaczy.",
      "Obserwuj nadciągającą Straż Świątynną, odcinającą drogi ucieczki.",
      "Zareaguj, gdy strażnik strzela z kuszy w Ciri, a Jaskier heroicznie osłania ją przed strzałem.",
      "Użyj mocy teleportacji Starszej Krwi, by zniknąć z oblężonego miejsca, zostawiając Jaskra na pastwę Straży."
    ],
    choices: [],
    consequences: "To domykająca Akt I retrospekcja - wyjaśnia okoliczności pojmania Jaskra przez Straż Świątynną, którego uwolnienie było celem poprzedzającego ją zadania 'Poeta w opałach'. Po zakończeniu wątku novigradzkiego gracz kieruje się w stronę Skellige, rozpoczynając kolejny etap poszukiwań Ciri (Akt II)."
  }
];

if (typeof module !== "undefined") { module.exports = MAIN_ACT1; }
