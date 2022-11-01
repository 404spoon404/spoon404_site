const questions =
// Stored into JS file instead of JSON because of CORS on local file system
// This file hosts all of the question pages (HTML) and questions
[
	{
		"header": "Voor wie ben je bang?", // Can be undefined for no header
		"content": [ // Contains the paragraphs (the <p> elements), can be an empty array for no content
			"We hebben de vorige les besproken dat het internet niet veilig is. Dat is een conclusie waar wij verder mee kunnen. Alleen wat moeten wij nu doen. Het internet is niet veilig maar wij moeten het wel gebruiken, voor school, werk en plezier.",
			"Een van de manier om hiernaar te kijken is, het indelen op het soort bedreigingen die we tegenkomen. Als we tegen wie we ons willen beschermen kunnen wij daarna kiezen hoe wij dat doen. We kunnen ook inschatten hoeveel moeite dit ons gaat kosten.",
			"Voor deze les delen wij het in 5 groepen in",
			"- Adverteerders",
			"- Oplichters",
			"- Hackers",
			"- Bekenden",
			"- Anderen",
			"We gaan nu eerst de groepen bespreken. Volgende les hebben we het over onze verdediging tegen deze bedreigingen."
		],
		"question": undefined, // Documentation on question is on the next item
		"next": true // Adds the next button ('buttonforward')
	},
	{
		"header": "Adverteerders",
		"content": [
			"Je bent misschien verbaast dat Social Media niet op de lijst van bedreigingen staat. we horen daar best wel veel over. De reden dat ze niet op deze lijst staan is dat ze allemaal onder de adverteerders horen.",
			"<img>imagemid,./IMG/Social_media.jpg,Een plaatje met de veschillende logos van Social Media",
			"Op dit moment verdienen alle Social Media hun geld met het verkopen van advertenties. Dit is waarom ze onze gegevens verzamelen en profielen van ons bijhouden. Facebook en Google zijn de meest bekende hierin maar ook Twitter en Discord verdienen hun geld door je profiel te verkopen.",
			"Hoe werkt dat dan? Als je een site met een advertentie bezoekt wordt je geveild. In een paar milliseconden wordt een veiling gestart. In de veiling staat jouw profiel met bijvoorbeeld: -een scholier - in Enschede - met hobby X. De adverteerders hebben al gekozen aan wie ze een advertentie willen laten zien voor hoeveel geld. Als jouw profiel past krijg je de advertentie te zien en betaald de adverteerder de eigenaar van de site geld.",
			"Dan kunnen wij ons afvragen wat daar mis mee is. Dat zijn verschillende dingen:",
			"- In je profiel staan misschien dingen die je liever niet met anderen wil delen. Bijvoorbeeld wat je op Google allemaal hebt opgezocht.",
			"- Als andere mensen toegang krijgen tot je profiel kunnen ze erachter komen wie jij bent en je opzoeken.",
			"- Het kan heel irritant zijn als je op het internet de hele tijd dezelfde reclames moet kijken, zeker als je het al gekocht hebt."
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
			"Het tweede gevaar op het internet zijn oplichters. Dit zijn mensen die proberen geld aan je te verdienen. Deze mensen versturen spam, maken nepreclames en sturen je ongevraagde berichten op Social Media.",
			"Het doel van deze mensen is geld aan je verdienen. Ze maken een mooi of zielig verhaal en proberen je op die manier zo ver te krijgen dat je ze geld geeft. Oplichting werkt eigenlijk alleen maar als je hebberig bent. Als het te mooi klinkt om waar te zijn is het dat meestal ook.",
			"Het versturen van een e-mail of een whatsapp bericht aan een miljoen mensen kost een paar euro. Uit onderzoek van een paar jaar geleden blijkt dat 2% van de mensen erin trapt. Als een oplichter 10 euro per persoon vraagt en de mail naar 1 miljoen mensen stuurt verdient deze dus.",
			"1.000.000 / 100 x 2 = 20.000 mensen",
			"20.000 X 10 = 200.000 euro.",
			"Dat is lekker verdienen."
		],
		"question": {
			"ask": "Als iets te mooi lijkt om waar te zijn",
			"answers": ["Dan moet je het doen", "Dan is het dat meestal ook", "Kan je het wel proberen"],
			"correct": 1
		},
		"next": true
	},
	{
		"header": "Hackers",
		"content": [
			"Behalve Social Media horen wij ook veel over hackers. Hackers kan je in drie groepen indelen.",
			"- White hats: Zij hacken allen op bestelling. Dit zijn de mensen die proberen bij bedrijven in te breken om te kijken of de beveiliging wel goed is.",
			"- Grey hats: Dit zijn de hackers die proberen bij bedrijven in te breken of wachtwoorden te kraken maar geen slechte bedoelingen hebben. Ze vinden het leuk of willen mensen waarschuwen.",
			"- Black hats: Dit zijn de slechteriken. Deze mensen hacken voor geld of voor een land. Ze proberen bij computers binnen te komen om geld te stelen of om achter de geheimen van een land te komen.",
			"Als je bang bent voor hackers heb ik slecht nieuws en goed nieuws.",
			"Het slechte nieuws is: Je bent niet zo heel erg belangrijk.",
			"Het goede nieuws is: Je bent niet zo heel erg belangrijk.",
			"De white en gray hat hackers heb je geen last van. Ze willen spelen op het internet en het hacken van jouw account in niet interessant genoeg.",
			"De black hats zijn iets gevaarlijker. Maar wij zijn niet zo belangrijk. Er zijn veel mensen met meer geld en met betere geheimen. De black hats gaan achter die andere mensen aan."
		],
		"question": {
			"ask": "Een computer hacken is verboden",
			"answers": ["Ja, je mag niet hacken", "Nee, het mag als je maar aangeeft wat je gedaan hebt", "Alleen als je gepakt wordt", "Nee, het mag met toestemming"],
			"correct": 3
		},
		"next": true
	},
	{
		"header": "Bekenden",
		"content": [
			"Waarom zou je bang zijn voor bekenden? Nou, wij doen heel veel dingen op het internet en wij willen niet altijd dat mensen die wij kennen alles weten wat wij uitspoken. Je kan vast wel iets bedenken dat je op het internet doet wat je liever niet hebt dat je ouders weten.",
			"Mijn moeder hoeft van mij niet te weten hoe veel geld ik aan mijn hobbies uitgeef. Het is nu mijn eigen geld en ze kan mijn zakgeld niet meer afpakken. Maar nog steeds, je wil niet dat je ouders, buren of de persoon die je leuk vindt alles van je uit kan vinden."
		],
		"question": undefined,
		"next": true
	},
	{
		"header": "Anderen",
		"content": [
			"Dan is er nog een laatste groep: de anderen. Dit zijn mensen waarvan je nu nog niet weet dat ze eng kunnen zijn. Bijvoorbeeld je zorgverzekering in de toekomst of de persoon op Xbox Live die je net uitschold. Het zou je buurman maar zijn...",
			"Wij weten niet altijd welke informatie van ons lekt en ons in de toekomst in de weg gaat zitten.",
			"Een paar jaar geleden gaf ik les op het MBO. Op een dag tijdens de les was een van mijn studenten (we noemen hem Jochem) erg druk bezig met zijn mobiel. Hij leek zich ook wel wat zorgen te maken. Ik heb gevraagd wat er aan de hand was. Wat bleek: s ochtends was er een vechtpartij bij de bushalte. Een reiziger had de buschauffeur uitgescholden en de buschauffeur was gaan slaan. Iemand had dit gefilmd en mijn Jochem had dit op zijn Insta gezet. De persoon die aan het vechten was had dit gevonden en was Jochem via Insta aan het bedreigen.",
			"Hij heeft het filmpje offline gehaald en er is gelukkig verder niets gebeurd. Stel je dit wel even voor, wat kan iemand die je Instagram kan zien allemaal van je uitvinden. Andere mensen zijn soms wel eng. Daarom zit ik zo graag lekker alleen achter de computer :)"
		],
		"question": {
			"ask": "Het is mogelijk om precies te weten wie welke informatie van mij heeft",
			"answers": ["Dat klopt, je kan dit opvragen", "Nee, je weet niet wat computers allemaal doorgeven", "Dat klopt, ik weet wat ik op Social Media zet"],
			"correct": 1
		},
		"next": true
	},
	{
		"type": "review" // Set type of content to be the score page
	}
]