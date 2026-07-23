const BW_QUESTS = [
  {
    id: "poselstwo-z-krainy-wina",
    title: "Poselstwo z Krainy Wina",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 1,
    summary: "Geralt otrzymuje zlecenie na tajemniczą bestię grasującą w księstwie Toussaint. Dwaj rycerze, Palmerin de Launfal i Milton de Peyrac-Peyran, odnajdują go i w imieniu księżnej Anny Henrietty zapraszają (a właściwie eskortują) do słonecznej krainy wina. To zadanie otwiera całą fabułę dodatku Krew i Wino.",
    walkthrough: [
      "Znajdź ogłoszenie o kontrakcie na bestię z Toussaint (dostępne również na tablicach w Novigradzie, Oxenfurcie i Wielkim Morzu).",
      "Udaj się do Osady Kamieniarzy w Holopolu, by spotkać się z rycerzami Toussaint.",
      "Porozmawiaj z Palmerinem de Launfal i Miltonem de Peyrac-Peyranem.",
      "Zdecyduj, jak zachować się wobec bandytów napadających w trakcie rozmowy.",
      "Wysłuchaj wezwania od księżnej Anny Henrietty i wyrusz z rycerzami do Toussaint."
    ],
    choices: [
      {
        point: "Bandyci na trakcie",
        context: "W trakcie rozmowy z rycerzami dochodzi do napadu bandytów.",
        options: [
          { label: "Pomóż rycerzom stoczyć walkę", outcome: "Geralt wraz z Palmerinem i Miltonem pokonuje bandytów w krótkiej potyczce." },
          { label: "Odwiedź rycerzy od pościgu / pertraktacji", outcome: "Geralt przekonuje rycerzy, że wycięcie jednej bandy niczego nie zmieni, bo miejsce zbirów szybko zajmą inni - walki udaje się uniknąć." }
        ]
      }
    ],
    consequences: "Niezależnie od wyboru fabuła toczy się dalej tym samym torem - Geralt przyjmuje zlecenie i wyrusza do Toussaint, gdzie czeka na niego księżna Anna Henrietta."
  },
  {
    id: "bestia-z-toussaint",
    title: "Bestia z Toussaint",
    type: "main",
    dlc: "bw",
    dlc_full: "Krew i Wino",
    chapter: "Krew i Wino",
    order: 2,
    summary: "Po przybyciu do Beauclair Geralt zostaje wciągnięty w śledztwo w sprawie serii brutalnych morderstw przypisywanych tajemniczej Bestii. Pomaga rycerzom w kilku potyczkach z potworami, a jego dochodzenie prowadzi do odkrycia, że ofiary łączy coś więcej niż przypadek.",
    walkthrough: [
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
    choices: [
      {
        point: "Los szelmowca",
        context: "Podczas turnieju z uwięzi wyrywa się okaleczony, oswojony szelmowiec.",
        options: [
          { label: "Oszczędź szelmowca", outcome: "Zwierzę zostaje uspokojone i przeżywa; liczy się to jako \"Dowód współczucia\" wykorzystywany później w grze Sądu Kupidyna." },
          { label: "Zabij szelmowca", outcome: "Bestia ginie, a Geralt traci szansę na zdobycie \"Dowodu współczucia\"." }
        ]
      },
      {
        point: "Zagadka jednorożca",
        context: "Przy okazji gry dworskiej trzeba rozwiązać zagadkę dotyczącą rogu \"jednorożca\".",
        options: [
          { label: "Rozwiąż zagadkę samodzielnie", outcome: "Geralt zdobywa \"Dowód mądrości\"." },
          { label: "Użyj znaku Axii, by oszukać dworzan", outcome: "Dworzanie oskarżają Geralta o oszustwo, co może prowadzić do opcjonalnej walki." },
          { label: "Nie rozwiąż zagadki", outcome: "Za Geralta zagadkę rozwiązuje Anna Henrietta, a wiedźmin traci \"Dowód mądrości\"." }
        ]
      }
    ],
    consequences: "Geralt zostaje oficjalnym właścicielem winnicy Corvo Bianco, co otwiera wątek poboczny odbudowy posiadłości. Trop prowadzi go do Miltona, którego odnalezienie zapoczątkowuje kolejne zadanie."
  },
  {
    id: "na-tropie",
    title: "Na tropie...",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 3,
    summary: "Najkrótsze zadanie główne dodatku. Geralt wraz z Anną Henriettą odkrywa, że Milton padł ofiarą Bestii, po czym rusza w pościg za mordercą aż do opuszczonego magazynu, gdzie dochodzi do pierwszego starcia z tajemniczym przeciwnikiem.",
    walkthrough: [
      "Udaj się do szklarni razem z Anną Henriettą.",
      "Odkryj, że Milton już nie żyje.",
      "Ścigaj Bestię aż do pustego magazynu.",
      "Stocz walkę z Bestią.",
      "Bądź świadkiem interwencji Regisa, który przerywa pojedynek.",
      "Dowiedz się, że tajemniczą Bestią jest wyższy wampir imieniem Dettlaff.",
      "Porozmawiaj z przybyłymi rycerzami."
    ],
    choices: [],
    consequences: "Nawet przegrana walka z Bestią nie kończy się dla Geralta śmiercią - traci jedynie nagrodę za starcie. Kluczowe jest ujawnienie tożsamości przeciwnika: to Dettlaff van der Eretein, wyższy wampir i dawny znajomy Regisa, który wkrótce ponownie pojawi się u boku Geralta."
  },
  {
    id: "poglos",
    title: "Pogłos",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 4,
    summary: "Geralt spotyka się z Regisem - dawnym towarzyszem, który okazuje się wyższym wampirem - by wspólnie wytropić Dettlaffa. Aby przygotować miksturę namierzającą, potrzebują śliny wiedźmy-wichta, co prowadzi ich do opuszczonego domku myśliwskiego.",
    walkthrough: [
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
    choices: [
      {
        point: "Los wiedźmy-wichta",
        context: "Wicht okazuje się przeklętą kobietą imieniem Marlena. Jeśli Geralt zdobył wcześniej wystarczająco dużo wskazówek, może zdjąć z niej klątwę zamiast ją zabijać.",
        options: [
          { label: "Zaatakuj i zabij wichta", outcome: "Geralt zdobywa gruczoły śliny bezpośrednio z ciała stworzenia; los Marleny zostaje przypieczętowany." },
          { label: "Zdejmij klątwę (wymaga zebranych wcześniej wskazówek)", outcome: "Wicht odzyskuje ludzką postać jako Marlena, co odblokowuje dodatkowy dialog i wątek fabularny, a saliwę można pozyskać z kotła." }
        ]
      }
    ],
    consequences: "Regis oficjalnie dołącza do Geralta jako sojusznik w polowaniu na Dettlaffa. Zdobyta mikstura pozwala przygotować pułapkę namierzającą wyższego wampira, co otwiera drogę do kolejnych zadań śledczych."
  },
  {
    id: "leze-bestii",
    title: "Leże Bestii",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 5,
    summary: "Geralt i Regis szukają czyściciela butów, który miał kontakt z Dettlaffem, a trop prowadzi ich do opuszczonego sklepu z zabawkami służącego wampirowi za kryjówkę.",
    walkthrough: [
      "Odwiedź port w Beauclair między 8:00 a 20:00, by znaleźć czyściciela butów.",
      "Obroń chłopaka przed napastnikami w walce na pięści.",
      "Zapłać 500 orenów (albo wynegocjuj cenę lub użyj znaku Axii), by uzyskać informacje o miejscu pobytu Dettlaffa.",
      "Podążaj za Regisem do sklepu z zabawkami \"Koń na biegunach\".",
      "Wejdź na piętro i przeszukaj je wiedźmińskimi zmysłami.",
      "Obejrzyj twarz kobiety, pozytywkę oraz narzędzia na stole roboczym.",
      "Zbierz dwa kluczowe dokumenty: podejrzany list ukryty w dzbanie oraz listy leżące przy stole roboczym."
    ],
    choices: [
      {
        point: "Sposób zapłaty czyścicielowi butów",
        context: "Chłopak żąda 500 orenów za informacje o Dettlaffie.",
        options: [
          { label: "Zapłać pełną kwotę", outcome: "Liczy się to jako \"Dowód hojności\" przydatny w późniejszej grze Sądu Kupidyna." },
          { label: "Wynegocjuj niższą cenę lub użyj Axii", outcome: "Geralt oszczędza pieniądze, ale nie zdobywa \"Dowodu hojności\"." }
        ]
      }
    ],
    consequences: "Odnalezione dokumenty ujawniają, że Dettlaff działał na czyjeś zlecenie i szukał konkretnych osób - to pierwszy trop wskazujący, że za atakami stoi ktoś inny niż sam wampir."
  },
  {
    id: "wino-rzecz-swieta",
    title: "Wino rzecz święta",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 6,
    summary: "Anna Henrietta prosi Geralta o pomoc w zbadaniu podejrzanej przesyłki wina, która okazuje się elementem szantażu wymierzonego w kogoś związanego z sprawą Bestii. Śledztwo prowadzi z winnicy Castel Ravello aż po ruiny Fortu Astre.",
    walkthrough: [
      "Stawić się w pałacu w Beauclair na spotkanie z Anną Henriettą i Damienem de la Tour.",
      "Pokaż splamiony list ksiąskiemu sommelierowi, który rozpozna w nim rzadkie wino Sangreal z 1269 roku z winnicy Castel Ravello.",
      "Eskortuj księżną do winnicy (opcjonalnie: pokonaj pantery atakujące wóz po drodze).",
      "Przesłuchaj Fabricia, właściciela winnicy, który ujawnia sprzedaż wina cyntryjskiemu szlachcicowi.",
      "Zbadaj beczki w piwnicach, by znaleźć podrobione wino.",
      "Weź udział w zasadzce przy Forcie Astre na bandytów dostarczających kolejną beczkę.",
      "Spotkaj się z Damienem przy posterunku straży, by omówić dalsze kroki dotyczące \"Cyntryjczyka\"."
    ],
    choices: [
      {
        point: "Spotkanie z panterami",
        context: "W drodze do winnicy wóz zostaje zaatakowany przez pantery.",
        options: [
          { label: "Stocz walkę", outcome: "Geralt otrzymuje dodatkowe wynagrodzenie (ok. 450 sztuk złota)." },
          { label: "Unikaj starcia", outcome: "Fabuła toczy się dalej bez dodatkowej nagrody." }
        ]
      }
    ],
    consequences: "Śledztwo prowadzi do tożsamości \"Cyntryjczyka\" - tajemniczego szlachcica organizującego intrygę, co bezpośrednio otwiera kolejne zadanie."
  },
  {
    id: "szlachcic-z-cintry",
    title: "Szlachcic z Cintry",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 7,
    summary: "Geralt i Anna Henrietta biorą udział w ekskluzywnym przyjęciu, by namierzyć \"Cyntryjczyka\". Wieczór kończy się tragicznie wraz z odkryciem zamordowanej śpiewaczki, a trop dowodowy prowadzi w stronę zaskakującej prawdy o Bestii.",
    walkthrough: [
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
    choices: [
      {
        point: "Reakcja na wyjaśnienia dotyczące przemocy",
        context: "Po ujawnieniu prawdy Geralt musi zareagować na usprawiedliwienia.",
        options: [
          { label: "\"To żadne usprawiedliwienie\"", outcome: "Geralt zajmuje jednoznacznie krytyczne stanowisko." },
          { label: "\"Tak jak u ludzi\"", outcome: "Geralt przyjmuje bardziej wyrozumiałą, filozoficzną postawę." }
        ]
      }
    ],
    consequences: "Wybrana odpowiedź wpływa na ton kolejnej rozmowy, ale nie zmienia biegu fabuły - kolejnym krokiem staje się szturm na siedzibę porywacza."
  },
  {
    id: "szturm-na-dun-tynne",
    title: "Szturm na Dun Tynne",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 8,
    summary: "Geralt wraz z siłami książęcymi szturmuje zamek Dun Tynne, by odbić porwaną Syannę. To punkt bez odwrotu w fabule dodatku - okazuje się, że tajemnicza Syanna i banitka Rhena to ta sama osoba: zaginiona przed laty siostra Anny Henrietty.",
    walkthrough: [
      "Spotkaj się z kapitanem Damienem de la Tour przy młynie hrabiego de la Croix po północy.",
      "Przebij się przez dziedziniec zamkowy, eliminując fale strażników.",
      "Pokonaj Roderika, pana zamku, i jego ludzi.",
      "Przejdź przez drewnianą bramę i wyeliminuj łuczników na balkonie (opcjonalnie: przemknij obok Żelaznego Borga).",
      "Wejdź po schodach do komnat, gdzie Regis i Dettlaff dołączają jako sprzymierzeńcy i biorą na siebie większość walki.",
      "Dotrzyj do rezydencji, gdzie odsłania się prawda o Syannie."
    ],
    choices: [
      {
        point: "Los Roderika",
        context: "Po pokonaniu pana zamku Geralt może mu pomóc.",
        options: [
          { label: "Pomóż Roderikowi", outcome: "Zdobywa się \"Dowód współczucia\" wykorzystywany w późniejszej grze Sądu Kupidyna." },
          { label: "Zostaw go bez pomocy", outcome: "Geralt nie zdobywa dodatkowego \"Dowodu\", fabuła toczy się dalej normalnie." }
        ]
      }
    ],
    consequences: "Ujawnia się, że Syanna (Rhena) manipulowała Roderikiem i wysyłała Dettlaffa na kradzieże oraz podawała mu nazwiska ofiar. Rozwścieczony Dettlaff żąda spotkania z Syanną w ruinach Tesham Mutna w ciągu trzech dni, grożąc atakiem na Beauclair, a Anna Henrietta nakazuje Geraltowi zabić wampira przed upływem terminu - stawiając wiedźmina w sytuacji bez dobrego wyjścia."
  },
  {
    id: "dluga-noc",
    title: "Długa noc",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 9,
    summary: "Po nieudanej próbie odnalezienia Syanny rozwścieczony Dettlaff atakuje Beauclair. Geralt musi przedrzeć się przez opanowane przez wampiry miasto i dokonać kluczowego wyboru ścieżki śledztwa, który zdeterminuje dalszy przebieg fabuły aż po samo zakończenie dodatku.",
    walkthrough: [
      "Pokonaj bruksę atakującą przy pałacu, korzystając ze znaku Yrden i olejów przeciw wampirom.",
      "Skonsultuj się z Regisem i wybierz jedną z dwóch ścieżek śledztwa.",
      "Przedzieraj się przez ogarnięte walką miasto, tocząc starcia z różnymi rodzajami wampirów.",
      "Ścieżka A (Damien): odnajdź kapitana Damiena, dowiedz się, że Syanna przebywa w pałacowym pokoju zabaw.",
      "Ścieżka B (Oriana): odwiedź posiadłość Oriany, towarzysz jej w drodze do sierocińca (uruchamia zadanie \"Zew krwi\").",
      "Dotrzyj do pokoju zabaw i odczytaj dziennik oraz książkę \"Kraina Tysiąca Baśni\", by ostatecznie ustalić dalszy kierunek śledztwa."
    ],
    choices: [
      {
        point: "Wybór ścieżki śledztwa",
        context: "Regis proponuje Geraltowi dwie drogi dalszego postępowania: odnalezienie kapitana Damiena, który wie, gdzie ukrywa się Syanna, albo odwiedzenie Oriany, znajomej Dettlaffa mogącej naprowadzić na trop Nieznanego Starca.",
        options: [
          { label: "Ścieżka Damiena - szukaj Syanny", outcome: "Prowadzi do zadania \"Dawno, dawno temu...\" i szansy na odnalezienie oraz uratowanie Syanny w Krainie Tysiąca Baśni - to droga otwierająca możliwość najlepszego zakończenia." },
          { label: "Ścieżka Oriany - szukaj Nieznanego Starca", outcome: "Prowadzi przez zadania \"Zew krwi\" i \"Między światami\" do sojuszu z Nieznanym Starcem przeciw Dettlaffowi, bez ratowania Syanny - ta droga znacząco zbliża grę do najgorszego zakończenia, choć wciąż można później zmienić kurs i poszukać Syanny." }
        ]
      }
    ],
    consequences: "Wybór ścieżki śledztwa determinuje, czy Geralt w ogóle dotrze do Syanny przed finałową konfrontacją w Tesham Mutna, co ma bezpośredni wpływ na to, które z trzech zakończeń dodatku stanie się możliwe."
  },
  {
    id: "zew-krwi",
    title: "Zew krwi",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 10,
    summary: "Zadanie dostępne po wybraniu ścieżki Oriany w \"Długiej nocy\". Geralt bada masakrę w sierocińcu La Compassion i tropi odpowiedzialnego za nią alfa-garkaina, a na koniec konfrontuje się z samą Orianą w sprawie jej udziału w tragedii.",
    walkthrough: [
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
    choices: [
      {
        point: "Dalszy kierunek śledztwa",
        context: "Po konfrontacji z Orianą Geralt może w tym momencie zmienić plany.",
        options: [
          { label: "Poszukaj jednak Syanny", outcome: "Gracz porzuca trop Nieznanego Starca i przechodzi do zadania \"Dawno, dawno temu...\", zachowując szansę na uratowanie Syanny." },
          { label: "Kontynuuj trop Nieznanego Starca", outcome: "Fabuła prowadzi do zadania \"Między światami\" i sojuszu z potężnym wampirem przeciw Dettlaffowi." }
        ]
      }
    ],
    consequences: "Oriana ucieka, ale wątek pozostaje otwarty - \"wiedźmin i wampirzyca spotkają się jeszcze kiedyś\". Zdobyty magiczny klucz otwiera drogę do legowiska Nieznanego Starca."
  },
  {
    id: "miedzy-swiatami",
    title: "Między światami",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 11,
    summary: "Odblokowywane po wybraniu tropu Nieznanego Starca. Geralt, uzbrojony w magiczny klucz od Oriany, wyrusza do podwodnej jaskini na południe od Beauclair, by prosić potężnego, pradawnego wampira o pomoc przeciwko Dettlaffowi.",
    walkthrough: [
      "Dotrzyj do zapieczętowanych drzwi, gdzie czeka Regis, i otwórz je zdobytym kluczem.",
      "Przemierz jaskinię, wybierając górną lub zalaną trasę.",
      "Pokonaj fledera i zbierz rozrzucone części zbroi Hen Gaidth.",
      "Odzyskaj wyrzucony przez Starca ekwipunek.",
      "Zregeneruj zdrowie i przemierz komnatę o zmiennej grawitacji.",
      "Zdobądź różowy kamień jako dar pojednawczy.",
      "Użyj znaku Aard na podstawie kamienia, by odsłonić przejście.",
      "Wróć do komnaty Starca."
    ],
    choices: [
      {
        point: "Rozmowa z Nieznanym Starcem",
        context: "Starzec toleruje ograniczoną liczbę dodatkowych pytań w rozmowie - przekroczenie limitu grozi natychmiastową śmiercią Geralta.",
        options: [
          { label: "Zadaj tylko jedno dodatkowe pytanie i wybierz odpowiedź \"Dettlaff sprowadzi na was kłopoty\"", outcome: "Starzec zgadza się pomóc i zmusza Dettlaffa do stawienia się na spotkanie w Tesham Mutna." },
          { label: "Nalegaj lub wybierz błędne opcje dialogowe więcej niż raz", outcome: "Starzec zabija Geralta na miejscu - konieczne wczytanie zapisu gry." }
        ]
      }
    ],
    consequences: "Zgoda Nieznanego Starca gwarantuje pomoc w walce z Dettlaffem, ale ta ścieżka - jeśli Geralt nie zdąży wcześniej odnaleźć i uratować Syanny - prowadzi w stronę najgorszego z możliwych zakończeń dodatku."
  },
  {
    id: "dawno-dawno-temu",
    title: "Dawno, dawno temu...",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 12,
    summary: "Geralt wkracza do Krainy Tysiąca Baśni - rozpadającej się iluzji zbudowanej z baśniowych motywów - by odnaleźć uwięzioną tam Syannę. Musi zebrać trzy magiczne fasolki, by wyhodować łodygę prowadzącą do zamku olbrzyma.",
    walkthrough: [
      "Podążaj żółtą drogą (ignorując wadliwą mapę na rzecz wskaźnika celu).",
      "Pokonaj Złą Wiedźmę w pobliżu chaty, w której uwięziona jest Syanna.",
      "Odnajdź Jossa, chłopca, który zmyśla nieprawdziwe informacje o fasolkach.",
      "Zdobądź trzy fasolki: czerwoną (z brzucha Wielkiego Złego Wilka, po odegraniu bajki o Czerwonym Kapturku), żółtą (strzeżoną przez zjawę Roszpunki w wieży) i niebieską (ukrytą przez Trzy Małe Świnki w domku z cegły).",
      "Opcjonalnie odwiedź Dziewczynkę z Zapałkami i zdobądź wstążkę za 500 orenów albo w partii gwinta.",
      "Zasadź fasolki, by wyhodować łodygę prowadzącą do zamku olbrzyma.",
      "Pokonaj chmurnego olbrzyma i wyjdź przez studnię."
    ],
    choices: [
      {
        point: "Wstążka od Dziewczynki z Zapałkami",
        context: "Opcjonalne spotkanie z zagubioną duszą małej dziewczynki, która oferuje magiczną wstążkę w zamian za pieniądze lub partię gwinta.",
        options: [
          { label: "Zdobądź wstążkę", outcome: "Wstążka, wykonana przez czarodzieja Artoriusa Vigo, będzie mogła ocalić Syannę przed śmiercią z rąk Dettlaffa podczas finałowej konfrontacji w Tesham Mutna - to warunek konieczny najlepszego zakończenia." },
          { label: "Zrezygnuj ze spotkania lub nie zdobądź wstążki", outcome: "Geralt traci jedyną szansę na uratowanie Syanny w Tesham Mutna, jeśli zdecyduje się ją tam zabrać - skazuje ją tym samym na śmierć z rąk Dettlaffa." }
        ]
      }
    ],
    consequences: "Uratowanie Syanny z Krainy Tysiąca Baśni jest warunkiem koniecznym, by w ogóle mogła stawić się (żywa lub martwa) na spotkaniu w Tesham Mutna. Posiadanie magicznej wstążki jest jedynym sposobem na ocalenie jej życia podczas starcia z Dettlaffem."
  },
  {
    id: "tesham-mutna",
    title: "Tesham Mutna",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 13,
    summary: "Kulminacyjne starcie fabuły Krwi i Wina. W ruinach Tesham Mutna dochodzi do konfrontacji z Dettlaffem. To tutaj rozstrzyga się kluczowy dylemat całego dodatku: czy uwierzyć w to, że Syannę da się ocalić, czy zaakceptować, że musi ona zapłacić za swoje zbrodnie życiem - i jaką cenę zapłaci za to Beauclair.",
    walkthrough: [
      "Odblokuj zadanie, kończąc wcześniej \"Między światami\" (pomoc Nieznanego Starca) albo \"Dawno, dawno temu...\" (odnalezienie Syanny).",
      "Udaj się do ruin Tesham Mutna na południu Toussaint.",
      "Stań twarzą w twarz z Dettlaffem - przebieg rozmowy i walki zależy od wcześniejszych decyzji.",
      "Stocz trzyetapową walkę z Dettlaffem: postać humanoidalna, forma latająca (chmura nietoperzy) oraz iluzoryczna wewnętrzna komnata z pulsującymi sercami.",
      "Zadaj (lub powstrzymaj się od zadania) ostatecznego ciosu."
    ],
    choices: [
      {
        point: "Kluczowy wybór: los Syanny i Dettlaffa",
        context: "To najważniejszy moment decyzyjny całego dodatku. Od tego, czy Geralt zdołał wcześniej uratować Syannę oraz czy zdobył magiczną wstążkę od Dziewczynki z Zapałkami, zależy, kto przeżyje starcie w Tesham Mutna.",
        options: [
          { label: "Geralt nie ma Syanny (poszedł ścieżką Nieznanego Starca i nie odnalazł jej w Krainie Baśni)", outcome: "Dettlaff, przekonany że Syanna go ponownie zawiodła, zmusza Geralta do walki. Wiedźmin musi go pokonać w pełnym, trzyetapowym starciu. Syanna wciąż żyje, ale nieuratowana z Krainy Tysiąca Baśni - w praktyce ta ścieżka prowadzi do najgorszego zakończenia, w którym obie siostry ostatecznie giną podczas ceremonii." },
          { label: "Geralt przyprowadza Syannę, ale BEZ magicznej wstążki", outcome: "Rozwścieczony zdradą Dettlaff w brutalny sposób zabija Syannę na oczach Geralta. Wiedźmin może wtedy stoczyć z nim walkę i go zabić, albo pozwolić mu odejść (Dettlaff obiecuje trzymać się z dala od ludzi). W obu wariantach Syanna nie żyje, a śmierć siostry księżnej sprowadza na Geralta gniew Anny Henrietty i aresztowanie (zadanie \"Za żelazną kratą\")." },
          { label: "Geralt przyprowadza Syannę Z magiczną wstążką", outcome: "W chwili, gdy Dettlaff próbuje zabić Syannę, wstążka Artoriusa Vigo teleportuje ją w bezpieczne miejsce. Rozjuszony wampir zmusza Geralta do pełnej, trzyetapowej walki, którą wiedźmin musi wygrać - Dettlaff ginie, ale Syanna przeżywa i może wziąć udział w dalszej części fabuły (zadanie \"Ceremonia\")." }
        ]
      },
      {
        point: "Oszczędzić czy zabić Dettlaffa (tylko gdy Syanna zginęła bez wstążki)",
        context: "Jeśli Dettlaff zdążył zabić Syannę, po pokonaniu go w walce Geralt decyduje o jego dalszym losie.",
        options: [
          { label: "Zabij Dettlaffa", outcome: "Wampir ginie z ręki Geralta; liczy się to jako \"Dowód męstwa\" w innej grze Sądu Kupidyna, ale Regis traci przyjaciela i bywa później uznawany przez inne wampiry za zdrajcę za sprzymierzenie się z wiedźminem przeciw swojemu pobratymcowi." },
          { label: "Oszczędź Dettlaffa", outcome: "Wampir przysięga trzymać się z dala od ludzi i odchodzi wolny. Syanna wciąż nie żyje, więc Geralt i tak trafia do więzienia w \"Za żelazną kratą\", ale Dettlaff przeżywa, co część graczy uznaje za bardziej \"wiedźmiński\", pragmatyczny wybór." }
        ]
      }
    ],
    consequences: "To zadanie bezpośrednio determinuje, która z dwóch gałęzi fabuły się rozegra: jeśli Syanna przeżyła (dzięki wstążce), gra przechodzi do zadania \"Ceremonia\", w którym rozstrzyga się ostateczny, najlepszy lub najgorszy wariant zakończenia. Jeśli Syanna zginęła, Geralt trafia do więzienia w zadaniu \"Za żelazną kratą\", co prowadzi do środkowego (gorszego) zakończenia."
  },
  {
    id: "ceremonia",
    title: "Ceremonia",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 14,
    summary: "Zadanie dostępne wyłącznie wtedy, gdy Syanna przeżyła starcie w Tesham Mutna. Geralt zostaje uhonorowany przez Annę Henriettę podczas oficjalnej ceremonii, jednak wcześniej musi ustalić, czy Syanna wciąż planowała zabić własną siostrę - i podjąć próbę pojednania sióstr, co decyduje o ostatecznym, najlepszym albo najgorszym zakończeniu dodatku.",
    walkthrough: [
      "Porozmawiaj z Regisem o tożsamości piątej, niedoszłej ofiary Dettlaffa.",
      "Odwiedź czyściciela butów w porcie, by uzyskać trop prowadzący do przytułku.",
      "Stocz walkę na pięści z napastnikami w przytułku i zdobądź list ujawniający, że to Anna Henrietta miała być piątą ofiarą - z inicjatywy samej Syanny.",
      "Odwiedź Syannę w pałacowym lochu i przeprowadź z nią kluczową rozmowę.",
      "Spotkaj się z Damienem de la Tour w ogrodach pałacowych.",
      "Weź udział w oficjalnej ceremonii - Geralt zostaje odznaczony Orderem Vitis Vinifera i otrzymuje 5000 koron oraz zapas wina.",
      "Bądź świadkiem konfrontacji Anny Henrietty z Syanną."
    ],
    choices: [
      {
        point: "Rozmowa z Syanną w lochu",
        context: "Aby dać siostrom szansę na pojednanie, Geralt musi w rozmowie z Syanną poruszyć temat jej żalu do Anny Henrietty i spróbować nakłonić ją do wybaczenia.",
        options: [
          { label: "Wybierz odpowiedzi wskazujące na zrozumienie żalu Syanny (\"bo odwróciła się od ciebie, zapomniała o tobie\") i zachęcające do wybaczenia (\"czy nie pomyślałaś, żeby jej wybaczyć?\")", outcome: "Syanna daje się przekonać do szczerego pojednania z siostrą." },
          { label: "Pomiń rozmowę z Syanną lub wybierz inne odpowiedzi", outcome: "Syanna nie zostaje przekonana do żadnej zmiany serca, co otwiera drogę do najgorszego wariantu zakończenia ceremonii." }
        ]
      },
      {
        point: "Finał ceremonii - los obu sióstr",
        context: "Podczas publicznej ceremonii dochodzi do ostatecznej konfrontacji między Anną Henriettą a Syanną, której wynik zależy od wcześniejszej rozmowy w lochu oraz od tego, czy Geralt ujawnił dowody na to, że Syanna planowała zabójstwo.",
        options: [
          { label: "Syanna została przekonana do wybaczenia (najlepsze zakończenie)", outcome: "Siostry publicznie się godzą - dochodzi do burzliwej, ale szczerej wymiany zdań, po której napięcie opada i obie kobiety się obejmują. Anna Henrietta i Syanna przeżywają, Beauclair odzyskuje spokój, a Geralt świętuje sukces z Regisem." },
          { label: "Syanna nie została przekonana (najgorsze zakończenie)", outcome: "Syanna udaje pojednanie, po czym zabija Annę Henriettę spinką do włosów. Strażnicy natychmiast zabijają Syannę. Obie siostry giną, Beauclair pogrąża się w żałobie, a Geralt odwiedza groby obu kobiet przed spotkaniem z Regisem." }
        ]
      }
    ],
    consequences: "To właśnie w \"Ceremonii\" rozstrzyga się ostateczne, pełne zakończenie fabuły Krwi i Wina dla ścieżki, w której Syanna przeżyła starcie z Dettlaffem - może zakończyć się albo pojednaniem i przetrwaniem obu sióstr, albo śmiercią ich obu. W obu wariantach Dettlaff, jeśli zginął w Tesham Mutna, sprawia, że Regis bywa później postrzegany przez inne wampiry jako zdrajca gatunku."
  },
  {
    id: "za-zelazna-krata",
    title: "Za żelazną kratą",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 15,
    summary: "Alternatywne zadanie epilogowe, odblokowywane tylko wtedy, gdy Syanna zginęła z rąk Dettlaffa w Tesham Mutna (bo Geralt nie zdobył magicznej wstążki). Za przyczynienie się do śmierci siostry księżnej Geralt trafia do więzienia w Toussaint.",
    walkthrough: [
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
    choices: [
      {
        point: "Ujawnienie prawdy o piątej ofierze",
        context: "Śledztwo (przesłuchanie czyściciela butów i wizyta w przytułku) ujawnia, że Syanna planowała osobiście zamordować własną siostrę.",
        options: [
          { label: "Ujawnij ustalenia księżnej", outcome: "Anna Henrietta zaprzecza i reaguje z gniewem oraz smutkiem na te informacje." },
          { label: "Zachowaj informacje dla siebie", outcome: "Geralt rezygnuje z konfrontacji i zamiast tego spędza czas przy drinku z Regisem." }
        ]
      }
    ],
    consequences: "Dzięki interwencji Jaskra Geralt zostaje ostatecznie uwolniony, traci jednak większość obiecanej nagrody i zostaje wygnany z księstwa Toussaint. To środkowe, gorzko-słodkie zakończenie fabuły - Syanna nie żyje, a Geralt, mimo pokonania Dettlaffa (lub jego oszczędzenia), płaci cenę za splot wcześniejszych decyzji."
  },
  {
    id: "wszedzie-dobrze",
    title: "Wszędzie dobrze...",
    type: "main",
    dlc: "bw",
    chapter: "Krew i Wino",
    order: 16,
    summary: "Finałowe, spokojne zadanie zamykające fabułę Krwi i Wina. Po pożegnaniu z Regisem na cmentarzu Mère-Lachaiselongue Geralt wraca do swojej winnicy Corvo Bianco, gdzie czeka na niego niespodziewany gość - epilog jego historii w Toussaint.",
    walkthrough: [
      "Zakończ główny wątek fabularny i porozmawiaj z Regisem na cmentarzu Mère-Lachaiselongue.",
      "Udaj się do posiadłości Corvo Bianco.",
      "Porozmawiaj z Barnabą-Bazylim Foulty, który wspomina o czekającym gościu.",
      "Wejdź do domu i odkryj, kto na Geralta czeka.",
      "Przeprowadź rozmowę z gościem, podsumowującą wydarzenia sagi."
    ],
    choices: [
      {
        point: "Tożsamość gościa w Corvo Bianco",
        context: "Kto odwiedza Geralta w jego nowej posiadłości, zależy od decyzji romansowych i losów Ciri podjętych w podstawowej wersji gry oraz w Krwi i Winie.",
        options: [
          { label: "Geralt związał się z Triss", outcome: "Do Corvo Bianco przybywa Triss Merigold." },
          { label: "Geralt związał się z Yennefer", outcome: "Do Corvo Bianco przybywa Yennefer z Vengerbergu." },
          { label: "Geralt nie związał się z żadną z czarodziejek, a Ciri przeżyła (jako wiedźminka lub cesarzowa) / lub związał się z obiema", outcome: "Do Corvo Bianco przybywa Ciri, by odwiedzić przybranego ojca." },
          { label: "Brak romansu i Ciri nie żyje (lub rozgrywka na bazowej wersji gry bez importu save'a)", outcome: "Do Corvo Bianco przybywa Jaskier, wierny przyjaciel Geralta." }
        ]
      }
    ],
    consequences: "Zadanie zamyka historię Geralta w Toussaint jako spokojny, ciepły epilog - niezależnie od tego, jak potoczyły się wcześniejsze wydarzenia, wiedźmin osiada we własnej winnicy jako w pełni zasłużonej, prywatnej przystani po latach wędrówki. Los Regisa zależy od wcześniejszych wyborów: jeśli Dettlaff zginął z ręki Geralta, Regis bywa uznawany przez resztę wampirzej społeczności za zdrajcę, co kładzie się cieniem na jego dalszym życiu, mimo że pozostaje wiernym przyjacielem Geralta."
  }
];
if (typeof module !== "undefined") { module.exports = BW_QUESTS; }
