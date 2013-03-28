$('#main').live('pageshow',function() {
	$.couch.db("customers").view("customersApp/_all_docs", {
		success: function(data) {
			console.log(data);
		}
	});
	
	var urlVars = function(){
		var urlData = $($.mobile.activePage).data("url");
		var urlParts = urlData.split('?');
		var urlPairs = urlParts[1].split('&');
		var urlValues = {};
		for(var pair in urlPairs){
			var keyValue = urlPairs[pair].split('=');
			var key = decodeURIComponent(keyValue[0]);
			var value = decodeURIComponent(keyValue[1]);
			urlValues[key] = value;
		}
	return urlValues;
	};
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
					var id = personal.value.id;
					var converted = personal.value.converted;
					var company = personal.value.company;
					var name = personal.value.name;
					if (converted == true)
						var decide = "has";
					else
						var decide = "has not";
						
					$('#listCustomers').append(
						$('<li>').append(
							$('<a>').attr("href", "details.html?details=" + id)
								.html('<p>' + name + '</p>' + '<p>' + company + '</p>')
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
					var id = business.value.id;
					var converted = business.value.converted;
					var company = business.value.company;
					var name = business.value.name;
					if (converted == true)
						var decide = "has";
					else
						var decide = "has not";
						
					$('#listCustomers').append(
						$('<li>').append(
							$('<a>').attr("href", "details.html?details=" + id)
								.html('<p>' + name + '</p>' + '<p>' + company + '</p>')
						)
					);
				});
				$('#listCustomers').listview('refresh');
			}
		});
	});
	// + '<p>' + decide + " converted to a paid subscription." + '</p>' + '</li>'
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