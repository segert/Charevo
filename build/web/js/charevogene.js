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
        sessionStorage.setItem("firstPage", "the Charevo Gene page");
        sessionStorage.setItem("memory", "the Charevo Gene page");
        sessionStorage.setItem("currentPage", "the Charevo Gene page");
    }
    else
    {
        if(sessionStorage.getItem("currentPage") !== "the Charevo Gene page")
        {
            sessionStorage.setItem("memory", sessionStorage.getItem("memory").toString() + ", the Charevo Gene page");
        }
        sessionStorage.setItem("currentPage", "the Charevo Gene page");
        
        
    }

    
    var cyhackBold = "Cyhack: ";
    cyhackBold = cyhackBold.bold();

    if (sessionStorage.getItem("Cyhack") === "true")
    {
        document.getElementById("emblem").src = "images/Emblems/cyhackemblem.png";
        document.getElementById("emblem").alt = "Cyhack Emblem Placeholder";

        document.getElementById("behaviorfairy").src = "images/Fairies/cyhackintelligencefairy.png";
        document.getElementById("behaviorfairy").alt = "Cyhack Intelligence Fairy Placeholder";

        document.getElementById("mentalityfairy").src = "images/Fairies/cyhackarrogancefairy.png";
        document.getElementById("mentalityfairy").alt = "Cyhack Arrogance Fairy Placeholder";

        document.getElementById("identificationfairy").src = "images/Fairies/cyhacktechnologyfairy.png";
        document.getElementById("identificationfairy").alt = "Cyhack Technology Fairy Placeholder";
        
        document.getElementById("d").innerHTML = cyhackBold + "Alright. I'll explain this so even you people can understand. We in this world have our powers. We also have DNA called the Charevo Gene. This gene GIVES US our powers. You with me so far?";
                
    }
    else if (character === "Tel-E")
    {
        document.getElementById("emblem").src = "images/Emblems/tel-eemblem.png";
        document.getElementById("emblem").alt = "Tel-E Emblem Placeholder";

        document.getElementById("behaviorfairy").src = "images/Fairies/tel-eoptimismfairy.png";
        document.getElementById("behaviorfairy").alt = "Tel-E Optimism Fairy Placeholder";

        document.getElementById("mentalityfairy").src = "images/Fairies/tel-eknowledgefairy.png";
        document.getElementById("mentalityfairy").alt = "Tel-E Knowledge Fairy Placeholder";

        document.getElementById("identificationfairy").src = "images/Fairies/tel-ethoughtfairy.png";
        document.getElementById("identificationfairy").alt = "Tel-E Thought Fairy Placeholder";

        document.getElementById("d").innerHTML = teleBold + "Here is where you can learn all about the Charevo Gene, the piece of DNA that provides those born with it their powers. Though, only one in 32,700 people are born with it.";
        max = 7;
    }
    else if (character === "Pyra")
    {
        document.getElementById("emblem").src = "images/Emblems/pyraemblem.png";
        document.getElementById("emblem").alt = "Pyra Emblem Placeholder";

        document.getElementById("behaviorfairy").src = "images/Fairies/pyratolerancefairy.png";
        document.getElementById("behaviorfairy").alt = "Pyra Tolerance Fairy Placeholder";

        document.getElementById("mentalityfairy").src = "images/Fairies/pyraangerfairy.png";
        document.getElementById("mentalityfairy").alt = "Pyra Anger Fairy Placeholder";

        document.getElementById("identificationfairy").src = "images/Fairies/pyraindifferencefairy.png";
        document.getElementById("identificationfairy").alt = "Pyra Indifference Fairy Placeholder";

        document.getElementById("d").innerHTML = pyraBold + "So here's where you can learn about the Charevo Gene. If you're not into reading anything beyond this dialogue box, here's the short story behind it.";
        max = 9;
    }
    else
    {
        document.getElementById("emblem").src = "images/Emblems/beautyemblem.png";
        document.getElementById("emblem").alt = "Beauty Emblem Placeholder";

        document.getElementById("behaviorfairy").src = "images/Fairies/beautyfictionfairy.png";
        document.getElementById("behaviorfairy").alt = "Beauty Fiction Fairy Placeholder";

        document.getElementById("mentalityfairy").src = "images/Fairies/beautyimaginationfairy.png";
        document.getElementById("mentalityfairy").alt = "Beauty Imagination Fairy Placeholder";

        document.getElementById("identificationfairy").src = "images/Fairies/beautyfemininityfairy.png";
        document.getElementById("identificationfairy").alt = "Beauty Femininity Fairy Placeholder";

        document.getElementById("d").innerHTML = beautyBold + "Ah, the Charevo Gene. The gene that only a certain number of people are born with to develop superpowers. And, coincidentally, the people who are most likely to be involved in a superhero story. That's our Charevo Gene, folks!";
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
    
    var cyhackBold = "Cyhack: ";
    cyhackBold = cyhackBold.bold();

    if (sessionStorage.getItem("Cyhack") === "true")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = cyhackBold + "Alright. I'll explain this so even you people can understand. We in this world have our powers. We also have DNA called the Charevo Gene. This gene GIVES US our powers. You with me so far?";
                break;
            case(2):
                document.getElementById("d").innerHTML = cyhackBold + "If you're like the Cyhack, you're probably an absolute treasure, and you're also one of 32,700 people who are born with the Charevo Gene. Blah blah blah. Behavior, Mentality, and Identification Elements representing only you, life threatening incident or inheritence, boom, you get your powers.";
                break;
            case(3):
                document.getElementById("d").innerHTML = cyhackBold + "Then there's the Charevo Fairies that tell you what to do based on their element. If you're good, they tell you to do good things. If they're bad, they tell you to hack this site and have all the control you want over everything. I think I picked the right option, clearly.";
                break;
            case(4):
                document.getElementById("d").innerHTML = cyhackBold + "There's all these legends behind what the Charevo Gene is and what more power it can create, but what do I care? I can be smarter than I already am and merge technology into me. I got everything I need. Fourize, on the other hand . . . Look, he's a little less fun when he's all obsessive. That's all I'm sayin'.";
                break; 
        }

    }
    else if (character === "Tel-E")
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
    else if (character === "Pyra")
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
    else
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

}

function checkResolution(){
      //$(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    $(".geneinfo").css({"width": (window.screen.width * .80)});
    $(".characterheader").css({"width": (window.screen.width * .80)});

    if (window.screen.height < 500 && window.screen.width < 500 && window.screen.height < window.screen.width)
    {
        $("#paddeddiv").css({"height": (window.screen.height * 2.00), "margin-bottom": (window.screen.height * 1.5)});
        paddedHeight = (window.screen.height * 2.00);
        paddedMargin = (window.screen.height * 1.5);
    }
    else if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("#paddeddiv").css({"height": (window.screen.height * 1.00), "margin-bottom": (window.screen.height * 1.5)});
        paddedHeight = (window.screen.height * 1.00);
        paddedMargin = (window.screen.height * 1.5);
    }
    else if (window.screen.width > 500)
    {
        $("#paddeddiv").css({"height": (window.screen.height * 1.00)});
        paddedHeight = (window.screen.height * 1.00);
    }
    else
    {
        $("#paddeddiv").css({"height": (window.screen.height * 2.00), "margin-bottom": (window.screen.height * 1.5)});
        paddedHeight = (window.screen.height * 2.00);
        paddedMargin = (window.screen.height * 1.5);
    }
}

function resizeResolution(){
     //$(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    $(".geneinfo").css({"width": (window.screen.width * .80)});
    $(".characterheader").css({"width": (window.screen.width * .80)});

    if (window.screen.height < 500 && window.screen.width < 500 && window.screen.height < window.screen.width)
    {
        $("#paddeddiv").css({"height": paddedHeight, "margin-bottom": paddedMargin});
    }
    else if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("#paddeddiv").css({"height": paddedHeight, "margin-bottom": paddedMargin});
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