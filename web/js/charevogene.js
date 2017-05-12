/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {

    character = sessionStorage.getItem("SessionCharacter");
    //$(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    $(".geneinfo").css({"width": (window.screen.width * .80)});
    $(".characterheader").css({"width": (window.screen.width * .80)});

    if (window.screen.width > 500)
    {
        $("#paddeddiv").css({"height": (window.screen.height * 1.00)});
    }
    else
    {
        $("#paddeddiv").css({"height": (window.screen.height * 2.00), "margin-bottom": (window.screen.height * 1.5)});
    }

    $(window).resize(function () {
        $(".geneinfo").css({"width": (window.screen.width * .80)});
        $(".characterheader").css({"width": (window.screen.width * .80)});

        //if(window.screen.width > 900)
        if (window.screen.width > 500)
        {
            $("#paddeddiv").css({"height": (window.screen.height * 1.00)});
        }
        else
        {
            $("#paddeddiv").css({"height": (window.screen.height * 2.00), "margin-bottom": (window.screen.height * 1.5)});
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
        max = 7;
    }


});

function next() {
    if (dialogue < max)
    {
        dialogue++;
        DialogueChangeMenu();
        document.getElementById("prev").setAttribute("style", "opacity: 1");
    }
    if (dialogue === max)
        document.getElementById("next").setAttribute("style", "opacity: .6");
}

function prev() {
    if (dialogue > 1)
    {
        dialogue--;
        DialogueChangeMenu();
        document.getElementById("next").setAttribute("style", "opacity: 1");
    }
    if (dialogue === 1)
        document.getElementById("prev").setAttribute("style", "opacity: .6");
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
                document.getElementById("d").innerHTML = pyraBold + "It's like how the Charevo Gene was originally conceived. Our creator didn't have it to start with. He just made something up to justify the ridiculous powers he came up for with certain villains. You're welcome for being honest, by the way.";
                break;
        }
    }

}