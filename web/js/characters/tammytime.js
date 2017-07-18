/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    character = sessionStorage.getItem("SessionCharacter");

    pageCharacter = "";

    direction = "right";
    movingAndCloning = 0;
    totalClones = 0;
    currentClones = 0;

    maxClones = 327;


    checkResolution();

    $(window).resize(function () {
        resizeResolution();

    });

    $(window).on("orientationchange", function (event) {
        checkResolution();
    });

    if (sessionStorage.getItem("firstPage") === null)
    {
        sessionStorage.setItem("firstPage", "Tammy Time's page");
        sessionStorage.setItem("memory", "Tammy Time's page");
        sessionStorage.setItem("currentPage", "Tammy Time's page");
    }
    else
    {
        if (sessionStorage.getItem("currentPage") !== "Tammy Time's page")
        {
            sessionStorage.setItem("memory", sessionStorage.getItem("memory").toString() + ", Tammy Time's page");

            if (sessionStorage.getItem("characterVisits") === null)
            {
                sessionStorage.setItem("characterVisits", 1);
            }
            else
            {

                sessionStorage.setItem("characterVisits", parseInt(sessionStorage.getItem("characterVisits")) + 1);


            }
        }
        sessionStorage.setItem("currentPage", "Tammy Time's page");


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
        max = 16;
    }
    else
    {
        document.getElementById("d").innerHTML = beautyBold + "Hey! It's my character page! Okay. So there's a lot to cover, so let's start with the top left. If you haven't visited the Charevo Gene page, check it out and come back so I can explain this.";
        max = 5;
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




    setInterval(function () {
        if (movingAndCloning === 1)
        {
            if (totalClones < maxClones)
            {
                totalClones++;
                currentClones++;

                $('section').append('<img id = clone' + totalClones + ' class = "clone" src = "../images/tammyleft1.png" alt = "Tammy Time PlaceHolder" width = 300 height = 400 style = "position: absolute; top: 100px; left: 480px; z-index: 5;"/>');

            }
            Move();
            checkResolution();


        }
    }, 500);
    Move();


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
            $("#Behavior").text("Tomfoolery: ");
            break;
        case(1):
            $("#Behavior").text("Tomfoolery: ");
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
            $("#Mentality").text("Monologue: ");
            break;
        case(1):
            $("#Mentality").text("Monologue: ");
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
            $("#Identification").text("Attention: ");
            break;
        case(1):
            $("#Identification").text("Attention: ");
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

    var tammyBold = "Tammy Time: ";
    tammyBold = tammyBold.bold();


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
                document.getElementById("d").innerHTML = teleBold + "This is the character page for yet another villain of Minor City. This one is Tammy Time of the J Gang. On the left is her Charevo Emblem, representing her Charevo Elements of Tomfoolery, Monologue, and Attention. These elements aren't much of a surprise if you look at her for a few seconds.";
                break;
            case(2):
                document.getElementById("d").innerHTML = tammyBold + "And I'm guessing your Charevo Trinity is . . . well, something similar I'll bet. I do like the makeup you chose. Very silent theatrical musician type I see you're going for.";
                break;
            case(3):
                document.getElementById("d").innerHTML = teleBold + "Makeup? Um . . . Sorry. But this is my actual skin. And I'm not a clown.";
                break;
            case(4):
                document.getElementById("d").innerHTML = tammyBold + "Get out! So you have this look and you do nothing with it? You totally got an entertainer in you, girl! Maybe a fun alien monster clown. I could see that.";
                break;
            case(5):
                document.getElementById("d").innerHTML = teleBold + "Well, I've received similar comments in the past, though they've been insults rather than job recommendations. But, er . . . thank you for assuming I look like part of a circus attraction, I guess. Anyway, getting back to the character page, you can find Tammy's Charevo Fairies on the upper right hand side if you scroll to look in that direction.";
                break;
            case(6):
                document.getElementById("d").innerHTML = tammyBold + "Ahahahahaha! I'm sorry, but those Charevo Fairies of me always crack me up. They got all the color with the symbols and everything. Man, I'm glad the colors are based on whatever clothes we wear, 'cause I'm never taking this clown suit off.";
                break;
            case(7):
                document.getElementById("d").innerHTML = teleBold + "Good hygenic note to be given. Though, your fairies do look rather amusing. I'm sure it's no secret that our creator is not an artist, so if it wasn't clear, that Tomfoolery Element symbol is supposed to be those humorous glasses for resembling comedian, Groucho Marx.";
                break;
            case(8):
                document.getElementById("d").innerHTML = tammyBold + "How dare you preface the legend's name with his occupation! Yes, I'm more of a Harpo girl, but show some respect. Everyone knows Groucho and his hilarious look.";
                break;
            case(9):
                document.getElementById("d").innerHTML = teleBold + "Well, according to your thoughts, the man was born in 1890. I think a good reminder of who he is might be necessary.";
                break;
            case(10):
                document.getElementById("d").innerHTML = tammyBold + "You wanna remind people? Tell joke shops to sell more of his glasses and also his movies. I've robbed about three stores after they got rid of the classic gags.";
                break;
            case(11):
                document.getElementById("d").innerHTML = teleBold + "You robbed stores just for changing merchandise? Why would you do that and not go to a new store?";
                break;
            case(12):
                document.getElementById("d").innerHTML = tammyBold + "They need to learn to respect the Marx man. Also, this chica needed the money.";
                break;

        }

    }
    else if (character === "Pyra")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = pyraBold + "Alright. Let me explain this girl for a minute. Who is this? This is one of our villains of the J Gang, Tammy Time. She has the Charevo Trinity of Tomfoolery, Monologue, and Attention giving her the power to duplicate herself and anything she touches and can also inflate her head to fly and hit people with. Why does she look like this? Well, our creator likes clown characters. So there you go.";
                break;
            case(2):
                document.getElementById("d").innerHTML = tammyBold + "And being something he likes, it's no surprise that I'm our creator's favorite character. I guess it's just a matter of time until I get my own spinoff story.";
                break;
            case(3):
                document.getElementById("d").innerHTML = pyraBold + "Okay, first of all, I'M our creator's favorite. And second, you're just our creator's favorite in terms of the character design. Yours was the only one that our creator saw after drawing you where he said 'Finally! I got one right!' Looking at you and your wardrobe, though, I don't consider this much of an achievement.";
                break;
            case(4):
                document.getElementById("d").innerHTML = tammyBold + "But you are basically saying I look better than all the rest of you. And I'm clearly the one our creator is most proud of.";
                break;
            case(5):
                document.getElementById("d").innerHTML = pyraBold + "Yeah, but I think the ideal result would be our creator drawing ALL of us in a way he's proud of. You being his best is like a kid having a B- math test put on the refrigerator, but it's just one test on there. You're expected to do well the whole time. One is nothing to brag about.";
                break;
            case(6):
                document.getElementById("d").innerHTML = tammyBold + "Oh, one is nothing to be all happy with?";
                break;
            case(7):
                document.getElementById("d").innerHTML = pyraBold + "No, it's not. It's just one good drawing against a bunch of mediocre ones. Again, the kid and the refrigerator. I bet the kid went through a bunch of drafts for drawings until her parents were proud enough to put one on the fridge. Believe me, no one likes the way I look. And, as one of the main characters, that is not a good result. You, we only see for a little bit.";
                break;
            case(8):
                document.getElementById("d").innerHTML = tammyBold + "As long as I look good, that's the only result I need. But I ask you again. You think one good looking girl is a problem?";
                break;
            case(9):
                document.getElementById("d").innerHTML = pyraBold + "Okay. I'll admit you look kinda cute. But let's not get hung up on the assumption that your more passable design means you're 'good looking'.";
                break;
            case(10):
                document.getElementById("d").innerHTML = tammyBold + "I disagree. But, again, one good one is a problem?";
                break;
            case(11):
                document.getElementById("d").innerHTML = pyraBold + "Yes! Were you not listening? You can't just have one. You need more! At least a majority that draws attention from the bad stuff. More! Not one!";
                break;
            case(12):
                document.getElementById("d").innerHTML = tammyBold + "Alright then. If you say you want more . . .";
                break;
            case(13):
                document.getElementById("d").innerHTML = pyraBold + "Oh no. No. No! No! Okay. You! The user! Don't click that next button! Don't trigger anything!";
                break;
            case(14):
                document.getElementById("d").innerHTML = tammyBold + "ManymanymanymanymanymanymanymanymanymanyMANY! Yahahahahahahaha!";
                movingAndCloning = 1;

                break;
            case(15):
                document.getElementById("d").innerHTML = pyraBold + "Oh, for crying out loud. What did I just say?";
                break;
            case(16):
                document.getElementById("d").innerHTML = tammyBold + "How you likin' that idea of just one good lookin' girl now, Pyra?";
                break;
        }
    }
    else
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = beautyBold + "Here's another one of our Minor City villains. User, meet Tammy Time of the J Gang.";
                break;
            case(2):
                document.getElementById("d").innerHTML = tammyBold + "Hi, Loser. I mean, User. Haha! See what I did there?";
                break;
            case(3):
                document.getElementById("d").innerHTML = beautyBold + "Nice one, Tammy. Anyway, Tammy Time has the power to clone herself and anything she touches, which comes from her Charevo Trinity of Tomfoolery, Monologue, and Attention. You can see the Charevo Emblem and Charevo Fairies for those elements on the sides. I should point out her Monologue Element comes from her always talking to herself. So it's strange it's represented by a podium given the source.";
                break;
            case(4):
                document.getElementById("d").innerHTML = tammyBold + "Aw, come on. You're saying you can't see me giving a speech to some politicians or whoever?";
                break;
            case(5):
                document.getElementById("d").innerHTML = beautyBold + "Lose the outfit, and maybe I'll think about the plausibility.";
                break;
            case(5):
                document.getElementById("d").innerHTML = tammyBold + "Well, that's not happening.";
                break;
            case(5):
                document.getElementById("d").innerHTML = beautyBold + "Yeah. I didn't think so. But, hey. Good for you. You look like a fun villain to fight. And in a city where our creator doesn't want most of the heroes and villains to be in a colorful hero or villain costume, I'm happy to see a nice exception slip through.";
                break;
            case(6):
                document.getElementById("d").innerHTML = tammyBold + "Thanks. I'm just getting ready to be a clown when Fourize is done needing me as a villain. Why keep the costume in the closet all that time, am I right?";
                break;
            case(7):
                document.getElementById("d").innerHTML = beautyBold + "So you're not a real clown yet? Gee, I thought in between working with the J Gang, you did kids' birthday parties on the weekends.";
                break;
            case(8):
                document.getElementById("d").innerHTML = tammyBold + "Of course not. Do you see anything that says I'm a certified Clown College graduate in my bio? At least lemme wait 'til I can intern with a pro first.";
                break;
        }

    }

}


function Move() {

    var topRandom = Math.floor(Math.random() * ($("section").height() + 200)) - 200;

    var clones = document.getElementsByClassName("clone");


    for (var i = 1; i < clones.length + 1; i++) {

        $("#clone" + i).click(function () {
            //$("#clone" + i).hide();
        });

        var randomdirection = Math.floor(Math.random() * 2);

        if (randomdirection === 0)
        {

            document.getElementById("clone" + i).src = "../images/tammyright1.png";
            $("#clone" + i).animate({left: 0, top: topRandom}, 2000, function () {

            });
        }
        else
        {
            document.getElementById("clone" + i).src = "../images/tammyleft1.png";
            $("#clone" + i).animate({left: (window.screen.width - document.getElementById("clone" + i).width), top: topRandom}, 2000, function () {

            });
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

            $("#character, .clone").css({"left": (window.screen.width * .35), "width": (window.screen.width * .25), "height": (window.screen.height * .45)});
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

            $("#character, .clone").css({"left": (window.screen.width * .35), "width": (window.screen.width * .35), "height": (window.screen.height * .45)});
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
        $("#character, .clone").css({"left": (window.screen.width * .35), "width": (window.screen.width * .35), "height": (window.screen.height * .45)});
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
        $("#character, .clone").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .75)});
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
        $("#character, .clone").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .75)});
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
        $("#character, .clone").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .55)});
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
        $("#character, .clone").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .55)});
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
        $("#character, .clone").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .55)});
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
        $("#character, .clone").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .55)});
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
