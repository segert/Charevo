/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$(document).ready(function() {
    var color;
    $(".li-a-menu1:not(.li-a-menu1-selected)").mouseover(function() {
        color = $(".limenu1:not(.li-a-menu1-selected)").css( "background-color" );
        $(this).clearQueue().stop();
        
        $(this).animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);
    
    });
    
    $(".li-a-menu1:not(.li-a-menu1-selected)").mouseout(function() {
        $(this).clearQueue().stop();
        $(this).animate({backgroundColor: color, color: "#000000"}, 400);
    });
    
    var position = $("#test2").position();
    $("#testmenu").css({"position": "fixed", "left": position.left});
    
    $( window ).resize(function() {
        var position2 = $("#test2").position();
        $("#testmenu").css({"position": "fixed", "left": position2.left});
    });
});




