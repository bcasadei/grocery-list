/**
 * Created by bc on 8/1/15.
 */
$(document).ready(function() {
    /*/ Function to create and name a new list */
    function newList() {
        var txtval = $('#list-name').val();
        console.log(txtval);
        $(".list-holder").append("<div class='list'>" +
            "<div class='list-header'>" +
            "<div class='title'>" +
            txtval +
            "</div><i class='fa fa-times-circle'></i></div>"+
            "<div class='row'> <input id='item' placeholder='Enter item name…'> <i class='add-item fa fa-plus-square-o fa-2x'></i></div>" +
            "</div>");
        event.preventDefault();
        $('#list-name').val("");
    }

    /* Event to create and name new list */
    $('.add').click(newList);
    $('#list-name').keyup(function(event) {
        if(event.which == 13) {
            newList();
        }
    });

    /* Add items to a list */
    $(".list-holder").on( "keyup", "#item", function(event) {
        // Add a new row with Enter Key
        if(event.which === 13) {
            console.log("keyup enter is working");
            var newItem = $(this).closest('#item').val().trim();
            if(newItem != ""){
                console.log("newItem is working");
                //user text should be added to list with delete button
                $(this).closest(".row").before("<div class='row'><i class='check-box fa fa-square-o'></i><div class='.display-item' contenteditable='true'> " +
                    newItem +
                    "</div><i class='fa fa-times-circle delete-item'></i></div>");
                $(this).closest('#item').val("");
            } else{
                alert('Please Enter an Item Name');
            }
            event.preventDefault();
        }
    })
    // Add new row with button click
    .on( "click", ".add-item", function(event) {
            var newItem = $(this).siblings('#item').val().trim();
            if(newItem != ""){
                console.log("newItem is working");
                //user text should be added to list with delete button
                $(this).closest(".row").before("<div class='row'><i class='check-box fa fa-square-o'></i><div class='.display-item' contenteditable='true'> " +
                    newItem +
                    "</div><i class='fa fa-times-circle delete-item'></i></div>");
                $(this).siblings('#item').val("");
            } else{
                alert('Please Enter an Item Name');
            }
            event.preventDefault();
    })
    // Check off items on list
        // Check checklist
    .on( "click", ".check-box", function(event) {
        event.preventDefault();
        var boxclass = this.className;
        console.log(boxclass);
        if(boxclass == "check-box fa fa-square-o") {
            console.log("classcheck is working");
            $(this).closest(".check-box").removeClass("fa-square-o").addClass("fa-check-square-o");
            // Gray out row
            $(this).closest(".row").toggleClass("completed");
            // line-through text
            $(this).siblings( ).toggleClass("done");
        }
        else {
            $(this).closest(".check-box").removeClass("fa-check-square-o").addClass("fa-square-o");
            $(this).closest(".row").toggleClass("completed");
            $(this).siblings( ).toggleClass("done");
        }

    })
    // Show delete btn on mouseover row
    .on("mouseenter", ".row", function() {
        $(this).find(".delete-item").show();
    })
    .on("mouseleave", ".row", function() {
        $(this).find(".delete-item").hide();
    })
    // Delete individual items from list
    .on("click", ".delete-item", function() {
        $(this).closest(".row").hide();
    })
    // Delete individual lists
    .on("click", ".list-header > i", function() {
        $(this).closest(".list").hide();
    });
    /* Clear all lists */
    $('.clear').click(function(){
        $('.list').hide();
    });
});