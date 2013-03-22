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

	$("#clearDB").click(function() {
		alert("Database erased.");
		//Erase database
	});
});

$('#viewPage').on('pageinit',function() {

	$("#viewPCustomers").click(function() {
		$.ajax({
			"url": "_view/personal",
			"dataType": "json",
			"success": function(data){
				$('#listCustomers').clear;
				$.each(data.rows, function(index, personal){
					var converted = personal.value.converted;
					var company = personal.value.company;
					var name = personal.value.name;
					$('#listCustomers').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(name)
						)
					);
				});
				$('#listCustomers').listview('refresh');
			}
		});
	});
	
	$("#viewBCustomers").click(function() {
		$.ajax({
			"url": "_view/business",
			"dataType": "json",
			"success": function(data){
				$('#listCustomers').clear;
				$.each(data.rows, function(index, business){
					var converted = business.value.converted;
					var company = business.value.company;
					var name = business.value.name;
					$('#listCustomers').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(name)
						)
					);
				});
				$('#listCustomers').listview('refresh');
			}
		});
	});
	//Click on an entry
	//Edit an entry
		//Save entry to database
		//Delete entry from database
	//Erase database
});