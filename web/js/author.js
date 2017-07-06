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

    
    if (character === "Tel-E")
    {
        

        document.getElementById("d").innerHTML = teleBold + "Here is where you can learn all about the Charevo Gene, the piece of DNA that provides those born with it their powers. Though, only one in 32,700 people are born with it.";
        max = 7;
    }
    else if (character === "Pyra")
    {
        

        document.getElementById("d").innerHTML = pyraBold + "So here's where you can learn about the Charevo Gene. If you're not into reading anything beyond this dialogue box, here's the short story behind it.";
        max = 9;
    }
    else
    {
        

        document.getElementById("d").innerHTML = beautyBold + "";
        max = 5;
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

    if (character === "Beauty")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = beautyBold + "Ah, the Charevo Gene. The gene that only a certain number of people are born with to develop superpowers. And, coincidentally, the people who are most likely to be involved in a superhero story. That's our Charevo Gene, folks!";
                break;
            case(2):
                document.getElementById("d").innerHTML = beautyBold + "But it's not just the explanation for our powers, it's also the explanation for the marks you see on our hands.";
                break;
            case(3):
                document.getElementById("d").innerHTML = beautyBold + "Well, that, and those fairies that look like us and those marks. And, I don't care what you think. I look SUPER cute as a unicorn and dragon. And, sure, the Femininity Fairy looks nice too, but that's the only positive spin I can put on that.";
                break;
            case(4):
                document.getElementById("d").innerHTML = beautyBold + "So, remember, for your powers, it's from the Charevo Trinity with the gene. That's Behavior, Mentality, and Identification. How you act, how you think, and how you're seen. In other words, how you're you. And those powers will come when you either experience life threatening danger or have parents with an active gene.";
                break;
            case(5):
                document.getElementById("d").innerHTML = beautyBold + "I'd ramble for a little longer, but I'm sure Tel-E could tell you more.";
                break;
        }

    }
    if (character === "Tel-E")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = teleBold + "Here is where you can learn all about the Charevo Gene, the piece of DNA that provides those born with it their powers. Though, only one in 32,700 people are born with it.";
                break;
            case(2):
                document.getElementById("d").innerHTML = teleBold + "That's due to our creator being born on March 27th. It was going to be one in 327,000, but he decided to make it slightly more common. Though, the women on my planet were always planned to all be born with the gene.";
                break;
            case(3):
                document.getElementById("d").innerHTML = teleBold + "For the powers, they are of course determined by the Behavior, Mentality, and Identification elements making up the Charevo Trinity. However, that trinity is based not on the combination of those elements, but on the permutation.";
                break;
            case(4):
                document.getElementById("d").innerHTML = teleBold + "Two people could have the same three elements, but if the ones representing their Behavior, Mentality, or Identification don't match up, they have two different sets of powers. Of course, no two trinities can ever be the same.";
                break;
            case(5):
                document.getElementById("d").innerHTML = teleBold + "That goes for the Charevo Emblem as well. When you see the marks on our hands, there are symbols representing each Charevo Element. In accordance with the Trinity, the Behavior Element is on the lower left, Mentality is on the lower right, and Identification is on top.";
                break;
            case(6):
                document.getElementById("d").innerHTML = teleBold + "Another thing to note is the Charevo Fairies. Not only do they resemble both the person and the symbols from the Charevo Emblem, but they will provide guidance to the person while sounding like the element they represent.";
                break;
            case(7):
                document.getElementById("d").innerHTML = teleBold + "However, this guidance will depend on whether the person is good or not. If they are, the Charevo Fairies will give good advice. If not, guidance towards evil is given. According to the Charevo Journal, it is believed these fairies are controlled by two conflicting external forces.";
                break;
        }

    }
    if (character === "Pyra")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = pyraBold + "So here's where you can learn about the Charevo Gene. If you're not into reading anything beyond this dialogue box, here's the short story behind it.";
                break;
            case(2):
                document.getElementById("d").innerHTML = pyraBold + "If you're one of the 32,700 people born with it and you have a parent with powers, you'll get powers based on who you are, specifically how you act, think, and are seen by others.";
                break;
            case(3):
                document.getElementById("d").innerHTML = pyraBold + "But if you have powerless parents, you'll only get abilities if some external event threatens your life. And the gene won't just activate and give you your powers, it'll save your life.";
                break;
            case(4):
                document.getElementById("d").innerHTML = pyraBold + "Some fatal wound, poison, drowning, electric shock, anything that could kill you where you're not supposed to die. That's what triggers the gene to save you, but nothing else like internal stuff does it. Sorry, guys. The Charevo Gene's not a cure for disease.";
                break;
            case(5):
                document.getElementById("d").innerHTML = pyraBold + "Then there's the Charevo Emblem, which represents the Charevo Trinity for someone that gets printed on their hands. Now, for anyone who's good, the emblem is permanently printed on us, but if you're bad, you have the option of hiding it.";
                break;
            case(6):
                document.getElementById("d").innerHTML = pyraBold + "If you ask our creator, he'll say this is to symbolize the deception that villains will use on others. But that's a load of lies, frankly. The ability to hide a Charevo Emblem is just a way of not tipping off who has powers and who could be a potential villain.";
                break;
            case(7):
                document.getElementById("d").innerHTML = pyraBold + "It's like how the Charevo Gene was originally conceived. Our creator didn't have it to start with. He just made something up to justify the ridiculous powers he came up for with certain villains.";
                break;
            case(8):
                document.getElementById("d").innerHTML = pyraBold + "Speaking of which, we also have the Charevo Fairies, three things that represent your Charevo Elements. They basically give advice to a person based on their elements when they need it. Our creator basically wanted our Charevo Genes to do something more than give powers, so he just ripped off some cartoon where the hero gets cryptic advice from a book based on a given scenario.";
                break;
            case(9):
                document.getElementById("d").innerHTML = pyraBold + "So to mask this existing idea as his own, he just looked at the Charevo Elements and made these sprites that look half like the person and half the element's symbol. He also thought of the 'super original' idea of these Charevo Fairies being used by the villains too where they're given negative guidance as opposed to the cliched positive wisdom. You're welcome for being honest, by the way.";
                break;    
        }
    }

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