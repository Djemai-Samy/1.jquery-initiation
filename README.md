# JQuery: Introduction

## [Page officiel du cours JQuery: Introducion](https://djemai-samy.com/posts/1.jquery-introduction)

![Image du cours: JQuery: Introduction](https://djemai-samy.com/blog/2.programmation/1.web/3.javascript/jquery/1.jquery-initiation/1.jquery-introduction/1.jquery-introduction.png)

La branche 'main' contient le code de départ de chaque chapitre de la série de cours.

Ce premier cours de la série sur JQuery permet de découvrir les bases de cette librairie JavaScript largement utilisée dans le développement web.

Nous allons voire en quoi consiste la libraire et comment l'integrer dans un projet.

---

## Programme

[Vous pouvez suivre la serie complète directement sur le site:](https://djemai-samy.com/posts/0.jquery-initiation)

1. [JQuery: Introduction](https://djemai-samy.com/posts/1.jquery-introduction.article)
2. [JQuery: Manipulation DOM](https://djemai-samy.com/posts/2.jquery-dom.article)
3. [JQuery: Les événements](https://djemai-samy.com/posts/3.jquery-events.article)
4. [JQuery: Les Animations](https://djemai-samy.com/posts/4.jquery-animations.article)

## Branches sur GitHub

Chaque article à comme point de départ la branche **main** et possèdent tous une branche sur le dépot, contenant le code finale et complet de l'article:

- [main](https://github.com/Djemai-Samy/1.jquery-intiation)
- [1-introduction](https://github.com/Djemai-Samy/1.jquery-intiation/tree/1-introduction)
- [2-dom](https://github.com/Djemai-Samy/1.jquery-intiation/tree/2-dom)
- [3-events](https://github.com/Djemai-Samy/1.jquery-intiation/tree/3-events)
- [4-animations](https://github.com/Djemai-Samy/1.jquery-intiation/tree/4-animations)

---

## Branches sur GitLab

Chaque article à comme point de départ la branche **main** et possèdent tous une branche sur le dépot, contenant le code finale et complet de l'article:

- [main](https://gitlab.com/tutoriels-dev/1.web/3.javascript/jquery/1.jquery-initiation)
- [1-introduction](https://gitlab.com/tutoriels-dev/1.web/3.javascript/jquery/1.jquery-initiation/-/tree/1-introduction)
- [2-dom](https://gitlab.com/tutoriels-dev/1.web/3.javascript/jquery/1.jquery-initiation/-/tree/2-dom)
- [3-events](https://gitlab.com/tutoriels-dev/1.web/3.javascript/jquery/1.jquery-initiation/-/tree/3-events)
- [4-animations](https://gitlab.com/tutoriels-dev/1.web/3.javascript/jquery/1.jquery-initiation/-/tree/4-animations)

---

## Description

Cette série de cours vise à montrer comment utiliser la librairie JQuery avec le langage JavaScript pour développer des applications web interactives et dynamiques.

Les cours couvriront les concepts clés de JQuery, notamment la manipulation du DOM, la gestion des événements, les animations et les effets.

---

## Prérequis

Pour suivre cette serie d'inititaion, vous devez avoir une expérience pratique avec HTML et CSS et une compréhension de base du langage JavaScript.

- [***Initiation à HTML.***](https://djemai-samy.com/posts/0.html-initiation)
- [***Initiation à CSS.***](https://djemai-samy.com/posts/0.css-initiation)
- [***Initiation au language Javascript***](https://djemai-samy.com/posts/0.javascript-initiation)

---

## Objectifs

À la fin de ce chapitre, vous serez en mesure de :

1. **Comprendre** les fondamentaux de JQuery.
2. **Savoir** comment **intégrer** JQuery dans une **page** web
3. **Comprendre** l'importance de JQuery pour **simplifier** la programmation web

---

## Mise en place de l'environnement

### Cloner depuis ur GitHub

Vous pouvez commencer à suivre le cours en clonant le branche **main**:

```bash
git clone https://github.com/Djemai-Samy/1.jquery-intiation
```

---

### Cloner depuis ur GitLab

Vous pouvez commencer à suivre le cours en clonant le branche **main**:

```bash
git clone https://gitlab.com/tutoriels-dev/2.web/3.javascript/jquery/1.jquery-initiation
```

```bash
📦1.jquery-initiation
  ┣ 📜index.js
  ┣ 📜index.css
  ┗ 📜index.html
```

---

## JQuery c'est quoi?

[***JQuery est une librairie JavaScript***](https://jquery.com/)

Elle a été **créée en 2006** par John Resig et a rapidement **gagné** en **popularité** grâce à sa **simplicité** et son **efficacité**.

Aujourd'hui, elle est **utilisée** par de **nombreux développeurs** web pour **créer** des **sites web** **dynamiques** et **interactifs**.

---

L'**utilisation** de **JQuery** présente de nombreux **avantages** pour les développeurs web.

Tout d'abord, elle permet de **simplifier** la **manipulation** du **DOM** en fournissant des fonctions prêtes à l'emploi.

Cela permet de **gagner du temps** et **d'augmenter l'efficacité** dans la programmation.

---

De plus, JQuery est **compatible** avec la plupart des **navigateurs web**, ce qui **facilite** la création de sites web **multiplateformes**.

Enfin, elle permet de **réduire** la **quantité de code** nécessaire pour **effectuer** des **tâches courantes**, ce qui rend le **développement** plus **rapide** et plus **facile**.

---

### Comment intégrer JQuery

Il existe **plusieurs façons d'intégrer JQuery** dans une page web.

- [***Documentation officiel de JQuery***](https://jquery.com/download/)

### Utiliser un CDN

La **méthode** la plus **courante** consiste à **utiliser** un Content Delivery Network (**CDN**) pour **charger** la **librairie** JQuery à partir d'un **serveur externe**.

Cela permet de **réduire le temps de chargement** de la page et **d'augmenter la vitesse** de navigation.

- [***Documentation officiel de JQuery sur le CDN***](https://jquery.com/download/#using-jquery-with-a-cdn)
- [***Liste des versions CDN de JQuery***](https://releases.jquery.com/)

Une fois la version choisie, vous pouvez **cliquer** sur `minified`, pour **récuperer** le code à **coller** dans votre poge web:

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CDN de JQuery -->
    <script src="https://code.jquery.com/jquery-3.6.4.slim.min.js" integrity="sha256-a2yjHM4jnF9f54xUQakjZGaqYs/V1CYvWpoqZzC2/Bw=" crossorigin="anonymous"></script>

    <!-- Votre script -->
    <script src="./index.js" defer></script>

    <title>JQuery: Introduction</title>
  </head>
  <body>
    <h1>JQuery: Introduction</h1>
    <p>
      Ce premier cours de la série sur JQuery permet de découvrir les bases de cette librairie JavaScript largement utilisée dans le développement web.
    </p>
    <p>
      Nous allons voire en quoi consiste la libraire et comment l'integrer dans un projet.
    </p>
  </body>
</html>
```

### Télecharger la librairie

Il est également possible de **télécharger la librairie** JQuery et de l'**héberger** sur son propre serveur.

Cette méthode est particulièrement **utile** si l'on souhaite **personnaliser** la librairie ou si l'on n'a pas accès à un CDN.

- [***Documentation officiel pour télécharger JQuery***](https://jquery.com/download/#downloading-jquery)
- [***Liste des versions CDN de JQuery***](https://releases.jquery.com/)

**Une fois** la version choisie est **téléchargée**, vous pouvez **ajouter** le script dans vos **pages html**.

### Premier exemple" level={0}>

Pour **comprendre** comment **fonctionne JQuery**, il est important de [***comprendre le concept de Document Object Model (DOM)***](https://djemai-samy.com/posts/6.javascript.article)

Le **DOM** est une **représentation** hiérarchique de la **structure** d'une page web, qui permet d'**accéder** et de **manipuler** les **éléments** HTML.

Pour **manipuler** le DOM avec JQuery, on utilise des **sélecteurs** qui permettent de **sélectionner** des **éléments** HTML **spécifiques**.

Par exemple, pour **sélectionner** tous les **paragraphes** de la page web, on **utilise** le **sélecteur** `$("p")`.

```js
// Sélectionner tous les p du DOM
let listeP = $('p');
```

---

## Conclusion

Dans ce premier cours, nous avons vu les **bases de JQuery**, son **utilisation**, son **fonctionnement** et comment l'**intégrer** dans une page web.

Nous avons également vu les **avantages de l'utilisation de JQuery**, notamment la **simplification** de la **manipulation** du DOM, le **gain de temps** et d'**efficacité** dans la programmation, ainsi que la **compatibilité** avec plusieurs **navigateurs**.

Nous avons **terminé** ce cours en montrant un **exemple** simple de **manipulation du DOM** avec JQuery, en **sélectionnant** des élément HTML.

---

Dans le **prochain cours**, nous approfondirons la **manipulation du DOM** avec JQuery en **apprenant** à **ajouter** et **supprimer** des éléments, **modifier** les **attributs** et bien plus encore.

Nous vous **invitons** à **explorer** les **ressources utiles** pour continuer à **apprendre** JQuery nottamment, [***la documentation officielle de JQuery***](https://api.jquery.com/).

### Aller plus loin

[Précédent: Javascript: Inititation](https://djemai-samy.com/posts/0.javascript-initiation)

[Suivant: JQuery: Manipulation DOM](https://djemai-samy.com/posts/2.jquery-dom.article)
