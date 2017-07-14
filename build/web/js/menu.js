/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$(document).ready(function() {

    if (sessionStorage.getItem("Cyhack") === "true")
    {
        $("#home, #about, #quiz, #stories, #miscellaneous").html("<b>Cyhack</b>");
        $("#characters").html("<b>Cyhack and Some Idiots</b>");
        $("#gene").html("<b>Magical Biology</b>");
        $("#author").html("<b>It's Eh-gert, Not Ee-gert!</b>");
        $("#beautyquizzes").html("<b>Quizzes About Some Blonde</b>");
        $("#beautystories").html("<b>Unnecessary Prequels</b>");
        $("#switchcharacter").html("<b>Girls! Girls! Girls! Flip Through Our Girls!</b>");
        $("#blog").html("<b>Updates for No One</b>");
        
        $("#subhome").html("<b>Page of Just a Girl</b>");
        $("#subabout").html("<b>Useless Trivia</b>");
        $("#subcharacters").html("The Cyhack and the Rest");
        $("#subcharevogene").html("Stupid Power Source");
        $("#subauthor").html("Some Schmuck With a Pencil");
        $("#subquiz").html("<b>Exams! Yeah!</b>");
        $("#subbeautyquizzes").html("Testing Your Memory on the Cyhack's City");
        $("#substories").html("<b>Free Reading, Ya Cheapskate</b>");
        $("#subbeautystories").html("Stories About 6 People, Only 1 Mentioned by Name");
        $("#submiscellaneous").html("<b>No Category</b>");
        $("#subswitchcharacter").html("Chicks on a Menu");
        $("#subblog").html("Some Hero Ramblings");
    }
    
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
    
    document.getElementById("searchIcon").width = (window.screen.width * .015625);
    document.getElementById("searchIcon").height = (window.screen.height * .0277777);
    
    $("footer").css({"width": window.screen.width});
    $("section").css({"width": window.screen.width});
    
    footersectionWidth = window.screen.width;
    
    $(".footerlist td").attr("style", "padding-right: " + (window.screen.width / 16) + "px");
        $(".footerlist th").attr("style", "padding-right: " + (window.screen.width / 16) + "px");
        
        $(".footercontent").css({"padding-left": (window.screen.width / 13)});
    
    //$(".footerlist td").css({"font": "14px arial, sans-serif"});
    $(".site-footer").css({"width": window.screen.width});
    
    footerlistPadding = (window.screen.width / 16);
    footercontentPadding = (window.screen.width / 13);
    
    var menuposition = document.getElementById("menudiv").clientHeight;
    if(window.screen.width > 700)
        $("#formdiv").css({"position": "relative", "background-color": "#98CAAA", "width": "100%", "height": (menuposition + 5) + "px", "top": menuposition + "px",});
    else
        $("#formdiv").css({"position": "relative", "background-color": "#98CAAA", "width": "100%", "height": (menuposition + 15) + "px", "top": menuposition + "px",});
    
    //$(".footers").css({"width": window.screen.width});
    //$(".footers").css({"height": (window.screen.height / 6)});
    
    
    footerHeight = (window.screen.height / 6);


    var position = $("#test").position();
    $("#testmenu").css({"position": "fixed", "left": position.left});
    
    $(window).scroll(function(){
        var position123 = $("#test").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu").css({"position": "fixed", "left": (position123.left - windowposition)});
    });
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
    });
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
    });
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
    });
    $( window ).resize(function() {
        var position42 = $("#test4").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu4").css({"position": "fixed", "left": (position42.left - windowposition)});
    });
    
    
    
    
    
    $(window).resize(function(){
        document.getElementById("searchIcon").width = (window.screen.width * .015625);
    document.getElementById("searchIcon").height = (window.screen.height * .0277777);
    
    $("footer").css({"width": footersectionWidth});
    $("section").css({"width": footersectionWidth});
    
    $(".footerlist td").attr("style", "padding-right: " + footerlistPadding + "px");
        $(".footerlist th").attr("style", "padding-right: " + footerlistPadding + "px");
        
        $(".footercontent").css({"padding-left": footercontentPadding});
    
    //$(".footerlist td").css({"font": "14px arial, sans-serif"});
    $(".site-footer").css({"width": footersectionWidth});
    
    var menuposition = document.getElementById("menudiv").clientHeight;
    if(window.screen.width > 700)
        $("#formdiv").css({"position": "relative", "background-color": "#98CAAA", "width": "100%", "height": (menuposition + 5) + "px", "top": menuposition + "px",});
    else
        $("#formdiv").css({"position": "relative", "background-color": "#98CAAA", "width": "100%", "height": (menuposition + 15) + "px", "top": menuposition + "px",});
    
    //$(".footers").css({"width": window.screen.width});
    //$(".footers").css({"height": footerHeight});
    
    
    
    var position = $("#test").position();
    $("#testmenu").css({"position": "fixed", "left": position.left});
    
    $(window).scroll(function(){
        var position123 = $("#test").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu").css({"position": "fixed", "left": (position123.left - windowposition)});
    });
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
    });
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
    });
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
    });
    $( window ).resize(function() {
        var position42 = $("#test4").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu4").css({"position": "fixed", "left": (position42.left - windowposition)});
    });

    });
});




