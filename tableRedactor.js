var m=[]; //id of td tag
var j;


function add()
{
	
	var tdTable = document.getElementsByTagName('td');
	var trTable = document.getElementsByTagName('tr');
	var x = document.getElementById("table").insertRow(trTable.length);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    y.innerHTML = prompt("Name: "," ");
	z.innerHTML = prompt("Value: ", " ");
	m.push(m.length);
	m.push(m.length);
	//******
	y.id = tdTable.length-2;
	y.ondblclick=function(){change(y.id)};
	z.id = tdTable.length-1;
	z.ondblclick=function(){change(z.id)};
}

function delet()
{

	var tab= document.getElementById("table");
	var tr= document.getElementsByTagName("tr");
	if(tr.length > 1) tab.deleteRow(tr.length-1);
	
}

function upload()
{
 
	var textarea = eval (document.getElementById("textarea").value);  
	var i;
	
	  for(i=0; i<textarea.length; i++)
	  {	  
		newRow(i );		
	  }
	  
}



function newRow( index1 )
{
			var textarea = eval (document.getElementById("textarea").value); 
			
	    	var tdTable = document.getElementsByTagName('td');
			var trTable = document.getElementsByTagName('tr');
			var x = document.getElementById("table").insertRow(trTable.length);
			var y = x.insertCell(0);
			var z = x.insertCell(1);
			y.innerHTML = textarea[index1].name;
			z.innerHTML = textarea[index1].value;
			m.push(m.length);
			m.push(m.length);
			//
			y.id = tdTable.length-2;
			y.ondblclick=function(){ change(y.id) };
			z.id= tdTable.length-1;
			z.ondblclick=function(){ change(z.id) };	
	
}




function download()
{
	var trTable = document.getElementsByTagName('tr');
	var i, tex= '[';
	
	    tex  += '{name: "'+trTable[1].childNodes[0].innerHTML +'",value:"'+trTable[1].childNodes[1].innerHTML+'"}';
		
	for(i=2; i<trTable.length; i++)
	{
		tex  += ',{name: "'+trTable[i].childNodes[0].innerHTML +'",value:"'+trTable[i].childNodes[1].innerHTML+'"}';
	} 
	tex += ']';
	
	document.getElementById("textarea").value = tex;
}


function change(id)
{
	document.getElementById(id).innerHTML = prompt("Change value", " ");
}

function loadFile()
{
	var contents;
	var filTab = document.getElementById("file").files;
	var reader = new FileReader();
	
	  reader.onload = function(event) {
	    contents = event.target.result;
		document.getElementById("textarea").value = contents;
		 upload();
		};	
 
	reader.readAsText(filTab[0]);
}