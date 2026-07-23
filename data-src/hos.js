/* ==========================================================================
   Baza danych: Wiedźmin 3 - Serca z Kamienia (Hearts of Stone)
   Questlinia główna: Olgierd von Everec / Gaunter O'Dimm (Pan Zwierciadło).
   Źródła: witcher.fandom.com (Whatsoever a Man Soweth..., Evil's Soft First
   Touches, Dead Man's Party, Open Sesame!, Scenes From a Marriage, Olgierd
   von Everec, Gaunter O'Dimm, Hym), thewitcher3.wiki.fextralife.com,
   gamepressure.com, game8.co, gosunoob.com, gamerant.com, en.wikipedia.org
   (The Witcher 3: Wild Hunt - Hearts of Stone). Zweryfikowano lipiec 2026.
   ========================================================================== */

const HOS_QUESTS = [
  {
    id: "evils-soft-first-touches",
    title: "Słodki, gorzki smak zła (Evil's Soft First Touches)",
    type: "main",
    dlc: "hos",
    chapter: "Serca z Kamienia",
    order: 1,
    summary: "Zadanie otwierające dodatek. Geralt trafia do Podmiejskiej Karczmy 'Pod Rozdrożem', gdzie zleceniodawca Olgierd von Everec proponuje mu kontrakt na pozornie nieśmiertelnego bandziora. W trakcie śledztwa i po wydarzeniach na statku Ofirczyków wiedźmin poznaje tajemniczego kupca Gauntera O'Dimma, który ratuje mu życie w zamian za przysługę.",
    walkthrough: [
      "Geralt trafia (np. po zabiciu 'Żabiego Króla' w kanałach Oxenfurtu, który okazuje się ofirskim księciem) na statek Ofirczyków i zostaje uwięziony jako skazaniec.",
      "W celi zjawia się Gaunter O'Dimm i oferuje pomoc w zamian za przysługę na żądanie w przyszłości - Geralt godzi się, a O'Dimm znaczy mu twarz swoim symbolem.",
      "Podczas sztormu, który rozbija statek, Geraltowi udaje się zbiec.",
      "Geralt spotyka Gauntera O'Dimma w Yantrze (po godz. 23:00) - kupiec wyjaśnia, że Olgierd również jest mu winien dług, a Geralt ma spłacić obie należności naraz, wykonując dla Olgierda trzy życzenia.",
      "Wiedźmin udaje się do płonącej posiadłości Garina, gdzie ludzie Olgierda egzekwują dług na jednym z dłużników; sposób reakcji Geralta (pogróżki lub inna odpowiedź) prowadzi w każdym wariancie do pojawienia się samego Olgierda.",
      "Olgierd wyzywa Geralta na pojedynek. Choć wiedźmin może go 'pokonać' mechanicznie, Olgierd okazuje się nieśmiertelny (nie da się go zabić) i po walce spokojnie płaci umówione wynagrodzenie.",
      "Olgierd ujawnia dwa pierwsze życzenia: zdobycie posiadłości (aktu własności) rodziny Borsodich oraz pokazanie jego zmarłemu bratu Vlodimirowi 'jak wygląda dobra zabawa'. Gaunter przekazuje Geraltowi fiolkę z krwią Vlodimira, niezbędną do rytuału przywołania."
    ],
    choices: [
      {
        point: "Reakcja na egzekucję dłużnika w posiadłości Garina",
        context: "Ludzie Olgierda mają zabić winnego pieniędzy dłużnika na oczach Geralta.",
        options: [
          { label: "Zagrozić im / interweniować", outcome: "Dłużnik i tak ginie, ale w reakcji pojawia się sam Olgierd i wyzywa Geralta na pojedynek." },
          { label: "Nie interweniować / inna odpowiedź w dialogu", outcome: "Efekt fabularny jest identyczny - dłużnik ginie, Olgierd i tak się ujawnia; różnią się tylko kwestie dialogowe." }
        ]
      }
    ],
    consequences: "Geralt zostaje formalnie związany podwójnym zobowiązaniem: wobec Gauntera O'Dimma (przysługa na żądanie) i wobec Olgierda (trzy życzenia w zamian za dane mu wcześniej pieniądze). To ustawia całą oś fabularną dodatku."
  },
  {
    id: "dead-mans-party",
    title: "Uczta umarlaka (Dead Man's Party)",
    type: "main",
    dlc: "hos",
    chapter: "Serca z Kamienia",
    order: 2,
    summary: "Realizacja pierwszego życzenia Olgierda: pokazanie jego dawno zmarłemu bratu Vlodimirowi 'najlepszej zabawy w życiu'. Geralt z pomocą Shani z Oxenfurtu przeprowadza rytuał przywołania ducha Vlodimira, który opętuje ciało wiedźmina i razem z nim bawi się na weselu Aldony i Johnnusa w Beauclair... a właściwie w Novigradzie/Oxenfurcie (Brunwich).",
    walkthrough: [
      "Geralt konsultuje się z lekarką Shani, która pomaga przygotować rytuał przywołania ducha przy użyciu krwi Vlodimira dostarczonej przez Gauntera O'Dimma.",
      "W krypcie rodu von Everec odprawiany jest rytuał z udziałem zjaw - duch Vlodimira opętuje ciało Geralta na czas trwania wesela.",
      "Shani zaprasza 'opętanego' Geralta na wesele Aldony i Johnnusa w Beauclair (Brunwich). Vlodimir, zafascynowany Shani, obiecuje jednak trzymać ręce przy sobie z szacunku dla uczuć Geralta.",
      "Na weselu trzeba wykonać co najmniej dwie z czterech aktywności: zagonienie dwóch czarnych świń do zagrody, zaloty do druhny (co kończy się bójką z jej trzema braćmi), partię Gwinta z niziołkami (przegrana oznacza oddanie 5% złota i 'oślą' karę) oraz odnalezienie i przekonanie połykacza ognia do występu.",
      "Po ukończeniu dwóch obowiązkowych aktywności Vlodimir zabiera Shani do tańca - w tym momencie pojawia się Gaunter O'Dimm, a Geralt konfrontuje go w sprawie jego tajemniczej natury.",
      "O północy, podczas oczepin, na głowę Shani spada wianek. Vlodimir, mimo wcześniejszej obietnicy, próbuje ją pocałować/złamać dane słowo, przez co Gaunter O'Dimm wypędza go z ciała Geralta, pisząc uprzednio krwią list do brata.",
      "Geralt dostarcza list Olgierdowi jako dowód spełnienia pierwszego życzenia i otrzymuje zapłatę."
    ],
    choices: [
      {
        point: "Aktywności weselne",
        context: "Do zaliczenia questu potrzebne są minimum dwie z czterech gier/zabaw weselnych.",
        options: [
          { label: "Zagonienie świń, zaloty do druhny, Gwint, poszukiwanie połykacza ognia", outcome: "Każda kombinacja dwóch (lub więcej) ukończonych aktywności pozwala przejść dalej fabułę; dodatkowe aktywności dają tylko ekstra rozrywkę/XP." }
        ]
      },
      {
        point: "Flirt Vlodimira z Shani",
        context: "Duch Vlodimira w ciele Geralta zaleca się do Shani mimo obietnicy złożonej Olgierdowi/Geraltowi.",
        options: [
          { label: "Vlodimir łamie obietnicę i próbuje pocałować Shani", outcome: "Gaunter O'Dimm natychmiast wypędza ducha Vlodimira z ciała Geralta - kończy to jego udział w zabawie i otwiera furtkę do późniejszego romansu Geralta z Shani." }
        ]
      }
    ],
    consequences: "Pierwsze życzenie Olgierda zostaje spełnione. Wesele w Beauclair to też punkt startowy opcjonalnego wątku romansowego Geralta z Shani (patrz kolejne zadanie 'Bezchmurne niebo o północy')."
  },
  {
    id: "midnight-clear-shani",
    title: "Bezchmurne niebo o północy (A Midnight Clear) - romans z Shani",
    type: "main",
    dlc: "hos",
    chapter: "Serca z Kamienia",
    order: 3,
    summary: "Opcjonalny, ale silnie powiązany z fabułą wątek romansowy: po weselu z 'Uczty umarlaka' Geralt może spędzić noc z Shani. Wątek nie wpływa na wybór między Yennefer a Triss, ale otwiera dostęp do kluczowej pomocy Shani w finałowym zadaniu dodatku.",
    walkthrough: [
      "Po zakończeniu wesela Geralt może odnaleźć gałązek jarzębiny (ulubionego drzewa Shani) na terenie posiadłości/dworu, gdzie odbywało się wesele.",
      "Wręczenie gałązki Shani otwiera dialog romantyczny - kluczowe kwestie to m.in. 'Masz mnie' oraz odpowiedź w rodzaju 'Pocałunek jednak mi nie wystarczył'.",
      "Wybór odpowiednich, ciepłych/flirciarskich kwestii prowadzi do zaproszenia na spacer, a następnie do wspólnie spędzonej nocy.",
      "Następnego ranka Shani odjeżdża, tłumacząc się obowiązkami (powrót do służby medycznej), i romans kończy się jako jednorazowy epizod bez dalszych konsekwencji dla głównych romansów Geralta."
    ],
    choices: [
      {
        point: "Podjęcie wątku romantycznego z Shani",
        context: "Gracz decyduje, czy wręczyć gałązkę jarzębiny i kontynuować flirt.",
        options: [
          { label: "Zignorować / nie kontynuować flirtu", outcome: "Geralt i Shani rozstają się jako przyjaciele; questlinia biegnie dalej normalnie, ale Geralt traci później możliwość odwiedzenia jej mieszkania przed finałem w charakterze kochanka (choć nadal może ją odwiedzić jako przyjaciel przed 'Cokolwiek posiał człowiek...')." },
          { label: "Podjąć flirt i spędzić noc z Shani", outcome: "Romans nie wpływa na relację Geralta z Yennefer/Triss (nie liczy się jako 'zdrada' w grze). To spotkanie ułatwia later odnalezienie Shani przed finałowym questem i wspólną wizytę u profesora Shakeslocka." }
        ]
      }
    ],
    consequences: "Romans jest z założenia 'bezkonsekwencyjny' względem oficjalnych romansów Geralta, ale odwiedziny u Shani przed 'Cokolwiek posiał człowiek...' są praktycznie niezbędne, by odblokować możliwość ocalenia Olgierda w finale."
  },
  {
    id: "open-sesame",
    title: "Sezamie, otwórz się! (Open Sesame!)",
    type: "main",
    dlc: "hos",
    chapter: "Serca z Kamienia",
    order: 4,
    summary: "Realizacja drugiego życzenia Olgierda: zdobycie aktu własności posiadłości rodu Borsodich, przechowywanego w silnie strzeżonym sejfie. Zadanie rozgałęzia się na trzy podquesty przygotowawcze do napadu: 'Wiedźmińskie przyprawy', 'Włamanie' i 'Kasiarz'.",
    walkthrough: [
      "Geralt jedzie do domu aukcyjnego w Oxenfurcie, gdzie za pomocą krasnoluda-bankiera Vimme Vivaldiego zdobywa zaproszenie na aukcję antyków organizowaną przez Horsta Borsodiego.",
      "W trakcie aukcji Geralta demaskuje Horst Borsodi i każe strażnikom go wyprowadzić, jednak wcześniej wiedźmin poznaje tajemniczego Nieznajomego (w rzeczywistości Ewalda Borsodiego, brata Horsta), który proponuje wspólny napad na skarbiec.",
      "Podquest 'Wiedźmińskie przyprawy': by uniemożliwić strażnikom reakcję podczas skoku, Geralt musi przygotować 'miksturę oczyszczającą' (m.in. z krwi gnijaka) i podrzucić ją do kotła kucharza w porcie przy Bramie Zachodniej - kucharza można przekupić 200 koronami albo namówić Znakiem Aksji.",
      "Podquest 'Kasiarz': trzeba zwerbować specjalistę od otwierania sejfów. Do wyboru: głośna metoda z materiałami wybuchowymi (zwerbowanie pirotechnika Kasimira Bassiego z wioski Alness, wymaga użycia Znaku Aksji: Iluzja II, by powstrzymać jego próbę samobójczą) albo cicha metoda (uwolnienie włamywacza Quinto z obozu najemników - okup w wysokości 200 koron, wygranie partii Gwinta albo pokonanie dowódcy w walce).",
      "Podquest 'Włamanie': do ekipy trzeba dołączyć specjalistkę od precyzyjnych wejść, Evelinę Gallo, występującą w wędrownej trupie na północny wschód od Oxenfurtu - warunkiem jest zdanie testu z kuszy (strzelanie do jabłek na głowie, ręce i stopie partnera z trupy).",
      "Ekipa (Geralt, Ewald Borsodi, wybrany kasiarz, Evelina) włamuje się do posiadłości Borsodich. Sposób pokonania strażników i pułapek różni się w zależności od wybranego kasiarza (metoda cicha vs. wybuchowa z pułapkami arachnomorfów).",
      "Wewnątrz skarbca Geralt musi zdecydować, po czyjej stronie stanąć - Horsta czy Ewalda Borsodiego - co prowadzi do różnych wariantów końcowej walki/konfrontacji rodzeństwa.",
      "Geralt zdobywa akt własności i wraca do Olgierda w Karczmie 'Pod Alembikiem', by przekazać dokument i odebrać zapłatę za drugie życzenie."
    ],
    choices: [
      {
        point: "Wybór kasiarza",
        context: "Do otwarcia sejfu trzeba zwerbować specjalistę - wybuchowego pirotechnika albo cichego włamywacza.",
        options: [
          { label: "Kasimir Bassi (metoda głośna, wybuchowa)", outcome: "Skok przebiega z użyciem ładunków wybuchowych; podczas napadu pojawiają się dodatkowe pułapki z arachnomorfami." },
          { label: "Quinto (metoda cicha)", outcome: "Napad można przeprowadzić po cichu, omijając część strażników dzięki dialogom/skradaniu." }
        ]
      },
      {
        point: "Lojalność w skarbcu Borsodich",
        context: "W trakcie finałowej konfrontacji trzeba opowiedzieć się po stronie Horsta lub Ewalda Borsodiego.",
        options: [
          { label: "Stanąć po stronie Horsta", outcome: "Prowadzi do innego przebiegu starcia z Ewaldem i jego ludźmi." },
          { label: "Stanąć po stronie Ewalda (Nieznajomego)", outcome: "Prowadzi do starcia z ludźmi Horsta; to Ewald był architektem całego planu napadu." }
        ]
      }
    ],
    consequences: "Drugie życzenie Olgierda zostaje spełnione - Geralt zdobywa akt własności rodu Borsodich. Wybory dotyczące kasiarza i lojalności w skarbcu zmieniają przebieg walki, ale nie wpływają na dalszy przebieg głównej fabuły dodatku."
  },
  {
    id: "scenes-from-a-marriage",
    title: "Sceny z życia małżeńskiego (Scenes From a Marriage)",
    type: "main",
    dlc: "hos",
    chapter: "Serca z Kamienia",
    order: 5,
    summary: "Realizacja trzeciego, najbardziej osobistego życzenia Olgierda: odzyskanie fioletowej róży, którą dał swojej żonie Iris przy ich ostatnim spotkaniu. Zadanie prowadzi Geralta do opuszczonej posiadłości von Evereców i w głąb malowanego, surrealistycznego świata wspomnień, gdzie poznaje prawdziwą, mroczną historię małżeństwa Olgierda i Iris.",
    walkthrough: [
      "Geralt udaje się do posiadłości rodu von Everec, gdzie natrafia na złodzieja grobów oraz tajemniczego, pozbawionego oczu dozorcę strzegącego terenu - trzeba go pokonać.",
      "W zrujnowanej rezydencji wiedźmin napotyka zjawę - 'Widmo z obrazu', czyli ducha Iris, dawnej żony Olgierda.",
      "Geralt odnajduje szczątki dawno zmarłej Iris, grzebie je zgodnie z obrzędem, po czym przywołuje jej ducha za pomocą specjalnego rytuału (znak Yrden i eliksir umożliwiający wejście do świata umysłu/wspomnień).",
      "W surrealistycznym, malowanym świecie Geralt musi odtworzyć siedem kluczowych wspomnień Iris i Olgierda, rozwiązując zagadki środowiskowe w każdej z 'scen'.",
      "Wspomnienia stopniowo ujawniają, jak rozpadło się małżeństwo: sprzeciw rodziny Olgierda wobec związku, jego niepowodzenia i magiczne/alchemiczne eksperymenty, pakt z Gaunterem O'Dimmem oraz narastające okrucieństwo Olgierda wobec żony.",
      "Na końcu wędrówki przez wspomnienia Geralt spotyka zjawę Iris trzymającą ową fioletową różę i musi podjąć decyzję dotyczącą losu kwiatu/ducha."
    ],
    choices: [
      {
        point: "Los róży i ducha Iris",
        context: "W finałowej scenie malowanego świata zjawa Iris trzyma fioletową różę, o którą prosił Olgierd.",
        options: [
          { label: "Zabrać różę Iris", outcome: "Zjawa Iris znika (rozpływa się), a Geralt otrzymuje prawdziwą, fizyczną różę potrzebną do spełnienia trzeciego życzenia Olgierda." },
          { label: "Zostawić różę przy Iris", outcome: "Geralt opuszcza malowany świat bez róży - zamiast niej otrzymuje jedynie obraz przedstawiający Iris trzymającą różę, co utrudnia/uniemożliwia standardowe zamknięcie tego wątku z Olgierdem." }
        ]
      }
    ],
    consequences: "Zabranie róży pozwala domknąć trzecie życzenie Olgierda i przejść do zadania finałowego. Ta questlinia jako pierwsza jasno pokazuje, że to sam Olgierd - a nie tylko Gaunter O'Dimm - ponosi winę za tragedię własnej rodziny, co rzutuje na moralną ocenę gracza w finale."
  },
  {
    id: "whatsoever-a-man-soweth",
    title: "Cokolwiek posiał człowiek... (Whatsoever a Man Soweth...)",
    type: "main",
    dlc: "hos",
    chapter: "Serca z Kamienia",
    order: 6,
    summary: "Finałowe zadanie dodatku 'Serca z Kamienia'. Gaunter O'Dimm wzywa Geralta do Świątyni Lilvani, by rozliczyć pakt z Olgierdem - w zamian za spełnienie trzech życzeń O'Dimm zamierza zabrać duszę szlachcica. To, czy Geralt będzie w stanie interweniować i ocalić Olgierda, zależy od tego, czy wcześniej odwiedził Shani i dowiedział się od profesora Shakeslocka, jak przechytrzyć Pana Zwierciadło.",
    walkthrough: [
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
    choices: [
      {
        point: "Czy odwiedzić Shani i dowiedzieć się od Shakeslocka, jak pokonać Gauntera O'Dimma",
        context: "To opcjonalny wątek poboczny przed finałową konfrontacją w Świątyni Lilvani.",
        options: [
          { label: "Pominąć wątek Shani/Shakeslocka", outcome: "W finałowej scenie Geralt nie ma możliwości rzucenia wyzwania Gaunterowi - jedyną dostępną opcją jest bierne przyjęcie tego, że O'Dimm zabiera duszę Olgierda." },
          { label: "Odwiedzić Shani i dotrzeć do Shakeslocka przed konfrontacją", outcome: "Geralt poznaje sposób na wyzwanie Gauntera do gry o duszę i odblokowuje w finale opcję próby ocalenia Olgierda." }
        ]
      },
      {
        point: "Decyzja w Świątyni Lilvani: zaakceptować los Olgierda czy rzucić wyzwanie Gaunterowi O'Dimmowi",
        context: "Po dopełnieniu trzeciego życzenia (przekazaniu róży) kontrakt Olgierda jest formalnie spełniony i Gaunter gotów jest zabrać jego duszę.",
        options: [
          { label: "Nie angażować się / zaakceptować, że pakt został spełniony", outcome: "Gaunter O'Dimm zabiera duszę Olgierda - pakt zostaje 'dopełniony', a Olgierd umiera (\"Pakt został dopełniony, a życie Olgierda dobiegło końca\"). W zamian za posłuszeństwo Geralt może poprosić Gauntera o jedno życzenie/bonus (patrz niżej) albo odmówić przyjęcia czegokolwiek od niego." },
          { label: "Rzucić wyzwanie Gaunterowi O'Dimmowi (wymaga wcześniejszej wiedzy od Shakeslocka)", outcome: "Geralt stawia na szali własną duszę przeciw duszy Olgierda i musi rozwiązać zagadkę w zniekształconym świecie w ograniczonym czasie. Sukces: obaj zostają uwolnieni, pakt zostaje zerwany (\"Olgierd von Everec był bezpieczny, a pakt, który go wiązał, został rozwiązany\"), a Olgierd w dowód wdzięczności ofiarowuje Geraltowi swój rodowy miecz stalowy 'Iris' (jeden z najsilniejszych mieczy w grze). Porażka w rozwiązaniu zagadki w wyznaczonym czasie oznacza utratę obu dusz - i Olgierda, i Geralta." }
        ]
      },
      {
        point: "Nagroda od Gauntera O'Dimma (jeśli Geralt nie interweniuje lub nie ma dostępu do wyzwania)",
        context: "W zamian za bierne oddanie duszy Olgierda Gaunter oferuje Geraltowi jedno życzenie/przedmiot w ramach 'rekompensaty'.",
        options: [
          { label: "5000 koronów", outcome: "Geralt otrzymuje gotówkę zamiast przedmiotu magicznego." },
          { label: "Róg Obfitości", outcome: "Przedmiot dający nieskończone zapasy jedzenia." },
          { label: "Niewyczerpana Karafka", outcome: "Przedmiot dający nieskończony zapas alkoholu (element czysto kolekcjonerski)." },
          { label: "Czapka Lamentu / rządek dla wierzchowca", outcome: "Specjalny czaprak zwiększający szybkość konia Geralta." },
          { label: "Odmówić przyjęcia czegokolwiek od Gauntera O'Dimma", outcome: "Geralt nie bierze żadnej nagrody materialnej, ale w niektórych wersjach questa otrzymuje w zamian dodatkowe doświadczenie / satysfakcję moralną z odmowy układu z demonicznym bytem." }
        ]
      }
    ],
    consequences: "Zadanie kończy główną fabułę 'Serc z Kamienia' i odblokowuje osiągnięcie/trofeum 'Pacta sunt servanda'. Jeśli Geralt pokonał Gauntera O'Dimma w grze o dusze, Olgierd przeżywa i staje się wolnym człowiekiem (jego dalsze losy pozostają otwarte, ale zrywa pakt determinujący jego niemal-nieśmiertelność i okrucieństwo), a Geralt zyskuje miecz Iris. Jeśli Geralt nie interweniował, Olgierd umiera, a jego dusza trafia do Gauntera O'Dimma - podobnie jak wcześniej dusza Iris, której los pozostaje związany z tajemniczym kupcem. W żadnym z wariantów gra nie ujawnia wprost pełnej natury/tożsamości Gauntera O'Dimma (znanego z prologu 'Krwi i Wina' jako 'Pan Zwierciadło') - jego ostateczny los i to, czy Geralt naprawdę go pokonał, czy tylko odroczył kolejne spotkanie, pozostaje niejednoznaczne (\"Czy to było ostatnie, co nasz świat miał go zobaczyć? Nikt nie potrafi powiedzieć...\")."
  }
];

if (typeof module !== "undefined") { module.exports = HOS_QUESTS; }
