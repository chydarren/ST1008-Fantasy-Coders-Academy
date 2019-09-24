/*
	Fantasy Coders Academy Main Webpage
	Filename: scriptglobal.js
	Author: chydarren
	Date: 16 January 2017
*/ 

/* jquery - back to top */ 
/* referenced from: http://jsfiddle.net/gilbitron/Lt2wH/ */ 
if ($("#top").length) {
	var scrollTrigger = 200, 
		backToTop = function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > scrollTrigger) {
				$("#top").addClass("show");
			} else {
				$("#top").removeClass("show");
			}
		};
		
	backToTop();
	$(window).on('scroll', function () {
		backToTop();
	});
	
	$("#top").on('click', function (e) {
		e.preventDefault();
		$("html,body").animate({
			scrollTop: 0
		}, 800);
	});
}

/* jquery - navigation (main) fixed */ 
/* referenced from: http://jsfiddle.net/a42qB/349/ */
$(window).scroll(function() {
	if ($(this).scrollTop() > 195) {
        $('nav ul').addClass('fixedmainnav');
	} else {
		 $('nav ul').removeClass('fixedmainnav');
	}
});

/* jquery - navigation (sub) fixed */
/* referenced from: http://jsfiddle.net/a42qB/349/ */ 
$(window).scroll(function() {
	if ($(this).scrollTop() > 195) {
        $('.subNavigationDropdown').addClass('fixedsubnav');
	} else {
		 $('.subNavigationDropdown').removeClass('fixedsubnav');
	}
});

/* javascript - navigation (responsive) */
/* referenced from: HTML5 and CSS3 Complete Textbook */ 
var navButton = document.querySelector(".navigation-menu-button");
if (navButton.addEventListener) {
   navButton.addEventListener("click", function() {
      var nav = document.querySelector("nav ul");
      if (nav.style.display === "") {
         nav.style.display = "block";
      } else {
         nav.style.display = "";
      }
   }, false);
}

/* javascript - onclick event */ 
/* referenced from: http://www.w3schools.com/howto/howto_css_menu_icon.asp */ 
function myFunction(x) {
    x.classList.toggle("change");
}

/* javascript - onmouseover / onmouseout events */ 
/* referenced from: http://www.w3schools.com/jsref/event_onmouseover.asp */ 
/* referenced from: http://www.thonky.com/javascript-and-css-guide/mouse-rollover */ 
function mOF(facebookImg){
	facebookImg.src = 'images/logofacebookblack.png';
}

function mAF(facebookImg){
	facebookImg.src = 'images/logofacebook.png';
}

function mOT(twitterImg){
	twitterImg.src = 'images/logotwitterblack.png';
}

function mAT(twitterImg){
	twitterImg.src= 'images/logotwitter.png';
}

function mOI(instagramImg){
	instagramImg.src = 'images/logoinstagramblack.png'; 
}

function mAI(instagramImg){
	instagramImg.src = 'images/logoinstagram.png'; 
}

function mOY(youtubeImg){
	youtubeImg.src = 'images/logoyoutubeblack.png'; 
}

function mAY(youtubeImg){
	youtubeImg.src = 'images/logoyoutube.png' 
}

function mOE(emailImg){
	emailImg.src = 'images/logoemailblack.png';
}

function mAE(emailImg){
	emailImg.src = 'images/logoemail.png';
}






 