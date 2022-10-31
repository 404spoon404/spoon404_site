var s = location.pathname.substring(0, location.pathname.lastIndexOf("/")), s = s.substring(0, s.lastIndexOf("/")) + "&" + s.substring(s.lastIndexOf("/") + 1), s = s.substring(s.lastIndexOf("/") + 1).replaceAll("&", "/");
var o = Object.fromEntries(new URLSearchParams(window.location.search).entries())["id"];
if (o == undefined || +o < 0) o = 0;
o = +o; // Converts the parameter to a number
if (o >= questions.length) o = questions.length - 1;
var q = questions[o];
var main = document.querySelector("div.main");

(async function() { // Wrapped inside local function so the function can return (performance)
	if (q.type == "review") {
		var score = NEW("div");
		score.id = "Score";
		var k = 0;
		for (var i = 0; i < questions.length; i++) {
			if (!questions[i].question) continue;
			k++;
			var result = sessionStorage.getItem(s + "/" + i);
			if (result == "0") {
				var d = NEW("div", undefined, "<p> Vraag " + k + '</br>' + questions[i].question.ask + "</br> Is nog niet goed</p>");
				d.className = "answerInCorrect";
				score.appendChild(d);
				continue;
			}
			if (result == "1") {
				var d = NEW("div", undefined, "<p> Vraag " + k + '</br>' + questions[i].question.ask + "</br> Is goed</p>");
				d.className = "answerCorrect";
				score.appendChild(d);
				continue;
			}
			var d = NEW("div", undefined, "<p> Vraag " + k + '</br>' + questions[i].question.ask + "</br> Heb je nog niet beantwoord</p>");
			d.className = "answerInCorrect";
			score.appendChild(d);
		}
		var nav = NEW("button", "Reset score");
		nav.className = "navbutton";
		nav.onclick = () => {
			sessionStorage.clear();
			location.reload();
		};
		main.appendChild(score);
		main.appendChild(nav);
		return;
	}
	if (q.header) {
		// Information header
		main.appendChild(NEW("h1", " " + q.header + " "));
	}
	// Information content
	for (var i = 0; i < q.content.length; i++) { 
		if (q.content[i].startsWith("<t>")) {
			main.appendChild(NEW("h1", " " + q.content[i].substring(3) + " "))
		}
		else if (q.content[i].startsWith("<img>")) {
			main.appendChild(IMG("img" , q.content[i].substring(5)))
		}
		else {
			main.appendChild(NEW("p", " " + q.content[i] + " "))
		}
	}
	if (q.question) {
		// Question generator
		var txt = '<div id="question_text"> <p>' + q.question.ask + '</p> ';
		for (var i = 0; i < q.question.answers.length; i++) {
			txt += '<button class="button_vraag" onclick="tester(' + i + ')">' + q.question.answers[i] + '</button>';
		}
		var uq = NEW("div", undefined, txt + '</div><div id="question_answer"><p><br></p></div>');
		uq.className = "question";
		uq.id = "question";
		main.appendChild(uq);
	}
	if (q.next) {
		// Next button
		var v = NEW("a", "  Volgende >> ");
		v.className = "navbutton";
		v.id = "buttonforward";
		v.href = "?id=" + (o + 1);
		main.appendChild(v);
	}
})();

function IMG(e, data, h){
	var l = document.createElement(e);
	var dataAr = data.split(",")
	l.setAttribute("class", dataAr[0])
	l.setAttribute("src", dataAr[1])
	l.setAttribute("alt", dataAr[2])

	if (h) l.innerHTML = h;
	return l;
}


function NEW(e, t, h) {
	var l = document.createElement(e);
	if (t) l.innerText = t;
	if (h) l.innerHTML = h;
	return l;
}

function tester(id) {
	if (id != q.question.correct) {
		document.getElementById('question_answer').innerHTML = '<p>Dat is niet het goede antwoord</p>';
		sessionStorage.setItem(s + "/" + o, 0);
		return;
	}
	document.getElementById('question_answer').innerHTML = '<p>Goed</p>';
	sessionStorage.setItem(s + "/" + o, 1);
}