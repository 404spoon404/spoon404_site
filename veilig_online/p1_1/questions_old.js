const questions =
// Stored into JS file instead of JSON because of CORS on local file system
// This file hosts all of the question pages (HTML) and questions
[
	{
		"header": "Is het internet veilig?", // Can be undefined for no header
		"content": [ // Contains the paragraphs (the <p> elements), can be an empty array for no content
			"De titel van deze les is: Is het internet veilig? Ik denk dat je al snapt wat het gewenste antwoord hierop is. Het internet is niet veilig. Dit komt doordat het internet niet gemaakt is om veilig te zijn.",
			"Het internet is uitgevonden door mensen zoals ik (alleen wat slimmer). Blank, man, wonend in een westers land, heteroseksueel. Op een gewone dag heb ik niet zoveel te vrezen. Er zijn maar weinig mensen die een hekel aan mij hebben om wie ik ben en de overheid heeft weinig reden om mij in de gaten te houden. Dit maakt mij een beetje naïef. Ik heb zelf niet zoveel beveiliging nodig en vergeet makkelijk dat het voor andere mensen anders kan zijn."
		],
		"question": undefined, // Documentation on question is on the next item
		"next": true // Adds the next button ('buttonforward')
	},
	{
		"header": "Spam",
		"content": [
			"<i>Spam is ongevraagde e-mail. We gebruiken de term ook voor ongewenste berichten op andere programma's. Bij Spam is het de bedoeling dat je ergens op klikt of iets koopt.",
			"De eerste Spam was een e-mail met reclame voor een nieuwe computer. Bij Spam wordt hetzelfde mailtje naar duizenden mensen tegelijk gestuurd. Omdat het sturen van e-mail (bijna) geen geld kost hoeven maar een paar mensen te reageren om hier geld mee te verdienen.",
			"Wat je het beste tegen Spam kan doen is ongevraagde, onverwachte e-mail niet openen."
		],
		"question": {
			"ask": "Wat doe je als je een email ontvangt die je niet vertrouwd?", // The question
			"answers": [ // The answers available to give
				"De instucties in de mail volgen",
				"Er op klikken",
				"Weggooien"
			],
			"correct": 2 // Index in "answers" of the correct answer (answers[2] is "Weggooien" in this case)
		},
		"next": true
	},
	{
		"header": "Phising",
		"content": [
			"Phising is een techniek om mensen iets te laten doen dat ze eigenlijk niet willen. Bijvoorbeeld het geven van een wachtwoord aan iemand die dat helemaal niet hoort te hebben.",
			"Bij Phising stuurt de dader een bericht aan één of meerdere mensen met de vraag daarin om iets te doen. Bijvoorbeeld via een link inloggen op een website. De truc hier is dat je helemaal niet inlogt op de website maar op een site die erop lijkt. Hierdoor heeft de aanvallen je gebruikersnaam en wachtwoord.",
			"Phising gebeurt veel via e-mail maar het kan natuurlijk ook via Whatsapp, andere Social Media of zelfs via SMS.",
			"De beste verdediging tegen Phising is hetzelfde als bij spam. Ongevraagde en onverwachte mail niet openen. Als de mail heel belangrijk is kan je zelf naar de website van de dienst gaan en daar inloggen om te kijken of er inderdaad iets aan de hand is."
		],
		"question": {
			"ask": "Je ontvangt een mail waarin staat dat je moet klikken en inloggen voor je cijfer voor een toets, wat doe je?",
			"answers": ["De mail weggooien en via de browser naar Somtoday gaan", "Controleren of de link wel naar Somtoday gaat en dan kliken", "Klikken op de mail en inloggen"],
			"correct": 0
		},
		"next": true
	},
	{
		"header": "Virussen",
		"content": [
			"Een virus is een ongewenst programma op je computer.",
			"<t>Ransomware", // <t> implies that it's another header (<h1>), it's implemented programmatically
			"Ransomware is een programma dat de gegevens op je computer gijzelt. Deze programma's komen vaak binnen via een Phisingmail.",
			"Op het moment dat je een ransomware programma op je computer hebt gaat dit op zoek naar je bestanden. Het kijkt bijvoorbeeld in je \"Mijn Documenten\". De bestanden die gevonden worden met een wiskundige berekening gecodeerd. Na die codering kan je ze zelf niet meer bekijken.",
			"Vaak neemt het programma de browser over en laat het zien waar je geld moet betalen om de code te krijgen om je bestanden te decoderen. Als je dit betaald hebt krijg je een meestal een code en kan je weer bij je bestanden."
		],
		"question": {
			"ask": "Je vind een USB-stick op de grond buiten de school, wat doe je?",
			"answers": ["Kijken wat er op staat", "Inleveren bij een docent", "Een virusscanner draaien en dan testen", "Het programma dat erop staat installeren"],
			"correct": 1
		},
		"next": true
	},
	{
		"header": "IP adres",
		"content": [
			"Het IP-adres is het adres van je computer. Je hebt twee IP-adressen als je een computer op een netwerk gebruikt.",
			"> Het IP-adres in het netwerk zelf. Dat begint meestal met 192, 172 of 10",
			"> Het IP-adres op het internet. Dit is de plaats waar het netwerk verbinding maakt met het internet. Thuis is dat je modem. Op school is dit het modem van de school.",
			"Als je een website bezoekt stuurt deze de site naar je IP-adres. De eigenaar van de website weet dus wat je IP is.",
		],
		"question": {
			"ask": "Als je een website bezoekt weet de eigenaar waar je woont",
			"answers": ["Dat is niet waar", "Dat is waar", "Ja, ze hebben het IP adres", "Dat is niet waar. De politie kan het wel opzoeken"],
			"correct": 3
		},
		"next": true
	},
	{
		"header": "Cookie",
		"content": [
			"Een Cookie is een klein bestand dat een website op je computer zet. Als een andere pagina hierom vraag stuurt je computer de gegevens uit het Cookie weer terug naar de website",
			"Dit kan voor handige dingen gebruikt worden, bijvoorbeeld onthouden dat je al ingelogd bent of wat je in je winkelwagentje hebt. Dit heten functionele cookies",
			"Het kan ook gebruikt worden om te kijken wat je verder al op het internet gedaan hebt en zo bijhouden wie je bent en wat je leuk vindt.",
		],
		"question": {
			"ask": "Welke cookies moet je accepteren om een site goed te laten werken?",
			"answers": ["analyse cookies", "functionele cookies", "alle cookies", "optionele cookies"],
			"correct": 1
		},
		"next": true
	},
	{
		"header": "Ad-network",
		"content": [
			"Een netwerk van bedrijven die je volgen. Deze bedrijven gebruiken Cookies en andere technieken om te kijken welke website je bezoekt, wat je leuk vindt en welke dingen je koopt.",
			"Ze stoppen deze gegevens in een database en bieden op basis daarvan advertenties aan.",
		],
		"question": {
			"ask": "Weet Facebook ook wat je doet op niet Facebook sites?",
			"answers": ["Alleen als je cookies accepteert", "Alleen als je een Facebook account hebt", "Nee", "Ja"],
			"correct": 3
		},
		"next": true
	},
	{
		"header": "Digitale voetafdruk",
		"content": [
			"Alle informatie die je op andere computers achterlaat als je het internet gebruikt.",
			"Dit is in ieder geval je IP-adres. Daarnaast je Cookies maar ook hoe groot je scherm is, welke browser je gebruikt en alles wat ze verder te weten kunnen komen.",
			"Adverteerders gebruiken je digitale voetafdruk om je advertenties te geven die bij je passen.",
		],
		"question": {
			"ask": "Als je alle gegevens van je computer en de sites die je bezoekt bij elkaar zet, ben je dan uniek?",
			"answers": ["Ja", "Nee"],
			"correct": 0
		},
		"next": true
	},
	{
		"header": "2FA",
		"content": [
			"2 factor authenticatie. In het Nederlands is dit twee-staps verificatie. Dit is een inlog methode waar alleen een wachtwoord niet voldoende is. Je moet nog een stap zetten om in te kunnen loggen.",
			"Dit kan met een e-mail, een app op je telefoon of een apparaat dat een code laat zien (een token)",
		],
		"question": {
			"ask": "Wat is het grootste nadeel van 2 factor authenticatie?",
			"answers": ["Je moet je 2e factor altijd bij je hebben", "Het kost veel tijd om in te loggen", "Je bent niet meer te hacken", "Als je de 2e factor kwijt bent kan je niet meer inloggen"],
			"correct": 3
		},
		"next": true
	},
	{
		"type": "review" // Set type of content to be the score page
	}
]