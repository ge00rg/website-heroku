var myList=[{"name" : "abc", "age": 23},
            {"name" : "dfg", "age": 44},
            {"name" : "xyz", "age": 54}];

function buildHtmlTable() {
     for (var i = 0 ; i < myList.length ; i++) {
         var row$ = $('<tr/>');
         var cellValue = myList[i]["name"]+"<br>"+myList[i]["age"];
 
         if (cellValue == null) { cellValue = ""; }
 
         row$.append($('<td/>').html(cellValue));
         
         $("#publicationsTable").append(row$);
     }
 }

buildHtmlTable();
