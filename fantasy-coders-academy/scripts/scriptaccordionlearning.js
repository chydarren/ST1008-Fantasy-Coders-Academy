/*
	Fantasy Coders Academy Main Webpage
	Filename: scriptaccordionlearning.js
	Author: chydarren
	Date: 16 January 2017
*/ 

/* accordion (learning) */
/* referenced from: http://www.w3schools.com/howto/howto_js_accordion.asp */ 
/* referenced from: http://stackoverflow.com/questions/2617629/how-to-get-all-elements-inside-div-that-starts-with-a-known-text */
var acc = document.getElementById("courses").getElementsByTagName("button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}




 