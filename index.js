/**
 * 1. Selection d'éléments
 */

// 1. Sélection d'éléments par balise
// Sélectionner tous les éléments p
const tousLesP = $("p");

// 2. Sélection d'éléments par classe
// Sélectionner tous les éléments possédant la class lead
const tousLesElementAvecLead = $(".lead");

// 3. Sélection d'éléments par identifiant
// Sélectionner tous les éléments possédant l'identifiant active
const tousLesActive = $("#active");

// 4. Sélection Combinée
// Séléctionner seulement les p possédant la classe lead
const tousLesPAvecLead = $("p.lead");

/**
 * FIN: 1. Selection d'éléments
 */

/**
 * 2. Modification des éléments
 */

// 1. Mofication du contenu texte
// Modifier le contenu texte du p possédant l'identifiant lienSite
$("#lienSite").text("Liens de la serie de cours sur le site officiel");

// 2. Mofication du contenu HTML
// Modifier le contenu HTML de la section possédant l'identifiant active
$("#active").html(`
  <h2>JQuery: Maniplulation DOM</h2>
  <p class="lead">
    Dans ce cours, nous allons approfondir l'utilisation de JQuery pour manipuler le DOM de notre page web.
  </p>
  <p>
    Nous allons découvrir comment utiliser les fonctions prêtes à l'emploi de JQuery pour modifier le contenu HTML, ajouter des éléments, modifier les attributs, supprimer des éléments...
  </p>
`);

// 3. Mofication des attributs
// odifier le href du lien a possédant l'identifiant lienSite
$("#lienSite")
	.text("Liens de la serie de cours")
	.attr("href", "https://djemai-samy.com/posts/0.jquery-initiation")
	.attr("target", "_blank");

/**
 * FIN: 2. Modification des éléments
 */

/**
 * 3. Création et suppression d'éléments JQuery
 */

// 1. Créer un élément
// 2. Ajouter un élément dans le document
// Créer et ajouter un lien <a> à la fin de la section possedant l'identifiant active
$("#active").append(
	$("<a>")
		.text("Cours sur la manipulation du DOM avec JQuery.")
		.attr("href", "https://djemai-samy.com/2.jquery-dom")
		.attr("target", "_blank")
);
// 3. Supprimer un élément
// Supprimer les éléments possédant l'id aSupprimer
$("#aSupprimer").remove();

/**
 * FIN: 3. Création et suppression d'éléments JQuery
 */

/**
 * 4. Styliser les éléments avec JQuery
 */

// 1. Inline style
// Sélectionne tous les titres <h2> de la page et modifie leur couleur de texte en bleu, et ajoute un souslignement
$("h2").css("color", "royalblue").css("text-decoration", "underline");

// 2. Modification des classes
// Ajouter la classe lien à tous les lien <a>:
$("a").addClass("lien");

// Supprimer la classe lien de tous les lien <a> enfants d'une <section>
$("section a").removeClass("lien");

/**
 * 4. Styliser les éléments avec JQuery
 */
