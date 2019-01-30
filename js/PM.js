	  function allowDrop(ev) {
	  ev.preventDefault();
	}

	function drag(ev) {
	  ev.dataTransfer.setData("Text", ev.target.id);
	}

	function drop(ev) {
	  var data = ev.dataTransfer.getData("Text");
	  ev.target.appendChild(document.getElementById(data));
	  ev.preventDefault();
	}

		var i = 0;
	var issues = {name:undefined, type: undefined, description: undefined};
	function createIssue(){	

		var name = document.getElementById("name").value;
		var type = document.getElementById("type").value;
		var description = document.getElementById("description").value;
		
		issues ={name:name, type:type, description: description};	
	}

	function create(){
	createIssue();
	console.log(issues);
	var dynamicTextBox= "";

	dynamicTextBox += '<p  id="' + i + '" draggable="true" ondragstart="drag(event)">' + "Name:" + issues.name +"<br>"  + "Type:"+ issues.type +"<br>"+ "Description:"+ issues.description + '</button></p>';
		  i++;
		document.getElementById("TextBoxContainer").innerHTML = dynamicTextBox;
	}

	var sprint = {};

	function createSprint(){
		var name = document.getElementById("sn").value;
		sprint = {name:name}; 
		var temp;
		for(i=0; i<=6; i++)
		{
	  temp = document.createElement('div');
	  if(i==0)
	  {temp.innerHTML = sprint.name;}
	  temp.ondrop = function(){drop(event)};
	  temp.ondragover = function(){allowDrop(event)};
	  temp.id = 'div' + i;
	  document.getElementsByTagName('th')[i].appendChild(temp);
		}
	}