/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {

    character = sessionStorage.getItem("SessionCharacter");
 

    if (character === "Tel-E")
    {
        $("#a0").attr("class", "");
        $("#a1").attr("class", "active");
        $("#0").attr("class", "item");
        $("#1").attr("class", "item active");
        $("#d").html("<b>Tel-E:</b> 1");
    }
    else if (character === "Pyra")
    {
        $("#a0").attr("class", "");
        $("#a2").attr("class", "active");
        $("#0").attr("class", "item");
        $("#2").attr("class", "item active");
        $("#d").html("<b>Pyra:</b> 2");
    }
    else
        $("#d").html("<b>Beauty:</b> 0");

    $('#myCarousel').on('slide.bs.carousel', function(ev) {
        var id = ev.relatedTarget.id;

        if(id === "0")
            $("#d").html("<b>Beauty:</b> 0");
        else if(id === "1")
            $("#d").html("<b>Tel-E:</b> 1");
        else if(id === "2")
            $("#d").html("<b>Pyra:</b> 2");
    });
});