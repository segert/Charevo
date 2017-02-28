/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {

    character = parent.document.URL.substring(parent.document.URL.indexOf('?char=') + 6, parent.document.URL.length);
    if (character.charAt(character.length - 1) === '/')
        character = "Beauty";

    if (character === "Tel-E")
    {
        $("#a0").attr("class", "");
        $("#a1").attr("class", "active");
        $("#0").attr("class", "item");
        $("#1").attr("class", "item active");
        $("#d").text("1");
    }
    else if (character === "Pyra")
    {
        $("#a0").attr("class", "");
        $("#a2").attr("class", "active");
        $("#0").attr("class", "item");
        $("#2").attr("class", "item active");
        $("#d").text("2");
    }
    else
        $("#d").text("0");

    $('#myCarousel').on('slide.bs.carousel', function(ev) {
        var id = ev.relatedTarget.id;

        $("#d").text(id);
    });
});