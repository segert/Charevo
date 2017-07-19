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

    var beautyBold = "Beauty: ";
    beautyBold = beautyBold.bold();
    var teleBold = "Tel-E: ";
    teleBold = teleBold.bold();
    var pyraBold = "Pyra: ";
    pyraBold = pyraBold.bold();
    var cyhackBold = "Cyhack: ";
    cyhackBold = cyhackBold.bold();
    
    if (sessionStorage.getItem("firstPage") === null)
    {
        sessionStorage.setItem("firstPage", "the Author page");
        sessionStorage.setItem("memory", "the Author page");
        sessionStorage.setItem("currentPage", "the Author page");
    }
    else
    {
        if(sessionStorage.getItem("currentPage") !== "the Author page")
        {
            sessionStorage.setItem("memory", sessionStorage.getItem("memory").toString() + ", the Author page");
        }
        sessionStorage.setItem("currentPage", "the Author page");
        
        
    }
    
    if (sessionStorage.getItem("Cyhack") === "true")
    {
        document.getElementById("character").src = "images/authorcyhack.png"
        document.getElementById("caricature").src = "images/caricaturecyhack.png"
        
        document.getElementById("d").innerHTML = cyhackBold + "Write me as a guy in your first draft, will ya? You sure Pyra and Tammy Time are still your favorites? Hmm? Oh! You guys! Greetings. And welcome to our creator's page. A bit of a nerd, though not a cool one like me. I wouldn't say he's that smart either. Sure, he's got a computer science degree and coded this site from scratch himself, but his writing decisions are significantly ludicrous. Someone should tell him how not to make supporting characters out of girls who have clear leading lady potential. It was bad enough that he didn't take the time to learn how to draw and just doodled me and said 'Eh, that's fine'. Seriously. Take an art and writing class, Egert!";
    }
    else if (character === "Tel-E")
    {
        document.getElementById("d").innerHTML = teleBold + "I'd like to introduce you to the individual who created us: Stephen Egert. You can read his bio below the two images, the one on the left having been taken about twenty times before he got a shot he liked. You can learn a little bit of his background here, which includes his love of television and the writers of his favorite shows, which is how he got into writing. Personally, I'm a fan of more intellectual and classic literature from folks such as Tom Wolfe, Harper Lee, J.D. Salinger, and Stephen King. But none of those people created me or inspired my creator, so my thanks to you, John Swartzwelder, Ken Keeler, Mike Scully, Patric Verrone, Mike Reiss, Jeff Martin, Eric Kaplan, and all those great folks, which . . . sadly don't include many women. Well, this is ironic then.";
    }
    else if (character === "Pyra")
    {
        document.getElementById("d").innerHTML = pyraBold + "Alright, so this page is . . . Ugh. Really? He had his own photo to work with and he still couldn't do a decent drawing of himself? Ugh. Anyway, so this is our creator's page. If you wanna learn more about him, just read the little bio here, of course that's a pretty big prerequisite. By the way, no. He did not have that photo of himself pointing to his left just lying around. He actually had that done for the lame joke of him and his drawing pointing to each other. Ugh. It's like watching your dad try to be cool on this page.";
    }
    else
    {
        document.getElementById("d").innerHTML = beautyBold + "And here's where you can read about our creator himself, Stephen Egert. Kind of an average guy for the most part. I think one of the most interesting things about him is that he wasn't interested in books for a number of years, but got into writing as he idolized TV writers, one of whom became a novelist. And our creator suddenly decided to write a book himself. So that shows that something you may not like when you're young could turn into something you love later on. And something else you like could help lead you to it even if you don't know it at first. So just stay with what you like, 'cause you never know what it might inspire for you.";
    }


});

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


}

function checkResolution(){
      //$(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    $("#bio").css({"width": (window.screen.width * .85), "margin-top": (window.screen.height * .1), "left": (window.screen.width * .1)});
    $(".characterinfo").css({"width": (window.screen.width * .85)});
    //$(".characterheader").css({"width": (window.screen.width * .80)});
    
    bioWidth = (window.screen.width * .85);
    bioMarginTop = (window.screen.height * .1);
    bioLeft = (window.screen.width * .1);
    
    characterWidth = (window.screen.width * .85);

    if (window.screen.height < 500 && window.screen.width < 500 && window.screen.height < window.screen.width)
    {
        $("#paddeddiv").css({"height": (window.screen.height * 2.20), "margin-bottom": (window.screen.height * 1.5)});
        paddedHeight = (window.screen.height * 2.20);
        paddedMargin = (window.screen.height * 1.5);
        
    }
    else if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("#paddeddiv").css({"height": (window.screen.height * 1.20), "margin-bottom": (window.screen.height * 1.5)});
        paddedHeight = (window.screen.height * 1.20);
        paddedMargin = (window.screen.height * 1.5);
    }
    else if (window.screen.width > 1000 && window.screen.height > 1800)
    {
        $("#paddeddiv").css({"height": (window.screen.height * .20)});
        //$(".characterinfo p").css({"font-size": 18});
        paddedHeight = (window.screen.height * .20);
        
       /* document.getElementById("character").width = 700;
        document.getElementById("character").height = 600;
        document.getElementById("caricature").width = 600;
        document.getElementById("caricature").height = 700;*/
    }
    else if (window.screen.width > 1000 && window.screen.height > 700)
    {
        $("#paddeddiv").css({"height": (window.screen.height * 1.50)});
        paddedHeight = (window.screen.height * 1.50);
        
        document.getElementById("character").width = 420;
        document.getElementById("character").height = 430;
        document.getElementById("caricature").width = 350;
        document.getElementById("caricature").height = 520;
    }
    else if (window.screen.width > 700 && window.screen.height > 1000)
    {
        $("#paddeddiv").css({"height": (window.screen.height * 1.50)});
        paddedHeight = (window.screen.height * 1.50);
        
        document.getElementById("character").width = 300;
        document.getElementById("character").height = 300;
        document.getElementById("caricature").width = 250;
        document.getElementById("caricature").height = 320;
    }
    else if (window.screen.width > 500)
    {
        $("#paddeddiv").css({"height": (window.screen.height * 1.20)});
        paddedHeight = (window.screen.height * 1.20);
        
        document.getElementById("character").width = 180;
        document.getElementById("character").height = 220;
        document.getElementById("caricature").width = 150;
        document.getElementById("caricature").height = 220;
    }
    else if (window.screen.height > 700)
    {
        $("#paddeddiv").css({"height": (window.screen.height * 3.00), "margin-bottom": (window.screen.height * 1.5)});
        paddedHeight = (window.screen.height * 3.00);
        paddedMargin = (window.screen.height * 1.5);
        
        document.getElementById("character").width = 180;
        document.getElementById("character").height = 220;
        document.getElementById("caricature").width = 150;
        document.getElementById("caricature").height = 220;
        
        $("#images").css({"margin-left": "-20px"});
    }
    else if (window.screen.height > 600)
    {
        $("#paddeddiv").css({"height": (window.screen.height * 5.00), "margin-bottom": (window.screen.height * 1.5)});
        paddedHeight = (window.screen.height * 5.00);
        paddedMargin = (window.screen.height * 1.5);
        
        document.getElementById("character").width = 180;
        document.getElementById("character").height = 220;
        document.getElementById("caricature").width = 150;
        document.getElementById("caricature").height = 220;
        
        $("#images").css({"margin-left": "-20px"});
    }
    else
    {
        $("#paddeddiv").css({"height": (window.screen.height * 6.90), "margin-bottom": (window.screen.height * 1.5)});
        paddedHeight = (window.screen.height * 4.90);
        paddedMargin = (window.screen.height * 1.5);
        
        document.getElementById("character").width = 150;
        document.getElementById("character").height = 170;
        document.getElementById("caricature").width = 140;
        document.getElementById("caricature").height = 210;
        
        $("#images").css({"margin-left": "-20px"});
    }
}

function resizeResolution(){
     //$(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    $("#bio").css({"width": bioWidth, "margin-top": bioMarginTop, "left": bioLeft});
    $(".characterinfo").css({"width": characterWidth});
    //$(".characterheader").css({"width": (window.screen.width * .80)});
    
    

    if (window.screen.height < 500 && window.screen.width < 500 && window.screen.height < window.screen.width)
    {
        $("#paddeddiv").css({"height": paddedHeight, "margin-bottom": paddedMargin});
    }
    else if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("#paddeddiv").css({"height": paddedHeight, "margin-bottom": paddedMargin});
    }
    else if (window.screen.width > 1000 && window.screen.height > 1800)
    {
        $("#paddeddiv").css({"height": (window.screen.height * .20)});
        //$(".characterinfo p").css({"font-size": 18});
        paddedHeight = (window.screen.height * .20);
    }
    else if (window.screen.width > 500)
    {
        $("#paddeddiv").css({"height": paddedHeight});
    }
    else
    {
        $("#paddeddiv").css({"height": paddedHeight, "margin-bottom": paddedMargin});
    }
}