// DiákÉletkerék adatszerkezet - Ige+Magyarázat.docx alapján
const LIFE_AREAS = [
  {
    "id": "E01",
    "title": "Önismeret",
    "shortDescription": "Mennyire érzed, hogy ismered önmagadat, érzéseidet, erősségeidet és nehézségeidet?",
    "verse": "De most így szól az Úr, a te teremtőd, Jákób, a te formálód, Izráel: Ne félj, mert megváltottalak, neveden szólítottalak, enyém vagy! - Ézsaiás 43,1",
    "guidance": "Könnyű önmagunkat a jegyeinkkel, a külsőnkkel vagy mások visszajelzéseivel azonosítani. Isten azonban mélyebb alapot kínál: Ő ismer és megszólít bennünket. Az önismeret ezért nem önmagunk hibátlanná formálása, hanem őszinte figyelem arra, kik vagyunk, mi fontos nekünk, és miben van szükségünk fejlődésre. A változás természetes része a fiatalkornak. Egy nehéz nap vagy alacsony önértékelés nem tesz kevésbé értékessé Isten szemében.",
    "reflectionQuestion": "Mi az, amit szeretnék jobban megérteni önmagamban, mások véleményétől függetlenül?",
    "evaluationTip": "Pontozáskor azt mérlegeld, mennyire érted most saját érzéseidet, működésedet és szükségleteidet – nem azt, hogy mennyire vagy „értékes”.",
    "detailedHelp": "Gondolj arra, mennyire tudod felismerni és megnevezni, amit érzel, ami fontos neked, és amiben ügyes vagy vagy még fejlődnél. Mennyire ismered fel, hogy mások véleménye mikor segít, és mikor bizonytalanít el? Tudsz-e önmagadról nemcsak hibák, hanem erősségek alapján is gondolkodni? Az önismeret nem azt jelenti, hogy már mindenre tudod a választ: a változás, a kérdések és a segítségkérés is részei lehetnek."
  },
  {
    "id": "E02",
    "title": "Tanulás",
    "shortDescription": "Mennyire vagy elégedett azzal, ahogyan a tanuláshoz és a feladataidhoz viszonyulsz?",
    "verse": "Amit tesztek, jó lélekkel végezzétek úgy, mint az Úrnak, és nem úgy, mint az embereknek, tudván, hogy ti viszonzásul megkapjátok az Úrtól az örökséget. Az Úr Krisztusnak szolgáljatok! - Kolossé 3,23-24",
    "guidance": "Az iskola lehet sikerélmények, de kudarcok és nyomás forrása is. A tanulás bibliai szemléletben nem merül ki a teljesítményben: alkalom a ránk bízott képességek kibontakoztatására és a kitartás gyakorlására. Ez nem azt jelenti, hogy mindig kiváló eredményt kell elérned. A becsületes igyekezet, a segítségkérés és az újrakezdés is a felelős hozzáállás része. Érdemes mérlegelni azt is, hogy a tanulásodnak milyen értelmet látsz a jegyeken túl.",
    "reflectionQuestion": "Mi segítene abban, hogy a tanulásomban több értelmet és kevesebb puszta kényszert lássak?",
    "evaluationTip": "A tanulási szokásaiddal és hozzáállásoddal való elégedettségedet pontozd, ne a bizonyítványodat.",
    "detailedHelp": "Itt ne elsősorban a jegyeidet értékeld, hanem azt, ahogyan tanulsz. Van-e olyan módszered, amellyel haladni tudsz? Megpróbálod-e megérteni a feladatot, vagy csak túl lenni szeretnél rajta? Ha elakadsz, tudsz-e segítséget kérni, újrakezdeni, vagy változtatni a módszereden? Gondolhatsz arra is, találsz-e a tanulásban értelmet, sikerélményt vagy kapcsolatot azzal, ami később fontos lehet számodra. A nehéz tantárgy nem jelenti azt, hogy rosszul viszonyulsz a tanuláshoz."
  },
  {
    "id": "E03",
    "title": "Időgazdálkodás",
    "shortDescription": "Mennyire tudod jól beosztani az idődet a tanulás, a hobbik és a pihenés között?",
    "verse": "Jól vigyázzatok tehát, hogyan éltek; ne esztelenül, hanem bölcsen, kihasználva az alkalmas időt, mert az idők gonoszak. - Efezus 5,15–16",
    "guidance": "Az időbeosztás több, mint naptár, kronológia vagy teendőlista: megmutathatja, minek biztosítasz helyet az életedben. A sok értesítés, elvárás és halogatás könnyen szétszórhatja a figyelmet. A bibliai intés nem folyamatos munkára sürget, hanem megfontolt időmenedzsmentre. Néha az a bölcs döntés, hogy elkezdesz egy feladatot. Máskor az, hogy nemet mondasz valamire. De olykor az a legjobb döntés ha adsz magadnak pihenést. Nem a perceid kihasználtsága, hanem a döntéseid a kérdés.",
    "reflectionQuestion": "Mi az az egy toxikus szokás, amely a legtöbb időmet elviszi attól, ami valóban fontos?",
    "evaluationTip": "Azt értékeld, mennyire működik számodra a tanulás, szabadidő és pihenés jelenlegi egyensúlya.",
    "detailedHelp": "Képzelj el egy átlagos hetet. Jut-e időd a feladataidra, a fontos kapcsolataidra, a hobbidra és az alvásra? Gyakran az utolsó pillanatra hagysz mindent, vagy többnyire tudod, mi a következő fontos lépés? Figyeld meg, mennyi időt visz el a céltalan telefonozás vagy más megszokás, és mennyire tudsz határt szabni neki. Nem az a cél, hogy minden percedet beoszd, hanem hogy az idődet lehetőleg ne csak a sürgető dolgok irányítsák."
  },
  {
    "id": "E04",
    "title": "Hit és értékrend",
    "shortDescription": "Mennyire tiszták és szilárdak számodra az elvek, hited és értékrended?",
    "verse": "Minden féltve őrzött dolognál jobban óvd szívedet, mert onnan indul ki az élet! - Példabeszédek 4,23",
    "guidance": "A hit és az értékrend nem pusztán megtanult szabályokat jelent. Azt is magában foglalja, mit tartasz igazán fontosnak, miben bízol, és mi alapján döntesz nehéz helyzetekben. A Példabeszédek könyve a szív őrzésére figyelmeztet: hitvilágunk kihat a szavainkra és a tetteinkre. A keresztyén etika az Istenhez és a felebaráthoz való viszonyt is ide kapcsolja. A saját pontszámod nem méri meg a hited értékét vagy Istenhez fűződő kapcsolatodat.",
    "reflectionQuestion": "Melyik értékhez szeretnék hű maradni akkor is, amikor ez nem könnyű?",
    "evaluationTip": "A belső tájékozódásoddal való elégedettséget értékeld.",
    "detailedHelp": "Tudod-e megfogalmazni, mely elvek fontosak számodra: például az őszinteség, szeretet, igazságosság, megbocsátás vagy hűség? El tudod-e mondani, miért fontosak, és hogy a hited – akár kérdésekkel, bizonytalanságokkal együtt – hogyan kapcsolódik a mindennapi életedhez? Gondolj egy helyzetre, amikor mások mást vártak tőled, mint amit helyesnek tartottál. Itt nem a vallásosság „erősségét” vagy a hited értékét pontozod, hanem azt, mennyire látod tisztán a saját meggyőződéseidet és értékeidet."
  },
  {
    "id": "E05",
    "title": "Szabadság és önállóság",
    "shortDescription": "Mennyire érzed úgy, hogy saját magad hozod meg a döntéseidet és önálló vagy?",
    "verse": "Minden szabad nekem, de nem minden használ. Minden szabad nekem, de nem válok semminek a rabjává. - 1Korinthus 6,12",
    "guidance": "Az önállósodás során egyre több döntést kell meghoznod. A szabadság viszont nem azonos a korlátok hiányával: érdemes felismerni, melyek azok a választások melyek szabadabbá tesznek, és melyek alakítanak ki új függőségeket. Ide tartozhatnak a társas nyomás, a digitális szokások vagy az, hogy merünk-e nemet mondani. A döntés szabadsága nem követeli meg, hogy mindig egyedül boldogulj. Segítséget kérni és tanácsot meghallgatni is lehet érett, szabad döntés.",
    "reflectionQuestion": "Mikor érzem azt, hogy valóban én döntök, és mikor sodornak inkább mások vagy a szokásaim?",
    "evaluationTip": "A döntési mozgásteredet és tudatos választásaidat értékeld, nem a korlátok teljes hiányát.",
    "detailedHelp": "Mennyire van valódi beleszólásod a korodhoz illő döntésekbe – például időbeosztás, barátok, tanulás vagy szabadidő terén? Tudsz-e saját szempontokat mérlegelni, nemet mondani nyomásra, és szükség esetén tanácsot kérni? Az önállóság nem azt jelenti, hogy senkire nincs szükséged, és azt sem, hogy minden szabályt elutasítasz. Inkább azt, hogy egyre inkább felismered a lehetőségeidet, és tudatosabban választasz közülük. Gondolj arra is, mikor irányítanak a szokásaid vagy a közösségi média."
  },
  {
    "id": "E06",
    "title": "Egészség és jóllét",
    "shortDescription": "Mennyire figyelsz a testi és lelki egészségedre, a mozgásra, táplálkozásra és közérzetedre?",
    "verse": "Vagy nem tudjátok, hogy testetek a bennetek levő Szentlélek temploma, akit Istentől kaptatok, és ezért nem a magatokéi vagytok? Mert áron vétettetek meg: dicsőítsétek tehát Istent testetekben! - 1Korinthus 6,19–20",
    "guidance": "Az egészség, testi és lelki oldalról is érinti bennünket. Az ember nem csupán teljesítmény vagy megjelenés. Hanem a testére is gondot fordító, méltósággal rendelkező személy. Pihenni, táplálkozni, mozogni és figyelni a lelki terhelésre mind lehetnek gondoskodó lépések. Ugyanakkor egy betegség, fogyatékosság vagy nehéz időszak nem erkölcsi kudarc. Az igei kapcsolat a test értékére utal, nem az egészségi állapot vallásos minősítésére.",
    "reflectionQuestion": "Mi az az apró, megvalósítható dolog, amellyel jobban vigyázhatnék a testi vagy lelki jóllétemre?",
    "evaluationTip": "Az önmagadról való gondoskodás lehetőségeit és szokásait értékeld, ne a testedet vagy egészségi állapotodat.",
    "detailedHelp": "Arra gondolj, mennyire tudsz odafigyelni a tested és a lelked jelzéseire. Jut-e lehetőséged alvásra, mozgásra, rendszeres étkezésre és olyan tevékenységekre, amelyek jobb közérzetet adnak? Észreveszed-e, amikor túlterhelt vagy, és tudsz-e szólni valakinek, ha segítségre van szükséged? Nem azt pontozod, hogy betegségtől, nehézségtől vagy stressztől mentes vagy-e. Az egészségi állapot sok mindentől függ; itt az számít, mennyire tudod a lehetőségeid között támogatni saját jóllétedet."
  },
  {
    "id": "E07",
    "title": "Kapcsolataim",
    "shortDescription": "Mennyire vagy elégedett a családi, baráti és közösségi kapcsolataid minőségével?",
    "verse": "Úgy megszerette őt Jónátán, mint önmagát. Saul pedig magához vette őt azon a napon, és nem engedte, hogy visszatérjen apja házába. És szövetséget kötött Jónátán Dáviddal, mert úgy szerette őt, mint önmagát. Levette Jónátán a köpenyét, és Dávidnak adta, sőt a ruháját meg a kardját, az íját és az övét is. - 1Sámuel 18,1–4",
    "guidance": "A jó kapcsolatokban nem kell szerepet játszanunk ahhoz, hogy elfogadjanak. A barátság alapja lehet a bizalom, a tisztelet, a segítség és az egymásért vállalt felelősség. A Szentírás Dávid és Jónátán kapcsolatában mutat példát ilyen hűségre. A kapcsolatok ugyanakkor néha feszültséggel járnak. Egészséges határokat is szükséges kijelölni. Nem a barátok száma dönti el, mennyire vagy értékes, hanem az is számít, milyen minőségű kapcsolatokban élsz.",
    "reflectionQuestion": "Melyik kapcsolatomat szeretném több figyelemmel, őszinteséggel vagy tisztelettel ápolni?",
    "evaluationTip": "A fontos kapcsolataid minőségét és a bennük megélt bizalmat pontozd, ne a népszerűségedet.",
    "detailedHelp": "Ne a barátaid számát nézd, hanem azt, milyen érzés a fontos kapcsolataidban jelen lenni. Van-e valaki, aki meghallgat, akiben megbízol, és akinek te is tudsz támasza lenni? Mennyire tudtok tisztelettel beszélni, határokat tartani, különvéleményt elfogadni vagy konfliktus után közeledni egymáshoz? A családi, baráti és közösségi kapcsolatok eltérőek lehetnek. Ha egy kapcsolat nehéz, az nem feltétlenül a te hibád. Arra gondolj, mennyire érzed magad biztonságban, elfogadva és kapcsolódva."
  },
  {
    "id": "E08",
    "title": "Életcélok és jövőkép",
    "shortDescription": "Mennyire van határozott elképzelésed vagy célod a jövőddel kapcsolatban?",
    "verse": "Bízd az Úrra dolgaidat, akkor teljesülnek szándékaid - Példabeszédek 16,3",
    "guidance": "A jövőre gondolva egyszerre érezhetsz lelkesedést és bizonytalanságot. A célok segítenek irányt választani, de nem kell tizenévesen mindent végleg eldöntened. A Biblia a tervezést nem állítja szembe az Istenbe vetett bizalommal. Éppen ellenkezőleg: döntéseinket, erőfeszítéseinket és kérdéseinket is elé vihetjük. A céljaid időközben változhatnak, és egy kudarc nem jelenti azt, hogy elveszett a jövőd. A fontos inkább az, milyen értékek szerint lépsz tovább.",
    "reflectionQuestion": "Melyik jövőbeli célomhoz tudnék már most egy kicsi, reális lépést megtenni?",
    "evaluationTip": "A jövőddel kapcsolatos tájékozódásoddal és a következő lépések világosságával való elégedettségedet értékeld.",
    "detailedHelp": "Van-e valami, ami felé szívesen haladsz: továbbtanulás, hivatás, készség, kapcsolat vagy személyes fejlődés? Nem szükséges már most tudnod, milyen munkád lesz tíz év múlva. Az is elég, ha van egy-két számodra fontos irány, és fel tudsz ismerni egy következő, megvalósítható lépést. Gondolj arra is, hogy tudsz-e rugalmas maradni, ha egy terved változik. Az életedet nem egyetlen végleges döntés határozza meg."
  },
  {
    "id": "E09",
    "title": "Pihenés",
    "shortDescription": "Mennyire tudsz valóban feltöltődni, kikapcsolódni és szünetet tartani a teendők között?",
    "verse": "Ő pedig így szólt hozzájuk: Jöjjetek velem, csak ti magatok egy lakatlan helyre, és pihenjetek meg egy kissé! Mert olyan sokan mentek hozzá, hogy még enni sem volt idejük - Márk 6,31",
    "guidance": "A pihenés nem a munka jutalma, amelyet csak tökéletes teljesítmény után érdemlünk ki. Az embernek szüksége van a megállásra, csendre, örömre, kapcsolatokra és olyan tevékenységekre, amelyek feltöltik. Jézus nemcsak feladatot ad a tanítványoknak, hanem pihenésre is hívja őket. A kikapcsolódás formája személyenként eltérő lehet: valakit a mozgás, mást az olvasás vagy a beszélgetés tölt fel. Érdemes figyelned arra, valóban kipihentebb leszel-e attól, ahogyan a szabadidődet töltöd.",
    "reflectionQuestion": "Mi az, ami valóban feltölt, és hogyan tudnék több helyet adni neki az életemben?",
    "evaluationTip": "A pihenésed minőségét és feltöltő erejét pontozd, ne csupán a szabad órák számát.",
    "detailedHelp": "Nem egyszerűen azt kérdezzük, mennyi szabadidőd van, hanem hogy valóban feltölt-e. Alvás, mozgás, olvasás, zene, csend, játék, közösség vagy egy nyugodt séta: más-más dolog adhat erőt mindenkinek. Gondolj arra, hogy a pihenés után frissebbnek érzed-e magad, vagy ugyanúgy kimerült maradsz. Tudsz-e néha megszakítani egy feladatot, és van-e helye a hetedben a megállásnak? A pihenés nem jutalom, amelyet csak hibátlan teljesítmény után érdemelsz ki."
  },
  {
    "id": "E10",
    "title": "Tetteim és döntéseim",
    "shortDescription": "Mennyire állnak összhangban a mindennapi tetteid azzal, amit helyesnek tartasz?",
    "verse": "Legyetek az igének cselekvői, ne csupán hallgatói, hogy be ne csapjátok magatokat. - Jakab 1,22",
    "guidance": "Nem mindig könnyű azt tenni, amit helyesnek tartunk. Néha félünk a következményektől, máskor egyszerűen kényelmesebb hallgatni. Jakab arra bátorít, hogy a hit ne maradjon puszta ismeret: formálja a cselekedeteinket is. Ez megmutatkozhat az igazmondásban, a segítségnyújtásban, a bocsánatkérésben vagy abban, hogy kiállunk valaki mellett. A keresztyén élet azonban nem hibátlan teljesítmények gyűjtése: van helye a megbánásnak, a kegyelemnek és az újrakezdésnek is.",
    "reflectionQuestion": "Mi az a helyesnek tartott dolog, amelyet már régóta szeretnék megtenni, de halogatok?",
    "evaluationTip": "A saját elveid és tényleges döntéseid közötti összhanggal való elégedettséget pontozd.",
    "detailedHelp": "Gondolj egy-két friss helyzetre: amikor tudtad, mi volna helyes, hogyan cselekedtél? Például kiálltál-e valaki mellett, őszinte voltál-e egy kényelmetlen helyzetben, vagy tudtál-e bocsánatot kérni? Nem csak a nagy döntések számítanak: a hétköznapi apró tettek is megmutatják, mi fontos neked. Az értékelés nem hibátlansági vizsga. Ha valamit megbántál, az is lényeges lehet, hogyan igyekeztél helyrehozni, vagy mit tanultál belőle."
  },
  {
    "id": "E11",
    "title": "Felelősségvállalás",
    "shortDescription": "Mennyire vállalod a felelősséget a saját tetteidért, kötelezettségeidért és hibáidért?",
    "verse": "Mert mindenki a maga terhét hordozza. - Galata 6,5",
    "guidance": "Felelősnek lenni nem azt jelenti, hogy minden problémát egyedül kell megoldanod. Inkább azt, hogy felismered: döntéseidnek következményei lehetnek, és vannak területek, ahol rád is számítanak. A felelősség tanulható: mérlegelünk, hibázunk, jóvátesszük, amit lehet, és segítséget kérünk, amikor szükséges. Pál személyes teherhordásról szóló mondata nem mond ellent az egymás segítésére való felszólításnak. A kettő együtt mutatja a felelős és közösségben megélt életet.",
    "reflectionQuestion": "Mi az az egy feladat vagy döntés, amelyben most nagyobb felelősséget szeretnék vállalni?",
    "evaluationTip": "A saját vállalásaid kezelésével és döntéseid következményeivel való szembenézéssel való elégedettséget pontozd.",
    "detailedHelp": "Mennyire szoktad elvégezni, amit vállaltál, vagy időben jelezni, ha nem tudod? Ha hibázol, megpróbálod-e megérteni a következményeket, vállalni a saját részedet, és szükség esetén javítani rajta? A felelősség nem azt jelenti, hogy minden rosszért te vagy a hibás, vagy hogy mindig egyedül kell megoldanod mindent. Éppen a felelős döntés része lehet a segítségkérés és a többiek szempontjainak figyelembevétele."
  },
  {
    "id": "E12",
    "title": "Környezetem és teremtésvédelem",
    "shortDescription": "Mennyire figyelsz a téged körülvevő környezetre és a teremtett világ megóvására?",
    "verse": "Fogta tehát az Úristen az embert, és elhelyezte az Éden kertjében, hogy művelje és őrizze azt. - 1Mózes 2,15",
    "guidance": "A környezet nem csupán háttér az életünkhöz: otthonunk, közös felelősségünk és Isten teremtett világának része. A bibliai megbízatás nem korlátlan uralmat jelent, hanem gondoskodást. Ez a szemlélet megjelenhet abban, hogyan bánunk a vízzel, az energiával, a hulladékkal vagy a közösen használt terekkel. Egy ember nem tudja egyedül megoldani az egész világ problémáit, mégis vannak döntések, amelyekben felelősen cselekedhetünk. A kis lépések értelme nem a bűntudatkeltés, hanem a hűséges gondoskodás.",
    "reflectionQuestion": "Melyik környezetemért tudnék a következő héten egy konkrét, reális lépést tenni?",
    "evaluationTip": "A saját lehetőségeidhez mérten megélt gondoskodást és tudatosságot értékeld, ne a világ problémáinak megoldását.",
    "detailedHelp": "Figyeld meg, hogyan bánsz az iskolai, otthoni és természeti környezettel. Odafigyelsz-e a szemétre, a fölösleges fogyasztásra, a vízre, az energiára, az élőlényekre vagy a közös terek állapotára? Vannak-e apró szokásaid, amelyekkel vigyázol a rád bízott világra? Nem egyedül te felelsz minden környezeti problémáért; a lehetőségeidhez illő, tudatos lépések számítanak. A teremtésvédelem egyszerre jelent hálát, odafigyelést és felelősséget másokért is."
  }
];

const INTERCONNECTIONS = [
  {
    "id": "P01",
    "title": "Önismeret ↔ Kapcsolataim",
    "verse": "A második hasonló ehhez: „Szeresd felebarátodat, mint magadat.” - Máté 22,39",
    "guidance": "A kapcsolataink és az önismeretünk kölcsönösen alakíthatják egymást. Ha felismerem saját érzéseimet, szükségleteimet és határaimat, könnyebben tudom őszintén elmondani, mire van szükségem. Ugyanakkor egy barát visszajelzése vagy egy konfliktus ráébreszthet valamire, amit addig nem vettem észre önmagamban. Jézus a felebarát szeretetét úgy fogalmazza meg, hogy közben az önmagunkhoz való viszonyt is említi. Ez nem önzésre és nem önfeladásra hív, hanem tiszteletre: a másik ember sem eszköz, és én sem vagyok értéktelen. Ha a két területre nagyon különböző pontot adtál, az nem bizonyít problémát, hanem kérdést vethet fel: mi működik jól, és hol lenne szükséged támogatásra?",
    "reflectionQuestion": "Hogyan hatnak a fontos kapcsolataim arra, ahogyan önmagamra tekintek?"
  },
  {
    "id": "P02",
    "title": "Tanulás ↔ Életcélok",
    "verse": "Az embernek az értelme terveli ki útját, de az Úr irányítja járását. - Példabeszédek 16,9",
    "guidance": "A céljaink értelmet adhatnak a tanulásnak: másként állunk a feladatokhoz, ha értjük, miért fontosak. Fordítva is igaz: a tanulás közben új érdeklődési területek, képességek és lehetőségek derülhetnek ki, amelyek később módosítják a terveinket. A Példabeszédek könyve egyszerre veszi komolyan az emberi tervezést és az Isten vezetésére való ráhagyatkozást. Ez nem ment fel a felelősség alól, de megszabadíthat attól az elvárástól, hogy a jövőt már most hibátlanul megtervezd. Ha sokat tanulsz, mégsem világos, merre tartasz, az nem kudarc. És ha erős céljaid vannak, érdemes azt is megkérdezni, milyen napi szokások támogatják őket.",
    "reflectionQuestion": "Melyik mostani tanulási szokásom visz közelebb ahhoz a jövőhöz, amelyet szeretnék?"
  },
  {
    "id": "P03",
    "title": "Időgazdálkodás ↔ Pihenés",
    "verse": "Mindennek megszabott ideje van, megvan az ideje minden dolognak az ég alatt. - Prédikátor 3,1",
    "guidance": "Előfordul, hogy rengeteg mindent meg akarunk oldani, és a pihenés mindig az utolsó helyre kerül. Máskor éppen a halogatás miatt nem tudunk nyugodtan kikapcsolódni. A Prédikátor könyvének képe arra emlékeztet, hogy az életnek különböző ritmusai vannak. A munka, a tanulás, a közösség és a megállás nem feltétlenül versenytársak. A keresztyén életben a pihenés nem a felelőtlenség szinonimája, és az állandó elfoglaltság sem a jóság bizonyítéka. A két pontszám együtt érdekes kérdéseket vethet fel: sok az időm, mégsem pihenek? Vagy annyira elfáradok, hogy már a fontos dolgaimra sem marad erőm? A cél egy élhetőbb ritmus keresése, nem a „tökéletes” napirend.",
    "reflectionQuestion": "Milyen apró változtatás teremtene jobb egyensúlyt a teendőim és a valódi pihenésem között?"
  },
  {
    "id": "P04",
    "title": "Hit és értékrend ↔ Tetteim és döntéseim",
    "verse": "Ugyanígy a hit is, ha cselekedetei nincsenek, halott önmagában. - Jakab 2,17",
    "guidance": "Könnyű fontos értékeket felsorolni: igazságosság, szeretet, becsület, hűség. A nehezebb kérdés sokszor az, hogyan jelennek meg ezek akkor, amikor választanunk kell. Jakab apostol a hit és cselekedetek kapcsolatára irányítja a figyelmet. Nem azt tanítja, hogy jó tetteinkkel megvásárolhatjuk Isten szeretetét; arra figyelmeztet, hogy a hit nem marad következmények nélkül. A mindennapokban ez lehet egy őszinte mondat, egy el nem küldött bántó üzenet, segítségnyújtás vagy felelősségvállalás egy hibánkért. Ha az értékrendedet fontosnak érzed, de döntéseiddel elégedetlen vagy, ez nem végső ítélet önmagadról, hanem lehetőség a változásra és az újrakezdésre.",
    "reflectionQuestion": "Melyik számomra fontos értéket tudnám a következő napokban egy konkrét tettemmel megmutatni?"
  },
  {
    "id": "P05",
    "title": "Szabadság és önállóság ↔ Felelősségvállalás",
    "verse": "Mert ti, testvéreim, szabadságra vagytok elhívva; csak a szabadság nehogy ürügy legyen a testnek, hanem szeretetben szolgáljatok egymásnak. - Galata 5,13",
    "guidance": "Amikor szabadon dönthetünk, könnyű csak azt kérdezni: „Megtehetem?” A keresztyén etika hozzáteszi: „Mit tesz ez velem és másokkal?” Pál apostol a szabadságot összekapcsolja a szeretetből fakadó szolgálattal. A felnőtté válás során egyre több döntés kerül a saját kezünkbe, és ezzel együtt nő annak jelentősége is, hogy mérlegeljük a következményeket. Felelősséget vállalni nem azt jelenti, hogy minden helyzetben hibátlanul döntünk, hanem hogy tudunk belátni, változtatni, szükség esetén jóvátenni. A szabadság és a felelősség pontszáma nem kötelezően azonos. Lehet, hogy sok választási lehetőséged van, mégsem érzed magad önállónak; vagy komoly terheket viselsz, miközben kevés döntési szabadságot kapsz. Erről érdemes árnyaltan gondolkodni.",
    "reflectionQuestion": "Hol szeretnék nagyobb önállóságot, és milyen felelősséget vállalnék vele együtt?"
  },
  {
    "id": "P06",
    "title": "Egészség és jóllét ↔ Környezetem és teremtésvédelem",
    "verse": "Dávid zsoltára. Az Úré a föld és ami betölti, a földkerekség és a rajta lakók. - Zsoltárok 24,1",
    "guidance": "Az ember életminőségére hatással lehet a környezet, amelyben él: a levegő, a zaj, a közösségi terek, a lakóhely és az elérhető lehetőségek. Eközben a döntéseink bizonyos mértékig a környezetet is alakítják. A bibliai sáfárság szemlélete szerint nem korlátlan tulajdonosai vagyunk a teremtett világnak, hanem gondozásra kaptuk. Ez összekapcsolható az önmagunkról és a közös élettérről való felelős gondoskodással, de fontos a határokat is látni: sem az egészségi állapotunk, sem a környezeti problémák nem vezethetők vissza egyszerűen egyéni döntéseinkre. A pár tehát nem ok-okozati bizonyíték, hanem meghívás annak végiggondolására, mit kaptunk, miért lehetünk hálásak, és mire van valódi ráhatásunk.",
    "reflectionQuestion": "Van-e olyan változtatás a közvetlen környezetemben, amely nekem és másoknak is jót tehet?"
  }
];
