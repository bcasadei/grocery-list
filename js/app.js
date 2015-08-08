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
            "<div class='row'><p><i class='fa fa-square-o check-box'></i> <input id='item' placeholder='Enter item name…'> <i class='fa fa-plus-square-o fa-2x add-item'></i></p></div>" +
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

/* Function to get item name */
    /*TODO variable is not being defined */
    function newItem() {
        var itembox = document.getElementById('item');
        var itemtxt = itembox.value;
        document.getElementById('item').value = '';
        console.log(itemtxt);
    }

/* Add items to a list */
    /* Hit Enter key to add item */
    $(document).on( "keyup", "#item", function(event) {
        if(event.which == 13) {
            console.log("keyup is working");
            $(newItem);
            $(this).hide();
            $(this).closest('.check-box').append("" + itemtxt + "");
            $(this).closest('.list').append("<div class='row'><p><i class='fa fa-square-o check-box'></i> <input id='item' placeholder='Enter item name…'> <i class='fa fa-plus-square-o fa-2x add-item'></i></p></div>");
            event.preventDefault();
        }
    });
    /* Hit button to add item */
    $(document).on( "click", ".add-item", function(event) {
        $(this).closest('.list').append("<div class='row'><p><i class='fa fa-square-o check-box'></i> <input id='item' placeholder='Enter item name…'> <i class='fa fa-plus-square-o fa-2x add-item'></i></p></div>");
        event.preventDefault();
    });
/* Clear lists */
    $('.clear').click(function(){
        $('.list').hide();
    });
});

/* Cross off items */
$(document).on ( "click", ".check-box", function(event) {
    console.log("click is working");
    $(this).removeClass(".fa-square-o").addClass(".fa-check-square-o");
    $(this).parent(".row").addClass(".completed");
    event.preventDefault();
});
