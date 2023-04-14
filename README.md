# JQuery: Manipulation DOM

## [Page officiel du cours JQuery: Manipulation du DOM](https://djemai-samy.com/posts/2.jquery-dom)

![Image du cours: JQuery: Manipulation du DOM](https://djemai-samy.com/blog/2.programmation/1.web/3.javascript/jquery/1.jquery-initiation/2.jquery-dom/3.jquery-dom.png)

La branche 'main' contient le code de départ de chaque chapitre de la série de cours.

Dans ce cours, nous allons approfondir l'utilisation de JQuery pour manipuler le DOM de notre page web.

Nous allons découvrir comment utiliser les fonctions prêtes à l'emploi de JQuery pour modifier le contenu HTML, ajouter des éléments, modifier les attributs, supprimer des éléments...

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

1. **Comprendre** le **fonctionnement** du **DOM** et son **importance** dans la **création** de **pages** web **dynamiques**.
2. Être capable de **sélectionner** des **éléments spécifiques** du DOM à l'aide de **sélecteurs** CSS.
3. Être capable de **modifier** le **contenu HTML** d'un **élément** en utilisant JQuery.
4. Être capable d'**ajouter** et de **supprimer** des **éléments HTML** à l'aide de JQuery.
5. Être capable de **modifier** les **styles CSS** d'un **élément** à l'aide de JQuery.
6. Être capable de **créer** des **éléments dynamiques** à l'aide de JQuery.
7. Être capable d'**afficher** et de **masquer** des **éléments HTML** à l'aide de JQuery.

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
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <!-- CDN de JQuery -->
   <script src="https://code.jquery.com/jquery-3.6.4.slim.min.js" integrity="sha256-a2yjHM4jnF9f54xUQakjZGaqYs/V1CYvWpoqZzC2/Bw=" crossorigin="anonymous"></script>

   <!-- Votre script -->
   <script src="./index.js" defer></script>
   <!-- Votre style -->
   <link rel="stylesheet" href="./index.css">
   <title>JQuery: Introduction</title>
 </head>
 <body>
   <h1>JQuery: Initiation</h1>
   <strong class="lead">
     Cette série de cours vise à montrer comment utiliser la librairie JQuery avec le langage JavaScript pour développer des applications web interactives et dynamiques.
   </strong>
   <p>
     Les cours couvriront les concepts clés de JQuery, notamment la manipulation du DOM, la gestion des événements, les animations et les effets.
   </p>

   <a id="lienSite" href="#">Texte de départ</a>

   <section>
     <h2>Jquery: Introduction</h2>
     <p class="lead">
       Ce premier cours de la série sur JQuery permet de découvrir les bases de cette
       librairie JavaScript largement utilisée dans le développement web.
     </p>
     <p>
       Nous allons voire en quoi consiste la libraire et comment l'integrer dans un projet.
     </p>
   </section>

   <section id="active">
   </section>

   <section id="aSupprimer">
     <h2>Une section a supprimer en JQuery</h2>
     <p class="lead">
       Pour supprimer un élément, vous pouvez utiliser la méthode `remove()` sur les éléments séléctionner
     </p>
   </section>
 </body>
</html>
```

---
---

## 1. Sélection d'éléments avec JQuery

Les **sélecteurs** CSS sont des **motifs utilisés** pour **sélectionner** des **éléments spécifiques** dans un document HTML.

- [***Cours sur les sélécteurs CSS.***](https://djemai-samy.com/posts/2.css-selectors.article)

Les **sélecteurs** CSS sont **utilisés** avec la **fonction** JQuery `$("selecteur")` pour **sélectionner** des **éléments** du **DOM**.
</Block>

---

### 1. Sélection d'éléments par balise

Pour **sélectionner** tous les éléments par **balise**:

```js
const tousLesElements = $('element')
```

par exemple, pour **sélectionner** tous les **éléments** `p` du document HTML:

```js
const tousLesP = $('p')
```

---

### 2. Sélection d'éléments par classe

Pour **sélectionner** tous les **éléments** possédant la **classe** `maClasse` du document HTML, il faut **précéder** le nom de la classe par un `.`:

```js
const tousLesElementAvecClasse = $('.maClasse')
```

Par exemple, pour **sélectionner** tous les **éléments** possédant la **class** `lead` dans notre document HTML, nous pouvons utiliser cette instruction:

```js
const tousLesElementAvecLead = $('.lead')
```

---

---

### 3. Sélection d'éléments par identifiant

Pour **sélectionner** tous les **éléments** possédant l'**identifiant** `monIdentifiant` du document HTML, il faut **précéder** le nom de l'**identifiant** par un `#`:

```js
const tousLesElementAvecID = $('#monIdentifiant')
```

Par exemple, pour **sélectionner** tous les **éléments** possédant l'**identifiant** `active` dans notre document HTML, nous pouvons utiliser cette instruction:

```js
const tousLesActive = $('#active')
```

---

### 4. Sélection Combinée

Les **sélecteurs** CSS sont très **flexible**, et nous permettent par exemple de **combiner plusieurs selecteurs**.

Par exemple pour **séléctionner** seulement les `p` possédant la **classe** `lead`, nous pouvons utiliser cette insctruction:

```js
const tousLesPAvecLead = $('p.lead')
```

---

## 2. Modifier des éléments avec JQuery

Avec JQuery vous pouvez **modifier** toutes les **données** des éléments HTML. Voici les plus utilisés:

### 1. Mofication du contenu texte

Afin de **modifier** le contenu **texte** d'un élément HTML, vous pouvez le **selectionner**, puis **utliser** la **méthode** chainée `.text()`:

```js
$('element').text('Nouveau texte!')
```

Il **important** de **noter** que le `nouveau texte!` sera **attribué** a **tous les éléments selectionnés**.

par exemple, pour **modifier** le contenu **texte** du `p` possédant l'**identifiant** `lienSite`:

```js
$('#lienSite').text('Liens de la serie de cours')
```

---

### 1. Mofication du contenu HTML

Vous pouvez **modifier** ou **ajouter** du **contenu HTML** à un élément en utilisant la **méthode chainée** `.html()`:

```js
$('element').html('<p>Element HTML ajouté</p>')
```

par exemple, pour **modifier** le **contenu HTML** de la `section` possédant l'**identifiant** `active`:

```js
$('#active').html(`
  <h2>JQuery: Maniplulation DOM</h2>
  <p class="lead">
    Dans ce cours, nous allons approfondir l'utilisation de JQuery pour manipuler le DOM de notre page web.
  </p>
  <p>
    Nous allons découvrir comment utiliser les fonctions prêtes à l'emploi de JQuery pour modifier le contenu HTML, ajouter des éléments, modifier les attributs, supprimer des éléments...
  </p>
`)
```

---

### 3. Mofication des attributs

Vous pouvez **modifier** ou **ajouter** des **attributs** aux éléments HTML en utilisant la **méthode chainée** `.attr(attribut, value)`. Cette méthode prend deux paramètre:

1. `attribut`: Le **nom de l'attribut** à ajouter ou modifier sous forme de **chaine de caractères**.
2. `value`: La **valeur** à donner à l'attributs sous forme de **chaine de caractères**.

```js
$('element').attr(attribut, value);
```

par exemple, pour **modifier** le `href` du **lien** `a` possédant l'**identifiant** `aModifier`:

```js
$('#lienSite').attr("href", "https://djemai-samy.com/posts/0.jquery-initiation")
```

---

Il est **important** de noter que les **méthodes chainées** sont très **flexibles**, et nous **permettent** d'**enchainer les modificateurs** à la suite.

Par exemple, pour **modifier** le contenu **texte**, l'attribut `href` et **ajouter l'attribut** `target` au lien en **une seule instruction**:

```js
$("#lienSite")
  .text("Liens de la serie de cours")
  .attr("href", "https://djemai-samy.com/posts/0.jquery-initiation")
  .attr("target", "_blank");
```

---

## 3. Création et suppression d'éléments JQuery

Avec JQuery vous pouvez **créer**, **configurer** et **ajouter** des **éléments** à votre document HTML.

### 1. Créer un élément

Pour **créer** un **élément**, il suffit d'**utiliser** la **méthode** de JQuery en **ajoutant** les **chevrons** `<>` **autour** du **nom** de la **balise** souhaitée: `$('<balise>')`.

Par exemple, pour **créer** un **paragraphe** avec JQuery, vous pouvez **utiliser** cette instruction:

```js
$('<p>')
```

---

### 2. Ajouter un élément dans le document

Une fois l'**élément créer**, vous pouvez l'**ajouter** à la **fin** d'un **élément selectionné** en utilsant la **méthode** `append()`, en **fournissant** l'**élément créé** en **paramètre**.

Dans cet exemple, nous avons **ajouté** un **lien** `<a>` à la **fin** de la `section` possedant l'**identifiant** `aRemplir`:

```js
$("#active").append(
  $("<a>")
    .text("Cours sur la manipulation du DOM avec JQuery.")
    .attr("href", "https://djemai-samy.com/2.jquery-dom")
    .attr("target", "_blank")
);
```

---

Il est **possible d'utiliser la méthode** `append()` en **fournissant** les **éléments** à ajouter sous forme de **chaine de caractères**:

```js
$('#aRemplir').append(`
  <a href="https://djemai-samy.com/3.jquery-events" target="_blank">
    Cours sur la gestion événenemts avec JQuery.
  </a>
`);
```

---

### 3. Supprimer un élément

La **fonction** `remove()` de JQuery **permet** de **supprimer** un **élément** et **son contenu** HTML de la page.

Voici un exemple :

```js
$('#aSupprimer').remove()
```

---

### 4. Styliser les éléments avec JQuery

Avec JQuery vous pouvez **styliser** les **éléments** en **ajoutant** du **style en ligne**, ou en ajoutant des **classes**:

### 1. Inline style

JQuery permet de **modifier** les **styles en lignes** des éléments HTML grâce a la **méthode** `css()`, qui **prend** en **paramètre** le nom de la **propriété** CSS à modifier et la **valeur** de cette propriété.

Cet exemple **sélectionne** tous les **titres** `<h2>` de la page et **modifie** leur **couleur** de texte en bleu, et ajoute un **souslignement**:

```js
$('h2').css('color', 'royalblue').css('text-decoration', 'underline');
```

---

### 2. Modification des classes

Il est également possible de **modifier** les **classes** d'un élément HTML en utilisant JQuery.

La **fonction** `addClass()` permet d'**ajouter** une **classe** à des **éléments**.

```js
$('elements').addClass('maClasse1 maClasse2');
```

Voici un exemple ou nous **ajoutant** la **classe** `lien` à tous les **lien** `<a>`:

```js
$('a').addClass('lien');
```

---

La fonction `removeClass()` permet de **supprimer** une **classe** des **éléments**.

```js
$('elements').removeClass('maClasse1 maClasse2');
```

Voici un exemple pour **supprimer** la **classe** `lien` de tous les **lien** `<a>` **enfants** d'une `<section>`:

```js
$('section a').removeClass('lien');
```

---

Il existe une **fonction** qui permet d'**alterner** l'**ajout** et la **suppression** de **classes**.

Cette fonction **ajoute** les **classes** si elle ne sont **pas présentes** et les **supprime** si elle sont **déjà présentes** :

```js
$('elements').toggleClass('maClasse1 maclasse2');
```

---
---

## Conclusion

En conclusion, la **manipulation** du **DOM** avec **JQuery** est un **concept essentiel** pour les développeurs web qui souhaitent **créer** des pages web **interactives** et **dynamiques**.

Grâce à JQuery, la **sélection**, la **modification** et l'**ajout** d'éléments HTML et CSS peuvent être réalisés **facilement** et **efficacement**.

---

Si vous souhaitez **approfondir** vos **connaissances** sur la **manipulation** du DOM avec JQuery, je vous encourage à **consulter** les nombreuses **ressources** en ligne disponibles, ainsi que la **documentation** officielle de JQuery:

- [***Documentation officielle sur la selection d'éléments avec JQuery***](https://api.jquery.com/category/selectors/)
- [***Documentation officielle sur la navigation entre éléments avec JQuery***](https://api.jquery.com/category/traversing/)
- [***Documentation officielle sur la manipulation du DOM avec JQuery***](https://api.jquery.com/category/manipulation/)
- [***Documentation officielle sur la stylisation des éléments avec JQuery***](https://api.jquery.com/category/css/)

---

Dans le **prochain chapitre**, nous explorerons en détail la **gestion des événements** avec JQuery, en apprenant comment **attacher** des **gestionnaires d'événements** à des **éléments** HTML et comment **répondre** à des **événements spécifiques** avec des **fonctions de rappel**.

---

### Aller plus loin

[Précédent: JQuery: Introduction](https://djemai-samy.com/posts/1.jquery-introduction.article)

[Suivant: Les événements](https://djemai-samy.com/posts/3.jquery-events.article)
