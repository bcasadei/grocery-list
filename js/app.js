/**
 * Created by bc on 8/1/15.
 */
$(document).ready(function() {
/* HTML for a new list*/
    /* var newList1 = $("<div class='list'><div class='list-header'><div class='title'>");
    var newList2 = $("</div><i class='fa fa-times-circle'></i></div><div class='row'><p><i class='fa fa-square-o'></i> Apples <i class='fa fa-times-circle'></i></p></div></div>"); */

/* Function to create and name new list */
    $('.add').click(function(event) {
        var txtbox = document.getElementById('list-name');
        var txtval = txtbox.value;
        console.log(txtval);
        $(".list-holder").append("<div class='list'><div class='list-header'><div class='title'>Header</div></div></div>");
        event.preventDefault();
        document.getElementById('list-name').value = '';
    });

/* Function to clear lists */
    $('.clear').click(function(){
        $('.list').hide();
    });
});


