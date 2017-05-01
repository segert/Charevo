/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    
    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    
    x = 0;

    NewBehavior();
    NewMentality();

    $("#behaviorimage").click(function() {
        x = 1;
        curbehavior = behavior;
        NewBehavior();
    });
    
    $("#mentalityimage").click(function() {
        x = 1;
        curmentality = mentality;
        NewMentality();
    });
    
    $("#identificationimage").click(function() {
        x = 1;
        curident = ident;
        NewIdentification();
    });

});

function NewBehavior() {

    behavior = Math.floor(Math.random() * 4);
    if(x === 1)
    {
        while(behavior === curbehavior)
            behavior = Math.floor(Math.random() * 4);
    }


    switch (behavior)
    {
        case(0):
            $("#Behavior").text("Fiction: Victory may be fiction from one view, but anyone can make it real.");
            break;
        case(1):
            $("#Behavior").text("Fiction: An idea right for your fiction can be wrong for your reality.");
            break;
        case(2):
            $("#Behavior").text("Fiction: It is okay to admit you are wrong when you live in fiction.");
            break;
        case(3):
            $("#Behavior").text("Fiction: What you have with you is real and important while what you see from afar and love can be misleading and false.");
            break;

    }
    
}

function NewMentality() {

    mentality = Math.floor(Math.random() * 3);
    if(x === 1)
    {
        while(mentality === curmentality)
            mentality = Math.floor(Math.random() * 3);
    }


    switch (mentality)
    {
        case(0):
            $("#Mentality").text("Imagination: One with imagination can see what cannot be seen.");
            break;
        case(1):
            $("#Mentality").text("Imagination: Imagination is fun when contained to the thinker, but can bring harm to another when brought to life.");
            break;
        case(2):
            $("#Mentality").text("Imagination: What one imagines herself wanting is often not what she is happier with.");
            break;

    }
    
}

function NewIdentification() {

    ident = Math.floor(Math.random() * 1);
    if(x === 1)
    {
        while(ident === curident)
            ident = Math.floor(Math.random() * 1);
    }


    switch (ident)
    {
        case(0):
            $("#Identification").text("Femininity: Never undermine a girl for her appearance, for the more feminine can wield the greater power.");
            break;

    }
    
}