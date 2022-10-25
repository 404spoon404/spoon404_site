//Objects with questions
//
const question1 = {
	QuestNr: "1",
	Question: "Hoeveel is goed?",
	AswerRight: "vier",
	Answers: ["een", "twee", "drie", "vier"]
};

const question2 = {
	QuestNr: "1",
	Question: "Hoeveel is goed?",
	AswerRight: "vier",
	Answers: ["duck", "twee", "drie", "vier"]
};


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
	console.log(questionName)
	console.log(questionEV.QuestNr)
	//write text of the question
	text = '<div id="' + questionName + '_text"> <p>' + questionTxt + '</p> </div>'; 
	//add the text of the buttons
	buttons.forEach(buttonfiller);
	//add the div for the answer
	text += '<div id="' + questionName + '_answer"><br></div>';
	return text;
}

function buttonfiller(answerTxt) {
	text += '<button onclick=tester(' + questionNr + ',"' + answerTxt + '") class="button_vraag">' + answerTxt + '</button>';
}

function feedback(question_Nr) {
	document.getElementById(question_Nr.id).innerHTML = buttonmaker(question_Nr.id)
	
}

function tester(reply, replyAnswer) {
	let replyQuestion = eval('question'+reply)
	if (replyAnswer === replyQuestion.AswerRight) {
		console.log("yeet")
	}
}
