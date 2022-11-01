const questions =
// Stored into JS file instead of JSON because of CORS on local file system
// This file hosts all of the question pages (HTML) and questions
[
	{
		"header": "Hoe werkt het internet?", // Can be undefined for no header
		"content": [ // Contains the paragraphs (the <p> elements), can be an empty array for no content
			"Je weet al best wel wat van veiligheid online. Als je veel weet kan je ermee gaan spelen. Dit is ook wat hackers doen. Ze zorgen dat ze zoveel mogelijk weten over een onderwerp en gaan dan kijken hoe ze het kunnen breken. Voor hackers is de wereld een grote puzzel. Je moet alleen wel de puzzelstukjes hebben voor je ermee aan de slag gaat.",
			"Deze les gaan we de puzzelstukjes bekijken van de werking van het internet. De volgende les gaan we kijken wat we daar verder mee kunnen",
			"Het diagram hieronder is een kort overzicht van hoe het internet werkt. Dit bespreken we verder in de volgende pagina's",
			"<img>imagelarge,./IMG/Overzicht_netwerken.png,Een totaaloverzicht van het netwerk"
		],
		"question": undefined, // Documentation on question is on the next item
		"next": true // Adds the next button ('buttonforward')
	},
	{
		"header": "Begrippen",
		"content": [
			"Hiero",
			"<img>imagesmallr,./IMG/Eigen_computer_inside.png,Computer icon",
			"<t>Computer",
			"Dit is je eigen computer. De rode rand er om heen is de Firewall. Deze zorgt ervoor dat andere machines niet zomaar op je computer kunnen kijken.",
			"Onder de zwarte streep staat je opslag. Dat is dus je harde schijf.",
			"Je ziet dat er een rood vakje om je browser heen staat. Dit is de Sandbox (zandbak). Je browser kan wel dingen op je harde schijf opslaan en zelfs programma's op websites draaien maar krijgt een eigen stukje computer dat niet met de rest van je computer kan praten. Dit zorgt ervoor dat een website niet zomaar je hele harde schijf kan wissen.",
			"<img>imagevsmallr,./IMG/Browser.png,Browser icon",
			"<t>Browser",
			"Dit is het programma dat je gebruikt om het Internet op te gaan. Dit kan Edge, Chrome, Firefox, Safari of een ander programma zijn.",
			"<img>imagevsmallr,./IMG/Modem_firewall.png,Modem en firewall icon",
			"<t>Modem en Firewall",
			"Tussen je thuisnetwerk zitten je modem en in het modem zit een firewall. Het modem is het apparaat dat verbinding maakt met je provider. Dit kan met Coax (tv kabel), ADSL (telefoonlijn) of Glasvezel werken.",
			"De firewall zorgt ervoor dat de rest van het Internet niet zomaar in je netwerk kan kijken. Deze firewall houdt alle vragen van buiten je eigen netwerk tegen. Niemand kan in je netwerk kijken zonder deze Firewall te hacken.",
			"<img>imagevsmallr,./IMG/DNS_server.png,een computer",
			"<t>DNS Server",
			"Een DNS (Domain Name System) server is een computer op het internet die de namen van websites vertaald naar de bijbehorende IP (Internet Protocol) adressen. Het IP adres kan je zien als de postcode en het huisnummer van een internetverbinding.",
			"<img>imagesmallr,./IMG/Datacentrum.png,een computer",
			"<t>Datacentrum",
			"Een datacentrum is een gebouw waar heel veel computers staan. In dit voorbeeld is het een datacentrum waar verschillende websites gehost worden. Het hosten van een website is het aanbieden van de site op het internet.",
			"<img>imagevsmallr,./IMG/Server.png,een computer",
			"<t>Server",
			"Een server is een computer die bedoeld is om informatie aan andere computers te geven. Bij een webserver is de informatie de website. Microsoft Teams heeft ook servers deze servers bewaren de gegevens in Teams en zorgen dat de gebruikers met elkaar kunnen praten.",
			"<img>imagevsmallr,./IMG/Webserver.png,een computer",
			"<t>Webserver",
			"Een server met als enige doel het aanbieden van een of meer websites."
		],
		"question": {
			"ask": "Een browser kan zelf programma's op je computer installeren.", // The question
			"answers": [ // The answers available to give
				"Dat is waar, maar alleen in de Sandbox",
				"Dat is waar",
				"Dat is niet waar",
			],
			"correct": 2 // Index in "answers" of the correct answer (answers[2] is "Weggooien" in this case)
		},
		"next": true
	},
	{
		"header": "Netwerken",
		"content": [
			"Tekst",
			"<img>imagelarge,./IMG/Overzicht_netwerken.png,Een totaaloverzicht van het netwerk",
			"Dit is een overzicht van het netwerk dat je nodig hebt om een verbinding met een website te maken. In werkelijkheid staat er natuurlijk nog veel meer op het internet. Om het totaal van het internet in te schatten mag je de rechterkant van het plaatje  ongeveer 4 miljard herhalen. Dat is het aantal IP adressen dat we nu kunnen gebruiken.",
			"Dit is al te weining dus we zijn met een nieuw soort IP adressen bezig. Daarmee kunnen 340.282.366.920.938.000.000.000.000.000.000.000.000 apparaten op het internet aansluiten.",
			"<t> Interne Netwerk",
			"<img>imagesmall,./IMG/Netwerk_binnen.png,Ingezoomd op netwerk binnen",
			"Dit is een voorbeeld van je eigen thuisnetwerk met je eigen computer uitvergroot.",
			"Elk apparaat in je netwerk heeft een eigen IP adres. Dit gebruikt je modem om de juiste informatie naar de goede computer te sturen. De IP adressen in je eigen netwerk beginnen met 192, 172 of 10. Dit hebben wij zo afgesproken. Het is aan de linkerkant van de Firewall. Het grote boze internet ziet deze dus niet. Het internet weet dus ook niet welk apparaat in je netwerk een site heeft bezocht. Je modem onthoud welk apparaat iets aan het internet gevraagd heeft en stuurt het naar de goede computer.",
			"<t> Externe netwerk",
			"<img>imagesmall,./IMG/Netwerk_buiten.png,Ingezoomd op netwerk buiten",
			"Dit is het grote boze internet. De verschillende aansluitingen hebben allemaal een eigen IP adres. Als je een website bezoekt heb je dus het IP adres van die aansluiting nodig.",
			"Je eigen huis heeft hier dus 1 eigen IP adres. Dit ziet elke website die je bezoekt."
		],
		"question": {
			"ask": "Een webiste kan zien vanaf welke computer je eeen website bezoekt",
			"answers": ["Dat is waar anders kan je de site niet zien", "Dat is niet waar, de site ziet alleen maar het IP van je huis", "Dat is niet waar, de firewall zit ertussen"],
			"correct": 1
		},
		"next": true
	},
	{
		"header": "Een website bezoeken 1",
		"content": [
			"Tekst",
			"<t> Begin verbinding DNS",
			"<img>imagemid,./IMG/DNS_intern.png,Een DNS request in netwerk",
			"De DNS aanvraag komt als eerste bij je modem. Je modem heeft ook een kleine database voor adressen. Websites die je veel bezoekt worden daar opgeslagen. In dit geval had je google.com al eerder opgezocht en geeft je router als antwoord 172.217.168.206. Je browser weet nu waar Google.com is.",
			"<t> Extern verbinding DNS",
			"<img>imagemid,./IMG/DNS_extern.png,Een DNS request op internet",
			"Als je nog niet eerder, of lang geleden bij Google geweest was weet je modem niet waar de website is. De machine stuurt je vraag dan door naar een DNS server. De eerste DNS server staat vaak bij je provider. Als die het antwoord ook niet weet wordt de vraag verder doorgestuurd naar DNS servers die meer adressen kennen. Dit gaat net zolang door tot je antwoord krijgt. Als het te lang duurt voor het antwoord terug komt geeft je browser aan dat de website niet gevonden kan worden.",
			"In dit voorbeeld weet de eerste DNS server het goede antwoord en geeft die het door aan je modem die het weer aan je computer verteld."
		],
		"question": {
			"ask": "Iemand die op het modem kan, kan zien welke sites je bezocht hebt",
			"answers": ["Dat is waar, het modem onthoud dit", "Dat is niet waar, het modem onthoud dit niet", "Dat is alleen waar als je DNS gebruikt", "Dat is waar, Het modem controleert alle verbindingen"],
			"correct": 0
		},
		"next": true
	},
	{
		"header": "Een website bezoeken 2",
		"content": [
			"Als je browser weet waar een site staat kan je deze bezoeken. De DNS aanvraag begint meteen nadat je een site aanklikt of op enter drukt. Daarna start het bezoeken van de site automatisch. Dit gaat dus heel snel.",
			"<t>De site bereiken",
			"<img>imagemid,./IMG/Site_load_overzicht.png,Het bezoeken van een webserver",
			"De browser stuurt een verzoek voor de site naar je modem. Deze onthoud welke computer dit gevraagd heeft en stuurt het door naar het grote boze Internet. Het Internet stuurt dit verzoek naar de computer met het IP adres van de website vaak is dit een datacentrum.",
			"De ontvanger heeft ook een modem en een firewall. Ze hebben alleen een gaatje in de firewall gemaakt. In het modem staat een regel. Als iemand de site wil bekijken mag dat.",
			"Het modem stuurt de vraag om de website naar de goede computer in het datacentrum die daarmee aan het werk gaat.",
			"<t>De site downloaden",
			"<img>imagemid,./IMG/Site_reply_overzicht.png,Het antwoord van de webserver",
			"Tekst"
		],
		"question": {
			"ask": "Een website dit je bezocht hebt staat op je harde schijg",
			"answers": ["Dat is waar, maar na een tijdje vergeet hij dit", "Dat is niet waar, de site staat op het Internet"],
			"correct": 0
		},
		"next": true
	},
	
	{
		"type": "review" // Set type of content to be the score page
	}
]
