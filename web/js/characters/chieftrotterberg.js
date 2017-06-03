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

    if (character === "Beauty")
    {
        document.getElementById("d").innerHTML = beautyBold + "Hey! It's my character page! Okay. So there's a lot to cover, so let's start with the top left. If you haven't visited the Charevo Gene page, check it out and come back so I can explain this.";
        max = 5;
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

    
    if (character === "Tel-E")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = teleBold + "Here we have the page for our lead character, Beauty. The astute site surfer might notice the mark on her hand, which you can see on the top-left. That is her Charevo Emblem.";
                break;
            case(2):
                document.getElementById("d").innerHTML = teleBold + "Since her Charevo Trinity is Fiction, Imagination, and Femininity, the corresponding symbols are a unicorn, dragon, and princess as they are the symbols that represent her elements.";
                break;
            case(3):
                document.getElementById("d").innerHTML = teleBold + "To the right, you can see these symbols merged with Beauty herself, acting as the manifestation of her Charevo Fairies. Should you click on them, you can change the guidance shown from each of them in the blue section. Since Beauty is good, her fairies always provide good advice, hence I recommend the clicks.";
                break;
            case(4):
                document.getElementById("d").innerHTML = teleBold + "And below, you'll find Beauty's profile that includes her powers and below that is a taste of her background. Unlike everyone else in the Neo Brigade, Beauty doesn't have much experience in fighting villains. Actually, from a certain perspective . . . never mind. Let's not spoil anything.";
                break;
            case(5):
                document.getElementById("d").innerHTML = teleBold + "It's worth noting that while Beauty is the lead character in our stories, she was only the second character conceived by our creator for our world. Again, I won't give anything away, but that character also influenced the powers she has.";
                break;
        }

    }
    else if (character === "Pyra")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = pyraBold + "So here's the page for my friend, Beauty. On the top left, we have her Charevo Emblem. That's a unicorn, dragon, and princess for the Charevo Trinity of Fiction, Imagination, and Femininity for those of you keeping a record of this.";
                break;
            case(2):
                document.getElementById("d").innerHTML = pyraBold + "Below that, we have the guidance from her Charevo Fairies. Since the guidance is based on the elements the fairies represent, well, you get the idea.";
                break;
            case(3):
                document.getElementById("d").innerHTML = pyraBold + "If you'd like to see how many times you can go through the randomly selected guidance until you see it all, just keep clicking on the half beauty half unicorn, dragon, and princess to change the advice you see.";
                break;
            case(4):
                document.getElementById("d").innerHTML = pyraBold + "Below that, you can see Beauty's powers and bio. I'd talk more about her, but, since this is the first character page and probably the first one you visited, I feel like I have to apologize for our creator's poor art skills.";
                break;
            case(5):
                document.getElementById("d").innerHTML = pyraBold + "Believe me, NOBODY was consulted ahead of time for those Charevo Fairies. Frankly, I'm surprised he made us look as passable as we are. I guess compared to the other characters' Charevo Fairies, Beauty's looks okay. I'll definitely have to apologize for him A LOT along the way though.";
                break;
            case(6):
                document.getElementById("d").innerHTML = pyraBold + "I mean, he just copied some generic clip art for most of the symbols to the Charevo Emblems you'll see, so don't think he was drawing based on his imagination for any of those.";
                break;
            case(7):
                document.getElementById("d").innerHTML = pyraBold + "Seriously, just look at how lazy he was when he drew our left and right facing images. I'm surprised he didn't just leave my scar on the opposite side when he used the flip tool on me and a bunch of other asymmetrical characters. Anyway, uh, yeah. This is Beauty. She's my friend. She's pretty nice and cool. Thanks for visiting.";
                break;
        }
    }
    else
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = beautyBold + "Hey! It's my character page! Okay. So there's a lot to cover, so let's start with the top left. If you haven't visited the Charevo Gene page, check it out and come back so I can explain this.";
                break;
            case(2):
                document.getElementById("d").innerHTML = beautyBold + "Anyway, that's my Charevo Emblem. Since I have the Charevo Trinity of Fiction, Imagination, and Femininity, that's a unicorn, a dragon, and a princess. If you look closely, you can see the emblem on my hand.";
                break;
            case(3):
                document.getElementById("d").innerHTML = beautyBold + "To the right, you'll see my Charevo Fairies. Since they're half me half the element they represent, that explains those appearances. But the Charevo Fairies also give advice based on their elements, and said advice can be seen below me. If you click on a Charevo Fairy, the corresponding element's guidance will change.";
                break;
            case(4):
                document.getElementById("d").innerHTML = beautyBold + "You can also see a description of my powers and bio. And if you noticed a name in that bio you didn't recognize from those novellas, he'll be coming up in a future story. God, I love setting stuff up!";
                break;
            case(5):
                document.getElementById("d").innerHTML = beautyBold + "I will say if you've seen the powers I have, you'll notice the hair powers, wardrobe ability, and female character transformations. Fun fact: That was originally all it was. But when our creator wanted to give me more limits to my power, he made it so I have to always smile when people look at me. So thank you, creator and element of Femininity.";
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
        $("#bio").css({"width": (window.screen.width * .85), "margin-top": (window.screen.height * .3), "left": (window.screen.width * .1)});
        $(".characterinfo").css({"width": (window.screen.width * .85)});
        
        
        bioinfoWidth = (window.screen.width * .85);
        biotableMarginTop = (window.screen.height * .1);
        bioguidancetableLeft = (window.screen.width * .1);


        if (window.screen.width > 1800)
        {

            $("#character").css({"left": (window.screen.width * .35), "width": (window.screen.width * .25), "height": (window.screen.height * .45)});

            
            characterLeft = (window.screen.width * .35);
            characterWidth = (window.screen.width * .25);
            characterHeight = (window.screen.height * .45);
            
            
        }
        else
        {
            
            $("#character").css({"left": (window.screen.width * .35), "width": (window.screen.width * .35), "height": (window.screen.height * .45)});
            
            
            characterLeft = (window.screen.width * .35);
            characterWidth = (window.screen.width * .35);
            characterHeight = (window.screen.height * .45);
            
        }
        $("section").css({"height": (window.screen.height * 1.25)});
        
        sectionHeight = (window.screen.height * 1.25);
    }
    else if (window.screen.width > 1000 && window.screen.height > 1000)
    {
        $("#bio").css({"width": (window.screen.width * .85), "left": (window.screen.width * .1)});
        $("#bio").css({"margin-top": (window.screen.height * .9)});
        $(".characterinfo").css({"width": (window.screen.width * .85)});
        
        $("#character").css({"left": (window.screen.width * .35), "width": (window.screen.width * .35), "height": (window.screen.height * .45)});
        
        bioinfoWidth = (window.screen.width * .85);
        bioMarginTop = (window.screen.height * .6);
        bioguidancetableLeft = (window.screen.width * .1);
        
        
        characterLeftWidth = (window.screen.width * .35);
        characterHeight = (window.screen.height * .45);
        
        
        if (window.screen.width > 1200 && window.screen.height > 1000)
        {
            $("section").css({"height": (window.screen.height * 1.85)});
            sectionHeight = (window.screen.height * 1.85);
        }
        else
        {
            $("section").css({"height": (window.screen.height * 1.55)});
            sectionHeight = (window.screen.height * 1.55);
        }
    }
    else if (window.screen.width > 900)
    {
        $("#bio").css({"width": (window.screen.width * .85), "left": (window.screen.width * .1)});
        $("#bio").css({"margin-top": (window.screen.height * .6)});
        $(".characterinfo").css({"width": (window.screen.width * .85)});
        
        bioinfoWidth = (window.screen.width * .85);
        bioMarginTop = (window.screen.height * .6);
        bioguidancetableLeft = (window.screen.width * .1);
        
       
    }
    else if (window.screen.height < 600 && window.screen.width < 600 && window.screen.height < window.screen.width)
    {
        $("#bio").css({"width": (window.screen.width * .95), "left": (window.screen.width * .01)});
        $("#bio").css({"margin-top": (window.screen.height * .6)});
        $(".characterinfo").css({"width": (window.screen.width * .85)});
        $("#charactertable").css({"width": (window.screen.width * .9), "margin-top": "170px", "left": (window.screen.width * .01)});

        $("#character").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .75)});
        $("section").css({"height": (window.screen.height * 8.95)});
    
        bioWidth = (window.screen.width * .95);
        bioguidancetableLeft = (window.screen.width * .01);
        bioMarginTop = (window.screen.height * .6);
        infoWidth = (window.screen.width * .85);
        
        
        
        characterLeft = (window.screen.width * .3);
        characterWidth = (window.screen.width * .45);
        characterHeight = (window.screen.height * .75);
        
        sectionHeight = (window.screen.height * 8.95);
    }
    else if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("#bio").css({"width": (window.screen.width * .95), "margin-top": "100px", "left": (window.screen.width * .01)});
        $("#bio").css({"margin-top": (window.screen.height * .6)});
        $(".characterinfo").css({"width": (window.screen.width * .85)});
        
        $("#character").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .75)});
        $("section").css({"height": (window.screen.height * 5.95)});
        
        bioWidth = (window.screen.width * .95);
        bioguidancetableLeft = (window.screen.width * .01);
        bioMarginTop = (window.screen.height * .6);
        infoWidth = (window.screen.width * .85);
        
        
        
        characterLeft = (window.screen.width * .3);
        characterWidth = (window.screen.width * .45);
        characterHeight = (window.screen.height * .75);
        
        sectionHeight = (window.screen.height * 5.95);
    }
    else if (window.screen.width >= 600)
    {
        $("#bio").css({"width": (window.screen.width * .95), "margin-top": "160px", "left": (window.screen.width * .01)});
        $("#bio").css({"margin-top": (window.screen.height * .6)});
        $(".characterinfo").css({"width": (window.screen.width * .95)});
        
        $("#character").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .55)});
        $("section").css({"height": (window.screen.height * 1.95)});
        
        bioinfoWidth = (window.screen.width * .95);
        bioguidancetableLeft = (window.screen.width * .01);
        bioMarginTop = (window.screen.height * .6);
        //infoWidth = (window.screen.width * .85);
        
       
        
        characterLeft = (window.screen.width * .3);
        characterWidth = (window.screen.width * .45);
        characterHeight = (window.screen.height * .55);
        
        
        sectionHeight = (window.screen.height * 1.95);
    }
    else if (window.screen.width > 400)
    {
        $("#bio").css({"width": (window.screen.width * .95), "left": (window.screen.width * .01)});
        $("#bio").css({"margin-top": (window.screen.height * .6)});
        $(".characterinfo").css({"width": (window.screen.width * .95)});
        
        $("#character").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .55)});
         $("section").css({"height": (window.screen.height * 3.55)});
        
        bioinfoWidth = (window.screen.width * .95);
        bioguidancetableLeft = (window.screen.width * .01);
        bioMarginTop = (window.screen.height * .6);
        //infoWidth = (window.screen.width * .85);
        
        
        
        characterLeft = (window.screen.width * .3);
        characterWidth = (window.screen.width * .45);
        characterHeight = (window.screen.height * .55);
        
        
        sectionHeight = (window.screen.height * 3.55);
    }
    else if (window.screen.height < 600)
    {
        $("#bio").css({"width": (window.screen.width * .95), "left": (window.screen.width * .01)});
        $("#bio").css({"margin-top": (window.screen.height * .6)});
        $(".characterinfo").css({"width": (window.screen.width * .95)});
        
        $("#character").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .55)});
        $("section").css({"height": (window.screen.height * 5.55)});
        
        bioinfoWidth = (window.screen.width * .95);
        bioguidancetableLeft = (window.screen.width * .01);
        bioMarginTop = (window.screen.height * .6);
        //infoWidth = (window.screen.width * .85);
        
       
        
        characterLeft = (window.screen.width * .3);
        characterWidth = (window.screen.width * .45);
        characterHeight = (window.screen.height * .55);
        
        
        sectionHeight = (window.screen.height * 5.55);
    }
    else
    {
        $("#bio").css({"width": (window.screen.width * .95), "left": (window.screen.width * .01)});
        $("#bio").css({"margin-top": (window.screen.height * .6)});
        $(".characterinfo").css({"width": (window.screen.width * .95)});
        
        $("#character").css({"left": (window.screen.width * .3), "width": (window.screen.width * .45), "height": (window.screen.height * .55)});
        $("section").css({"height": (window.screen.height * 3.55)});
        
        bioinfoWidth = (window.screen.width * .95);
        bioguidancetableLeft = (window.screen.width * .01);
        bioMarginTop = (window.screen.height * .6);
        //infoWidth = (window.screen.width * .85);
        
        
        characterLeft = (window.screen.width * .3);
        characterWidth = (window.screen.width * .45);
        characterHeight = (window.screen.height * .55);
        
        sectionHeight = (window.screen.height * 3.55);
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
        $("#bio").css({"margin-top": bioMarginTop});
        $(".characterinfo").css({"width": bioinfoWidth});
        


        if (window.screen.width > 1800)
        {
            
            $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
            
        }
        else
        {
            
            $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
            
        }
        $("section").css({"height": sectionHeight});

    }
    else if (window.screen.width > 1000 && window.screen.height > 1000)
    {
        $("#bio").css({"width": bioinfoWidth, "left": bioguidancetableLeft});
        $("#bio").css({"margin-top": bioMarginTop});
        $(".characterinfo").css({"width": bioinfoWidth});
        
        $("#character").css({"left": characterLeftWidth, "width": characterLeftWidth, "height": characterHeight});
        
        
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
        $("#bio").css({"margin-top": bioMarginTop});
        $(".characterinfo").css({"width": bioinfoWidth});
        
    }
    else if (window.screen.height < 600 && window.screen.width < 600 && window.screen.height < window.screen.width)
    {
        $("#bio").css({"width": bioWidth, "margin-top": "100px", "left": bioguidancetableLeft});
        $("#bio").css({"margin-top": bioMarginTop});
        $(".characterinfo").css({"width": infoWidth});
        
        $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
        $("section").css({"height": sectionHeight});
    
        
    }
    else if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("#bio").css({"width": bioWidth, "margin-top": "100px", "left": bioguidancetableLeft});
        $("#bio").css({"margin-top": bioMarginTop});
        $(".characterinfo").css({"width": infoWidth});
        
        $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
        $("section").css({"height": sectionHeight});
        
       
    }
    else if (window.screen.width >= 600)
    {
        $("#bio").css({"width": bioinfoWidth, "margin-top": "160px", "left": bioguidancetableLeft});
        $("#bio").css({"margin-top": bioMarginTop});
        $(".characterinfo").css({"width": bioinfoWidth});
        
        $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
        $("section").css({"height": sectionHeight});
        
    }
    else if (window.screen.width > 400)
    {
        $("#bio").css({"width": bioinfoWidth, "left": bioguidancetableLeft});
        $("#bio").css({"margin-top": bioMarginTop});
        $(".characterinfo").css({"width": bioinfoWidth});
        
        $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
        $("section").css({"height": sectionHeight});

    }
    else if (window.screen.height < 600)
    {     
        $("#bio").css({"width": bioinfoWidth, "left": bioguidancetableLeft});
        $("#bio").css({"margin-top": bioMarginTop});
        $(".characterinfo").css({"width": bioinfoWidth});
        
        $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
        $("section").css({"height": sectionHeight});
    }
    else
    {
        $("#bio").css({"width": bioinfoWidth, "left": bioguidancetableLeft});
        $("#bio").css({"margin-top": bioMarginTop});
        $(".characterinfo").css({"width": bioinfoWidth});
        
        $("#character").css({"left": characterLeft, "width": characterWidth, "height": characterHeight});
        $("section").css({"height": sectionHeight});

    }
}
