/*
Author: Josh Wilcox
Class: ASD with Doug Arley (March '13)
Week: Project 2
Topic: converting from VFW CRUD to jQuery and JQM.
*/
$('#main').on('pageinit',function() {
        // Put jQuery in here for the home page.
});

$('#addPage').on('pageinit',function() {

    $("#showCustomers").click(function() {
		alert("All customers shown.");
		//Display database
	});

	$("#saveCustomer").click(function() {
		alert("Customer saved.");
		//Save Function
	});

	$("#clearFormButton").click(function() {
		alert("Form reset.");
		//Reset Form
	});

	$("#clearDataButton").click(function() {
		alert("Database erased.");
		//Erase database
	});
});

$('#viewPage').on('pageinit',function() {
	//Click on an entry
	//Edit an entry
		//Save entry to database
		//Delete entry from database
	//Erase database
});