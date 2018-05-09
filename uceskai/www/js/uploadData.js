// function to start data Upload of question and answer selection
function startDataUpload() {
	// implement alert to confirm upload
	alert ("start data upload");
	// assign data to variables
	var question = "'Head Question'";
	var correct = document.getElementById("correct").value;
	var answer1 = document.getElementById("answer1").value;
	var answer2 = document.getElementById("answer2").value;
	var answer3 = document.getElementById("answer3").value;
	// create post string
	var postString = "&question= Whose head in main cloisters?"+question + "&correct="+correct +"&answer1="+answer1 +"&answer2="+answer2 +"&answer3="+answer3;
	//get answer (radio buttons)
	if (document.getElementById("answer1").checked) {
		postString=postString+"&answer=Jeremy Bentham";
	}
	if (document.getElementById("answer2").checked) {
		postString=postString+"&answer=Elton John";
	}	
	if (document.getElementById("answer3").checked) {
		postString=postString+"&answer=A prehistoric opposum";
	}	
	if (document.getElementById("answer4").checked) {
		postString=postString+"&answer=Joe Tribbiani";
	}	
	// call function to process data
	processData(postString);
	
	alert (postString);
}

var client;
// function to process data
function processData(postString) {
	client = new XMLHttpRequest();
	// call function /submitQuestion
	client.open('POST','http://developer.cege.ucl.ac.uk:30299/submitQuestion',true);
	client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	client.onreadystatechange = dataUploaded;
	client.send(postString);
}
// wait for the response from data server, process the response once it is received
function dataUploaded() {
	// listen out for the server to say that the data is ready - i.e. has state 4
	if (client.readyState == 4) {
	// change the DIV to show the response
		document.getElementById("dataUploadResult").innerHTML = client.responseText;
	}
}

