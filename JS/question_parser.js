//let numberOfQuestions = questions.length;
let questionsOnPage = document.querySelectorAll(".question");

var test = 'question1'

//console.log(questions[test].ask);

questionsOnPage.forEach(questionMaker);

// ---- Functions ----

function questionHTML(questionName) {
	document.getElementById(questionName.id).innerHTML = questionMaker(questionName.id);
}

function questionMaker(qName) {

	let curQuest = qName.id;
	let curElement = document.querySelector("#"+curQuest);
	
	var fullText = document.createElement("div")
	fullText.innerHTML = questions[curQuest].ask + "</br>";
	console.log(fullText)
	curElement.appendChild(fullText)
	return fullText;

}