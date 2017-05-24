/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    character = sessionStorage.getItem("SessionCharacter");

    checkResolution();

    $(window).resize(function () {
        resizeResolution();

    });
    
    $(window).on("orientationchange", function (event) {
        checkResolution();
    });



    dialogue = 1;
    max = 0;

    defaultdialogue();


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
        defaultdialogue();
        //$("#storycharacter").hide();
        $(this).clearQueue().stop();
        $("#story1").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story2").mouseout(function () {
        defaultdialogue();
        //$("#storycharacter").hide();
        $(this).clearQueue().stop();
        $("#story2").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story3").mouseout(function () {
        defaultdialogue();
        //$("#storycharacter").hide();
        $(this).clearQueue().stop();
        $("#story3").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story4").mouseout(function () {
        defaultdialogue();
        //$("#storycharacter").hide();
        $(this).clearQueue().stop();
        $("#story4").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story5").mouseout(function () {
        defaultdialogue();
        //$("#storycharacter").hide();
        $(this).clearQueue().stop();
        $("#story5").animate({backgroundColor: "", color: "#000000"}, 400);
    });

    function storydescription(story) {

        var beautyBold = "Beauty: ";
        beautyBold = beautyBold.bold();
        var teleBold = "Tel-E: ";
        teleBold = teleBold.bold();
        var pyraBold = "Pyra: ";
        pyraBold = pyraBold.bold();

       if (sessionStorage.getItem("SessionCharacter") === "Tel-E") {
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
        else if (character === "Pyra")
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
        var beautyBold = "Beauty: ";
        beautyBold = beautyBold.bold();
        var teleBold = "Tel-E: ";
        teleBold = teleBold.bold();
        var pyraBold = "Pyra: ";
        pyraBold = pyraBold.bold();

        if (character === "Beauty")
        {
            document.getElementById("d").innerHTML = beautyBold + "So here are the stories about me joining my friends and helping them out with all the action and conflict that comes with it. I can't wait for you to read them! Just move the cursor over each one for my summary if you don't wanna just click and read right away.";
        }
        else if (character === "Tel-E")
        {
            document.getElementById("d").innerHTML = teleBold + "And here we have the novellas where myself and the Neo Brigade welcome Beauty to our team. If you're wondering about those titles, they're meant to look as if the villains are saying them with what's in parenthesis being specific to them. If you move the cursor over the title, I would be more than happy to provide a short synopsis for you.";
        }
        else if (character === "Pyra")
        {
            document.getElementById("d").innerHTML = pyraBold + "Here's where you can read the stories of Beauty doing her best to assimilate into the Neo Brigade one team member at a time. If these weird titles aren't making you curious enough, just hold the cursor over them and I'll give my two cents.";
        }
    }
});

function checkResolution(){
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

    if(window.screen.width < 400)
    {
        $(".storybutton").css({"font-size": "16px", "width": "300px"});
        $("#stories").css({"margin-left": "0px"});
    }
    else if(window.screen.width < 600)
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
    else if(window.screen.height < 650)
    {
        $("section").css({"height": (window.screen.height * 1.2)});
        sectionHeight = (window.screen.height * 1.2);
    }

    $("#storycharacter").css({"left": (window.screen.width * .6)});
    characterLeft = (window.screen.width * .6);
}

function resizeResolution(){
    $("section").css({"margin-top": "50px", "padding-bottom": "100px", "width": sectionWidth, "height": sectionHeight});
    
    
    document.getElementById("storycharacter").width = characterWidth;
    document.getElementById("storycharacter").height = characterHeight;
    
    
    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    //$("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    
    //$("#storycharacter").hide();

    if(window.screen.width < 400)
    {
        $(".storybutton").css({"font-size": "16px", "width": "300px"});
        $("#stories").css({"margin-left": "0px"});
    }
    else if(window.screen.width < 600)
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
    else if(window.screen.height < 650)
    {
        $("section").css({"height": sectionHeight});
    }

    $("#storycharacter").css({"left": characterLeft});
}