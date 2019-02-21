# nodemon + browsersync

-   nodemeon s'occupe de redémarrer le code du serveur
-   browser-sync s'occupe de notifier les pages web que quelque chose a changé

# usage

-   cloner le repo
-   se rendre dans le dossier du projet via le terminal
-   installer les dépendances du projet grace à npm: `npm install` ou la commande raccourcie `npm i`
-   lancer nodemon grace à npm via la commande `npm run dev` (définie dans le `package.json`)
-   le port d'écoute du serveur est 3000 dans le code, mais il faut se rendre sur localhost:3001 pour que browser-sync écoute les changements

voila, le serveur redémarre à chaque modif grace à nodemon et à chaque modif de la page html, browser-sync reload la page dans le browser.
