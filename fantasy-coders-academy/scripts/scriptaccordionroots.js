/*
	Fantasy Coders Academy Main Webpage
	Filename: scriptaccordionroots.js
	Author: chydarren
	Date: 16 January 2017
*/ 

/* accordion (roots) */ 
/* referenced from: http://www.w3schools.com/howto/howto_js_accordion.asp */ 
/* referenced from: http://stackoverflow.com/questions/37745154/only-open-one-accordion-tab-at-one-time */ 
/* referenced from: http://stackoverflow.com/questions/2617629/how-to-get-all-elements-inside-div-that-starts-with-a-known-text */

var acc = document.getElementById("roots").getElementsByTagName("button");
var panel = document.getElementById("roots").getElementsByTagName("section");

for (var b = 0; b < acc.length; b++) {
    acc[b].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var c = 0; c < els.length; c++) {
        els[c].classList[fnName](className);
    }
}






 