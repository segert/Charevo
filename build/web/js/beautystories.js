/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {

    character = sessionStorage.getItem("SessionCharacter");
    
    $("section").attr("style", "margin-top: 50px; padding-bottom: 100px; width:100%; height: " + window.outerHeight + "px");
    document.getElementById("storycharacter").width = (window.screen.width / 3.2);
    document.getElementById("storycharacter").height = (window.screen.height / 1.44);
    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    //$("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");

    dialogue = 1;
    max = 0;

    defaultdialogue();


    $("#story1").mouseover(function () {
        storydescription(1);
        document.getElementById("storycharacter").src = "images/raceright1.png";
        document.getElementById("storycharacter").alt = "Race Placeholder";
        $(this).clearQueue().stop();
        $("#story1").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);

    });
    $("#story2").mouseover(function () {
        storydescription(2);
        document.getElementById("storycharacter").src = "images/tel-eright1.png";
        document.getElementById("storycharacter").alt = "Tel-E Placeholder";
        $(this).clearQueue().stop();
        $("#story2").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);
    });
    $("#story3").mouseover(function () {
        storydescription(3);
        document.getElementById("storycharacter").src = "images/bendyright1.png";
        document.getElementById("storycharacter").alt = "Bendy Placeholder";
        $(this).clearQueue().stop();
        $("#story3").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);
    });
    $("#story4").mouseover(function () {
        storydescription(4);
        document.getElementById("storycharacter").src = "images/pyraright1.png";
        document.getElementById("storycharacter").alt = "Pyra Placeholder";
        $(this).clearQueue().stop();
        $("#story4").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);
    });
    $("#story5").mouseover(function () {
        storydescription(5);
        document.getElementById("storycharacter").src = "images/natorright1.png";
        document.getElementById("storycharacter").alt = "Nator Placeholder";
        $(this).clearQueue().stop();
        $("#story5").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);
    });

    $("#story1").mouseout(function () {
        defaultdialogue();
        $(this).clearQueue().stop();
        $("#story1").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story2").mouseout(function () {
        defaultdialogue();
        $(this).clearQueue().stop();
        $("#story2").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story3").mouseout(function () {
        defaultdialogue();
        $(this).clearQueue().stop();
        $("#story3").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story4").mouseout(function () {
        defaultdialogue();
        $(this).clearQueue().stop();
        $("#story4").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story5").mouseout(function () {
        defaultdialogue();
        $(this).clearQueue().stop();
        $("#story5").animate({backgroundColor: "", color: "#000000"}, 400);
    });

    function storydescription(story) {

        var beautyBold = "Beauty: ";
        beautyBold = beautyBold.bold();
        var teleBold = "Tel-E: ";
        teleBold = teleBold.bold();

        if (sessionStorage.getItem("SessionCharacter") === "Beauty") {
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
        else if (sessionStorage.getItem("SessionCharacter") === "Tel-E") {
            switch (story)
            {
                case(1):
                    document.getElementById("d").innerHTML = teleBold + "Here's our first time meeting Beauty where ";
                    break;
                case(2):
                    document.getElementById("d").innerHTML = teleBold + "";
                    break;
                case(3):
                    document.getElementById("d").innerHTML = teleBold + "";
                    break;
                case(4):
                    document.getElementById("d").innerHTML = teleBold + "";
                    break;
                case(5):
                    document.getElementById("d").innerHTML = teleBold + "";
                    break;
            }
        }
        else if (character === "Pyra")
        {
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