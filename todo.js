
var myTaskArray = []

var date = new Date();

$(function() {

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
// Denna gör ingenting, ta bort? ->Hej, det gör något- Det gör textarean töm efter du klickar på AddTask button..  
    $('#inputUser').val('');
  });


  $("#removeBtn").click(function () {
    $('#list').children().filter(function () {
      return this.firstChild.checked;
    }).remove();
  });
  // Gjorde containern klickbar istället för random bakgrundsfärg. Fick deaktivera css för image gradient då den lägger sig över backgroundsfärgen.
  //ohhh nice :)
  $(".container").click(function () {
    $(".container").each(function () {
      let colorRed = Math.floor((Math.random() * 256));
      let colorGreen = Math.floor((Math.random() * 256));
      let colorBlue = Math.floor((Math.random() * 256));
      $(this).css("background-color", "rgba(" + colorRed + "," + colorGreen + "," + colorBlue + ")");
    });
  });

});



