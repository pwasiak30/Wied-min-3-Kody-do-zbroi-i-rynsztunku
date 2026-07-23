/* ==========================================================================
   Wiedźmin 3 - dane tutorialu (zadania główne i poboczne)
   Wygenerowane na podstawie researchu community guide'ów.
   ========================================================================== */

const TUTORIAL_QUESTS = [
  {
    "id": "kaer-morhen",
    "title": "Kaer Morhen",
    "type": "main",
    "dlc": "base",
    "chapter": "Prolog",
    "order": 1,
    "summary": "Gra rozpoczyna się od onirycznej sekwencji rozgrywającej się w twierdzy Kaer Morhen. Geralt budzi się po kąpieli przerwanej przez Yennefer, spotyka Ciri i Vesemira, po czym scena okazuje się snem/wspomnieniem przerwanym atakiem Dzikiego Gonu. To czysty samouczek wprowadzający w mechanikę gry.",
    "walkthrough": [
      "Obudź się w kwaterze gościnnej Kaer Morhen po kąpieli przerwanej przez Yennefer.",
      "Użyj Zmysłów Wiedźmina, by odnaleźć klucz i opuścić pokój.",
      "Zejdź do dolnych poziomów twierdzy, gdzie spotkasz Ciri i Vesemira.",
      "Opcjonalnie prześcigaj się z Ciri po blankach murów.",
      "Przejdź trening walki (znaki, miecze) prowadzony przez Vesemira.",
      "Obejrzyj scenę ataku Dzikiego Gonu na twierdzę i pozorną 'śmierć' Ciri.",
      "Obudź się jako Geralt jadący u boku Vesemira w stronę Białego Sadu - koniec snu."
    ],
    "choices": [],
    "consequences": "Czysto samouczkowy prolog bez wpływu na fabułę - wprowadza mechanikę walki i przedstawia relację Geralt-Ciri-Vesemir-Yennefer, kluczową dla motywacji bohatera w dalszej grze."
  },
  {
    "id": "bez-i-agrest",
    "title": "Bez i agrest (Lilac and Gooseberries)",
    "type": "main",
    "dlc": "base",
    "chapter": "Prolog",
    "order": 2,
    "summary": "Geralt i Vesemir docierają do zniszczonego wojną Białego Sadu, wioski pod okupacją Nilfgaardu, tropiąc Yennefer. Po drodze odpierają atak ghuli i rozpytują miejscowych o czarodziejkę, trafiając ostatecznie do nilfgaardzkiego garnizonu.",
    "walkthrough": [
      "Jedź z Vesemirem w stronę Białego Sadu, ucząc się podstaw jazdy konnej i walki.",
      "Stocz walkę z ghulami przy przydrożnym obozowisku.",
      "Dotrzyj do wioski Biały Sad, zniszczonej działaniami wojennymi.",
      "W miejscowej karczmie porozmawiaj z podróżnymi o poszukiwanej kobiecie.",
      "Kupiec Gaunter O'Dimm rozpoznaje opis Yennefer i wskazuje, że rozmawiała z nilfgaardzkim kapitanem.",
      "Udaj się do nilfgaardzkiego garnizonu i porozmawiaj z kapitanem Peterem Saarem Gwynleve.",
      "Zawrzyj układ: informacje o Yennefer w zamian za zabicie gryfa terroryzującego okolicę - zlecenie przechodzi w zadanie 'Bestia z Białego Sadu'."
    ],
    "choices": [],
    "consequences": "Quest wprowadza gracza w realia wojny Nilfgaardu z Redanią i ustanawia główny cel prologu: odnalezienie Yennefer poprzez rozwiązanie problemu gryfa."
  },
  {
    "id": "bestia-z-bialego-sadu",
    "title": "Bestia z Białego Sadu (The Beast of White Orchard)",
    "type": "main",
    "dlc": "base",
    "chapter": "Prolog",
    "order": 3,
    "summary": "Geralt tropi i zabija gryfa terroryzującego okolice Białego Sadu, by w zamian uzyskać od Nilfgaardczyków informacje o miejscu pobytu Yennefer. Śledztwo ujawnia, że agresja bestii wynika z zabicia przez żołnierzy jej samicy w gnieździe.",
    "walkthrough": [
      "Porozmawiaj z myśliwym Mislavem o miejscu ataku na nilfgaardzki patrol.",
      "Użyj Zmysłów Wiedźmina na miejscu ataku, by ustalić, że żołnierze zabili samicę gryfa śpiącą w gnieździe.",
      "Odwiedź zielarkę Tomirę i dowiedz się o kolcowoju - przynęcie potrzebnej do pułapki.",
      "Zbierz kolcowój nad brzegiem pobliskiej rzeki.",
      "Spotkaj się z Vesemirem w karczmie w Białym Sadzie i zaplanujcie zasadzkę na polu farmera Boyana.",
      "Rozstaw przynętę i stocz walkę z gryfem, gdy przyleci do pułapki.",
      "Wróć do nilfgaardzkiego dowódcy po nagrodę i informację, że Yennefer pojechała do Wyzimy."
    ],
    "choices": [
      {
        "point": "Zapłata za wykonanie kontraktu",
        "context": "Po zabiciu gryfa nilfgaardzki dowódca oferuje Geraltowi zapłatę za wykonanie zlecenia.",
        "options": [
          {
            "label": "Przyjmij zapłatę",
            "outcome": "Geralt otrzymuje ok. 300 pkt. doświadczenia i 150 koron - bez dalszych konsekwencji fabularnych."
          },
          {
            "label": "Odmów zapłaty",
            "outcome": "Geralt otrzymuje więcej doświadczenia (ok. 400 pkt.) kosztem korony - czysto mechaniczny wybór bez wpływu na fabułę."
          }
        ]
      }
    ],
    "consequences": "Zabicie gryfa jest warunkiem koniecznym do uzyskania od Nilfgaardu informacji, że Yennefer przebywa w Wyzimie, co prowadzi do kolejnych wydarzeń prologu."
  },
  {
    "id": "incydent-w-bialym-sadzie",
    "title": "Incydent w Białym Sadzie (The Incident at White Orchard)",
    "type": "main",
    "dlc": "base",
    "chapter": "Prolog",
    "order": 4,
    "summary": "Geralt i Vesemir wracają do karczmy w Białym Sadzie, gdzie wybucha bójka z bandytami. Po jej stłumieniu przerażony karczmarz wyrzuca ich, a na zewnątrz witcherowie natykają się na nilfgaardzki patrol prowadzony przez samą Yennefer.",
    "walkthrough": [
      "Wejdź z Vesemirem do karczmy w Białym Sadzie.",
      "Obserwuj eskalację konfliktu - Vesemir staje w obronie karczmarza.",
      "Stocz krótką walkę z bandytami/maruderami w karczmie.",
      "Po walce zostań wyproszony przez przestraszonego karczmarza.",
      "Na zewnątrz natknij się na nilfgaardzki patrol dowodzony przez Yennefer."
    ],
    "choices": [],
    "consequences": "Rozpoczęcie tego zadania kończy dostępność większości aktywności pobocznych w Białym Sadzie i bezpośrednio prowadzi do spotkania z Yennefer oraz wyjazdu do Wyzimy na audiencję u cesarza."
  },
  {
    "id": "audiencja",
    "title": "Audiencja (Imperial Audience)",
    "type": "main",
    "dlc": "base",
    "chapter": "Prolog",
    "order": 5,
    "summary": "Geralt jedzie z Yennefer i nilfgaardzkim orszakiem do Wyzimy na audiencję u cesarza Emhyra var Emreisa. Po przygotowaniach (kąpiel, ogolenie brody, przesłuchanie przez generała Voorhisa) wiedźmin dowiaduje się, że Ciri żyje i jest ścigana przez Dziki Gon, a jego zadaniem jest ją odnaleźć.",
    "walkthrough": [
      "Dotrzyj do Wyzimy w towarzystwie Yennefer i wojsk Nilfgaardu.",
      "Przejdź przygotowania do audiencji - kąpiel i przymusowe ogolenie brody na życzenie szambelana.",
      "Odpowiadaj na pytania generała Morvrana Voorhisa dotyczące przeszłości Geralta (możliwa symulacja wyborów z Wiedźmina 2, jeśli zaimportowano zapis).",
      "Wybierz strój na audiencję.",
      "Stań przed cesarzem Emhyrem var Emreisem i zdecyduj, czy się ukłonić.",
      "Wysłuchaj propozycji: odnajdź Ciri, zanim zrobi to Dziki Gon, w zamian za sowitą zapłatę.",
      "Porozmawiaj z Yennefer o podziale sił - ona jedzie na Skellige, Geralt ma przeszukać Velen, a oboje spotkają się później z Triss w Novigradzie."
    ],
    "choices": [
      {
        "point": "Ukłon przed Emhyrem",
        "context": "Podczas audiencji Geralt staje twarzą w twarz z cesarzem Nilfgaardu.",
        "options": [
          {
            "label": "Ukłoń się",
            "outcome": "Emhyr reaguje złośliwą, lecz niegroźną uwagą - okazanie szacunku nie ma dalszych skutków fabularnych."
          },
          {
            "label": "Nie kłaniaj się",
            "outcome": "Szambelan jest oburzony brakiem etykiety i to on, nie Geralt, zostaje ukarany za ten afront - czysto charakterystyczny wybór roleplayowy, bez wpływu na główny wątek."
          }
        ]
      }
    ],
    "consequences": "Audiencja formalnie otwiera Akt I: ustanawia cel (odnalezienie Ciri przed Dzikim Gonem), wynagrodzenie oraz podział zadań między Geralta i Yennefer (Velen/Novigrad kontra Skellige)."
  },
  {
    "id": "nilfgaardzki-lacznik",
    "title": "Nilfgaardzki łącznik (The Nilfgaardian Connection)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 6,
    "summary": "Geralt przybywa do spustoszonego wojną Velen w poszukiwaniu cesarskiego agenta Hendrika, który miał trop na Ciri. W Karczmie Pod Rozstajami natyka się na ludzi Krwawego Barona, a finalnie odkrywa, że Dziki Gon dotarł do Hendrika pierwszy.",
    "walkthrough": [
      "Dotrzyj do Velen i Karczmy Pod Rozstajami.",
      "Rozpytaj o agenta Hendrika, prowadzącego śledztwo w sprawie Ciri.",
      "Skonfrontuj się z ludźmi Krwawego Barona nagabującymi Geralta w karczmie.",
      "Podążaj tropem do wsi Heatherton, gdzie ukrywał się Hendrik.",
      "Odkryj ślady rzezi - Dziki Gon dotarł tam pierwszy, torturując i zabijając Hendrika.",
      "Przeszukaj ukrytą piwniczkę Hendrika Zmysłami Wiedźmina.",
      "Znajdź notatki wskazujące na dwa tropy: Krwawego Barona w Wrońcach oraz czarownicę pod Midcopse."
    ],
    "choices": [
      {
        "point": "Konfrontacja z ludźmi Barona w karczmie",
        "context": "Zbrojni ludzie Krwawego Barona zaczepiają Geralta, żądając wyjaśnień powodów jego wizyty.",
        "options": [
          {
            "label": "Stoczyć walkę",
            "outcome": "Ludzie Barona zostają pokonani lub zabici - w efekcie przy wejściu do Wroniec w zadaniu 'Krwawy Baron' strażnicy są wrogo nastawieni i blokują wejście, wymuszając przejście siłą przez jaskinie."
          },
          {
            "label": "Zastraszyć ich, ujawniając się jako wiedźmin",
            "outcome": "Ludzie Barona wycofują się bez walki, co ułatwia (choć nie gwarantuje pełnego zaufania) późniejsze wejście do Wroniec."
          },
          {
            "label": "Postawić im kolejkę / rozładować sytuację towarzysko",
            "outcome": "Konflikt zostaje rozwiązany polubownie - strażnicy Wroniec wpuszczają później Geralta bez większych utrudnień."
          }
        ]
      }
    ],
    "consequences": "Zadanie wyznacza dwa równoległe tropy poszukiwań Ciri w Velen - Krwawego Barona i tajemniczą czarownicę - a sposób potraktowania ludzi Barona wpływa na przyjęcie, jakie spotka Geralta w Wrońcach."
  },
  {
    "id": "krwawy-baron",
    "title": "Krwawy Baron (Bloody Baron)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 7,
    "summary": "Geralt dociera do zamku Wrońce, siedziby Krwawego Barona - lokalnego watażki, który jako jeden z niewielu wie, że Ciri przebywała w regionie. W zamian za pełne informacje baron żąda pomocy w odnalezieniu swojej zaginionej żony i córki.",
    "walkthrough": [
      "Podejdź do bram Wroniec - sposób przyjęcia zależy od wcześniejszych decyzji podjętych w 'Nilfgaardzkim łączniku'.",
      "W razie wrogości strażników znajdź alternatywne wejście przez system jaskiń, wskazany przez starca przy bramie.",
      "W wariancie pokojowym przejdź eskortowany przez sierżanta, prowadząc po drodze rozmowę o toczącej się wojnie.",
      "Dotrzyj do komnat barona i porozmawiaj z nim o Ciri.",
      "Wysłuchaj relacji: Ciri pojawiła się w Wrońcach wyczerpana, ranna i przemoczona.",
      "Zgódź się na układ barona: pomoc w odnalezieniu jego żony Anny i córki Tamary w zamian za pełne informacje o Ciri."
    ],
    "choices": [
      {
        "point": "Droga do zamku przez jaskinie (gdy strażnicy są wrogo nastawieni)",
        "context": "Napotkany przy jaskiniach starzec oferuje wskazanie bezpieczniejszej drogi do Wroniec.",
        "options": [
          {
            "label": "Zapłać staruszkowi 15 koron",
            "outcome": "Geralt otrzymuje jasne wskazówki i sprawniej przechodzi przez jaskinie."
          },
          {
            "label": "Odmów zapłaty i szukaj drogi samodzielnie",
            "outcome": "Geralt musi znaleźć wejście sam, co wiąże się z dodatkowymi starciami w jaskiniach, ale oszczędza monety."
          }
        ]
      }
    ],
    "consequences": "Zawarty z baronem układ uruchamia poboczny, lecz istotny dla Velen wątek poszukiwania jego rodziny (rozwijany w osobnym zestawie zadań pobocznych), niezbędny do uzyskania pełnych informacji o dalszych losach Ciri w regionie."
  },
  {
    "id": "historia-ciri-krol-wilkow",
    "title": "Historia Ciri: Król Wilków (Ciri's Story: The King of the Wolves)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 8,
    "summary": "Pierwsza grywalna retrospekcja Ciri w Velen - uciekając przez las, dziewczyna trafia na zagubioną dziewczynkę Gretkę, po czym tropi wilkołaka odpowiedzialnego za śmierć wieśniaka. Epizod kończy się przybyciem do Wroniec i pierwszym kontaktem z baronem.",
    "walkthrough": [
      "Steruj Ciri uciekającą przez las i spadającą do koryta rzeki.",
      "Podążaj wzdłuż rzeki i uratuj dziewczynkę imieniem Gretka, osaczoną przez wilki na drzewie.",
      "Zbadaj zmasakrowane zwłoki, by Zmysłami Wiedźmina ustalić, że zabójcą jest wilkołak.",
      "Przygotuj odpowiedni olej/składniki alchemiczne do walki z bestią.",
      "Wejdź do jaskini i pokonaj 'Króla Wilków' - wilkołaka czyhającego na kolejną ofiarę.",
      "Uratuj ocalałego wieśniaka i razem z Gretką udaj się do Wroniec po nagrodę u barona."
    ],
    "choices": [],
    "consequences": "Epizod pokazuje pierwsze kroki Ciri w Velen i jej relację z baronem, który zatrzymuje Gretkę do pracy w kuchni zamiast odesłać ją do głodującej rodziny - sygnał moralnej dwuznaczności barona, zanim odmówi ujawnienia dalszych informacji o Ciri bez pomocy w odnalezieniu własnej rodziny."
  },
  {
    "id": "na-ratunek-ksiezniczce",
    "title": "Na ratunek Księżniczce (A Princess in Distress)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 9,
    "summary": "Poszukując guślarza, który mógłby pomóc namierzyć zaginioną rodzinę barona, Geralt musi najpierw odzyskać jego zbiegłą kozę o imieniu Księżniczka. Dopiero po jej odnalezieniu guślarz zgadza się pomóc w dalszym śledztwie.",
    "walkthrough": [
      "Odnajdź chatę guślarza w Velen i wysłuchaj jego żądania.",
      "Weź od niego dzwonek przywabiający kozę Księżniczkę.",
      "Wejdź do lasu za chatą i użyj Zmysłów Wiedźmina oraz dzwonka, by odnaleźć zwierzę.",
      "Prowadź kozę z powrotem, dzwoniąc, gdy odbiega w poszukiwaniu jedzenia.",
      "Obroń kozę przed atakiem niedźwiedzia (lub unikaj starcia, uspokajając ją znakiem Axii).",
      "Dostarcz Księżniczkę guślarzowi i uzyskaj jego pomoc w wróżbie dotyczącej rodziny barona."
    ],
    "choices": [
      {
        "point": "Sposób prowadzenia kozy",
        "context": "Koza Księżniczka nieustannie odbiega w stronę jedzenia, co grozi starciem z niedźwiedziem.",
        "options": [
          {
            "label": "Prowadzić kozę zwykłym dzwonieniem",
            "outcome": "W pewnym momencie dochodzi do ataku niedźwiedzia, którego trzeba pokonać w walce."
          },
          {
            "label": "Użyć znaku Axii, by uspokoić kozę",
            "outcome": "Koza porusza się wolniej, ale spotkanie z niedźwiedziem zostaje ominięte - czysto gameplayowy wybór bez wpływu na fabułę."
          }
        ]
      }
    ],
    "consequences": "Odzyskanie kozy jest warunkiem koniecznym do kontynuowania śledztwa w sprawie zaginionej rodziny barona, prowadzącego do wątku pobocznego rozwijanego w kolejnych zadaniach."
  },
  {
    "id": "historia-ciri-wyscig",
    "title": "Historia Ciri: Wyścig (Ciri's Story: The Race)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 10,
    "summary": "Druga retrospekcja Ciri w Wrońcach: dziewczyna, ciesząc się gościnnością barona, wyzywa go na wyścig konny o wybranego przez siebie wierzchowca. Beztroska rywalizacja zostaje brutalnie przerwana atakiem bazyliszka.",
    "walkthrough": [
      "Obserwuj ucztę przy ognisku, podczas której Ciri rzuca baronowi wyzwanie na wyścig konny.",
      "Następnego ranka stań na starcie wyścigu.",
      "Prowadź konia wyznaczoną trasą, wyprzedzając barona.",
      "Dotrzyj w pobliże wieży na mecie, gdzie na parę spada bazyliszek.",
      "Dobądź broni do walki z bestią wraz z baronem."
    ],
    "choices": [],
    "consequences": "Beztroski epizod kończy się atakiem bazyliszka, który porywa barona i bezpośrednio prowadzi do dramatycznej kontynuacji w retrospekcji 'Wyjście z cienia'."
  },
  {
    "id": "historia-ciri-wyjscie-z-cienia",
    "title": "Historia Ciri: Wyjście z cienia (Ciri's Story: Out of the Shadows)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 11,
    "summary": "Bazyliszek porywa barona do swojego gniazda na szczycie wieży, a Ciri rusza mu na ratunek. Podczas finałowej walki dziewczyna po raz pierwszy świadomie używa mocy Starszej Krwi, by dosięgnąć bestii - co ma poważne, dalekosiężne konsekwencje.",
    "walkthrough": [
      "Ścigaj bazyliszka niosącego barona do jego wieży-gniazda.",
      "Wspinaj się po skalnych półkach wieży w stronę szczytu.",
      "Stocz walkę z bazyliszkiem, redukując jego punkty zdrowia.",
      "Gdy bestia wzbija się z baronem na szczyt, użyj mocy teleportacji Ciri, by go dosięgnąć.",
      "Zabij bazyliszka i uratuj barona.",
      "Wysłuchaj, jak Ciri uświadamia sobie, że użycie magii mogło zdradzić jej lokalizację Dzikiemu Gonowi."
    ],
    "choices": [],
    "consequences": "Użycie przez Ciri Starszej Krwi zostaje wyczute przez Eredina, dowódcę Dzikiego Gonu, co zmusza dziewczynę do natychmiastowej ucieczki z Wroniec w stronę Novigradu, by nie sprowadzić zagrożenia na nowych sprzymierzeńców."
  },
  {
    "id": "polowanie-na-czarownice",
    "title": "Polowanie na czarownicę (Hunting a Witch)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 12,
    "summary": "Drugi trop z notatek Hendrika prowadzi Geralta do tajemniczej czarownicy mieszkającej niedaleko Midcopse. W jej opuszczonej chacie Geralt odkrywa magiczny portal prowadzący do podziemnej groty, gdzie poznaje Keirę Metz - swoją starą znajomą.",
    "walkthrough": [
      "Rozpytaj mieszkańców Midcopse (plotki przy studni, starzec przy wjeździe, mąż plotkującej kobiety) o lokalizację czarownicy.",
      "Podążaj na północ od wsi do stawu, a następnie do charakterystycznego głazu wskazującego zarośniętą ścieżkę.",
      "Pokonaj piątkę nekkerów strzegących porzuconego wozu.",
      "Wejdź do opuszczonej chaty i użyj Zmysłów Wiedźmina, by znaleźć pentagram i naznaczoną czaszkę.",
      "Dotknij czaszki, by aktywować portal do podziemnej groty.",
      "Spotkaj Keirę Metz i dowiedz się, że zamaskowany elfi mag wypytywał ją o Ciri.",
      "Zgódź się na wspólną wyprawę do elfich ruin na północny zachód od Byways, gdzie ukrywa się ów mag."
    ],
    "choices": [],
    "consequences": "Spotkanie z Keirą Metz otwiera drugi, niezależny od barona trop poszukiwań Ciri - prowadzący do elfich ruin, gdzie odkryte zostaną ślady obecności Dzikiego Gonu (rozwijane w dalszym, poufnym wątku pobocznym)."
  },
  {
    "id": "historia-ciri-ucieczka-z-moczarow",
    "title": "Historia Ciri: Ucieczka z moczarów (Ciri's Story: Fleeing the Bog)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 13,
    "summary": "Chronologicznie najwcześniejsza retrospekcja Ciri w Velen, choć odblokowywana jako ostatnia: dziewczyna budzi się w chacie Wiedźm z Kaczego Bagna i, poznawszy ich mroczne zamiary, ucieka przez trzęsawiska przed Imlerithem, generałem Dzikiego Gonu.",
    "walkthrough": [
      "Obudź się jako Ciri w chacie na Kaczym Bagnie i odkryj złowieszcze zamiary Wiedźm.",
      "Rusz przez bagna, unikając (lub eliminując) topielców i wojowników Dzikiego Gonu wychodzących z portali.",
      "Uciekaj przed Imlerithem - generałem Dzikiego Gonu wysłanym po Ciri.",
      "Skorzystaj z możliwości ukrycia się na drzewie, by przeczekać zagrożenie.",
      "Zeskocz i kontynuuj ucieczkę, pokonując kolejne przeszkody terenowe.",
      "Dotrzyj do celu, kończąc epizod ucieczki z bagien."
    ],
    "choices": [],
    "consequences": "Retrospekcja domyka wątek Ciri w Velen, wyjaśniając, jak trafiła w ręce Wiedźm z Kaczego Bagna, zanim uciekła stamtąd, trafiła do lasu i wreszcie do Wroniec - zamykając w ten sposób krąg wydarzeń opisanych we wcześniejszych retrospekcjach."
  },
  {
    "id": "stosy-novigradu",
    "title": "Stosy Novigradu (Pyres of Novigrad)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 14,
    "summary": "Geralt przybywa do Novigradu, miasta ogarniętego religijnym fanatyzmem Kościoła Wiecznego Ognia, gdzie na stosach płoną oskarżeni o czary. Wiedźmin szuka Triss Merigold, by z jej pomocą trafić na trop Ciri, lecz musi najpierw pomóc jej w niebezpiecznym zleceniu przemytniczym.",
    "walkthrough": [
      "Wjedź do Novigradu i bądź świadkiem publicznego palenia domniemanych magów przez Prześladowców Caleba Menge'a.",
      "Odwiedź dawną kryjówkę Triss - jest splądrowana przez szabrowników, którzy sugerują, że uciekła do Zgniłego Gaju.",
      "Skonfrontuj się z Calebem Menge, który grozi Geraltowi jako 'niepożądanemu' wiedźminowi w mieście.",
      "Wybierz sposób dotarcia do ukrytego Zgniłego Gaju (tropienie złodziei, przekupienie żebraków lub wejście przez kanały).",
      "Spotkaj Triss oraz Króla Żebraków w Zgniłym Gaju.",
      "Pomóż Triss w robocie przemytniczej - rozstaw kadzidło w magazynie zgodnie z jej instrukcjami.",
      "Stocz walkę z Prześladowcami, którzy nadciągają wraz z konkurentem Brandonem.",
      "Uzyskaj od Triss trop na oniromantkę Corinne Tilly, mogącą pomóc odnaleźć Ciri poprzez sny."
    ],
    "choices": [
      {
        "point": "Sposób dotarcia do Zgniłego Gaju",
        "context": "Wejście do ukrytej kryjówki podziemia Novigradu jest strzeżone; istnieje kilka sposobów na znalezienie drogi.",
        "options": [
          {
            "label": "Podążyć za złodziejaszkami",
            "outcome": "Prowadzi do starcia z drobnymi przestępcami, ale otwiera dojście do Gaju."
          },
          {
            "label": "Przekupić żebraków",
            "outcome": "Kosztuje monety, lecz pozwala uniknąć walki po drodze."
          },
          {
            "label": "Znaleźć wejście przez kanały",
            "outcome": "Alternatywna, ukryta droga - inny przebieg eksploracji, ten sam efekt końcowy."
          }
        ]
      }
    ],
    "consequences": "Zadanie na nowo łączy Geralta z Triss i wprowadza go w podziemny świat Novigradu rządzony przez Króla Żebraków, otwierając novigradzki wątek poszukiwań Ciri."
  },
  {
    "id": "sen-w-wielkim-miescie",
    "title": "Sen w wielkim mieście (Novigrad Dreaming)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 15,
    "summary": "Triss kieruje Geralta do oniromantki Corinne Tilly, pogrążonej w magicznym śnie za sprawą godlinga imieniem Sarah. Po uwolnieniu Corinne kobieta przeprowadza sesję śnienia, dającą pierwszy konkretny trop na obecność Ciri w Novigradzie.",
    "walkthrough": [
      "Udaj się do domu Corinne Tilly i odkryj, że śpi zaklęta magicznym snem.",
      "Podążaj za wskazówkami dotyczącymi lalki i strychu, by odnaleźć szmacianą lalkę.",
      "Umieść lalkę w kołysce i odczytaj rysunek na drzwiach.",
      "Zejdź do piwnicy i odnajdź piec, w którym ukrywa się godling Sarah.",
      "Porozmawiaj z Sarah i zdecyduj o jej dalszym losie.",
      "Spotkaj przebudzoną Corinne w karczmie Złoty Jesiotr.",
      "Weź udział w seansie śnienia, odpowiadając na osobiste pytania o Ciri.",
      "Zdobądź informację, że Ciri kontaktowała się w Novigradzie z Jaskrem, który odziedziczył burdel Pod Rozmarynem i Tymiankiem."
    ],
    "choices": [
      {
        "point": "Los godlinga Sarah",
        "context": "Godling Sarah nawiedza dom Corinne Tilly i utrzymuje ją w magicznym śnie.",
        "options": [
          {
            "label": "Pozwól jej zostać (zawrzyj układ)",
            "outcome": "Sarah pozostaje w domu na uzgodnionych warunkach - łagodne rozwiązanie bez przemocy wobec istoty."
          },
          {
            "label": "Wypędź ją (spal ziele przy użyciu znaku Igni)",
            "outcome": "Sarah zostaje zmuszona do opuszczenia domu - miejsce staje się bezpieczne dla Corinne, kosztem losu godlinga."
          }
        ]
      }
    ],
    "consequences": "Trop uzyskany od Corinne Tilly bezpośrednio kieruje Geralta do Jaskra i burdelu Pod Rozmarynem i Tymiankiem, otwierając kolejny etap śledztwa w Novigradzie."
  },
  {
    "id": "spis-cudzoloznic",
    "title": "Spis cudzołożnic (Broken Flowers)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 16,
    "summary": "Trop prowadzi do Jaskra, lecz w burdelu Pod Rozmarynem i Tymiankiem Geralt zastaje jedynie Zoltana Chivaya. Wspólnie, na podstawie kalendarzyka spotkań barda, odwiedzają kolejne kobiety, by ustalić miejsce pobytu poety i jego związek z Ciri.",
    "walkthrough": [
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
    "choices": [],
    "consequences": "Śledztwo ujawnia, że Ciri i Jaskier próbowali zdobyć pieniądze kradzieżą u Sigiego Reuvena (w rzeczywistości Dijkstry), co uruchamia dwa równoległe wątki: konieczność kontaktu z Dijkstrą oraz konfrontację z Whoreson Juniorem."
  },
  {
    "id": "dorwac-juniora",
    "title": "Dorwać Juniora (Get Junior)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 17,
    "summary": "By dotrzeć do Jaskra, Geralt musi zmierzyć się z Whoreson Juniorem - bezwzględnym gangsterem z novigradzkiego półświatka, powiązanym z królem Radowidem. Śledztwo prowadzi przez trzy jego przybytki, aż do finałowej konfrontacji.",
    "walkthrough": [
      "Spotkaj się z Sigim Reuvenem (Dijkstrą) i innymi przedstawicielami novigradzkiej 'wielkiej czwórki' w łaźni Sigismunda.",
      "Zbadaj trzy miejsca należące do Juniora: rezydencję, arenę i kasyno, szukając poszlak.",
      "Na arenie i w kasynie zdecyduj, czy wejść siłą, czy podstępem/pokojowo.",
      "Odkryj dokumenty świadczące o powiązaniach Juniora z królem Radowidem.",
      "Uwolnij związanego niziołka w kasynie, by zdobyć dodatkowe informacje.",
      "Spotkaj się z Vernonem Roche'em w Oksenfurckim Klubie Szachistów, gdzie sam król Radowid zdradza lokalizację kryjówki Juniora.",
      "Przebij się przez strażników do kryjówki i skonfrontuj się z Whoreson Juniorem."
    ],
    "choices": [
      {
        "point": "Los Whoreson Juniora",
        "context": "Po dotarciu do kryjówki Geralt ma Juniora w swojej mocy i musi zdecydować, co z nim zrobić.",
        "options": [
          {
            "label": "Zabić Juniora",
            "outcome": "Geralt bez wahania zabija bandytę - szybkie, ostateczne rozwiązanie eliminujące go z dalszych wątków fabularnych."
          },
          {
            "label": "Oszczędzić go (okaleczyć/zhańbić)",
            "outcome": "Junior zostaje przy życiu w hańbie i cierpieniu - decyzja ma odzwierciedlenie jedynie w drobnej wzmiance/epilogu później w grze i nie zmienia głównego przebiegu fabuły."
          }
        ]
      }
    ],
    "consequences": "Pokonanie Juniora otwiera dostęp do informacji o miejscu ukrycia Jaskra i uruchamia retrospekcję Ciri pokazującą jej wcześniejszą wizytę u tego samego gangstera."
  },
  {
    "id": "historia-ciri-z-wizyta-u-juniora",
    "title": "Historia Ciri: Z wizytą u Juniora (Ciri's Story: Visiting Junior)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 18,
    "summary": "Retrospekcja ukazująca wcześniejsze wydarzenia: Ciri i doppler Dudu włamują się do rezydencji Whoreson Juniora, by uratować torturowanego za niedotrzymanie obietnicy Dudu. Udana akcja kończy się jednak brutalnym pościgiem.",
    "walkthrough": [
      "Steruj Ciri włamującą się do posiadłości Whoreson Juniora wraz z Dudu.",
      "Pokonaj Juniora i jego ludzi, uwalniając torturowanego Dudu.",
      "Obserwuj, jak Dudu zmiennokształtny wtapia się w tłum, unikając pościgu.",
      "Uciekaj z Jaskrem przez ulice Novigradu, ścigana przez zbirów Juniora."
    ],
    "choices": [],
    "consequences": "Nieudany plan zdobycia pieniędzy u Juniora oraz następująca po nim ucieczka bezpośrednio prowadzą do pojmania Jaskra przez Straż Świątynną na Wyspie Świątynnej, co staje się kluczowym wątkiem końcówki Aktu I."
  },
  {
    "id": "skarb-hrabiego-reuvena",
    "title": "Skarb hrabiego Reuvena (Count Reuven's Treasure)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 19,
    "summary": "Sigismund Dijkstra, ukrywający się pod przybraną tożsamością hrabiego Sigiego Reuvena, zleca Geraltowi odnalezienie skradzionego mu skarbu w zamian za informacje o Jaskrze. Śledztwo prowadzi do odkrycia niewygodnej prawdy - złodziejami byli sami Jaskier i Ciri.",
    "walkthrough": [
      "Spotkaj się z Sigim Reuvenem (Dijkstrą) i podejmij się odnalezienia skradzionego skarbu.",
      "Zbadaj miejsce włamania w łaźni oraz kanały, przez które uciekli sprawcy.",
      "Znajdź fragment bomby ze śladami oleju wiwerniego i karmelu, wskazujący na celowy sabotaż, a nie działanie magiczne.",
      "Powiąż miejsce zbrodni z rezydencją zmarłego margrabiego Henckla, którego tożsamości ktoś użył.",
      "Przeszukaj rezydencję Henckla i odkryj kryjówkę z materiałami do budowy bomby oraz dowody wskazujące na Jaskra i Ciri jako sprawców.",
      "Zdecyduj, jak przedstawić sprawę Dijkstrze i/lub Prześladowcom (Mengemu)."
    ],
    "choices": [
      {
        "point": "Co powiedzieć o sprawcach kradzieży",
        "context": "Geralt odkrywa, że za skradzionym skarbem Dijkstry stoją w rzeczywistości Jaskier i Ciri, próbujący zdobyć fundusze.",
        "options": [
          {
            "label": "Zataić prawdę i obciążyć winą Prześladowców/Mengego",
            "outcome": "Ciri i Jaskier zostają osłonięci, lecz Geralt naraża się dodatkowo Prześladowcom Wiecznego Ognia, a Dijkstra nie poznaje pełnej prawdy o swoim skarbie."
          },
          {
            "label": "Ujawnić Dijkstrze prawdę o Jaskrze i Ciri",
            "outcome": "Dijkstra poznaje realny obraz sytuacji, co może wpłynąć na jego późniejszą gotowość do udzielenia Geraltowi pomocy militarnej podczas bitwy o Kaer Morhen w dalszej części gry."
          }
        ]
      }
    ],
    "consequences": "Sposób rozegrania tej sprawy z Dijkstrą ma odroczone, ale realne skutki - wpływa na to, czy szpieg zdecyduje się wesprzeć Geralta swoimi ludźmi w kluczowej bitwie o Kaer Morhen później w fabule."
  },
  {
    "id": "przysluga-dla-radowida",
    "title": "Przysługa dla Radowida (A Favor for Radovid)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 20,
    "summary": "Zaraz po rozprawieniu się z Whoreson Juniorem Geralta przechwytują żołnierze króla Radowida i sprowadzają na pokład okrętu HMS Oksenfurt-Tretogor. Król żąda odnalezienia i schwytania znienawidzonej przez siebie czarodziejki Philippy Eilhart.",
    "walkthrough": [
      "Daj się eskortować (lub zostań zatrzymany) przez żołnierzy Radowida po zakończeniu sprawy Juniora.",
      "Wysłuchaj żądań króla na pokładzie okrętu HMS Oksenfurt-Tretogor.",
      "Przyjmij (formalnie lub z rezerwą) zlecenie odnalezienia Philippy Eilhart."
    ],
    "choices": [],
    "consequences": "Rozmowa uruchamia poboczny wątek dotyczący Philippy Eilhart oraz pogłębia napięcie między Geraltem a paranoicznym, opętanym nienawiścią do magów królem Radowidem."
  },
  {
    "id": "niech-zyje-sztuka",
    "title": "Niech żyje sztuka! (The Play's the Thing)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 21,
    "summary": "By namierzyć ukrywającego się w Novigradzie zmiennokształtnego doppelgangera Dudu, Geralt i Priscilla organizują przedstawienie teatralne mające wywabić go z ukrycia. Przygotowania obejmują casting, angażowanie obsady i naganiaczy.",
    "walkthrough": [
      "Porozmawiaj z Priscillą o planie wystawienia sztuki jako przynęty na Dudu.",
      "Wybierz gatunek przedstawienia - komedię lub dramat.",
      "Zatrudnij bileterów (zapłać lub wygraj zakład w bijatyce 2 na 1).",
      "Rozwiąż problem z konkurencyjnymi naganiaczami (walka, zapłata lub znak Axii).",
      "Wybierz aktorkę do roli księżniczki - Priscillę lub Irinę Renarde.",
      "Zagraj rolę wiedźmina na scenie, trafnie dobierając kwestie w kluczowych momentach.",
      "Podczas przedstawienia rozpoznaj Dudu na widowni i wciągnij go dyskretnie na scenę, nie zdradzając jego tożsamości."
    ],
    "choices": [
      {
        "point": "Gatunek sztuki",
        "context": "Priscilla pyta, czy przedstawienie ma być komedią, czy dramatem.",
        "options": [
          {
            "label": "Komedia",
            "outcome": "Publiczność jest zadowolona, Geralt otrzymuje dodatkową zapłatę; przedstawienie kończy się bez zakłóceń."
          },
          {
            "label": "Dramat",
            "outcome": "Podburzony przez prowokatora tłum wznieca zamieszki, zmuszając Geralta i Zoltana do walki podczas spektaklu."
          }
        ]
      },
      {
        "point": "Obsada roli księżniczki",
        "context": "Do roli księżniczki w sztuce trzeba wybrać jedną z dwóch aktorek.",
        "options": [
          {
            "label": "Priscilla",
            "outcome": "Priscilla gra główną rolę - wpływa na przebieg niektórych scen i pulę nagród związanych z jej wątkiem."
          },
          {
            "label": "Irina Renarde",
            "outcome": "Rolę obejmuje Irina - alternatywny przebieg castingu z inną dynamiką sceniczną i inną pulą nagród."
          }
        ]
      }
    ],
    "consequences": "Udane przedstawienie pozwala bezpiecznie zidentyfikować i skontaktować się z Dudu, który dostarcza dalszych informacji o Jaskrze i wydarzeniach związanych z Ciri."
  },
  {
    "id": "poeta-w-opalach",
    "title": "Poeta w opałach (A Poet Under Pressure)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 22,
    "summary": "Jaskier trafia do więzienia na Wyspie Świątynnej, skąd Geralt organizuje jego brawurowe odbicie. Po udanej, choć niepełnej zasadzce wiedźmin musi tropić eskortę więzienną, by uwolnić przyjaciela przed egzekucją.",
    "walkthrough": [
      "Zorganizuj grupę ratunkową z Zoltanem Chivayem przy Gospodzie Pod Siedmioma Kotami.",
      "Jeśli wcześniej pomogłeś Dijkstrze w 'Skarbie hrabiego Reuvena', poproś go o dodatkowych ludzi do zasadzki.",
      "Poczekaj na transport więzienny, korzystając np. z partyjki Gwinta z Priscillą.",
      "Zaatakuj konwój w zasadzce - część strażników pada, lecz jeden ucieka z Jaskrem na koniu.",
      "Użyj Zmysłów Wiedźmina, by tropić ślady przez kolejne lokacje, zbierając po drodze pierścień i kartki z wierszami Jaskra.",
      "Dotrzyj do odosobnionej chaty zamieszkanej przez niziołków i skorzystaj z tajnego tunelu.",
      "Pokonaj Prześladowcę pilnującego związanego Jaskra i uwolnij barda."
    ],
    "choices": [
      {
        "point": "Liczba ludzi Dijkstry do zasadzki",
        "context": "Jeśli wcześniej Geralt pomógł Dijkstrze odzyskać skarb, szpieg oferuje wsparcie zbrojne do akcji odbicia Jaskra.",
        "options": [
          {
            "label": "Przyjąć podstawowe 3 osoby",
            "outcome": "Zasadzka odbywa się z minimalnym wsparciem Dijkstry."
          },
          {
            "label": "Nalegać na więcej ludzi, zachowując misję w tajemnicy",
            "outcome": "Dijkstra zgadza się dać 4 ludzi w zamian za dyskrecję."
          },
          {
            "label": "Nalegać na więcej ludzi, ujawniając cel misji",
            "outcome": "Dijkstra zgadza się dać aż 6 ludzi, wiedząc dokładnie, o co chodzi w akcji."
          }
        ]
      }
    ],
    "consequences": "Uratowanie Jaskra kończy novigradzki wątek poszukiwań i otwiera drogę do finałowej retrospekcji Ciri, pokazującej wydarzenia bezpośrednio poprzedzające jego pojmanie."
  },
  {
    "id": "historia-ciri-na-zlamanie-karku",
    "title": "Historia Ciri: Na złamanie karku (Ciri's Story: Breakneck Speed)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt I",
    "order": 23,
    "summary": "Retrospekcja tłumacząca okoliczności pojmania Jaskra: po starciu z Whoreson Juniorem Ciri i bard próbują uciec z Novigradu, lecz zostają osaczeni przez Straż Świątynną. Broniąc przyjaciela, Ciri po raz kolejny sięga po moc Starszej Krwi, płacąc za to rozdzieleniem z Jaskrem.",
    "walkthrough": [
      "Steruj Ciri uciekającą wraz z Jaskrem konno z kryjówki Juniora w stronę Wyspy Świątynnej.",
      "Przedzieraj się przez ulice, ścigana przez zbirów Juniora.",
      "Na Wyspie Świątynnej natknij się na Nathaniela Pastodiego i pokonaj kolejnych siepaczy.",
      "Obserwuj nadciągającą Straż Świątynną, odcinającą drogi ucieczki.",
      "Zareaguj, gdy strażnik strzela z kuszy w Ciri, a Jaskier heroicznie osłania ją przed strzałem.",
      "Użyj mocy teleportacji Starszej Krwi, by zniknąć z oblężonego miejsca, zostawiając Jaskra na pastwę Straży."
    ],
    "choices": [],
    "consequences": "To domykająca Akt I retrospekcja - wyjaśnia okoliczności pojmania Jaskra przez Straż Świątynną, którego uwolnienie było celem poprzedzającego ją zadania 'Poeta w opałach'. Po zakończeniu wątku novigradzkiego gracz kieruje się w stronę Skellige, rozpoczynając kolejny etap poszukiwań Ciri (Akt II)."
  },
  {
    "id": "the-king-is-dead-long-live-the-king",
    "title": "Nie żyje król, niech żyje król (The King is Dead - Long Live the King)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt II",
    "order": 19,
    "summary": "Geralt płynie na Skellige, by odnaleźć Yennefer i skorzystać z jej wiedzy o klątwach w sprawie tajemniczej istoty (Umy) przywiezionej z Wielenia. Trafia na wyspy w dniu pogrzebu króla Brana - poległego władcy Skellige - i bierze udział w stypie na zamku Kaer Trolde, gdzie ponownie spotyka Yennefer.",
    "walkthrough": [
      "Geralt przybija do Skellige i dowiaduje się o śmierci króla Brana oraz o trwających przygotowaniach do stypy w Kaer Trolde.",
      "Wiedźmin odnajduje pokój Yennefer w gospodzie i przebiera się w strój odpowiedni na uroczystość, po czym udaje się na zamek.",
      "Na stypie Geralt może wziąć udział w wyścigu łodzi z Cerys an Craite oraz stanąć w obronie honoru Yennefer w bójce z pijanym Lugosem Szaleńcem.",
      "Yennefer namawia Geralta na wspólną eskapadę do laboratorium maga Ermiona po Maskę Uroborosa - razem przechodzą przez pułapki, halucynacje i pokonują elementala ziemi.",
      "W trakcie ucieczki z laboratorium para zostaje uwięziona w zamkniętym pomieszczeniu z trującym gazem, co (przy odpowiednich wcześniejszych wyborach w grze) prowadzi do sceny zbliżenia Geralta z Yennefer.",
      "Crach an Craite prosi Geralta o pomoc swoim dzieciom, Cerys i Hjalmarowi, by mogły udowodnić, że zasługują na tron Skellige."
    ],
    "choices": [
      {
        "point": "Zbliżenie z Yennefer w laboratorium Ermiona",
        "context": "Uwięzieni w komnacie pełnej trującego gazu, Geralt i Yennefer mają chwilę tylko dla siebie.",
        "options": [
          {
            "label": "Podjąć wątek romantyczny",
            "outcome": "To jeden z kroków budujących ścieżkę romansu z Yennefer, potwierdzaną później m.in. w zadaniu 'Ostatnie życzenie' na Hindarsfjall i w scenach finałowych."
          },
          {
            "label": "Zachować dystans",
            "outcome": "Wątek romantyczny z Yennefer nie zostaje pogłębiony w tym miejscu, co utrudnia later uzyskanie zakończenia 'Geralt z Yennefer'."
          }
        ]
      }
    ],
    "consequences": "Wątek Umy i klątwy trafia w ręce Yennefer, co uruchamia śledztwo prowadzące przez kolejne zadania Skellige. Rozpoczyna się też poboczny wątek sukcesji tronu Skellige (Cerys/Hjalmar), który wpływa na jedno z zakończeń gry."
  },
  {
    "id": "echoes-of-the-past",
    "title": "Echa przeszłości (Echoes of the Past)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt II",
    "order": 20,
    "summary": "Geralt i Yennefer badają miejsce dawnej katastrofy magicznej na wyspie Ard Skellig, próbując za pomocą Maski Uroborosa odnaleźć ślady prowadzące do wyjaśnienia natury klątwy Umy.",
    "walkthrough": [
      "Geralt spotyka Yennefer w miejscu kataklizmu na wschodzie Ard Skellig.",
      "Para odpiera atak dwóch meandrowców, po czym Yennefer używa magii, by odsłonić ukryte ślady.",
      "Geralt zakłada Maskę Uroborosa i podąża za niebiesko-zielonymi błyskami wskazującymi trop, walcząc po drodze z kolejnymi meandrowcami.",
      "Wiedźmin odnajduje pod powalonym drzewem ciało, które dostarcza kolejnych poszlak w śledztwie."
    ],
    "choices": [],
    "consequences": "Trop prowadzi do kolejnego etapu śledztwa w Skellige (Zaginieni) i stopniowo zbliża Geralta do prawdy o tożsamości Umy oraz jego związku z Ciri."
  },
  {
    "id": "missing-persons",
    "title": "Zaginieni (Missing Persons)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt II",
    "order": 21,
    "summary": "Kontynuacja śledztwa z Yennefer - Geralt podąża za nią przez Lofoten do Ogrodu Freyi, zbierając kolejne poszlaki dotyczące klątwy nałożonej na Umę i dawnych wydarzeń związanych z ucieczką Ciri przed Dzikim Gonem.",
    "walkthrough": [
      "Geralt spotyka Yennefer na Lofoten (Hindarsfjall) i razem badają okolicę Maską Uroborosa.",
      "Para udaje się do pobliskiego Ogrodu Freyi, tropiąc magiczne echa."
    ],
    "choices": [],
    "consequences": "Śledztwo prowadzi wprost do zadania 'Bezimienny', w którym para dociera do jaskini z ciałem powiązanym z tajemnicą Umy."
  },
  {
    "id": "nameless",
    "title": "Bezimienny (Nameless)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt II",
    "order": 22,
    "summary": "Finał śledztwa prowadzonego z Yennefer w Ogrodzie Freyi. Geralt odkrywa ukrytą jaskinię, w której znajduje kolejne poszlaki łączące Umę z zaginioną grupą uciekającą przed Dzikim Gonem.",
    "walkthrough": [
      "Geralt podąża za Yennefer schodami przy Ogrodzie Freyi i za pomocą zmysłów wiedźmińskich bada okolicę drzewa.",
      "Wiedźmin tropi ślady stóp, walcząc z czterema wilkami, po czym otwiera zamknięte drzwi dźwigniami i przepływa przez zalane bramy.",
      "Na dnie studni Geralt eksploruje jaskinię i odnajduje zwłoki niosące kluczowe informacje o przeszłości Umy."
    ],
    "choices": [],
    "consequences": "Zebrane poszlaki uruchamiają grywalny epizod wspomnień Ciri ('Cisza przed burzą') oraz ostatecznie prowadzą Geralta z powrotem do Kaer Morhen, gdzie klątwa Umy zostanie zdjęta."
  },
  {
    "id": "ciris-story-calm-before-the-storm",
    "title": "Opowieść Ciri: Cisza przed burzą (Ciri's Story: The Calm Before the Storm)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt II",
    "order": 23,
    "summary": "Grywalny retrospektywny epizod z Ciri w roli głównej. Gracz poznaje fragment jej losów sprzed przybycia do świata Geralta - kolejny element budujący obraz relacji Ciri z Dzikim Gonem i jej determinacji, by uciec przed przeznaczeniem.",
    "walkthrough": [
      "Gracz przejmuje kontrolę nad Ciri w retrospekcji ukazującej wydarzenia sprzed jej ucieczki do świata Geralta.",
      "Odcinek łączy eksplorację i walkę charakterystyczną dla scen 'Opowieści Ciri', przybliżając kolejny fragment układanki dotyczącej Umy, Avallac'ha i Dzikiego Gonu."
    ],
    "choices": [],
    "consequences": "Fabularnie spina wątek śledztwa w Skellige z powrotem Geralta do Kaer Morhen, gdzie rozpocznie się próba zdjęcia klątwy z Umy."
  },
  {
    "id": "ugly-baby",
    "title": "Brzydkie niemowlę (Ugly Baby)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt II",
    "order": 24,
    "summary": "Geralt przywozi tajemniczą, przypominającą niemowlę istotę zwaną Umą do Kaer Morhen, licząc na to, że zgromadzeni tam wiedźmini i Yennefer pomogą zdjąć z niej klątwę i tym samym przybliżą go do odnalezienia Ciri.",
    "walkthrough": [
      "Po przekonaniu cesarza Emhyra, że trop Umy jest wart śledzenia, Geralt zabiera istotę do Kaer Morhen.",
      "Na miejscu Vesemir proponuje najpierw łagodniejszą, mniej inwazyjną próbę zdjęcia klątwy.",
      "Gdy pierwsza próba Vesemira zawodzi, Yennefer zapowiada bardziej radykalne rozwiązanie - rytuał oparty na Próbie Traw, jeśli inne metody nie pomogą."
    ],
    "choices": [],
    "consequences": "Uma trafia pod opiekę zgromadzonych w Kaer Morhen wiedźminów i Yennefer, co otwiera kolejne zadania poświęcone próbom zdjęcia klątwy."
  },
  {
    "id": "no-place-like-home",
    "title": "Wszędzie dobrze, ale w domu najlepiej (No Place Like Home)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt II",
    "order": 25,
    "summary": "Chwila oddechu w Kaer Morhen przed decydującymi wydarzeniami. Geralt spędza wieczór ze starymi przyjaciółmi - Eskelem, Lambertem, Zoltanem i innymi - grając w Gwinta, opowiadając historie i odpoczywając przed nadchodzącą burzą.",
    "walkthrough": [
      "Po ogłoszeniu przez Vesemira planu 'mniej inwazyjnego' zdjęcia klątwy z Umy, Geralt zyskuje wolny wieczór w twierdzy.",
      "Gracz może wziąć udział w piciu z wiedźminami, opowiadaniu historii, grze w 'Nigdy przenigdy' oraz partiach Gwinta.",
      "Jeśli Geralt rozwija wątek romansu z Yennefer, wieczór oferuje okazję do intymnej sceny (m.in. przebranie się w jej strój, by skorzystać z megaskopu).",
      "Odnalezienie śpiącego przy Kózce Eskela nawiązuje do wcześniejszego pobocznego zadania z przynętą na wywernę."
    ],
    "choices": [
      {
        "point": "Wieczór z Yennefer",
        "context": "Kaer Morhen daje chwilę wytchnienia przed bitwą.",
        "options": [
          {
            "label": "Skorzystać z okazji na zbliżenie",
            "outcome": "Pogłębia wątek romantyczny z Yennefer, istotny dla finałowego wyboru 'Los Geralta'."
          },
          {
            "label": "Pominąć wątek",
            "outcome": "Brak dodatkowego rozwoju relacji w tym miejscu; nie wyklucza to jednak innych scen budujących romans."
          }
        ]
      }
    ],
    "consequences": "Czysto obyczajowe, kameralne zadanie bez wpływu na przebieg fabuły - buduje jednak atmosferę przed bitwą i (opcjonalnie) wątek romansu."
  },
  {
    "id": "va-fail-elaine",
    "title": "Va Fail, Elaine",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt II",
    "order": 26,
    "summary": "Yennefer zbiera w Kaer Morhen wszystkich obecnych wiedźminów, by wspólnie z nimi przygotować i przeprowadzić rytuał mający ostatecznie zdjąć klątwę z Umy przy użyciu Wywaru z Traw.",
    "walkthrough": [
      "Yennefer instruuje wiedźminów, by przygotowali Wywar z Traw potrzebny do rytuału.",
      "Geralt zbiera brakujące składniki (m.in. korzeń mandragory, gruczoł jadowy mantikory, język albinos-bruksy) i warzy miksturę.",
      "Wywar zostaje podany Umie, po czym Yennefer przeprowadza rytuał zdejmujący klątwę.",
      "Po zdjęciu klątwy okazuje się, że Uma to w rzeczywistości przebrany Avallac'h - elficki mędrzec i doradca Ciri."
    ],
    "choices": [],
    "consequences": "Avallac'h wręcza Geraltowi magiczny robaczek świętojański, prowadzący do Wyspy Mgieł - klucz do odnalezienia Ciri i jednocześnie wstęp do najbliższej konfrontacji z Dzikim Gonem."
  },
  {
    "id": "isle-of-mists",
    "title": "Wyspa Mgieł (The Isle of Mists)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt II",
    "order": 27,
    "summary": "Podążając za wskazówką Avallac'ha, Geralt trafia na tajemniczą Wyspę Mgieł, gdzie musi pomóc zamieszkującym ją krasnoludom, zanim pozna dalsze fakty o losach Ciri i nadciągającym ataku Dzikiego Gonu na Kaer Morhen.",
    "walkthrough": [
      "Geralt podąża za magicznym robaczkiem świętojańskim na wyspę i spotyka grupę krasnoludów, którzy zgodzą się pomóc dopiero po odnalezieniu trzech zaginionych towarzyszy.",
      "Wiedźmin odnajduje Ivo na północy wyspy (pokonując bagienne wiedźmy), Gasparda na szczycie latarni morskiej oraz zwłoki Ferenca na zachodzie wyspy, gdzie musi stoczyć walkę z bagiennikiem.",
      "Po skompletowaniu całej trójki krasnoludów w chacie następuje seria scen przybliżających kulisy ucieczki Ciri przed Dzikim Gonem.",
      "Zadanie stanowi 'lekki punkt bez powrotu' - część aktywności pobocznych ulega automatycznemu nieudaniu się, a swoboda eksploracji zostaje tymczasowo ograniczona."
    ],
    "choices": [],
    "consequences": "Wydarzenia na wyspie bezpośrednio poprzedzają szturm Dzikiego Gonu na Kaer Morhen - od tego momentu fabuła przyspiesza aż do wielkiej bitwy."
  },
  {
    "id": "battle-of-kaer-morhen",
    "title": "Bitwa o Kaer Morhen (The Battle of Kaer Morhen)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt II",
    "order": 28,
    "summary": "Kulminacyjna, wieloetapowa bitwa obronna: Dziki Gon pod wodzą Eredina i Imlerith atakuje twierdzę wiedźmińską, by odzyskać Ciri. Geralt musi zebrać sprzymierzeńców, przygotować fortecę i przetrwać starcie, które okaże się okupione bolesną stratą.",
    "walkthrough": [
      "Przed bitwą Geralt wysyła listy do potencjalnych sojuszników - część (Vesemir, Eskel, Lambert, Zoltan, Ermion) dołącza automatycznie, inni (Triss, Hjalmar, Keira Metz, Letho, Vernon Roche i Ves) tylko pod warunkiem ukończenia wcześniej ich wątków fabularnych.",
      "Gracz dokonuje wyborów przygotowawczych: mikstury czy pułapki na dziedzińcu oraz zbrojownia (srebrny miecz) czy wzmocnienie murów (mniej wrogów).",
      "Bitwa toczy się na przemian jako Geralt i jako Ciri - trzeba m.in. zamykać portale Dzikiego Gonu bombami dimerytowymi lub znakiem Yrden oraz bronić sojuszników na kolejnych liniach obrony.",
      "W kulminacyjnym starciu Imlerith, generał Dzikiego Gonu, zabija Vesemira, mimo prób obrony ze strony Geralta i Ciri.",
      "Po bitwie ocaleni świętują gorzkie zwycięstwo, opłakując poległego mistrza."
    ],
    "choices": [
      {
        "point": "Przygotowania obronne",
        "context": "Przed szturmem Geralt musi zdecydować, jak przygotować twierdzę i jakich sojuszników zaangażować.",
        "options": [
          {
            "label": "Mikstury zamiast pułapek / zbrojownia zamiast murów",
            "outcome": "Więcej zasobów walki (eliksiry, srebrny miecz), ale twierdzę atakuje więcej wrogów."
          },
          {
            "label": "Pułapki zamiast mikstur / wzmocnienie murów",
            "outcome": "Mniejsza liczba nacierających przeciwników kosztem mniejszych zasobów bojowych."
          }
        ]
      }
    ],
    "consequences": "Śmierć Vesemira jest stała we wszystkich wariantach przejścia i mocno wpływa na emocjonalny wydźwięk kolejnego zadania. Bitwa jest też ostatnim epizodem rozgrywanym w Kaer Morhen w tej części fabuły - stąd fabuła przenosi się do Novigradu i finalnie do Skellige."
  },
  {
    "id": "blood-on-the-battlefield",
    "title": "Krew na polu bitwy (Blood on the Battlefield)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt II",
    "order": 29,
    "summary": "Nazajutrz po bitwie Geralt musi pocieszyć załamaną Ciri i zdecydować, jaką drogą pójść dalej: czy od razu ruszyć tropem Imlerith na Łysą Górę, czy najpierw odwiedzić cesarza Emhyra. To jedno z najważniejszych zadań determinujących ostateczny los Ciri.",
    "walkthrough": [
      "Geralt rozmawia z Ciri o żałobie po Vesemirze i szuka sposobu, by poprawić jej nastrój.",
      "W zależności od wyboru dochodzi do bitwy na śnieżki (rozładowującej napięcie) albo do wspólnego picia w duchu wiedźmińskiej tradycji.",
      "Geralt decyduje, czy jechać prosto do Wielenia (na Łysą Górę, tropem Imlerith) czy najpierw stawić się przed cesarzem Emhyrem, który życzy sobie raportu o Ciri.",
      "Jeśli dochodzi do spotkania z Emhyrem, cesarz oferuje Geraltowi zapłatę za dostarczenie informacji o córce."
    ],
    "choices": [
      {
        "point": "Jak pocieszyć Ciri",
        "context": "Ciri jest przybita śmiercią Vesemira i całą sytuacją.",
        "options": [
          {
            "label": "'Chyba wiem, co poprawi ci humor' (bitwa na śnieżki)",
            "outcome": "Pozytywny punkt na 'liczniku' relacji Geralt-Ciri, zbliżający do dobrego zakończenia."
          },
          {
            "label": "'Nie musisz być dobra we wszystkim' / wspólne picie",
            "outcome": "Negatywny punkt na liczniku relacji - oddala od najlepszych zakończeń."
          }
        ]
      },
      {
        "point": "Łysa Góra czy cesarz Emhyr",
        "context": "Geralt musi zdecydować, dokąd skierować się najpierw.",
        "options": [
          {
            "label": "Prosto do Wielenia (pominięcie cesarza)",
            "outcome": "Otwiera możliwość zakończenia 'Ciri zostaje wiedźminką' (Empress jest wtedy niedostępna)."
          },
          {
            "label": "Wizyta u cesarza Emhyra",
            "outcome": "Otwiera możliwość zakończenia 'Ciri zostaje cesarzową Nilfgaardu' - pod warunkiem dalszych pozytywnych wyborów."
          }
        ]
      },
      {
        "point": "Zapłata od cesarza (jeśli doszło do spotkania)",
        "context": "Emhyr oferuje Geraltowi wynagrodzenie za informacje o córce.",
        "options": [
          {
            "label": "Odmówić zapłaty",
            "outcome": "Pozytywny punkt na liczniku relacji - buduje szacunek Ciri do Geralta."
          },
          {
            "label": "Przyjąć zapłatę",
            "outcome": "Negatywny punkt na liczniku relacji - odczytywane przez Ciri jako 'sprzedanie' informacji o niej."
          }
        ]
      }
    ],
    "consequences": "To zadanie uruchamia trzy z pięciu kluczowych decyzji budujących licznik sympatii Ciri, decydujący później o tym, czy przeżyje ona starcie z Białym Mrozem, oraz - jeśli przeżyje - czy zostanie wiedźminką, czy cesarzową."
  },
  {
    "id": "bald-mountain",
    "title": "Łysa Góra (Bald Mountain)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt III",
    "order": 30,
    "summary": "Pierwsze zadanie Aktu III. Geralt (i w retrospekcji Ciri) tropi generała Dzikiego Gonu, Imlerith, przechodząc przez opuszczoną wioskę u podnóża Łysej Góry, siedziby trzech Wiedźm z Wielenia (Krone).",
    "walkthrough": [
      "Mieszkańcy opuszczonej wioski blokują drogę - trzeba przekonać Teklę, oddając jej 'monetę wrzuconą do stawu', by uzyskać przejście.",
      "Geralt musi pokonać silvana, który (w odróżnieniu od typowych przedstawicieli gatunku) atakuje ogniem, a nie jest na niego podatny.",
      "W retrospekcji gracz przejmuje kontrolę nad Ciri i walczy z trzema Wiedźmami (Warzyecha, Szeptucha, Prządka).",
      "Geralt staje do finałowego starcia z Imlerith - walka toczy się w dwóch fazach, z teleportacjami i atakami z powietrza w drugiej odsłonie."
    ],
    "choices": [],
    "consequences": "Śmierć Imlerith mści Vesemira i usuwa jednego z dwóch generałów Dzikiego Gonu z gry, torując drogę do ostatecznej rozprawy z Eredinem."
  },
  {
    "id": "reason-of-state",
    "title": "Racja stanu (Reason of State)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt III",
    "order": 31,
    "summary": "Kulminacja politycznego wątku Novigradu i Redanii. Geralt dołącza do spisku Dijkstry, Vernona Roche'a, Ves i Thalera wymierzonego w króla Radowida, co decyduje o tym, kto ostatecznie zapanuje nad Północą i jaki będzie los wojny z Nilfgaardem.",
    "walkthrough": [
      "Zadanie odblokowuje się po ukończeniu wątku Triss oraz questów 'Zdradziecki spisek' ('A Deadly Plot'), 'Oko za oko' i 'Najbardziej poszukiwany w Redanii', a także po przekupieniu (nie zaatakowaniu) Dijkstry informacjami o Emhyrze w zadaniu 'Aż nazbyt oczywiste'.",
      "Spiskowcy spotykają się w magazynie na południowym zachodzie Novigradu, by ustalić plan zamachu.",
      "Geralt wywabia Radowida z jego okrętu, po czym wraz z Roche'em i Ves przebija się przez jego straż.",
      "Po konfrontacji z udziałem Filippy Eilhart, Dijkstra zdradza sojuszników i jest gotów pozwolić zginąć Roche'owi, Ves i Thalerowi."
    ],
    "choices": [
      {
        "point": "Zdrada Dijkstry",
        "context": "Po śmierci Radowida Dijkstra ujawnia zamiar pozbycia się dawnych sojuszników - Roche'a, Ves i Thalera.",
        "options": [
          {
            "label": "'Nie pozwolę ci ich zabić' - stanąć po stronie Roche'a",
            "outcome": "Geralt zabija Dijkstrę. Roche i Thaler przeżywają, a w konsekwencji Nilfgaard (Emhyr) podbija osłabioną Północ, przywracając Temerię jako wasala pod rządami Roche'a i Thalera."
          },
          {
            "label": "'Rób, co chcesz' - nie interweniować",
            "outcome": "Dijkstra zabija Roche'a, Ves i Thalera. W konsekwencji Redania pod wodzą Dijkstry pokonuje Nilfgaard - kontynent zyskuje sprawną administrację i uprzemysłowienie, ale kosztem wolności obywateli."
          }
        ]
      }
    ],
    "consequences": "Jeśli gracz w ogóle nie podejmie wątku zamachu na Radowida, król pozostaje przy władzy, kontynuując prześladowania magów i nieludzi ('Odnowa Moralna'), a wojna toczy się dalej bez rozstrzygnięcia korzystnego dla żadnej ze stron opisanych powyżej. Wynik tego zadania jest jedną z głównych zmiennych finałowego epilogu ('Los Radowida i Dijkstry')."
  },
  {
    "id": "final-preparations",
    "title": "Ostatnie przygotowania (Final Preparations)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt III",
    "order": 32,
    "summary": "Zadanie-hub w Novigradzie, w którym Geralt spina wszystkie wątki przed wyprawą do Krainy Lodu: rozmawia z Triss, Yennefer, Ciri i Avallac'hem, kończąc powiązane z nimi questy poboczne. Kluczowy moment to rozmowa z Ciri przed jej spotkaniem z Loży Czarodziejek.",
    "walkthrough": [
      "Zadanie można realizować w dowolnej kolejności: rozmowa z Triss prowadzi do questu 'Aż nazbyt oczywiste' (schwytanie Filippy Eilhart), rozmowa z Yennefer do 'Wielkiej ucieczki' (uwolnienie Margarity Laux-Antille z więzienia).",
      "Rozmowa z Ciri otwiera zadanie 'Odwet' ('Payback'), pomagające jej załatwić własne sprawy w Novigradzie, w tym pomoc nieludzkim uchodźcom w zdobyciu koni.",
      "Kluczowa scena rozgrywa się w karczmie Pod Rozmarynem i Tymiankiem: Ciri szykuje się na spotkanie z resztkami Loży Czarodziejek i pyta Geralta o zdanie.",
      "Rozmowa z Avallac'hem uruchamia zadanie 'W czasie i przestrzeni' ('Through Time and Space') - wyprawę przez wymiary w poszukiwaniu Ge'els.",
      "Po ukończeniu wszystkich czterech wątków fabuła przechodzi do 'Przygotowań do bitwy'."
    ],
    "choices": [
      {
        "point": "Spotkanie Ciri z Lożą Czarodziejek",
        "context": "Ciri waha się, czy pójść na spotkanie sama, czy poprosić Geralta o towarzystwo.",
        "options": [
          {
            "label": "'Poradzisz sobie sama'",
            "outcome": "Buduje pewność siebie Ciri - pozytywny punkt na liczniku relacji, zbliżający do dobrego zakończenia."
          },
          {
            "label": "'Pójdę z tobą'",
            "outcome": "Ciri czuje się bardziej zależna od Geralta - negatywny punkt na liczniku, oddalający od najlepszych zakończeń."
          }
        ]
      }
    ],
    "consequences": "To druga z pięciu kluczowych decyzji wpływających na los Ciri w finale gry."
  },
  {
    "id": "battle-preparations",
    "title": "Przygotowania do bitwy (Battle Preparations)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt III",
    "order": 33,
    "summary": "Geralt spotyka się z sojusznikami na statku Avallac'ha, gdzie trzeba dopiąć ostatnie kwestie przed otwarciem przejścia do świata Białego Mrozu: znaleźć Kamień Słońca, pomóc Ciri zmierzyć się z demonami przeszłości i towarzyszyć jej (lub nie) przy grobie Skjalla.",
    "walkthrough": [
      "Geralt melduje się u Avallac'ha na statku, gdzie odbywa się spotkanie z zebranymi sojusznikami.",
      "Odblokowują się cztery powiązane zadania: 'Kamień Słońca' i 'Veni Vidi Vigo' są dostępne od razu, 'Dziecko Starszej Krwi' odblokowuje się po postępach w 'Kamieniu Słońca', a 'Grób Skjalla' - dopiero po ukończeniu 'Dziecka Starszej Krwi'.",
      "Po skompletowaniu wszystkich wątków Geralt melduje Avallac'howi gotowość do przekroczenia granicy światów."
    ],
    "choices": [],
    "consequences": "Zadanie stanowi bramę do dwóch kolejnych, kluczowych dla losu Ciri questów - 'Dziecka Starszej Krwi' i 'Grobu Skjalla'."
  },
  {
    "id": "child-of-the-elder-blood",
    "title": "Dziecko Starszej Krwi (Child of the Elder Blood)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt III",
    "order": 34,
    "summary": "Geralt, Yennefer i Ciri docierają do ukrytego laboratorium Avallac'ha na wybrzeżu Skellige, gdzie odkrywają prawdę o pochodzeniu Ciri od Lary Dorren i mierzą się z upokarzającą reakcją byłej kochanki Avallac'ha.",
    "walkthrough": [
      "Trójka dociera do kryjówki Avallac'ha na Pali Gap Coast, pokonując strzegącego wejścia golema.",
      "W laboratorium, korzystając ze zmysłów wiedźmińskich, gracz odnajduje fresk przedstawiający drzewo genealogiczne Lary Dorren, ukazujący Ciri jako jej najnowszą potomkinię.",
      "Elfka, dawna kochanka Avallac'ha, upokarza i obraża Ciri, po czym odchodzi.",
      "Reakcja Geralta na jej wyjście oraz rozgoryczenie Ciri to kluczowy, ograniczony czasowo wybór dialogowy.",
      "Po opanowaniu emocji Ciri prosi Geralta o wspólną wizytę na grobie Skjalla - druida, który zginął, ratując ją."
    ],
    "choices": [
      {
        "point": "Reakcja na upokorzenie Ciri w laboratorium",
        "context": "Elfka obraża Ciri i odchodzi, zostawiając ją zdruzgotaną.",
        "options": [
          {
            "label": "'Dawaj' (wspólne zdemolowanie laboratorium)",
            "outcome": "Pozwala Ciri wyładować frustrację - pozytywny punkt na liczniku relacji."
          },
          {
            "label": "'Uspokój się'",
            "outcome": "Ciri czuje się jeszcze bardziej odrzucona przez Geralta - negatywny punkt na liczniku."
          }
        ]
      },
      {
        "point": "Wizyta na grobie Skjalla",
        "context": "Ciri prosi Geralta, by towarzyszył jej przy grobie druida, który oddał za nią życie.",
        "options": [
          {
            "label": "'Jasne, chodźmy razem'",
            "outcome": "Uruchamia zadanie 'Grób Skjalla' i dodaje pozytywny punkt na liczniku relacji."
          },
          {
            "label": "'Nie mam czasu'",
            "outcome": "Ciri odczuwa odrzucenie - negatywny punkt na liczniku, zadanie 'Grób Skjalla' nie zostaje podjęte wspólnie."
          }
        ]
      }
    ],
    "consequences": "To trzecia i czwarta z pięciu kluczowych decyzji determinujących finałowy los Ciri."
  },
  {
    "id": "skjalls-grave",
    "title": "Grób Skjalla (Skjall's Grave)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt III",
    "order": 35,
    "summary": "Krótkie, kameralne zadanie - jeśli Geralt zgodził się towarzyszyć Ciri, odwiedzają razem grób druida Skjalla, który poświęcił dla niej życie. To ostatni z pięciu kluczowych momentów budujących relację przed finałową konfrontacją.",
    "walkthrough": [
      "Geralt i Ciri udają się na miejsce pochówku Skjalla.",
      "Podczas rozmowy przy grobie Ciri dzieli się z Geraltem swoimi obawami i wdzięcznością wobec tych, którzy oddali za nią życie."
    ],
    "choices": [],
    "consequences": "Zamyka piątkę kluczowych wyborów wpływających na 'licznik sympatii' decydujący o losie Ciri w zakończeniu gry."
  },
  {
    "id": "on-thin-ice",
    "title": "Na cienkim lodzie (On Thin Ice)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt III",
    "order": 36,
    "summary": "Przedostatnie zadanie gry. Sprzymierzeni z Nilfgaardczykami na Undvik, Geralt i Ciri przedzierają się przez szeregi Dzikiego Gonu, by dotrzeć do Caranthira, a następnie wejść na pokład Naglfaru i stoczyć decydujący pojedynek z Eredinem.",
    "walkthrough": [
      "Geralt koordynuje działania z sojusznikami w obozie nilfgaardzkim na Undvik.",
      "Po sygnale dla Avallac'ha gracz przejmuje kontrolę nad wzmocnioną Ciri, by przebić się przez szeregi Dzikiego Gonu do Caranthira.",
      "Starcie z Caranthirem toczy się w dwóch fazach - najpierw jako Ciri, potem jako Geralt.",
      "Po powrocie na powierzchnię drużyna wchodzi na pokład okrętu Dzikiego Gonu, Naglfar, przebijając się przez kolejnych wrogów.",
      "Zadanie kończy się dwufazowym pojedynkiem Geralta z Eredinem, władcą Dzikiego Gonu."
    ],
    "choices": [],
    "consequences": "Pokonanie Eredina otwiera drogę do świata Białego Mrozu i ostatecznej rozgrywki o los Ciri w zadaniu 'Tedd Deireadh, Czas Pogardy'."
  },
  {
    "id": "tedd-deireadh-final-age",
    "title": "Tedd Deireadh, Ostatni Wiek (Tedd Deireadh, The Final Age)",
    "type": "main",
    "dlc": "base",
    "chapter": "Akt III",
    "order": 37,
    "summary": "Finałowe zadanie fabuły głównej. Geralt, prowadzony przez Yennefer, dociera do wieży Tor Gvalch'ca, gdzie Avallac'h i Ciri szykują się do wkroczenia w świat ogarnięty Białym Mrozem, by raz na zawsze powstrzymać nadciągającą zagładę.",
    "walkthrough": [
      "Geralt podąża za Yennefer do wieży Tor Gvalch'ca, unikając kul ognia i elementali lodu - Yennefer chroni go magicznie aż do bariery otaczającej wieżę, którą tylko ona może przełamać.",
      "W wieży Avallac'h tłumaczy się z dotychczasowej współpracy z Ciri i ujawnia, że działał w porozumieniu z nią, a nie przeciwko niej.",
      "Ciri postanawia wejść w portal prowadzący do świata Białego Mrozu, by spróbować powstrzymać spełnienie się Przepowiedni Ithlinne.",
      "To, co dzieje się dalej i czy Ciri wraca, zależy od sumy wcześniejszych decyzji z zadań 'Krew na polu bitwy', 'Ostatnie przygotowania', 'Dziecko Starszej Krwi' i 'Grób Skjalla'."
    ],
    "choices": [],
    "consequences": "Wynik starcia z Białym Mrozem jest bezpośrednio przenoszony do ostatniego zadania gry, 'Coś się kończy, coś zaczyna', w którym gracz ogląda właściwe zakończenie."
  },
  {
    "id": "something-ends-something-begins",
    "title": "Coś się kończy, coś zaczyna (Something Ends, Something Begins)",
    "type": "main",
    "dlc": "base",
    "chapter": "Zakończenie",
    "order": 38,
    "summary": "Ostatnie zadanie gry i epilog. To, co zobaczy gracz, zależy niemal wyłącznie od wcześniejszych decyzji: losu Ciri (przeżycie i to, kim się stanie, albo jej śmierć), związku Geralta (Yennefer, Triss lub samotność) oraz od politycznego układu sił na Północy i Skellige ustalonego w poprzednich zadaniach.",
    "walkthrough": [
      "Gra sprawdza wynik 'licznika sympatii' Ciri (pięć kluczowych decyzji z zadań 'Krew na polu bitwy', 'Ostatnie przygotowania', 'Dziecko Starszej Krwi' i 'Grób Skjalla') oraz to, czy Geralt zabrał Ciri do cesarza Emhyra.",
      "W zależności od wyniku gracz ogląda jedną z trzech scen dotyczących Ciri oraz jedną z trzech scen dotyczących związku Geralta.",
      "Dodatkowo gra uwzględnia rozstrzygnięcia polityczne: los Radowida/Dijkstry/Nilfgaardu (zadanie 'Racja stanu') oraz władcę Skellige (poboczny wątek sukcesji: 'Opętanie', 'Władca Undvik' i 'Gambit królewski')."
    ],
    "choices": [
      {
        "point": "Los Ciri",
        "context": "O losie Ciri decyduje suma pięciu kluczowych wyborów (tzw. 'licznik sympatii') zebranych w zadaniach: reakcja na żałobę w 'Krwi na polu bitwy' (bitwa na śnieżki vs. picie), decyzja o zapłacie od Emhyra w tym samym zadaniu, sposób pożegnania przed Lożą Czarodziejek w 'Ostatnich przygotowaniach', reakcja na jej wybuch emocji w laboratorium Avallac'ha oraz wspólna (lub nie) wizyta na grobie Skjalla w 'Dziecku Starszej Krwi'. Dodatkowym warunkiem rozróżniającym dwa dobre zakończenia jest to, czy Geralt zabrał Ciri do cesarza Emhyra w 'Krwi na polu bitwy'.",
        "options": [
          {
            "label": "Ciri zostaje wiedźminką (co najmniej 3 z 5 wyborów pozytywne + Ciri NIE spotkała się z cesarzem Emhyrem)",
            "outcome": "Najlepsze zakończenie. Ciri przeżywa starcie z Białym Mrozem i wraca na Kontynent. W scenie finałowej w gospodzie w Białym Sadzie Geralt wręcza jej srebrny miecz od płatnerza Orta, oficjalnie czyniąc ją pełnoprawną wiedźminką - odtąd będzie polować na potwory u boku Geralta."
          },
          {
            "label": "Ciri zostaje cesarzową Nilfgaardu (co najmniej 3 z 5 wyborów pozytywne + Ciri spotkała się z Emhyrem i Geralt odmówił zapłaty)",
            "outcome": "Ciri przeżywa, ale postanawia, że więcej zmieni jako władczyni potężnego imperium niż jako wiedźmin. Cesarz Emhyr żegna się z Geraltem, mówiąc, że nie chce go już nigdy widzieć. Zimą, w Białym Sadzie, podczas wspólnego polowania Ciri wyznaje Geraltowi, że przyjęła propozycję objęcia tronu i odjeżdża z nilfgaardzką delegacją."
          },
          {
            "label": "Ciri ginie (mniej niż 3 z 5 wyborów pozytywne, tj. przewaga wyborów negatywnych)",
            "outcome": "Najgorsze zakończenie. Ciri nie wraca ze starcia z Białym Mrozem - poświęca się, by powstrzymać zagładę. Geralt wraca do Mokradeł Wrzosowca (Crookback Bog) i odzyskuje od Prządki jej medalion w zamian za przysługę, po czym siedzi samotnie, otoczony nadciągającymi potworami, załamany utratą wszystkiego, co miało dla niego znaczenie."
          }
        ]
      },
      {
        "point": "Los Geralta (związek uczuciowy)",
        "context": "Wybór partnerki (lub jej braku) budowany jest przez całą grę wątkami romansowymi: z Yennefer m.in. w zadaniach 'Nie żyje król, niech żyje król', 'Wszędzie dobrze, ale w domu najlepiej' oraz w pobocznym 'Ostatnim życzeniu' na Hindarsfjall; z Triss - w pobocznych 'Rzecz o życiu i śmierci' oraz głównym 'Teraz albo nigdy'.",
        "options": [
          {
            "label": "Związek z Yennefer",
            "outcome": "Para postanawia zamieszkać razem z dala od polityki i codziennych trosk Kontynentu, ciesząc się spokojnym, beztroskim życiem u boku siebie."
          },
          {
            "label": "Związek z Triss",
            "outcome": "Geralt osiedla się w Kovirze, gdzie Triss zostaje cenioną doradczynią miejscowego króla - żyją dostatnio, z dala od wojny na południu."
          },
          {
            "label": "Romans z obiema jednocześnie (lub z żadną)",
            "outcome": "Geralt pozostaje samotnym wiedźminem-wędrowcem, kontynuującym pracę łowcy potworów i wspominającym minione lata."
          }
        ]
      },
      {
        "point": "Los Radowida, Dijkstry i Nilfgaardu (władca Północy)",
        "context": "Zależy od przebiegu zadania 'Racja stanu' i poprzedzającej je politycznej intrygi wokół Redanii i Dijkstry.",
        "options": [
          {
            "label": "Radowid pozostaje królem (gracz nie podejmuje wątku zamachu)",
            "outcome": "Najgorszy wariant - Radowid utrzymuje władzę w Redanii i kontynuuje prześladowania magów, nieludzi i uzdrowicieli w ramach 'Odnowy Moralnej', poświęcając wolny czas na szachy i palenie 'czarownic' na stosie."
          },
          {
            "label": "Rządzi Dijkstra (w 'Racji stanu' gracz nie interweniuje - Dijkstra zabija Roche'a, Ves i Thalera)",
            "outcome": "Redania pod wodzą Dijkstry pokonuje Nilfgaard. Kontynent zyskuje sprawną administrację i szybki rozwój przemysłowy, lecz okupiony utratą swobód obywatelskich i twardymi rządami."
          },
          {
            "label": "Nilfgaard podbija Północ (w 'Racji stanu' gracz ratuje Roche'a i zabija Dijkstrę)",
            "outcome": "Osłabiona wojną domową Północ zostaje podbita przez cesarza Emhyra. Vernon Roche i Thaler doprowadzają jednak do częściowego przywrócenia niezależności Temerii jako wasala Nilfgaardu."
          }
        ]
      },
      {
        "point": "Władca Skellige",
        "context": "Rozstrzyga się w pobocznym wątku sukcesji tronu (questy 'Opętanie', 'Władca Undvik' i finałowy 'Gambit królewski'), rozpoczętym jeszcze w zadaniu 'Nie żyje król, niech żyje król'.",
        "options": [
          {
            "label": "Cerys an Craite (ukończenie 'Opętania' i poparcie Cerys w 'Gambicie królewskim')",
            "outcome": "Najlepszy wariant - Cerys zostaje królową, zapewniając wyspom stabilność, pokój i dobrobyt, udowadniając, że płeć nie ma znaczenia w sprawowaniu władzy."
          },
          {
            "label": "Hjalmar an Craite (ukończenie 'Władcy Undvik' i poparcie Hjalmara)",
            "outcome": "Hjalmar zostaje królem i kontynuuje tradycję regularnych najazdów łupieżczych na wybrzeża Nilfgaardu, co kosztuje życie wielu mieszkańców Skellige."
          },
          {
            "label": "Svanrige Tuirseach (gracz ignoruje wątek sukcesji lub nie angażuje się w 'Gambit królewski')",
            "outcome": "Najgorszy wariant - tron obejmuje Svanrige (zgodnie z planem swojej matki Birny), co prowadzi do wojny domowej z pozostałymi klanami i rodami zagrażającymi jego pozycji."
          }
        ]
      }
    ],
    "consequences": "To ostatnie zadanie głównego wątku fabularnego gry podstawowej. Stan świata i relacji ustalony tutaj (poza losem Ciri i związkiem Geralta) jest w dużej mierze kosmetyczny fabularnie w samej grze podstawowej, ale bywa przywoływany we wspomnieniach postaci w dodatku Serca z Kamienia oraz - pośrednio - wpływa na to, kto odwiedza Geralta w epilogowych scenach dodatku Krew i Wino."
  },
  {
    "id": "evils-soft-first-touches",
    "title": "Słodki, gorzki smak zła (Evil's Soft First Touches)",
    "type": "main",
    "dlc": "hos",
    "chapter": "Serca z Kamienia",
    "order": 1,
    "summary": "Zadanie otwierające dodatek. Geralt trafia do Podmiejskiej Karczmy 'Pod Rozdrożem', gdzie zleceniodawca Olgierd von Everec proponuje mu kontrakt na pozornie nieśmiertelnego bandziora. W trakcie śledztwa i po wydarzeniach na statku Ofirczyków wiedźmin poznaje tajemniczego kupca Gauntera O'Dimma, który ratuje mu życie w zamian za przysługę.",
    "walkthrough": [
      "Geralt trafia (np. po zabiciu 'Żabiego Króla' w kanałach Oxenfurtu, który okazuje się ofirskim księciem) na statek Ofirczyków i zostaje uwięziony jako skazaniec.",
      "W celi zjawia się Gaunter O'Dimm i oferuje pomoc w zamian za przysługę na żądanie w przyszłości - Geralt godzi się, a O'Dimm znaczy mu twarz swoim symbolem.",
      "Podczas sztormu, który rozbija statek, Geraltowi udaje się zbiec.",
      "Geralt spotyka Gauntera O'Dimma w Yantrze (po godz. 23:00) - kupiec wyjaśnia, że Olgierd również jest mu winien dług, a Geralt ma spłacić obie należności naraz, wykonując dla Olgierda trzy życzenia.",
      "Wiedźmin udaje się do płonącej posiadłości Garina, gdzie ludzie Olgierda egzekwują dług na jednym z dłużników; sposób reakcji Geralta (pogróżki lub inna odpowiedź) prowadzi w każdym wariancie do pojawienia się samego Olgierda.",
      "Olgierd wyzywa Geralta na pojedynek. Choć wiedźmin może go 'pokonać' mechanicznie, Olgierd okazuje się nieśmiertelny (nie da się go zabić) i po walce spokojnie płaci umówione wynagrodzenie.",
      "Olgierd ujawnia dwa pierwsze życzenia: zdobycie posiadłości (aktu własności) rodziny Borsodich oraz pokazanie jego zmarłemu bratu Vlodimirowi 'jak wygląda dobra zabawa'. Gaunter przekazuje Geraltowi fiolkę z krwią Vlodimira, niezbędną do rytuału przywołania."
    ],
    "choices": [
      {
        "point": "Reakcja na egzekucję dłużnika w posiadłości Garina",
        "context": "Ludzie Olgierda mają zabić winnego pieniędzy dłużnika na oczach Geralta.",
        "options": [
          {
            "label": "Zagrozić im / interweniować",
            "outcome": "Dłużnik i tak ginie, ale w reakcji pojawia się sam Olgierd i wyzywa Geralta na pojedynek."
          },
          {
            "label": "Nie interweniować / inna odpowiedź w dialogu",
            "outcome": "Efekt fabularny jest identyczny - dłużnik ginie, Olgierd i tak się ujawnia; różnią się tylko kwestie dialogowe."
          }
        ]
      }
    ],
    "consequences": "Geralt zostaje formalnie związany podwójnym zobowiązaniem: wobec Gauntera O'Dimma (przysługa na żądanie) i wobec Olgierda (trzy życzenia w zamian za dane mu wcześniej pieniądze). To ustawia całą oś fabularną dodatku."
  },
  {
    "id": "dead-mans-party",
    "title": "Uczta umarlaka (Dead Man's Party)",
    "type": "main",
    "dlc": "hos",
    "chapter": "Serca z Kamienia",
    "order": 2,
    "summary": "Realizacja pierwszego życzenia Olgierda: pokazanie jego dawno zmarłemu bratu Vlodimirowi 'najlepszej zabawy w życiu'. Geralt z pomocą Shani z Oxenfurtu przeprowadza rytuał przywołania ducha Vlodimira, który opętuje ciało wiedźmina i razem z nim bawi się na weselu Aldony i Johnnusa w Beauclair... a właściwie w Novigradzie/Oxenfurcie (Brunwich).",
    "walkthrough": [
      "Geralt konsultuje się z lekarką Shani, która pomaga przygotować rytuał przywołania ducha przy użyciu krwi Vlodimira dostarczonej przez Gauntera O'Dimma.",
      "W krypcie rodu von Everec odprawiany jest rytuał z udziałem zjaw - duch Vlodimira opętuje ciało Geralta na czas trwania wesela.",
      "Shani zaprasza 'opętanego' Geralta na wesele Aldony i Johnnusa w Beauclair (Brunwich). Vlodimir, zafascynowany Shani, obiecuje jednak trzymać ręce przy sobie z szacunku dla uczuć Geralta.",
      "Na weselu trzeba wykonać co najmniej dwie z czterech aktywności: zagonienie dwóch czarnych świń do zagrody, zaloty do druhny (co kończy się bójką z jej trzema braćmi), partię Gwinta z niziołkami (przegrana oznacza oddanie 5% złota i 'oślą' karę) oraz odnalezienie i przekonanie połykacza ognia do występu.",
      "Po ukończeniu dwóch obowiązkowych aktywności Vlodimir zabiera Shani do tańca - w tym momencie pojawia się Gaunter O'Dimm, a Geralt konfrontuje go w sprawie jego tajemniczej natury.",
      "O północy, podczas oczepin, na głowę Shani spada wianek. Vlodimir, mimo wcześniejszej obietnicy, próbuje ją pocałować/złamać dane słowo, przez co Gaunter O'Dimm wypędza go z ciała Geralta, pisząc uprzednio krwią list do brata.",
      "Geralt dostarcza list Olgierdowi jako dowód spełnienia pierwszego życzenia i otrzymuje zapłatę."
    ],
    "choices": [
      {
        "point": "Aktywności weselne",
        "context": "Do zaliczenia questu potrzebne są minimum dwie z czterech gier/zabaw weselnych.",
        "options": [
          {
            "label": "Zagonienie świń, zaloty do druhny, Gwint, poszukiwanie połykacza ognia",
            "outcome": "Każda kombinacja dwóch (lub więcej) ukończonych aktywności pozwala przejść dalej fabułę; dodatkowe aktywności dają tylko ekstra rozrywkę/XP."
          }
        ]
      },
      {
        "point": "Flirt Vlodimira z Shani",
        "context": "Duch Vlodimira w ciele Geralta zaleca się do Shani mimo obietnicy złożonej Olgierdowi/Geraltowi.",
        "options": [
          {
            "label": "Vlodimir łamie obietnicę i próbuje pocałować Shani",
            "outcome": "Gaunter O'Dimm natychmiast wypędza ducha Vlodimira z ciała Geralta - kończy to jego udział w zabawie i otwiera furtkę do późniejszego romansu Geralta z Shani."
          }
        ]
      }
    ],
    "consequences": "Pierwsze życzenie Olgierda zostaje spełnione. Wesele w Beauclair to też punkt startowy opcjonalnego wątku romansowego Geralta z Shani (patrz kolejne zadanie 'Bezchmurne niebo o północy')."
  },
  {
    "id": "midnight-clear-shani",
    "title": "Bezchmurne niebo o północy (A Midnight Clear) - romans z Shani",
    "type": "main",
    "dlc": "hos",
    "chapter": "Serca z Kamienia",
    "order": 3,
    "summary": "Opcjonalny, ale silnie powiązany z fabułą wątek romansowy: po weselu z 'Uczty umarlaka' Geralt może spędzić noc z Shani. Wątek nie wpływa na wybór między Yennefer a Triss, ale otwiera dostęp do kluczowej pomocy Shani w finałowym zadaniu dodatku.",
    "walkthrough": [
      "Po zakończeniu wesela Geralt może odnaleźć gałązek jarzębiny (ulubionego drzewa Shani) na terenie posiadłości/dworu, gdzie odbywało się wesele.",
      "Wręczenie gałązki Shani otwiera dialog romantyczny - kluczowe kwestie to m.in. 'Masz mnie' oraz odpowiedź w rodzaju 'Pocałunek jednak mi nie wystarczył'.",
      "Wybór odpowiednich, ciepłych/flirciarskich kwestii prowadzi do zaproszenia na spacer, a następnie do wspólnie spędzonej nocy.",
      "Następnego ranka Shani odjeżdża, tłumacząc się obowiązkami (powrót do służby medycznej), i romans kończy się jako jednorazowy epizod bez dalszych konsekwencji dla głównych romansów Geralta."
    ],
    "choices": [
      {
        "point": "Podjęcie wątku romantycznego z Shani",
        "context": "Gracz decyduje, czy wręczyć gałązkę jarzębiny i kontynuować flirt.",
        "options": [
          {
            "label": "Zignorować / nie kontynuować flirtu",
            "outcome": "Geralt i Shani rozstają się jako przyjaciele; questlinia biegnie dalej normalnie, ale Geralt traci później możliwość odwiedzenia jej mieszkania przed finałem w charakterze kochanka (choć nadal może ją odwiedzić jako przyjaciel przed 'Cokolwiek posiał człowiek...')."
          },
          {
            "label": "Podjąć flirt i spędzić noc z Shani",
            "outcome": "Romans nie wpływa na relację Geralta z Yennefer/Triss (nie liczy się jako 'zdrada' w grze). To spotkanie ułatwia later odnalezienie Shani przed finałowym questem i wspólną wizytę u profesora Shakeslocka."
          }
        ]
      }
    ],
    "consequences": "Romans jest z założenia 'bezkonsekwencyjny' względem oficjalnych romansów Geralta, ale odwiedziny u Shani przed 'Cokolwiek posiał człowiek...' są praktycznie niezbędne, by odblokować możliwość ocalenia Olgierda w finale."
  },
  {
    "id": "open-sesame",
    "title": "Sezamie, otwórz się! (Open Sesame!)",
    "type": "main",
    "dlc": "hos",
    "chapter": "Serca z Kamienia",
    "order": 4,
    "summary": "Realizacja drugiego życzenia Olgierda: zdobycie aktu własności posiadłości rodu Borsodich, przechowywanego w silnie strzeżonym sejfie. Zadanie rozgałęzia się na trzy podquesty przygotowawcze do napadu: 'Wiedźmińskie przyprawy', 'Włamanie' i 'Kasiarz'.",
    "walkthrough": [
      "Geralt jedzie do domu aukcyjnego w Oxenfurcie, gdzie za pomocą krasnoluda-bankiera Vimme Vivaldiego zdobywa zaproszenie na aukcję antyków organizowaną przez Horsta Borsodiego.",
      "W trakcie aukcji Geralta demaskuje Horst Borsodi i każe strażnikom go wyprowadzić, jednak wcześniej wiedźmin poznaje tajemniczego Nieznajomego (w rzeczywistości Ewalda Borsodiego, brata Horsta), który proponuje wspólny napad na skarbiec.",
      "Podquest 'Wiedźmińskie przyprawy': by uniemożliwić strażnikom reakcję podczas skoku, Geralt musi przygotować 'miksturę oczyszczającą' (m.in. z krwi gnijaka) i podrzucić ją do kotła kucharza w porcie przy Bramie Zachodniej - kucharza można przekupić 200 koronami albo namówić Znakiem Aksji.",
      "Podquest 'Kasiarz': trzeba zwerbować specjalistę od otwierania sejfów. Do wyboru: głośna metoda z materiałami wybuchowymi (zwerbowanie pirotechnika Kasimira Bassiego z wioski Alness, wymaga użycia Znaku Aksji: Iluzja II, by powstrzymać jego próbę samobójczą) albo cicha metoda (uwolnienie włamywacza Quinto z obozu najemników - okup w wysokości 200 koron, wygranie partii Gwinta albo pokonanie dowódcy w walce).",
      "Podquest 'Włamanie': do ekipy trzeba dołączyć specjalistkę od precyzyjnych wejść, Evelinę Gallo, występującą w wędrownej trupie na północny wschód od Oxenfurtu - warunkiem jest zdanie testu z kuszy (strzelanie do jabłek na głowie, ręce i stopie partnera z trupy).",
      "Ekipa (Geralt, Ewald Borsodi, wybrany kasiarz, Evelina) włamuje się do posiadłości Borsodich. Sposób pokonania strażników i pułapek różni się w zależności od wybranego kasiarza (metoda cicha vs. wybuchowa z pułapkami arachnomorfów).",
      "Wewnątrz skarbca Geralt musi zdecydować, po czyjej stronie stanąć - Horsta czy Ewalda Borsodiego - co prowadzi do różnych wariantów końcowej walki/konfrontacji rodzeństwa.",
      "Geralt zdobywa akt własności i wraca do Olgierda w Karczmie 'Pod Alembikiem', by przekazać dokument i odebrać zapłatę za drugie życzenie."
    ],
    "choices": [
      {
        "point": "Wybór kasiarza",
        "context": "Do otwarcia sejfu trzeba zwerbować specjalistę - wybuchowego pirotechnika albo cichego włamywacza.",
        "options": [
          {
            "label": "Kasimir Bassi (metoda głośna, wybuchowa)",
            "outcome": "Skok przebiega z użyciem ładunków wybuchowych; podczas napadu pojawiają się dodatkowe pułapki z arachnomorfami."
          },
          {
            "label": "Quinto (metoda cicha)",
            "outcome": "Napad można przeprowadzić po cichu, omijając część strażników dzięki dialogom/skradaniu."
          }
        ]
      },
      {
        "point": "Lojalność w skarbcu Borsodich",
        "context": "W trakcie finałowej konfrontacji trzeba opowiedzieć się po stronie Horsta lub Ewalda Borsodiego.",
        "options": [
          {
            "label": "Stanąć po stronie Horsta",
            "outcome": "Prowadzi do innego przebiegu starcia z Ewaldem i jego ludźmi."
          },
          {
            "label": "Stanąć po stronie Ewalda (Nieznajomego)",
            "outcome": "Prowadzi do starcia z ludźmi Horsta; to Ewald był architektem całego planu napadu."
          }
        ]
      }
    ],
    "consequences": "Drugie życzenie Olgierda zostaje spełnione - Geralt zdobywa akt własności rodu Borsodich. Wybory dotyczące kasiarza i lojalności w skarbcu zmieniają przebieg walki, ale nie wpływają na dalszy przebieg głównej fabuły dodatku."
  },
  {
    "id": "scenes-from-a-marriage",
    "title": "Sceny z życia małżeńskiego (Scenes From a Marriage)",
    "type": "main",
    "dlc": "hos",
    "chapter": "Serca z Kamienia",
    "order": 5,
    "summary": "Realizacja trzeciego, najbardziej osobistego życzenia Olgierda: odzyskanie fioletowej róży, którą dał swojej żonie Iris przy ich ostatnim spotkaniu. Zadanie prowadzi Geralta do opuszczonej posiadłości von Evereców i w głąb malowanego, surrealistycznego świata wspomnień, gdzie poznaje prawdziwą, mroczną historię małżeństwa Olgierda i Iris.",
    "walkthrough": [
      "Geralt udaje się do posiadłości rodu von Everec, gdzie natrafia na złodzieja grobów oraz tajemniczego, pozbawionego oczu dozorcę strzegącego terenu - trzeba go pokonać.",
      "W zrujnowanej rezydencji wiedźmin napotyka zjawę - 'Widmo z obrazu', czyli ducha Iris, dawnej żony Olgierda.",
      "Geralt odnajduje szczątki dawno zmarłej Iris, grzebie je zgodnie z obrzędem, po czym przywołuje jej ducha za pomocą specjalnego rytuału (znak Yrden i eliksir umożliwiający wejście do świata umysłu/wspomnień).",
      "W surrealistycznym, malowanym świecie Geralt musi odtworzyć siedem kluczowych wspomnień Iris i Olgierda, rozwiązując zagadki środowiskowe w każdej z 'scen'.",
      "Wspomnienia stopniowo ujawniają, jak rozpadło się małżeństwo: sprzeciw rodziny Olgierda wobec związku, jego niepowodzenia i magiczne/alchemiczne eksperymenty, pakt z Gaunterem O'Dimmem oraz narastające okrucieństwo Olgierda wobec żony.",
      "Na końcu wędrówki przez wspomnienia Geralt spotyka zjawę Iris trzymającą ową fioletową różę i musi podjąć decyzję dotyczącą losu kwiatu/ducha."
    ],
    "choices": [
      {
        "point": "Los róży i ducha Iris",
        "context": "W finałowej scenie malowanego świata zjawa Iris trzyma fioletową różę, o którą prosił Olgierd.",
        "options": [
          {
            "label": "Zabrać różę Iris",
            "outcome": "Zjawa Iris znika (rozpływa się), a Geralt otrzymuje prawdziwą, fizyczną różę potrzebną do spełnienia trzeciego życzenia Olgierda."
          },
          {
            "label": "Zostawić różę przy Iris",
            "outcome": "Geralt opuszcza malowany świat bez róży - zamiast niej otrzymuje jedynie obraz przedstawiający Iris trzymającą różę, co utrudnia/uniemożliwia standardowe zamknięcie tego wątku z Olgierdem."
          }
        ]
      }
    ],
    "consequences": "Zabranie róży pozwala domknąć trzecie życzenie Olgierda i przejść do zadania finałowego. Ta questlinia jako pierwsza jasno pokazuje, że to sam Olgierd - a nie tylko Gaunter O'Dimm - ponosi winę za tragedię własnej rodziny, co rzutuje na moralną ocenę gracza w finale."
  },
  {
    "id": "whatsoever-a-man-soweth",
    "title": "Cokolwiek posiał człowiek... (Whatsoever a Man Soweth...)",
    "type": "main",
    "dlc": "hos",
    "chapter": "Serca z Kamienia",
    "order": 6,
    "summary": "Finałowe zadanie dodatku 'Serca z Kamienia'. Gaunter O'Dimm wzywa Geralta do Świątyni Lilvani, by rozliczyć pakt z Olgierdem - w zamian za spełnienie trzech życzeń O'Dimm zamierza zabrać duszę szlachcica. To, czy Geralt będzie w stanie interweniować i ocalić Olgierda, zależy od tego, czy wcześniej odwiedził Shani i dowiedział się od profesora Shakeslocka, jak przechytrzyć Pana Zwierciadło.",
    "walkthrough": [
      "Gaunter O'Dimm zatrzymuje czas w Karczmie 'Pod Alembikiem' i każe Geraltowi przyprowadzić Olgierda do starej świątyni bogini Lilvani niedaleko wioski Rogowizna (Toderas), by dopełnić rytuał.",
      "OPCJONALNIE (mocno zalecane): przed konfrontacją Geralt odwiedza Shani w Oxenfurcie i razem z nią wyrusza do Akademii, by odnaleźć emerytowanego profesora Premethine'a Shakeslocka - jednego z nielicznych ludzi, którzy przeżyli spotkanie i 'grę' z Gaunterem O'Dimmem.",
      "Docierając do domu profesora, Geralt musi pokonać kilka topielic i łowców czarownic, a następnie wejść przez balkon (użycie Aardu na drzwiach).",
      "Shakeslock zdradza kluczową informację: jedynym sposobem na pokonanie O'Dimma jest wyzwanie go do gry (zagadki/'gry w zamianę'), stawiając na szali coś równie cennego jak dusza Olgierda - własną duszę Geralta. Profesor ginie przypadkiem (przygnieciony przez przewracającą się szafę z księgami) tuż po przekazaniu tej wiedzy.",
      "Geralt i Olgierd docierają do Świątyni Lilvani. Geralt oddaje Olgierdowi fioletową różę, dopełniając formalnie trzecie życzenie - kontrakt zostaje uznany za spełniony, a Gaunter O'Dimm przygotowuje się do zabrania duszy Olgierda.",
      "Jeśli Geralt zdobył wcześniej wiedzę od Shakeslocka, może w tym momencie rzucić Gaunterowi wyzwanie i postawić na szali własną duszę w zamian za duszę Olgierda.",
      "Po przyjęciu wyzwania Gaunter przenosi Geralta do zniekształconej, koszmarnej wersji posiadłości/okolicy, gdzie trzeba w ograniczonym czasie odnaleźć rozwiązanie zagadki Pana Zwierciadła ('Wszystkim rzeczom i ludziom służę wiernie, a jednak niejeden mną gardzi...' - odpowiedzią jest lustro/odbicie).",
      "W trakcie wędrówki przez ten wykrzywiony świat Geralt napotyka m.in. widmo Hyma (upiora karmiącego się poczuciem winy) strzegące jednej ze ścieżek oraz może zdobyć dodatkowy oręż (srebrny miecz 'Jadowita Żmija') i skarby w bocznych partiach lokacji.",
      "Kluczem do zagadki jest sucha fontanna - użycie znaku Aard na spękanej ścianie za fontanną uwalnia wodę, której tafla staje się lustrem/odbiciem, którego nawet Gaunter O'Dimm nie jest w stanie złamać.",
      "Rozwiązanie zagadki w wyznaczonym czasie oznacza wygraną Geralta - obie dusze (jego i Olgierda) zostają ocalone, a pakt łączący Olgierda z Gaunterem O'Dimmem zostaje unieważniony."
    ],
    "choices": [
      {
        "point": "Czy odwiedzić Shani i dowiedzieć się od Shakeslocka, jak pokonać Gauntera O'Dimma",
        "context": "To opcjonalny wątek poboczny przed finałową konfrontacją w Świątyni Lilvani.",
        "options": [
          {
            "label": "Pominąć wątek Shani/Shakeslocka",
            "outcome": "W finałowej scenie Geralt nie ma możliwości rzucenia wyzwania Gaunterowi - jedyną dostępną opcją jest bierne przyjęcie tego, że O'Dimm zabiera duszę Olgierda."
          },
          {
            "label": "Odwiedzić Shani i dotrzeć do Shakeslocka przed konfrontacją",
            "outcome": "Geralt poznaje sposób na wyzwanie Gauntera do gry o duszę i odblokowuje w finale opcję próby ocalenia Olgierda."
          }
        ]
      },
      {
        "point": "Decyzja w Świątyni Lilvani: zaakceptować los Olgierda czy rzucić wyzwanie Gaunterowi O'Dimmowi",
        "context": "Po dopełnieniu trzeciego życzenia (przekazaniu róży) kontrakt Olgierda jest formalnie spełniony i Gaunter gotów jest zabrać jego duszę.",
        "options": [
          {
            "label": "Nie angażować się / zaakceptować, że pakt został spełniony",
            "outcome": "Gaunter O'Dimm zabiera duszę Olgierda - pakt zostaje 'dopełniony', a Olgierd umiera (\"Pakt został dopełniony, a życie Olgierda dobiegło końca\"). W zamian za posłuszeństwo Geralt może poprosić Gauntera o jedno życzenie/bonus (patrz niżej) albo odmówić przyjęcia czegokolwiek od niego."
          },
          {
            "label": "Rzucić wyzwanie Gaunterowi O'Dimmowi (wymaga wcześniejszej wiedzy od Shakeslocka)",
            "outcome": "Geralt stawia na szali własną duszę przeciw duszy Olgierda i musi rozwiązać zagadkę w zniekształconym świecie w ograniczonym czasie. Sukces: obaj zostają uwolnieni, pakt zostaje zerwany (\"Olgierd von Everec był bezpieczny, a pakt, który go wiązał, został rozwiązany\"), a Olgierd w dowód wdzięczności ofiarowuje Geraltowi swój rodowy miecz stalowy 'Iris' (jeden z najsilniejszych mieczy w grze). Porażka w rozwiązaniu zagadki w wyznaczonym czasie oznacza utratę obu dusz - i Olgierda, i Geralta."
          }
        ]
      },
      {
        "point": "Nagroda od Gauntera O'Dimma (jeśli Geralt nie interweniuje lub nie ma dostępu do wyzwania)",
        "context": "W zamian za bierne oddanie duszy Olgierda Gaunter oferuje Geraltowi jedno życzenie/przedmiot w ramach 'rekompensaty'.",
        "options": [
          {
            "label": "5000 koronów",
            "outcome": "Geralt otrzymuje gotówkę zamiast przedmiotu magicznego."
          },
          {
            "label": "Róg Obfitości",
            "outcome": "Przedmiot dający nieskończone zapasy jedzenia."
          },
          {
            "label": "Niewyczerpana Karafka",
            "outcome": "Przedmiot dający nieskończony zapas alkoholu (element czysto kolekcjonerski)."
          },
          {
            "label": "Czapka Lamentu / rządek dla wierzchowca",
            "outcome": "Specjalny czaprak zwiększający szybkość konia Geralta."
          },
          {
            "label": "Odmówić przyjęcia czegokolwiek od Gauntera O'Dimma",
            "outcome": "Geralt nie bierze żadnej nagrody materialnej, ale w niektórych wersjach questa otrzymuje w zamian dodatkowe doświadczenie / satysfakcję moralną z odmowy układu z demonicznym bytem."
          }
        ]
      }
    ],
    "consequences": "Zadanie kończy główną fabułę 'Serc z Kamienia' i odblokowuje osiągnięcie/trofeum 'Pacta sunt servanda'. Jeśli Geralt pokonał Gauntera O'Dimma w grze o dusze, Olgierd przeżywa i staje się wolnym człowiekiem (jego dalsze losy pozostają otwarte, ale zrywa pakt determinujący jego niemal-nieśmiertelność i okrucieństwo), a Geralt zyskuje miecz Iris. Jeśli Geralt nie interweniował, Olgierd umiera, a jego dusza trafia do Gauntera O'Dimma - podobnie jak wcześniej dusza Iris, której los pozostaje związany z tajemniczym kupcem. W żadnym z wariantów gra nie ujawnia wprost pełnej natury/tożsamości Gauntera O'Dimma (znanego z prologu 'Krwi i Wina' jako 'Pan Zwierciadło') - jego ostateczny los i to, czy Geralt naprawdę go pokonał, czy tylko odroczył kolejne spotkanie, pozostaje niejednoznaczne (\"Czy to było ostatnie, co nasz świat miał go zobaczyć? Nikt nie potrafi powiedzieć...\")."
  },
  {
    "id": "poselstwo-z-krainy-wina",
    "title": "Poselstwo z Krainy Wina",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 1,
    "summary": "Geralt otrzymuje zlecenie na tajemniczą bestię grasującą w księstwie Toussaint. Dwaj rycerze, Palmerin de Launfal i Milton de Peyrac-Peyran, odnajdują go i w imieniu księżnej Anny Henrietty zapraszają (a właściwie eskortują) do słonecznej krainy wina. To zadanie otwiera całą fabułę dodatku Krew i Wino.",
    "walkthrough": [
      "Znajdź ogłoszenie o kontrakcie na bestię z Toussaint (dostępne również na tablicach w Novigradzie, Oxenfurcie i Wielkim Morzu).",
      "Udaj się do Osady Kamieniarzy w Holopolu, by spotkać się z rycerzami Toussaint.",
      "Porozmawiaj z Palmerinem de Launfal i Miltonem de Peyrac-Peyranem.",
      "Zdecyduj, jak zachować się wobec bandytów napadających w trakcie rozmowy.",
      "Wysłuchaj wezwania od księżnej Anny Henrietty i wyrusz z rycerzami do Toussaint."
    ],
    "choices": [
      {
        "point": "Bandyci na trakcie",
        "context": "W trakcie rozmowy z rycerzami dochodzi do napadu bandytów.",
        "options": [
          {
            "label": "Pomóż rycerzom stoczyć walkę",
            "outcome": "Geralt wraz z Palmerinem i Miltonem pokonuje bandytów w krótkiej potyczce."
          },
          {
            "label": "Odwiedź rycerzy od pościgu / pertraktacji",
            "outcome": "Geralt przekonuje rycerzy, że wycięcie jednej bandy niczego nie zmieni, bo miejsce zbirów szybko zajmą inni - walki udaje się uniknąć."
          }
        ]
      }
    ],
    "consequences": "Niezależnie od wyboru fabuła toczy się dalej tym samym torem - Geralt przyjmuje zlecenie i wyrusza do Toussaint, gdzie czeka na niego księżna Anna Henrietta."
  },
  {
    "id": "bestia-z-toussaint",
    "title": "Bestia z Toussaint",
    "type": "main",
    "dlc": "bw",
    "dlc_full": "Krew i Wino",
    "chapter": "Krew i Wino",
    "order": 2,
    "summary": "Po przybyciu do Beauclair Geralt zostaje wciągnięty w śledztwo w sprawie serii brutalnych morderstw przypisywanych tajemniczej Bestii. Pomaga rycerzom w kilku potyczkach z potworami, a jego dochodzenie prowadzi do odkrycia, że ofiary łączy coś więcej niż przypadek.",
    "walkthrough": [
      "Pomóż Guillaume'owi de Launfal pokonać olbrzyma Golyata podczas turnieju rycerskiego.",
      "Zbadaj miejsce zbrodni nad brzegiem rzeki razem z Miltonem, korzystając z wiedźmińskich zmysłów.",
      "Wydobądź z wody monogramowaną chusteczkę, pokonując po drodze skurwiele.",
      "Udaj się do Corvo Bianco i stocz walkę z bruksą w piwnicy posiadłości.",
      "Obejrzyj ciało ofiary i znajdź nietypowo odciętą dłoń.",
      "Spotkaj się z Palmerinem na arenie turniejowej.",
      "Pomóż Guillaume'owi w walce z okaleczonym szelmowcem, który wyrywa się na wolność.",
      "Odbierz od Anny Henrietty akt własności posiadłości Corvo Bianco.",
      "Weź udział w zabawie \"Gonitwa za zającem\" w ogrodach pałacowych, ścigając Miltona.",
      "Odnajdź złotą rybkę i róg \"jednorożca\", by rozwiązać zagadkę.",
      "Udziel odpowiedzi \"Szklarnia\", by ustalić, gdzie ukrywa się Milton."
    ],
    "choices": [
      {
        "point": "Los szelmowca",
        "context": "Podczas turnieju z uwięzi wyrywa się okaleczony, oswojony szelmowiec.",
        "options": [
          {
            "label": "Oszczędź szelmowca",
            "outcome": "Zwierzę zostaje uspokojone i przeżywa; liczy się to jako \"Dowód współczucia\" wykorzystywany później w grze Sądu Kupidyna."
          },
          {
            "label": "Zabij szelmowca",
            "outcome": "Bestia ginie, a Geralt traci szansę na zdobycie \"Dowodu współczucia\"."
          }
        ]
      },
      {
        "point": "Zagadka jednorożca",
        "context": "Przy okazji gry dworskiej trzeba rozwiązać zagadkę dotyczącą rogu \"jednorożca\".",
        "options": [
          {
            "label": "Rozwiąż zagadkę samodzielnie",
            "outcome": "Geralt zdobywa \"Dowód mądrości\"."
          },
          {
            "label": "Użyj znaku Axii, by oszukać dworzan",
            "outcome": "Dworzanie oskarżają Geralta o oszustwo, co może prowadzić do opcjonalnej walki."
          },
          {
            "label": "Nie rozwiąż zagadki",
            "outcome": "Za Geralta zagadkę rozwiązuje Anna Henrietta, a wiedźmin traci \"Dowód mądrości\"."
          }
        ]
      }
    ],
    "consequences": "Geralt zostaje oficjalnym właścicielem winnicy Corvo Bianco, co otwiera wątek poboczny odbudowy posiadłości. Trop prowadzi go do Miltona, którego odnalezienie zapoczątkowuje kolejne zadanie."
  },
  {
    "id": "na-tropie",
    "title": "Na tropie...",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 3,
    "summary": "Najkrótsze zadanie główne dodatku. Geralt wraz z Anną Henriettą odkrywa, że Milton padł ofiarą Bestii, po czym rusza w pościg za mordercą aż do opuszczonego magazynu, gdzie dochodzi do pierwszego starcia z tajemniczym przeciwnikiem.",
    "walkthrough": [
      "Udaj się do szklarni razem z Anną Henriettą.",
      "Odkryj, że Milton już nie żyje.",
      "Ścigaj Bestię aż do pustego magazynu.",
      "Stocz walkę z Bestią.",
      "Bądź świadkiem interwencji Regisa, który przerywa pojedynek.",
      "Dowiedz się, że tajemniczą Bestią jest wyższy wampir imieniem Dettlaff.",
      "Porozmawiaj z przybyłymi rycerzami."
    ],
    "choices": [],
    "consequences": "Nawet przegrana walka z Bestią nie kończy się dla Geralta śmiercią - traci jedynie nagrodę za starcie. Kluczowe jest ujawnienie tożsamości przeciwnika: to Dettlaff van der Eretein, wyższy wampir i dawny znajomy Regisa, który wkrótce ponownie pojawi się u boku Geralta."
  },
  {
    "id": "poglos",
    "title": "Pogłos",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 4,
    "summary": "Geralt spotyka się z Regisem - dawnym towarzyszem, który okazuje się wyższym wampirem - by wspólnie wytropić Dettlaffa. Aby przygotować miksturę namierzającą, potrzebują śliny wiedźmy-wichta, co prowadzi ich do opuszczonego domku myśliwskiego.",
    "walkthrough": [
      "Spotkaj się z Regisem na cmentarzu Mère-Lachaiselongue i dowiedz się, że jest wyższym wampirem.",
      "Wejdź do krypty przez otwór w dachu jednego z grobowców.",
      "Odnajdź kryjówkę wichta i zbadaj napisy oraz wyposażenie wiedźmińskimi zmysłami.",
      "Zlokalizuj kocioł wichta w opuszczonej posiadłości.",
      "Ukryj się w szafie, by obserwować stworzenie.",
      "Wybierz, jak postąpić z wiedźmą-wichtem.",
      "Zdobądź gruczoły śliny (zabijając stworzenie albo pobierając próbkę z kotła).",
      "Pomóż Regisowi przygotować eliksir, rozkładając przynętę w czterech tunelach.",
      "Broń Regisa przed atakującymi potworami, aż wypełni się jego wskaźnik żądzy krwi."
    ],
    "choices": [
      {
        "point": "Los wiedźmy-wichta",
        "context": "Wicht okazuje się przeklętą kobietą imieniem Marlena. Jeśli Geralt zdobył wcześniej wystarczająco dużo wskazówek, może zdjąć z niej klątwę zamiast ją zabijać.",
        "options": [
          {
            "label": "Zaatakuj i zabij wichta",
            "outcome": "Geralt zdobywa gruczoły śliny bezpośrednio z ciała stworzenia; los Marleny zostaje przypieczętowany."
          },
          {
            "label": "Zdejmij klątwę (wymaga zebranych wcześniej wskazówek)",
            "outcome": "Wicht odzyskuje ludzką postać jako Marlena, co odblokowuje dodatkowy dialog i wątek fabularny, a saliwę można pozyskać z kotła."
          }
        ]
      }
    ],
    "consequences": "Regis oficjalnie dołącza do Geralta jako sojusznik w polowaniu na Dettlaffa. Zdobyta mikstura pozwala przygotować pułapkę namierzającą wyższego wampira, co otwiera drogę do kolejnych zadań śledczych."
  },
  {
    "id": "leze-bestii",
    "title": "Leże Bestii",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 5,
    "summary": "Geralt i Regis szukają czyściciela butów, który miał kontakt z Dettlaffem, a trop prowadzi ich do opuszczonego sklepu z zabawkami służącego wampirowi za kryjówkę.",
    "walkthrough": [
      "Odwiedź port w Beauclair między 8:00 a 20:00, by znaleźć czyściciela butów.",
      "Obroń chłopaka przed napastnikami w walce na pięści.",
      "Zapłać 500 orenów (albo wynegocjuj cenę lub użyj znaku Axii), by uzyskać informacje o miejscu pobytu Dettlaffa.",
      "Podążaj za Regisem do sklepu z zabawkami \"Koń na biegunach\".",
      "Wejdź na piętro i przeszukaj je wiedźmińskimi zmysłami.",
      "Obejrzyj twarz kobiety, pozytywkę oraz narzędzia na stole roboczym.",
      "Zbierz dwa kluczowe dokumenty: podejrzany list ukryty w dzbanie oraz listy leżące przy stole roboczym."
    ],
    "choices": [
      {
        "point": "Sposób zapłaty czyścicielowi butów",
        "context": "Chłopak żąda 500 orenów za informacje o Dettlaffie.",
        "options": [
          {
            "label": "Zapłać pełną kwotę",
            "outcome": "Liczy się to jako \"Dowód hojności\" przydatny w późniejszej grze Sądu Kupidyna."
          },
          {
            "label": "Wynegocjuj niższą cenę lub użyj Axii",
            "outcome": "Geralt oszczędza pieniądze, ale nie zdobywa \"Dowodu hojności\"."
          }
        ]
      }
    ],
    "consequences": "Odnalezione dokumenty ujawniają, że Dettlaff działał na czyjeś zlecenie i szukał konkretnych osób - to pierwszy trop wskazujący, że za atakami stoi ktoś inny niż sam wampir."
  },
  {
    "id": "wino-rzecz-swieta",
    "title": "Wino rzecz święta",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 6,
    "summary": "Anna Henrietta prosi Geralta o pomoc w zbadaniu podejrzanej przesyłki wina, która okazuje się elementem szantażu wymierzonego w kogoś związanego z sprawą Bestii. Śledztwo prowadzi z winnicy Castel Ravello aż po ruiny Fortu Astre.",
    "walkthrough": [
      "Stawić się w pałacu w Beauclair na spotkanie z Anną Henriettą i Damienem de la Tour.",
      "Pokaż splamiony list ksiąskiemu sommelierowi, który rozpozna w nim rzadkie wino Sangreal z 1269 roku z winnicy Castel Ravello.",
      "Eskortuj księżną do winnicy (opcjonalnie: pokonaj pantery atakujące wóz po drodze).",
      "Przesłuchaj Fabricia, właściciela winnicy, który ujawnia sprzedaż wina cyntryjskiemu szlachcicowi.",
      "Zbadaj beczki w piwnicach, by znaleźć podrobione wino.",
      "Weź udział w zasadzce przy Forcie Astre na bandytów dostarczających kolejną beczkę.",
      "Spotkaj się z Damienem przy posterunku straży, by omówić dalsze kroki dotyczące \"Cyntryjczyka\"."
    ],
    "choices": [
      {
        "point": "Spotkanie z panterami",
        "context": "W drodze do winnicy wóz zostaje zaatakowany przez pantery.",
        "options": [
          {
            "label": "Stocz walkę",
            "outcome": "Geralt otrzymuje dodatkowe wynagrodzenie (ok. 450 sztuk złota)."
          },
          {
            "label": "Unikaj starcia",
            "outcome": "Fabuła toczy się dalej bez dodatkowej nagrody."
          }
        ]
      }
    ],
    "consequences": "Śledztwo prowadzi do tożsamości \"Cyntryjczyka\" - tajemniczego szlachcica organizującego intrygę, co bezpośrednio otwiera kolejne zadanie."
  },
  {
    "id": "szlachcic-z-cintry",
    "title": "Szlachcic z Cintry",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 7,
    "summary": "Geralt i Anna Henrietta biorą udział w ekskluzywnym przyjęciu, by namierzyć \"Cyntryjczyka\". Wieczór kończy się tragicznie wraz z odkryciem zamordowanej śpiewaczki, a trop dowodowy prowadzi w stronę zaskakującej prawdy o Bestii.",
    "walkthrough": [
      "Opcjonalnie przebierz się w odpowiedni strój na przyjęcie.",
      "Spotkaj się z Anną Henriettą w Alei Pajaców.",
      "Weź udział w przyjęciu i odszukaj wśród gości kobietę z koviriańską orchideą.",
      "Opcjonalnie wypróbuj zabawę w rzucanie farbą.",
      "Użyj wiedźmińskich zmysłów, by przeszukać stoły z poczęstunkiem i znaleźć pudełko w kształcie serca.",
      "Podążaj tropem zapachowym przez balkony (ciało, odcisk dłoni, doniczka).",
      "Zbadaj pokój ze śladami krwi, biżuterią i nożem myśliwskim.",
      "Obejrzyj obrazy, lustra i świeczniki jako dodatkowe dowody.",
      "Bądź świadkiem przełomowej sceny ujawniającej prawdę."
    ],
    "choices": [
      {
        "point": "Reakcja na wyjaśnienia dotyczące przemocy",
        "context": "Po ujawnieniu prawdy Geralt musi zareagować na usprawiedliwienia.",
        "options": [
          {
            "label": "\"To żadne usprawiedliwienie\"",
            "outcome": "Geralt zajmuje jednoznacznie krytyczne stanowisko."
          },
          {
            "label": "\"Tak jak u ludzi\"",
            "outcome": "Geralt przyjmuje bardziej wyrozumiałą, filozoficzną postawę."
          }
        ]
      }
    ],
    "consequences": "Wybrana odpowiedź wpływa na ton kolejnej rozmowy, ale nie zmienia biegu fabuły - kolejnym krokiem staje się szturm na siedzibę porywacza."
  },
  {
    "id": "szturm-na-dun-tynne",
    "title": "Szturm na Dun Tynne",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 8,
    "summary": "Geralt wraz z siłami książęcymi szturmuje zamek Dun Tynne, by odbić porwaną Syannę. To punkt bez odwrotu w fabule dodatku - okazuje się, że tajemnicza Syanna i banitka Rhena to ta sama osoba: zaginiona przed laty siostra Anny Henrietty.",
    "walkthrough": [
      "Spotkaj się z kapitanem Damienem de la Tour przy młynie hrabiego de la Croix po północy.",
      "Przebij się przez dziedziniec zamkowy, eliminując fale strażników.",
      "Pokonaj Roderika, pana zamku, i jego ludzi.",
      "Przejdź przez drewnianą bramę i wyeliminuj łuczników na balkonie (opcjonalnie: przemknij obok Żelaznego Borga).",
      "Wejdź po schodach do komnat, gdzie Regis i Dettlaff dołączają jako sprzymierzeńcy i biorą na siebie większość walki.",
      "Dotrzyj do rezydencji, gdzie odsłania się prawda o Syannie."
    ],
    "choices": [
      {
        "point": "Los Roderika",
        "context": "Po pokonaniu pana zamku Geralt może mu pomóc.",
        "options": [
          {
            "label": "Pomóż Roderikowi",
            "outcome": "Zdobywa się \"Dowód współczucia\" wykorzystywany w późniejszej grze Sądu Kupidyna."
          },
          {
            "label": "Zostaw go bez pomocy",
            "outcome": "Geralt nie zdobywa dodatkowego \"Dowodu\", fabuła toczy się dalej normalnie."
          }
        ]
      }
    ],
    "consequences": "Ujawnia się, że Syanna (Rhena) manipulowała Roderikiem i wysyłała Dettlaffa na kradzieże oraz podawała mu nazwiska ofiar. Rozwścieczony Dettlaff żąda spotkania z Syanną w ruinach Tesham Mutna w ciągu trzech dni, grożąc atakiem na Beauclair, a Anna Henrietta nakazuje Geraltowi zabić wampira przed upływem terminu - stawiając wiedźmina w sytuacji bez dobrego wyjścia."
  },
  {
    "id": "dluga-noc",
    "title": "Długa noc",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 9,
    "summary": "Po nieudanej próbie odnalezienia Syanny rozwścieczony Dettlaff atakuje Beauclair. Geralt musi przedrzeć się przez opanowane przez wampiry miasto i dokonać kluczowego wyboru ścieżki śledztwa, który zdeterminuje dalszy przebieg fabuły aż po samo zakończenie dodatku.",
    "walkthrough": [
      "Pokonaj bruksę atakującą przy pałacu, korzystając ze znaku Yrden i olejów przeciw wampirom.",
      "Skonsultuj się z Regisem i wybierz jedną z dwóch ścieżek śledztwa.",
      "Przedzieraj się przez ogarnięte walką miasto, tocząc starcia z różnymi rodzajami wampirów.",
      "Ścieżka A (Damien): odnajdź kapitana Damiena, dowiedz się, że Syanna przebywa w pałacowym pokoju zabaw.",
      "Ścieżka B (Oriana): odwiedź posiadłość Oriany, towarzysz jej w drodze do sierocińca (uruchamia zadanie \"Zew krwi\").",
      "Dotrzyj do pokoju zabaw i odczytaj dziennik oraz książkę \"Kraina Tysiąca Baśni\", by ostatecznie ustalić dalszy kierunek śledztwa."
    ],
    "choices": [
      {
        "point": "Wybór ścieżki śledztwa",
        "context": "Regis proponuje Geraltowi dwie drogi dalszego postępowania: odnalezienie kapitana Damiena, który wie, gdzie ukrywa się Syanna, albo odwiedzenie Oriany, znajomej Dettlaffa mogącej naprowadzić na trop Nieznanego Starca.",
        "options": [
          {
            "label": "Ścieżka Damiena - szukaj Syanny",
            "outcome": "Prowadzi do zadania \"Dawno, dawno temu...\" i szansy na odnalezienie oraz uratowanie Syanny w Krainie Tysiąca Baśni - to droga otwierająca możliwość najlepszego zakończenia."
          },
          {
            "label": "Ścieżka Oriany - szukaj Nieznanego Starca",
            "outcome": "Prowadzi przez zadania \"Zew krwi\" i \"Między światami\" do sojuszu z Nieznanym Starcem przeciw Dettlaffowi, bez ratowania Syanny - ta droga znacząco zbliża grę do najgorszego zakończenia, choć wciąż można później zmienić kurs i poszukać Syanny."
          }
        ]
      }
    ],
    "consequences": "Wybór ścieżki śledztwa determinuje, czy Geralt w ogóle dotrze do Syanny przed finałową konfrontacją w Tesham Mutna, co ma bezpośredni wpływ na to, które z trzech zakończeń dodatku stanie się możliwe."
  },
  {
    "id": "zew-krwi",
    "title": "Zew krwi",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 10,
    "summary": "Zadanie dostępne po wybraniu ścieżki Oriany w \"Długiej nocy\". Geralt bada masakrę w sierocińcu La Compassion i tropi odpowiedzialnego za nią alfa-garkaina, a na koniec konfrontuje się z samą Orianą w sprawie jej udziału w tragedii.",
    "walkthrough": [
      "Zbadaj ciała i dowody w sierocińcu wiedźmińskimi zmysłami.",
      "Podążaj tropem zapachowym od filaru przy wejściu.",
      "Prześledź trasę bestii ponad występem skalnym, by znaleźć kolejne szczątki.",
      "Podążaj konno śladami kół wozu.",
      "Zlokalizuj kryjówkę garkaina w pobliżu mostu, korzystając z wiedźmińskich zmysłów.",
      "Pokonaj alfa-garkaina w walce.",
      "Odbierz list Oriany z pobliskiego ciała.",
      "Wróć do sierocińca, by skonfrontować się z Orianą.",
      "Zasygnalizuj Regisowi za pomocą ptaków na drzewach.",
      "Zdecyduj, czy spotkać się z Regisem w porcie, czy kontynuować śledztwo samodzielnie."
    ],
    "choices": [
      {
        "point": "Dalszy kierunek śledztwa",
        "context": "Po konfrontacji z Orianą Geralt może w tym momencie zmienić plany.",
        "options": [
          {
            "label": "Poszukaj jednak Syanny",
            "outcome": "Gracz porzuca trop Nieznanego Starca i przechodzi do zadania \"Dawno, dawno temu...\", zachowując szansę na uratowanie Syanny."
          },
          {
            "label": "Kontynuuj trop Nieznanego Starca",
            "outcome": "Fabuła prowadzi do zadania \"Między światami\" i sojuszu z potężnym wampirem przeciw Dettlaffowi."
          }
        ]
      }
    ],
    "consequences": "Oriana ucieka, ale wątek pozostaje otwarty - \"wiedźmin i wampirzyca spotkają się jeszcze kiedyś\". Zdobyty magiczny klucz otwiera drogę do legowiska Nieznanego Starca."
  },
  {
    "id": "miedzy-swiatami",
    "title": "Między światami",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 11,
    "summary": "Odblokowywane po wybraniu tropu Nieznanego Starca. Geralt, uzbrojony w magiczny klucz od Oriany, wyrusza do podwodnej jaskini na południe od Beauclair, by prosić potężnego, pradawnego wampira o pomoc przeciwko Dettlaffowi.",
    "walkthrough": [
      "Dotrzyj do zapieczętowanych drzwi, gdzie czeka Regis, i otwórz je zdobytym kluczem.",
      "Przemierz jaskinię, wybierając górną lub zalaną trasę.",
      "Pokonaj fledera i zbierz rozrzucone części zbroi Hen Gaidth.",
      "Odzyskaj wyrzucony przez Starca ekwipunek.",
      "Zregeneruj zdrowie i przemierz komnatę o zmiennej grawitacji.",
      "Zdobądź różowy kamień jako dar pojednawczy.",
      "Użyj znaku Aard na podstawie kamienia, by odsłonić przejście.",
      "Wróć do komnaty Starca."
    ],
    "choices": [
      {
        "point": "Rozmowa z Nieznanym Starcem",
        "context": "Starzec toleruje ograniczoną liczbę dodatkowych pytań w rozmowie - przekroczenie limitu grozi natychmiastową śmiercią Geralta.",
        "options": [
          {
            "label": "Zadaj tylko jedno dodatkowe pytanie i wybierz odpowiedź \"Dettlaff sprowadzi na was kłopoty\"",
            "outcome": "Starzec zgadza się pomóc i zmusza Dettlaffa do stawienia się na spotkanie w Tesham Mutna."
          },
          {
            "label": "Nalegaj lub wybierz błędne opcje dialogowe więcej niż raz",
            "outcome": "Starzec zabija Geralta na miejscu - konieczne wczytanie zapisu gry."
          }
        ]
      }
    ],
    "consequences": "Zgoda Nieznanego Starca gwarantuje pomoc w walce z Dettlaffem, ale ta ścieżka - jeśli Geralt nie zdąży wcześniej odnaleźć i uratować Syanny - prowadzi w stronę najgorszego z możliwych zakończeń dodatku."
  },
  {
    "id": "dawno-dawno-temu",
    "title": "Dawno, dawno temu...",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 12,
    "summary": "Geralt wkracza do Krainy Tysiąca Baśni - rozpadającej się iluzji zbudowanej z baśniowych motywów - by odnaleźć uwięzioną tam Syannę. Musi zebrać trzy magiczne fasolki, by wyhodować łodygę prowadzącą do zamku olbrzyma.",
    "walkthrough": [
      "Podążaj żółtą drogą (ignorując wadliwą mapę na rzecz wskaźnika celu).",
      "Pokonaj Złą Wiedźmę w pobliżu chaty, w której uwięziona jest Syanna.",
      "Odnajdź Jossa, chłopca, który zmyśla nieprawdziwe informacje o fasolkach.",
      "Zdobądź trzy fasolki: czerwoną (z brzucha Wielkiego Złego Wilka, po odegraniu bajki o Czerwonym Kapturku), żółtą (strzeżoną przez zjawę Roszpunki w wieży) i niebieską (ukrytą przez Trzy Małe Świnki w domku z cegły).",
      "Opcjonalnie odwiedź Dziewczynkę z Zapałkami i zdobądź wstążkę za 500 orenów albo w partii gwinta.",
      "Zasadź fasolki, by wyhodować łodygę prowadzącą do zamku olbrzyma.",
      "Pokonaj chmurnego olbrzyma i wyjdź przez studnię."
    ],
    "choices": [
      {
        "point": "Wstążka od Dziewczynki z Zapałkami",
        "context": "Opcjonalne spotkanie z zagubioną duszą małej dziewczynki, która oferuje magiczną wstążkę w zamian za pieniądze lub partię gwinta.",
        "options": [
          {
            "label": "Zdobądź wstążkę",
            "outcome": "Wstążka, wykonana przez czarodzieja Artoriusa Vigo, będzie mogła ocalić Syannę przed śmiercią z rąk Dettlaffa podczas finałowej konfrontacji w Tesham Mutna - to warunek konieczny najlepszego zakończenia."
          },
          {
            "label": "Zrezygnuj ze spotkania lub nie zdobądź wstążki",
            "outcome": "Geralt traci jedyną szansę na uratowanie Syanny w Tesham Mutna, jeśli zdecyduje się ją tam zabrać - skazuje ją tym samym na śmierć z rąk Dettlaffa."
          }
        ]
      }
    ],
    "consequences": "Uratowanie Syanny z Krainy Tysiąca Baśni jest warunkiem koniecznym, by w ogóle mogła stawić się (żywa lub martwa) na spotkaniu w Tesham Mutna. Posiadanie magicznej wstążki jest jedynym sposobem na ocalenie jej życia podczas starcia z Dettlaffem."
  },
  {
    "id": "tesham-mutna",
    "title": "Tesham Mutna",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 13,
    "summary": "Kulminacyjne starcie fabuły Krwi i Wina. W ruinach Tesham Mutna dochodzi do konfrontacji z Dettlaffem. To tutaj rozstrzyga się kluczowy dylemat całego dodatku: czy uwierzyć w to, że Syannę da się ocalić, czy zaakceptować, że musi ona zapłacić za swoje zbrodnie życiem - i jaką cenę zapłaci za to Beauclair.",
    "walkthrough": [
      "Odblokuj zadanie, kończąc wcześniej \"Między światami\" (pomoc Nieznanego Starca) albo \"Dawno, dawno temu...\" (odnalezienie Syanny).",
      "Udaj się do ruin Tesham Mutna na południu Toussaint.",
      "Stań twarzą w twarz z Dettlaffem - przebieg rozmowy i walki zależy od wcześniejszych decyzji.",
      "Stocz trzyetapową walkę z Dettlaffem: postać humanoidalna, forma latająca (chmura nietoperzy) oraz iluzoryczna wewnętrzna komnata z pulsującymi sercami.",
      "Zadaj (lub powstrzymaj się od zadania) ostatecznego ciosu."
    ],
    "choices": [
      {
        "point": "Kluczowy wybór: los Syanny i Dettlaffa",
        "context": "To najważniejszy moment decyzyjny całego dodatku. Od tego, czy Geralt zdołał wcześniej uratować Syannę oraz czy zdobył magiczną wstążkę od Dziewczynki z Zapałkami, zależy, kto przeżyje starcie w Tesham Mutna.",
        "options": [
          {
            "label": "Geralt nie ma Syanny (poszedł ścieżką Nieznanego Starca i nie odnalazł jej w Krainie Baśni)",
            "outcome": "Dettlaff, przekonany że Syanna go ponownie zawiodła, zmusza Geralta do walki. Wiedźmin musi go pokonać w pełnym, trzyetapowym starciu. Syanna wciąż żyje, ale nieuratowana z Krainy Tysiąca Baśni - w praktyce ta ścieżka prowadzi do najgorszego zakończenia, w którym obie siostry ostatecznie giną podczas ceremonii."
          },
          {
            "label": "Geralt przyprowadza Syannę, ale BEZ magicznej wstążki",
            "outcome": "Rozwścieczony zdradą Dettlaff w brutalny sposób zabija Syannę na oczach Geralta. Wiedźmin może wtedy stoczyć z nim walkę i go zabić, albo pozwolić mu odejść (Dettlaff obiecuje trzymać się z dala od ludzi). W obu wariantach Syanna nie żyje, a śmierć siostry księżnej sprowadza na Geralta gniew Anny Henrietty i aresztowanie (zadanie \"Za żelazną kratą\")."
          },
          {
            "label": "Geralt przyprowadza Syannę Z magiczną wstążką",
            "outcome": "W chwili, gdy Dettlaff próbuje zabić Syannę, wstążka Artoriusa Vigo teleportuje ją w bezpieczne miejsce. Rozjuszony wampir zmusza Geralta do pełnej, trzyetapowej walki, którą wiedźmin musi wygrać - Dettlaff ginie, ale Syanna przeżywa i może wziąć udział w dalszej części fabuły (zadanie \"Ceremonia\")."
          }
        ]
      },
      {
        "point": "Oszczędzić czy zabić Dettlaffa (tylko gdy Syanna zginęła bez wstążki)",
        "context": "Jeśli Dettlaff zdążył zabić Syannę, po pokonaniu go w walce Geralt decyduje o jego dalszym losie.",
        "options": [
          {
            "label": "Zabij Dettlaffa",
            "outcome": "Wampir ginie z ręki Geralta; liczy się to jako \"Dowód męstwa\" w innej grze Sądu Kupidyna, ale Regis traci przyjaciela i bywa później uznawany przez inne wampiry za zdrajcę za sprzymierzenie się z wiedźminem przeciw swojemu pobratymcowi."
          },
          {
            "label": "Oszczędź Dettlaffa",
            "outcome": "Wampir przysięga trzymać się z dala od ludzi i odchodzi wolny. Syanna wciąż nie żyje, więc Geralt i tak trafia do więzienia w \"Za żelazną kratą\", ale Dettlaff przeżywa, co część graczy uznaje za bardziej \"wiedźmiński\", pragmatyczny wybór."
          }
        ]
      }
    ],
    "consequences": "To zadanie bezpośrednio determinuje, która z dwóch gałęzi fabuły się rozegra: jeśli Syanna przeżyła (dzięki wstążce), gra przechodzi do zadania \"Ceremonia\", w którym rozstrzyga się ostateczny, najlepszy lub najgorszy wariant zakończenia. Jeśli Syanna zginęła, Geralt trafia do więzienia w zadaniu \"Za żelazną kratą\", co prowadzi do środkowego (gorszego) zakończenia."
  },
  {
    "id": "ceremonia",
    "title": "Ceremonia",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 14,
    "summary": "Zadanie dostępne wyłącznie wtedy, gdy Syanna przeżyła starcie w Tesham Mutna. Geralt zostaje uhonorowany przez Annę Henriettę podczas oficjalnej ceremonii, jednak wcześniej musi ustalić, czy Syanna wciąż planowała zabić własną siostrę - i podjąć próbę pojednania sióstr, co decyduje o ostatecznym, najlepszym albo najgorszym zakończeniu dodatku.",
    "walkthrough": [
      "Porozmawiaj z Regisem o tożsamości piątej, niedoszłej ofiary Dettlaffa.",
      "Odwiedź czyściciela butów w porcie, by uzyskać trop prowadzący do przytułku.",
      "Stocz walkę na pięści z napastnikami w przytułku i zdobądź list ujawniający, że to Anna Henrietta miała być piątą ofiarą - z inicjatywy samej Syanny.",
      "Odwiedź Syannę w pałacowym lochu i przeprowadź z nią kluczową rozmowę.",
      "Spotkaj się z Damienem de la Tour w ogrodach pałacowych.",
      "Weź udział w oficjalnej ceremonii - Geralt zostaje odznaczony Orderem Vitis Vinifera i otrzymuje 5000 koron oraz zapas wina.",
      "Bądź świadkiem konfrontacji Anny Henrietty z Syanną."
    ],
    "choices": [
      {
        "point": "Rozmowa z Syanną w lochu",
        "context": "Aby dać siostrom szansę na pojednanie, Geralt musi w rozmowie z Syanną poruszyć temat jej żalu do Anny Henrietty i spróbować nakłonić ją do wybaczenia.",
        "options": [
          {
            "label": "Wybierz odpowiedzi wskazujące na zrozumienie żalu Syanny (\"bo odwróciła się od ciebie, zapomniała o tobie\") i zachęcające do wybaczenia (\"czy nie pomyślałaś, żeby jej wybaczyć?\")",
            "outcome": "Syanna daje się przekonać do szczerego pojednania z siostrą."
          },
          {
            "label": "Pomiń rozmowę z Syanną lub wybierz inne odpowiedzi",
            "outcome": "Syanna nie zostaje przekonana do żadnej zmiany serca, co otwiera drogę do najgorszego wariantu zakończenia ceremonii."
          }
        ]
      },
      {
        "point": "Finał ceremonii - los obu sióstr",
        "context": "Podczas publicznej ceremonii dochodzi do ostatecznej konfrontacji między Anną Henriettą a Syanną, której wynik zależy od wcześniejszej rozmowy w lochu oraz od tego, czy Geralt ujawnił dowody na to, że Syanna planowała zabójstwo.",
        "options": [
          {
            "label": "Syanna została przekonana do wybaczenia (najlepsze zakończenie)",
            "outcome": "Siostry publicznie się godzą - dochodzi do burzliwej, ale szczerej wymiany zdań, po której napięcie opada i obie kobiety się obejmują. Anna Henrietta i Syanna przeżywają, Beauclair odzyskuje spokój, a Geralt świętuje sukces z Regisem."
          },
          {
            "label": "Syanna nie została przekonana (najgorsze zakończenie)",
            "outcome": "Syanna udaje pojednanie, po czym zabija Annę Henriettę spinką do włosów. Strażnicy natychmiast zabijają Syannę. Obie siostry giną, Beauclair pogrąża się w żałobie, a Geralt odwiedza groby obu kobiet przed spotkaniem z Regisem."
          }
        ]
      }
    ],
    "consequences": "To właśnie w \"Ceremonii\" rozstrzyga się ostateczne, pełne zakończenie fabuły Krwi i Wina dla ścieżki, w której Syanna przeżyła starcie z Dettlaffem - może zakończyć się albo pojednaniem i przetrwaniem obu sióstr, albo śmiercią ich obu. W obu wariantach Dettlaff, jeśli zginął w Tesham Mutna, sprawia, że Regis bywa później postrzegany przez inne wampiry jako zdrajca gatunku."
  },
  {
    "id": "za-zelazna-krata",
    "title": "Za żelazną kratą",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 15,
    "summary": "Alternatywne zadanie epilogowe, odblokowywane tylko wtedy, gdy Syanna zginęła z rąk Dettlaffa w Tesham Mutna (bo Geralt nie zdobył magicznej wstążki). Za przyczynienie się do śmierci siostry księżnej Geralt trafia do więzienia w Toussaint.",
    "walkthrough": [
      "Porozmawiaj z osadzonym Jacques'em Fatalskim (Handsome Jacques), który skieruje Geralta do pralni.",
      "Zbierz brudne ubrania ze skrzyni i mydło znalezione przy schodach.",
      "Skorzystaj z balii do prania i podnieś patyk.",
      "Stocz walkę z osadzonymi kryminalistami (można użyć Axii, by zredukować liczbę przeciwników).",
      "Bądź świadkiem egzekucji na dziedzińcu więziennym.",
      "Spotkaj się z Damienem de la Tour, który wyjaśnia warunki uwolnienia Geralta.",
      "Porozmawiaj z Jaskrem o warunkach postawionych przez księżną.",
      "Odbierz swoje rzeczy i opuść więzienie.",
      "Spotkaj Regisa przy bramie."
    ],
    "choices": [
      {
        "point": "Ujawnienie prawdy o piątej ofierze",
        "context": "Śledztwo (przesłuchanie czyściciela butów i wizyta w przytułku) ujawnia, że Syanna planowała osobiście zamordować własną siostrę.",
        "options": [
          {
            "label": "Ujawnij ustalenia księżnej",
            "outcome": "Anna Henrietta zaprzecza i reaguje z gniewem oraz smutkiem na te informacje."
          },
          {
            "label": "Zachowaj informacje dla siebie",
            "outcome": "Geralt rezygnuje z konfrontacji i zamiast tego spędza czas przy drinku z Regisem."
          }
        ]
      }
    ],
    "consequences": "Dzięki interwencji Jaskra Geralt zostaje ostatecznie uwolniony, traci jednak większość obiecanej nagrody i zostaje wygnany z księstwa Toussaint. To środkowe, gorzko-słodkie zakończenie fabuły - Syanna nie żyje, a Geralt, mimo pokonania Dettlaffa (lub jego oszczędzenia), płaci cenę za splot wcześniejszych decyzji."
  },
  {
    "id": "wszedzie-dobrze",
    "title": "Wszędzie dobrze...",
    "type": "main",
    "dlc": "bw",
    "chapter": "Krew i Wino",
    "order": 16,
    "summary": "Finałowe, spokojne zadanie zamykające fabułę Krwi i Wina. Po pożegnaniu z Regisem na cmentarzu Mère-Lachaiselongue Geralt wraca do swojej winnicy Corvo Bianco, gdzie czeka na niego niespodziewany gość - epilog jego historii w Toussaint.",
    "walkthrough": [
      "Zakończ główny wątek fabularny i porozmawiaj z Regisem na cmentarzu Mère-Lachaiselongue.",
      "Udaj się do posiadłości Corvo Bianco.",
      "Porozmawiaj z Barnabą-Bazylim Foulty, który wspomina o czekającym gościu.",
      "Wejdź do domu i odkryj, kto na Geralta czeka.",
      "Przeprowadź rozmowę z gościem, podsumowującą wydarzenia sagi."
    ],
    "choices": [
      {
        "point": "Tożsamość gościa w Corvo Bianco",
        "context": "Kto odwiedza Geralta w jego nowej posiadłości, zależy od decyzji romansowych i losów Ciri podjętych w podstawowej wersji gry oraz w Krwi i Winie.",
        "options": [
          {
            "label": "Geralt związał się z Triss",
            "outcome": "Do Corvo Bianco przybywa Triss Merigold."
          },
          {
            "label": "Geralt związał się z Yennefer",
            "outcome": "Do Corvo Bianco przybywa Yennefer z Vengerbergu."
          },
          {
            "label": "Geralt nie związał się z żadną z czarodziejek, a Ciri przeżyła (jako wiedźminka lub cesarzowa) / lub związał się z obiema",
            "outcome": "Do Corvo Bianco przybywa Ciri, by odwiedzić przybranego ojca."
          },
          {
            "label": "Brak romansu i Ciri nie żyje (lub rozgrywka na bazowej wersji gry bez importu save'a)",
            "outcome": "Do Corvo Bianco przybywa Jaskier, wierny przyjaciel Geralta."
          }
        ]
      }
    ],
    "consequences": "Zadanie zamyka historię Geralta w Toussaint jako spokojny, ciepły epilog - niezależnie od tego, jak potoczyły się wcześniejsze wydarzenia, wiedźmin osiada we własnej winnicy jako w pełni zasłużonej, prywatnej przystani po latach wędrówki. Los Regisa zależy od wcześniejszych wyborów: jeśli Dettlaff zginął z ręki Geralta, Regis bywa uznawany przez resztę wampirzej społeczności za zdrajcę, co kładzie się cieniem na jego dalszym życiu, mimo że pozostaje wiernym przyjacielem Geralta."
  },
  {
    "id": "sprawy-rodzinne",
    "title": "Sprawy rodzinne (Family Matters)",
    "type": "side",
    "dlc": "base",
    "chapter": "Velen",
    "order": 1,
    "summary": "Pierwsze zadanie wątku Krwawego Barona - Geralt pomaga władcy Krzywuchowych Moczarów odnaleźć zaginioną żonę Annę i córkę Tamarę. Śledztwo prowadzi do Guślarza i odkrycia, że w chacie pod Wroncem czai się Wypłodek (Botchling) - poczęte, lecz nienarodzone dziecko Anny, przeklęte po tym, jak próbowała pozbyć się ciąży.",
    "walkthrough": [
      "Porozmawiaj z Baronem w Kasztelu Wrońce i zbadaj poszlaki dotyczące zniknięcia Anny i Tamary.",
      "Odwiedź Guślarza w jego chacie, by uzyskać wróżbę i dowiedzieć się więcej o klątwie ciążącej na rodzinie Barona.",
      "Odnajdź kozę Guślarza (Księżniczkę) i eskortuj ją z powrotem, by zdobyć jego zaufanie.",
      "W nocy, w chacie pod Wroncem, przygotuj się na starcie z Wypłodkiem - Geralt musi go pokonać lub obłaskawić.",
      "Podejmij decyzję o losie stworzenia podczas rytuału."
    ],
    "choices": [
      {
        "point": "Los Wypłodka (Botchling)",
        "context": "Po pokonaniu stworzenia w walce Geralt może je dobić, albo odprawić rytuał przemiany w Domowika (Lubberkin) - w tym celu musi nakarmić je własną krwią, zanosząc je jednocześnie do miejsca, w którym powinno zostać pochowane.",
        "options": [
          {
            "label": "Zabić Wypłodka",
            "outcome": "Stworzenie ginie ostatecznie. Kwestowo i nagrodowo wynik jest równoważny wobec drugiej opcji - różni się głównie klimatem sceny i tym, że Geralt nie ryzykuje własnej krwi."
          },
          {
            "label": "Zamienić w Domowika (nakarmić własną krwią)",
            "outcome": "Duszek dziecka staje się opiekuńczym domowym duchem, który błogosławi obejście i wskazuje miejsce ukrytego skarbu. Nagroda i dalszy przebieg fabuły są niemal identyczne jak przy zabiciu - to głównie wybór klimatyczny, nie zmieniający later losu Barona."
          }
        ]
      }
    ],
    "consequences": "Zadanie odsłania mroczną historię przemocy domowej w rodzinie Barona (to on, bijąc ciężarną Annę, doprowadził do przekleństwa) i otwiera kolejne wątki - 'Na ratunek Księżniczce' oraz trop do Guślarza i Wiedźm z Bagien. Sam wybór Wypłodek/Domowik nie zmienia zakończenia wątku Barona - kluczowe decyzje zapadają w 'Szepczącym wzgórzu' i 'Powrocie na Krzywuchowe Moczary'."
  },
  {
    "id": "mysia-wieza",
    "title": "Mysia Wieża (A Towerful of Mice)",
    "type": "side",
    "dlc": "base",
    "chapter": "Velen",
    "order": 2,
    "summary": "Geralt bada nawiedzoną wieżę na bagnach, gdzie natrafia na ducha Anabelle - kobiety zmarłej na dżumę, zakochanej w rybaku Grahamie. Duch prosi o odnalezienie i dostarczenie jej kości ukochanemu, by mogli połączyć się choć w śmierci.",
    "walkthrough": [
      "Zbadaj wieżę zmysłami wiedźmińskimi i odnajdź szczątki związane z historią Anabelle.",
      "Odnajdź kości Anabelle na dnie bagna w pobliżu wieży.",
      "Odszukaj Grahama we wsi i zdecyduj, czy przekazać mu kości, czy odmówić.",
      "W zależności od wyboru: dostarcz szczątki Grahamowi albo wróć do wieży i stocz walkę z Anabelle jako Zarazą Morową (Plague Maiden) wraz z dwoma zjawami."
    ],
    "choices": [
      {
        "point": "Kości dla Grahama",
        "context": "Anabelle prosi, by zanieść jej szczątki ukochanemu Grahamowi - to pozornie 'dobry uczynek', spełniający ostatnią wolę ducha.",
        "options": [
          {
            "label": "Zanieść kości Grahamowi",
            "outcome": "Klątwa więżąca ducha zostaje zdjęta, ale Anabelle zamienia się w groźną Zarazę Morową i ucieka w las - uwalniając niebezpieczeństwo epidemii w okolicy. Uznawane za gorsze, 'nieszczęśliwe' zakończenie."
          },
          {
            "label": "Odmówić i zawalczyć z duchem",
            "outcome": "Dochodzi do walki z Anabelle (Zarazą Morową) i dwiema zjawami w wieży. Po zwycięstwie duch ostatecznie umiera spokojnie, symbolicznie łącząc się z Grahamem w chwili śmierci - epidemia zostaje powstrzymana. Uznawane za lepsze zakończenie, dające też więcej doświadczenia."
          }
        ]
      }
    ],
    "consequences": "To jeden z niewielu przykładów w grze, gdzie pozornie miłosierny wybór (spełnienie prośby ducha) prowadzi do gorszego skutku dla świata, a konfrontacja siłowa - do lepszego zakończenia. Zadanie nie wpływa na główny wątek, ale jest cytowane jako przykład moralnej dwuznaczności serii."
  },
  {
    "id": "nawiedzony-dom",
    "title": "Nawiedzony dom (Haunted House)",
    "type": "side",
    "dlc": "base",
    "chapter": "Velen",
    "order": 3,
    "summary": "W Novigradzie Geralt trafia na trop Sarah - godlinga (istoty podobnej do chowańca), która żywi się snami chorego chłopca Johnny'ego, jednocześnie pomagając śniącej wróżce Corinne Tilly odzyskać moce. Wiedźmin musi zdecydować, czy pozwolić Sarah zostać, czy ją wypędzić.",
    "walkthrough": [
      "Zbadaj dom przy użyciu zmysłów wiedźmińskich i odkryj obecność godlinga.",
      "Porozmawiaj z Corinne Tilly, oneiromantką, która korzysta z pomocy Sarah do przepowiadania snów.",
      "Skonfrontuj się z Sarah i zdecyduj o jej dalszym losie."
    ],
    "choices": [
      {
        "point": "Los godlinga Sarah",
        "context": "Sarah żywi się energią śniącego dziecka, ale jednocześnie pomaga Corinne. Geralt może pozwolić jej zostać przy Corinne albo ją przepędzić.",
        "options": [
          {
            "label": "Pozwolić Sarah zostać z Corinne",
            "outcome": "Godling i wróżka zostają przyjaciółkami/towarzyszkami - Corinne zyskuje silniejsze wizje, a Sarah bezpieczny dom."
          },
          {
            "label": "Wypędzić Sarah",
            "outcome": "Sarah trafia na Łysą Górę, gdzie zaprzyjaźnia się z Johnnym (błotnikiem znanym z questów 'Bloody Baron'), stając się jego towarzyszką - również pozytywne, lecz inne zakończenie dla obu postaci."
          }
        ]
      }
    ],
    "consequences": "Zadanie nie wpływa na główną fabułę, ale jest przykładem 'miękkich' wyborów bez jednoznacznie złej opcji - obie decyzje kończą się dobrze, różnią się tylko tym, gdzie i z kim godling spędzi dalsze 'życie'."
  },
  {
    "id": "dla-dobra-nauki",
    "title": "Dla dobra nauki (For the Advancement of Learning)",
    "type": "side",
    "dlc": "base",
    "chapter": "Velen",
    "order": 4,
    "summary": "Geralt poznaje czarodziejkę Keirę Metz, ukrywającą się na Wyspie Fyke przed prześladowaniami. Seria zadań pobocznych z Keirą (m.in. pomoc w eksperymentach i uwolnienie/pojmanie potworów) prowadzi do kluczowej decyzji o jej dalszym losie - i o tym, czy przeżyje bitwę o Kaer Morhen.",
    "walkthrough": [
      "Poznaj Keirę na Wyspie Fyke i wykonaj dla niej zadania poboczne (m.in. zbadanie tajemnic wyspy, pomoc z gargulcami).",
      "Zdecyduj, czy ostrzec ją przed łowcami czarownic i zaproponować bezpieczne schronienie.",
      "W zależności od wcześniejszych wyborów, Keira zaproponuje eskortę do Kaer Morhen albo sama zdecyduje się szukać ochrony u Radowida."
    ],
    "choices": [
      {
        "point": "Los Keiry Metz",
        "context": "Po serii wspólnych zadań Geralt decyduje (poprzez dialogi i działania), co stanie się z czarodziejką: może zaprosić ją do Kaer Morhen, zostawić własnemu losowi (trafi do Radowida) albo, w skrajnym przypadku wrogiego nastawienia, zabić ją osobiście.",
        "options": [
          {
            "label": "Zaprosić Keirę do Kaer Morhen",
            "outcome": "Keira dołącza do obrony twierdzy w bitwie z Dzikim Gonem, aktywnie pomagając (może uratować Lamberta). Otwiera też możliwość romansu z Lambertem."
          },
          {
            "label": "Zostawić ją / nie dokończyć wątku",
            "outcome": "Keira trafia w ręce ludzi Radowida - zostaje schwytana i wbita na pal. Odblokowuje to poboczny quest 'Ostatnia przysługa', w którym Geralt może dokonać aktu litości."
          },
          {
            "label": "Zabić Keirę osobiście",
            "outcome": "Najbardziej brutalne zakończenie wątku - Keira ginie z rąk Geralta, a obie późniejsze możliwości (Kaer Morhen, Radowid) zostają zamknięte."
          }
        ]
      }
    ],
    "consequences": "Decyzja wpływa na skład obrońców Kaer Morhen w bitwie z Dzikim Gonem oraz na dostępność wątku romansowego z Lambertem. Wątek Keiry łączy się też z questem 'Po omacku', w którym pomaga tropić Dziki Gon."
  },
  {
    "id": "po-omacku",
    "title": "Po omacku (Wandering in the Dark)",
    "type": "side",
    "dlc": "base",
    "chapter": "Velen",
    "order": 5,
    "summary": "Geralt i Keira Metz przeszukują elfie ruiny pod Wyspą Fyke, tropiąc Dziki Gon i jego generała Nithrala. To właśnie tu odkrywają, że za polowaniem na Ciri stoją także Wiedźmy z Bagien - co otwiera drogę do 'Pań Lasu'.",
    "walkthrough": [
      "Przeszukaj podziemne ruiny razem z Keirą, korzystając z portali czasoprzestrzennych.",
      "Przekonaj Keirę do kontynuowania pościgu za Dzikim Gonem, gdy zwątpi po ataku szczurów.",
      "Zamknij trzy zamarznięte portale, pomagając Keirze odzyskać moc.",
      "Stocz finałową walkę z Nithralem, generałem Dzikiego Gonu."
    ],
    "choices": [
      {
        "point": "Zbliżenie z Keirą",
        "context": "Podczas zamykania portali Geralt może odpowiadać na uwagi Keiry w sposób flirciarski lub obojętny.",
        "options": [
          {
            "label": "Odpowiedzi flirciarskie (np. \"Tylko mi tu nie zemdlej\")",
            "outcome": "Zwiększa poziom zażyłości/romansu z Keirą, co ma znaczenie dla późniejszych wątków (w tym ewentualnego romansu z Lambertem, jeśli Geralt następnie skieruje ją w tę stronę)."
          },
          {
            "label": "Odpowiedzi rzeczowe/obojętne",
            "outcome": "Relacja pozostaje czysto zawodowa, bez rozwoju wątku uczuciowego."
          }
        ]
      }
    ],
    "consequences": "Zadanie jest kluczowe fabularnie - to tu pada trop na Wiedźmy z Bagien jako faktycznych 'łowców' Ciri, co otwiera 'Panie Lasu'. Losy Keiry z tego questu przekładają się też na jej dalsze zaangażowanie (patrz: 'Dla dobra nauki')."
  },
  {
    "id": "panie-lasu",
    "title": "Panie Lasu (Ladies of the Wood)",
    "type": "side",
    "dlc": "base",
    "chapter": "Velen",
    "order": 6,
    "summary": "Kluczowe zadanie wątku Krwawego Barona - Geralt dociera do sanktuarium Wiedźm z Bagien (Cioteczek), by wypytać je o Ciri. Po drodze musi zdobyć zaufanie osieroconych dzieci z Podgajców, uwolnić głos Johnny'emu i - najważniejsze - rozwiązać sprawę uwięzionego ducha na Szepczącym Wzgórzu (patrz osobne zadanie), zanim spotka się z Cioteczkami twarzą w twarz.",
    "walkthrough": [
      "Zdobądź zaufanie osieroconych dzieci w Podgajcach (poprzez zabawę lub słodycze), by uzyskać dostęp do Traвika.",
      "Odzyskaj magiczną butelkę Johnny'ego, by odzyskał mowę i wskazał drogę do sanktuarium.",
      "Rozwiąż zadanie 'Szepczące wzgórze' u starosty Podgajców (patrz osobny wpis) - jego wynik wpływa na przyjęcie przez Cioteczki.",
      "Stań przed Cioteczkami w sanktuarium na bagnach i wypytaj je o los Ciri."
    ],
    "choices": [
      {
        "point": "Relacja z Cioteczkami",
        "context": "Sposób prowadzenia śledztwa (w tym wynik 'Szepczącego wzgórza') wpływa na to, jak wiele Cioteczki zdradzą Geraltowi i jak bardzo są mu przychylne.",
        "options": [
          {
            "label": "Rozwiązać wcześniej sprawę ducha z Szepczącego Wzgórza",
            "outcome": "Cioteczki są bardziej rozmowne, a Geralt dowiaduje się więcej o planach oddania Ciri generałowi Dzikiego Gonu oraz o tym, że 'Babcia' to w rzeczywistości Anna Strenger, żona Barona."
          },
          {
            "label": "Zignorować Szepczące Wzgórze",
            "outcome": "Rozmowa z Cioteczkami przebiega z lukami informacyjnymi, a questy mogą się rozjechać czasowo (element uznawany za błąd/nieoptymalną ścieżkę w wielu poradnikach)."
          }
        ]
      }
    ],
    "consequences": "To zadanie wiąże wątek Barona z wątkiem głównym (poszukiwania Ciri) - ujawnia, że Cioteczki to potężne, złowrogie Wiedźmy planujące wydać Ciri Dzikiemu Gonowi, oraz że 'Babcia' to zaklęta Anna, żona Barona."
  },
  {
    "id": "szepczace-wzgorze",
    "title": "Szepczące wzgórze (The Whispering Hillock)",
    "type": "side",
    "dlc": "base",
    "chapter": "Velen",
    "order": 7,
    "summary": "Jedno z najważniejszych zadań pobocznych w grze. Starosta Podgajców prosi Geralta o zbadanie klątwy na Szepczącym Wzgórzu - w rzeczywistości to uwięziony w Prastarym Dębie duch, przetrzymywany tam przez Cioteczki, by chronić wioskę. Sposób rozwiązania sprawy decyduje o losie osieroconych dzieci, wioski Podgajce i - pośrednio - żony Barona, Anny.",
    "walkthrough": [
      "Zbadaj Szepczące Wzgórze i pokonaj strzegącego wejścia wilkołaka.",
      "Znajdź szczątki ducha (kości przy nagrobku), pióro kruka i czarną klacz - trzy żądania uwięzionego ducha.",
      "Porozmawiaj ze starostą Podgajców, by poznać pełny kontekst związku między duchem a bezpieczeństwem wioski.",
      "Podejmij ostateczną decyzję: zabić ducha albo spełnić jego żądania i uwolnić go."
    ],
    "choices": [
      {
        "point": "Zabić czy uwolnić uwięzionego ducha",
        "context": "Duch trzymany jest w drzewie jako 'zastaw' chroniący Podgajce przed atakami w zamian za regularne oddawanie sierot Cioteczkom. Jego uwolnienie oznacza zemstę na wiosce, ale ratuje dzieci przed dalszymi porwaniami; jego zabicie chroni wioskę, lecz utrwala układ z Cioteczkami.",
        "options": [
          {
            "label": "Zabić ducha",
            "outcome": "Podgajce pozostają fizycznie bezpieczne, ale osierocone dzieci nadal będą oddawane Cioteczkom jako 'zapłata' - ich los pozostaje tragiczny."
          },
          {
            "label": "Uwolnić ducha PRZED rozmową ze starostą o dzieciach",
            "outcome": "Duch (będący też sercem klątwy powiązanej z Anną) rusza z zemstą na wioskę, część zabudowań zostaje zniszczona, ale dzieci udaje się ocalić, a Anna, żona Barona, nie zostaje dodatkowo przeklęta."
          },
          {
            "label": "Uwolnić ducha PO rozmowie ze starostą (z pełną wiedzą o losie dzieci)",
            "outcome": "Dzieci zostają uratowane, ale wioska ponosi większe straty, a Anna - w zależności od wersji przebiegu cytowanej w poradnikach - zostaje dodatkowo dotknięta klątwą szaleństwa, co komplikuje jej dalszy los w 'Powrocie na Krzywuchowe Moczary'."
          }
        ]
      }
    ],
    "consequences": "To zadanie jest bezpośrednio powiązane z losem Barona i jego rodziny - stan psychiczny i fizyczny Anny w kolejnym zadaniu ('Powrót na Krzywuchowe Moczary') oraz ostateczne zakończenie wątku Barona (samobójstwo lub odejście z rodziną) zależą częściowo od decyzji podjętych tutaj. Społeczność graczy od lat dyskutuje o dokładnych warunkach 'najlepszego' zakończenia - większość źródeł zgadza się, że nie ma tu opcji w pełni bezkosztowej."
  },
  {
    "id": "powrot-na-mokradla",
    "title": "Powrót na Krzywuchowe Moczary (Return to Crookback Bog)",
    "type": "side",
    "dlc": "base",
    "chapter": "Velen",
    "order": 8,
    "summary": "Finałowe zadanie wątku Krwawego Barona. Geralt wraca na bagna, by spróbować zdjąć klątwę Cioteczek z Anny, żony Barona, zamienionej w jedną z Wiedźm. Musi wybrać jedną z czterech identycznych lalek, by ustalić, która z nich jest naprawdę Anną - błędny wybór ma tragiczne skutki.",
    "walkthrough": [
      "Odnajdź Barona i Tamarę w sanktuarium Cioteczek i przygotuj się do rytuału odwrócenia klątwy.",
      "Zbadaj wskazówki (m.in. wspomnienia, przedmioty osobiste Anny) rozsiane po wcześniejszych zadaniach, by rozpoznać, która lalka jest Anną.",
      "Wybierz jedną z czterech lalek podczas rytuału.",
      "Zaobserwuj skutki wyboru i towarzysz Baronowi w ostatniej rozmowie z żoną."
    ],
    "choices": [
      {
        "point": "Która lalka jest Anną",
        "context": "Rytuał wymaga wskazania właściwej z czterech identycznych lalek. Tylko jedna (lalka z fioletowym omanem/ślazem - 'violet hollyhock') pozwala poprawnie zdjąć klątwę.",
        "options": [
          {
            "label": "Wybrać właściwą lalkę (z fioletowym kwiatem ślazu)",
            "outcome": "Klątwa zostaje zdjęta poprawnie - Anna odzyskuje częściowo świadomość i może pożegnać się z rodziną jako człowiek, choć i tak wkrótce umiera z powodu wyniszczenia organizmu przez czary Cioteczek."
          },
          {
            "label": "Wybrać złą lalkę",
            "outcome": "Anna zostaje spalona żywcem podczas nieudanego rytuału - śmierć jest natychmiastowa i przerażająca, a Baron obwinia się jeszcze bardziej."
          }
        ]
      },
      {
        "point": "Rozmowa z Baronem po śmierci Anny",
        "context": "Niezależnie od wariantu rytuału, Anna nie przeżywa - różni się tylko sposób jej śmierci. Baron reaguje na stratę, a gracz obserwuje jego rozpad psychiczny.",
        "options": [
          {
            "label": "—",
            "outcome": "W zależności od wcześniejszych wyborów w 'Szepczącym wzgórzu' i stanu relacji rodzinnych, Baron albo wyrusza z Tamarą do Novigradu (i tam ostatecznie wiesza się z rozpaczy, co gracz odkrywa później w mieście), albo odbiera sobie życie od razu na bagnach."
          }
        ]
      }
    ],
    "consequences": "To jedno z najbardziej przygnębiających zakończeń w grze - w praktyce każda ścieżka wątku Barona kończy się tragicznie: Anna umiera tak czy inaczej, a sam Filip Strenger (Baron) w większości wariantów popełnia samobójstwo. Jedyne, co realnie różnicują wybory gracza, to sposób śmierci Anny i to, czy Tamara zdąży się z nim pogodzić przed jego śmiercią."
  },
  {
    "id": "dzikosc-serca",
    "title": "Dzikość serca (Wild at Heart)",
    "type": "side",
    "dlc": "base",
    "chapter": "Velen",
    "order": 9,
    "summary": "Pozornie prosty quest o zaginionej kobiecie przeradza się w mroczny dramat: myśliwy Niellen, który poprosił Geralta o odnalezienie żony Hanny, sam okazuje się wilkołakiem, który zabił ją podczas przemiany. Jego szwagierka Margrit, zakochana w Niellenie, celowo doprowadziła do tragedii, pokazując Hannie jego bestialską naturę.",
    "walkthrough": [
      "Porozmawiaj z Niellenem i zbadaj poszlaki dotyczące zaginięcia Hanny.",
      "Zdecyduj, czy przyjąć łapówkę od Margrit w zamian za zatajenie prawdy, czy kontynuować śledztwo.",
      "Skonfrontuj się z Niellenem w jego wilkołaczej postaci i poznaj pełną prawdę o tragedii.",
      "W finałowej, czasowej scenie zdecyduj, czy pozwolić Niellenowi zabić Margrit w akcie zemsty, czy interweniować w jej obronie."
    ],
    "choices": [
      {
        "point": "Ujawnienie prawdy o Margrit",
        "context": "Margrit oferuje Geraltowi pieniądze za zatajenie swojej roli w śmierci Hanny.",
        "options": [
          {
            "label": "Przyjąć łapówkę i zataić prawdę",
            "outcome": "Niellen nie poznaje pełnych okoliczności, Margrit unika bezpośredniej konfrontacji z jego gniewem na miejscu."
          },
          {
            "label": "Odmówić i ujawnić prawdę",
            "outcome": "Prowadzi do finałowej konfrontacji, w której Niellen poznaje zdradę Margrit."
          }
        ]
      },
      {
        "point": "Interwencja w finałowej scenie",
        "context": "Rozwścieczony prawdą Niellen (w wilkołaczej postaci) chce zabić Margrit na oczach Geralta.",
        "options": [
          {
            "label": "Pozwolić Niellenowi zabić Margrit",
            "outcome": "Margrit ginie z rąk wilkołaka - swoista 'sprawiedliwość' za jej intrygę, ale kosztem życia ludzkiego."
          },
          {
            "label": "Zabić lub powstrzymać Niellena, ratując Margrit",
            "outcome": "Margrit przeżywa, lecz Niellen (jeśli zostanie zabity) traci życie z ręki Geralta, mimo że sam był ofiarą klątwy."
          }
        ]
      }
    ],
    "consequences": "Zadanie nie wpływa na główną fabułę, ale jest jednym z najbardziej cenionych przez fanów przykładów moralnie niejednoznacznego dramatu pobocznego - każda opcja kończy się czyjąś śmiercią i żadna nie jest jednoznacznie 'dobra'."
  },
  {
    "id": "ostatnia-przysluga",
    "title": "Ostatnia przysługa (A Final Kindness)",
    "type": "side",
    "dlc": "base",
    "chapter": "Velen",
    "order": 10,
    "summary": "Epilog wątku Keiry Metz, dostępny wyłącznie jeśli gracz nie zdołał ochronić czarodziejki i trafiła ona w ręce ludzi Radowida. Geralt odnajduje jej ciało wbite na pal przy trakcie i może oddać jej ostatni hołd.",
    "walkthrough": [
      "Odnajdź miejsce kaźni Keiry przy jednym z traktów w Novigradzie/Velen.",
      "Zbadaj miejsce zmysłami wiedźmińskimi.",
      "Zdejmij ciało Keiry z pala i pochowaj je (opcjonalnie z odpowiednim przedmiotem osobistym)."
    ],
    "choices": [
      {
        "point": "Akt ostatniej litości",
        "context": "Quest jest w praktyce liniowy, lecz stanowi bezpośrednią konsekwencję wcześniejszych decyzji z 'Dla dobra nauki' - to swoisty rachunek za brak ochrony Keiry.",
        "options": [
          {
            "label": "Zdjąć ciało i pochować Keirę",
            "outcome": "Geralt oddaje zmarłej godny pochówek - czysto symboliczne zamknięcie wątku, bez dalszych trwałych efektów mechanicznych, ale ważne narracyjnie."
          }
        ]
      }
    ],
    "consequences": "Quest jest namacalnym dowodem konsekwencji zaniedbania wątku Keiry Metz we wcześniejszych zadaniach - podkreśla, że w Wiedźminie 3 bierność też jest wyborem."
  },
  {
    "id": "teraz-albo-nigdy",
    "title": "Teraz albo nigdy (Now or Never)",
    "type": "side",
    "dlc": "base",
    "chapter": "Novigrad",
    "order": 1,
    "summary": "Kulminacja wątku prześladowanych magów w Novigradzie - Geralt pomaga Triss przeprowadzić ostatnią grupę czarodziejów przez kanały do portu i wsadzić ich na statek do Kovir, z dala od łowców czarownic Radowida. Zadanie zawiera też kluczową scenę romansową z Triss.",
    "walkthrough": [
      "Spotkaj się z Triss i zaplanuj trasę ewakuacji przez novigradzkie kanały.",
      "Oczyść kanały z potworów i przeprowadź magów do portu, unikając patroli.",
      "Zdecyduj, czy zaryzykować ratowanie dwójki zaginionych magów (Bertholda i Anissy) kosztem opóźnienia.",
      "Na nabrzeżu, w finałowej scenie, zdecyduj o dalszych losach relacji z Triss."
    ],
    "choices": [
      {
        "point": "Ratować zaginionych magów czy trzymać się planu",
        "context": "Dwoje magów utknęło w mieście - ich ratowanie oznacza ryzyko dla całej grupy i opóźnienie.",
        "options": [
          {
            "label": "Spróbować ich uratować",
            "outcome": "Grupa dociera do portu później, co kosztuje życie karczmarza Oliviera, osłaniającego ucieczkę - realna, tragiczna cena za dodatkowe ryzyko."
          },
          {
            "label": "Trzymać się pierwotnego planu",
            "outcome": "Ewakuacja przebiega szybciej i bezpieczniej dla głównej grupy, ale dwójka zaginionych magów zostaje z dużym prawdopodobieństwem schwytana lub zabita przez łowców czarownic."
          }
        ]
      },
      {
        "point": "Wyznanie miłości Triss",
        "context": "Na przystani, w chwili pożegnania, Triss czeka na słowa Geralta, które przesądzą o dalszych losach ich relacji.",
        "options": [
          {
            "label": "Wyznać miłość Triss",
            "outcome": "Triss zostaje w Novigradzie (nie odpływa do Kovir) i romans z nią zostaje przypieczętowany. Wyklucza to jednocześnie romans z Yennefer - jeśli gracz wcześniej lub później spróbuje związać się także z Yennefer, konsekwencją jest utrata obu kobiet."
          },
          {
            "label": "Pożegnać się przyjaźnie / nie wyznawać uczuć",
            "outcome": "Triss odpływa do Kovir z resztą magów, a wątek romansowy z nią zostaje zamknięty (lub odroczony do ewentualnego dalszego spotkania w innej grze/rozszerzeniu fabuły), pozostawiając otwartą drogę do związku z Yennefer."
          }
        ]
      }
    ],
    "consequences": "To jeden z dwóch kluczowych 'punktów bez odwrotu' romansu (obok 'Ostatniego życzenia' z Yennefer) - decyduje, z którą czarodziejką Geralt związuje się na stałe. Wpływa też na epilog gry (czy Triss/Yennefer pojawia się u boku Geralta) oraz pośrednio na nastroje mieszczan Novigradu (nagonka na czarodziejów kontra nagonka na nieludzi, w zależności od tego, czy w ogóle podjęto się ewakuacji)."
  },
  {
    "id": "smiertelna-intryga",
    "title": "Śmiertelna intryga (A Deadly Plot)",
    "type": "side",
    "dlc": "base",
    "chapter": "Novigrad",
    "order": 2,
    "summary": "Dijkstra rekrutuje Geralta do rozpracowania spisku przeciw życiu Radowida. Zadanie prowadzi przez Novigrad i okoliczne trolle strzegące jaskini, do kontaktu Thalera - a jego pokojowe lub siłowe rozwiązanie warunkuje możliwość ukończenia późniejszej 'Racji Stanu'.",
    "walkthrough": [
      "Spotkaj się z Dijkstrą w Passiflorze i przyjmij zlecenie.",
      "Odnajdź żołnierza Gregora i zbadaj poszlaki przy wozie szewca.",
      "Dotrzyj do jaskini trolli strzegących zakładnika (Thalera) i zdecyduj o sposobie ich pokonania.",
      "Eskortuj Thalera z powrotem do jego wozu."
    ],
    "choices": [
      {
        "point": "Trolle strzegące jaskini",
        "context": "Trzy trolle można sprowokować do walki albo przekonać do ustąpienia rozmową.",
        "options": [
          {
            "label": "Zaatakować trolle",
            "outcome": "Trudna walka z trzema przeciwnikami jednocześnie, ale w nagrodę Geralt zdobywa cenne wątroby trolli jaskiniowych do craftingu."
          },
          {
            "label": "Rozwiązać sprawę pokojowo (dialog)",
            "outcome": "Trolle nie atakują - jeśli gracz wróci później w to miejsce, pomogą mu nawet w walce z nekkerami. Bardziej opłacalne fabularnie i przyjazne dla wizerunku 'dobrego' Geralta."
          }
        ]
      }
    ],
    "consequences": "Zadanie trzeba ukończyć przed rozpoczęciem 'Wyspy Mgieł' - w przeciwnym razie zadanie 'przepada', co uniemożliwia odblokowanie kluczowego, politycznego questu 'Racja Stanu'. To pokazuje, jak nieoczywiste, czasowe warunki potrafią decydować o dostępności największych wyborów w grze."
  },
  {
    "id": "najbardziej-poszukiwany-w-redanii",
    "title": "Najbardziej Poszukiwany w Redanii (Redania's Most Wanted)",
    "type": "side",
    "dlc": "base",
    "chapter": "Novigrad",
    "order": 3,
    "summary": "Geralt infiltruje kryjówkę Philippy Eilhart, poszukiwanej czarodziejki, i odnajduje magiczny kryształ zawierający dowody jej planów odzyskania wzroku i wskrzeszenia Loży Czarodziejek. To, komu przekaże kryształ, wpływa na relacje z Radowidem, łowcami czarownic i (opcjonalnie) z Triss/Yennefer.",
    "walkthrough": [
      "Przedostań się przez kryjówkę Philippy, aktywując portale energetycznymi ogniwami.",
      "Pokonaj strażników i odnajdź oszlifowany kryształ w komnatach Philippy.",
      "Zdecyduj, komu przekazać (lub czy w ogóle przekazać) znaleziony kryształ."
    ],
    "choices": [
      {
        "point": "Komu oddać kryształ Philippy",
        "context": "Kryształ zawiera cenne informacje wywiadowcze. Można go oddać łowcom czarownic przy wejściu, samemu królowi Radowidowi, pokazać go Triss/Yennefer (jeśli dostępne) albo zatrzymać.",
        "options": [
          {
            "label": "Oddać łowcom czarownic przy wyjściu",
            "outcome": "Geralt dostaje symboliczną nagrodę (niewielkie XP), ale Radowid nie uwierzy potem, że kryształ w ogóle się znalazł - traci się premię pieniężną od króla."
          },
          {
            "label": "Zanieść bezpośrednio Radowidowi",
            "outcome": "Król wypłaca 135 koron, choć jest wyraźnie niezadowolony z treści kryształu (informacje obciążające jego politykę)."
          },
          {
            "label": "Pokazać kryształ Triss lub Yennefer (jeśli towarzyszy Geraltowi)",
            "outcome": "Czarodziejka odczytuje pełną treść nagrania - ujawnia to plany Philippy dot. odzyskania wzroku i reaktywacji Loży Czarodziejek. Gracz może potem i tak zdecydować, komu fizycznie przekazać kryształ."
          },
          {
            "label": "Zatrzymać kryształ dla siebie / odmówić oddania łowcom",
            "outcome": "Dochodzi do walki z łowcami czarownic przy wyjściu z kryjówki; kryształ staje się bezużytecznym przedmiotem questowym, chyba że zostanie komuś przekazany później."
          }
        ]
      }
    ],
    "consequences": "Misja jest jednym z warunków (obok 'Śmiertelnej intrygi') niezbędnych do odblokowania 'Racji Stanu' - liczy się samo zdobycie kryształu z komnat Philippy, niezależnie od tego, komu zostanie ostatecznie przekazany."
  },
  {
    "id": "oczywista-oczywistosc",
    "title": "Oczywista oczywistość (Blindingly Obvious)",
    "type": "side",
    "dlc": "base",
    "chapter": "Novigrad",
    "order": 4,
    "summary": "Geralt przekazuje Dijkstrze informacje wywiadowcze dotyczące cesarza Emhyra, zebrane wcześniej w toku fabuły. To, jak rozegra tę rozmowę, decyduje, czy w ogóle dojdzie do finałowego questu politycznego 'Racja Stanu', czy Dijkstra i Geralt staną naprzeciw siebie w walce.",
    "walkthrough": [
      "Spotkaj się z Dijkstrą i zdecyduj, czy podzielić się z nim informacjami o Emhyrze/Nilfgaardzie.",
      "Obserwuj reakcję Dijkstry na ujawnione fakty."
    ],
    "choices": [
      {
        "point": "Ujawnić informacje o cesarzu Dijkstrze",
        "context": "Dijkstra domaga się od Geralta wiedzy zdobytej podczas wcześniejszych zadań fabularnych związanych z Emhyrem.",
        "options": [
          {
            "label": "Podzielić się informacjami",
            "outcome": "Odblokowuje kluczowy, finałowy quest polityczny 'Racja Stanu' - Dijkstra zyskuje przewagę w rozgrywce o władzę w Redanii."
          },
          {
            "label": "Odmówić / zaatakować Dijkstrę",
            "outcome": "Dochodzi do starcia z Dijkstrą i jego ochroną - w tym wariancie wątek polityczny zamyka się na korzyść Radowida, który domyślnie utrzymuje/wzmacnia władzę."
          }
        ]
      }
    ],
    "consequences": "Zadanie jest bramką do 'Racji Stanu' - jego przebieg przesądza, czy gracz w ogóle dostanie szansę wpłynąć na finałowy układ sił w Redanii, czy sprawy 'rozstrzygną się same' na korzyść Radowida."
  },
  {
    "id": "ostatnie-zyczenie",
    "title": "Ostatnie życzenie (The Last Wish)",
    "type": "side",
    "dlc": "base",
    "chapter": "Skellige",
    "order": 1,
    "summary": "Kluczowy quest romansowy z Yennefer - poszukiwanie i pokonanie dżina, który dawno temu związał losy Geralta i czarodziejki. Po walce Yennefer prosi dżina o zerwanie więzi przeznaczenia, po czym w napięciu czeka na reakcję Geralta - to moment decydujący o dalszych losach ich związku.",
    "walkthrough": [
      "Zbadaj trzy wraki statków w poszukiwaniu połówek pieczęci powiązanej z dżinem.",
      "Udaj się z Yennefer w góry Ard Skellig, do drugiej części wraku, i odnajdź ciało zaginionego maga.",
      "Stocz walkę z uwolnionym dżinem.",
      "Wysłuchaj prośby Yennefer skierowanej do dżina o zerwanie magicznej więzi losu i zareaguj na jej słowa."
    ],
    "choices": [
      {
        "point": "Wyznanie uczuć wobec Yennefer",
        "context": "Po pokonaniu dżina i zerwaniu więzi przeznaczenia Yennefer, w rzadkim momencie bezbronności, czeka na szczerą odpowiedź Geralta na pytanie o jego uczucia.",
        "options": [
          {
            "label": "Wyznać miłość / szczere uczucia",
            "outcome": "Rozpoczyna się (lub zostaje przypieczętowany) romans z Yennefer - jest to jeden z dwóch kluczowych 'punktów bez odwrotu' obok 'Teraz albo nigdy' z Triss. Próba związania się później także z Triss prowadzi do utraty obu kobiet."
          },
          {
            "label": "Odrzucić ją / zbagatelizować temat",
            "outcome": "Relacja z Yennefer pozostaje przyjacielska/zawodowa, bez oficjalnego związku - otwiera to (lub pozostawia otwartą) drogę do romansu z Triss."
          }
        ]
      }
    ],
    "consequences": "Wraz z 'Teraz albo nigdy' to najważniejszy wybór romansowy gry, wpływający na epilog (kto towarzyszy Geraltowi) oraz na treść wielu scen w Krwi i Winie (m.in. wątek 'Kwestii życia i śmierci' i obecności czarodziejki w Beauclair)."
  },
  {
    "id": "wybraniec-bogow",
    "title": "Wybraniec bogów (Possession)",
    "type": "side",
    "dlc": "base",
    "chapter": "Skellige",
    "order": 2,
    "summary": "Cerys an Craite prosi Geralta o pomoc w uwolnieniu się od Hym - demona żywiącego się poczuciem winy, które ją prześladuje po śmierci ojca. Ukończenie tego zadania jest warunkiem koniecznym, by w 'Królewskim gambicie' móc poprzeć kandydaturę Cerys do tronu Skellige.",
    "walkthrough": [
      "Porozmawiaj z Cerys i zbadaj źródło jej dręczącego poczucia winy.",
      "Wytropcie razem Hyma po śladach, korzystając ze specjalnego eliksiru pozwalającego go dostrzec.",
      "Pokonaj Hyma w walce."
    ],
    "choices": [
      {
        "point": "Zaangażowanie w sprawę Cerys",
        "context": "To zadanie samo w sobie ma niewielką liczbę wewnętrznych rozgałęzień, ale jego ukończenie (lub pominięcie) jest bramką do dalszych, znacznie ważniejszych wyborów.",
        "options": [
          {
            "label": "Ukończyć questa i pomóc Cerys",
            "outcome": "Otwiera możliwość poparcia Cerys jako kandydatki do tronu w 'Królewskim gambicie'."
          },
          {
            "label": "Pominąć questa",
            "outcome": "Cerys nie może zostać poparta w sukcesji - jeśli równolegle pominięty zostanie też 'Władca Undvik' (Hjalmar), tron obejmie z automatu Svanrige."
          }
        ]
      }
    ],
    "consequences": "Zadanie jest formalnym warunkiem wstępnym dla poparcia Cerys w wyścigu o tron Skellige w 'Królewskim gambicie'."
  },
  {
    "id": "wladca-undvik",
    "title": "Władca Undvik (The Lord of Undvik)",
    "type": "side",
    "dlc": "base",
    "chapter": "Skellige",
    "order": 3,
    "summary": "Hjalmar an Craite chce udowodnić, że jest godny tronu, wyprawiając się na opanowaną przez lodowych olbrzymów wyspę Undvik, by odbić porwanych przez nie mieszkańców. Ukończenie tej wyprawy jest warunkiem, by w 'Królewskim gambicie' móc poprzeć jego kandydaturę.",
    "walkthrough": [
      "Dołącz do drużyny Hjalmara i wypłyń na Undvik.",
      "Przeszukaj wyspę, pokonując Ice Giants i inne zagrożenia, w poszukiwaniu uprowadzonych osadników.",
      "Zdecyduj o sposobie poradzenia sobie z lodowym olbrzymem strzegącym więźniów (walka wręcz lub z użyciem podstępu/otoczenia)."
    ],
    "choices": [
      {
        "point": "Zaangażowanie w wyprawę Hjalmara",
        "context": "Podobnie jak w przypadku Cerys, samo zadanie ma niewiele wewnętrznych rozgałęzień, lecz jego ukończenie otwiera drogę do poparcia Hjalmara w sukcesji.",
        "options": [
          {
            "label": "Ukończyć wyprawę i pomóc Hjalmarowi",
            "outcome": "Otwiera możliwość poparcia Hjalmara jako kandydata do tronu w 'Królewskim gambicie'."
          },
          {
            "label": "Pominąć questa",
            "outcome": "Hjalmar nie może zostać poparty w sukcesji - jeśli równolegle pominięty zostanie też 'Wybraniec bogów' (Cerys), tron obejmie z automatu Svanrige."
          }
        ]
      }
    ],
    "consequences": "Zadanie jest formalnym warunkiem wstępnym dla poparcia Hjalmara w wyścigu o tron Skellige w 'Królewskim gambicie'."
  },
  {
    "id": "krolewski-gambit",
    "title": "Królewski gambit (King's Gambit)",
    "type": "side",
    "dlc": "base",
    "chapter": "Skellige",
    "order": 4,
    "summary": "Podczas zjazdu jarlów w Kaer Trolde, mającego wyłonić następcę tronu Skellige, dochodzi do krwawego zamachu - niedźwiedziopodobni wojownicy mordują niemal wszystkich zebranych. W chaosie po ataku Geralt musi opowiedzieć się po stronie Cerys (która chce zbadać sprawę) albo Hjalmara (który chce natychmiastowej zemsty) - albo nie zaangażować się wcale.",
    "walkthrough": [
      "Weź udział w zjeździe jarlów w Kaer Trolde i przeżyj atak niedźwiedziopodobnych wojowników.",
      "Wysłuchaj sprzecznych planów Cerys (śledztwo) i Hjalmara (natychmiastowy odwet).",
      "Opowiedz się po jednej ze stron (lub nie angażuj się w ogóle) i pomóż jej zrealizować plan."
    ],
    "choices": [
      {
        "point": "Poparcie kandydata na tron Skellige",
        "context": "Wybór jest dostępny tylko, jeśli wcześniej ukończono odpowiednie questy przygotowawcze ('Wybraniec bogów' dla Cerys, 'Władca Undvik' dla Hjalmara); bez nich domyślnie na tron trafia Svanrige.",
        "options": [
          {
            "label": "Poprzeć Cerys",
            "outcome": "Cerys demaskuje Birnę Bran jako faktyczną organizatorkę zamachu i zostaje królową. Jej rządy kładą kres tradycji najazdów łupieżczych na rzecz rozwoju rolnictwa i gospodarki - Skellige słabnie militarnie, ale zyskuje dobrobyt i stabilność."
          },
          {
            "label": "Poprzeć Hjalmara",
            "outcome": "Hjalmar zostaje królem i kontynuuje tradycję najazdów, głównie na ziemie Nilfgaardu, by utrzymać lojalność klanów. Jego porywcze rządy określane są jakoktoś, kto 'topi lud we krwi' - kraj pozostaje wojowniczy, ale niestabilny; w praktyce sprawami wewnętrznymi i tak zajmuje się głównie Cerys u jego boku."
          },
          {
            "label": "Nie poprzeć żadnego z nich (lub pominąć questy przygotowawcze)",
            "outcome": "Tron obejmuje Svanrige Tuirseach - z pozoru marionetkowy władca sterowany przez matkę, lecz ostatecznie zrywa z jej wpływami i jednoczy klany przeciwko Nilfgaardowi, zapoczątkowując nową dynastię."
          }
        ]
      }
    ],
    "consequences": "To centralny wybór polityczny wątku Skellige, wpływający na epilog gry (opis dalszych losów wyspiarskiego królestwa), skład sił dostępnych przy obronie Kaer Morhen oraz atmosferę questu 'Koronacja'."
  },
  {
    "id": "koronacja",
    "title": "Koronacja (Coronation)",
    "type": "side",
    "dlc": "base",
    "chapter": "Skellige",
    "order": 5,
    "summary": "Krótki epilog 'Królewskiego gambitu' - w Gedyneith odbywa się ceremonia koronacyjna nowego władcy Skellige, kimkolwiek okazał się on być w wyniku wcześniejszego wyboru gracza. To także dogodna okazja, by zebrać u boku Geralta sojuszników na bitwę o Kaer Morhen.",
    "walkthrough": [
      "Udaj się do Gedyneith na zaproszenie Kraacha, by wziąć udział w ceremonii.",
      "Obejrzyj scenę koronacji nowego władcy (Cerys, Hjalmara lub Svanrige'a, zależnie od wcześniejszego wyboru).",
      "Wykorzystaj zgromadzenie ważnych postaci Skellige, by poprosić o pomoc w nadchodzącej bitwie o Kaer Morhen."
    ],
    "choices": [
      {
        "point": "Kto wstępuje na tron",
        "context": "Sam quest nie zawiera już nowej decyzji - jest bezpośrednią konsekwencją wyboru z 'Królewskiego gambitu'.",
        "options": [
          {
            "label": "—",
            "outcome": "Ceremonia i ton sceny różnią się w zależności od tego, kto zostaje ukoronowany, ale mechanicznie quest kończy się identycznie (osiągnięcie 'Kingmaker' i możliwość rekrutacji sojuszników)."
          }
        ]
      }
    ],
    "consequences": "Zamyka wątek sukcesji tronu Skellige i pozwala zwerbować m.in. Cerys, Hjalmara, Kraacha i Ermiona do obrony Kaer Morhen, niezależnie od tego, kto został władcą."
  }
];

const CHAPTER_ORDER = [
  "Prolog",
  "Akt I",
  "Velen",
  "Novigrad",
  "Akt II",
  "Skellige",
  "Kaer Morhen",
  "Akt III",
  "Zakończenie",
  "Serca z Kamienia",
  "Krew i Wino"
];
