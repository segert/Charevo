/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$(document).ready(function() {

        var characters = ["Beauty", "Tel-E", "Pyra"];
        //switchcharacter = "";
        //if(sessionStorage.getItem("SessionCharacter") === null)
            switchcharacter = parent.document.URL.substring(parent.document.URL.indexOf('?char=') + 6, parent.document.URL.length);
        //else
         //   switchcharacter = sessionStorage.getItem("SessionCharacter");
         if(characters.includes(switchcharacter))
             sessionStorage.setItem("SessionCharacter",switchcharacter);
        
        if(sessionStorage.getItem("SessionCharacter") !== null)
            character = sessionStorage.getItem("SessionCharacter");
        else
        {
            sessionStorage.setItem("SessionCharacter", "Beauty");
            character = "Beauty";
        }
        
        document.getElementById("d").innerHTML = character;
    //else
       // character = "Beauty";
    dialogue = 1;
    max = 0;
    //document.getElementById("d").innerHTML = switchcharacter;

    var beautyBold = "Beauty: ";
    beautyBold = beautyBold.bold();
    var teleBold = "Tel-E: ";
    teleBold = teleBold.bold();
    var pyraBold = "Pyra: ";
    pyraBold = pyraBold.bold();

    if (character === "Beauty")
    {
        document.getElementById("d").innerHTML = beautyBold + "Hello World ";
        document.getElementById("character").src = "images/beautyleft1.png";
        document.getElementById("character").alt = "Beauty Placeholder";
        max = 2;
    }
    else if (character === "Tel-E")
    {
       document.getElementById("d").innerHTML = teleBold + "Hello World ";
       document.getElementById("character").src = "images/tel-eleft1.png";
       document.getElementById("character").alt = "Tel-E Placeholder";
       max = 2;
    }
    else if (character === "Pyra")
    {
        document.getElementById("d").innerHTML = pyraBold + "Hello World ";
        document.getElementById("character").src = "images/pyraleft1.png";
        document.getElementById("character").alt = "Pyra Placeholder";
        max = 2;
    }
    //else
     //   document.getElementById("d").innerHTML = "Beauty: Hello World ";
        
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
    if(dialogue < max)
    {
        dialogue++;
        DialogueChangeMenu();
        document.getElementById("prev").setAttribute("style", "opacity: 1");
    }
    if (dialogue === max)
        document.getElementById("next").setAttribute("style", "opacity: .6");
}

function prev() {
    if (dialogue > 1)
    {
        dialogue--;
        DialogueChangeMenu();
        document.getElementById("next").setAttribute("style", "opacity: 1");
    }
    if (dialogue === 1)
        document.getElementById("prev").setAttribute("style", "opacity: .6");
}

function DialogueChangeMenu() {
    var beautyBold = "Beauty: ";
    beautyBold = beautyBold.bold();
    var teleBold = "Tel-E: ";
    teleBold = teleBold.bold();
    
    if (character === "Beauty") 
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = beautyBold + "Hello World";
                break;
            case(2):
                document.getElementById("d").innerHTML = beautyBold + "Hi";
                break;
        }

    }
}

function QuizDialogue(){
    
}




