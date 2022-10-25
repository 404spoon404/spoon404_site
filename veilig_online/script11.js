//Objects with questions
//
const question1 = {
	QuestNr: "1",
	Question: "Wat doe je als je een email ontvangt die je niet vertrouwd?",
	AswerRight: "Weggooien",
	Answers: ["De instucties in de mail volgen", "Er op klikken", "Weggooien",]
};

const question2 = {
	QuestNr: "2",
	Question: "Je ontvangt een mail waarin staat dat je moet klikken en inloggen voor je cijfer voor een toets",
	AswerRight: "De mail weggooien en via de browser naar Somtoday gaan",
	Answers: ["De mail weggooien en via de browser naar Somtoday gaan", "Controleren of de link wel naar Somtoday gaat en dan kliken", "Klikken op de mail en inloggen"]
};

const question3 = {
	QuestNr: "3",
	Question: "Je vind een USB-stick op de grond buiten de school, wat doe je",
	AswerRight: "Inleveren bij een docent",
	Answers: ["Kijken wat er op staat", "Inleveren bij een docent", "Een virusscanner draaien en dan testen", "Het programma dat erop staat installeren"]
};

const question4 = {
	QuestNr: "4",
	Question: "Als je een website bezoekt weet de eigenaar waar je woont",
	AswerRight: "Dat is niet waar. De politie kan het wel opzoeken",
	Answers: ["Dat is niet waar", "Dat is waar", "Ja, ze hebben het IP adres", "Dat is niet waar. De politie kan het wel opzoeken"]
};

const question5 = {
	QuestNr: "5",
	Question: "Welke cookies moet je accepteren om een site goed te laten werken?",
	AswerRight: "functionele cookies",
	Answers: ["analyse cookies", "functionele cookies", "alle cookies", "optionele cookies"]
};

const question6 = {
	QuestNr: "6",
	Question: "Weet Facebook ook wat je doet op niet Facebook sites",
	AswerRight: "Ja",
	Answers: ["Alleen als je cookies accepteert", "Alleen als je een Facebook account hebt", "Nee", "Ja"]
};

const question7 = {
	QuestNr: "7",
	Question: "Als je alle gegevens van je computer en de sites die je bezoekt bij elkaar zet, ben je dan uniek?",
	AswerRight: "Ja",
	Answers: ["Ja", "Nee"]
};

const question8 = {
	QuestNr: "8",
	Question: "Wat is het grootste nadeel van 2 factor authenticatie?",
	AswerRight: "Als je de 2e factor kwijt bent kan je niet meer inloggen",
	Answers: ["Je moet je 2e factor altijd bij je hebben", "Het kost veel tijd om in te loggen", "Je bent niet meer te hacken", "Als je de 2e factor kwijt bent kan je niet meer inloggen"]
};

let numberOfQuestions = 8;

//Load all questionnumbers on page.
let Questions_page = document.querySelectorAll(".question");

//In case I need the nodelist again
//console.log(Questions_page)

//Create questions on page
Questions_page.forEach(feedback)
//document.getElementById(testje[0].id).innerHTML = buttonmaker(question1);

//document.getElementById("vraag2").innerHTML = buttonmaker(question2);


// ---- Functions ----

function buttonmaker(question) {
	// init the text of the question and the array with answers
	let questionName = question;
	// Turn questionstring into Object...
	questionEV = eval(question);
	questionNr = questionEV.QuestNr
	let buttons = questionEV.Answers;

	let questionTxt = questionEV.Question;

	//write text of the question
	text = '<div id="' + questionName + '_text"> <p>' + questionTxt + '</p> </div>'; 
	//add the text of the buttons
	buttons.forEach(buttonfiller);
	//add the div for the answer
	text += '<div id="' + questionName + '_answer"><p><br></p></div>';
	console.log(text)
	return text;

}

function buttonfiller(answerTxt) {
	answerTxtQuo = '\"' + answerTxt + '\"'
	text += "<button class='button_vraag' onclick='tester(" + questionNr + "," + answerTxtQuo +")' >" + answerTxt + "</button>";
}

function feedback(question_Nr) {
	document.getElementById(question_Nr.id).innerHTML = buttonmaker(question_Nr.id)
	
}

function tester(reply, replyAnswer) {
	let replyQuestion = eval('question'+reply);
	console.log(replyQuestion.QuestNr)
	let storeId = 'question' + replyQuestion.QuestNr;
	if (replyAnswer === replyQuestion.AswerRight) {
		document.getElementById('question' + reply + '_answer').innerHTML = '<p>Goed</p>';
		sessionStorage.setItem(storeId,1);
	}
	else {
		document.getElementById('question' + reply + '_answer').innerHTML = '<p>Dat is niet het goede antwoord</p>';
		sessionStorage.setItem(storeId,0);
	}
}

function showscore() {
	console.log(sessionStorage.length)
	let scoreTxt = ''
	for (let i = 1; i <= numberOfQuestions; i++){
		answerQuestion = 'question' + i;
		answerQuestionEV = eval(answerQuestion)
		console.log(answerQuestion)
		result = sessionStorage.getItem(answerQuestion)
		console.log(result)
		if (result == 1) {
			scoreTxt += '<div class="answerCorrect"><p> Vraag ' + answerQuestionEV.QuestNr + '</br>' + answerQuestionEV.Question + '</br> Is goed</p></div>'
		}
		else if (result == 0) {
			scoreTxt += '<div class="answerInCorrect"><p> Vraag ' + answerQuestionEV.QuestNr + '</br>' + answerQuestionEV.Question + '</br> Is nog niet goed</p></div>'
		}
		else {
			scoreTxt += '<div class="answerInCorrect"><p> Vraag ' + answerQuestionEV.QuestNr + '</br>' + answerQuestionEV.Question + '</br> Heb je nog niet beantwoord</p></div>'
		}
	document.getElementById("Score").innerHTML = scoreTxt;
	}
}

function resetscore() {
	sessionStorage.clear()
	showscore()
}