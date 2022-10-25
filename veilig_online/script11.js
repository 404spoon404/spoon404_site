//Objects with questions
//
const question1 = {
	QuestNr: "1",
	Question: "Wat doe je als je een email ontvangt die je niet vertrouwd?",
	AswerRight: "Weggooien",
	Answers: ['een', 'Er op klikken', 'Weggooien', 'vier']
};

const question2 = {
	QuestNr: "2",
	Question: "Je ontvangt een mail met de antwoorden op de toets. Je kan op de mail klikken om in te loggen, wat doe je?",
	AswerRight: "Mail weggooien en via Teams vragen aan de verzender of het klopt",
	Answers: ["aapjesenzo"]
};

const question3 = {
	QuestNr: "3",
	Question: "Hoeveel is goed?",
	AswerRight: "vier",
	Answers: ["duck", "twee", "drie", "vier"]
};

const question4 = {
	QuestNr: "4",
	Question: "Hoeveel is goed?",
	AswerRight: "vier",
	Answers: ["duck", "twee", "drie", "vier"]
};

const question5 = {
	QuestNr: "5",
	Question: "Hoeveel is goed?",
	AswerRight: "vier",
	Answers: ["duck", "twee", "drie", "vier"]
};

const question6 = {
	QuestNr: "6",
	Question: "Hoeveel is goed?",
	AswerRight: "vier",
	Answers: ["duck", "twee", "drie", "vier"]
};

const question7 = {
	QuestNr: "7",
	Question: "Hoeveel is goed?",
	AswerRight: "vier",
	Answers: ["duck", "twee", "drie", "vier"]
};

const question8 = {
	QuestNr: "8",
	Question: "Hoeveel is goed?",
	AswerRight: "vier",
	Answers: ["duck", "twee", "drie", "vier"]
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
	return text;
}

function buttonfiller(answerTxt) {
	text += '<button onclick=tester(' + questionNr + ',"' + answerTxt + '") class="button_vraag">' + answerTxt + '</button>';
}

function feedback(question_Nr) {
	document.getElementById(question_Nr.id).innerHTML = buttonmaker(question_Nr.id)
	
}

function tester(reply, replyAnswer) {
	let replyQuestion = eval('question'+reply);
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