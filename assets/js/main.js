// A $( document ).ready() block.
$(document).ready(function () {
    "use strict";

  // active navigation menu 
    $('.logo-area  .toggle-box .item-box ,.remove-icon').click(function () {
        $( ".toggle-box .item-box " ).toggleClass("show-toggle"); 
        $( ".main-menu" ).toggleClass("main-menu-show");       

    })
    $(".nav-item .nav-link").click(function () {
        $( ".main-menu" ).removeClass("main-menu-show"); 

    })
        
        


    
});


