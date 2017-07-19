/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    character = sessionStorage.getItem("SessionCharacter");

    $("#sessioncharacter").hide();

    if (character === "Tel-E")
    {
        document.getElementById("sessioncharacter").src = "images/tel-eleft1.png";
        document.getElementById("sessioncharacter").alt = "Tel-E Placeholder";
    }
    else if (character === "Pyra")
    {
        document.getElementById("sessioncharacter").src = "images/pyraleft1.png";
        document.getElementById("sessioncharacter").alt = "Pyra Placeholder";
    }
    else
    {
        document.getElementById("sessioncharacter").src = "images/beautyleft1.png";
        document.getElementById("sessioncharacter").alt = "Beauty Placeholder";
    }

    checkResolution();

    $(window).resize(function () {
        resizeResolution();

    });

    $(window).on("orientationchange", function (event) {
        checkResolution();
    });

    if (sessionStorage.getItem("firstPage") === null)
    {
        sessionStorage.setItem("firstPage", "the Beauty Stories page");
        sessionStorage.setItem("memory", "the Beauty Stories page");
        sessionStorage.setItem("currentPage", "the Beauty Stories page");
    }
    else
    {
        if (sessionStorage.getItem("currentPage") !== "the Beauty Stories page")
        {
            sessionStorage.setItem("memory", sessionStorage.getItem("memory").toString() + ", the Beauty Stories page");
        }
        sessionStorage.setItem("currentPage", "the Beauty Stories page");


    }



    dialogue = 1;
    max = 0;
    mouseouts = 0;

    defaultdialogue();

    if (sessionStorage.getItem("Cyhack") === "true")
    {
        $("#story1").html("<b>Follow the Leaders (TO YOUR DOOM!)</b>");
        $("#story2").html("<b>Superheroes: The Game Show</b>");
        $("#story3").html("<b>D for Dummies</b>");
        $("#story4").html("<b>Pop Star Goes the Weasel</b>");
        $("#story5").html("<b>Super Powered Soap Opera (Starring Cyhack)</b>");
    }


    $("#story1").mouseover(function () {
        storydescription(1);
        if (window.screen.width > 900)
            $("#storycharacter").show();
        document.getElementById("storycharacter").src = "images/raceright1.png";
        document.getElementById("storycharacter").alt = "Race Placeholder";
        $(this).clearQueue().stop();
        $("#story1").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);

    });
    $("#story2").mouseover(function () {
        storydescription(2);
        if (window.screen.width > 900)
            $("#storycharacter").show();
        document.getElementById("storycharacter").src = "images/tel-eright1.png";
        document.getElementById("storycharacter").alt = "Tel-E Placeholder";
        $(this).clearQueue().stop();
        $("#story2").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);
    });
    $("#story3").mouseover(function () {
        storydescription(3);
        if (window.screen.width > 900)
            $("#storycharacter").show();
        document.getElementById("storycharacter").src = "images/bendyright1.png";
        document.getElementById("storycharacter").alt = "Bendy Placeholder";
        $(this).clearQueue().stop();
        $("#story3").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);
    });
    $("#story4").mouseover(function () {
        storydescription(4);
        if (window.screen.width > 900)
            $("#storycharacter").show();
        document.getElementById("storycharacter").src = "images/pyraright1.png";
        document.getElementById("storycharacter").alt = "Pyra Placeholder";
        $(this).clearQueue().stop();
        $("#story4").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);
    });
    $("#story5").mouseover(function () {
        storydescription(5);
        if (window.screen.width > 900)
            $("#storycharacter").show();
        document.getElementById("storycharacter").src = "images/natorright1.png";
        document.getElementById("storycharacter").alt = "Nator Placeholder";
        $(this).clearQueue().stop();
        $("#story5").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);
    });

    $("#story1").mouseout(function () {
        if (mouseouts < 150)
            defaultdialogue();

        //$("#storycharacter").hide();
        $(this).clearQueue().stop();
        $("#story1").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story2").mouseout(function () {
        if (mouseouts < 150)
            defaultdialogue();
        //$("#storycharacter").hide();
        $(this).clearQueue().stop();
        $("#story2").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story3").mouseout(function () {
        if (mouseouts < 150)
            defaultdialogue();
        //$("#storycharacter").hide();
        $(this).clearQueue().stop();
        $("#story3").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story4").mouseout(function () {
        if (mouseouts < 150)
            defaultdialogue();
        //$("#storycharacter").hide();
        $(this).clearQueue().stop();
        $("#story4").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story5").mouseout(function () {
        if (mouseouts < 150)
            defaultdialogue();
        //$("#storycharacter").hide();
        $(this).clearQueue().stop();
        $("#story5").animate({backgroundColor: "", color: "#000000"}, 400);
    });

    $(".storybutton").click(function () {
        mouseouts = 0;
        $(this).clearQueue().stop();

    });

    $(".storybutton").on("mouseleave", function () {
        mouseouts++;
        //document.getElementById("d").innerHTML = mouseouts;

        if (sessionStorage.getItem("Cyhack") !== "true" && mouseouts >= 70)
        {
            document.getElementById("d").innerHTML = teleBold + "Well, aren't you indecisive today. I changed my mind. You ain't readin' nothin' today. Too bad.";

        }

        if (mouseouts >= 150)
        {
            $("#storycharacter").hide();
            $(".storybutton").hide();

            $("section").css({"height": (sectionHeight * 1.3)});

            $("#sessioncharacter").show();
            $("#sessioncharacter").animate({left: (window.screen.width * .35)});


            if (character === "Tel-E")
            {
                document.getElementById("d").innerHTML = teleBold + "Right. I think it's time I cut you off. I'm sorry, but I've analyzed your thoughts, and you're clearly only interested in making me summarize these novellas for you. So if you won't select one to read, I'll have to nicely ask you to go somewhere else. Now, I know I've abruptly removed the stories for you, but try to take that as politely as possible.";
            }
            else if (character === "Pyra")
            {
                document.getElementById("d").innerHTML = pyraBold + "Alright. That's it. I told you to pick something, but you're clearly not interested in the free material provided for you. So guess what? No story time for anyone. We're done here. Yeah, you thought I was kidding, huh? Nope. The stories are gone. If you come back, they'll be here. But if you screw around, you get nothing. Bye now.";
            }
            else
            {
                document.getElementById("d").innerHTML = beautyBold + "Okay. That's enough of that. I'm sorry, but if you can't make up your mind to choose from five stories, I'm gonna have to ask you to go to somewhere else on this site. When you're ready to take your story choice more seriously, I'll let you come back. But, until then, no stories for you right now.";
            }
        }

    });

    function storydescription(story) {

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
            switch (story)
            {
                case(1):
                    document.getElementById("d").innerHTML = cyhackBold + "Meh. You can skip this one. I'm not in it. I know this is the first story that introduces all the characters and what the Charevo Gene is, but I'm not in it. So just how important is it, really?";
                    break;
                case(2):
                    document.getElementById("d").innerHTML = cyhackBold + "There's something about two smart girls getting into a battle of knowledge. But neither of those smart girls is the Cyhack, so what's the point? Am I right? You can skip this one.";
                    break;
                case(3):
                    document.getElementById("d").innerHTML = cyhackBold + "Oh, now, this one you can skip. I mean, you can read it if you like seeing someone meet their hero for the first time. The Cyhack's her own hero, though, and I've met me a number of times. So anything with me's gotta be on your radar. But I'm not in this, so forget it.";
                    break;
                case(4):
                    document.getElementById("d").innerHTML = cyhackBold + "Now, this one show's struggle with love and acceptance from multiple characters. It has plenty of emotion as they deal with their own insecurities while a whole host of backstory is explored that might get you to think of how you fit in with friends and what your own self-confidence is like compared to these characters. But the Cyhack's not in this, so forget it.";
                    break;
                case(5):
                    document.getElementById("d").innerHTML = cyhackBold + "So this one features a guy who thinks he's the better cyborg in these stories, which, like the parts he used to build his body, is a complete load of garbage. But, despite such a flaw, the Cyhack stars in this one. So I can't recommend this one enough.";
                    break;
            }
        }
        else if (sessionStorage.getItem("SessionCharacter") === "Tel-E") {
            switch (story)
            {
                case(1):
                    document.getElementById("d").innerHTML = teleBold + "Here is our first time meeting Beauty where she assists us when Cold Miner tries to freeze the city. She may have a bit of trouble fitting in at the start, as you'll see. But Race struggles with his own anxieties from leading a team as well.";
                    break;
                case(2):
                    document.getElementById("d").innerHTML = teleBold + "Ah. Here's my confrontation with a certain trivia expert. When some former game show contestants go missing, trivia knowledge becomes our only hope of saving them. For those of you like my friends wondering why I don't use my telepathy at every opportunity, this should answer your questions.";
                    break;
                case(3):
                    document.getElementById("d").innerHTML = teleBold + "Bendy meets his hero while he and Beauty see a little more of a hero's life. It's a little different than you'd expect, and perhaps a bit too dangerous, even for a man Bendy worships.";
                    break;
                case(4):
                    document.getElementById("d").innerHTML = teleBold + "Um . . . I guess I'm in this one. Anyway, a pop star comes to town and Pyra is not amused, despite all the happiness this girl brings. But, to save the city, and to save me, she and Beauty must deal with some fantasies that can be happy for some, but terrible for others.";
                    break;
                case(5):
                    document.getElementById("d").innerHTML = teleBold + "Oh, so this is the one where Nator meets his match in the logic department with villains right out of an old riddle. When Cyhack's earthquake device is acquired, some tricksters steal it and plan to sell it back to her. In addition, Bendy gets more than he bargained for by being truthful to a date. Truth and lies become all the more important to everyone involved.";
                    break;
            }
        }
        else if (sessionStorage.getItem("SessionCharacter") === "Pyra")
        {
            switch (story)
            {
                case(1):
                    document.getElementById("d").innerHTML = pyraBold + "Okay. So Beauty joins our team. Cold Miner tries to freeze the city. I'm not thrilled with either of these things. As I read this, I don't know how much you really care about Beauty if you're introduced to her for the first time. As your expert critic, I give this a 2 out of 10.";
                    break;
                case(2):
                    document.getElementById("d").innerHTML = pyraBold + "This one features Tel-E NOT using her powers. It's slightly more interesting than it sounds. The villain seems unique if you don't think of a Rare video game villain, which our creator didn't realize at the time. Still, the beginning of the third act kind of drags a bit, to be honest. I give it a 3 out of 10.";
                    break;
                case(3):
                    document.getElementById("d").innerHTML = pyraBold + "So I'm barely in this one. Don't start rating this highly yet though. Depending how you look at it, it's a lot of Beauty and Bendy watching TV. There's also another villain who's just a real waste of time. Just for her alone, this is a 1 out of 10 for me.";
                    break;
                case(4):
                    document.getElementById("d").innerHTML = pyraBold + "Well, this is about the most you'll see me, which might be including the longer novel later on. If you like popular music and the singers who perform them, I guess this is for you. If you like hearing people like me dump on popular music, this is DEFINITELY for you. Based on the recommendation to myself, I give this a 4 out of 10.";
                    break;
                case(5):
                    document.getElementById("d").innerHTML = pyraBold + "Ugh. Where do I begin with this thing? I feel like you have to be good at math for parts of this. So if we throw in a text book, this story's about 934 pages long, which I don't recommend as the length for any superhero story. It's fun to see Bendy make a fool of himself, but that doesn't save it for me. 10 out of '10' for me. If you've read this thing, you'll know that means 2 out of 10.";
                    break;
            }
        }
        else {
            switch (story)
            {
                case(1):
                    document.getElementById("d").innerHTML = beautyBold + "Alright! This is the one where I join the Neo Brigade! And also struggle to become accepted by them. Yeah!";
                    break;
                case(2):
                    document.getElementById("d").innerHTML = beautyBold + "Game shows? Trivia? Someone not wanting to cheat? Now I'm excited!";
                    break;
                case(3):
                    document.getElementById("d").innerHTML = beautyBold + "It's the one where we get to see a little too much risk being taken. And, for me, too much of a certain person's TV show.";
                    break;
                case(4):
                    document.getElementById("d").innerHTML = beautyBold + "Oh! Here's where I get to see myself battling all kinds of monsters with my friends! I don't do it, but I get to see it.";
                    break;
                case(5):
                    document.getElementById("d").innerHTML = beautyBold + "If you like seeing people who act like those who think they're smarter than you, this one's for you. Would I lie to you?";
                    break;
            }
        }
    }



    function defaultdialogue() {
        beautyBold = "Beauty: ";
        beautyBold = beautyBold.bold();
        teleBold = "Tel-E: ";
        teleBold = teleBold.bold();
        pyraBold = "Pyra: ";
        pyraBold = pyraBold.bold();
        cyhackBold = "Cyhack: ";
        cyhackBold = cyhackBold.bold();

        if (mouseouts < 70)
        {

            if (sessionStorage.getItem("Cyhack") === "true")
            {
                document.getElementById("d").innerHTML = cyhackBold + "Oh, look! Uh, you can read, right? Yeah? Well, good news. These are the novellas our creator wrote for you people. Now, I know it's not the best idea to judge a story by just the title, but I'd say this is pretty accurate. What? You don't believe me? Well, fine. I'll give you my summaries too. You trust the Cyhack THAT much, right?";
            }
            else if (character === "Tel-E")
            {
                document.getElementById("d").innerHTML = teleBold + "And here we have the novellas where myself and the Neo Brigade welcome Beauty to our team. If you're wondering about those titles, they're meant to look as if the villains are saying them with what's in parenthesis being specific to them. If you move the cursor over the title, I would be more than happy to provide a short synopsis for you.";
            }
            else if (character === "Pyra")
            {
                document.getElementById("d").innerHTML = pyraBold + "Here's where you can read the stories of Beauty doing her best to assimilate into the Neo Brigade one team member at a time. If these weird titles aren't making you curious enough, just hold the cursor over them and I'll give my two cents.";
            }
            else
            {
                document.getElementById("d").innerHTML = beautyBold + "So here are the stories about me joining my friends and helping them out with all the action and conflict that comes with it. I can't wait for you to read them! Just move the cursor over each one for my summary if you don't wanna just click and read right away.";
            }
        }
        else if (mouseouts < 150)
        {

            if (sessionStorage.getItem("Cyhack") === "true")
            {
                document.getElementById("d").innerHTML = cyhackBold + "Oh, look! Uh, you can read, right? Yeah? Well, good news. These are the novellas our creator wrote for you people. Now, I know it's not the best idea to judge a story by just the title, but I'd say this is pretty accurate. What? You don't believe me? Well, fine. I'll give you my summaries too. You trust the Cyhack THAT much, right?";
            }
            else if (character === "Tel-E")
            {
                document.getElementById("d").innerHTML = teleBold + "Pardon me, but I've noticed you seem quite indecisive on which story to read. Might I suggest reading them all in sequence? I'd certainly recommend that over moving the cursor over the titles repeatedly. I mean, I like blue too, but I'm more of a reader myself. But, if you're not, I can suggest some other pages on this site for you.";
            }
            else if (character === "Pyra")
            {
                document.getElementById("d").innerHTML = pyraBold + "Ugh. Do you go back and forth like this when ordering food. Let's go already! You've got people waiting behind you! By which I mean me standing by to help you with this. So could you just make up your mind? I know I didn't rate these stories too well, but I can't talk so fast and switch these images of me and my friends over and over. Seriously. Just pick something. If you don't, I swear I'm gonna shut this page down.";
            }
            else
            {
                document.getElementById("d").innerHTML = beautyBold + "Hey, uh, you think you can choose a story soon? I'm getting pretty tired repeating my summaries and putting up pictures of my friends. Come on! Let's get to the stories already! Trust me. They're worth the read. If you don't think so, we'll just go somewhere else, but you don't have to keep me waiting.";
            }
        }

    }

});

function checkResolution() {
    $("section").css({"margin-top": "50px", "padding-bottom": "100px", "width": window.screen.width, "height": window.screen.height});
    sectionWidth = window.screen.width;
    sectionHeight = window.screen.height;

    document.getElementById("storycharacter").width = (window.screen.width / 3.2);
    document.getElementById("storycharacter").height = (window.screen.height / 1.44);

    characterWidth = (window.screen.width / 3.2);
    characterHeight = (window.screen.height / 1.44);

    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    //$("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");

    $("#storycharacter").hide();

    if (window.screen.width < 400)
    {
        $(".storybutton").css({"font-size": "16px", "width": "300px"});
        $("#stories").css({"margin-left": "0px"});
    }
    else if (window.screen.width < 600)
    {
        $(".storybutton").css({"width": "300px"});
    }

    if (window.screen.height < 600 && window.screen.width < 600 && window.screen.height < window.screen.width)
    {
        $("section").css({"height": (window.screen.height * 2.8)});
        sectionHeight = (window.screen.height * 2.8);
    }
    else if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("section").css({"height": (window.screen.height * 1.8)});
        sectionHeight = (window.screen.height * 1.8);
    }
    else if (window.screen.height < 650)
    {
        $("section").css({"height": (window.screen.height * 1.2)});
        sectionHeight = (window.screen.height * 1.2);
    }

    $("#storycharacter").css({"left": (window.screen.width * .6)});
    characterLeft = (window.screen.width * .6);
}

function resizeResolution() {
    $("section").css({"margin-top": "50px", "padding-bottom": "100px", "width": sectionWidth, "height": sectionHeight});


    document.getElementById("storycharacter").width = characterWidth;
    document.getElementById("storycharacter").height = characterHeight;


    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    //$("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");

    //$("#storycharacter").hide();

    if (window.screen.width < 400)
    {
        $(".storybutton").css({"font-size": "16px", "width": "300px"});
        $("#stories").css({"margin-left": "0px"});
    }
    else if (window.screen.width < 600)
    {
        $(".storybutton").css({"width": "300px"});
    }

    if (window.screen.height < 600 && window.screen.width < 600 && window.screen.height < window.screen.width)
    {
        $("section").css({"height": sectionHeight});
    }
    else if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("section").css({"height": sectionHeight});
    }
    else if (window.screen.height < 650)
    {
        $("section").css({"height": sectionHeight});
    }

    $("#storycharacter").css({"left": characterLeft});
}