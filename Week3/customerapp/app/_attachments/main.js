$('#main').on('pageshow', function() {
	
});

$('#formPage').on('pageinit',function() {

    $("#showCustomers").click(function() {
		window.location = '#viewPage';
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
	
	
	
	$("#saveCustomer").click(function() {
		alert("Customer saved.");
		//Form submission
		
// Not able to implement this yet!
function saveData()
{	
	var urlVars = parseUrlData($($.mobile.activePage).data('url'));

	if(urlVars){
		var customerID = urlVars['id'];
		var	customerRev = urlVars['rev2'];
	}

	var formInfo = {},
		itemsToParse = $('.item'),
		i = 0;

		formInfo.type = "formInfo";
		formInfo.name = $('#name').val();
		formInfo.company = $('#company').val();
		formInfo.date = $('#date').val();
		formInfo.details = $('#details').val();
		formInfo.age = $('#age').val();

	if(customerID){
		formInfo._id = customerID;
		formInfo._rev = customerRev;

		$.couch.db('customers').saveDoc(formInfo, {
			success: function(){
				alert('Customer data updated!');
				window.location = 'index.html';
			}
		});
	}else{
		$.couch.db('customers').saveDoc(formInfo, {
			success: function(){
				alert('Form Info has been saved!');
				window.location = 'index.html';
			}
		});
	}	
	return false;
}

// Not able to implement this yet!
function editPage(event)
{	
	$('#newCustomer').validate({
		submitHandler: function(){saveData();},
		errorPlacement: function(error, element) {
			error.insertAfter($(element).parent());
	   }
	});

	var urlData = parseUrlData($($.mobile.activePage).data('url')),
		append = '';

	if(urlData && urlData['id']){
		$.couch.db('customers').view('customersApp/formInfos', {
			key: urlData['id'],
			success: function(data){
				var current = data.rows[0].value;

				$("#saveCustomer").data('storageId',data.rows[0].key); 
				$("#name").val(current.name);
				$("#company").val(current.company);
				$("#trial").val(current.trial);
				$("#convert").val(current.convert);
				$("#age").val(current.age);

			}
		});
	}
}
	});
	
	
});

var urlVars = function(){
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
	if (urlParts[1] && urlParts[1].length > 0) {
		var urlPairs = urlParts[1].split('&');
		var urlValues = {};
		for(var pair in urlPairs){
			var keyValue = urlPairs[pair].split('=');
			var key = decodeURIComponent(keyValue[0]);
			var value = decodeURIComponent(keyValue[1]);
			urlValues[key] = value;
		}
	return urlValues;
	}
};

$(document).on('pageshow', '#details', function() {
	if (urlVars()) {
		var customerID = urlVars()["id"];
		var customerRev = urlVars()["rev2"];
		
		$.couch.db("customers").view("customersApp/all", {
			key: customerID,
			success: function(data) {
				$('#customerDetails').append('<li><h3>' + "This customer is " + data.rows[0].value.age + " years old." + '</h3></li>');
				$('#customerDetails').append('<li><a href="#" data-id=" + customerID + " data-rev=" + customerRev + " id="deleteOne">Delete this customer</a></li>');
				$('#customerDetails').append('<li><a href="formPage.html" data-id=" + customerID + " data-rev=" + customerRev + " id="editOne">Edit this customer</a></li>');
			}
		});
		//Delete button event handling.
		$("#deleteOne").off();
		$(document).on('click', '#deleteOne', function() {
			var ask = confirm("BRO. Do you even delete?");
			if(ask) {
				$.couch.db("customers").removeDoc(
					{_id:customerID, _rev: customerRev},
					{success: function() {alert('DELETED, bro.');}}
				)
			}
		});
		// Edit button event handling.
		$("#editOne").off();
		$(document).on('click', '#editOne', function() {
			$.couch.db("customers").saveDoc(
				{_id:customerID, _rev: customerRev},
				{success: function() {alert('Going to the EDIT form now. Please wait...');}}
			)
		});
	}
});

$('#viewPage').on('pageinit', function() {

	$("#viewPCustomers").click(function() {
		$.ajax({
			"url": "_view/personal",
			"dataType": "json",
			"success": function(data){
				$('#listCustomers').empty();
				$.each(data.rows, function(index, personal){
					var id = personal.value.id;
					var rev = personal.value.rev;
					var company = personal.value.company;
					var name = personal.value.name;
					var type = personal.value.type;
						
					$('#listCustomers').append(
						$('<li>').append(
							$('<a>').attr("href", "details.html?id=" + id + "&rev2=" + rev)
								.html('<h3>' + type + '</h3>' + '<p>' + name + '</p>' + '<p>' + company + '</p>')
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
					var rev = business.value.rev;
					var company = business.value.company;
					var name = business.value.name;
					var type = business.value.type;
						
					$('#listCustomers').append(
						$('<li>').append(
							$('<a>').attr("href", "details.html?id=" + id + "&rev2=" + rev)
								.html('<h3>' + type + '</h3>' + '<p>' + name + '</p>' + '<p>' + company + '</p>')
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