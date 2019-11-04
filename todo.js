
var myTaskArray = []

var date = new Date(); // vad är poängen med den här raden? det står ingen datum någonstans på sidan!
// Syftet är nog att sätta datummärkning på todo, dock behöver den formateras till YY/MM/DD men visar YYYY/MM/DD/TZ
// ok jag förstår!


$(document).ready(function () {

  $("#addBtn").click(function () {
    var newItem = $('#inputUser').val();
    myTaskArray.push(newItem);
    if (myTaskArray.length > 10) {
      alert("Your Schedule for today is now full!");
    } else {
      $("#list").append("<li><input type = 'checkbox' id = 'removeTask'>" + "  " + newItem + "</li>");
    }
    // Denna gör ingenting, ta bort?
    //$('#inputUser').val('');
  });


  $("#removeBtn").click(function () {
    $('#list').children().filter(function () {
      return this.firstChild.checked;
    }).remove();
  });
  // La till en randomiser för bakgrundsfärgen med en knapp. Fick deaktivera css för image gradient då den lägger sig över backgroundsfärgen.
  $("#randomColor").click(function () {
    $(".container").each(function () {
      let colorRed = Math.floor((Math.random() * 256));
      let colorGreen = Math.floor((Math.random() * 256));
      let colorBlue = Math.floor((Math.random() * 256));
      $(this).css("background-color", "rgba(" + colorRed + "," + colorGreen + "," + colorBlue + ")");
    });
  });

});



