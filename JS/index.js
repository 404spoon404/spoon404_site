function createListItem(url, title, click) {
	var li = document.createElement("li");
	// Bewerk class hier wanneer nodig \/
	li.innerHTML = "<a class=\"sidebar_link\" href=\"" + url + (click ? "\" onclick=\"" + click : "") + "\"> " + title.replaceAll("\n", "<br>") + " </a>";
	return li;
}

function chptr(index) {
	var q = document.querySelector("div.sidebar ul div.selection_menu");
	q.innerHTML = "";
	q.appendChild(createListItem("#", "Terug", "createList()"));
	for (var i = 0; i < lessons[index].paragraphs.length; i++) {
		q.appendChild(createListItem("./" + lessons[index].id + "/" + lessons[index].paragraphs[i].id + "/questions.html?q=0", lessons[index].paragraphs[i].title));
	}
}

function createList() {
	var q = document.querySelector("div.sidebar ul div.selection_menu");
	q.innerHTML = "";
	for (var i = 0; i < lessons.length; i++) {
		q.appendChild(createListItem("#", lessons[i].name, "chptr(" + i + ")"));
	}
}

createList();