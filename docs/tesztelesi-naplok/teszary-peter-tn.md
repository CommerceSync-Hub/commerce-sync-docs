# Teszáry Péter - Tesztelési napló

## 2024-03-19

Hibanapló első bejegyzés.

<!-- ![alt text](<../.vitepress/dist/assets/img/Pasted image 20240319054723.png>)  -->

![alt text](<../img/Pasted image 20240319054723.png>)

A login oldalon a PasswordBox nem kapja meg ugyan azokat a beállításokat mint a többi mező. 

## 2024-03-24

A mai napon a dokumentációs oldalon dolgoztam. És végre sikerül a deployment a Github Pages-re. 
Szerettem volna a képeket hozzáadni a dokumentációhoz ahol csak lehet. Ezért létrehoztam egy img mappát a \commerce-sync-docs\docs\.vitepress\dist\assets mappában. Ide helyeztem a képeket, mert azt láttam, hogy a build után ide kerülnek a képek és minden egyéb fájl ami az oldalhoz szükséges. A probléma akkor bújt a felszínre, amikor buildeltem az oldalt. Sehogy sem akarta megtalálni a képeket. Viszont nem szerettem volna ha a képek a gyökér könyvtárban maradnak, mert az még sem esztétikus. Viszont állandóan hibára futottam:

```
  vitepress v1.0.0-rc.42

✖ building client + server bundles...
build error:
RollupError: Could not resolve "./.vitepress/dist/assets/img/woosync-auth.png" from "docs/installalas.md"
file: C:/Users/peter/Documents/GitHub/commerce-sync-docs/docs/installalas.md
    at error (file:///C:/Users/peter/Documents/GitHub/commerce-sync-docs/node_modules/rollup/dist/es/shared/parseAst.js:337:30)
    at ModuleLoader.handleInvalidResolvedId (file:///C:/Users/peter/Documents/GitHub/commerce-sync-docs/node_modules/rollup/dist/es/shared/node-entry.js:18059:24)
    at file:///C:/Users/peter/Documents/GitHub/commerce-sync-docs/node_modules/rollup/dist/es/shared/node-entry.js:18019:26
PS C:\Users\peter\Documents\GitHub\commerce-sync-docs> 

```

De jónéhány tesztelés után megtaláltam a megoldást. A gyökér mappában kell elhelyeznem az img mappát és abba a fájlokat. Ezek után már megtalálta a fájlokat, sikeres volt a build és sikeres a deployment is.

## 2024-03-25

A mai hiba a dokumentációs oldalon volt. Próbáltam megjeleníteni a logónkat a kezdőlapon, de sehogy sem sikerült. :dev státuszban rendben megjelent minden, de build után, preview-al már nem működik. Akárhogy probálkozom. A többi képi eleme rendben látszik, de a logo nem. 404 hibát kapok vissza a konzolban.

## 2024-03-26

A mai napon próbálom a bővítményben módosítani a kódot, hogy a genereált api kulcs a megfelelő helyen jelenjen meg. 
A korábbi kód az options táblába mentette azt, de ez így nem megfelelő. 

A korábbi kód, amely nem megfelelő helyre mentette az API kulcsot:

```
    function generate_api_key_callback()
  {
    // Ellenőrizzük, hogy van-e már mentett API kulcs
    $existing_key = get_option('woosync_api_key');
    
    if (!$existing_key) {
        // Ha nincs tárolt kulcs, akkor generáljunk egy újat
        $api_key = wp_generate_password(32, false);

        // Save the API key in the database
        update_option('woosync_api_key', $api_key);
    } else {
        // Ha már van tárolt kulcs, használjuk azt
        $api_key = $existing_key;
    }
```

A módosított kód:

```
function generate_api_key_callback()
  {
    global $wpdb;
    $table_name = $wpdb->prefix . 'woosync_api_keys';

    // Ellenőrizzük, hogy van-e már mentett API kulcs
    $existing_key = $wpdb->get_var("SELECT api_key FROM $table_name");

    if (!$existing_key) {
        // Ha nincs tárolt kulcs, akkor generáljunk egy újat
        $api_key = wp_generate_password(32, false);

        // Mentsük el az új API kulcsot az adatbázisba
        $wpdb->insert(
            $table_name,
            array(
                'api_key' => $api_key
            )
        );
    } else {
        // Ha már van tárolt kulcs, használjuk azt
        $api_key = $existing_key;
    }
```

Most már csak azt kell javítanom, hogy megjelenjen a settings oldalon is, ám lehet, hogy később ezt az opciót elhagyom. Felesleges.