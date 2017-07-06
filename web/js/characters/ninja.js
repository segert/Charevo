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
        sessionStorage.setItem("firstPage", "Ninja's page");
        sessionStorage.setItem("memory", "Ninja's page");
        sessionStorage.setItem("currentPage", "Ninja's page");
    }
    else
    {
        if(sessionStorage.getItem("currentPage") !== "Ninja's page")
        {
            sessionStorage.setItem("memory", sessionStorage.getItem("memory").toString() + ", Ninja's page");
        }
        sessionStorage.setItem("currentPage", "Ninja's page");
        
        
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
        document.getElementById("d").innerHTML = beautyBold + "And this is the character page for . . . wait. Where is he? Hello? Ninja? You there?";
        max = 12;
        $("#character").hide();
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
            $("#Behavior").text("Stealth: ");
            break;
        case(1):
            $("#Behavior").text("Stealth: ");
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
            $("#Mentality").text("Mischief: ");
            break;
        case(1):
            $("#Mentality").text("Mischief: ");
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
            $("#Identification").text("Quiet: ");
            break;
        case(1):
            $("#Identification").text("Quiet: ");
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
    
    var ninjaBold = "Ninja: ";
    ninjaBold = ninjaBold.bold();

    
    if (character === "Tel-E")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = teleBold + "Here we have Ninja's character page. You can see his Charevo Emblem on the left and Charevo Fairies on the right, representing his Charevo Trinity of Stealth, Mischief, and Quiet. Together, these elements create his abilities of invisibility and teleportation. It is with these powers as well as his martial arts skills that he utilizes to serve the efforts of the villainous J Gang.";
                break;
            case(2):
                document.getElementById("d").innerHTML = ninjaBold + ". . .";
                break;
            case(3):
                document.getElementById("d").innerHTML = teleBold + "Um . . . It seems as though Ninja is busy with his meditation today. Moving along, if you read his bio below, you'll find that the Gang member was always the quiet kid in school, as is evident by that previous dialogue text, and this was used as a cover for his mischievous side to either unexpectedly insult someone or pull some prank, leaving a bigger impact on his victim who was oblivious to him the whole time. This is based on our creator who's often quiet, but likes to say something funny to people who becomes surprised by him.";
                break;
            case(4):
                document.getElementById("d").innerHTML = ninjaBold + ". . .";
                break;
            case(5):
                document.getElementById("d").innerHTML = teleBold + "It should be noted that Ninja's invisibility has its limits, for if he makes any noise and someone can hear him, he will become slightly visible. So if you ever face him in battle, just make sure you're hearing is sufficient.";
                break;
            case(6):
                document.getElementById("d").innerHTML = ninjaBold + ". . .";
                break;
            case(7):
                document.getElementById("d").innerHTML = teleBold + "Hmm? Ah. I see Ninja is breaking meditation tradition and directing thoughts at me. And, yes, Ninja, I am well aware that I am listening to you a little too much right now. But I think it would be wise to see if you're planning to jump in with something inappropriate.";
                break;
            case(8):
                document.getElementById("d").innerHTML = ninjaBold + ". . .";
                break;
            case(9):
                document.getElementById("d").innerHTML = teleBold + "I'm sorry? No, I'm not being an intrusive hovering censor. I'm simply acting as a sufficient host.";
                break;
            case(10):
                document.getElementById("d").innerHTML = ninjaBold + ". . .";
                break;     
            case(11):
                document.getElementById("d").innerHTML = teleBold + "I can go host your what? I will not! You quiet your dirty mind, Ninja.";
                break;
            case(12):
                document.getElementById("d").innerHTML = ninjaBold + ". . .";
                break; 
             case(13):
                document.getElementById("d").innerHTML = teleBold + "Yes, Ninja, I am well aware of the fact that I do this again later on. It doesn't mean I can't object to your insults as you currently send them to me.";
                break; 
            case(14):
                document.getElementById("d").innerHTML = ninjaBold + ". . .";
                break; 
            case(15):
                document.getElementById("d").innerHTML = teleBold + "I'm a what? Well, I'm sorry. But that's your opinion.";
                break;    
        }

    }
    else if (character === "Pyra")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = pyraBold + "And here we are at the character page for a teleporting teen villain known as Kyd Wykkyd. Now then . . .";
                break;
            case(2):
                document.getElementById("d").innerHTML = ninjaBold + "Whoa whoa whoa.";
                break;
            case(3):
                document.getElementById("d").innerHTML = pyraBold + "Ugh. What?";
                break;
            case(4):
                document.getElementById("d").innerHTML = ninjaBold + "You may address me as my given name, Leonard Angel. You may address me as Ninja. But what was with that name you just introduced me as?";
                break;
            case(5):
                document.getElementById("d").innerHTML = pyraBold + "You know I'm supposed to be the honest one here, right? Our creator based a bunch of us on characters from Teen Titans, because, for him, it started with imagining Beauty on that show. So when he came up with you, he basically ripped off the quiet, teleporting teen villain, Kyd Wykkyd.";
                break;
            case(6):
                document.getElementById("d").innerHTML = ninjaBold + "I see. Well, a true warrior needs not to be hung up on lack of originality of his past, but the one original path he sets for his future.";
                break;
            case(7):
                document.getElementById("d").innerHTML = pyraBold + "Yeah, well, good luck following that original path, Kyd Wykkyd.";
                break;
            case(8):
                document.getElementById("d").innerHTML = ninjaBold + "Why, thank you, Raven!";
                break;
            case(9):
                document.getElementById("d").innerHTML = pyraBold + "At least our creator gave me abilities different from the character I was ripped off from. I'm sure I can pass for an original over you.";
                break;
            case(10):
                document.getElementById("d").innerHTML = ninjaBold + "Oh, sure. All that darkness won't make anyone confuse you with someone else.";
                break;   
        }
    }
    else
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = beautyBold + "And this is the character page for . . . wait. Where is he? Hello? Ninja? You there?";
                break;
            case(2):
                document.getElementById("d").innerHTML = beautyBold + "Well, this is awkward. Everyone normally shows up to help greet the user on their character pages.";
                break;
            case(3):
                document.getElementById("d").innerHTML = beautyBold + "Well, anyway, if he was here, you'd see this is the character page for one of our villains, J Gang member Ninja. You can see to the left of where he was supposed to be is his Charevo Emblem representing his Charevo Trinity of Stealth, Mischief, and Quiet. To what would've been the right of him are his Charevo Fairies.";
                break;
            case(4):
                document.getElementById("d").innerHTML = beautyBold + "Down at the bottom, you'll see Ninja's bio, which you can take a read if you'd like. Gee, if we're talking about the guy, it would really help if he was here. But, anyway, as you can see from his bio, Ninja was always a quiet kid who took advantage of how he was seen as not much of a presence to play jokes on people who would never expect anything from him. When he got his powers of teleportation and invisibility, he utilized it to become even more mischievous when surprising people.";
                $("#character").fadeOut(500);
                $(this).clearQueue().stop();
                break;
            case(5):
                document.getElementById("d").innerHTML = ninjaBold + "Surprise!";
                $("#character").fadeIn(500);
                $(this).clearQueue().stop();
                break;
             case(6):
                document.getElementById("d").innerHTML = beautyBold + "Ah!";
                break;
            case(7):
                document.getElementById("d").innerHTML = ninjaBold + "Heh heh heh heh. What a time for that little trivia to occur.";
                break;
            case(8):
                document.getElementById("d").innerHTML = beautyBold + "Ugh. Please don't do that again.";
                break;
            case(9):
                document.getElementById("d").innerHTML = ninjaBold + "Okay.";
                break;
            case(10):
                document.getElementById("d").innerHTML = beautyBold + "Thank you. Now then, for Ninja's powers . . . wait a minute. You're just saying you won't scare me again so you can scare me more when you do it again later.";
                break;
            case(11):
                document.getElementById("d").innerHTML = ninjaBold + "Heh heh heh. One's word is best taken for what's true rather than for what's heard. Good luck with the rest of the interpretation.";
                $("#character").fadeIn(500);
                $(this).clearQueue().stop();
                break;
            case(12):
                document.getElementById("d").innerHTML = ninjaBold + "Oh yeah? Well, don't expect me to be as truthful as . . . Ah, geez. He's gone again. Okay. I'm just gonna stay looking in that direction until he comes back.";
                $("#character").fadeOut(500);
                $(this).clearQueue().stop();
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
