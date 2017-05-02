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
    
    var position = $("#test").position();
    $("#testmenu").css({"position": "fixed", "left": position.left});
    
    $(window).scroll(function(){
        var position123 = $("#test").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu").css({"position": "fixed", "left": (position123.left - windowposition)});
    })
    $( window ).resize(function() {
        var position12 = $("#test").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu").css({"position": "fixed", "left": (position12.left - windowposition)});
    });
    
    var position2 = $("#test2").position();
    $("#testmenu2").css({"position": "fixed", "left": position2.left});
    
    $(window).scroll(function(){
        var position123 = $("#test2").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu2").css({"position": "fixed", "left": (position123.left - windowposition)});
    })
    $( window ).resize(function() {
        var position22 = $("#test2").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu2").css({"position": "fixed", "left": (position22.left - windowposition)});
    });
    
    var position3 = $("#test3").position();
    $("#testmenu3").css({"position": "fixed", "left": position3.left});
    
    $(window).scroll(function(){
        var position123 = $("#test3").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu3").css({"position": "fixed", "left": (position123.left - windowposition)});
    })
    $( window ).resize(function() {
        var position32 = $("#test3").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu3").css({"position": "fixed", "left": (position32.left - windowposition)});
    });
    
    var position4 = $("#test4").position();
    $("#testmenu4").css({"position": "fixed", "left": position4.left});
    
    $(window).scroll(function(){
        var position123 = $("#test4").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu4").css({"position": "fixed", "left": (position123.left - windowposition)});
    })
    $( window ).resize(function() {
        var position42 = $("#test4").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu4").css({"position": "fixed", "left": (position42.left - windowposition)});
    });
});




