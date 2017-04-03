var currentNumberOfRow = localStorage.length; 
var allRows = currentNumberOfRow + 1;


function cancel(){
	document.getElementById('popup').style.display='none';
}

function openPopup(){
	document.getElementById('popup').style.display='block';
}

function addData(){
    var date = new Date();
		var hr = date.getHours();
		var min = date.getMinutes();
		var yr = date.getFullYear();  
		var month = date.getMonth()+1;
		var day = date.getDate();	
		
		
    var idnumber = document.getElementById("idnumber").value;
    var studname = document.getElementById("studname").value;
    var time = hr+":"+min;
	var currentDate = month+"/"+day+"/"+yr;
    var remove = ' <button id="' + (currentNumberOfRow+1) + '"  class="remove" onclick="deleteRow(this)" />&times;</button>';

    if (idnumber == '' || studname == '') {
        alert("FILL OUT ALL BLANK!");
    }else{

        var thatTable = document.getElementById("records");
        var newRow = thatTable.insertRow(-1); 
        var newCell_1 = newRow.insertCell(0); //at the first position of the row
        var newCell_2 = newRow.insertCell(-1); //at the last position of the row
        var newCell_3 = newRow.insertCell(-1);  //at the last position of the row
		var newCell_4 = newRow.insertCell(-1); 
		var newCell_5 = newRow.insertCell(-1);

        newCell_1.innerHTML = idnumber;
        newCell_2.innerHTML = studname;
        newCell_3.innerHTML = time;
		newCell_4.innerHTML = currentDate;
		newCell_5.innerHTML = remove;

        //addToLocalStorage(idnumber,studname,time,currentDate);

        document.getElementById("idnumber").value = "";
        document.getElementById("studname").value = "";
       

    }
    currentNumberOfRow++;
    alert("currentNumberOfRow: " + currentNumberOfRow + " allRows: " + allRows);
    allRows++;

}
