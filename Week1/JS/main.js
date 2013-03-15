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
        var showRungs = function(){
console.log("in showRungs function");
	for(var i=0, len=rungs.length; i<len; i++){
	console.log("in rung for loop, cycle " + i);
		var newLi = document.createElement('li');
	    		
		$('list').appendChild(newLi);
	  
	    var heading = document.createElement('h3');
	    heading.innerHTML = rungs[i].rung;
		newLi.appendChild(heading);
	    var pinterval = document.createElement('p');
	    pinterval.innerHTML = rungs[i].interval;
	    newLi.appendChild(pinterval);
	    var pFav = document.createElement('p');
	    pFav.innerHTML = "Is this a goal? " + rungs[i].goal;
	    newLi.appendChild(pFav);
	}
};

var display = document.querySelector("#display");
display.addEventListener("click", showrungs);

//Check status of radio button

var getGoal = function(){
console.log("inside getGoal function");
	var goalCheck = document.querySelector("#radio-choice");
	var status;
	if(goalCheck.checked){
		status = "Yes";
	}else{
		status = "No";
	};
	return status;
};

//Save Function

var saveRung = function(){
console.log("inside saveRung function");
  var goal = getgoal();
  
  var newrung = {};
  newrung.rung = $('rung').value;
  newrung.interval = $('interval').value;
  newrung.goal = goal;
  
  rungs.push(newrung);
  location.href="#home";
  $('list').innerHTML = "";
};

var save = document.querySelector("#submitrung");
save.addEventListener("click", saverung);


//Clear rungs
var clearRungs = function(){
console.log("clear button pressed");
  	rungs.length = 0;
  	$('list').innerHTML = "";
};

var clear = document.querySelector("#clearDataButton");
clear.addEventListener("click", clearRungs);
});

$('#options').on('pageinit',function() {
        // Put jQuery in here for the options page.
});