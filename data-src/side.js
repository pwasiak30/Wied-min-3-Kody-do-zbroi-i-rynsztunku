const SIDE_QUESTS = [
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
if (typeof module !== "undefined") { module.exports = SIDE_QUESTS; }
