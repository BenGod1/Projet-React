# Projet REACT
Dans le cadre du cours de React Native, il fallait faire un projet en ReactJS afin de s'entrainer. J'ai donc fait un site sur les fromages normands.

## Création du projet
Pour la création du site j'ai entré ces deux commandes : 
```
npx create-react-app projet0102
npm install react-bootstrap bootstrap
```
La première commande est pour créer le dossier du projet avec tous les fichiers nécéssaires.
La seconde commande est pour installer bootstrap qui sera utilisé dans le projet.

## La Navbar
La navbar est de couleur blanche afin de se différencier du reste du site. Sur la gauche de la Navbar il y a écrit "Normandie" avec le logo de la région. Sur la droite, un "Qui sommes nous" qui redirige sur le site de la région Normandie.

## Cards et Modales
Le corps du site est composé de cards bootstrap affichant le nom, une image et une description des fromages normands. Ces données son stockées sur un fichiers .json. La description est limité en nombre de caractères. Pour afficher la description complète, il faut clique sur le bouton "Voir plus" qui affiche dans un modale le descriptif complet du fromage. L'autre bouton "En savoir plus" redirige sur la page Wikipédia du fromage concerné. La page Wikipédia s'ouvre dans un nouvel onglet grâce au "target=_blank" dans le code.

## Background
J'ai mis le drapeau de la Normandie en background de mon site. J'ai fait en sorte que les composants du site s'affiche par dessus. Pour afficher les composants il faut donc passer par "background.js" au lieux de "index.js"

## API
J'ai utilisé l'API de Youtube fournit par Google dans sa version gratuite. Afin d'utiliser l'API j'ai installé Axios à l'aide de cette commande : 
```
npm install axios
```

# DB
Considérant que 4 fromages soient trop peu pour garnir une base de donnée, j'ai ajouté un bouton "Autres fromages français" qui affiche dans une modale le nom et la description de plusieurs fromage. J'ai utilisé SupaBase pour la base de donnée et ai fait cette commande pour l'installer dans mon projet : 
```
npm install @supabase/supabase-js
```
