/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    character = sessionStorage.getItem("SessionCharacter");

    document.getElementById("quizcharacter").width = (window.screen.width / 3.2);
    document.getElementById("quizcharacter").height = (window.screen.height / 1.44);
    $("section").attr("style", "margin-top: 50px; padding-bottom: 100px; width:100%; height: " + window.screen.height + "px");

    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");


    if (window.screen.width > 850)
    {
        $(".quizcharacter").show();
        $(".quizcharacter").css({"left": (window.screen.width * .65), "width": (window.screen.width / 2.9)});
        $(".quiztable").css({"margin-left": "150px", "width": "600px"});
    }
    else
    {
        //$(".quizcharacter").css({"left": (window.screen.width * .75)});
        $(".quizcharacter").hide();
        $(".quiztable").css({"margin-left": "10px", "width": (window.screen.width * .9)});
        $("#quiztable td").css({"width": "15px"});
    }

    $(window).on("orientationchange", function (event) {
        if (window.screen.width > 850)
        {
            $(".quizcharacter").show();
            $(".quizcharacter").css({"left": (window.screen.width * .65), "width": (window.screen.width / 2.9)});
            $(".quiztable").css({"margin-left": "150px", "width": "600px"});
        }
        else
        {
            //$(".quizcharacter").css({"left": (window.screen.width * .75)});
            $(".quizcharacter").hide();
            $(".quiztable").css({"margin-left": "10px", "width": (window.screen.width * .9)});
            $("#quiztable td").css({"width": "15px"});
        }
    });

    $(window).resize(function () {
        if (window.screen.width > 850)
        {
            $(".quizcharacter").show();
            $(".quizcharacter").css({"left": (window.screen.width * .65), "width": (window.screen.width / 2.9)});
            $(".quiztable").css({"margin-left": "150px", "width": "600px"});
        }
        else
        {
            //$(".quizcharacter").css({"left": (window.screen.width * .75)});
            $(".quizcharacter").hide();
            $(".quiztable").css({"margin-left": "10px", "width": (window.screen.width * .9)});
            $("#quiztable td").css({"width": "15px"});
        }


    });



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
        document.getElementById("d").innerHTML = beautyBold + "So if you've read those novellas available, you can test your knowledge of them with a few quizzes. But you won't just be taking a quiz, I'll be there with you as your host. Me, my friends, and my enemies will even be here to provide some cool trivia on the questions. So you won't be alone here.";

    }
    else if (character === "Tel-E")
    {
        document.getElementById("d").innerHTML = teleBold + "So if you've read those stories Beauty has told, you can take a quiz on them right here. Since they're her stories, Beauty will take over as host where she will ask you the questions and she and the rest of us will talk about them. You might just gain some insight into our creator's ideas and see our own perspectives should you participate.";

    }
    else if (character === "Pyra")
    {
        document.getElementById("d").innerHTML = pyraBold + "Okay, so here are some quizzes you can take on those free stories we gave you. Now, I know you've chosen me, but Beauty's gonna take over as host for these quizzes. She and all us other characters are gonna be here to comment on the questions and answers. Of course, if you're here to just get a score and not hear us talk, feel free to hit the Next button over and over to skip us.";

    }



});
