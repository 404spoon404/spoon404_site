//let numberOfQuestions = questions.length;
let questionsOnPage = document.querySelectorAll(".question");

var test = 'question1'
var main = document.querySelector("div.main");

console.log(questions[test].ask);

questionsOnPage.forEach(questionHTML);

// ---- Functions ----

function questionHTML(questionName) {
	document.getElementById(questionName.id).innerHTML = questionMaker(questionName.id);
}

function questionMaker(qName) {

	let curQuest = qName;
	var fullText = document.createElement("div");
	fullText.innerText = questions[curQuest].ask;
	return fullText;

}