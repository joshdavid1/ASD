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
		//Form submission
	});

	$("#clearFormButton").click(function() {
		$('#newCustomer').clearForm()
	});
	
	$.fn.clearForm = function() {
  		return this.each(function() {
    	var type = this.type, tag = this.tagName.toLowerCase();
	    if (tag == 'form')
	   	  return $(':input',this).clearForm();
	   	if (type == 'text' || tag == 'textarea')
	   	  this.value = '';
	   	else if (type == 'radio')
    	  $(this).attr('checked', $(this).data('default')).checkboxradio("refresh");
	    else if (type == 'number')
	   	  $(this).val($(this).data('default')).slider("refresh");
	  	});
	};
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
	$("#clearDB").click(function() {
		alert("Database erased.");
		//Erase database
	});
});