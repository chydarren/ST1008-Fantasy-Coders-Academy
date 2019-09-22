/*
	Fantasy Coders Academy Main Webpage
	Filename: scriptcarousel.js
	Author: chydarren
	Date: 16 January 2017
*/ 

/* javascript - the carousel */ 
/* referenced from: http://www.w3schools.com/w3css/w3css_slideshow.asp */
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("splashpageImg");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000);
}

/* jquery - changing the images based on screen width */ 
/* referenced from: http://stackoverflow.com/questions/32702576/how-do-you-change-img-src-with-javascript-depending-on-browser-width */ 
$(window).resize(function() {
    var scrWidth = $(window).width();
    if(scrWidth <= 480){
        $('#sP1').attr('src', 'images/splashpage1mobile.jpg');
		$('#sP2').attr('src', 'images/splashpage2mobile.jpg');
		$('#sP3').attr('src', 'images/splashpage3mobile.jpg');
		$('#sP4').attr('src', 'images/splashpage4mobile.jpg');
		$('#sP5').attr('src', 'images/splashpage5mobile.jpg');
    }
	
    if(scrWidth > 480){
        $('#sP1').attr('src', 'images/splashpage1.jpg');
		$('#sP2').attr('src', 'images/splashpage2.jpg');
		$('#sP3').attr('src', 'images/splashpage3.jpg');
		$('#sP4').attr('src', 'images/splashpage4.jpg');
		$('#sP5').attr('src', 'images/splashpage5.jpg');
    }
});






 