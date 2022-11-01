const questions =
// Stored into JS file instead of JSON because of CORS on local file system
// This file hosts all of the question pages (HTML) and questions
[
	{
		"header": "Voor wie ben je bang?", // Can be undefined for no header
		"content": [ // Contains the paragraphs (the <p> elements), can be an empty array for no content
			"Inleiding"
		],
		"question": undefined, // Documentation on question is on the next item
		"next": true // Adds the next button ('buttonforward')
	},
	{
		"header": "Adverteerders",
		"content": [
			"Tekst"
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
		"header": "Oplichters",
		"content": [
			"Tekst",
		],
		"question": {
			"ask": "Je ontvangt een mail waarin staat dat je moet klikken en inloggen voor je cijfer voor een toets, wat doe je?",
			"answers": ["De mail weggooien en via de browser naar Somtoday gaan", "Controleren of de link wel naar Somtoday gaat en dan kliken", "Klikken op de mail en inloggen"],
			"correct": 0
		},
		"next": true
	},
	{
		"header": "Hackers",
		"content": [
			"Tekst",
		],
		"question": {
			"ask": "Je vind een USB-stick op de grond buiten de school, wat doe je?",
			"answers": ["Kijken wat er op staat", "Inleveren bij een docent", "Een virusscanner draaien en dan testen", "Het programma dat erop staat installeren"],
			"correct": 0
		},
		"next": true
	},
	{
		"header": "Bekenden",
		"content": [
			"Tekst",
		],
		"question": {
			"ask": "Als je een website bezoekt weet de eigenaar waar je woont",
			"answers": ["Dat is niet waar", "Dat is waar", "Ja, ze hebben het IP adres", "Dat is niet waar. De politie kan het wel opzoeken"],
			"correct": 3
		},
		"next": true
	},
	{
		"header": "Anderen",
		"content": [
			"Tekst",
		],
		"question": {
			"ask": "Als je een website bezoekt weet de eigenaar waar je woont",
			"answers": ["Dat is niet waar", "Dat is waar", "Ja, ze hebben het IP adres", "Dat is niet waar. De politie kan het wel opzoeken"],
			"correct": 3
		},
		"next": true
	},
	{
		"type": "review" // Set type of content to be the score page
	}
]