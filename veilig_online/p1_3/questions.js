const questions =
// Stored into JS file instead of JSON because of CORS on local file system
// This file hosts all of the question pages (HTML) and questions
[
	{
		"header": "Voor wie ben je bang?", // Can be undefined for no header
		"content": [ // Contains the paragraphs (the <p> elements), can be an empty array for no content
			"<img>imagemidl,./IMG/chrome_adblock_off.jpg,Een plaatje van NU.nl met de adblock off",
			"De site Nu.nl in Chrome met adblock uit (boven), en adblock aan (onder)",
			"<img>imagemidl,./IMG/chrome_adblock_on.jpg,Een platje van NU.nl met de adblock on",
			"De vorige les hebben wij het gehad over de verschillende groepen die ons in de weg zitten bij het gebruiken van het internet. Mooi dat wij dit nu weten, maar wat doen we eraan? Dit kunnen wij uitvogelen door dezelfde groepen te gebruiken.",
			"We gaan dus een voor een de verschilende groepen die ons willen volgen of lastigvallen op het internet bespreken en kijken wat wij daaraan kunnen doen.",
		],
		"question": undefined, // Documentation on question is on the next item
		"next": true // Adds the next button ('buttonforward')
	},
	{
		"header": "Adverteerders",
		"content": [
			"We kunnen één ding doen tegen adverteerders op het internet. Dat is een adblocker installeren. Deze adblocker zorgt er niet per se voor dat wij niet meer gevolgd worden maar wij zien in ieder geval de advertenties niet meer.",
			"Op het moment dat je een site bezoekt stuurt deze je direct door naar een aantal andere websites. De advertenties en de veiling van je data staan op deze site. In een paar milliseconden kiest de computer van een adverteerder welke advertentie je te zien krijgt en stuurt deze mee in de website die je wil bezoeken.",
			"Een ad-blocker is een extensie voor je browser. Een extensie is een miniprogramma dat je aan een ander programma kan toevoegen.",
			"De ad-blocker heeft een lijst met servers met advertenties en blokkeert de verbinding met die websites. Hierdoor zijn er geen advertenties te zien op de websites die je bezoekt.",
			"<t> Installatie Ublock Origin",
			"Hieronder leg ik uit hoe je Ublock orgin installeert op Chrome. De extensie is ook beschikbaar voor Edge en Firefox. We gebruiken Ublock omdat dit ook advertenties op YouTube blokkeert.",
			"<img>imagesmalll,./IMG/chrome4.jpg,Chrome4.jpg",
			"Open Chrome en ga naar chrome.google.com/webstore",
			"<img>imagemidl,./IMG/chrome5.jpg,Chrome5.jpg",
			"Linksboven in de pagina kan je zoeken. Vul daar ublock in.",
			"<img>imagesmalll,./IMG/chrome6.jpg,Chrome6.jpg",
			"Het bovenste resultaat is uBlock Origin, kik daar op.",
			"<img>imagesmalll,./IMG/chrome7.jpg,Chrome7.jpg",
			"Klik op de volgende pagina op Add to Chrome.",
			"<img>imagesmalll,./IMG/chrome8.jpg,Chrome8.jpg",
			"De browser vraagt of je het zeker weet. Klik Add extention.",
			"<img>imagesmalll,./IMG/chrome9.jpg,Chrome9.jpg",
			"Het is nu geïnstalleerd, dit kan je rechtsboven bij het puzzelstukje controleren.",
			"<img>imagesmalll,./IMG/chrome10.jpg,Chrome10.jpg",
			"Als je op het logo van uBlock klikt krijg je een overzicht van de gegevens van de extensie.",
			"<img>imagesmalll,./IMG/chrome11.jpg,Chrome11.jpg",
			"Je kan dit controleren door naar een site met veel advertenties te gaan en te kijken of ze verdwenen zijn. Je kan ook op YouTube kijken of je daar nog advertenties krijgt",
			],
		"question": {
			"ask": "Waar verdienen Social Media het meeste geld mee?", // The question
			"answers": [ // The answers available to give
				"Abbonementen",
				"Advertenties",
				"Google resultaten",
				"Ze verdienen geen geld"
			],
			"correct": 1 // Index in "answers" of the correct answer (answers[2] is "Weggooien" in this case)
		},
		"next": true
	},
	{
		"header": "Oplichters",
		"content": [
		],
		"question": {
			"ask": "Waar verdienen Social Media het meeste geld mee?", // The question
			"answers": [ // The answers available to give
				"Abbonementen",
				"Advertenties",
				"Google resultaten",
				"Ze verdienen geen geld"
			],
			"correct": 1 // Index in "answers" of the correct answer (answers[2] is "Weggooien" in this case)
		},
		"next": true
	},
		{
		"header": "Hackers",
		"content": [
		],
		"question": {
			"ask": "Waar verdienen Social Media het meeste geld mee?", // The question
			"answers": [ // The answers available to give
				"Abbonementen",
				"Advertenties",
				"Google resultaten",
				"Ze verdienen geen geld"
			],
			"correct": 1 // Index in "answers" of the correct answer (answers[2] is "Weggooien" in this case)
		},
		"next": true
	},
		{
		"header": "Bekenden",
		"content": [
		],
		"question": {
			"ask": "Waar verdienen Social Media het meeste geld mee?", // The question
			"answers": [ // The answers available to give
				"Abbonementen",
				"Advertenties",
				"Google resultaten",
				"Ze verdienen geen geld"
			],
			"correct": 1 // Index in "answers" of the correct answer (answers[2] is "Weggooien" in this case)
		},
		"next": true
	},
		{
		"header": "Anderen",
		"content": [
		],
		"question": {
			"ask": "Waar verdienen Social Media het meeste geld mee?", // The question
			"answers": [ // The answers available to give
				"Abbonementen",
				"Advertenties",
				"Google resultaten",
				"Ze verdienen geen geld"
			],
			"correct": 1 // Index in "answers" of the correct answer (answers[2] is "Weggooien" in this case)
		},
		"next": true
	},

	{
		"type": "review" // Set type of content to be the score page
	}
]