const questions =
// Stored into JS file instead of JSON because of CORS on local file system
// This file hosts all of the question pages (HTML) and questions
[
	{
		"header": "Hoe blijf je veilig", // Can be undefined for no header
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
			"ask": "Als je een adblocker installeert volgen adverteerders je ook niet meer", // The question
			"answers": [ // The answers available to give
				"Dat is waar ze worden geblokkeerd",
				"Dat is een beetje waar. Ze worden niet allemaal geblokkeerd",
				"Dat is niet waar, je ziet de advertenties alleen niet meer",
			],
			"correct": 2 // Index in "answers" of the correct answer
		},
		"next": true
	},
	{
		"header": "Oplichters",
		"content": [
		"Oplichters zitten op veel plaatsen op het internet. We hebben op een paar plaatsen wel een grotere kans om ze tegen te komen.",
		"<t>E-mail",
		"Een van de plaatsen waar je vaak oplichters tegenkomt is in je e-mail. Ongewenste mail, spam, blijft binnenkomen hoe goed onze filters hiervoor ook worden.",
		"Het beste wat je kan doen is ongewenste mail niet openen en meteen verwijderen. Het is alleen lastig om te herkennen wat ongewenste mail is.",
		"Mail waar je niet om gevraagd hebt of die onverwacht aankomt is vaak ongewenst.",
		"Als je een mail krijgt van een bedrijf met daarin de vraag om in te loggen om iets te controleren. Klik niet op de link in de mail zelf. Ga met de browser naar de website van het bedrijf en log daar in. Als het goed is staat de melding of het ding dat je moet controleren daar. Als dat niet zo is was het waarschijnlijk iemand die probeerde je te laten inloggen om je gegevens te stelen.",
		"<t>Social media",
		"Social media werkt voor veiligheid hetzelfde als bij e-mail. Klik niet op links in berichten tenzij je het al verwacht had of je weet waar het over gaat. Zelfs dan is het handig om goed op te blijven letten.",
		"Als je een link ontvangt via social media en je moet dan meteen inloggen, vraag je af of het wel klopt. Bij de apps die je veel gebruikt ben je vaak al ingelogd en is opnieuw inloggen niet nodig.",
		"Stuur geen gebruikersnamen en wachtwoorden via social media.",
		"<t>Zoekmachines",
		"We hebben ook te maken met oplichters die zoekmachines gebruiken om ons voor de gek te houden. De eerste zoekresultaten bij Google zijn vaak advertenties. Google controleert niet of deze advertenties ook veilig zijn en of je naar een veilige site gaat als je klikt.",
		"Een adblocker helpt en blokkeert veel van de advertenties. Ze zijn alleen niet perfect dus je kan het beste nog wel een beetje uitkijken.",
		"DuckDuckGo is een zoekmachine die je niet volgt en waar geen extra advertenties in de resultaten staan. Je kan een zoekopdracht eerst bij DuckDuckGo proberen en als je het niet kan vinden het via Google zoeken.",
		],
		"question": {
			"ask": "Spam kan je het beste", // The question
			"answers": [ // The answers available to give
				"Openen en op alle links klikken",
				"Verwijderen",
				"Openen",
				"Verwijderen en rapporteren"
			],
			"correct": 3 // Index in "answers" of the correct answer
		},
		"next": true
	},
		{
		"header": "Hackers",
		"content": [
		"Meestal hebben wij niet veel te maken met hackers. De meeste hackers willen snel veel geld verdienen. Als je niet veel geld hebt en je maakt het niet makkelijk gaan ze meestal op zoek naar iemand anders om lastig te vallen.",
		"Zorg wel dat je updates voor je computer/telefoon/tablet uitvoert. Software heeft soms fouten. Als deze fouten gevonden worden kunnen hackers dit gebruiken om je gemakkelijk te hacken. Veel updates zijn bedoeld om dit soort fouten op te lossen.",
		"Gebruik je overal hetzelfde wachtwoord? Of misschien drie verschillende wachtwoorden die je afwisselt? Dat is niet zo handig. Als dan een van je wachtwoorden lekt hebben anderen ook de wachtwoorden voor andere sites en apps.",
		"Een mogelijke oplossing is een wachtwoord manager. Ik gebruik zelf BitWarden. Deze is gratis te gebruiken. LET OP: Vergeet je wachtwoord van je wachtwoord manager niet. Dan kan je ook zelf niet meer bij je wachtwoorden.",
		],
		"question": {
			"ask": "Updates hoor je zo snel mogelijk uit te voeren", // The question
			"answers": [ // The answers available to give
				"Dat klopt niet",
				"Dat klopt",
			],
			"correct": 1 // Index in "answers" of the correct answer
		},
		"next": true
	},
		{
		"header": "Bekenden",
		"content": [
		"Het kan zo zijn dat wij niet willen dat andere mensen op onze computer kunnen zien wat wij allemaal op het internet doen. Je kan natuurlijk na elke keer je cookies en geschiedenis wissen. Als iemand anders de computer gebruikt en je hebt helemaal geen geschiedenis is dat natuurlijk ook een beetje verdacht.",
		"Om dit te voorkomen kan je incognito of privé modus gebruiken. Als je dit gebruikt slaat de computer de geschiedenis in dat venster van de browser niet op. LET OP: Dit helpt alleen tegen mensen die op je computer kijken. Op het internet weten ze nog steeds wat je doet. Als iemand thuis in het modem kan kijken kunnen ze ook uitvogelen welke sites je bezoekt.",
		"<t>prive modus Chrome",
		"<img>imagesmalll,./IMG/chrome_start_incog.jpg,Hamburgemenu New incognito window",
		"<img>imagemidl,./IMG/chrome_incog.jpg,Voorbeeld incognito venster",
		"<t>prive modus Edge,",
		"<img>imagesmalll,./IMG/edge_start_incog.jpg,Hamburgemenu New InPrivate window",
		"<img>imagemidl,./IMG/edge_incog.jpg,Voorbeeld incognito venster",
		"<t>prive modus Firefox",
		"<img>imagesmalll,./IMG/firefox_start_incog.jpg,Hamburgemenu New private window",
		"<img>imagemidl,./IMG/firefox_incog.jpg,Voorbeeld incognito venster",
		],
		"question": {
			"ask": "Incognito modus verstopt je op het internet", // The question
			"answers": [ // The answers available to give
				"Dat is waar, ze mogen je niet meer volgen.",
				"Dat is niet waar, het werkt allen op je eigen computer.",
				"Dat is waar, ze kunnen geen cookies plaatsen.",
				"Dat is niet waar, ze volgen je stiekem toch."
			],
			"correct": 1 // Index in "answers" of the correct answer
		},
		"next": true
	},
		{
		"header": "Anderen",
		"content": [
		"Dan hebben we nog de laatste groep. Andere mensen op het internet.",
		"Nu ga ik een beetje oud klinken. Toen ik begon op het internet was het niet de bedoeling om je eigen naam te gebruiken. Nu met social media zoals Facebook en Twitter is het normaal of zelfs verplicht om je eigen naam te gebruiken. Dit maakt het heel gemakkelijk om je te vinden. Als je een gebruikersnaam mag kiezen, kan je erover nadenken of je je eigen naam of een internetnaam wil gebruiken.",
		"Ik gebruik meestal spoon404 als naam op het internet. Mensen die mij kennen weten dat ik dit ben maar mensen die mij niet kennen kunnen mijn echte naam en persoonlijkheid niet gemakkelijk terug vinden. Ik kan ook een naam kiezen voor als ik niet wil dat iemand mij kan terugvinden. Het is dan wel belangrijk dat ik het aan niemand die ik ken vertel. Ook niet aan de mensen die alleen spoon404 kennen.",
		],
		"question": {
			"ask": "Ik (jij dus niet spoon404) heb een geheime naam op het internet", // The question
			"answers": [ // The answers available to give
				"Dat vertel ik niet",
				"Ja",
				"Nee",
				"Wel meer dan 1"
			],
			"correct": 0 // Index in "answers" of the correct answer
		},
		"next": true
	},

	{
		"type": "review" // Set type of content to be the score page
	}
]