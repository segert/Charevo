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
        sessionStorage.setItem("firstPage", "my page");
        sessionStorage.setItem("memory", "my page");
        sessionStorage.setItem("currentPage", "my page");
    }
    else
    {
        if (sessionStorage.getItem("currentPage") !== "my page")
        {
            sessionStorage.setItem("memory", sessionStorage.getItem("memory").toString() + ", my page");

            if (sessionStorage.getItem("characterVisits") === null)
            {
                sessionStorage.setItem("characterVisits", 1);
            }
            else
            {

                sessionStorage.setItem("characterVisits", parseInt(sessionStorage.getItem("characterVisits")) + 1);


            }
        }
        sessionStorage.setItem("currentPage", "my page");


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
            $("#Behavior").text("Intelligence: The most intelligent person can be the one to know when he is wrong.");
            break;
        case(1):
            $("#Behavior").text("Intelligence: The most intelligent person can be the one to know when he is wrong.");
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
            $("#Mentality").text("Logic: With only logic, there can be only one result, which works well when an enemy anticipates a different result.");
            break;
        case(1):
            $("#Mentality").text("Logic: With only logic, there can be only one result, which works well when an enemy anticipates a different result.");
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
            $("#Identification").text("Data: Information on a subject works for who knows it and against the one who doesn’t think of it.");
            break;
        case(1):
            $("#Identification").text("Data: Information on a subject works for who knows it and against the one who doesn’t think of it.");
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

    var natorBold = "Nator: ";
    natorBold = natorBold.bold();


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
                document.getElementById("d").innerHTML = teleBold + "Ah. Here we have a Neo Brigade friend of mine. This is Nate Rodriguez, or Nator as we call him. On the left is his Charevo Emblem. This mark you'll see on his hand represents his Charevo Trinity, which, for him, is Intelligence, Logic, and Data. To the right, you'll notice his Charevo Fairies, which take the form of a hybrid of Nator and the symbol representing their Charevo Elements. It is these fairies that provide guidance for him, which you can see below. Additionally, his bio is just below that should you wish to learn more of our friend.";
                break;
            case(2):
                document.getElementById("d").innerHTML = natorBold + "Why are you telling them all that?";
                break;
            case(3):
                document.getElementById("d").innerHTML = teleBold + "What do you mean? I'm simply showing everyone what they can find in your character page. The emblem, the fairies, the bio. You know, the basic layout.";
                break;
            case(4):
                document.getElementById("d").innerHTML = natorBold + "Yeah, but I'm, like, the sixth name on the character list. A first time user surely would've visited the pages for the people above my name where they'd see that exact layout and know where everything was when they got to me. I mean, no offense, but you're just giving redundant information.";
                break;
            case(5):
                document.getElementById("d").innerHTML = teleBold + "That is correct in that you are not the first name on the list, but we can't expect every user to visit each page in order.";
                break;
            case(6):
                document.getElementById("d").innerHTML = natorBold + "What? So if you were visiting a site for the first time, you'd just click randomly? Come on! We have to expect a little desire for order.";
                break;
            case(7):
                document.getElementById("d").innerHTML = teleBold + "True. But someone may have read the stories and taken the quizzes before going to the character pages and, as unlikely as it may sound, the user may have found you to be their favorite character and couldn't wait to go to your page first.";
                break;
            case(8):
                document.getElementById("d").innerHTML = natorBold + "Pff. No one would do that. The character section was presented as a list. And you're supposed to go down the list in order. And the character section is also listed before the quiz and stories sections, so they surely would've visited this place first.";
                break;
            case(9):
                document.getElementById("d").innerHTML = teleBold + "Nator, if you're expecting everyone to visit this site's pages in order, then, by your logic, they would have visited the character pages before the Charevo Gene page. And that would require us to provide all the information on the Charevo Gene as we've discussed, which would make the Charevo Gene page redundant.";
                break;
            case(11):
                document.getElementById("d").innerHTML = natorBold + "Okay, it's bad enough that you're trying to spread your lies about that gene, so I'd take that whole page out either way. The point is, navigating this site IN ORDER is the logical thing to do.";
                break;
            case(12):
                document.getElementById("d").innerHTML = teleBold + "Oh, I'm certain some people don't wish to be bound by sequential boundaries in their web navigation. And they definitely could have gone to this page with me first.";
                break;
            case(13):
                document.getElementById("d").innerHTML = natorBold + "No they couldn't. You're image is online, so they could've seen it and wanted to start with you as host. But they'd know nothing about me when they navigate this place sequentially. Therefore, this page could not have been first.";
                break;
            case(14):
                document.getElementById("d").innerHTML = teleBold + "Right, but we do mention the different pages to visit, which includes the stories section. Free stories to read featuring different characters is certainly a nice thing to include in this site. They could have seen you there and become intrigued. Your story is pretty interesting.";
                break;
            case(15):
                document.getElementById("d").innerHTML = natorBold + "Look, it's obviously more likely that someone will go through the character list in order. I am not the first one, so I wouldn't be first.";
                break;
            case(16):
                document.getElementById("d").innerHTML = teleBold + "Nator, it's a one in twelve chance. It's not impossible. Everyone could have their own first choice. We can't expect an absolute first choice.";
                break;
            case(17):
                document.getElementById("d").innerHTML = natorBold + "Well, YOU can't. But I will.";
                break;
            case(18):
                document.getElementById("d").innerHTML = teleBold + "So I'm right in my decision and assumption then.";
                break;
            case(19):
                document.getElementById("d").innerHTML = natorBold + ". . . I'm not saying that.";
                break;
        }

    }
    else if (character === "Pyra")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = pyraBold + "So here we have the character page for one of my Neo Brigade colleagues. You'll notice his poorly done Charevo Fairies on the right representing his Charevo Elements of Intelligence, Logic, and Data as well as the man himself, Nator AKA Nate 'I don't believe anything about the Charevo Gene despite the evidence presented' Rodriguez.";
                break;
            case(2):
                document.getElementById("d").innerHTML = natorBold + "Okay. A few things. One: My nickname is Nator, which is the name that should go in quotes. Two: If you're using AKA, it's Real Name AKA Nickname. And three: Don't bring those Charevo Gene theories into my page.";
                break;
            case(3):
                document.getElementById("d").innerHTML = pyraBold + "Ugh. Okay, I know arguing with you over your denial of the Charevo Gene's existence is Tel-E's thing, but seriously. You've seen people with superpowers, yet you don't believe in the source?";
                break;
            case(4):
                document.getElementById("d").innerHTML = natorBold + "I'm sure it's based on something else. All this other stuff Tel-E's talked about with the gene just seems so made up.";
                break;
            case(5):
                document.getElementById("d").innerHTML = pyraBold + "Talked about? You mean, she's demonstrated that stuff, right? Ugh. Forget it. Tel-E's got way more patience for this kinda thing.";
                break;
            case(6):
                document.getElementById("d").innerHTML = natorBold + "Okay then. I'm sorry. But why would you even bring up that stuff at all? Seriously.";
                break;
            case(7):
                document.getElementById("d").innerHTML = pyraBold + "Well, you crossed out the part about your Charevo Gene giving you your powers and pretty much begged us not to talk about it at all, so I feel like this was an appropriate service for the public.";
                break;
            case(8):
                document.getElementById("d").innerHTML = natorBold + "Disclaimer: I do not support the theory or perpetuation of the theory of the Charevo Gene.";
                break;
        }
    }
    else
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = beautyBold + "Here's another one of my friends. It's Nator of the Neo Brigade! That's his Charevo Emblem on the left and Charevo Fairies on the right. They represent his Charevo Elements, which are Intelligence, Logic, and Data.";
                break;
            case(2):
                document.getElementById("d").innerHTML = natorBold + "Ugh. Just get on with the non-Charevo slash actual information.";
                break;
            case(3):
                document.getElementById("d").innerHTML = beautyBold + "Uh . . . sure thing, pal. Nator has some cool abilities, having built a robotic body for his brain. This includes some weapons he developed as well as some other gadgets. Apart from that . . . uh . . .";
                break;
            case(4):
                document.getElementById("d").innerHTML = natorBold + "What's wrong, Beauty?";
                break;
            case(5):
                document.getElementById("d").innerHTML = beautyBold + "Nothing. It's just . . . apart from your mechanical body . . . what are your powers again?";
                break;
            case(6):
                document.getElementById("d").innerHTML = natorBold + "Ha! Don't be silly. I don't have powers like you guys. This is all me.";
                break;
            case(7):
                document.getElementById("d").innerHTML = beautyBold + "No way. You totally have the Charevo Gene. What's your schtick?";
                break;
            case(8):
                document.getElementById("d").innerHTML = natorBold + "Ugh. Fine. Let's see what you guys put in that table. Uh, it says here I have expert control of technology I make. I guess that would explain me being able to use weapons in my body, but I'm not buying that. Let's see. Ah, I also have an enhanced memory. So there's that.";
                break;
            case(9):
                document.getElementById("d").innerHTML = beautyBold + "So that's what you got outside your robot body? A memory and what else? Expert control of your own technology? So if you made your own TV remote, you'd be able to change the channel at will without pressing a button?";
                break;
            case(10):
                document.getElementById("d").innerHTML = natorBold + "I don't know. Probably. If that's what you say I can do, who knows?";
                break;
            case(11):
                document.getElementById("d").innerHTML = beautyBold + "So you've got that and the ability to remember anything? I'm gonna be honest. It's fine, but not a very heroic skill set.";
                break;
            case(12):
                document.getElementById("d").innerHTML = natorBold + "Hey, what's wrong with having a good memory? I'll have you know I can remember all the pages on this site the user has visited so far.";
                break;
            case(13):
                document.getElementById("d").innerHTML = beautyBold + "You can do what now?";
                break;
            case(14):
                document.getElementById("d").innerHTML = natorBold + "You heard me. The user has visited " + sessionStorage.getItem("memory") + " . . . and that's it. My page here is last.";
                break;
            case(15):
                document.getElementById("d").innerHTML = beautyBold + "Okay. I'll admit that's pretty impressive. I mean, it is if you're just going by page navigation through only the site and ignoring the back and forward buttons. But I prefer my own powers. Good thing you got that robot body.";
                break;
            case(16):
                document.getElementById("d").innerHTML = natorBold + "You know I had to get hit by a car for me to have to use this thing.";
                break;
            case(17):
                document.getElementById("d").innerHTML = beautyBold + "Oh! I forgot about that. Sorry. Sorry. Gee, looks like I could really use that super memory of yours after all.";
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
