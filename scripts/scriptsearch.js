/*
	Fantasy Coders Academy Main Webpage
	Filename: scriptsearch.js
	Author: chydarren
	Date: 16 January 2017
*/ 

/* jquery - search bar */  
/* referenced from: http://www.w3schools.com/howto/howto_css_animated_search.asp */ 
/* referenced from: http://www.designchemical.com/blog/index.php/jquery/live-text-search-function-using-jquery/ */ 

$(document).ready(function(){
	$("#search").keyup(function(){
 
		var filter = $(this).val(), count = 0;
 
        $(".course").each(function(){
 
            // When the item does not contain the input, fade it out
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut(1000);
 
            } else {
                $(this).show();
                count++;
            }
        });
		
		// Show number of results
        var numberItems = count;
        $("#searchcount").text("Number of Courses = "+count);
    });
});