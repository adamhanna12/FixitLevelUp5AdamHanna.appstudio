
seeCustomers.onshow=function(){
      drpCompanies.clear()
    let compQuery = "SELECT DISTINCT name FROM customer;" 
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=amh86170&query=" + compQuery)

    if (req1.status == 200) { //transit worked
        let results = JSON.parse(req1.responseText)
              
      if (results.length == 0)
        NSB.MsgBox("There are no customers from that state.")
      else {        
        console.log("the parsed JSON is " + results)
        for (i=0; i<= results.length - 1; i++){
           drpCompanies.addItem(results[i])
          }
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox(`Error code: ${req1.status}`)
}


drpCompanies.onclick=function(s){
   if (typeof(s) == "object")   
      return                    
    else 
       customer = s
       query = "SELECT * FROM customer WHERE name =" + '"' + customer + '"';
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amh86170&pass=Baseball12!&database=amh86170&query=" + query)

  if (req2.status == 200) { //transit worked
          let results = JSON.parse(req2.responseText)
          console.log(results)
           if (results.length == 0)
        NSB.MsgBox("There are no customers of that name.")
      else {        
        console.log("the parsed JSON is " + results)
        // output the names of all the dogs
        results = results[0]
        message = (`${results[1]} \n${results[2]} \n${results[3]}, ${results[4]}, ${results[5]}`);
        console.log(message)
        taCompanyData.value = message;
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req2.status)
}


hamMenu.onclick=function(s){
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
