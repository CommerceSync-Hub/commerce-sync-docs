import{_ as e,c as a,o as t,V as l}from"./chunks/framework.Bo4R94Is.js";const n="/commerce-sync-docs/assets/Pasted image 20240305214355.BZGstOBl.png",h=JSON.parse('{"title":"Teszáry Péter fejlesztői naplója","description":"","frontmatter":{},"headers":[],"relativePath":"fejlesztoi-naplok/teszary-peter-fn.md","filePath":"fejlesztoi-naplok/teszary-peter-fn.md"}'),s={name:"fejlesztoi-naplok/teszary-peter-fn.md"},o=l('<h1 id="teszary-peter-fejlesztoi-naploja" tabindex="-1">Teszáry Péter fejlesztői naplója <a class="header-anchor" href="#teszary-peter-fejlesztoi-naploja" aria-label="Permalink to &quot;Teszáry Péter fejlesztői naplója&quot;">​</a></h1><h2 id="_2023-10-09" tabindex="-1">2023-10-09 <a class="header-anchor" href="#_2023-10-09" aria-label="Permalink to &quot;2023-10-09&quot;">​</a></h2><p>Sokadik próbálkozásra sem tudtam installálni a node csomagokat amik a a package.json fileban vannak megadva. Próbáltam Windowson és próbáltam linux környezetben is. Azt hiszem a probléma azzal van, hogy közben update-elve lett a package.json és már nem találja a dependency-ket. Ezért holnap újra próbálkozom, de más módszerrel. Ezt csak azért írtam le, hogy ne felejtsem el, hogy hol tartottam.</p><h2 id="_2023-10-11" tabindex="-1">2023-10-11 <a class="header-anchor" href="#_2023-10-11" aria-label="Permalink to &quot;2023-10-11&quot;">​</a></h2><p>Tegnap megpróbáltam feltenni a node package-ket úgy, hogy feltettem a linux operációs rendszeremre egy Xampp-ot és ott hoztam létre WordPress környezetet. Így már működött az nmp install, bár az is kiderült, hogy egy 2019-es package.json fájlban foglalt csomagot telepítettem ami kicsit outdate-ed volt. Ezért módosítottam a package.json fájlt. Ezután már sikeres volt az update.</p><p>A mai napon megpróbáltam azt, hogy ugyan ezt a környezetet a DevKinsta nevű applikációval hozom létre. Windows esetén az volt a baj, hogy a Dockeres virtualizáció miatt egy virtuális elérési útvonalat kapott a node package installáláskor, így nem találta meg a “nem valós“ vagyis virtuális helyet. Ezért nem tudta telepíteni a node modulokat. Viszont linux rendszeren csont nélkül feltelepültek a modulok.</p><p>Éppen ezért egy .gitignore fejlba, bele is vettem a node modulokat, hogy azok feleslegesen majd ne legyenek commitolva a repozitoriba.</p><h2 id="_2023-11-11" tabindex="-1">2023-11-11 <a class="header-anchor" href="#_2023-11-11" aria-label="Permalink to &quot;2023-11-11&quot;">​</a></h2><p>A mai napon azon dolgoztam, hogy létrehozzam Vuepress-el a programcsomag dokumentációs oldalát. Az oldal működőképes, de egyelőre kizárólag lokálisan. A deploynál valamiért elhasal a client compile. Nem tudtam rájönni mi a baja. Egyébként is kicsit sérülékeny a Vuepress. 4-5 alkalommal futottam neki, mire sikerült a V.1-ből stabil verziót feltenni. Természetesen az újabb verziókat is kipróbáltam, de azok még kevésbé voltak stabilak. Felvettem magamnak új taskokat is a Jira-ba. A programtervek szöveges megírását, illetve a felületek tervezését.</p><p>Íme:</p><p>Leírni a működési folyamatokat szóban, aztán algoritmikusan ágrajzként. Ezután ezekhez a lépésekhez megtervezhetőek a különböző képernyőképek.</p><p>Elsőként a nagyból a kicsibe. Tehát elsőként a globális működés, majd egységekre bontva az apróbb folyamatok.</p><p>További tervem a mai és holnapi napra ezeket kivitelezni, illetve haladni a WordPress téma fejlesztésével. Ezzel egy időben a bővítmény fejlesztésébe is bele szeretnék fogni.</p><p>Azt is érdemes lesz már most összeírni, hogy a WordPress adatbázisból mely táblákra lesz szükség a desktop applikációnál.</p><h2 id="_2024-02-05-2024-02-11" tabindex="-1">2024-02-05 - 2024-02-11 <a class="header-anchor" href="#_2024-02-05-2024-02-11" aria-label="Permalink to &quot;2024-02-05 - 2024-02-11&quot;">​</a></h2><p>Ezen a héten létrehoztam a vizsgaremek desktop alkalmazást nulláról. A korábbi Kréta applikáció visszafejltése nehézkes, időigényes és sok hibalehetőséget tartalmazó opció lett volna. Éppen ezért arra jutottam, hogy nulláról hozom létre az egészet.</p><p>Jelenleg a következő oldalak (front end) vannak meg:</p><ul><li>Login</li><li>Add Product</li><li>Search Product</li><li>Welcome Page</li></ul><p>Illetve már a szineket is elkezdtem hozzáadni, hogy a vgéső állapot a lehető legjobban hasonlítson a designtervben szereplőre.</p><p>Alkezdtem a bővítmény fejlesztését is. De mivel a Sparse Checkout továbbra sem működik m egfelelően, ezért a saját Organization-ünk alá kezdtem el a kommitokat. Majd ezt fogom átmásolni a vizsgaremek repositoriba. Tehát duplán fogok dolgozni, ami rá nem jövök, hogyan bírhatom a megfelelő működésre a sparse checkoutot. Egyelőre nem akartam vele több időt elpazarolni.</p><h2 id="_2024-02-19" tabindex="-1">2024-02-19 <a class="header-anchor" href="#_2024-02-19" aria-label="Permalink to &quot;2024-02-19&quot;">​</a></h2><p>Nos, ez a fejlesztői sorozat tulajdonképpen a fejlesztői naplója lesz a projekt feladatomnak, amivel áprilisig végeznem kell.</p><p>A projekt során egy Desktop applikációt készítek el, amely segít a felhasználó számára egyszerűsíteni termékek feltöltését egy WordPress/WooCommerce webshopba.</p><p>3 komponensből, 3 programból fog állni. Az első egy C# desktop applikáció. Azért C# mert a feladat az volt, hogy ebben kell készülnie. Én Javaban szerettem volna, de a választás csak névlegesen volt lehetséges. A valóságban C# volt a kötelező.</p><p>Vannak már korábbi naplóbejegyzéseim, amelyeket ide, a poszt végére fogok beilleszteni, csak, hogy tényleg minden itt szerepeljen.</p><p>A fejlesztést nehezíti, hogy alapvetően Linux alatt fejlesztek, a C# alkalmazásnak viszont tartalmaznia kell olyan elemeket, amelyek csak Windows környezetben fejleszthetőek.</p><p>Illetve további nehézség még, hogy egy külön Github repóba kell feltölteni a kódokat, ezért külön user/email cím használata is kötelező.</p><p>A további nehézségekről is fogok még írni, illetve hogy milyen furcsa tapasztalataim voltak. Minden esetre ez most itt a bevezető.</p><p>A cél az, hogy minden nap 2 órát tudjak rászánni a projektre (minimum) és, hogy a fejlesztői naplót itt vezessem, amit később a fejlesztés repójába is fel fogok tölteni. Így párhuzamosan tudok haladni, és követhető lesz a fejlesztés is.</p><h2 id="_2024-02-20" tabindex="-1">2024-02-20 <a class="header-anchor" href="#_2024-02-20" aria-label="Permalink to &quot;2024-02-20&quot;">​</a></h2><p>Kezdjük az elején. Legyen ez az igazi intro. Tehát a feladat kritériumai. Desktop applikáció. Webes applikáció ami HTML, CSS, BootStrap és JavaScript-et használ. Legyen API kapcsolat, autentikáció. Adatbázis és reszponzivitás.</p><p>Egy programcsomagra gondoltam, ami egyszerűvé teszi asztali környezetből a termékek feltöltését egy WooCommerce webshopba.</p><p>3 részre bontottam.</p><ol><li><p>Desktop applikáció, amit sajnos csak C#-ban lehet elkészíteni. Itt az MVVM megközelítést alkalamazom. Ez lesz a Desktop applikáció, aminek lesz egy adatbázisa, ami tárolja az egyes termékeket.</p></li><li><p>Lesz egy WordPress bővítmény, ami elvégzi az autentikációt, az adatbázis és képek szinkronizációját és természetesen a cronjob-ot.</p></li><li><p>Lesz egy BootStrap alapú WordPress téma, ami minden képernyőméreten jól használható. Tehát extraként bejön még a PHP.</p></li></ol><p>Most már, hogy tisztázódtak a projekt kritériumai, elmesélem mi történt ma. Létrehoztam a Desktop applikációhoz az AddProductView összes mezőjét. Létrehoztam a ModifyProductView mezőit, valamint a GlobalMenu.xaml-t a globális menühöz.</p><p>Ezen kívül még a Login oldalt próblátam rendbe tenni, de amikor láttam a 11 hibát, akkor azt gondoltam, hogy mára ennyi, majd folytatom.</p><p>Holnap ezeket szeretném rendbe tenni. A globális menüt, a hibákat, illetve szeretnék már létrehozni egy adatbázist is a szinkronizálandó menükkel együtt.</p><h2 id="_2024-02-26" tabindex="-1">2024-02-26 <a class="header-anchor" href="#_2024-02-26" aria-label="Permalink to &quot;2024-02-26&quot;">​</a></h2><p>Néhány nappal megcsúsztam a fejlesztéssel. Egyszerűen a munkám és az iskola annyi időt elvett, hogy sehogy sem jutott időm csinálni a projektet.</p><p>Minden esetre...</p><p>A mai napon létrehoztam az adatbázist a desktop applikációhoz. Az adatbázis 3 táblát tartalmaz: User, Websites és Products. Hiszen a cél az, hogy a desktop applikációban létrehozott termékeket szinkronizálni tudjuk majd a weboldal adatbázisával.</p><p>Ezekhez rendelkezésre állnak az adattípusok és minden más ami szükséges. Természetesen ez nem a végleges változat, de feladatként megkaptuk, hogy mutassuk be az adatbázisunkat.</p><p>Létrehoztam a kapcsólódó EK diagrammot is. Ami azóta korrigálva lett, és két további tábla került beszúrásra, hogy a funkciók kezelése logikusabb és egyszerűbb legyen</p><p>A célom a hétre, hogy befejezzem a FrontEnd részét a Desktop applikációnak és valamilyen alap kapcsolat is legyen már az adatbázissal.</p><p>Szeretném, ha a design már a helyére kerülne és hogy egy stíluslapon lehessen formázni program elemeit. Részben ezért is szerettem volna Java-ban megírni a programot, mert akkor a Desktop applikációhoz, a bővítményhet és a WordPress témához is BootStrap-et tudtam volna használni. De most már ezzel kell tovább menni.</p><p>Holnap jelentkezem a további fejlesztésekkel.</p><h2 id="_2024-03-02" tabindex="-1">2024-03-02 <a class="header-anchor" href="#_2024-03-02" aria-label="Permalink to &quot;2024-03-02&quot;">​</a></h2><p>A következő néhány bejegyzés (a 10. napig) gyors egymás utánabn fog követhezni. Nem volt időm megírni őket, csak bedobtam néhány kulcsszót azért, hogy tudjam mit csináltam aznap. De utólag kifejtve, sikerült megírnom a bejegyzéseket. Ezeket fogom feltenni.</p><p>A mai napon feláldoztam az asztali gépemet is, hogy azon is fusson a Windows. Mechaniukus dual boot-hoz beletettem a korábbi laptopom SSD meghajtóját a gépbe, amin Windows fut. Próbáltam kialakítani a Laptopomon lévő fejlesztőkörnyezetet és ott klónozni a vizsgaremek repository-t. Itt hibát írt ki ezért a vasárnap többi része arra ment el, hogy töröljem és újra installáljam a Visual Studio-t. Így már működőképessé vált a projekt.</p><p>Tehát a mai nap tulajdonképpen megint a Windowsos környezet rejtelmeinek feltárására ment el. Nem véletlen, hogy nem szeretem ezt az operációs rendszert. A későbbiekben tapasztalni fogom (csak mert ezt utólag írom a bejegyzéshez), hogy arra is képes a Microsoft terméke, hogy míg az egyik gépen hiba nélkül sem fut le a fejlesztés alatt álló program, addig a másik gépen sok-sok hibával is elindul.</p><p>Csak a Linux.</p><h2 id="_2024-03-03" tabindex="-1">2024-03-03 <a class="header-anchor" href="#_2024-03-03" aria-label="Permalink to &quot;2024-03-03&quot;">​</a></h2><p>A mai napon mindent UserControllá alakítottam, kivéve a LoginPage és MainWindow xaml fájlokat. Ma megpróbálom összekötni a különböző elemeket és a főmenüt, hogy már összelinkelve működhessen a navigáció. Ehhez utána kell olvasnom, hogy mit és hogyan kell.</p><p>Illetve a szineket szeretném véglegesíteni, valamint a mezőket, gombokat. Szeretném ha egységes lenne és jelentős mértékben hasonlítana ahhoz ami a design tervben szerepel. Mind az oldalak tekintetében, az elrendezésben és szineiben.</p><p>Ezzeh egy style.xaml-ben fogom elhelyezni az ez ezekre vonatkozó stílusokat. Update. Az oldalak lekerekítésével megküzdöttem, mert nehezen lehetett beállítani. Majd végül megtekintve a végeredményt elég csúnyán nézett ki a UI. Éppen ezért elvetettem, hogy majd az oldalak, és általában a program sarkainál a rádiusz egy kicsi kerekdedebb lesz.</p><p>A gombok szineivel küzdök még, ugyanis, ha beállítok egy fő színt a betűkhöz, akkor minden más is átveszi. Tehát a gombok betűi is. Ez azért nem jó, mert az alap betűszín sötét, míg a gombokon elhelyezett felirat pedig világos kellene, hogy legyen. Persze, ha lehetne használni CSS-t, azon belül is BootStrap-et, ami elvárás a programok írásakor, akkor simán meg lehetne oldani elég sok mindent.</p><p>elég sokat olvastam utána és csak nagyon nehezen kivitelezhető, hogy &quot;megegye&quot; a Bootstrap osztályokat a WPF, sőt, ha jól tudom ezt csak a korábbi verziókban lehetett megoldani. Még egy indok, amiért Java-ban szerettem volna megcsinálni a fejlesztést.</p><p>Mindegy, most már ez van, ezt kell szeretni. Tehát még a szinekkel bajlódom, de az is lehet, hogy átmenetileg elengedem a dolgot és a végén ha lesz még időm, akkor visszatérek az próságok kijavítására.</p><h2 id="_2024-03-05" tabindex="-1">2024-03-05 <a class="header-anchor" href="#_2024-03-05" aria-label="Permalink to &quot;2024-03-05&quot;">​</a></h2><p>A mai napon átstruktúrálom az oldalt és összekötöm az elemeket. Amit nem értek az az, hogy Page-ek helyett elkezdtem UserControl-t használni, mert azt az információt kaptam, hogy ezekkel megszűnnek a navigációs nyilak a bal felső sarokban. Ennek ellenére továbbra is megjelennek, így most azzal próbálkozom, hogy a különböző View-kat, Window alapokra helyezem. Ez később egyébként hasznos is lehet, mert tervben van az is, hogy egy termék módosításakor nem történne ablak váltás, hanem kényelmesen egy felugró ablakban lehetne szerkeszteni a termékeket.</p><p>Tehát Ma beillesztettem a GlobalMenu-t a MainWindow-ba. A MainView-t töröltem, mert nem láttam értelmét. Ugyan ez történt a WelcomePageView-al is, mert felesleges volt ezért egy külön oldalt használni. Innentől kezdve törekszem arra, hogy a program minél ésszerűbb, jobban struktúrált és felesleges elemektől mentes legyen.</p><p>További probléma, hogy nem tudom megjeleniteni a logót. Hiába próbáltam ki mindenféle elérési útvolnalat.</p><p>Tehát a problémák:</p><p>A logó nem jelenik meg. Az oldalakat UserControl-ról át kell helyezni Window alapokra, mert továbbra is megjelennek a navigációs nyilak. --&gt; Ezekből Page-ek lettek mert a Window-al nem működött...</p><p>Update. A logót sikerült beillesztenem. Most már működik. Az egyszerű módszer az volt, hogy behivatkoztam a design felületen az elemre kattintva majd kiválasztva az elérési útvonalat. Így már működött.</p><p>Az oldalak közti navigáció is működik. Illetve az adatbázist is sikerült csatlakoztatnom, így már a termék felvitelekor le is tárolja az adatbázisban. A Probléma csk az, hogy egyelőre felülírja a korábbi terméket. De már látom a megoldást.</p><p>Valamint az egész Search Product ablakot inkább beépítem a kezdőlapba, hiszen ott egyébként sincs semmi. Az AddProduct pedig majd felugró ablakként fog megjelenni. így az &quot;Add Product&quot; gombhoz hozzá tudom adni az adatbázis lezárása funkciót. Tehát megszakítja majd minden egyes alkalommal az adatbázis kapcsolatot.</p><p>A Design-ban is módosítottam a szineket, a bordereket és az elrendezést. Kezd végre alakot ölteni a program.</p><p><img src="'+n+'" alt="alt text"></p><p>Holnap szeretném a Search Product ablakban megjelenííteni a rögzített termékeket is. És akkor már azt hiszem elkezdődhet a bővítmény fejlesztése is</p><h2 id="_2024-03-06" tabindex="-1">2024-03-06 <a class="header-anchor" href="#_2024-03-06" aria-label="Permalink to &quot;2024-03-06&quot;">​</a></h2><p>A mai napon egy kicsit átvariáltam a Desktop applikációt. Létrehoztam egy NewProductWindow-t az AddProductView helyett. Így egy felugró ablak jön létre a termék hozzáadásánál, ahelyett, hogy elnavigálnánk bárhova. Illetve a Search ProductView-nál szintén létrehoztam egy EditProductWindowt, ami a &quot;Modify&quot; gombra kattintva ugrik fel és majd az adott terméket lehet módosítani vele. Így szintén nem kell elnavigálni a termékek listájáról, de egyszerűbbé teszi a felhasználást.</p><p>A mentéskor természetesen el is menti a módosításokat. Az SQLite egy tökéletes választás az átmeneti állapotra. Később majd szeretném a backendet is megírni hozzá az api kapcsolat és az összekötés miatt, de egyelőre tökéletesen kiszolgálja azt amire szükség van.</p><p>Amíg tesztelem a NewProduct funkciót, addig egy plusz menüpontot hoztam létre. Nem is törlöm a korábbi Add Product menüpontot amíg ez nem működik.</p><p>Továbbá szeretnék egy-egy címsor adni minden oldalhoz, ablakhoz, hogy tudja a felhasználó, hogy éppen hol jár.</p><p>Még egy extra dolog, hogy majd meg kell oldanom, hogy a SearchProductView esetében legyenek apró checkboxok a termékek mellett, amik inkáb radio buttonként funkconálnak. Ezekre azért van szükség, hogy a felhasználó kijelölhesse, melyik terméket szeretné szerkeszteni. Vagyis csak azt tudja kijelölni. Csoportos szerkesztéssel egyelőre nem szeretném bonyolítani a programot. Inkább legyen stabilan működő. De már majdnem a finishben.</p><h2 id="_2024-03-10" tabindex="-1">2024-03-10 <a class="header-anchor" href="#_2024-03-10" aria-label="Permalink to &quot;2024-03-10&quot;">​</a></h2><p>A mai napon ismét elővettem a Woosync WordPress bővítmény mappáját.</p><p>Ez a plugin fogja szolgálni az autentikációt és szinkronizációt a Desktop applikáció (C#) és a WordPress adatbázisa között.</p><p>Utoljára 2023 októberében commitoltam a bővítmény repositoryjához, mert azóta rengeteg minden történt. Természetesen foglalkoztam a bővítménnyel, de most az elkövetkező napokban aktívan szeretném fejleszteni. Így azzal kezdtem, hogy a korábbi kódot töröltem és átstrukturáltam a repositoryban lévő mappákat, fájlokat.</p><p>Az index.php fájlal kezdtem, ahol a főbb funkciókat hoztam létre, majd ehhez kapcsolódóan a különbőző alosztályokat.</p><p>Erre azért volt szükség, mert igy nuilláról kezdve ennyi idő után végre képbe kerültem a bővítménnyel és nem lesz benne annyi sallang.</p><p>Lesz egy Autentikációs osztály, ahol az API kulcsot lehet legenerálni.</p><p>Lesz egy Cron osztály, ahol a szinkronizációval kapcsolatos beállítások lesznek, illetve lesz egy Intro rész, ahol a bővítmént és a működést mutatom be. Némi leírással és linkekkel, például az asztali alkalmazáshoz és a témához. Nagyjából ennyi.</p><p>Ma ezeket sikerült abszolválnom, holnap megyek tovább a többi részével.</p><h2 id="_2024-03-12" tabindex="-1">2024-03-12 <a class="header-anchor" href="#_2024-03-12" aria-label="Permalink to &quot;2024-03-12&quot;">​</a></h2><p>Ma létrehoztam az autentikációért felelős funkciót és osztályt. Nehezen bírtam működésre, mert miután az index.php-ban megírtam a kódot, és a kapcsolódó js fájlt. Rájöttem, hogy érdemes lenne mindent külön szervezni. Tehát minden classt, js fájlt, css-t és minden mást, ahogyan illik. Így akkor struktúrájában és modularitásában is &quot;szebb&quot; lenne a program.</p><p>Éppen ezért a különszervezés okozta a legnagyobb gondot, mert mire összekapcsoltam az osztályokat és funkciókat, addigra jó sok idő eltelt. Küzdelmes volt, de megérte. Az alábbiak szerint alakult a jelenlegi struktúra:</p><p>Woosync │ index.php │ README.md │ uninstall.php │ ├───css │ (CSS files) │ ├───js │ (JavaScript files) │ ├───assets │ (Asset files such as images, fonts, etc.) │ └───includes (PHP include files)</p><p>Természetesen ez még változhat.</p><p>Az includes-ban található a woosync-authentication.php. A lényeg, hogy ez a funkció képes arra, hogy generáljon egy random API kulcsot, amit el is tárol az adatbázisban. Ezt a kulcsot meg is jeleníti a bővítmény admin felületén. Van lehetőség másolásra egy gomb segítségével. Ez a vágolapra helyezi a kulcsot.</p><p>Illetve van lehetőség arra, hogy Reset-eljük a kulcsunkat. Ez akkor lehet hasznos, ha valami miatt szeretnénk ha a kulcs nem működne tovább. Például jogosulatlan felhasználás. Ekkor a kulcs az adatbázisból is törlődik. Ma ennyit sikerült abszolválnom. Holnap újúlt erővel folytatom.</p><h2 id="_2023-03-13" tabindex="-1">2023-03-13 <a class="header-anchor" href="#_2023-03-13" aria-label="Permalink to &quot;2023-03-13&quot;">​</a></h2><p>A Mai napon létrehoztam a Cron osztályt. Pontosabban a Settings menüpontot a bővítményben (woosync-settings.php). Ez arra szolgál, hogy itt lehet beállítani a Cron Job-ot. Hogy mikor fusson le. Havi, Heti, Napi, vagy óránkénti intervallumokban. Illetve még van egy &quot;Minden percben&quot; lehetőség, amelyre kattintva megjelenik egy input mező, ahol számokkal lehet megadni, hány percenként fusson le a cronjob. Ez utóbbi természetesen csak akkor jelenik meg, hogy ha kiválasztottuk a legördülő select mezőből a percenkénti futtatást.</p><p>Ezt a beállítást el is menthetjük.</p><p>Van még egy Sync Now opció, ahol azonnal futtathatjuk a szinkronizációt. Ez megnézi, hogy történt-e változás a termékek, vagy felhasználók adattábláiban.</p><p>Ez a funkció még csak elő van készítve, de nem működik, mert ehhez még kell a kapcsolat a desktop applikációval. Minden esetre kiírja, hogy a szinkronizáció folyamatban van.</p><p>Illetve a mai napon adtam még a bővítményhez Bootstrap CSS és JS fájlokat is. Hiszen ez is kérés volt. Valamint saját stíluslapot is kapott a bővítmény, mert néhány dolgot szeretnék egyénileg formázni.</p><p>Amit meg kell oldani, hogy a php-val létrehozott gombokra is alkalmazhatóak legyenel a Bootstrap osztályok, illetve az API kulcs generálásakor is minden gomb felvegye az osztályok attribútumait. Egyelőre nem sikerült megoldani, mert nem mind jelennek meg a betöltéskor. Van amelyik csak később egy-egy esemény hatására, ezért furcsa mód nem veszi át a CSS attribútumokat. Tehát ezt is meg kell oldanom.</p><p>Remélem tudom tartani a heti tervet és akkor a jövő héten már a témával is tudok foglalkozni. Az is sok idő lesz még biztosan.</p><h2 id="_2024-03-14" tabindex="-1">2024-03-14 <a class="header-anchor" href="#_2024-03-14" aria-label="Permalink to &quot;2024-03-14&quot;">​</a></h2><p>Adatbázis hiba.</p><p>A mai napon ellenőriztem az API kulcsok fellelhetőségét. Erre azért van szükség, mert később ez által tudom validálni a kapocsolatot a desktop és a wordpress között. A probléma ott rejlik, hogy update option helyett mást kell használni.</p><p>Illetve a WooSync-sync.php-n dolgoztam. Kiegészítettem és felkészítettem a külső adatbázis használatára.</p><h2 id="_2024-03-18" tabindex="-1">2024-03-18 <a class="header-anchor" href="#_2024-03-18" aria-label="Permalink to &quot;2024-03-18&quot;">​</a></h2><p>A mai napon bemutattuk a vizsgaremeket az óránkon. Szinte teljesen jól működött. Azt a visszajelzést kaptuk, hogy ez így még kevés. Több menüpontunknak kellene, hogy legyen és több menüpontnak kellene tartalmaznia lekérdezést, keresést és törlést is.</p><p>Ami azért problémás a számomra, mert a desktop applikációnak pont az lenne a lényege, hogy minél egyszerűbben működjön és minél kevesebb lehetősge legyen a felhasználónak. Vagyis, hogy a felhasztnálása a lehető legyegyszerűbb legyen.</p><p>Most, a leadás előtt 1 hónappal, új funkciókat kell implementálni, amelyek a tervben nem is szerepeltek. Némi fejetlenséget érzek a dologban, de ha ezt kell kivitelezni, akkor ezt kell kivitelezni.</p><p>Tehát a következő napokban, ezt a módosítást kell kitalálnom és kiviteleznem.</p><h2 id="_2024-03-19" tabindex="-1">2024-03-19 <a class="header-anchor" href="#_2024-03-19" aria-label="Permalink to &quot;2024-03-19&quot;">​</a></h2><p>A mai naponTisztáztam és feltöltöttem a Fejlesztői naplókat, illetve elkezdtem a tesznaplók írását is.</p><p>Továbbá, az oktatóm javaslatára, létrehozok egy új menüpontot is a ProductBridge desktop applikációban, amelyben újabb hozzáadási, törlési és listázási lehetőséget fogok implementálni. Ezúttal a felhasználók kezelésére.</p><p>Létrehozok egy Users.cs osztályt. Majd egy UsersViewPage-et is.</p><h2 id="_2024-03-20" tabindex="-1">2024-03-20 <a class="header-anchor" href="#_2024-03-20" aria-label="Permalink to &quot;2024-03-20&quot;">​</a></h2><p>A mai napon a WooSync bővítménnyel foglalkoztam kicsit. Elsőként arra próbáltam rájönni, hogy miért nem vesznek át bizonyos Bootstrap osztályokat bizonyos gombok. A Console-ban hibaüzenetként azt találtam, hogy nem elérhető a bootstrap.min.map.css és a bootstrap.min.js.map fájlok. Ezeket pótoltam a repositoryban. A hiba eltűnt, de továbbra sem oldódott meg a kérdés. Az !important attribútumot használva, már valamelyest működött a dolog, bár nem túl elegáns megoldás, de továbbra sem hibátlan az összkép, ezért tovább nyomozok. ID-ra alkalmazva a CSS attribútumokat rendben működik a dolog, de ez szintén nem túl elegáns megoldás, ezért ezt szeretném a lehető legjobban abszolválni ha lehet.</p><p>Tehát most ez kerül a hibanaplóba.</p><h2 id="_2024-03-21" tabindex="-1">2024-03-21 <a class="header-anchor" href="#_2024-03-21" aria-label="Permalink to &quot;2024-03-21&quot;">​</a></h2><p>A mai napon megterveztem miként fog majd működni az autentikáció és a beléptetés. A tervem az, hogy első belépéskor (First Attempt) kell megadni a WooSync bővítmény álltal generált API kulcsot és URL-t, majd a mentés gombra kattintvam az adatok ellenőrzése után, szinkronizálás történne a két adatbázis között(csak a felhasználók). Ha lefutott a szintkronizálás, akkor a User már be tud lépni a WordPress felhasználójával és jelszavával.</p><p>Lenne az applikációban/programban egy RESET gomb is, ami pedig minden adatot törölne a lokális adatbázisból.</p>',119),i=[o];function r(m,k,z,p,g,d){return t(),a("div",null,i)}const y=e(s,[["render",r]]);export{h as __pageData,y as default};
