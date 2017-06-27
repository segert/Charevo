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

    dialogue = 1;
    max = 0;

    var beautyBold = "Beauty: ";
    beautyBold = beautyBold.bold();
    var teleBold = "Tel-E: ";
    teleBold = teleBold.bold();
    var pyraBold = "Pyra: ";
    pyraBold = pyraBold.bold();

    cyhack = 0;
    reloadPage = 0;

    if (sessionStorage.getItem("Cyhack") === "true")
    {
        cyhack = 1;
        cyhackTakeOver();
    }

    if (sessionStorage.getItem("CyhackDialogue") === "11")
    {
        dialogue = 11;
        cyhack = 0;
        max = 14;
        
        DialogueChangeMenu();
        
        document.getElementById("prev").setAttribute("style", "opacity: .4");
        document.getElementById("prev").disabled = true;
    }

    if (cyhack === 1)
    {

    }
    else if (character === "Beauty")
    {
        document.getElementById("d").innerHTML = beautyBold + "Alright! Here's a good one. It's another villain, a female villain no less. We call her Cyhack. She's got a Charevo Emblem and Charevo Fairies like most everyone else with abilities here. For her, she's got Intelligence, Arrogance, and Technology, all elements mixed together to form a tough J Gang girl.";
        //alert(document.getElementById("testsearch").innerHTML);
        max = 14;
        if (sessionStorage.getItem("CyhackDialogue") === "11")
        {
            sessionStorage.setItem("CyhackDialogue", 0);
            DialogueChangeMenu();
        }
    }
    else if (character === "Tel-E")
    {
        document.getElementById("d").innerHTML = teleBold + "Here we have the page for our lead character, Beauty. The astute site surfer might notice the mark on her hand, which you can see on the top-left. That is her Charevo Emblem.";
        max = 9;
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

function cyhackTakeOver() {
    $(".li-a-menu1, .menu-selected").html("<b>Cyhack</b>");

    //alert(document.getElementById("testsearch").innerHTML);


    //document.getElementById("testsearch").src = "../js/cyhack_search_list.js";

    //adjustMenu();
}

function adjustMenu() {
    var position = $("#test").position();
    $("#testmenu").css({"position": "fixed", "left": position.left});

    $(window).scroll(function () {
        var position123 = $("#test").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu").css({"position": "fixed", "left": (position123.left - windowposition)});
    });
    $(window).resize(function () {
        var position12 = $("#test").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu").css({"position": "fixed", "left": (position12.left - windowposition)});
    });

    var position2 = $("#test2").position();
    $("#testmenu2").css({"position": "fixed", "left": position2.left});

    $(window).scroll(function () {
        var position123 = $("#test2").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu2").css({"position": "fixed", "left": (position123.left - windowposition)});
    });
    $(window).resize(function () {
        var position22 = $("#test2").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu2").css({"position": "fixed", "left": (position22.left - windowposition)});
    });

    var position3 = $("#test3").position();
    $("#testmenu3").css({"position": "fixed", "left": position3.left});

    $(window).scroll(function () {
        var position123 = $("#test3").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu3").css({"position": "fixed", "left": (position123.left - windowposition)});
    });
    $(window).resize(function () {
        var position32 = $("#test3").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu3").css({"position": "fixed", "left": (position32.left - windowposition)});
    });

    var position4 = $("#test4").position();
    $("#testmenu4").css({"position": "fixed", "left": position4.left});

    $(window).scroll(function () {
        var position123 = $("#test4").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu4").css({"position": "fixed", "left": (position123.left - windowposition)});
    });
    $(window).resize(function () {
        var position42 = $("#test4").position();
        var windowposition = $(window).scrollLeft();
        $("#testmenu4").css({"position": "fixed", "left": (position42.left - windowposition)});
    });
}

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
            $("#Behavior").text("Intelligence: ");
            break;
        case(1):
            $("#Behavior").text("Intelligence: ");
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
            $("#Mentality").text("Arrogance: ");
            break;
        case(1):
            $("#Mentality").text("Arrogance: ");
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
            $("#Identification").text("Technology: ");
            break;
        case(1):
            $("#Identification").text("Technology: ");
            break;

    }

}

function next() {

    if (reloadPage === 1 && dialogue === 10)
    {
        reloadPage = 0;

        sessionStorage.setItem("Cyhack", true);
        sessionStorage.setItem("CyhackDialogue", 11);
        //var location = Math.floor(Math.random() * 22);
        var locationNum = 0;
        sessionStorage.setItem("location", locationNum);

        location.reload();
    }
    else
    {

        if (dialogue < max)
        {
            dialogue++;
            DialogueChangeMenu();
            if (sessionStorage.getItem("Cyhack") === null || sessionStorage.getItem("Cyhack") === "false")
            {
                document.getElementById("prev").setAttribute("style", "opacity: 1");
                document.getElementById("prev").disabled = false;
            }
            else
            {
                document.getElementById("prev").setAttribute("style", "opacity: .4");
                document.getElementById("prev").disabled = true;
            }


        }

        if (dialogue === max)
        {
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
        }

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


    if (character === "Tel-E")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = teleBold + "And here's the character page for J Gang member, Gina Mozetti AKA Cyhack. You'll notice her Charevo Emblem and Charevo Fairies are represented by a brain, balloon, and cell phone. These are for her Charevo Trinity of Intelligence, Arrogance, and Technology. As one of our villains, once the guidance of her Charevo Fairies becomes available, you might notice hers becoming a little more malicious than what we're given.";
                break;
            case(2):
                document.getElementById("d").innerHTML = teleBold + "That said, anyone can have a Charevo Gene change from good to evil with Charevo Fairies going from positive to negative and vice versa if a person truly demonstrates deeds of whichever end of morality. Though, Cyhack's powers would remain the same, which, if you look below, includes enhanced intelligence and the ability to merge technology with herself.";
                break;
            case(3):
                document.getElementById("d").innerHTML = cyhackBold + "Hey, get it right, Vega! The Cyhack's had this intelligence since I was five. I don't need no Charevo Gene to have a brain the size o' that Intelligence Fairy. You want an enhanced intellect, the Cyhack can match wits with you in Charevo Penitentiary without any powers. Just you see.";
                break;
            case(4):
                document.getElementById("d").innerHTML = teleBold + "Oh, that's right. You grew up with an advanced intellect as well. I'm sure you would've fit in well on my home planet of all smart women.";
                break;
            case(5):
                document.getElementById("d").innerHTML = cyhackBold + "The Cyhack don't need an invitation into your species. And don't expect the Cyhack to turn all goody good like you say I could. The Cyhack's here to do her thing and that's doin' her work for the J Gang and put her smarts against ya.";
                break;
            case(6):
                document.getElementById("d").innerHTML = teleBold + "Oh, everyone has the potential for good. I actually look forward to seeing your intellect put to good use. I do think smart women can make the best of friends.";
                break;
            case(7):
                document.getElementById("d").innerHTML = cyhackBold + "Don't be stupid. The Cyhack's only friends are herself, Fourize, and the rest of the J Gang, in that order. What makes you think I'd ever be a pal o' yours?";
                break;
            case(8):
                document.getElementById("d").innerHTML = teleBold + "I've got some dirt on Nator.";
                break;
            case(9):
                document.getElementById("d").innerHTML = cyhackBold + "The Cyhack is listening.";
                break;
        }

    }
    else if (character === "Pyra")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = pyraBold + "So this is the character page for . . . for . . . Hmmmm. Let's see here.";
                break;
            case(2):
                document.getElementById("d").innerHTML = cyhackBold + "Dang it! The Cyhack knows you can read the name above me!";
                break;
            case(3):
                document.getElementById("d").innerHTML = pyraBold + "Oh. Is it Cyhack? Alright. I guess that seems right. Anyway, so her Charevo Emblem representing her Charevo Trinity of Intelligence, Arrogance, and Technology is on the left. Her ugly Charevo Fairies representing both her and those elements are on the right.";
                break;
            case(4):
                document.getElementById("d").innerHTML = cyhackBold + "Ugly? The Cyhack makes everything better. And that includes are creator's lack of artistic talent. The Cyhack is the obvious exception.";
                break;
            case(5):
                document.getElementById("d").innerHTML = pyraBold + "Uh huh. Geez. Why did our creator go with an old cell phone to represent the element of Technology? That's, like, ancient technology by today's standards. And that brain and balloon design mixed with her? Who told our creator those look good?";
                break;
            case(6):
                document.getElementById("d").innerHTML = cyhackBold + "What did I just tell you? The Cyhack doesn't make anything look ugly! I mean . . . I guess our creator makes EVERYTHING look ugly. 'cept me of course. I . . . I . . . I wish we had actual artist for this thing. The Cyhack just looks weird.";
                break;
            case(7):
                document.getElementById("d").innerHTML = pyraBold + "Oh, Cyhack. You're still here? Gee, I didn't know you had such a low opinion of yourself.";
                break;
        }
    }
    else
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = beautyBold + "Alright! Here's a good one. It's another villain, a female villain no less. We call her Cyhack. She's got a Charevo Emblem and Charevo Fairies like most everyone else with abilities here. For her, she's got Intelligence, Arrogance, and Technology, all elements mixed together to form a tough J Gang girl.";
                break;
            case(2):
                document.getElementById("d").innerHTML = cyhackBold + "The Cyhack seems to have an admirer. If my pal, Fourize, had his luck that day, he coulda jacked two super powered newbies for our squad.";
                break;
            case(3):
                document.getElementById("d").innerHTML = beautyBold + "Not a chance. I'm no villain. But just 'cause I hate what you do, you do have one of the cooler designs for a character compared to most everyone else on this site.";
                break;
            case(4):
                document.getElementById("d").innerHTML = cyhackBold + "Yeah, you can always count on the Cyhack to be the best looking. Maybe I should've been the one called Beauty.";
                break;
            case(5):
                document.getElementById("d").innerHTML = beautyBold + "I can trade the name if you want. Hey, one question though. If we're all characters on this website, and you can merge technology into your body, do you think you could mix people's computers into you?";
                break;
            case(6):
                document.getElementById("d").innerHTML = cyhackBold + "No. Believe me. The Cyhack has tried.";
                break;
            case(7):
                document.getElementById("d").innerHTML = beautyBold + "Come on! You've got electronic power. You gotta show some of it off.";
                break;
            case(8):
                document.getElementById("d").innerHTML = cyhackBold + "The Cyhack has something I could do, but . . . eh, you wouldn't like it.";
                break;
            case(9):
                document.getElementById("d").innerHTML = beautyBold + "Come on. Just do it. Pleeeeeeeeeeeeeeeeeeease?";
                break;
            case(10):
                document.getElementById("d").innerHTML = cyhackBold + "Alright. You asked for it.";


                reloadPage = 1;

                break;
            case(11):
                document.getElementById("d").innerHTML = beautyBold + "So? Whaddaya think?";
                break;
            case(12):
                document.getElementById("d").innerHTML = beautyBold + "Oh. Uh. Looks . . . interesting. Actually, this is a bit too tacky for my taste. You could change it back.";
                break;
            case(13):
                document.getElementById("d").innerHTML = beautyBold + "Nah. I like it this way. Though, if you can find me. Maybe I'll change it if you click me. Hack ya later.";
                $("#character").animate({left: window.screen.width}, function () {
                    $("#character").hide();
                });
                break;
            case(14):
                document.getElementById("d").innerHTML = beautyBold + "Hey! Come back! Ugh. Sorry, folks. Cyhack just hacked the site. Let's go find her.";
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
