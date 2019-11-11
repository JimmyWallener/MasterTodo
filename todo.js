
var myTaskArray = []

var date = new Date();

$(function () {

  $("#addBtn").click(function () {
    var newItem = $('#inputUser').val();
    myTaskArray.push(newItem);
    if (myTaskArray.length > 10) {
      alert("Your Schedule for today is now full!");
      //Lade in ett stopp här då trots att man säger att maxlängd är uppnådd, så fortsatte koden posta efter man trycker ok. return; stoppar det.
      return;
    } if (newItem == '' || newItem.length < 4) {
      return;
    } else {
      var index = myTaskArray.length;
      $("#list").append("<li id='" + index + "'><input type = 'checkbox' id = 'removeTask'>" + "  " + newItem + "</li>");
      // lade till nummer framför texten.
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

  $('.sortList').sortable({
    connectWith: ".sortList",
    tolerance: "pointer"
  });



  //
  $(function () {
    $('document').tooltip();
  });
  // Lade till en tooltip för att uppmärksamma besökaren om att klicka för att byta färg.
  $("#removeBtn").click(function () {
    $('#list').children().filter(function () {
      return this.firstChild.checked;
    }).remove()
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

//stylar input field
var inputFields = $("input:text");
 inputFields.focus(function () {
     $(this).css("box-shadow", "0 0 5px #181");
 });

});



