
var myTaskArray = []

var date = new Date(); // vad är poängen med den här raden? det står ingen datum någonstans på sidan! 
  $(document).ready(function () {
    $("#addBtn").click(function () {
        var newItem = $('#inputUser').val();
        myTaskArray.push(newItem);
        if (myTaskArray.length === 11) {
            alert("Your Schedule for today is now full!");
        } else {
            $("#list").append("<li><input type = 'checkbox' id = 'removeTask'>" + "  " + newItem + "</li>");
        }
        $('#inputUser').val('');
    });

   
    $("#removeBtn").click(function () {
        $('#list').children().filter(function () {  
            return this.firstChild.checked;
        }).remove();
    });

});



