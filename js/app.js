/**
 * Created by bc on 8/1/15.
 */
$(document).ready(function() {
/*/ Function to create and name a new list */
    function newList() {
        var txtbox = document.getElementById('list-name');
        var txtval = txtbox.value;
        console.log(txtval);
        $(".list-holder").append("<div class='list'>" +
            "<div class='list-header'>" +
            "<div class='title'>" +
            txtval +
            "</div><i class='fa fa-times-circle'></i></div>"+
            "<div class='row'><p><i class='fa fa-square-o'></i> <input id='item' placeholder='Enter item name…'> <i class='fa fa-times-circle'></i></p></div>" +
            "</div>");
        event.preventDefault();
        document.getElementById('list-name').value = '';
    }

/* Event to create and name new list */
    $('.add').click(newList);
    $('#list-name').keydown(function(event) {
        if(event.which == 13) {
        $(newList);
        }
    });

/* Add items to a list */
    $(document).on( "keyup", ("#item"), function(event) {
        if(event.which == 13) {
            console.log("keyup is working");
            $(this).closest('.list').append("<div class='row'><p><i class='fa fa-square-o'></i> <input id='item' placeholder='Enter item name…'> <i class='fa fa-times-circle'></i></p></div>");
            event.preventDefault();
        }
    });
/* Clear lists */
    $('.clear').click(function(){
        $('.list').hide();
    });
});