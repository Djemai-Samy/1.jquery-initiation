/**
 * 2. Gestion des événements de souris
 */
// 1. click()
// Détecte le clic sur un bouton avec l'identifiant alertMoi et affiche un message d'alerte
$("#alertMoi").click(() => {
	alert("Salut!");
});

// 2. dblclick()
// Détecte un double-clic sur les paragraphe <p> et affiche un message d'alerte
$("p").dblclick(() => {
	alert("Double clique!");
});

// 2. mouseenter()
// Modifie la couleur de fond d'un élément lorsque la souris survole l'élément
$("a").mouseenter(function (e) {
	$(this).css("color", "green");
});

// 2. mouseleave()
// Modifie la couleur de fond d'un élément lorsque la souris quitte l'élément
$("a").mouseleave(function (e) {
	$(this).css("color", "royalblue");
});
/**
 * FIN 2. Gestion des événements de souris
 */

/**
 * 3. Gestion des événements de clavier
 */
// 1. keypress()
// Détecte l'appui sur une touche du clavier et l'affiche dans la console
$(document).keypress(function (event) {
	console.log(
		`La touche "${String.fromCharCode(event.which)}" a été pressée avec le code ${
			event.which
		}.`
	);
});

// 2. keydown()
// Détecte l'appui sur une touche du clavier et l'affiche dans la console
$(document).keydown(function (event) {
	if (event.which == 37) {
		console.log("La touche flèche gauche a été appuyée.");
	}
});

// 3. keyup()
// Détecte le relachement sur une touche du clavier et l'affiche dans la console
$(document).keyup(function (event) {
	if (event.which == 13) {
		console.log("La touche Entrée a été relâchée.");
	}
});

/**
 * FIN 3. Gestion des événements de clavier
 */

/**
 * 4. Gestion des événements formulaire
 */
// 1.focus()
// Changer la couleur de fond de l'input quand il est focus
$("input").focus(function () {
	$(this).css("background-color", "rgb(220, 220, 220)");
});

// 2. change()
// Détecte le changement dans le champ avec id emailInput
$(".checkMoi").change(function (event) {
	alert("Check !");
});

// 3. blur()
// Détecte la perte de focus dans le champ avec id emailInput
$("#emailInput").blur(function () {
	// Si la valeur ne contient pas un @
	if (!$(this).val().includes("@")) {
		// Changer la bordure de l'input en rouge
		$(this).css("border", "1px solid red");

		// Affiche un message d'erreur
		$("#emailError").text("Email incorrect!");
	}
});

// 4. submit()
// Détecte la soumission du formulairelors du clique sur un bouton
$("#emailForm").submit(function (e) {
	// Arreter l'envoi de la requête HTTP
	e.preventDefault();

	// Si le champ cotien un @
	if ($("#emailInput").val().includes("@")) {
		// Afficher un message d'alerte
		alert("Inscription réussie!");
	} else {
		// Affiche un message d'erreur
		$("#emailError").text("Email incorrect!");
	}
});

/**
 * FIN 4. Gestion des événements formulaire
 */
