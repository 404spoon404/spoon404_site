const questions =
// Stored into JS file instead of JSON because of CORS on local file system
// This file hosts all of the question pages (HTML) and questions
[
	{
		"header": "Hoe werkt het internet?", // Can be undefined for no header
		"content": [ // Contains the paragraphs (the <p> elements), can be an empty array for no content
			"Inleiding"
		],
		"question": undefined, // Documentation on question is on the next item
		"next": true // Adds the next button ('buttonforward')
	},
	{
		"header": "Begrippen",
		"content": [
			"Inleiding",
			"<img>imagevsmall,./IMG/Eigen_computer.png,Computer icon",
			"Computer",
			"<img>imagevsmall,./IMG/Browser.png,Browser icon",
			"Browser",
			"Sandbox",
			"<img>imagevsmall,./IMG/Modem_firewall.png,Modem en firewall icon",
			"Modem en Firewall",
			"<img>imagevsmall,./IMG/DNS_server.png,een computer",
			"DNS Server",
			"<img>imagevsmall,./IMG/Datacentrum.png,een computer",
			"Datacentrum",
			"<img>imagevsmall,./IMG/Server.png,een computer",
			"Server",
			"<img>imagevsmall,./IMG/Webserver.png,een computer",
			"Webserver"
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
		"header": "Netwerken",
		"content": [
			"Tekst",
			"<img>imagelarge,./IMG/Overzicht_netwerken.png,Een totaaloverzicht van het netwerk",
			"Tekst",
			"<t> Interne Netwerk",
			"<img>imagesmall,./IMG/Netwerk_binnen.png,Ingezoomd op netwerk binnen",
			"Tekst",
			"<t> Externe netwerk",
			"<img>imagesmall,./IMG/Netwerk_buiten.png,Ingezoomd op netwerk buiten",
			"Tekst"
		],
		"question": {
			"ask": "Je ontvangt een mail waarin staat dat je moet klikken en inloggen voor je cijfer voor een toets, wat doe je?",
			"answers": ["De mail weggooien en via de browser naar Somtoday gaan", "Controleren of de link wel naar Somtoday gaat en dan kliken", "Klikken op de mail en inloggen"],
			"correct": 0
		},
		"next": true
	},
	{
		"header": "Een website bezoeken 1",
		"content": [
			"Tekst",
			"<t> Begin verbinding DNS",
			"<img>imagemid,./IMG/DNS_intern.png,Een DNS request in netwerk",
			"Tekst",
			"<t> Extern verbinding DNS",
			"<img>imagemid,./IMG/DNS_extern.png,Een DNS request op internet",
			"Tekst"
		],
		"question": {
			"ask": "Je vind een USB-stick op de grond buiten de school, wat doe je?",
			"answers": ["Kijken wat er op staat", "Inleveren bij een docent", "Een virusscanner draaien en dan testen", "Het programma dat erop staat installeren"],
			"correct": 0
		},
		"next": true
	},
	{
		"header": "Een website bezoeken 2",
		"content": [
			"Tekst",
			"<t>De site bereiken",
			"<img>imagemid,./IMG/Site_load_overzicht.png,Het bezoeken van een webserver",
			"Tekst",
			"<t>De site downloaden",
			"<img>imagemid,./IMG/Site_reply_overzicht.png,Het antwoord van de webserver",
			"Tekst",
			"<t>Sandbox",
			"Tekst"
		],
		"question": {
			"ask": "Als je een website bezoekt weet de eigenaar waar je woont",
			"answers": ["Dat is niet waar", "Dat is waar", "Ja, ze hebben het IP adres", "Dat is niet waar. De politie kan het wel opzoeken"],
			"correct": 3
		},
	},
	
	{
		"type": "review" // Set type of content to be the score page
	}
]