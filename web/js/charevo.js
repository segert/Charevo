/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$(document).ready(function() {
    character = parent.document.URL.substring(parent.document.URL.indexOf('?char=') + 6, parent.document.URL.length);
    if (character.charAt(character.length - 1) === '/' || character.substring(character.length - 4, character.length) === "html")
        character = "Beauty";
    dialogue = 1;
    document.getElementById("d").innerHTML = character;


    if (character === "Beauty")
    {
        document.getElementById("d").innerHTML = "Beauty: Hello World ";
    }
    else if (character === "Tel-E")
    {
        document.getElementById("switch").setAttribute("href", "switchcharacter.html?char=Tel-E");
        document.getElementById("beautystories").setAttribute("href", "beautystories.html?char=Tel-E");
    }
    else if (character === "Pyra")
    {
        document.getElementById("switch").setAttribute("href", "switchcharacter.html?char=Pyra");
        document.getElementById("beautystories").setAttribute("href", "beautystories.html?char=Pyra");
    }
    else
        document.getElementById("d").innerHTML = "Beauty: Hello World ";
});



function test() {
    x++;

}

function setcharacter(selected) {
    character = selected;
}

function getcharacter() {
    return character;
}


function next() {
    dialogue++;
    DialogueChangeMenu();
    document.getElementById("prev").setAttribute("style", "opacity: 1");
}

function prev() {
    if (dialogue > 1)
    {
        dialogue--;
        DialogueChangeMenu();
    }
    if (dialogue === 1)
        document.getElementById("prev").setAttribute("style", "opacity: .6");
}

function DialogueChangeMenu() {
    if (character === "Beauty") 
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = "Beauty: Hello World";
                break;
            case(2):
                document.getElementById("d").innerHTML = "Beauty: Hi";
                break;
        }

    }
}




