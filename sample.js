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

function blurFunctionIdNo(x){
           // Validation rule
           
            var re = /^[0-9]{7}$/; //input must start with number and exactly 7 digit
            // Check input
            if(re.test(document.getElementById(x).value)){
              // Style green
              document.getElementById(x).style.background ='#ccffcc';
              // Hide error prompt
             //document.getElementById(x + 'Error').style.display = "none";
              return true;
            }else{
              // Style red
              document.getElementById(x).style.background ='#e35152';
              // Show error prompt
             // document.getElementById(x + 'Error').style.display = "block";
              return false; 
            }
}
      
function blurFunctionName(x){
           // Validation rule
           //^[0-9]{4,6}$/
            var re = /[A-Za-z -']$/;
            // Check input
            if(re.test(document.getElementById(x).value)){
              // Style green
              document.getElementById(x).style.background ='#ccffcc';
              // Hide error prompt
             //document.getElementById(x + 'Error').style.display = "none";
              return true;
            }else{
              // Style red
              document.getElementById(x).style.background ='#e35152';
              // Show error prompt
             // document.getElementById(x + 'Error').style.display = "block";
              return false; 
            }
 }
 
 function addData(){
		var d = new Date(); // for now
		var date = new Date();
		var d1 = date.getFullYear();  
		var d2 = date.getMonth()+1;
		var d3 = date.getDate();
 
		var input1 = document.getElementById("myInput1").value;
		var input2 = document.getElementById("myInput2").value;
		var input3 = document.getElementById("myInput3").value;
		var input4 = document.getElementById("myInput4").value;
		var input5 = d1+"."+d2+"."+d3;
		var input7 = document.getElementById("myInput7").value;
		var input8 = ' <input id="' + (currentNumberOfRow+1) + '"  class="remove" type="button" value="Remove" onclick="deleteRow(this)"/> ';

		    if (input1 == '' || input2 == '') {
        alert("FILL OUT ALL BLANK!");
    }else{

        var thatTable = document.getElementById("myTable");
        var newRow = thatTable.insertRow(-1); //at the last position of the table
        //newRow.setAttribute("onclick","deleteRow(this)");
        var newCell_1 = newRow.insertCell(0); //at the first position of the row
        var newCell_2 = newRow.insertCell(-1); //at the last position of the row
        var newCell_3 = newRow.insertCell(-1);  //at the last position of the row
		    var newCell_4 = newRow.insertCell(-1); 
        var newCell_5 = newRow.insertCell(-1);
        var newCell_6 = newRow.insertCell(-1);
        var newCell_7 = newRow.insertCell(-1);
        var newCell_8 = newRow.insertCell(-1);


        newCell_1.innerHTML = input1;
        newCell_2.innerHTML = input2;
        newCell_3.innerHTML = input3;
		    newCell_4.innerHTML = input4;
        newCell_5.innerHTML = input5;
        newCell_6.innerHTML = "";
        newCell_7.innerHTML = input7;
        newCell_8.innerHTML = input8;

        addToLocalStorage(input1,input2,input3,input4,input5,input7);

          document.getElementById("myInput1").value = "";
          document.getElementById("myInput2").value = "";
          document.getElementById("myInput3").value = "";
          document.getElementById("myInput4").value = "";
          document.getElementById("myInput7").value = "";
        document.getElementById('popup').style.display='none';

    }
	
 
}















