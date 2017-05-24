/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    character = sessionStorage.getItem("SessionCharacter");

    document.getElementById("quizcharacter").width = (window.screen.width / 3.2);
    document.getElementById("quizcharacter").height = (window.screen.height / 1.44);
    
    characterWidth = (window.screen.width / 3.2);
    characterHeight = (window.screen.height / 1.44);
    
    checkResolution();

    $(window).on("orientationchange", function (event) {
        checkResolution();
    });

    $(window).resize(function () {
        resizeResolution();


    });



    dialogue = 1;
    max = 0;

    var beautyBold = "Beauty: ";
    beautyBold = beautyBold.bold();
    var teleBold = "Tel-E: ";
    teleBold = teleBold.bold();
    var pyraBold = "Pyra: ";
    pyraBold = pyraBold.bold();

    if (character === "Tel-E")
    {
        document.getElementById("d").innerHTML = teleBold + "So if you've read those stories Beauty has told, you can take a quiz on them right here. Since they're her stories, Beauty will take over as host where she will ask you the questions and she and the rest of us will talk about them. You might just gain some insight into our creator's ideas and see our own perspectives should you participate.";

    }
    else if (character === "Pyra")
    {
        document.getElementById("d").innerHTML = pyraBold + "Okay, so here are some quizzes you can take on those free stories we gave you. Now, I know you've chosen me, but Beauty's gonna take over as host for these quizzes. She and all us other characters are gonna be here to comment on the questions and answers. Of course, if you're here to just get a score and not hear us talk, feel free to hit the Next button over and over to skip us.";

    }
    else
    {
        document.getElementById("d").innerHTML = beautyBold + "So if you've read those novellas available, you can test your knowledge of them with a few quizzes. But you won't just be taking a quiz, I'll be there with you as your host. Me, my friends, and my enemies will even be here to provide some cool trivia on the questions. So you won't be alone here.";

    }



});

function checkResolution()
{
    document.getElementById("quizcharacter").width = (window.screen.width / 3.2);
    document.getElementById("quizcharacter").height = (window.screen.height / 1.44);
    
    characterWidth = (window.screen.width / 3.2);
    characterHeight = (window.screen.height / 1.44);
    
    //$("section").attr("style", "margin-top: 50px; padding-bottom: 100px; width:100%; height: " + window.screen.height + "px");

    $("section").css({"margin-top": "20px", "padding-bottom": "100px", "width": window.screen.width, "height": window.screen.height});
    sectionWidth = window.screen.width;
    sectionHeight = window.screen.height;


    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");


    if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $(".quizcharacter").hide();
        $(".quiztable").css({"margin-left": "10px", "width": (window.screen.width * .9)});
        $("#quiztable td").css({"width": "15px"});
        
        tableWidth = (window.screen.width * .9);
    }
    else if (window.screen.width > 850)
    {
        $(".quizcharacter").show();
        $(".quizcharacter").css({"left": (window.screen.width * .65), "width": (window.screen.width / 2.9)});
        $(".quiztable").css({"margin-left": "150px", "width": "600px"});
        
        characterWidth = (window.screen.width / 2.9);
        characterLeft = (window.screen.width * .65);
    }
    else
    {
        //$(".quizcharacter").css({"left": (window.screen.width * .75)});
        $(".quizcharacter").hide();
        $(".quiztable").css({"margin-left": "10px", "width": (window.screen.width * .9)});
        $("#quiztable td").css({"width": "15px"});
        
        tableWidth = (window.screen.width * .9);
    }
    
    if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("section").css({"height": (window.screen.height * 1.9)});
        
        sectionHeight = (window.screen.height * 1.9);
    }
    else if(window.screen.height < 650)
    {
        $("section").css({"height": (window.screen.height * 1.2)});
        
        sectionHeight = (window.screen.height * 1.2);
    }
}

function resizeResolution()
{
    document.getElementById("quizcharacter").width = characterWidth;
    document.getElementById("quizcharacter").height = characterHeight;
    
    //$("section").attr("style", "margin-top: 50px; padding-bottom: 100px; width:100%; height: " + window.screen.height + "px");
    $("section").css({"margin-top": "50px", "padding-bottom": "100px", "width": sectionWidth, "height": sectionHeight});
    


    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");


    if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        //$(".quizcharacter").hide();
        $(".quiztable").css({"margin-left": "10px", "width": tableWidth});
        $("#quiztable td").css({"width": "15px"});
    }
    else if (window.screen.width > 850)
    {
        $(".quizcharacter").show();
        $(".quizcharacter").css({"left": characterLeft, "width": characterWidth});
        $(".quiztable").css({"margin-left": "150px", "width": "600px"});
    }
    else
    {
        //$(".quizcharacter").css({"left": (window.screen.width * .75)});
        //$(".quizcharacter").hide();
        $(".quiztable").css({"margin-left": "10px", "width": tableWidth});
        $("#quiztable td").css({"width": "15px"});
    }
    
    if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("section").css({"height": sectionHeight});
    }
    else if(window.screen.height < 650)
    {
        $("section").css({"height": sectionHeight});
    }
}