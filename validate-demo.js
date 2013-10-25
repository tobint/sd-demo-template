var errors = [];

function demoValidateLoad() {
	validateTitle();
	validateDescription();
	validateAuthor();
	validateHeader();
	if(errors.length>0) {
		var warning = document.createElement("div");
		warning.id = "validateDemoWarning";
		warning.innerHTML = errors.join("<br/>");
		warning.style.width = "100%";
		warning.style.backgroundColor = "red";
		warning.style.position="fixed";
		warning.style.zIndex = 100;
		warning.style.top = "0px";
		warning.style.left = "0px";
		warning.style.transition = "opacity 1s linear";
		warning.style.opacity = "100";
		document.body.appendChild(warning);
		setTimeout(setOpacity, 100);
	}
}

function setOpacity() {
	var warning = document.getElementById("validateDemoWarning");
	warning.style.opacity = "0";
}

function validateTitle() {
	var title = document.getElementsByTagName("title")[0];
	return validateElement(title, "title");
}

function validateDescription() {
	var description = document.querySelector("meta[name='description']").getAttribute("content");
	return validateElement(description, "description");
}

function validateAuthor() {
	var author = document.querySelector("meta[name='author']").getAttribute("content");
	return validateElement(author, "author");
}

function validateHeader() {
	var header = document.querySelector(".page-header>h1");
	return validateElement(header, "header");
}

function validateElement(element, elementName) {
	var ret = true;
	if(element) {
		var elementContent = element.textContent || element;
		if(elementContent.indexOf("TODO:") > -1) {
			errors.push(elementName + " is: " + elementContent);
			ret = false;
		}
	}
	return ret;
}

window.addEventListener("load", demoValidateLoad, false);