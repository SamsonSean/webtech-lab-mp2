var currentNumberOfRow = localStorage.length; 
var allRows = currentNumberOfRow + 1;


function cancel(){
	document.getElementById('popup').style.display='none';
}

function openPopup(){
	document.getElementById('popup').style.display='block';
}

/*function addData(){
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
*/
var validate1 = 1;
var validate2 = 1;
var validate3 = 1;
var validate4 = 1;

function checkInput1(){
 
    var re = /^[0-9]{7}$/; //input must start with number and exactly 7 digit
            // Check input
            if(re.test(document.getElementById("myInput1").value)){
              // Style green
              document.getElementById("myInput1").style.background ='lightgreen';
              validate1 = 0;

              return true;
            }else{
              // Style red
              document.getElementById("myInput1").style.background ='red';
				validate1 = false;
              return false; 
            }
 }    
function checkInput2(){
    var re = /^[A-Za-z ,-.]+$/;
            // Check input
            if(re.test(document.getElementById("myInput2").value)){
              // Style green
              document.getElementById("myInput2").style.background ='lightgreen';
              validate2 = 0;

              return true;
            }else{
              // Style red
              document.getElementById("myInput2").style.background ='red';
				validate2 = false;
              return false; 
            }
}

 function checkInput3(){
    //var x = document.getElementById("myInput3");
    var re = /^[0-9]+$/; //input must start with number and exactly 7 digit
            // Check input
            if(re.test(document.getElementById("myInput3").value)){
              // Style green
              document.getElementById("myInput3").style.background ='lightgreen';
              validate3 = 0;

              return true;
            }else{
              // Style red
              document.getElementById("myInput3").style.background ='red';
				validate3 = false;
              return false; 
            }
 } 

  function checkInput4(){
    //var x = document.getElementById("myInput3");
    var re = /^[0-9]+$/; //input must start with number and exactly 7 digit
            // Check input
            if(re.test(document.getElementById("myInput4").value)){
              // Style green
              document.getElementById("myInput4").style.background ='lightgreen';
              validate4 = 0;

              return true;
            }else{
              // Style red
              document.getElementById("myInput4").style.background ='red';
				validate4 = false;
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
		var input5 = d1+"/"+d2+"/"+d3; // YYYY/M/D format of the date.
		var input7 = document.getElementById("myInput7").value;
		var input8 = ' <input id="' + (currentNumberOfRow+1) + '"  class="remove" type="button" value="Remove" onclick="deleteRow(this)"/> ';

	if (validate1 >= 1 || validate2 >= 1 || validate3 >= 1 || validate4>=1) {
        alert("FILL OUT ALL CORRECTLY!");
    }else{

        var thatTable = document.getElementById("records");
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







function addToLocalStorage(id,studN,gateP,serialNo,dateBrrwd,rmrk){

  ////---PROBLEM----/////
  ////change the currentNumberOfRow variable in the top, if there is now a key(rowsInTable2)
  ////if there is key(rowsInTable2) in localStorage, and then hit f5(refresh), and then add,
  ////the result will be "student"+2  not "student"+1 

    if(currentNumberOfRow == 0){ //no data in localStorage yet
      alert("no data in localStorage yet");
        var studentObject = {
          idNo: id,
          name: studN,
          gatepass: gateP,
          serial: serialNo,
          dateborrowed: dateBrrwd,
          remarks: rmrk
        };

        var jsonObject = JSON.stringify(studentObject);
        localStorage.setItem("student" + allRows, jsonObject);


      currentNumberOfRow++;
      alert("currentNumberOfRow: " + currentNumberOfRow + " allRows: " + allRows);
      allRows++;

    }else{  ///there is data in locasStorage

        if( localStorage.getItem("rowsInTable2") === null ){ ///there is no key(rowsInTable2) in localStorage

          alert("you call this 1");
          var studentObject = {
               idNo: id,
              name: studN,
              gatepass: gateP,
              serial: serialNo,
              dateborrowed: dateBrrwd,
               remarks: rmrk
            };

            var jsonObject = JSON.stringify(studentObject);
            localStorage.setItem("student" + (currentNumberOfRow+1), jsonObject);

        }else{

           alert("you call this 2\n currentNumberOfRow: " + (currentNumberOfRow+1));
            var studentObject = {
               idNo: id,
               name: studN,
                gatepass: gateP,
               serial: serialNo,
               dateborrowed: dateBrrwd,
              remarks: rmrk
            };

            var jsonObject = JSON.stringify(studentObject);
            localStorage.setItem("student" + (currentNumberOfRow+1), jsonObject);



        }

           currentNumberOfRow++;
          alert("currentNumberOfRow: " + currentNumberOfRow + " allRows: " + allRows);
          allRows++;

    }


    // currentNumberOfRow++;
    // alert("currentNumberOfRow: " + currentNumberOfRow + " allRows: " + allRows);
    // allRows++;

        
  }










