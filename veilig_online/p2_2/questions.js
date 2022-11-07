const questions =
// Stored into JS file instead of JSON because of CORS on local file system
// This file hosts all of the question pages (HTML) and questions
[
	{
		"header": "Hoe volgen ze je?", // Can be undefined for no header
		"content": [ // Contains the paragraphs (the <p> elements), can be an empty array for no content
			"In 2.1 hebben we gekeken hoe het bezoeken van een website werkt. We hebben de verschillende onderdelen van een verbinding bekeken en weten nu dat als wij een website bezoeken wij deze naar onze eigen computer downloaden.",
			"Deze les gaan we kijken hoe we dan gevolgd worden en wat we daaraan kunnen doen. De twee onderwerpen zijn Cookies en Tracking content. Als bonus hebben wij het over een DDOS.",
			"Eerst even als herinnering het schema van vorige les.",
			"<img>imagemidl,./IMG/overzicht_netwerken.png,Een totaaloverzicht van het netwerk"
		],
		"question": undefined, // Documentation on question is on the next item
		"next": true // Adds the next button ('buttonforward')
	},
	{
		"header": "Cookies",
		"content": [
			"Hieronder staat het schema van de vorige les maar dan iets verder uitgezoomd. In plaats van 1 datacentrum hebben we er nu 3. Deze gaan we in de rest van de uitleg gebruiken",
			"<img>imagemidl,./IMG/totaal_leeg.jpg,",
			"<t>Login cookie",
			"Hoe werkt een login cookie? Als je voor het eerst een website bezoekt ontvang je de eerste pagina en kan je inloggen.",
			"<img>imagemidl,./IMG/website_bezoek.jpg,",
			"Als je dan je login gegevens hebt ingevuld en je drukt op login. Worden deze gegevens naar de computer waar de website op staat gestuurd. De computer controleert dit en maakt een cookie. Dit cookie is een soort toegangskaartje. Er staat een code op die ervoor zorgt dat je alleen met dit cookie toegang krijgt.",
			"De site stuurt dit cookie terug naar je computer en je browser bewaart dit.",
			"<img>imagemidl,./IMG/wbsite_login.jpg,",
			"Als je nu ergens op de website klikt stuurt je computer niet alleen waar je op hebt geklikt maar ook het cookie naar de website. De server controleert dit en stuurt je de volgende pagina.",
			"<img>imagemidl,./IMG/website_login_cookie.jpg,",
			"<t>Analytische cookies",
			"Cookies worden niet alleen gebruikt voor inloggen. De eigenaar van een website wil vaak weten wat je op de website doet. Hoelang kijk je naar een pagina, zoom je in en wat doe je verder. Hiervoor gebruiken ze analytische cookies.",
			"Als je klikt op een link op de site stuur je een verzoek naar de server, vaak dat je een andere pagina wil zien. De server zet de pagina klaar en maakt een cookie waarin staat hoe je de vorige pagina gebruikt hebt. Dit cookie gaat mee met de nieuwe pagina en je browser slaat dit op.",
			"<img>imagemidl,./IMG/website_analytisch_cookie.jpg,",
			"Als je nu op een andere link klikt stuurt je browser niet alleen de klik maar ook het vorige analytische cookie naar de server. Zo bewaar je zelf wat je allemaal op de site gedaan hebt. Als de eigenaar de analytische cookies bekijkt kunnen ze precies zien wat je allemaal gedaan hebt.",
			"<img>imagemidl,./IMG/website_analytisch_cookie2.jpg,",
		],
		"question": {
			"ask": "Functionele cookies zijn nodig om te kunnen inloggen.", // The question
			"answers": [ // The answers available to give
				"Dat is waar, je gebruikersnaam en wachtwoord staan erin",
				"Dat is waar, het is je toegangsbewijs",
				"Dat is niet waar, de server kan mijn IP onthouden",
			],
			"correct": 1 // Index in "answers" of the correct answer (answers[2] is "Weggooien" in this case)
		},
		"next": true
	},
	{
		"header": "Tracking Content",
		"content": [
			"De functionele cookies zijn nodig om het internet goed te laten werken. Analytische cookies zijn handig voor de makers van websites. Er zijn ook cookies die alleen maar gemaakt zijn om je te volgen op het internet. Dit zijn tracking cookies.",
			"Als je een pagina bezoekt en je klikt gaat er weer een verzoek naar de website. Deze maakt een tracking cookie. Je ontvangt nu de pagina en een nieuw tracking cookie.",
			"<img>imagemidl,./IMG/website_tracking_cookie1.jpg,",
			"Bij de volgende klik gaat je tracking cookie mee. De server weet nu dat je de volgende pagina wil hebben maar ze weten ook wat je hiervoor op de pagina gedaan hebt. Ze kunnen het tracking cookie naar een advertentie server sturen. Hier start een veiling met jouw gegevens. En je krijgt de advertentie op basis van de dingen die je al op site gedaan hebt.",
			"<img>imagemidl,./IMG/website_tracking_cookie2.jpg,",
			"Het is niet zo erg als dit gebeurt op basis van maar één website. De meeste websites weten niet zo heel veel van ons. Adverteerders willen alleen graag nog meer informatie van je hebben. En daar hebben ze iets voor verzonnen.",
			"<img>imagemidl,./IMG/website_tracking_cookie3.jpg,",
			"Als je een website bezoekt stuur je de tracking cookie naar de site die je bezoekt. Als er op die site iets staat dat van een andere server komt (bijvoorbeeld een dit vind ik leuk van Facebook) kan het tracking cookie ook naar die andere server gestuurd worden.",
			"Deze servers bewaren ook gegevens uit oude tracking cookies. Andere websites die je eerder bezocht hebt. Nu hebben ze informatie van nog meer dan één website. Ze weten dus precies wat je allemaal gedaan hebt. Van die informatie maken ze een profiel. Met dit profiel sturen ze je een advertentie die precies bij je past.",
			"<img>imagemidl,./IMG/website_tracking_cookie4.jpg,",
			"",
			"",
		],
		"question": {
			"ask": "In een analytisch cookie staan alle sites die je bezocht hebt",
			"answers": [
			"Dat is waar, anders kunnen ze je niet volgen",
			"Dat is niet waar, een cookie kan alleen praten met de site waar het vandaan komt",
			"Dat is niet waar, een cookie kan geen adressen bewaren",
			"Dat is waar, anders ontvang je veel teveel cookies",
			],
			"correct": 1
		},
		"next": true
	},
	{
		"header": "DDOS",
		"content": [
			"We hebben het in deze lessen over online veiligheid. Ik heb gemerkt dat veel van mijn leerlingen wel last hebben gehad van een DDOS aanval. Daarom hier de bonus DDOS uitleg.",
			"Een DDOS is een Distributed Denial Of Service. In het Nederlands een verdeelde onderbreking van een dienst. Dat helpt nog niet echt met het begrijpen.",
			"Bij een DDOS vallen allemaal verschillende computers uit heel de wereld één adres aan. Door met zijn allen tegelijk naar een adres te gaan kan de computer aan de andere kant de drukte niet meer aan en valt het uit. Een DDOS is eigenlijk een file op het internet.",
			"Om een DDOS uit te voeren heb je een CnC (Command and Control) server nodig en verschillende gehackte computers. De gehackte computers noemen we ook wel bots of zombies. Hierom is het verboden om een DDOS te doen. Je gebruikt gehackte computers van andere mensen. Dat mag niet.",
			"De eigenaar van de DDOS zet in de CnC server wat het IP-adres is van de verbinding die aangevallen moet worden. Deze server stuurt de opdracht naar alle zombies.",
			"<img>imagemidl,./IMG/DDOS1.jpg,",
			"De zombies gaan allemaal proberen het adres te bezoeken. In het plaatje zijn het er drie. In de werkelijkheid zijn dit duizenden computers tegelijk. Als jouw verbinding thuis het doel is stopt je modem de aanval. Je internet is wel heel traag of valt uit maar ze komen je netwerk niet binnen.",
			"<img>imagemidl,./IMG/DDOS2.jpg,",
			"Voor iemand met een website of een onlinedienst gebeurd er iets anders. Als de DDOS gericht is op de website laat het modem de aanval netjes door. Het modem kan niet ziet wat echte aanvragen zijn en wat niet. De webserver krijgt het nu heel druk. Als de verbinding heel goed is kan de server zelfs oververhitten. Niemand kan de website meer bezoeken en de dienst(de website) is onderbroken.",
			"<img>imagemidl,./IMG/DDOS3.jpg,",
		],
		"question": {
			"ask": "Je mag als grap een DDOS op iemand laten doen",
			"answers": ["Dat is waar, als ik toestemming heb",
			"Dat is niet waar, omdat je gehackte computers moet hebben",
			"Dat is waar, een DDOS maakt niets kapot",
			"Dat is niet waar, je mag niet hacken"],
			"correct": 1
		},
		"next": true
	},
	
	{
		"type": "review" // Set type of content to be the score page
	}
]
