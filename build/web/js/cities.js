/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {

    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    $("#MinorCity").click(function() {
        $("#cityinfo").empty();

        $("#cityinfo").append('<img id = "city" src = "p" alt = "Minor City PlaceHolder" class = "city-image-select">');
        $("#cityinfo").append('<div class = "cityinfo" style = "position: relative; top: 60%; ">\n\
<img id = "city1" src = "p" alt = "PlaceHolder 1" width = "300" height = "200" align = "right" style = "padding: 50px;">\n\
<p style = "margin-left: 50px; margin-right: 50px;">Hi.</p></div>');
        
        $("#cityinfo").append('<div class = "cityinfo" style = "position: relative; top: 60%; ">\n\
<img id = "city2" src = "p" alt = "PlaceHolder 2" width = "300" height = "200" align = "right" style = "padding: 50px;">\n\
<p style = "margin-left: 50px; margin-right: 50px;">Hello.</p></div>');
        

        $("#MinorCity").attr("class", "active");
        $("#GrinCity").attr("class", "");

        $("#MinorCity").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
        $("#GrinCity").attr("style", "cursor: pointer; background-color: gold");

    });

    $("#GrinCity").click(function() {
        $("#cityinfo").empty();

        $("#cityinfo").append('<img id = "city" src = "p" alt = "Minor City PlaceHolder" class = "city-image-select">');
        $("#cityinfo").append('<div class = "cityinfo" style = "position: relative; top: 60%; ">\n\
<img id = "city1" src = "p" alt = " PlaceHolder" width = "300" height = "200" align = "right" style = "padding: 50px;">\n\
<p style = "margin-left: 50px; margin-right: 50px;">Hi.</p></div>');
        
        $("#cityinfo").append('<div class = "cityinfo" style = "position: relative; top: 60%; ">\n\
<img id = "city2" src = "p" alt = "Grin City PlaceHolder" width = "300" height = "200" align = "right" style = "padding: 50px;">\n\
<p style = "margin-left: 50px; margin-right: 50px;">Hello.</p></div>');



        $("#MinorCity").attr("class", "");
        $("#GrinCity").attr("class", "active");

        $("#MinorCity").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinCity").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
    });

});

