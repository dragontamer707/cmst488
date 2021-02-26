// Date object
  var today = new Date();

// Current Date
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+' '+today.getDate();

  document.getElementById("current_date").innerHTML = date;

// Current Time
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  document.getElementById("current_time").innerHTML = time;

// Current Date and Time
  var dateTime = date+' '+time;
  
  document.getElementById("current_dateandtime").innerHTML = dateTime;
