$('#main').live('pageshow',function() {
	$.couch.db("customers").view("customersApp/business", {
		success: function(data) {
			console.log(data);
		}
	});
});

$('#addPage').on('pageinit',function() {

    $("#showCustomers").click(function() {
		window.location = '#viewPage';
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
	
	function resetForm($form) {
    	$form.find('input:text, input:password, input:file, select, textarea').val('');
    	$form.find('input:radio, input:checkbox')
    	     .removeAttr('checked').removeAttr('selected');
	}
	
});

$('#viewPage').on('pageinit',function() {

	$("#viewPCustomers").click(function() {
		$.ajax({
			"url": "_view/personal",
			"dataType": "json",
			"success": function(data){
				$('#listCustomers').empty();
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
				$('#listCustomers').empty();
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