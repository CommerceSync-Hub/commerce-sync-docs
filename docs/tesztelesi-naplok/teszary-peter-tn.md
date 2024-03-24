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