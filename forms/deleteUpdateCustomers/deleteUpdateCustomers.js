
deleteUpdateCustomers.onshow=function(){
 drpCompanies1.clear()
    custQuery = "SELECT DISTINCT name FROM customer;" 
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=amh86170&query=" + custQuery)

    if (req1.status == 200) { //transit worked
        let results = JSON.parse(req1.responseText)
              
      if (results.length == 0)
        NSB.MsgBox("There are no customers from that state.")
      else {        
        console.log("the parsed JSON is " + results)
        for (i=0; i<= results.length - 1; i++){
           drpCompanies1.addItem(results[i])
          }
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox(`Error code: ${req1.status}`) 
}

drpCompanies1.onclick=function(s){
        if (typeof(s) == "object")   
      return                    
    else 
        company = s
}

btnSubmit.onclick=function(){
   if (rdoUpdateDelete.value == 0){
  
  check = company
  newName = inptNew.value
  query5 = "SELECT * FROM customer WHERE name = " + '"' + check + '"'  ;
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=amh86170&query=" + query5)
    if (req1.status == 200) { //transit worked
        results = JSON.parse(req1.responseText)
        console.log(results)
        if (results.length == 0)
            NSB.MsgBox("There are no customers of that name.")
          else { 
            query6 = "UPDATE customer SET name = " + '"' + newName + '"' + "WHERE name =" + '"' + check + '"' ;
            req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=amh86170&query=" + query6)
            query7 = "SELECT DISTINCT name FROM customer;" 
            req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=amh86170&query=" + query7)
            results = JSON.parse(req4.responseText)
            console.log("the parsed JSON is " + results)
            let message = ""
            for (i=0; i<= results.length - 1; i++){
                message = (message + (results[i][0]) + "\n");
              }
            console.log(message)
            taCompanyData1.value = message;
          } 
          

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
      
  }
  else {
  check = company
   let query = "SELECT * FROM customer WHERE name = " + '"' + check + '"'  ;
 // alert(query)
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=amh86170&query=" + query)

    if (req1.status == 200) { //transit worked
        results = JSON.parse(req1.responseText)
        console.log(results)
      if (results.length == 0)
        NSB.MsgBox("There are no customers of that name.")
      else { 
        query = "DELETE FROM customer WHERE name =  " + '"' + check + '"'  ;
        req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=amh86170&query=" + query)
        query2 = "SELECT * FROM customer";
        req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=amh86170&query=" + query2)
        results = JSON.parse(req3.responseText)
        console.log("the parsed JSON is " + results)
        // output the names of all the dogs
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        taCompanyData1.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
  
  
  }
  
}

hamMenu1.onclick=function(){
      if (typeof(s) == "object") 
    return
  else{
    switch(s){
    case "See Customer":
      ChangeForm(seeCustomers);
      break;
    case "Add Customer": 
      ChangeForm(addCustomer);
      break;
    case "Edit Customer": 
      ChangeForm(deleteUpdateCustomers);
      break;
      }
    
  }
}


