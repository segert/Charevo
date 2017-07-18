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
        sessionStorage.setItem("firstPage", "Pyra's page");
        sessionStorage.setItem("memory", "Pyra's page");
        sessionStorage.setItem("currentPage", "Pyra's page");
    }
    else
    {
        if (sessionStorage.getItem("currentPage") !== "Pyra's page")
        {
            sessionStorage.setItem("memory", sessionStorage.getItem("memory").toString() + ", Pyra's page");

            if (sessionStorage.getItem("characterVisits") === null)
            {
                sessionStorage.setItem("characterVisits", 1);
            }
            else
            {

                sessionStorage.setItem("characterVisits", parseInt(sessionStorage.getItem("characterVisits")) + 1);


            }
        }
        sessionStorage.setItem("currentPage", "Pyra's page");


    }



    dialogue = 1;
    max = 0;

    var beautyBold = "Beauty: ";
    beautyBold = beautyBold.bold();
    var teleBold = "Tel-E: ";
    teleBold = teleBold.bold();
    var pyraBold = "Pyra: ";
    pyraBold = pyraBold.bold();

    var cyhackBold = "Cyhack: ";
    cyhackBold = cyhackBold.bold();

    if (sessionStorage.getItem("Cyhack") === "true")
    {
        document.getElementById("d").innerHTML = "";

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
    else
    {
        document.getElementById("d").innerHTML = beautyBold + "Hey! It's my character page! Okay. So there's a lot to cover, so let's start with the top left. If you haven't visited the Charevo Gene page, check it out and come back so I can explain this.";
        max = 17;
        $("#character").hide();
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

    fadeIn = 0;
    $("#character").mouseover(function () {

        $("#character").fadeOut(300, function () {
            document.getElementById("character").src = "../images/empty.png";
            $("#character").show();
            fadeIn = 1;

        });


    });

    $(":not(#character)").mouseover(function () {

        if (fadeIn === 1)
        {
            $("#character").hide();
            $("#character").fadeIn(300);

            document.getElementById("character").src = "../images/pyraleft1.png";
            fadeIn = 0;
        }


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
            $("#Behavior").text("Tolerance: Never be afraid of anyone who can tolerate what you fear to reveal.");
            break;
        case(1):
            $("#Behavior").text("Tolerance: To tolerate one’s own self is to believe tolerance will come from others.");
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
            $("#Mentality").text("Anger: Never expect anger from one to be reflected in another!");
            break;
        case(1):
            $("#Mentality").text("Anger: When you’re angry at yourself, you’re your own worst obstacle!");
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
            $("#Identification").text("Indifference: Like, not caring be, like, the key to avoiding fear.");
            break;
        case(1):
            $("#Identification").text("Indifference: Like, when you don’t care for what others care about, your will is the strongest.");
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


    var cyhackBold = "Cyhack: ";
    cyhackBold = cyhackBold.bold();

    if (sessionStorage.getItem("Cyhack") === "true")
    {
        document.getElementById("d").innerHTML = "";

    }
    else if (character === "Tel-E")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = teleBold + "Here you can see the character page for my good friend and Neo Brigade teammate, Bonnie Moto. You'll notice she wields the Charevo Trinity of Tolerance, Anger, and Indifference, giving her pyro-kinetic abilities. Now, I know that may seem intimidating along with two of those three Charevo Elements, but you'll see a great friend beneath her.";
                break;
            case(2):
                document.getElementById("d").innerHTML = pyraBold + "Thanks for the intro, Tel-E. But, uh . . . you know you're supposed to say my hero name too when you do these, right?";
                break;
            case(3):
                document.getElementById("d").innerHTML = teleBold + "Oh, I know. But I just figured if I said your name, Pyra, people would only think of you for being all fire powered and dangerous as opposed to being the mostly non-violent, peaceful, and helpful person you are.";
                break;
            case(4):
                document.getElementById("d").innerHTML = pyraBold + "Ugh.";
                break;
            case(5):
                document.getElementById("d").innerHTML = teleBold + "What's wrong?";
                break;
            case(6):
                document.getElementById("d").innerHTML = pyraBold + "What if some of our enemies are reading this? I don't need them all thinking I'm some softy. What if they think of doing something to harm a bunch of people in a large crowd, knowing I wouldn't do much about it. I don't need anyone jumping to these conclusions however accurate they may be.";
                break;
            case(7):
                document.getElementById("d").innerHTML = teleBold + "Right. I understand. So, allow me to rephrase. Pyra may be a hero for peace, but she can burn you right good with her fire of darkness if you get her mad enough.";
                break;
            case(8):
                document.getElementById("d").innerHTML = pyraBold + "Well, don't tell people THAT. Now people are gonna think I'm all about burning people with dangerous darkness. Seriously, I don't need to come across as threatening.";
                break;
            case(9):
                document.getElementById("d").innerHTML = teleBold + "Okay. Then should we talk about how you value friendship as was proven by your sadness upon being alone after your previous friends left you after you got your powers.";
                break;
            case(10):
                document.getElementById("d").innerHTML = pyraBold + "Ugh. You're making me look afraid to be alone and desperate to be with people. I can think of two problems with that, one being that I could be too focused on getting people to like me that I wouldn't stand up to them if they were villains.";
                break;
            case(11):
                document.getElementById("d").innerHTML = teleBold + "Well, if you want, I could mention that your friends left you after you accidentally burned your best friend's brother. Maybe the fact that you are constantly heated so you're too hot too touch without getting burned.";
                break;
            case(11):
                document.getElementById("d").innerHTML = pyraBold + "Are you kidding me? That won't help me make any friends. Do you think I'm trying to scare people away from me?";
                break;
            case(12):
                document.getElementById("d").innerHTML = teleBold + "Ugh. I can read minds, and even I can't tell what you're thinking at this point. Once you figure it out, let me know. I'll help the user with another character.";
                break;
            case(13):
                document.getElementById("d").innerHTML = pyraBold + "Alright. Just make sure they don't forget about me, the good stuff I mean, not that I care. Whatever.";
                break;
        }

    }
    else if (character === "Pyra")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = pyraBold + "Alright. So this here's my character page. If those images need explaining because our creator can't draw, that's supposed to be a punching bag, a fireball, and a cat on the left, and me as a punching bag, me as a fireball, and me as a cat on the right.";
                break;
            case(2):
                document.getElementById("d").innerHTML = pyraBold + "Just for the record, I am NOT a cat person. I'm not much of any kind of person. That and those other symbols are supposed to represent my Charevo Trinity of Tolerance, Anger, and Indifference. So if no one's told you so far, that means I have dark pyro-kinetic abilities, which mainly includes the power to generate dark fire.";
                break;
            case(3):
                document.getElementById("d").innerHTML = pyraBold + "Of course, nobody ever talks about my power to absorb heat to help others. So if you think I'm all about hurting people, please keep that in mind.";
                break;
            case(4):
                document.getElementById("d").innerHTML = pyraBold + "Anyway, if you click on those terribly designed Charevo Fairies, you can display some new advice they give right below me. Full disclosure, I don't actually talk like those fairies. So don't expect me to turn into some dumb valley girl after you see what the Indifference Fairy says.";
                break;
            case(5):
                document.getElementById("d").innerHTML = pyraBold + "You can also read from my bio below if you want. Normally, the subject of a character page talks with the host about themselves. But since I'm both, I'm pretty much on my own here with no one to talk to, because that's the story of my life.";
                break;
        }
    }
    else
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = beautyBold + "Oh, goody. Here's one of my best friends . . . Uh . . . Excuse me. Pyra! Come on out! You've got a visitor!";
                break;
            case(2):
                document.getElementById("d").innerHTML = pyraBold + "Yeah. Uh . . . do I need to be here?";
                break;
            case(3):
                document.getElementById("d").innerHTML = beautyBold + "Come on, Pyra. Come say hi. I'll protect them if need be.";
                break;
            case(4):
                document.getElementById("d").innerHTML = pyraBold + "Okay. Just tell them not to be scared.";
                $("#character").fadeOut(1200);
                $(this).clearQueue().stop();
                break;
            case(5):
                document.getElementById("d").innerHTML = pyraBold + "Alright. Hi there. Hey, Beauty.";
                $("#character").fadeIn(1200);
                $(this).clearQueue().stop();
                break;
            case(6):
                document.getElementById("d").innerHTML = beautyBold + "See? It's all good.";
                break;
            case(7):
                document.getElementById("d").innerHTML = pyraBold + "Yeah. We'll see.";
                break;
            case(8):
                document.getElementById("d").innerHTML = beautyBold + "Anyway, this is one of our Neo Brigade heroes, Bonnie Moto AKA Pyra. I know she has the power to fire dark flames at people coming from her Charevo Trinity of Tolerance, Anger, and Indifference, but she can also be one of the nicest people I know, which you can see from her power to absorb heat and mix her fiery body into the air to avoid causing harm.";
                break;
            case(9):
                document.getElementById("d").innerHTML = pyraBold + "Thanks for sharing that last little bit. The whole dangerous fireball label is best left ignored and forgotten.";
                break;
            case(10):
                document.getElementById("d").innerHTML = beautyBold + "I guess it's a good thing our creator decided to make your character image your normal appearance rather than you in your dark ignited form.";
                break;
            case(11):
                document.getElementById("d").innerHTML = pyraBold + "You're telling me. I'll take five more scars over something that'll scare people away. Though, if you're saying I should tell the world our creator makes good decisions as an artist, that's not happening.";
                break;
            case(12):
                document.getElementById("d").innerHTML = beautyBold + "He and I both care about how you're portrayed, Pyra. I didn't even mention the fact that if anyone touches you, they'll get burned from that side effect of your power keeping you heated at all times.";
                break;
            case(13):
                document.getElementById("d").innerHTML = pyraBold + "I think our creator cares more about keeping characters interesting than giving us an easy time. He only gave me that side effect because he wanted some characters to stay away from the cliche that heroes never have any negative effects when they get powers.";
                break;
            case(14):
                document.getElementById("d").innerHTML = beautyBold + "Well, he did the same with me, you know. At least you don't have to smile when people look at you to avoid your powers electrocuting you.";
                break;
            case(15):
                document.getElementById("d").innerHTML = pyraBold + "Oh, I think my powers force me to present myself different than I naturally would a little more than you. At least YOU don't have to worry about your powers hurting people, particularly if you forget you can burn someone just by grabbing their hand.";
                break;
            case(16):
                document.getElementById("d").innerHTML = beautyBold + "You wanna trade? You won't hurt anyone with MY powers, but with your natural face and how often you smile at people, I'm sure the only one you'll be hurting is yourself.";
                break;
            case(17):
                document.getElementById("d").innerHTML = pyraBold + "Well, you're the pretty one. You want I should throw in the scar too? Actually, on second thought, you've got a point. I sure ain't smiling at anyone, certainly not if they were all designed by our creator. That work's nothing to smile at.";
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
