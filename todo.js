
var myTaskArray = []

var date = new Date();

$(function () {

  $("#addBtn").click(function () {
    var newItem = $('#inputUser').val();
    myTaskArray.push(newItem);
    if (myTaskArray.length > 10) {
      alert("Your Schedule for today is now full!");
    } if (newItem == '' || newItem.length < 4) {
      return;
    } else {
      $("#list").append("<li><input type = 'checkbox' id = 'removeTask'>" + "  " + newItem + "</li>");
      //när man klickar på checkbox i listan ska det alternativet strykas över. Jag har addat här också :) 
      //jag testar gitbash here och det funkar.. hehehe im so happy -- Älskar det 
      $("input:checkbox").click(function () {
        var $this = $(this);
        if (this.checked) {
          $this.parent().addClass('completed');
        } else {
          $this.parent().removeClass('completed');
        }
      });
    }
    $('#inputUser').val('');
  });
  // Här behöver vi lägga in draggable mot div som mall. Det skall inte gå att dra och släppa utanför divtaggen.




  //

  $("#removeBtn").click(function () {
    $('#list').children().filter(function () {
      return this.firstChild.checked;
    }).remove();
  });
  // Gjorde containern klickbar istället för random bakgrundsfärg. Fick deaktivera css för image gradient då den lägger sig över backgroundsfärgen.
  // Ändrade igen, då färgen ändrades när man använder textfältet. Nu är det h1 texten som är klickbar, dock är klickable area stort nog.
  //ohhh nice :)
  $("h1").click(function () {
    $(".container").each(function () {
      let colorRed = Math.floor((Math.random() * 256));
      let colorGreen = Math.floor((Math.random() * 256));
      let colorBlue = Math.floor((Math.random() * 256));
      $(this).css("background-color", "rgba(" + colorRed + "," + colorGreen + "," + colorBlue + ")");
    });
  });

});



