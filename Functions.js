var counter = 0;
var currentNumberOfRow = localStorage.length; 
var allRows = currentNumberOfRow + 1;  // for the last student# in local storage  || rows in localStorage

function deleteRow(r){

  var i = r.parentNode.parentNode.rowIndex;
         var array = [];
          var start = 0;

         // put all localStorage in array, but delete the key:value pair with the same id
         var tempLength = localStorage.length;
         
          for(var j = 1 ; j <= tempLength; j++){   

              var student = localStorage.getItem("student" + j);
              var myJSON = JSON.parse(student);

              if( "student"+i == "student"+j ){  //the 'button id' from table1 === student+j
                  var temp = JSON.parse(localStorage.getItem("student"+i));
                  localStorage.removeItem("student"+j);
                  //start = j;
                 
                    var date = new Date();
                    var d1 = date.getFullYear();  
                    var d2 = date.getMonth()+1;
                    var d3 = date.getDate(); 
                     var dateOfReturned = d1+"."+d2+"."+d3;
                     temp.dateReturned = dateOfReturned;

                     localStorage.setItem("student"+i,JSON.stringify(temp));

              }
                array.push(myJSON);
  
        }

     ////////delete "all rows in tables"///"first-priority in table2"////then in table1////and update//////
                var firstTable = document.getElementById("myTable");
                var numberOfRowsInTable1 = firstTable.rows.length;
              
                for(var i = 1; i < numberOfRowsInTable1; i++ ){
                      firstTable.deleteRow(1);
                }

              /////CALL THE REFRESH METHOD////to arrange all rows in table
                refresh();


}

function cancel(){
    document.getElementById('popup').style.display='none';
}

function cancelReport(){
    document.getElementById('popupReport').style.display='none';
}

function closeReport(){
   document.getElementById('popupReportResult').style.display='none'; 
   location.reload();
}

function openPopup(){
    document.getElementById('popup').style.display='block';
}

function openPopupReport(){
    document.getElementById('popupReport').style.display='block';
}

var validate1 = false;
var validate2 = false;
var validate3 = false;
var validate4 = false;

function checkInput1(){
    var re = /^[0-9]{7}$/; //input must start with number and exactly 7 digit
            // Check input
            if(re.test(document.getElementById("myInput1").value)){
              // Style green
              document.getElementById("myInput1").style.background ='green';
              validate1 = true;
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
              document.getElementById("myInput2").style.background ='green';
              validate2 = true;
              return true;

            }else{
              // Style red
              document.getElementById("myInput2").style.background ='red';
              validate2 = false;
              return false; 

            }
}

function checkInput3(){
    var re = /^[0-9]+$/; 
            // Check input
            if(re.test(document.getElementById("myInput3").value)){
              // Style green
              document.getElementById("myInput3").style.background ='green';
              validate3 = true;
             
              return true;
            }else{
              // Style red
              document.getElementById("myInput3").style.background ='red';
              validate3 = false;
            
              return false; 
            }

 } 

function checkInput4(){
    var re = /^[0-9]+$/; 
            // Check input
            if(re.test(document.getElementById("myInput4").value)){
              // Style green
              document.getElementById("myInput4").style.background ='green';
              validate4 = true;
              // Hide error prompt
             //document.getElementById(x + 'Error').style.display = "none";
              return true;
            }else{
              // Style red
              document.getElementById("myInput4").style.background ='red';
              validate4 = false;
             
              return false; 
            }
 } 

///search query
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("user_input");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function addData(){
    if ( validate1 == false || validate2 == false || validate3 == false || validate4 == false) {
        alert("FILL OUT ALL CORRECTLY!");
    }else{
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
		  var dateReturn = "";
          var input6 = document.getElementById("myInput6").value +"-"+document.getElementById("myInput6.1").value; //course and year
          var input7 = document.getElementById("myInput7").value; //remarks
          var input8 = ' <input id="' + (currentNumberOfRow+1) + '"  class="remove" type="button" value="Return" onclick="deleteRow(this)"/> ';
      
  //       var thatTable = document.getElementById("myTable");
  //       var newRow = thatTable.insertRow(-1); //at the last position of the table
       
  //       var newCell_1 = newRow.insertCell(0); //at the first position of the row
  //       var newCell_2 = newRow.insertCell(-1); //at the last position of the row
  //       var newCell_3 = newRow.insertCell(-1);  //at the last position of the row
		//     var newCell_4 = newRow.insertCell(-1); 
  //       var newCell_5 = newRow.insertCell(-1);
		// var newCell_5_1 = newRow.insertCell(-1);
  //       var newCell_6 = newRow.insertCell(-1);
  //       var newCell_7 = newRow.insertCell(-1);
  //       var newCell_8 = newRow.insertCell(-1);

  //       newCell_1.innerHTML = input1;
  //       newCell_2.innerHTML = input2;
  //       newCell_3.innerHTML = input3;
		//     newCell_4.innerHTML = input4;
  //       newCell_5.innerHTML = input5;
		// newCell_5_1.innerHTML = dateReturn;
  //       newCell_6.innerHTML = input6;
  //       newCell_7.innerHTML = input7;
  //       newCell_8.innerHTML = input8;


          var thatTable = document.getElementById("myTable");
          var newRow = thatTable.insertRow(-1); //at the last position of the table

            var newCell1 = newRow.insertCell(0);
                newCell1.setAttribute("data-th","ID Number");
                newCell1.innerHTML = input1;
            var newCell2 = newRow.insertCell(-1);
                newCell2.setAttribute("data-th","Name");
                newCell2.innerHTML = input2;

            var newCell3 = newRow.insertCell(-1);
                newCell3.setAttribute("data-th","Gate Pass Number");
                newCell3.innerHTML = input3;

            var newCell4 = newRow.insertCell(-1);
                newCell4.setAttribute("data-th","Serial Number");
                newCell4.innerHTML = input4;

            var newCell5 = newRow.insertCell(-1);
                newCell5.setAttribute("data-th","Date Borrowed");
                newCell5.innerHTML = input5;

            var newCell_5_1 = newRow.insertCell(-1);
                newCell_5_1.setAttribute("data-th","Date Returned");
                newCell_5_1.innerHTML = dateReturn;

            var newCell6 = newRow.insertCell(-1);
                newCell6.setAttribute("data-th","Course&Year");
                newCell6.innerHTML = input6;

            var newCell7 = newRow.insertCell(-1);
                newCell7.setAttribute("data-th","Remarks");
                newCell7.innerHTML = input7;

            var newCell_8 = newRow.insertCell(-1); 
                newCell_8.setAttribute("data-th","Action");
                newCell_8.innerHTML = input8;


        addToLocalStorage(input1,input2,input3,input4,input5,input6,input7);

          document.getElementById("myInput1").value = "";
          document.getElementById("myInput2").value = "";
          document.getElementById("myInput3").value = "";
          document.getElementById("myInput4").value = "";
          document.getElementById("myInput6").value = "";
          document.getElementById("myInput7").value = "";
          document.getElementById('popup').style.display='none';

        ///set to false again
        validate1 = false;
        validate2 = false;
        validate3 = false;
        validate4 = false;
        document.getElementById("myInput1").style.background ='none';
        document.getElementById("myInput2").style.background ='none';
        document.getElementById("myInput3").style.background ='none';
        document.getElementById("myInput4").style.background ='none';
        document.getElementById("myInput4").style.h


    }

}

function refresh(){

   
    if (localStorage.getItem("student1") != null) {     ///if there is "student1" exist in localStorage

             for(i = 1; i <= localStorage.length; i++){
                   // <td data-th="ID Number">312313</td>
                var stores = localStorage.getItem("student" + i);
                var jsonString = JSON.parse(stores); //convert text to javascript object
                    if( jsonString.dateReturned == null ){ //if dateReturned have no date, include the "remove button"
                        var thatTable = document.getElementById("myTable");
                          var newRow = thatTable.insertRow(-1); //at the last position of the table
                    //       newRow.insertCell(0).innerHTML = jsonString.idNo;
                    //       newRow.insertCell(-1).innerHTML = jsonString.name;
                    //       newRow.insertCell(-1).innerHTML = jsonString.gatePassNumber;
                    //       newRow.insertCell(-1).innerHTML = jsonString.serialNumber;
                    //       newRow.insertCell(-1).innerHTML = jsonString.dateBorrowed;
  						            // newRow.insertCell(-1).innerHTML = "";
                    //       newRow.insertCell(-1).innerHTML = jsonString.courseAndYear;
                    //       newRow.insertCell(-1).innerHTML = jsonString.remarks;

                            var newCell1 = newRow.insertCell(0);
                                newCell1.setAttribute("data-th","ID Number");
                                newCell1.innerHTML = jsonString.idNo;
                            var newCell2 = newRow.insertCell(-1);
                                newCell2.setAttribute("data-th","Name");
                                newCell2.innerHTML = jsonString.name;

                            var newCell3 = newRow.insertCell(-1);
                                newCell3.setAttribute("data-th","Gate Pass Number");
                                newCell3.innerHTML = jsonString.gatePassNumber;

                            var newCell4 = newRow.insertCell(-1);
                                newCell4.setAttribute("data-th","Serial Number");
                                newCell4.innerHTML = jsonString.serialNumber;

                            var newCell5 = newRow.insertCell(-1);
                                newCell5.setAttribute("data-th","Date Borrowed");
                                newCell5.innerHTML = jsonString.dateBorrowed;

                            var newCell6 = newRow.insertCell(-1);
                                newCell6.setAttribute("data-th","Date Returned");
                                newCell6.innerHTML = "";

                            var newCell7 = newRow.insertCell(-1);
                                newCell7.setAttribute("data-th","Course&Year");
                                newCell7.innerHTML = jsonString.courseAndYear;

                            var newCell8 = newRow.insertCell(-1);
                                newCell8.setAttribute("data-th","Remarks");
                                newCell8.innerHTML = jsonString.remarks;
                              



                        var removeButton = '<input id="' + i + '" class="remove" type="button" value="Return" onclick="deleteRow(this)" /> ';
                        var newCell_9 = newRow.insertCell(-1);
                          newCell_9.setAttribute("data-th","Action");
                          newCell_9.innerHTML = removeButton;



                    }else{ //dont include the return button
                      var date = new Date();
                			  var d1 = date.getFullYear();  
                			  var d2 = date.getMonth()+1;
                			  var d3 = date.getDate(); 
		  
                       var thatTable = document.getElementById("myTable");
                        var newRow = thatTable.insertRow(-1); //at the last position of the table
                  //       newRow.insertCell(0).innerHTML = jsonString.idNo;
                  //       newRow.insertCell(-1).innerHTML = jsonString.name;
                  //       newRow.insertCell(-1).innerHTML = jsonString.gatePassNumber;
                  //       newRow.insertCell(-1).innerHTML = jsonString.serialNumber;
                  //       newRow.insertCell(-1).innerHTML = jsonString.dateBorrowed;
						            // newRow.insertCell(-1).innerHTML = d1+"."+d2+"."+d3;
                  //       newRow.insertCell(-1).innerHTML = jsonString.courseAndYear;
                  //       newRow.insertCell(-1).innerHTML = jsonString.remarks;


                            var newCell1 = newRow.insertCell(0);
                                newCell1.setAttribute("data-th","ID Number");
                                newCell1.innerHTML = jsonString.idNo;
                            var newCell2 = newRow.insertCell(-1);
                                newCell2.setAttribute("data-th","Name");
                                newCell2.innerHTML = jsonString.name;

                            var newCell3 = newRow.insertCell(-1);
                                newCell3.setAttribute("data-th","Gate Pass Number");
                                newCell3.innerHTML = jsonString.gatePassNumber;

                            var newCell4 = newRow.insertCell(-1);
                                newCell4.setAttribute("data-th","Serial Number");
                                newCell4.innerHTML = jsonString.serialNumber;

                            var newCell5 = newRow.insertCell(-1);
                                newCell5.setAttribute("data-th","Date Borrowed");
                                newCell5.innerHTML = jsonString.dateBorrowed;

                            var newCell6 = newRow.insertCell(-1);
                                newCell6.setAttribute("data-th","Date Returned");
                                newCell6.innerHTML = d1+"."+d2+"."+d3;

                            var newCell7 = newRow.insertCell(-1);
                                newCell7.setAttribute("data-th","Course&Year");
                                newCell7.innerHTML = jsonString.courseAndYear;

                            var newCell8 = newRow.insertCell(-1);
                                newCell8.setAttribute("data-th","Remarks");
                                newCell8.innerHTML = jsonString.remarks;



                    }

          }

          document.getElementById("myInput1").value = "";
          document.getElementById("myInput2").value = "";
          document.getElementById("myInput3").value = "";
          document.getElementById("myInput4").value = "";
          document.getElementById("myInput6").value = "";
          document.getElementById("myInput7").value = "";
    }

}

function addToLocalStorage(a,b,c,d,e,f,g){

    if(currentNumberOfRow == 0){ //no data in localStorage yet
        var studentObject = {
          idNo: a,
          name: b,
          gatePassNumber: c,
		      serialNumber: d,
          dateBorrowed: e,
          courseAndYear:f,
          remarks: g,
          dateReturned:null 
        };

        var jsonObject = JSON.stringify(studentObject);
        localStorage.setItem("student" + allRows, jsonObject);

      currentNumberOfRow++;
      allRows++;

    }else{  ///there is data in locasStorage
            var studentObject = {
              idNo: a,
              name: b,
              gatePassNumber: c,
              serialNumber: d,
              dateBorrowed: e,
              courseAndYear:f,
              remarks: g,
              dateReturned:null
            };

            var jsonObject = JSON.stringify(studentObject);
            localStorage.setItem("student" + (currentNumberOfRow+1), jsonObject);

            currentNumberOfRow++;
            allRows++;

    }
        
}



function addRowsReport(x){

  var start_month = parseInt(document.getElementById("month_from").value);
  var start_month_day = parseInt(document.getElementById("day_from").value);
  var start_year = parseInt(document.getElementById("year_from").value);

  var end_month = parseInt(document.getElementById("month_to").value);
  var end_month_day = parseInt(document.getElementById("day_to").value);
  var end_year = parseInt(document.getElementById("year_to").value);

  var result = [];
  ///check the input date
  if( start_year > end_year ){
      alert("Invalid Date!");
  }else{

     if( start_year == end_year ){ //year the same

        if( start_month == end_month){ //month the same
              if(start_month_day > end_month_day){
                 alert("Invalid Date!");
              }else{
                 result = resultByDate(start_year,start_month,start_month_day,end_year,end_month,end_month_day,x); 
             }
            
        }else{ //months not the same

           if(start_month > end_month){ //may june
                alert("Invalid Date!");

            }else{
                     
                 result = resultByDate(start_year,start_month,start_month_day,end_year,end_month,end_month_day,x);
            }
        }


     }

     if(start_year < end_year){
  
      result = resultByDate(start_year,start_month,start_month_day,end_year,end_month,end_month_day,x);

     }

  }

    document.getElementById('popupReportResult').style.display='block';

    var sabm = 0;
    var sabmLostId = 0;
    var sabmLeftId = 0;
    var sabmConfiscatedId = 0;

    var scis = 0;
    var scisLostId = 0;
    var scisLeftId = 0;
    var scisConfiscatedId = 0;

    var sea = 0;
    var seaLostId = 0;
    var seaLeftId = 0;
    var seaConfiscatedId = 0;

    var soh = 0;
    var sohLostId = 0;
    var sohLeftId = 0;
    var sohConfiscatedId = 0;

    var sns = 0;
    var snsLostId = 0;
    var snsLeftId = 0;
    var snsConfiscatedId = 0;

    var son = 0;
    var sonLostId = 0;
    var sonLeftId = 0;
    var sonConfiscatedId = 0;

    var stela = 0;
    var stelaLostId = 0;
    var stelaLeftId = 0;
    var stelaConfiscatedId = 0;

    var i = 0;

    while(i < result.length){
      var temp = result[i].courseAndYear;
      var course = temp.split("-");

        if( course[0].toLowerCase().localeCompare("bsit")== 0 || course[0].toLowerCase().localeCompare("bscs")== 0 || course[0].toLowerCase().localeCompare("bsis")== 0 || course[0].toLowerCase().localeCompare("bsmath")== 0 || course[0].toLowerCase().localeCompare("blis")== 0){
                scis++;
                if( (result[i].remarks).localeCompare("Left") == 0){
                  scisLeftId++;
                }else if( (result[i].remarks).localeCompare("Lost") == 0 ){
                  scisLostId++;
                }else{
                  scisConfiscatedId++;
                }

        }else if(course[0].toLowerCase().localeCompare("bsarch")== 0 || course[0].toLowerCase().localeCompare("bsche")== 0 || course[0].toLowerCase().localeCompare("bsce")== 0 || course[0].toLowerCase().localeCompare("bsece")== 0 || 
                course[0].toLowerCase().localeCompare("bsee")== 0 || course[0].toLowerCase().localeCompare("bsge")== 0 || course[0].toLowerCase().localeCompare("bsie")== 0 || course[0].toLowerCase().localeCompare("bsme")== 0 ){

              sea++;
                if( (result[i].remarks).localeCompare("Left") == 0){
                  seaLeftId++;
                }else if( (result[i].remarks).localeCompare("Lost") == 0 ){
                  seaLostId++;
                }else{
                  seaConfiscatedId++;
                }

        }else if(course[0].toLowerCase().localeCompare("bacom")== 0 || course[0].toLowerCase().localeCompare("bals")== 0 || course[0].toLowerCase().localeCompare("bapis")== 0 || course[0].toLowerCase().localeCompare("baengl")== 0 || 
                course[0].toLowerCase().localeCompare("bapolitsc")== 0 || course[0].toLowerCase().localeCompare("psych")== 0 || course[0].toLowerCase().localeCompare("bsswk")== 0 ){

              soh++;
               if( (result[i].remarks).localeCompare("Left") == 0){
                  sohLeftId++;
                }else if( (result[i].remarks).localeCompare("Lost") == 0 ){
                  sohLostId++;
                }else{
                  sohConfiscatedId++;
                }

        }else if( course[0].toLowerCase().localeCompare("bsn")== 0 ){
            son++;
               if( (result[i].remarks).localeCompare("Left") == 0){
                  sonLeftId++;
                }else if( (result[i].remarks).localeCompare("Lost") == 0 ){
                  sonLostId++;
                }else{
                  sonConfiscatedId++;
                }

        }else if(course[0].toLowerCase().localeCompare("beedgened")== 0 || course[0].toLowerCase().localeCompare("beedpreschl")== 0 || course[0].toLowerCase().localeCompare("beedsped")== 0 || course[0].toLowerCase().localeCompare("beedthe")== 0 ||
                  course[0].toLowerCase().localeCompare("beedval")== 0 || course[0].toLowerCase().localeCompare("bsedbiolsci")== 0 || course[0].toLowerCase().localeCompare("bsedengl")== 0 || course[0].toLowerCase().localeCompare("bsedfil")== 0 ||
                course[0].toLowerCase().localeCompare("bsedmath")== 0 || course[0].toLowerCase().localeCompare("bsedmapeh")== 0 || course[0].toLowerCase().localeCompare("bsedphyssci")== 0 ||  course[0].toLowerCase().localeCompare("bsedss")== 0 ){

              stela++;
                if( (result[i].remarks).localeCompare("Left") == 0){
                  stelaLeftId++;
                }else if( (result[i].remarks).localeCompare("Lost") == 0 ){
                  stelaLostId++;
                }else{
                  stelaConfiscatedId++;
                }

        }


       i++;

    }



    var thatTable = document.getElementById("report_table");
    var topRow = thatTable.insertRow(0);
    var cell = topRow.insertCell(-1);
    cell.setAttribute("colspan","5");
    cell.setAttribute("align","center");
    cell.innerHTML = "FROM " + getMonthByNumber(start_month) +" " + start_month_day +", " + start_year + " TO " + getMonthByNumber(end_month) + " " + end_month_day + ", " + end_year;

    var newRow = thatTable.insertRow(-1);
    newRow.insertCell(-1).innerHTML = "SCIS";
    newRow.insertCell(-1).innerHTML = scis;
    newRow.insertCell(-1).innerHTML = scisLostId;
    newRow.insertCell(-1).innerHTML = scisLeftId;
    newRow.insertCell(-1).innerHTML = scisConfiscatedId;

    var newRow2 = thatTable.insertRow(-1);
    newRow2.insertCell(-1).innerHTML = "SEA";
    newRow2.insertCell(-1).innerHTML = sea;
    newRow2.insertCell(-1).innerHTML = seaLostId;
    newRow2.insertCell(-1).innerHTML = seaLeftId;
    newRow2.insertCell(-1).innerHTML = seaConfiscatedId;

    var newRow3 = thatTable.insertRow(-1);
    newRow3.insertCell(-1).innerHTML = "SOH";
    newRow3.insertCell(-1).innerHTML = soh;
    newRow3.insertCell(-1).innerHTML = sohLostId;
    newRow3.insertCell(-1).innerHTML = sohLeftId;
    newRow3.insertCell(-1).innerHTML = sohConfiscatedId;

    var newRow4 = thatTable.insertRow(-1);
    newRow4.insertCell(-1).innerHTML = "SON";
    newRow4.insertCell(-1).innerHTML = son;
    newRow4.insertCell(-1).innerHTML = sonLostId;
    newRow4.insertCell(-1).innerHTML = sonLeftId;
    newRow4.insertCell(-1).innerHTML = sonConfiscatedId;

    var newRow5 = thatTable.insertRow(-1);
    newRow5.insertCell(-1).innerHTML = "STELA";
    newRow5.insertCell(-1).innerHTML = stela;
    newRow5.insertCell(-1).innerHTML = stelaLostId;
    newRow5.insertCell(-1).innerHTML = stelaLeftId;
    newRow5.insertCell(-1).innerHTML = stelaConfiscatedId;


}

function getMonthByNumber(month){
    var result;
    switch(month){
      case 1:
        result = "January";
        break;
      case 2:
        result = "February";
        break;
      case 3:
        result = "March";
        break;
      case 4:
        result = "April";
        break;
      case 5:
        result = "May";
        break;
      case 6:
        result = "June";
        break;    
      case 7:
        result = "July";
        break;
      case 8:
        result = "August";
        break;
      case 9:
        result = "September";
        break;
      case 10:
        result = "October";
        break;   
      case 11:
        result = "November";
        break;
      case 12:
        result = "December";
        break;
    }

    return result;
}


///a:start_year///b:start_month///c:start_month_day///d:end_year///e:end_month///f:end_month_day///y:object
function resultByDate(a,b,c,d,e,f,y){
    var array = [];
    var i = 0;
    while(i < y.length){
        var dateBorrowed = y[i].dateBorrowed;
        var temp = dateBorrowed.split("."); //year,month,day

        if( (temp[0] >= a && temp[0] <= d) && (temp[1] >= b && temp[1] <= e) && (temp[2] >= c && temp[2] <= f) ){
            array.push(y[i]);
           
        }
    
        i++;
    }

    return array;  
}

function arrangeLocalStorage(){
  var myLocalStorage = [];
  //push all json to array 
  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
      myLocalStorage.push(localStorage.getItem(localStorage.key( i )));
  }

    localStorage.clear();
    
    //put all data from array to localStorage
    for (var i = 0; i < myLocalStorage.length; i++) {
        localStorage.setItem("student"+(i+1),myLocalStorage[i]);
    }

    //delete all rows in table
    var firstTable = document.getElementById("myTable");
    var numberOfRowsInTable1 = firstTable.rows.length;
    for(var i = 1; i < numberOfRowsInTable1; i++ ){
          firstTable.deleteRow(1);
    }

    //call refresh method
    refresh();
}

function sendData(){

  var array = [];
  var constantLengthLocalStorage = localStorage.length;
  //push all data from localStorage that have a dateReturned value to array 

  for( var i=1; i <= constantLengthLocalStorage;i++){
      var temp = JSON.parse(localStorage.getItem("student"+i));
     
      if(temp.dateReturned != null){ //if there is dateReturned
        array.push(temp);
       // localStorage.removeItem("student"+i);
      }

  }

  if(array.length > 0){

      

      for(var i=0; i <= array.length; i++){
          if(i == array.length){
                    var constantLengthLocalStorage = localStorage.length;
                    for( var i=1; i <= constantLengthLocalStorage;i++){
                          var temp = JSON.parse(localStorage.getItem("student"+i));
                          if(temp.dateReturned != null){ //if there is dateReturned
                            localStorage.removeItem("student"+i);
                          }

                      }
              alert("Students who returned student pass were sent to the server.");
          }else{
            //sendJsonData(array[i]);
              var ajaxRequest;  // The variable that makes Ajax possible!
                  try{
                    // Opera 8.0+, Firefox, Safari
                    ajaxRequest = new XMLHttpRequest();
                  } catch (e){
                    // Internet Explorer Browsers
                    try{
                      ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
                    } catch (e) {
                      try{
                        ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
                      } catch (e){
                        // Something went wrong
                        alert("Your browser broke!");
                        return false;
                      }
                    }
                  }
                      // if(ajaxRequest.readyState == 4 && ajaxRequest.status == 0){
                      //      alert("Server is not respondinggg.");
                      // }

                  ajaxRequest.open("POST", "addJson.php",false);
                  ajaxRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                  ajaxRequest.setRequestHeader('Content-Type', 'application/json');

                  try{
                    var temp = [{idNo: array[i].idNo, name: array[i].name, gatePassNumber:array[i].gatePassNumber, serialNumber:array[i].serialNumber, dateBorrowed:array[i].dateBorrowed, courseAndYear:array[i].courseAndYear ,dateReturned:array[i].dateReturned ,remarks:array[i].remarks }];
                    ajaxRequest.send(JSON.stringify(temp));
                  }catch(e){
                    alert("Server is not responding.");
                    break;
                  }

          }
      }


      

  }
 
    arrangeLocalStorage();
}



//////////////////GET//////////////POST////////////////
function getJsonData(){
      var ajaxRequest;  // The variable that makes Ajax possible!
      
      try{
        // Opera 8.0+, Firefox, Safari
        ajaxRequest = new XMLHttpRequest();
      } catch (e){
        // Internet Explorer Browsers
          try{
            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
          } catch (e){
              try{
                ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
              } catch (e){
                // Something went wrong
                alert("Your browser broke!");
                return false;
              }
          }
      }



      try{
          ajaxRequest.open("POST", "getJson.php",false);
          ajaxRequest.send(null); 

          var object = ajaxRequest.responseText;
          document.getElementById('popupReport').style.display='none';

          addRowsReport(JSON.parse(object));
      }catch(e){
        alert("Server is not responding.");
      }



}