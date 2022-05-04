$(document).ready(function () {

  $('#retrieve-resources').click(function () {
    var displayResources  = document.querySelector("#display-resources");
    var iso2code document.getElementById('iso2code').value;

    displayResources.text('Loading data from JSON source...');    $.ajax({
      type: "GET"
      url: "https://restcountries.com/v2/alpha?codes={code},{code},{code}"
      data: // Use the format { name: .name}, {alpha2: .alpha2_code}, {alpha3: alpha3_code};
      success: function(result)
      {

        var output="<table><thead><tr><th>Name</th><th>Alpha 2 Code</th><th>Alpha 3 Code</th></thead><tbody>";
for (let i in result) {
 output +=
          "<tr><td>" +
result.RestResponse.result[i].name +
      "</td><td>" +
result.RestResponse.result[i].alpha2_code +
"</td><td>" +
result.RestResponse.result[i].alpha3_code +
  "</td></tr>";
      }

        displayResources.html(output);
        $("table").addClass("table");
table.table tr > td.blueBg{
    background-color: blue; 
}
      }
    });
  });
});
