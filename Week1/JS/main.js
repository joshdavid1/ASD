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

	$("#showLadder").click(function() {
		alert("Handler for Show Ladder Button called.");
	});

	//Save Function

	// var saveRung = function(){
	// console.log("inside saveRung function");
	//   var goal = getgoal();
	  
	//   var newrung = {};
	//   newrung.rung = $('rung').value;
	//   newrung.interval = $('interval').value;
	//   newrung.goal = goal;
	  
	//   rungs.push(newrung);
	//   location.href="#home";
	//   $('list').innerHTML = "";
	// };

	$("#saveRung").click(function() {
		alert("Handler for Save Button called.");
	});


	//Clear rungs
	$("#clearFormButton").click(function() {
		alert("Handler for Clear Form Button called.");
	});

	$("#clearDataButton").click(function() {
		alert("Handler for Clear Data Button called.");
	});
});
$('#ladderView').on('pageinit',function() {
    // var showRungs = function(){


console.log("in showRungs function");


// 	for(var i=0, len=rungs.length; i<len; i++){
// 	console.log("in rung for loop, cycle " + i);
// 		var newLi = document.createElement('li');
	    		
// 		$('list').appendChild(newLi);
	  
// 	    var heading = document.createElement('h3');
// 	    heading.innerHTML = rungs[i].rung;
// 		newLi.appendChild(heading);
// 	    var pinterval = document.createElement('p');
// 	    pinterval.innerHTML = rungs[i].interval;
// 	    newLi.appendChild(pinterval);
// 	    var pFav = document.createElement('p');
// 	    pFav.innerHTML = "Is this a goal? " + rungs[i].goal;
// 	    newLi.appendChild(pFav);
// 	}
// };


//Check status of radio button

// var getGoal = function(){
// console.log("inside getGoal function");
// 	var goalCheck = document.querySelector("#radio-choice");
// 	var status;
// 	if(goalCheck.checked){
// 		status = "Yes";
// 	}else{
// 		status = "No";
// 	};
// 	return status;
// };
});