/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {

    character = sessionStorage.getItem("SessionCharacter");

    if (character === "Beauty")
    {
        document.getElementById("emblem").src = "images/Emblems/beautyemblem.png";
        document.getElementById("emblem").alt = "Beauty Emblem Placeholder";
    }
    else if (character === "Tel-E")
    {
       document.getElementById("emblem").src = "images/Emblems/tel-eemblem.png";
       document.getElementById("emblem").alt = "Tel-E Emblem Placeholder";
    }
    else if (character === "Pyra")
    {
        document.getElementById("emblem").src = "images/Emblems/pyraemblem.png";
        document.getElementById("emblem").alt = "Pyra Emblem Placeholder";
    }

});