// Select color input
// Select size input

var submitBtn, heigth, width, color

submitBtn = document.querySelector("input[type=submit]");

// When Submit button clicked, Call makeGrid()
submitBtn.addEventListener("click", function(event){
  // 1. Disable the Submit button default action
  event.preventDefault();

  // 2. Define the heigth and the width
  heigth = $("#inputHeight").val();
  width = $("#inputWidth").val();

  // 3. Call makeGrid()
  makeGrid(heigth,width);
})


function makeGrid(heigth,width) {
  // 1. Clear the table rows and columns ( in case there's one)
  $("tr").remove();

  // 2. Build the table 
    // Build table's rows
    for ( var i = 1; i <= heigth ; i++){
      $("#pixelCanvas").append("<tr id=tableRow" + i + "></tr>");
      // Build table's columns
      for ( var j = 1; j <= width; j++ ){
        $('#tableRow' + i).append("<td></td>")
      }
  }

  // 3. Applying color to cell
  $("td").click(function(){
    // Store the color value in a variable
    color = $("#colorPicker").val();

    //
    $(this).attr("style",'background-color:'+ color);
  })
};
