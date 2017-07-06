/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    character = sessionStorage.getItem("SessionCharacter");

    pageCharacter = "";
    

    checkResolution();

    $(window).resize(function () {
        resizeResolution();

    });

    $(window).on("orientationchange", function (event) {
        checkResolution();
    });
    
    if (sessionStorage.getItem("firstPage") === null)
    {
        sessionStorage.setItem("firstPage", "Fourize's page");
        sessionStorage.setItem("memory", "Fourize's page");
        sessionStorage.setItem("currentPage", "Fourize's page");
    }
    else
    {
        if(sessionStorage.getItem("currentPage") !== "Fourize's page")
        {
            sessionStorage.setItem("memory", sessionStorage.getItem("memory").toString() + ", Fourize's page");
        }
        sessionStorage.setItem("currentPage", "Fourize's page");
        
        
    }

    dialogue = 1;
    max = 0;

    var beautyBold = "Beauty: ";
    beautyBold = beautyBold.bold();
    var teleBold = "Tel-E: ";
    teleBold = teleBold.bold();
    var pyraBold = "Pyra: ";
    pyraBold = pyraBold.bold();

    if (character === "Beauty")
    {
        document.getElementById("d").innerHTML = beautyBold + "Hey! It's my character page! Okay. So there's a lot to cover, so let's start with the top left. If you haven't visited the Charevo Gene page, check it out and come back so I can explain this.";
        max = 5;
    }
    else if (character === "Tel-E")
    {
        document.getElementById("d").innerHTML = teleBold + "Here we have the page for our lead character, Beauty. The astute site surfer might notice the mark on her hand, which you can see on the top-left. That is her Charevo Emblem.";
        max = 5;
    }
    else if (character === "Pyra")
    {
        document.getElementById("d").innerHTML = pyraBold + "So here's the page for my friend, Beauty. On the top left, we have her Charevo Emblem. That's a unicorn, dragon, and princess for the Charevo Trinity of Fiction, Imagination, and Femininity for those of you keeping a record of this.";
        max = 7;
    }

    x = 0;

    NewBehavior();
    NewMentality();
    NewIdentification();

    $("#behaviorimage").click(function () {
        x = 1;
        curbehavior = behavior;
        NewBehavior();
    });

    $("#mentalityimage").click(function () {
        x = 1;
        curmentality = mentality;
        NewMentality();
    });

    $("#identificationimage").click(function () {
        x = 1;
        curident = ident;
        NewIdentification();
    });

});

function NewBehavior() {

    behavior = Math.floor(Math.random() * 2);
    if (x === 1)
    {
        while (behavior === curbehavior)
            behavior = Math.floor(Math.random() * 2);
    }


    switch (behavior)
    {
        case(0):
            $("#Behavior").text("Inferiority: ");
            break;
        case(1):
            $("#Behavior").text("Inferiority: ");
            break;

    }

}

function NewMentality() {

    mentality = Math.floor(Math.random() * 2);
    if (x === 1)
    {
        while (mentality === curmentality)
            mentality = Math.floor(Math.random() * 2);
    }


    switch (mentality)
    {
        case(0):
            $("#Mentality").text("Envy: ");
            break;
        case(1):
            $("#Mentality").text("Envy: ");
            break;

    }

}

function NewIdentification() {

    ident = Math.floor(Math.random() * 2);
    if (x === 1)
    {
        while (ident === curident)
            ident = Math.floor(Math.random() * 2);
    }


    switch (ident)
    {
        case(0):
            $("#Identification").text("Vision: ");
            break;
        case(1):
            $("#Identification").text("Vision: ");
            break;  

    }

}

function next() {
    if (dialogue < max)
    {
        dialogue++;
        DialogueChangeMenu();
        document.getElementById("prev").setAttribute("style", "opacity: 1");
        document.getElementById("prev").disabled = false;
    }
    if (dialogue === max)
    {
        document.getElementById("next").setAttribute("style", "opacity: .4");
        document.getElementById("next").disabled = true;
    }
}

function prev() {
    if (dialogue > 1)
    {
        dialogue--;
        DialogueChangeMenu();
        document.getElementById("next").setAttribute("style", "opacity: 1");
        document.getElementById("next").disabled = false;
    }
    if (dialogue === 1)
    {
        document.getElementById("prev").setAttribute("style", "opacity: .4");
        document.getElementById("prev").disabled = true;
    }
}

function DialogueChangeMenu() {
    var beautyBold = "Beauty: ";
    beautyBold = beautyBold.bold();
    var teleBold = "Tel-E: ";
    teleBold = teleBold.bold();
    var pyraBold = "Pyra: ";
    pyraBold = pyraBold.bold();
    
    var fourizeBold = "Fourize: ";
    fourizeBold = fourizeBold.bold();

    
    if (character === "Tel-E")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = teleBold + "As you can see, this page here belongs to Ira Koolein AKA Fourize, the leader of the villainous J Gang. If you look to the left, you can see his Charevo Emblem representing his Charevo Trinity of Inferiority, Envy, and Vision. Below, you can read his bio where you'll find he was bullied on a regular basis in school. So let's not hate him too much.";
                break;
            case(2):
                document.getElementById("d").innerHTML = fourizeBold + "I don't need your pity! I'm the leader of the baddest super powered teens you'll ever see in this town. You think I need people being nice to me?";
                break;
            case(3):
                document.getElementById("d").innerHTML = teleBold + "Well, I'm looking at your bio, and it says here you've taken revenge on your bullies to get their respect. I would assume you have similar goals while we're on this site.";
                break;
            case(4):
                document.getElementById("d").innerHTML = fourizeBold + "Well, I don't want respect by having people request it for me! That's like having your mom scold your enemies. Not what I'm going for.";
                break;
            case(5):
                document.getElementById("d").innerHTML = teleBold + "Oh. I apologize then. I understand.";
                break;
            case(6):
                document.getElementById("d").innerHTML = fourizeBold + "Hmph. No you don't. I was tormented in school for so long, yet you, some bizarre looking alien, goes to school and gets no ridicule whatsoever. Look at you! How does everyone accept the fact that this is an actual person so respectfully?";
                break; 
            case(7):
                document.getElementById("d").innerHTML = teleBold + "Hey, it's not all been politeness. I've had some people appear taken aback at the sight of me. It wouldn't last, but it did occur.";
                break;
            case(8):
                document.getElementById("d").innerHTML = fourizeBold + "Urgh. You've got a lot o' nerve thinking you can relate to me. You don't have bullies at all. And, somehow, you were lucky enough to be both smart and pretty. I mean, really. What is this!?";
                break;
            case(9):
                document.getElementById("d").innerHTML = teleBold + "Smart and pretty? Oh, how nice of you.";
                break;
            case(10):
                document.getElementById("d").innerHTML = fourizeBold + ". . .";
                break; 
            case(11):
                document.getElementById("d").innerHTML = teleBold + "Ah. Sorry. I'm sensing that element of Envy arising.";
                break;     
        }

    }
    else if (character === "Pyra")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = pyraBold + "So this is the character page for Fourize. You might not have seen much of him in that first story, so why would you know much about him anyway. But if you wanna see Fourize with a larger role, you will. Also, you're probably Fourize.";
                break;
            case(2):
                document.getElementById("d").innerHTML = fourizeBold + "Just talk about me and my page, Neo girl!";
                break;
            case(3):
                document.getElementById("d").innerHTML = pyraBold + "Ugh. Alright. So Fourize was a weakling kid named Ira Koolein who suffered from an inferiority complex where he'd see everyone around him as someone who would ruin his life. Then he got his powers, and . . . well, not much has changed really. He got his powers of heat and ice vision, but the rest of his team is way more interesting, so why don't we go take a look at those guys?";
                break;
            case(4):
                document.getElementById("d").innerHTML = fourizeBold + "We are not going to those other pages! We're staying here! Now, continue with the rest of it!";
                break;
            case(5):
                document.getElementById("d").innerHTML = pyraBold + "You know, Fourize, I'm looking at your abilities, and they're not really saying 'powerful and interesting' to me. They mostly seem like a generic minion if I'm being honest.";
                break;
            case(6):
                document.getElementById("d").innerHTML = fourizeBold + "Generic!? That is such a lie! I am the leader of my own team! I'll have you know I'm more interesting and powerful than you're conveying to this audience.";
                break;
            case(7):
                document.getElementById("d").innerHTML = pyraBold + "Well, a lot of us were inspired by (ripped off) some characters from the show, Teen Titans. Our creator based you on the character, See-More. Now, when it comes to eye abilities, that guy has, like, ten powers. You only have two. Now, I don't find that guy that interesting, so just how intrigued should people be with you at one fifth the interesting level?";
                break;
            case(8):
                document.getElementById("d").innerHTML = fourizeBold + "Don't you dare bring up that character again. Challenge my character and originality one more time and you'll find more than an evil eye directed at you.";
                break;
            case(9):
                document.getElementById("d").innerHTML = pyraBold + "Yeah. Sure. Take your time choosing between all those powers you have. Oh, wait. That's the other guy.";
                break;   
        }
    }
    else
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = beautyBold + "Okay. The Charevo Trinity of Inferiority, Envy, and Vision. Heat and ice vision powers. Leader of the J Gang. The teen villain . . . ugh . . .";
                break;
            case(2):
                document.getElementById("d").innerHTML = fourizeBold + "Come on! Get on with it! Introduce me!";
                break;
            case(3):
                document.getElementById("d").innerHTML = beautyBold + "Meh. They can see your name above your head right there.";
                break;
            case(4):
                document.getElementById("d").innerHTML = fourizeBold + "Yeah. It's there. Just read it!";
                break;
            case(5):
                document.getElementById("d").innerHTML = beautyBold + "Yeah. Sure. Anyway, his name is . . .";
                $("h1").fadeIn(1000);
                $(this).clearQueue().stop();
                break;
            case(6):
                document.getElementById("d").innerHTML = beautyBold + "Oh no! The name is gone! Oh, what a tragedy. Looks like we'll never know who this unimportant person is.";
                $("h1").fadeOut(1000);
                $(this).clearQueue().stop();
                break;
            case(7):
                document.getElementById("d").innerHTML = fourizeBold + "Unimportant!? What . . . Put . . . Put my name back!";
                break;
            case(8):
                document.getElementById("d").innerHTML = beautyBold + "Huh? Oh, look. Yeah, well, you can read that.";
                $("h1").fadeIn(1000);
                $(this).clearQueue().stop();
                break;
            case(9):
                document.getElementById("d").innerHTML = fourizeBold + "It's Fourize! My name is Ira Koolein, known as Fourize! You know that, Bellavitz!";
                break; 
            case(10):
                document.getElementById("d").innerHTML = beautyBold + "Yeah . . . I know things. And I certainly know more than I need to know of someone on this page.";
                break; 
            case(11):
                document.getElementById("d").innerHTML = fourizeBold + "Okay, what's with all the passive aggressiveness here?";
                break;
            case(12):
                document.getElementById("d").innerHTML = beautyBold + "I'm sorry. I don't do spoilers.";
                break;
            case(13):
                document.getElementById("d").innerHTML = fourizeBold + "Ugh. You're holding THAT over my head now?";
                break; 
            case(14):
                document.getElementById("d").innerHTML = beautyBold + "Oh, are you talking to me or my friend? Which one are you going after today?";
                break;     
        }

    }

}

function checkResolution() {
    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");
    
    $(".footers").css({"width": window.screen.width});
    $(".footers").css({"height": (window.screen.height / 6)});
    
    
    footerHeight = (window.screen.height / 6);
    


    if (window.screen.width > 1300 && window.screen.height > 1500)
    {
        $("#bio").css({"width": (window.screen.width * .85), "margin-top": (window.screen.height * .1), "left": (window.screen.width * .1)});
        $(".characterinfo").css({"width": (window.screen.width * .85)});
        $("#guidance").css({"width": (window.screen.width * .46875), "margin-top": (window.screen.height * .5), "left": (window.screen.width * .1), "margin-left": (window.screen.width * .1)});
        $("#charactertable").css({"width": (window.screen.width * .5), "margin-top": (window.screen.height * .1), "left": (window.screen.width * .1), "margin-left": (window.screen.width * .1)});

        $("#fairies").css({"left": (window.screen.width * .7)});
        
        bioinfoWidth = (window.screen.width * .85);
        biotableMarginTop = (window.screen.height * .1);
        bioguidancetableLeft = (window.screen.width * .1);
        
        guidanceWidth = (window.screen.width * .46875);
        guidanceMarginTop = (window.screen.height * .5);
        guidancetableMarginLeft = (window.screen.width * .1);
        
        tableWidth = (window.screen.width * .5);
        
        fairiesLeft = (window.screen.width * .7);

        if (window.screen.width > 1800)
        {
            $(".charevofairy").css({"width": (window.screen.width * .2), "height": (window.screen.height * .3)});

            $("#character").css({"left": (window.screen.width * .35), "width": (window.screen.width * .25), "height": (window.screen.height * .45)});
            $("#emblem").css({"left": (window.screen.width * .05), "width": (window.screen.width * .2), "height": (window.screen.height * .3)});
            
            charevofairyemblemWidth = (window.screen.width * .2);
            charevofairyemblemHeight = (window.screen.height * .3);
            
            characterLeft = (window.screen.width * .35);
            characterWidth = (window.screen.width * .25);
            characterHeight = (window.screen.height * .45);
            
            emblemLeft = (window.screen.width * .05);
            
        }
        else
        {
            $(".charevofairy").css({"width": (window.screen.width * .3), "height": (window.screen.height * .3)});

            $("#character").css({"left": (window.screen.width * .35), "width": (window.screen.width * .35), "height": (window.screen.height * .45)});
            $("#emblem").css({"left": (window.screen.width * .05), "width": (window.screen.width * .3), "height": (window.screen.height * .3)});
        
            charevofairyemblemWidth = (window.screen.width * .3);
            charevofairyemblemHeight = (window.screen.height * .3);
            
            characterLeft = (window.screen.width * .35);
            characterWidth = (window.screen.width * .35);
            characterHeight = (window.screen.height * .45);
            
            emblemLeft = (window.screen.width * .05);
        }
        $("section").css({"height": (window.screen.height * 1.55)});
        
        sectionHeight = (window.screen.height * 1.55);
    }
    else if (window.screen.width > 1000 && window.screen.height > 1000)
    {
        $("#bio").css({"width": (window.screen.width * .85), "left": (window.screen.width * .1)});
        $(".characterinfo").css({"width": (window.screen.width * .85)});
        $("#guidance").css({"width": (window.screen.width * .46875), "margin-top": "560px", "left": (window.screen.width * .1), "margin-left": (window.screen.width * .1)});
        $("#charactertable").css({"width": (window.screen.width * .5), "left": (window.screen.width * .1), "margin-left": (window.screen.width * .1)});

        $(".charevofairy").css({"width": (window.screen.width * .3), "height": (window.screen.height * .3)});
        $("#fairies").css({"left": (window.screen.width * .7)});
        $("#character").css({"left": (window.screen.width * .35), "width": (window.screen.width * .35), "height": (window.screen.height * .45)});
        $("#emblem").css({"left": (window.screen.width * .05), "width": (window.screen.width * .3), "height": (window.screen.height * .3)});
        
        bioinfoWidth = (window.screen.width * .85);
        //biotableMarginTop = (window.screen.height * .1);
        bioguidancetableLeft = (window.screen.width * .1);
        
        guidanceWidth = (window.screen.width * .46875);
        guidanceMarginTop = "560px";
        guidancetableMarginLeft = (window.screen.width * .1);
        
        tableWidth = (window.screen.width * .5);
        
        charevofairyemblemWidth = (window.screen.width * .3);
        charevofairyemblemHeight = (window.screen.height * .3);
        
        fairiesLeft = (window.screen.width * .7);
        
        characterLeftWidth = (window.screen.width * .35);
        characterHeight = (window.screen.height * .45);
        
        emblemLeft = (window.screen.width * .05);
        
        
        if (window.screen.width > 1200 && window.screen.height > 1000)
        {
            $("section").css({"height": (window.screen.height * 2.25)});
            sectionHeight = (window.screen.height * 2.25);
        }
        else
        {
            $("section").css({"height": (window.screen.height * 1.95)});
            sectionHeight = (window.screen.height * 1.95);
        }
    }
    else if (window.screen.width > 900)
    {
        $("#bio").css({"width": (window.screen.width * .85), "left": (window.screen.width * .1)});
        $(".characterinfo").css({"width": (window.screen.width * .85)});
        $("#guidance").css({"width": (window.screen.width * .46875), "left": (window.screen.width * .1), "margin-left": (window.screen.width * .1)});
        $("#charactertable").css({"width": (window.screen.width * .5), "left": (window.screen.width * .1), "margin-left": (window.screen.width * .1)});
    
        bioinfoWidth = (window.screen.width * .85);
        //biotableMarginTop = (window.screen.height * .1);
        bioguidancetableLeft = (window.screen.width * .1);
        
        guidanceWidth = (window.screen.width * .46875);
        guidancetableLeftMarginLeft = (window.screen.width * .1);
        
        tableWidth = (window.screen.width * .5);
    }
    else if (window.screen.height < 600 && window.screen.width < 600 && window.screen.height < window.screen.width)
    {
        $("#bio").css({"width": (window.screen.width * .95), "margin-top": "100px", "left": (window.screen.width * .01)});
        $(".characterinfo").css({"width": (window.screen.width * .85)});
        $("#guidance").css({"width": (window.screen.width * .7), "margin-left": "0px", "margin-top": "260px", "left": (window.screen.width * .01), "position": "relative"});
        $("#charactertable").css({"width": (window.screen.width * .9), "margin-top": "170px", "left": (window.screen.width * .01)});

        $(".charevofairy").css({"width": (window.screen.width * .3), "height": (window.screen.height * .5)});
        $("#fairies").css({"left": (window.screen.width * .7)});
        $("#character").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .75)});
        $("#emblem").css({"left": (window.screen.width * .05), "width": (window.screen.width * .3), "height": (window.screen.height * .5)});
        $("section").css({"height": (window.screen.height * 9.95)});
    
        bioWidth = (window.screen.width * .95);
        bioguidancetableLeft = (window.screen.width * .01);
        
        infoWidth = (window.screen.width * .85);
        
        guidanceWidth = (window.screen.width * .7);
        
        tableWidth = (window.screen.width * .9);
        
        charevofairyemblemWidth = (window.screen.width * .3);
        charevofairyemblemHeight = (window.screen.height * .5);
        
        fairiesLeft = (window.screen.width * .7);
        
        characterLeft = (window.screen.width * .3);
        characterWidth = (window.screen.width * .45);
        characterHeight = (window.screen.height * .75);
        
        emblemLeft = (window.screen.width * .05);
        
        sectionHeight = (window.screen.height * 9.95);
    }
    else if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("#bio").css({"width": (window.screen.width * .95), "margin-top": "100px", "left": (window.screen.width * .01)});
        $(".characterinfo").css({"width": (window.screen.width * .85)});
        $("#guidance").css({"width": (window.screen.width * .7), "margin-left": "0px", "margin-top": "260px", "left": (window.screen.width * .01), "position": "relative"});
        $("#charactertable").css({"width": (window.screen.width * .9), "margin-top": "270px", "left": (window.screen.width * .01)});

        $(".charevofairy").css({"width": (window.screen.width * .3), "height": (window.screen.height * .5)});
        $("#fairies").css({"left": (window.screen.width * .7)});
        $("#character").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .75)});
        $("#emblem").css({"left": (window.screen.width * .05), "width": (window.screen.width * .3), "height": (window.screen.height * .5)});
        $("section").css({"height": (window.screen.height * 7.95)});
        
        bioWidth = (window.screen.width * .95);
        bioguidancetableLeft = (window.screen.width * .01);
        
        infoWidth = (window.screen.width * .85);
        
        guidanceWidth = (window.screen.width * .7);
        
        tableWidth = (window.screen.width * .9);
        
        charevofairyemblemWidth = (window.screen.width * .3);
        charevofairyemblemHeight = (window.screen.height * .5);
        
        fairiesLeft = (window.screen.width * .7);
        
        characterLeft = (window.screen.width * .3);
        characterWidth = (window.screen.width * .45);
        characterHeight = (window.screen.height * .75);
        
        emblemLeft = (window.screen.width * .05);
        
        sectionHeight = (window.screen.height * 7.95);
    }
    else if (window.screen.width >= 600)
    {
        $("#bio").css({"width": (window.screen.width * .95), "margin-top": "160px", "left": (window.screen.width * .01)});
        $(".characterinfo").css({"width": (window.screen.width * .95)});
        $("#guidance").css({"width": (window.screen.width * .7), "margin-left": "0px", "margin-top": "560px", "left": (window.screen.width * .01), "position": "relative"});
        $("#charactertable").css({"width": (window.screen.width * .9), "margin-top": "250px", "left": (window.screen.width * .01)});

        $(".charevofairy").css({"width": (window.screen.width * .3), "height": (window.screen.height * .3)});
        $("#fairies").css({"left": (window.screen.width * .7)});
        $("#character").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .55)});
        $("#emblem").css({"left": (window.screen.width * .05), "width": (window.screen.width * .3), "height": (window.screen.height * .3)});
        $("section").css({"height": (window.screen.height * 2.95)});
        
        bioinfoWidth = (window.screen.width * .95);
        bioguidancetableLeft = (window.screen.width * .01);
        
        //infoWidth = (window.screen.width * .85);
        
        guidanceWidth = (window.screen.width * .7);
        
        tableWidth = (window.screen.width * .9);
        
        charevofairyemblemWidth = (window.screen.width * .3);
        charevofairyemblemHeight = (window.screen.height * .3);
        
        fairiesLeft = (window.screen.width * .7);
        
        characterLeft = (window.screen.width * .3);
        characterWidth = (window.screen.width * .45);
        characterHeight = (window.screen.height * .55);
        
        emblemLeft = (window.screen.width * .05);
        
        sectionHeight = (window.screen.height * 2.95);
    }
    else if (window.screen.width > 400)
    {
        $("#bio").css({"width": (window.screen.width * .95), "left": (window.screen.width * .01)});
        $(".characterinfo").css({"width": (window.screen.width * .95)});
        $("#guidance").css({"width": (window.screen.width * .7), "margin-top": "360px", "left": (window.screen.width * .01), "position": "relative"});
        $("#charactertable").css({"width": (window.screen.width * .9), "margin-top": "150px", "left": (window.screen.width * .01)});

        $(".charevofairy").css({"width": (window.screen.width * .3), "height": (window.screen.height * .3)});
        $("#fairies").css({"left": (window.screen.width * .7)});
        $("#character").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .55)});
        $("#emblem").css({"left": (window.screen.width * .05), "width": (window.screen.width * .3), "height": (window.screen.height * .3)});
        $("section").css({"height": (window.screen.height * 4.55)});
        
        bioinfoWidth = (window.screen.width * .95);
        bioguidancetableLeft = (window.screen.width * .01);
        
        //infoWidth = (window.screen.width * .85);
        
        guidanceWidth = (window.screen.width * .7);
        
        tableWidth = (window.screen.width * .9);
        
        charevofairyemblemWidth = (window.screen.width * .3);
        charevofairyemblemHeight = (window.screen.height * .3);
        
        fairiesLeft = (window.screen.width * .7);
        
        characterLeft = (window.screen.width * .3);
        characterWidth = (window.screen.width * .45);
        characterHeight = (window.screen.height * .55);
        
        emblemLeft = (window.screen.width * .05);
        
        sectionHeight = (window.screen.height * 4.55);
    }
    else if (window.screen.height < 600)
    {
        $("#bio").css({"width": (window.screen.width * .95), "left": (window.screen.width * .01)});
        $(".characterinfo").css({"width": (window.screen.width * .95)});
        $("#guidance").css({"width": (window.screen.width * .7), "margin-top": "360px", "left": (window.screen.width * .01), "position": "relative"});
        $("#charactertable").css({"width": (window.screen.width * .9), "margin-top": "50px", "left": (window.screen.width * .01)});

        $(".charevofairy").css({"width": (window.screen.width * .3), "height": (window.screen.height * .3)});
        $("#fairies").css({"left": (window.screen.width * .7)});
        $("#character").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .55)});
        $("#emblem").css({"left": (window.screen.width * .05), "width": (window.screen.width * .3), "height": (window.screen.height * .3)});
        $("section").css({"height": (window.screen.height * 7.55)});
        
        bioinfoWidth = (window.screen.width * .95);
        bioguidancetableLeft = (window.screen.width * .01);
        
        //infoWidth = (window.screen.width * .85);
        
        guidanceWidth = (window.screen.width * .7);
        
        tableWidth = (window.screen.width * .9);
        
        charevofairyemblemWidth = (window.screen.width * .3);
        charevofairyemblemHeight = (window.screen.height * .3);
        
        fairiesLeft = (window.screen.width * .7);
        
        characterLeft = (window.screen.width * .3);
        characterWidth = (window.screen.width * .45);
        characterHeight = (window.screen.height * .55);
        
        emblemLeft = (window.screen.width * .05);
        
        sectionHeight = (window.screen.height * 7.55);
    }
    else
    {
        $("#bio").css({"width": (window.screen.width * .95), "left": (window.screen.width * .01)});
        $(".characterinfo").css({"width": (window.screen.width * .95)});
        $("#guidance").css({"width": (window.screen.width * .7), "left": (window.screen.width * .01)});
        $("#charactertable").css({"width": (window.screen.width * .9), "margin-top": "100px", "left": (window.screen.width * .01)});

        $(".charevofairy").css({"width": (window.screen.width * .3), "height": (window.screen.height * .3)});
        $("#fairies").css({"left": (window.screen.width * .7)});
        $("#character").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .55)});
        $("#emblem").css({"left": (window.screen.width * .05), "width": (window.screen.width * .3), "height": (window.screen.height * .3)});
        $("section").css({"height": (window.screen.height * 5.55)});
        
        bioinfoWidth = (window.screen.width * .95);
        bioguidancetableLeft = (window.screen.width * .01);
        
        //infoWidth = (window.screen.width * .85);
        
        guidanceWidth = (window.screen.width * .7);
        
        tableWidth = (window.screen.width * .9);
        
        charevofairyemblemWidth = (window.screen.width * .3);
        charevofairyemblemHeight = (window.screen.height * .3);
        
        fairiesLeft = (window.screen.width * .7);
        
        characterLeft = (window.screen.width * .3);
        characterWidth = (window.screen.width * .45);
        characterHeight = (window.screen.height * .55);
        
        emblemLeft = (window.screen.width * .05);
        
        sectionHeight = (window.screen.height * 5.55);
    }
}

function resizeResolution() {
    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");
    
    $(".footers").css({"width": window.screen.width});
    $(".footers").css({"height": (window.screen.height / 6)});
    
    
    //footerHeight = (window.screen.height / 6);


    if (window.screen.width > 1300 && window.screen.height > 1500)
    {
        $("#bio").css({"width": bioinfoWidth, "margin-top": biotableMarginTop, "left": bioguidancetableLeft});
        $(".characterinfo").css({"width": bioinfoWidth});
        $("#guidance").css({"width": guidanceWidth, "margin-top": guidanceMarginTop, "left": bioguidancetableLeft, "margin-left": guidancetableMarginLeft});
        $("#charactertable").css({"width": tableWidth, "margin-top": biotableMarginTop, "left": bioguidancetableLeft, "margin-left": guidancetableMarginLeft});

        $("#fairies").css({"left": fairiesLeft});


        if (window.screen.width > 1800)
        {
            $(".charevofairy").css({"width": charevofairyemblemWidth, "height": charevofairyemblemHeight});

            $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
            $("#emblem").css({"left": emblemLeft, "width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
            
        }
        else
        {
            $(".charevofairy").css({"width": charevofairyemblemWidth, "height": charevofairyemblemHeight});

            $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
            $("#emblem").css({"left": emblemLeft, "width": charevofairyemblemWidth, "height": charevofairyemblemHeight});

        }
        $("section").css({"height": sectionHeight});

    }
    else if (window.screen.width > 1000 && window.screen.height > 1000)
    {
        $("#bio").css({"width": bioinfoWidth, "left": bioguidancetableLeft});
        $(".characterinfo").css({"width": bioinfoWidth});
        $("#guidance").css({"width": guidanceWidth, "margin-top": "560px", "left": bioguidancetableLeft, "margin-left": guidancetableMarginLeft});
        $("#charactertable").css({"width": tableWidth, "left": bioguidancetableLeft, "margin-left": guidancetableMarginLeft});

        $(".charevofairy").css({"width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
        $("#fairies").css({"left": fairiesLeft});
        $("#character").css({"left": characterLeftWidth, "width": characterLeftWidth, "height": characterHeight});
        $("#emblem").css({"left": emblemLeft, "width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
        
        
        if (window.screen.width > 1200 && window.screen.height > 1000)
        {
            $("section").css({"height": sectionHeight});
        }
        else
        {
            $("section").css({"height": sectionHeight});
        }
    }
    else if (window.screen.width > 900)
    {
        $("#bio").css({"width": bioinfoWidth, "left": bioguidancetableLeft});
        $(".characterinfo").css({"width": bioinfoWidth});
        $("#guidance").css({"width": guidanceWidth, "left": bioguidancetableLeft, "margin-left": guidancetableLeftMarginLeft});
        $("#charactertable").css({"width": tableWidth, "left": bioguidancetableLeft, "margin-left": guidancetableLeftMarginLeft});

    }
    else if (window.screen.height < 600 && window.screen.width < 600 && window.screen.height < window.screen.width)
    {
        $("#bio").css({"width": bioWidth, "margin-top": "100px", "left": bioguidancetableLeft});
        $(".characterinfo").css({"width": infoWidth});
        $("#guidance").css({"width": guidanceWidth, "margin-left": "0px", "margin-top": "260px", "left": bioguidancetableLeft, "position": "relative"});
        $("#charactertable").css({"width": tableWidth, "margin-top": "170px", "left": bioguidancetableLeft});

        $(".charevofairy").css({"width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
        $("#fairies").css({"left": fairiesLeft});
        $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
        $("#emblem").css({"left": emblemLeft, "width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
        $("section").css({"height": sectionHeight});
    
        
    }
    else if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("#bio").css({"width": bioWidth, "margin-top": "100px", "left": bioguidancetableLeft});
        $(".characterinfo").css({"width": infoWidth});
        $("#guidance").css({"width": guidanceWidth, "margin-left": "0px", "margin-top": "260px", "left": bioguidancetableLeft, "position": "relative"});
        $("#charactertable").css({"width": tableWidth, "margin-top": "270px", "left": bioguidancetableLeft});

        $(".charevofairy").css({"width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
        $("#fairies").css({"left": fairiesLeft});
        $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
        $("#emblem").css({"left": emblemLeft, "width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
        $("section").css({"height": sectionHeight});
        
       
    }
    else if (window.screen.width >= 600)
    {
        $("#bio").css({"width": bioinfoWidth, "margin-top": "160px", "left": bioguidancetableLeft});
        $(".characterinfo").css({"width": bioinfoWidth});
        $("#guidance").css({"width": guidanceWidth, "margin-left": "0px", "margin-top": "560px", "left": bioguidancetableLeft, "position": "relative"});
        $("#charactertable").css({"width": tableWidth, "margin-top": "250px", "left": bioguidancetableLeft});

        $(".charevofairy").css({"width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
        $("#fairies").css({"left": fairiesLeft});
        $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
        $("#emblem").css({"left": emblemLeft, "width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
        $("section").css({"height": sectionHeight});
        
    }
    else if (window.screen.width > 400)
    {
        $("#bio").css({"width": bioinfoWidth, "left": bioguidancetableLeft});
        $(".characterinfo").css({"width": bioinfoWidth});
        $("#guidance").css({"width": guidanceWidth, "margin-top": "360px", "left": bioguidancetableLeft, "position": "relative"});
        $("#charactertable").css({"width": tableWidth, "margin-top": "150px", "left": bioguidancetableLeft});

        $(".charevofairy").css({"width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
        $("#fairies").css({"left": fairiesLeft});
        $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
        $("#emblem").css({"left": emblemLeft, "width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
        $("section").css({"height": sectionHeight});

    }
    else if (window.screen.height < 600)
    {     
        $("#bio").css({"width": bioinfoWidth, "left": bioguidancetableLeft});
        $(".characterinfo").css({"width": bioinfoWidth});
        $("#guidance").css({"width": guidanceWidth, "margin-top": "360px", "left": bioguidancetableLeft, "position": "relative"});
        $("#charactertable").css({"width": tableWidth, "margin-top": "50px", "left": bioguidancetableLeft});

        $(".charevofairy").css({"width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
        $("#fairies").css({"left": fairiesLeft});
        $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
        $("#emblem").css({"left": emblemLeft, "width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
        $("section").css({"height": sectionHeight});
    }
    else
    {
        $("#bio").css({"width": bioinfoWidth, "left": bioguidancetableLeft});
        $(".characterinfo").css({"width": bioinfoWidth});
        $("#guidance").css({"width": guidanceWidth, "left": bioguidancetableLeft});
        $("#charactertable").css({"width": tableWidth, "margin-top": "100px", "left": bioguidancetableLeft});

        $(".charevofairy").css({"width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
        $("#fairies").css({"left": fairiesLeft});
        $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
        $("#emblem").css({"left": emblemLeft, "width": charevofairyemblemWidth, "height": charevofairyemblemHeight});
        $("section").css({"height": sectionHeight});

    }
}
