# JQuery: Les événements

## [Page officiel du cours JQuery: Les événements](https://djemai-samy.com/posts/3.jquery-events)

![Image du cours: JQuery:Les événements](https://djemai-samy.com/blog/2.programmation/1.web/3.javascript/jquery/1.jquery-initiation/3.jquery-events/3.jquery-events.png)

La branche 'main' contient le code de départ de chaque chapitre de la série de cours.

Ce cours, se concentre sur la gestion des différents événements avec JQuery.

Vous apprendrez comment gérer les événements en utilisant JQuery pour rendre leur site web plus interactif et plus réactif.

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

## Prérequis

Pour suivre cette serie d'inititaion, vous devez avoir une expérience pratique avec HTML et CSS et une compréhension de base du langage JavaScript.

- [***Initiation à HTML.***](https://djemai-samy.com/posts/0.html-initiation)
- [***Initiation à CSS.***](https://djemai-samy.com/posts/0.css-initiation)
- [***Initiation au language Javascript***](https://djemai-samy.com/posts/0.javascript-initiation)

Il estaussi  conseillé d'avoir suivit les cours précedent sur JQuery:

- [***Introductionà la librairie JQuery***](https://djemai-samy.com/posts/posts/1.jquery-introduction.article)
- [***La manipulation de DOM avec JQuery***.](https://djemai-samy.com/posts/posts/2.jquery-dom.article)
-

---

## Objectifs

À la fin de ce chapitre, vous serez en mesure de :

1. **Comprendre** le **fonctionnement** des **événements** en Javascript
2. **Savoir** comment **utiliser** JQuery pour **gérer** les **événements**
3. **Comprendre** la différence entre les **événements** de **souris**, de **clavier** et de **formulaire**
4. Être capable de **créer** des **événements** et d'y **répondre** en utilisant JQuery
5. **Savoir** comment **arrêter** la **propagation** des **événements**

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

Pour illustrer nos exemples, nous allons ajouter des éléments à notre page HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CDN de JQuery -->
    <script src="https://code.jquery.com/jquery-3.6.4.slim.min.js" integrity="sha256-a2yjHM4jnF9f54xUQakjZGaqYs/V1CYvWpoqZzC2/Bw=" crossorigin="anonymous"></script>

    <!-- Votre script -->
    <script src="./index.js" defer></script>

    <!-- Vote style -->
    <link rel="stylesheet" href="./index.css">
    <title>JQuery: Les événements</title>
  </head>
  <body>
      <h1>JQuery: Les événements</h1>
      <button id="alertMoi">Lancer une alerte</button>
      <p>Double clique n'importe quel paragraphe</p>

      <a href="https://Djemai-samy.com/posts/3.jquery-events.article">Lien vers le site officiel pour suivre le cours</a>

      <form id="emailForm">
        <input type="text" id="emailInput" placeholder="Entrez une adresse mail">
        <p id="emailError"></p>

        <input class="checkMoi" type="checkbox">
        <span>Check moi!</span>

        <input class="checkMoi" type="checkbox">
        <span>Moi aussi!</span>
        
        <button>Valider</button>
      </form>
  </body>
</html>
```

---
---

## 1. Introduction aux événements avec JQuery

### 1. Qu'est-ce qu'un événement ?

Un **événement** est une **action effectuée** par l'**utilisateur** sur une page web.

Les **événements** peuvent être de **différents types**, comme **cliquer** sur un **bouton**, **appuyer sur une touche** du **clavier** ou **soumettre** un **formulaire**.

Les **événements** sont généralement utilisés pour **déclencher** des **actions**, comme l'**affichage** d'une **boîte de dialogue** ou la **modification** du **contenu** de la page.

- [***Cours sur les événements avec Javas1cript.***](https://djemai-samy.com/posts/6.javascript-dom.article)

---

### 2. Comment fonctionnent les événements avec JQuery ?

**JQuery** est une bibliothèque Javascript qui **facilite** la **manipulation** des **événements** sur une page web.

En utilisant JQuery, les développeurs peuvent facilement **ajouter** des **événements** à des **éléments** de la page web grâce à divers **méthodes**.

Lorsqu'un **événement** se produit, JQuery **appelle** une **fonction spécifique** (callback) qui est **définie** par vous et attaché à l'élément choisi.

---

## 2. Gestion des événements de souris

Les événements de  souris sont les événements les plus couramment utilisés dans la programmation web.

### 1. click()

Pour lier un événement de clic à un élément HTML, vous devez d'abord sélectionner l'élément avec JQuery.

La **méthode** `click()` est utilisée pour **détecter** le **clic** de **souris** sur un **élément** de la page web.

```js
$("selecteur").click(callback)
```

- `callback`: La **fonction** à **executer** quand l'utilisateur **clique** sur un des **éléments** séléctionné. Elle **réçoit** un **objet** contenant des **propriétés** et **méthodes** lié a l'**événement**.

---

Par exemple, le code suivant **détecte** le **clic** sur un **bouton** avec l'identifiant `alertMoi` et **affiche** un message d'alerte :

```js
$("#alertMoi").click( ()=>{ alert('Salut!') } )
```

---

### 2. dblclick()

La fonction `dblclick()` est utilisée pour **détecter** un **double-clic** de souris sur un **élément** de la page web.

```js
$("selecteur").dblclick(callback)
```

- `callback`: La **fonction** à **executer** quand l'utilisateur **clique deux fois** sur un des éléments séléctionné. Elle **réçoit** un **objet** contenant des **propriétés** et **méthodes** lié a l'**événement**.
</Block>

---

Par exemple, le code suivant **détecte** un **double-clic** sur les paragraphe `<p>` et **affiche** un **message d'alerte** :

```js
$("p").dblclick( ()=>{ alert('Double clique!') } )
```

---

### 3. mouseenter() et mouseleave()

Les **méthodes** `mouseenter()` et `mouseleave()` sont **utilisées** pour **détecter** le **survol** de la souris sur un **élément** de la page web.

```js
$("selecteur").mouseenter(callback1);
$("selecteur").mouseleave(callback2);
```

- `callback1`: La fonction à executer quand la souris survole les éléments selectionnés. Elle **réçoit** un **objet** contenant des **propriétés** et **méthodes** lié a l'**événement**.
- `callback2`: La fonction à executer quand la souris ne survole plus (quitte) les éléments selectionnés. Elle **réçoit** un **objet** contenant des **propriétés** et **méthodes** lié a l'**événement**.

---

Par exemple, le code suivant modifie la couleur de fond d'un élément lorsque la souris survole l'élément et revient à sa couleur d'origine lorsque la souris quitte l'élément :

```js
$("a").mouseenter(function(e){
  $(this).css("color", "green");
});

$("a").mouseleave(function(e){
  $(this).css("color", "royalblue");
});
```

La fonction hover() est une combinaison des fonctions mouseenter() et mouseleave().

Elle est utilisée pour détecter le survol de la souris sur un élément et effectuer une action lorsqu'elle quitte cet élément.

```js
$("selecteur").hover(callbackIn, callBackOut);
```

- `callbackIn`: La fonction à executer quand la souris survole les éléments selectionnés.
- `callBackOut`: La fonction à executer quand la souris ne survole plus (quitte) les éléments selectionnés.

Par exemple, le code suivant modifie la couleur de fond d'un élément lorsque la souris survole l'élément et revient à sa couleur d'origine lorsque la souris quitte l'élément :

```js
$("a").hover(function(e){
  $(this).css("color", "green");
  }, function(){
  $(this).css("color", "royalblue");
});
```

---

## 3. Gestion des événements de clavier

Les **événements** de **clavier** permettent d'**executer** des **fonction** quand l'utilisateur **tape** sur le **clavier**.

ils nous **fournissent** aussi quelle **touche** a été **taper**.

### 1. keypress()

La **méthode** `keypress()` est **déclenchée** lorsque l'utilisateur **appuie** sur une **touche** du **clavier** qui produit un caractère Unicode.

Cette **méthode** est **utilisée** pour **détecter** les **caractères** tapés par l'utilisateur.

```js
$("selecteur").keypress(callback)
```

- `callback`: La **fonction** à **executer** quand l'utilisateur **tape** sur un des **touches** du clavier. Elle **réçoit** un **objet** contenant des **propriétés** et **méthodes** lié a l'**événement**.

---

Dans cet exemple, nous avons **attaché** un **gestionnaire d'événements** à l'événement **keypress** sur le **document entier**.

Lorsque l'utilisateur **appuie** sur une **touche** du clavier, la **fonction** est **exécutée** et **affiche** le **code** et le **caractère** correspendant.

Nous utilisons la **méthode** `fromCharCode()` des `String` pour **connaitre** le **caractère correspendant** au **code** de la touche appuyer.

Le **code** de la touche appuyer est **accessible** dans la **propriété** `which` de l'**objet** reçu dans les **paramètres**:

```js
$(document).keypress(function (event) {
  console.log(
    `La touche "${String.fromCharCode(event.which)}" a été pressée avec le code ${event.which}.`
  );
});
```

---

### 2. keydown()

La **méthode** `keydown()` est **déclenchée** lorsque l'utilisateur **appuie** sur une **touche** du clavier.

Cette méthode est **utilisée** pour **détecter** les **touches spéciales** telles que les **touches de contrôle**, les **touches fléchées**, etc.

```js
$(selector).keydown(function(event) {
  // Code à exécuter lorsqu'une touche est appuyée
});
```

- `callback`: La **fonction** à **executer** quand l'utilisateur **tape** sur une des **touches** du clavier. Elle **réçoit** un **objet** contenant des **propriétés** et **méthodes** lié a l'**événement**.

---

Dans cet exemple, nous avons **attaché** un **gestionnaire d'événements** à l'événement **keydown** sur le **document entier**.

Lorsque l'utilisateur **appuie** sur une **touche** du clavier, la **fonction** est **exécutée** et **si** la touche appuyée est la **touche de la flèche gauche**, un **message** est **affiché** dans la **console**.

```js
$(document).keydown(function(event) {
  if (event.which == 37) {
    console.log("La touche flèche gauche a été appuyée.");
  }
});
```

---

### 3. keyup()

La **méthode** `keyup()` est **déclenchée** lorsque l'utilisateur **relâche** une **touche** du clavier.

Cette méthode est **utilisée** pour **détecter** lorsque l'utilisateur a **fini de taper** une touche.

```js
$(selector).keyup(function(event) {
  // Code à exécuter lorsqu'une touche est relâchée
});
```

- `callback`: La **fonction** à **executer** quand l'utilisateur **relache** une **touche** du clavier. Elle **réçoit** un **objet** contenant des **propriétés** et **méthodes** lié a l'**événement**.

---

Dans cet exemple, nous avons **attaché** un **gestionnaire d'événements** à l'événement **keyup** sur le **document entier**.

Lorsque l'utilisateur **relâche** une **touche** du clavier, la **fonction** est **exécutée** et **si** la touche relâchée est la **touche Entrée**, un **message** est **affiché** dans la **console**.

```js
$(document).keyup(function(event) {
  if (event.which == 13) {
    console.log("La touche Entrée a été relâchée.");
  }
});
```

Note : La **méthode** `keydown()` et `keyup()` peuvent **également** être **utilisées** pour **détecter** les **caractères tapés** par l'utilisateur, mais il est **recommandé** d'**utiliser** la **méthode** `keypress()` à cette fin car elle est plus **appropriée pour cette tâche**.

---

## 2. Gestion des événements de formulaires

Les **événements** de **formulaire** sont très **utiles** pour **ajouter** des **fonctionnalités dynamiques** à un formulaire et rendre l'**expérience** utilisateur plus **agréable**.
</Block>

### 1.focus()

La **méthode** `focus()` est **utilisée** pour **déclencher** l'événement **focus** d'un **élément** de formulaire.

L'événement **focus** est **déclenché** lorsque l'**utilisateur** met le **selectionne** ou **clique** sur un **élément** de formulaire.

Cette méthode peut être **utilisée** pour **effectuer** des **actions** lorsque l'utilisateur **utilise** un **élément** dans le formulaire, pour changer son style ou afficher des messages par exemple.

```js
$(selector).focus(function(e){
// code à exécuter lorsque l'élément a le focus
});
```

- `callback`: La **fonction** à **executer** quand l'utilisateur **focus** sur un des **élément** séléectionné. Elle **réçoit** un **objet** contenant des **propriétés** et **méthodes** lié a l'**événement**.

---

Dans cet exemple, le **fond** de chaque **champ de saisie** de texte devient **gris clair** lorsque l'**utilisateur** met le **focus** sur l'**élément**.

```js
$("input").focus(function(){
  $(this).css("background-color", "rgb(220, 220, 220)");
});
```

---

### 2. change()

La **méthode** `change()` est **utilisée** pour **déclencher** l'événement **change** d'un élément de formulaire.

L'événement change est **déclenché** lorsque la **valeur** d'un élément de formulaire est **modifiée**.

Cette méthode peut être **utilisée** pour **effectuer** des **actions** lorsque l'**utilisateur** **tape** dans un **champ d'entrée texte**, ou **coche une case à cocher** ect...

```js
$(selector).change(function(e){
// code à exécuter lorsque la valeur de l'élément a été modifiée
});
```

- `callback`: La **fonction** à **executer** quand l'utilisateur **change** la **valeur** d'un **champ** d'entrée. Elle **réçoit** un **objet** contenant des **propriétés** et **méthodes** lié a l'**événement**.

---

Dans cet exemple, nous avons **attaché** un **gestionnaire d'événements** à l'événement **change** sur les champ case à cocher possédant la classe `checkMoi`.

```js
$(".checkMoi").change(function (event) {
  alert('Check !')
});
```

---

### 3. blur()

L'**événement blur** est **déclenché** lorsque l'utilisateur **retire** le **focus** d'un **élément** de formulaire.

Cette **méthode** peut être **utilisée** pour **effectuer** des **actions** lorsque l'**utilisateur** change de **champ** dans le formulaire, ou **clique ailleurs**.

```js
$(selector).blur(function(event) {
  // Code à exécuter lorsqu'une touche est relâchée
});
```

- `callback`: La **fonction** à **executer** quand l'utilisateur **retire** le **focus** d'un champ. Elle **réçoit** un **objet** contenant des **propriétés** et **méthodes** lié a l'**événement**.
</Block>

---

Dans cet exemple, nous avons **attaché** un **gestionnaire d'événements** à l'événement **blur** sur le le **champ** d'éntrée texte possédant l'identifiant `emailInput`.

Lorsque l'utilisateur **retire** le **focus** du champ, la **fonction** est **exécutée**.

**Si** la **valeur** du champ **ne contient pas** le caractère `@` la **couleur de bordure** du champ est **modifiée** et un **message d'erreur** est **affiché**:

```js
$("#emailInput").blur(function(){
  if(!$(this).val().includes('@')){
    $(this).css('border', '1px solid red');
    $("#emailError").text('Email incorrect!')
  }
});
```

---

### 4. submit()

La **méthode** `submit()` est **utilisée** pour **déclencher** l'événement **submit** d'un **formulaire**.

L'événement **submit** est **déclenché** lorsque l'**utilisateur clique** sur un **bouton** enfant du formulaire.

Cette **méthode** peut être **utilisée** pour **arreter l'envoi**de la **requête HTTP** a une back-end et **effectuer** uns **action** à la place.

```js
$(selector).submit(function(event) {
  // Arreter l'envoi de la requête HTTP
  e.preventDefault();

  // Code à exécuter lorsqu'une touche est relâchée
});
```

- `callback`: La **fonction** à **executer** quand l'utilisateur **clique** sur un bouton enfant d'un formulaire. Elle **réçoit** un **objet** contenant des **propriétés** et **méthodes** lié a l'**événement** permettant d'**arreter** l'**envoi** de la **requete** HTTP.

---

Dans cet exemple, nous avons **attaché** un **gestionnaire d'événements** à l'événement **submit** sur le **formulaire** possédant l'identifiant `emailForm`.

Lorsque l'utilisateur **clique** sur le **bouton**, la **fonction** est **exécutée**.

**Si** la **valeur** du champ email **contient** le caractère `@` un **message** d'alerte est **affiché**:

```js
$("#emailForm").submit(function(){
  // Arreter l'envoi de la requête HTTP
  e.preventDefault();

  if($('#emailInput').val().includes('@')){
    alert('Inscription réussie!')
  }
});
```

---
---

## Conclusion

La **gestion des événements** est un **aspect important** du développement web **interactif**, et jQuery **facilite** grandement cette tâche en **simplifiant** la **syntaxe** et en **offrant** des **fonctions pratiques** pour **gérer** une grande variété d'**événements**.

Si vous souhaitez **approfondir** vos **connaissances** sur les **événement** avec JQuery, je vous encourage à **consulter** les nombreuses **ressources** en ligne disponibles, ainsi que la **documentation** officielle de JQuery:

- [***Documentation officielle sur les événements avec JQuery***](https://api.jquery.com/category/events/)

Dans le prochain chapitre, nous aborderons les animations et les effets avec jQuery.

Nous verrons comment ajouter des animations telles que des transitions, des effets de fondu, des animations de défilement, et bien d'autres encore, pour rendre vos pages web plus attractives et plus dynamiques.

---

### Aller plus loin

[Précédent: JQuery: Manipulation du DOM](https://djemai-samy.com/posts/2.jquery-dom.article)

[Suivant: JQquery: Les animations](https://djemai-samy.com/posts/4.jquery-animations.article)
