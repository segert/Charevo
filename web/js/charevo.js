/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$(document).ready(function() {

        switchcharacter = parent.document.URL.substring(parent.document.URL.indexOf('?char=') + 6, parent.document.URL.length);
        if (switchcharacter.charAt(switchcharacter.length - 1) === '/' 
                || switchcharacter.substring(switchcharacter.length - 4, switchcharacter.length) === "html"
                || switchcharacter === "")
            character = "Beauty";
        else
            character = switchcharacter;
        
        sessionStorage.setItem("SessionCharacter",character);
    //else
       // character = "Beauty";
    dialogue = 1;
    //document.getElementById("d").innerHTML = switchcharacter;

    var beautyBold = "Beauty: ";
    beautyBold = beautyBold.bold();
    var teleBold = "Tel-E: ";
    teleBold = teleBold.bold();

    if (character === "Beauty")
    {
        document.getElementById("d").innerHTML = beautyBold + "Hello World ";
    }
    else if (character === "Tel-E")
    {
       
    }
    else if (character === "Pyra")
    {
        
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




