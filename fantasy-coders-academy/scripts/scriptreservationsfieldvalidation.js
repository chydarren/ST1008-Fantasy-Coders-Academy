/*
	Fantasy Coders Academy Main Webpage
	Filename: scriptreservationsfieldvalidation.js
	Author: chydarren
	Date: 9 February 2017
*/ 

/* jquery - hide credit card number field if cash selected */ 
/* referenced from: http://stackoverflow.com/questions/4396983/hide-or-display-none-jquery */ 
/* referenced from: http://jsfiddle.net/fhfrzn1d/1/ */ 
$('input[name="Payment Method"]').change(function () {
	if($("#cash").is(':checked')){
		$("label[for='creditcardno']").hide();
		$("#creditcardno").val("");
	} else {
		$("label[for='creditcardno']").show();
	}
});

/* javascript - validating form fields */ 
/* referenced from: HTML5 and CSS3 Complete Textbook */
function reservationsfieldvalidation(){
	
	if(document.order.name.value == "") {
		alert("Please provide your name.");
		document.order.name.focus() ;
		document.order.name.style.backgroundColor = "#ffb3b3";
		return false;
		} else {
			document.order.name.style.backgroundColor = "#b3ff99";
	}
			
	if(document.order.email.value == "") {
		alert("Please provide your email address.");
		document.order.email.focus() ;
		document.order.email.style.backgroundColor = "#ffb3b3";
		return false;
		} else {
			document.order.email.style.backgroundColor = "#b3ff99";
	}
		
	if(document.order.mobile.value == "" || isNaN( document.order.mobile.value) || document.order.mobile.value.length != 8) {
		alert("Your mobile number should consist of 8 numerical digits.");
		document.order.mobile.focus() ;
		document.order.mobile.style.backgroundColor = "#ffb3b3";
		return false;
	} else {
		document.order.mobile.style.backgroundColor = "#b3ff99";
	}
			
	if(document.order.address.value == "") {
		alert("Please provide your address.");
		document.order.address.focus() ;
		document.order.address.style.backgroundColor = "#ffb3b3";
		return false;
	} else {
		document.order.address.style.backgroundColor = "#b3ff99";
	}
		  
	if($("#visa").is(':checked') || $("#mastercard").is(':checked')){
		  
		if( isNaN(document.order.creditcardno.value) || document.order.creditcardno.value.length != 16) {
			alert("Your credit card number should consist of 16 numerical digits.")
			document.order.creditcardno.focus() ;
			document.order.creditcardno.style.backgroundColor = "#ffb3b3";
			return false;
		} else {
			document.order.creditcardno.style.backgroundColor = "#b3ff99";
		}
	}
	
	/* jquery - getting the value of a selected option */ 
	/* referenced from: http://learn.jquery.com/using-jquery-core/faq/how-do-i-get-the-text-value-of-a-selected-option/ */ 
	var beginner = $("#Beginner option:selected").text();
	var intermediate = $("#Intermediate option:selected").text();
	var advanced = $("#Advanced option:selected").text();
	
	if((beginner == "Make Selection") && (intermediate == "Make Selection") && (advanced == "Make Selection")){
		alert("Please select at least one course from either category");
		document.order.Beginner.focus() ;
		document.order.Beginner.style.backgroundColor = "#ffb3b3";
			
		document.order.Intermediate.focus() ;
		document.order.Intermediate.style.backgroundColor = "#ffb3b3";
			
		document.order.Advanced.focus() ;
		document.order.Advanced.style.backgroundColor = "#ffb3b3";
			
		return false;
		} else {
			document.order.Beginner.style.backgroundColor = "#b3ff99";
			document.order.Intermediate.style.backgroundColor = "#b3ff99";
			document.order.Advanced.style.backgroundColor = "#b3ff99";
	}
	
}






 