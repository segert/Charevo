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

    var content = $("#storydisplay").html();
    var lines = content.split("\n");
    var i = 0;
    for (i = 0; i < lines.length; i++)
    {
        lines[i] = "&emsp;&emsp;&emsp;" + lines[i] + "<br>";
    }

    var text = "";
    for (i = 0; i < lines.length; i++)
    {
        text = text + lines[i];
    }

    $("#storydisplay").html(text);


    dialogue = 1;
    max = 0;
    selectedDrop = 0;
    riffDialogue = 0;
    commentaryDialogue = 0;

    if (sessionStorage.getItem("firstPage") === null)
    {
        sessionStorage.setItem("firstPage", "the Charevo Gene page");
        sessionStorage.setItem("memory", "the Charevo Gene page");
        sessionStorage.setItem("currentPage", "the Charevo Gene page");
    }
    else
    {
        if (sessionStorage.getItem("currentPage") !== "the Charevo Gene page")
        {
            sessionStorage.setItem("memory", sessionStorage.getItem("memory").toString() + ", the Charevo Gene page");
        }
        sessionStorage.setItem("currentPage", "the Charevo Gene page");


    }


    beautyBold = "Beauty: ";
    beautyBold = beautyBold.bold();
    teleBold = "Tel-E: ";
    teleBold = teleBold.bold();
    pyraBold = "Pyra: ";
    pyraBold = pyraBold.bold();
    raceBold = "Race: ";
    raceBold = raceBold.bold();
    bendyBold = "Bendy: ";
    bendyBold = bendyBold.bold();
    natorBold = "Nator: ";
    natorBold = natorBold.bold();

    chiefBold = "Chief: ";
    chiefBold = chiefBold.bold();

    fourizeBold = "Fourize: ";
    fourizeBold = fourizeBold.bold();
    coldMinerBold = "Cold Miner: ";
    coldMinerBold = coldMinerBold.bold();

    cyhackBold = "Cyhack: ";
    cyhackBold = cyhackBold.bold();

    if (sessionStorage.getItem("Cyhack") === "true")
    {
        max = 4;
    }
    else if (character === "Tel-E")
    {
        max = 7;
    }
    else if (character === "Pyra")
    {
        max = 9;
    }
    else
    {
        max = 5;
    }

    DialogueChangeMenu();


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


    switch (selectedDrop)
    {
        case(0):
            defaultDialogue();
            break;

        case(1):
            commentaryDialogueFunc();
            break;

        case(2):
            riffingDialogue();
            break;
    }

}

function defaultDialogue()
{


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

function commentaryDialogueFunc()
{


    switch (commentaryDialogue)
    {
        case(0):
            max = 9;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Hello, everybody! And welcome to the textual character commentary for A Minor Cold (that leads to a colossal failure), the first of the five Beauty Meets the Neo Brigade novellas. I'm Ellie Bellavitz. I'm the title hero, Beauty.");
                    break;
                case(2):
                    $("#d").html("<b>Race: </b>This is Race. Leader of the Neo Brigade. Uh, it looks like I'm the main team member in this story.");
                    break;
                case(3):
                    $("#d").html("<b>Tel-E: </b>This is Tel-E, Neo Brigade member and Knowlgian native.");
                    break;
                case(4):
                    $("#d").html("<b>Bendy: </b>This is Bendy. Neo Brigade member.");
                    break;
                case(5):
                    $("#d").html("<b>Pyra: </b>This is Pyra. Same as Bendy.");
                    break;
                case(6):
                    $("#d").html("<b>Nator: </b>This is Nator. Same as Pyra and above.");
                    break;
                case(7):
                    $("#d").html("<b>Fourize: </b>Greetings, everyone. This is Fourize, leader of the J Gang, rival of Race, and your opening villain.");
                    break;
                case(8):
                    $("#d").html("<b>Cold Miner: </b>Alright. That's enough outta you, kid. This is Cold Miner, leader of the Chill-dren, and the main villain of this story.");
                    break;
                case(9):
                    $("#d").html("<b>Beauty: </b>And we'll be giving our thoughts and comments on this story as you read and click on the highlighted sections. So let's get right to it.");
                    break;
            }
            break;
        case(-1):
            max = 3;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>So here we go. Me as the new girl in Minor City. You can see my desire for friends being quickly established. Obviously, this is a superhero story, but it's also a teen story. I think the friend angle is a bit more relatable.");
                    break;
                case(2):
                    $("#d").html("<b>Tel-E: </b>For anyone reading, they'll notice friendship being a recurring theme in these novellas. Our creator thought focusing on someone with no friends was a good way to begin.");
                    break;
                case(3):
                    $("#d").html("<b>Fourize: </b>Pff. Friendship is overrated. Just focus on the super powered destruction. What do you think anyone's reading this for?");
                    break;
                case(4):
                    $("#d").html("<b>Nator: </b>Fourize, I know you're in this, but I don't think you're our target audience.");
                    break;
                case(5):
                    $("#d").html("<b>Bendy: </b>Hey, is anyone gonna mention where the friendship theme came from? 'Cause I really want people making fun of our creator as much as possible.");
                    break;
                case(6):
                    $("#d").html("<b>Beauty: </b>Well, actually, our creator didn't write us with much of the friendship theme in place originally. But then he incorporated the friendship element after becoming a fan of My Little Pony: Friendship is Magic, so he took what he learned from it with its lessons and character relationship and applied it to us.");
                    break;
                case(7):
                    $("#d").html("<b>Bendy: </b>Ha! Our creator likes My Little Pony? Talk about lame!");
                    break;
                case(8):
                    $("#d").html("<b>Pyra: </b>Sure, Bendy. Our creator liking a show that helped him with writing female characters who value friendship even though he is neither a girl nor someone with friends is the DUMBEST thing he could do.");
                    break;
                case(9):
                    $("#d").html("<b>Bendy: </b>Uh . . . good for him then.");
                    break;
            }
            break;
        case(-2):
            max = 6;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Here you can see me talk about my powers where I can use my hair as a weapon and transform into fictional characters. Like I talked about, my friend, Tyler Vitti, has that second one for his own powers too.");
                    break;
                case(2):
                    $("#d").html("<b>Tel-E: </b>And just where did the idea for those powers come from, Beauty?");
                    break;
                case(3):
                    $("#d").html("<b>Beauty: </b>Well, when our creator was a little kid, he would fantasize about having the abilities of different characters, but he couldn't think of which one in particular he would want if he actually had powers. So he decided if he had powers, it would be to turn into any character with access to virtually any power.");
                    break;
                case(4):
                    $("#d").html("<b>Fourize: </b>You've warned of spoilers for the five novellas. Let's just get right to it. Your friend is a villain working for me now. Our creator imagined himself with those powers when he imagined himself as a supervillain. He only came up with you when he decided to think of a hero for himself to fight.");
                    break;
                case(5):
                    $("#d").html("<b>Pyra: </b>And that's when our creator said \"Gee, what's the opposite of a nerdy kid nobody likes? I know. How 'bout a pretty blonde girl everyone likes?\". Of course, that was before Beauty became much less cool in everyone's eyes.");
                    break;
                case(6):
                    $("#d").html("<b>Beauty: </b>Ugh. The less said about certain spoilers, the better.");
                    break;
            }
            break;
        case(-3):
            max = 12;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>So the Neo Newbie has so much power to choose from, she has to keep track of them in a book? Are you serious?");
                    break;
                case(2):
                    $("#d").html("<b>Beauty: </b>Hey, I don't have Nator's super memory. How else do you expect me to keep track of my transformations?");
                    break;
                case(3):
                    $("#d").html("<b>Pyra: </b>Also, she doesn't have such minimal power that she could easily memorize like some people.");
                    break;
                case(4):
                    $("#d").html("<b>Fourize: </b>Quiet, you!");
                    break;
                case(5):
                    $("#d").html("<b>Beauty: </b>One thing you didn't see with the Character Manual is how I made it with my hair, allowing it to do some unusual things, which includes creating holograms of my character transformations if you tap on their names. Just a little extra something to make the book stand out a bit.");
                    break;
                case(6):
                    $("#d").html("<b>Cold Miner: </b>So in terms of needless additions to literature, how does it rank compared to this commentary we're doing for a novella?");
                    break;
                case(7):
                    $("#d").html("<b>Beauty: </b>Oh. I should also point out. The Character Manual reference guide is actually based on . . .");
                    break;
                case(8):
                    $("#d").html("<b>Nator: </b>Oh, don't tell me.");
                    break;
                case(9):
                    $("#d").html("<b>Beauty: </b>When our creator fantasized about having the power to turn into characters as a kid, he wrote a bunch of characters and their abilities in a journal with the thinking that he'd need this as reference for when he got powers.");
                    break; 
                case(10):
                    $("#d").html("<b>Pyra: </b>Why do I feel like only you could have said that with a straight face?");
                    break;
                case(11):
                    $("#d").html("<b>Beauty: </b>It's true. And don't worry. You don't have to make fun of him too much. This idea of his only lasted a week, and it didn't go past two pages.");
                    break; 
                case(12):
                    $("#d").html("<b>Fourize: </b>That is literally the dumbest thing I've ever heard.");
                    break;
                case(13):
                    $("#d").html("<b>Tel-E: </b>Cut him some slack. Our creator was only a kid when he had this idea.");
                    break;
                case(14):
                    $("#d").html("<b>Cold Miner: </b>I, for one, find it to be an appropriate precursor to the terrible writing that would come from him in the future.");
                    break;   
            }
            break;
        case(-4):
            max = 3;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>Lemme guess, Beauty. You could only think about all those characters you can become, you completely forgot the part of your powers that electrocutes you if you don't smile for people.");
                    break;
                case(2):
                    $("#d").html("<b>Nator: </b>Seriously, how did you not think to smile in a city with so many people that could look at you? You must have known you'd get shocked the minute you set foot in this town looking miserable.");
                    break;    
                case(3):
                    $("#d").html("<b>Beauty: </b>Hey, with how much fun I've had with my old friend in such a small town with nothing to frown about, how much did you expect me to have that weakness on my mind? Excuse me for being in such a good mood for most of my life.");
                    break;
                case(4):
                    $("#d").html("<b>Bendy: </b>Oh, so Beauty was the exact opposite of Fourize then.");
                    break;
                case(5):
                    $("#d").html("<b>Fourize: </b>Hey! So did Race!");
                    break;
                case(6):
                    $("#d").html("<b>Race: </b>Oh man. If we had Beauty's powers, we would've never made it past middle school.");
                    break;
                case(7):
                    $("#d").html("<b>Fourize: </b>Hmph. Not the way YOU'D use them.");
                    break;
                case(8):
                    $("#d").html("<b>Beauty: </b>Well, you wouldn't have had to worry about my weakness, originally. I didn't have those electric shocks for a long time, but then our creator had some doubts over how good his characters were. So he looked up a bunch of superhero cliches and noticed none of his hero characters had some side effect to her powers to constantly struggle through. So he decided I would be that character with the smiling weakness being that side effect.");
                    break; 
                case(9):
                    $("#d").html("<b>Pyra: </b>Ahem. He did the same to me too.");
                    break;
                case(10):
                    $("#d").html("<b>Bendy: </b>Yeah yeah. We'll get to that later.");
                    break;  
            }
            break;
        case(-5):
            max = 3;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>So we've explained why you've got the weakness, but why THAT one? Electrocution through not smiling doesn't sound so obvious to me.");
                    break;
                case(2):
                    $("#d").html("<b>Beauty: </b>So, as we'll see later, I have the Charevo Identification Element of Femininity, which our creator already had as what influenced my power to not include transforming into fictional male characters. So I don't know. I guess he wanted me to not like being a girl, which is NOT what happened, by the way. I totally still prefer to be a girl.");
                    break; 
                case(3):
                    $("#d").html("<b>Nator: </b>Really? You wouldn't have that weakness and you'd still rather be a girl? You know you might have had even more power if you were a guy, right?");
                    break;
                case(4):
                    $("#d").html("<b>Pyra: </b>If Beauty was a guy, she wouldn't be the star of these stories.");
                    break;
                case(5):
                    $("#d").html("<b>Nator: </b>Oh yeah. I guess that's true.");
                    break;
                case(6):
                    $("#d").html("<b>Beauty: </b>Anyway, our creator wanted something related to femininity that could be used as some kind of side effect to my powers. He originally thought of something small like my hair only being at a certain length, but then he seemed to think a weakness would be better and thought the pressure of a girl having to smile for everyone would be more interesting. Personally, I would've been fine having to always have long hair, but what are you gonna do?");
                    break;
                case(7):
                    $("#d").html("<b>Pyra: </b>Pressure to smile? Ugh. Why is he our creator, again?");
                    break; 
                case(8):
                    $("#d").html("<b>Beauty: </b>Well, maybe not pressure. But he did notice a distinct difference in how men and women would smile. That's kinda what gave him the idea.");
                    break;
                case(9):
                    $("#d").html("<b>Fourize: </b>Hmph. The idea to create pressure on you to smile, it looks like.");
                    break; 
            }
            break; 
        case(-6):
            max = 3;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>Okay, so this scene was added in later. Remind me. Why is this here?");
                    break;
                case(2):
                    $("#d").html("<b>Pyra: </b>Well, Beauty had a little extra money on her that day and I guess she managed to bribe our creator to have someone say she looks good.");
                    break;  
                case(3):
                    $("#d").html("<b>Beauty: </b>No! Not true!");
                    break; 
                case(4):
                    $("#d").html("<b>Race: </b>Ha! Yeah, and he said he'll have a girl call her pretty and Beauty was like, \"Make it REALLY pretty!\"");
                    break;    
                case(5):
                    $("#d").html("<b>Beauty: </b>That's not true! Sure, our creator's super cheap, but I didn't bribe anyone for that scene.");
                    break;  
                case(6):
                    $("#d").html("<b>Pyra: </b>So you only paid to be the lead character then? And the scene was our creator just having nothing to do with his time?");
                    break; 
                case(7):
                    $("#d").html("<b>Tel-E: </b>No, the scene was added to establish Beauty's weakness where she has to smile or she gets electrocuted. It sets up her conflict for later when she has to face what will make her unhappy.");
                    break; 
                case(8):
                    $("#d").html("<b>Nator: </b>That conflict with her weakness, which was ALSO added later, I might add.");
                    break; 
                case(9):
                    $("#d").html("<b>Pyra: </b>We should play a game where we see how many moments in these stories were completely shoe horned in. Because there are a lot. And if it was a drinking game, it would be extremely dangerous.");
                    break; 
            }
            break;
        case(-7):
            max = 3;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>");
                    break;
            }
            break; 
        case(-8):
            max = 3;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>");
                    break;
            }
            break;   
        case(-9):
            max = 3;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>");
                    break;
            }
            break; 
        case(-10):
            max = 3;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>");
                    break;
            }
            break;  
        case(-11):
            max = 3;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>");
                    break;
            }
            break;  
        case(-12):
            max = 3;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>");
                    break;
            }
            break; 
        case(-13):
            max = 3;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>");
                    break;
            }
            break; 
    }
}

function riffingDialogue()
{

    switch (riffDialogue)
    {
        case(0):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;

            switch (dialogue)
            {
                case(1):
                    if (character === "Tel-E")
                        document.getElementById("d").innerHTML = teleBold + "So I see you've chosen the Character Riffing option. Well, get ready for something different. A number of us will be reading the story with you, though we won't be taking it as seriously. If you click on the highlighted sections that have appeared, you can see us provide some humorous heckling to the material. I don't know how much riffing I'll be doing, though. I'm not much of a heckler.";
                    else if (character === "Pyra")
                        document.getElementById("d").innerHTML = pyraBold + "Ugh. So I have to read this thing too? I was already there. Ugh. Fine. I'll have to round everyone up for this too. But if I'm gonna have to read this, I'm doing it my way. Me and everyone else will be making our own remarks if you click on the highlighted parts.";
                    else
                        document.getElementById("d").innerHTML = beautyBold + "Alright then. If you want people making fun of this story, we're all gonna read with you and crack a few jokes if you click on the highlighted parts. None of us ever worked for MST3K, but we'll do our best.";
                    break;
            }
            break;
        case(1):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>Hey, cool! She can transform into Chris Farley too.");
                    break;
            }
            break;

        case(2):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>Okay, but you have to say it with a Scottish accent.");
                    break;
            }
            break;
        case(3):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Who can turn the world on with her smile? Who can take a nothing day, and suddenly make it all seem worth while? Well, it's you girl and you should know it.");
                    break;
            }
            break;
        case(4):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>Wait! Superpowers? Did I read that right?");
                    break;
            }
            break;
        case(5):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>Oh. Good. I need to read faster.");
                    break;
            }
            break;
        case(6):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>Gee, way to cut an entertaining fight outta the top of the story.");
                    break;
                case(2):
                    $("#d").html("<b>Fourize: And you chose to open it with me as the first villain? Oh, you shouldn't have.</b>");
                    break;
            }
            break;
        case(7):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>I know. You should've seen it. Just go back to the beginning before I cut it.");
                    break;
                case(2):
                    $("#d").html("<b>Bendy: </b>That's right. She also cut out the part where you owe me fifty bucks.");
                    break;
            }
            break;
        case(8):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Okay. You got me. I kidnapped your conjoint twin.");
                    break;
            }
            break;
        case(9):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>That's right. They all belong to me. Get your own people!");
                    break;
            }
            break;
        case(10):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"Which is why I choose to redundantly assure people by using 'on my own' and 'independently' in the same sentence.\"");
                    break;
            }
            break;
        case(11):
            max = 3;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Speak for yourself! I want overflowing pockets of cash in my friends.");
                    break;
                case(2):
                    $("#d").html("<b>Fourize: </b>I'll take power and respect from friends. And a side order of onion rings to go.");
                    break;
                case(3):
                    $("#d").html("<b>Bendy: </b>Girl, you're alone! That means you don't have to share the best. You got it all for yourself!");
                    break;
            }
            break;
        case(12):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"That fall on your butt where you blew it at the end.\"");
                    break;
            }
            break;
        case(13):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"And yet you're also like a fake superhero!\"");
                    break;
            }
            break;
        case(14):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Of course I am. Now where can I buy one of those I Heart Minor City t-shirts?\"");
                    break;
            }
            break;
        case(15):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Lots of you! Six minus one of you! You, you, you, you, and you! All of us, but me!");
                    break;
            }
            break;
        case(16):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"That's right. Now, how 'bout you tell us your name first?\"");
                    break;
            }
            break;
        case(17):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"At least not until she tells us her name.\"");
                    break;
            }
            break;  
        case(18):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>You also don't know her name. Ask her her name!");
                    break;
            }
            break;
        case(19):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>Sure. Just tell us your name.");
                    break;
            }
            break;
        case(20):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"The Girl?\" That's not her name. You forgot to get her name!");
                    break;
            }
            break;
        case(21):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"Okay! I'll admit it! I'm not a natural blonde!");
                    break;
                case(2):
                    $("#d").html("<b>Fourize: </b>\"Also, I borrowed this hair from my mom.\"");
                    break;    
            }
            break;
        case(22):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"I said pretty. Not beautiful. Don't push your luck.\"");
                    break;
            }
            break;
        case(23):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>I'm sorry, officer. I forgot I was the designated driver.");
                    break;  
            }
            break;  
        case(24):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>Say what? Is this gonna be on the test?");
                    break;
                case(2):
                    $("#d").html("<b>Cold Miner: </b>There is no way I'm repeating the Made Up Superhero History course again.");
                    break;    
            }
            break;
        case(25):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>So his name's Fourize? What? Was Me-dude-sa taken?");
                    break;
            }
            break;
        case(26):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Hey! You left your figure skating partner behind. You're disqualified!");
                    break;
            }
            break;
        case(27):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>Wait. I hate and just fought a guy named Race? Does that mean I'm Racist?");
                    break;
                case(2):
                    $("#d").html("<b>Nator: </b>Don't worry. He's our white guy. You're good.");
                    break;    
            }
            break;
        case(28):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>You came here to be a superhero! You could help a guy out next time.");
                    break;
            }
            break;
        case(29):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Eh, this novella's boring. What else is on? Click.");
                    break;
            }
            break;
        case(30):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>And miss you screwing up again? No way.");
                    break;
            }
            break; 
        case(31):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>Ooh! Can I answer? Can I? Can I? Pleeeeease?");
                    break;
            }
            break;
        case(32):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"If you have a team of four Neo Brigade members you're leading and you lose to an easy opponent, how many Neo Brigade members lose respect for you?\"");
                    break;
            }
            break; 
        case(33):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>I wish. I had to climb out of your hair myself. Hire a barber, will ya!");
                    break;
            }
            break; 
        case(34):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>That's right. And you're all fired.");
                    break;
            }
            break;
        case(35):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>Oh man, did you bet on the wrong horse.");
                    break;
            }
            break;
        case(36):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Anyway, how are you doing, my good friend?\"");
                    break;
                case(2):
                    $("#d").html("<b>Fourize: </b>\"I was doing great until you blew it against Fourize. Friendship over, human!\"");
                    break;
            }
            break;
        case(37):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"But forget it. You're too irritable for my sympathy now.\"");
                    break;
            }
            break; 
        case(38):
            max = 3;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Way ahead o' you.");
                    break;
                case(2):
                    $("#d").html("<b>Fourize: </b>Hey!");
                    break;
                case(3):
                    $("#d").html("<b>Beauty: </b>I'm sorry. Who are you? I've forgotten you in favor of the main villain.");
                    break; 
            }
            break; 
        case(39):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>What are you askin' me for? I just work here.");
                    break;
            }
            break; 
        case(40):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Yeah. I'd like a large fries, two cheeseburgers, a diet coke, and uh . . . one position on your team.");
                    break;
                case(2):
                    $("#d").html("<b>Bendy: </b>Would you like that to stay or to go?");
                    break;    
            }
            break;
        case(41):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"But now I have, and man, are you people ruining superheroes for me.\"");
                    break;
            }
            break;
        case(42):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Oh God! Doctor, what's on my hands? Tell me it's not Stigmata!");
                    break;
            }
            break; 
        case(43):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Whoa whoa! Too much world explaining! Lemme write this down.");
                    break;
            }
            break;  
        case(44):
            max = 3;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner : </b>Behind the boxes. Look behind the boxes! No, don't walk away! Oh, you are so fired!");
                    break;
                case(2):
                    $("#d").html("<b>Nator : </b>Uh, you know your plan was to lead us to you to capture us yourself, right?");
                    break;  
                case(3):
                    $("#d").html("<b>Cold Miner : </b>Oh yeah. You're rehired!");
                    break;
            }
            break;   
        case(45):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>Oh yeah. This'll go well. \"Oh my God! Paul McCartney!? Hey! I play bass too! Here, I'll show that I'm just like you!\"");
                    break;
            }
            break; 
        case(46):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Oh, come on! I don't ONLY collapse on people. Stop looking at me, everyone.");
                    break;
            }
            break;
        case(47):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>Behold! The power of a terrible judge of character! Tremble in fear as trust is given out willy-nilly! I'm talkin' to you, Race. Be more afraid next time.");
                    break;
            }
            break;
        case(48):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>LIAR! You can also alter your clothing at will! Also the smile shock thing. But MOSTLY the clothing power you left out!");
                    break;
            }
            break; 
        case(49):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>I'm sorry. That is not how you spell \"I'm in way over my head\". You're eliminated from the spelling bee.");
                    break;
            }
            break;
        case(50):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Yeah, but she scared away the other job applicants, so either we hire her or you work for free.\"");
                    break;
            }
            break; 
        case(51):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>That's my name.");
                    break;
            }
            break;  
        case(52):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Someone LIKE me? Good news, I'm not someone like me. I'm the actual me! When do I start?");
                    break;
            }
            break;
        case(53):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>He's right. He is of little help.");
                    break;
            }
            break;
        case(54):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>Aaaaand time! Eleven minutes and twenty-eight seconds after meeting her and we get her name! A new record for most awkward introduction!");
                    break;
                case(2):
                    $("#d").html("<b>Bendy: </b>Lemme meet her again, I bet I can double that time.");
                    break;    
            }
            break;
        case(55):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"I was actually more perplexed by that picture frame being a little tilted, but now that you mention it.\"");
                    break;
            }
            break;
        case(56):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Yeah. No kidding. Planet of smart women, my butt.");
                    break;
            }
            break; 
        case(57):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Sure. Electrocute me with honesty. Just what I wanted.");
                    break;
            }
            break;  
        case(58):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"But on an unrelated note, how much money you got on you?\"");
                    break;
            }
            break;
        case(59):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"So don't take evil villains like Fourize threatening lives and causing destruction seriously and just be super chill about it. Got it.\"");
                    break;
            }
            break;  
        case(60):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>Oh, sure. Throw me under the bus.");
                    break;
                case(2):
                    $("#d").html("<b>Bendy: </b>I swear, officer! Race was the one who told me to be nice to you!");
                    break;    
            }
            break;
        case(61):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Oh, don't tell me I'm the only one who's tried to wear shoes on my eyes.");
                    break;
            }
            break; 
        case(62):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"Wait. So you're telling me that's NOT spaghetti sauce you have on your face?\"");
                    break;
            }
            break; 
        case(63):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Well, actually, I was thinking 'Holy Jesus, do you look repulsive!' \"");
                    break;
            }
            break;
        case(64):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>Wrong!");
                    break;
            }
            break; 
        case(65):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>Once more with feeling! Come on! Sell me your hope! I've only got so much of my own.");
                    break;
            }
            break;
        case(66):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Pressure! Pushing down on me. Pressing down on you no man ask for. Under pressure! That brings a building down, splits a family in two.");
                    break;
            }
            break; 
        case(67):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Check his resume!");
                    break;
            }
            break;
        case(68):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>Oh, thank God. I'm not the only one who signed up for the violence.");
                    break;
            }
            break;  
        case(69):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"The Neo Brigade? You guys don't look anything like Keanu Reeves.\"");
                    break;
            }
            break;
        case(70):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>Oh. Run this team! I see what you did there.");
                    break;
            }
            break; 
        case(71):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"I'm short on rent money this month. Can you chip in a little early?\"");
                    break;
            }
            break; 
        case(72):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Don't make me get the chief of the fire department!\"");
                    break;
            }
            break;  
        case(73):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Uh, what are my choices, again?\"");
                    break;
            }
            break; 
        case(74):
            max = 3;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Hmm. Be a villain and go to jail or be a hero and work in an office? Go to jail or go somewhere LIKE jail?\"");
                    break;
                case(2):
                    $("#d").html("<b>Cold Miner: </b>If you're a villain, you won't go to jail if you do it well.");
                    break; 
                case(3):
                    $("#d").html("<b>Bendy: </b>You ever tried tunneling out of an office?");
                    break;     
            }
            break;
        case(75):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>");
                    break;
            }
            break;  
        case(76):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Oh, 'cause he's capable of ruining the team. Yeah. That makes sense.");
                    break;
            }
            break;  
        case(77):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"I'm sorry. How many people work for me, again?\"");
                    break;
                case(2):
                    $("#d").html("<b>Pyra: </b>\"Let's see. I fired three people last week. Four I'm firing tomorrow. Carry the one.\"");
                    break;    
            }
            break;  
        case(78):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"And if I see anyone cutting to get to the ride, I'm throwing you outta the park.\"");
                    break;
            }
            break; 
        case(79):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>Here!");
                    break;
            }
            break; 
        case(80):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>Here! No wait. That's not me.");
                    break;
            }
            break; 
        case(81):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>Here! Nailed it!");
                    break;
            }
            break;  
        case(82):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>Not here.");
                    break;
            }
            break;  
        case(83):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>No it's not. I told you I was cutting class today.");
                    break;
            }
            break;   
        case(84):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\". . . o'clock, four o'clock, ROCK!");
                    break;
            }
            break;
        case(85):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Hey, I know I'm trespassing, but you barged in without knocking.");
                    break;
            }
            break;   
        case(86):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"I'm sorry. Has anyone ever said you look like the ghosts of Joe Flynn and Marvin Kaplan?\"");
                    break;
            }
            break;    
        case(87):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"What I need is someone with little to no confidence in literally everything but also carries part of my DNA!\"");
                    break;
            }
            break;  
        case(88):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"Huh? Oh, right. The hand thing from our powers.\"");
                    break;
            }
            break;  
        case(89):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"But first, I need to return my old man translator.\"");
                    break;
                case(2):
                    $("#d").html("<b>Race: </b>\"Alright, but make sure you get it ready for the next time I bring a girl home.\"");
                    break;    
            }
            break;   
        case(90):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Gee, are you as delirious as you are stupid when considering danger around you? Uh, I mean, yes. Yes it does.\"");
                    break;
            }
            break;  
        case(91):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"Act now and you'll get the second half free!\"");
                    break;
            }
            break; 
        case(92):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"Preferably in a path leading to my house. Leave the rest of the ice!\"");
                    break;
            }
            break; 
        case(93):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Seriously? You're making me work on a snow day?\"");
                    break; 
                case(2):
                    $("#d").html("<b>Pyra: </b>\"I'd like my overtime in advance please.\"");
                    break;     
            }
            break;  
        case(94):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Oh, Princess Elsa, what have you done now?");
                    break;
            }
            break;
        case(95):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"Minor City? Sorry. Wrong number.\"");
                    break;
            }
            break;  
        case(96):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>What? No \"Hello\" for me? This means war, Trotterberg!");
                    break;
            }
            break;
        case(97):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"And if we look here we can see a cold front coming in from the east. An ice storm projected to hit Minor City with none of the storm part. Better stay off the roads tonight due to slippery conditions. Check back here at the weather channel for more updates.");
                    break;
            }
            break;  
        case(98):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"Houston, we have a villain backstory.\"");
                    break;  
                case(2):
                    $("#d").html("<b>Fourize: </b>\"Oh. Well, as long as you used to be poor and have a reason. We'll give you a pass then. Freeze us away!\"");
                    break;
                  
            }
            break;  
         case(99):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>It's summer and I got them for cheap. What was YOUR consumer strategy?");
                    break;
            }
            break; 
        case(100):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Yeah. You heard him. We gotta evacuate.\"");
                    break;
            }
            break; 
        case(101):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"Now, get to work. Those toilets won't clean themselves while we're gone.\"");
                    break;
            }
            break;  
        case(102):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"Uh, guys, whose turn was it to pay Triple A?\"");
                    break;
                case(2):
                    $("#d").html("<b>Nator: </b>\"Hey, don't blame me. It was Bendy's turn to buy stamps to mail the check.\"");
                    break;    
            }
            break; 
        case(103):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>I don't know who writes these lines for me, but he is so fired.");
                    break;
            }
            break; 
        case(104):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Anime style transformation, COMMENCE!\"");
                    break;
            }
            break;  
        case(105):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\". . . week or month or even your yeeeeeeear, but I'll be there for yooooou! When the rain starts to fall, I'll be there for yoooooou!\"");
                    break;
            }
            break;  
        case(106):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"Either way, we need your skull good and ready for our next Neo Brigade softball game.\"");
                    break;
                case(2):
                    $("#d").html("<b>Pyra: </b>Yeah. What's our budget for bats this year? Zero? Zero and a half?");
                    break;    
            }
            break;
        case(107):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"Okay. Everyone in the tube, please scrunch together and smile. And stop looking like you're struggling. Now, say cheese!\"");
                    break;
                case(2):
                    $("#d").html("<b>Pyra: </b>\"Aw, just our luck. There's no film in this camera.\"");
                    break;    
            }
            break;    
        case(108):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"I don't know. Unbiased opinion: I'd give myself a solid three out of ten.\"");
                    break;
                case(2):
                    $("#d").html("<b>Pyra: </b>\"Ninety-one being the highest.\"");
                    break;    
            }
            break; 
        case(109):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"In this cold he created? Gee, I hope he packed a sweater.\"");
                    break;
            }
            break; 
        case(110):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Don't worry. I have an idea. Taxi! Cold Miner's hideout, please.\"");
                    break;
                case(2):
                    $("#d").html("<b>Pyra: </b>\"Nah. I don't like that plan. They raised the cab fair sixty cents.\"");
                    break;    
            }
            break;   
        case(111):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>You have a mind reader on your team! Get readin'!");
                    break;
                case(2):
                    $("#d").html("<b>Bendy: </b>We're reading this stuff here. Isn't that enough work.");
                    break;    
            }
            break;
        case(112):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Wait! Then what happened to the ten grand in bail money I sent for her?");
                    break;
                case(2):
                    $("#d").html("<b>Bendy: </b>Sorry. Blew it all on lottery tickets. Actually, can you send me some more? I got some gambling debts I forgot to pay off.");
                    break;    
            }
            break; 
        case(113):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"I think of red-headed girls playing the Batman theme on the flute on the hills.\"");
                    break;
                case(2):
                    $("#d").html("<b>Race: </b>Hey! That was a secret!");
                    break;    
            }
            break; 
        case(114):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Do you have the number for the Teen Titans?\"");
                    break;
            }
            break;  
        case(115):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>Gee, I guess I shouldn't have cursed out the lost and found guy after all.");
                    break;
            }
            break; 
        case(116):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"And make some more cash too. Is that okay?\"");
                    break;
                case(2):
                    $("#d").html("<b>Nator: </b>\"Are you asking about your salary during the job interview? Well, thanks for coming in. We're seeing a lot of people for this position.\"");
                    break;
            }
            break;     
        case(117):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"I mean, they showed me the minion agreement, but I just scrolled to the bottom and hit the check box to sign. Does anyone actually read that stuff?\"");
                    break;
            }
            break; 
        case(118):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"It goes for five dollars, or best offer.\"");
                    break;
            }
            break; 
        case(119):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"I'll take Lame Cliched Excuses for a thousand, Alex.\"");
                    break;
            }
            break;  
        case(120):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"His hideout is his parents' basement?\"");
                    break;
            }
            break; 
        case(121):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Hang on. I'll check. Cold Miner, am I crazy?\"");
                    break;
                case(2):
                    $("#d").html("<b>Cold Miner: </b>No. Now shut up, and stick to the script!");
                    break;    
            }
            break; 
        case(122):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>That's not fair. I waited thirty minutes to give you my name, but at least it was real.");
                    break;
            }
            break;
        case(123):
            max = 4;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>Whoa. Hang on? Hello?");
                    break;
                case(2):
                    $("#d").html("<b>Cold Miner: </b>Yeah. Hi. I'm calling for my friend Harry, last name, Weiner. Is he there?");
                    break; 
                case(3):
                    $("#d").html("<b>Bendy: </b>Hang on. I'll check. Hey, guys! Have any of you seen a Harry Weiner? I'm looking for a Harry Wei . . . Oh, real mature!");
                    break;
                case(4):
                    $("#d").html("<b>Cold Miner: </b>Heh heh heh heh. Hey, you said you were fine with it.");
                    break;     
            }
            break;   
        case(124):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Hey, I don't see you falling backward and expecting him to catch you.\"");
                    break;
            }
            break;
        case(125):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>Yeah, but there's delays like crazy.");
                    break;
            }
            break;
        case(126):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"And while you're at it, can you get in that cage and feed that trained tiger for me?\"");
                    break;
            }
            break;   
        case(127):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Yeah. You chicken? Booooock bock bock bock bock boooock!\"");
                    break;
            }
            break;
        case(128):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Oh, don't worry. Being on this team also leads nowhere and sucks just as much.\"");
                    break;
            }
            break; 
        case(129):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Yeah, but it smells like an exit to me.\"");
                    break;
            }
            break;
        case(130):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>I see you. You lose!");
                    break;
                case(2):
                    $("#d").html("<b>Beauty: </b>Hey, I don't see an exclamation point over your head.");
                    break;   
            }
            break;
        case(131):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>Also, killing enemies in real life isn't rewarded as much.");
                    break;
            }
            break;  
        case(132):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"'Scuse me. I'll cover my mouth next time.\"");
                    break;
            }
            break;
        case(133):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"I expected Cold Miner to challenge us to a soccer game. Now, why are we the only team with no matching uniforms?\"");
                    break;
            }
            break;  
        case(134):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"He can see us? Race, stop pickin' your nose.\"");
                    break;
            }
            break;
        case(135):
            max = 3;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Open Sesame!\"");
                    break;
                case(2):
                    $("#d").html("<b>Bendy: </b>\"Cold Miner sent me!\"");
                    break;
                case(3):
                    $("#d").html("<b>Beauty: </b>\"No? Uh, let's see. Abra cadabra!\"");
                    break; 
                case(4):
                    $("#d").html("<b>Pyra: </b>\"Password! It's gotta be password.\"");
                    break;     
            }
            break;  
        case(136):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Remember the hideout intruder rules: You break it, you bought it.");
                    break;
            }
            break;
        case(137):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Cold Miner, quick! Freeze him so I can end with him liking my plan.\"");
                    break;
                case(2):
                    $("#d").html("<b>Cold Miner: </b>Sorry. I'm breaking for lunch.");
                    break;    
            }
            break; 
        case(138):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"We had to take all of Cold Miner's personal guards to protect it. Sure, he's our boss, but this is our ONLY computer.\"");
                    break;
            }
            break;
        case(139):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"Trust me. No one goes there anymore after that mess I made. I swear I thought the toilets were fixed.\"");
                    break;
            }
            break;   
        case(140):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>I'm sorry. What was that? I couldn't hear you.");
                    break;
                case(2):
                    $("#d").html("<b>Bendy: </b>I said it looks like your powers are gone.");
                    break;    
            }
            break;
        case(141):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>Oh, come on, guys! I could be admired by people. I have, like, two other friends.");
                    break;
            }
            break; 
        case(142):
            max = 3;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Let's see. We got one vote for Race, one for 'voting stinks', one for 'Chief Trotterberg sucks noodles' . . .\"");
                    break;
                case(2):
                    $("#d").html("<b>Beauty: </b>\"One for Bendy's drawing of a motorcycle punching a gas station.\"");
                    break;  
                case(3):
                    $("#d").html("<b>Pyra: </b>\"Yeah. Sure we voted. Didn't you hear? They lowered the voting age to sophomore high school years.\"");
                    break; 
            }
            break;
        case(143):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"We're still trying to find the job applicants who suddenly went missing after Race's dad offered them a ride home.\"");
                    break;
            }
            break;   
        case(144):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"Take me to Burger King. I left my car above ground.\"");
                    break;
            }
            break;
        case(145):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Gee, where are the hall monitors when you need 'em? These people should be fired.");
                    break;
            }
            break;  
        case(146):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Same thing my heart surgeon said before he put me to sleep.");
                    break;
            }
            break; 
        case(147):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"I mean, uh, I don't know. Which one's more believable?\"");
                    break;
            }
            break;     
        case(148):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"Okay, but you're paying for dinner.\"");
                    break;
            }
            break;    
        case(149):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"I mean, my ninjitsu's a little rusty, but come on.\"");
                    break;
            }
            break;  
        case(150):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"Mom, Dad, I have something to tell you about me.\"");
                    break;
            }
            break;
        case(151):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"Okay. Who gave a gun to the rats this time?\"");
                    break;
            }
            break;  
        case(152):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"No! Nobody here, but us closet doors. Us one single closet door.\"");
                    break;
                case(2):
                    $("#d").html("<b>Pyra: </b>\"Oh, good. Hey, door! Stop shooting at us, will you!\"");
                    break;    
            }
            break; 
        case(153):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"Okay, but that includes Cold Miner telling me not to fight. You know what I mean, right, Race?\"");
                    break;
            }
            break;  
        case(154):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Now, Jan, this not all about you.\"");
                    break;
            }
            break;  
        case(155):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>Well, this doesn't take a genius. It's Corridor I, right?");
                    break;
            }
            break;
        case(156):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Yeah, so don't walk so loud, you kids! I'm trying to sleep!");
                    break;
            }
            break;  
        case(157):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Yeah, you know those disabled henchmen. Always whinin' about stairs.\"");
                    break;
            }
            break;
        case(158):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"We tried the buddy system in field trips too. We're still looking for the rest of our group.\"");
                    break;
            }
            break;  
        case(159):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"Looks like a pop show stage to me. Seriously? No guard rails?\"");
                    break;
                case(2):
                    $("#d").html("<b>Bendy: </b>\"Quick! Let's get on. I can already smell the lawsuit money!\"");
                    break;    
            }
            break;
        case(160):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"A five player game? Where am I gonna get four friends? This is terrible game design.\"");
                    break;
            }
            break;  
        case(161):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Actually, I was thinking of an RPG, but whatever.\"");
                    break;
            }
            break; 
        case(162):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"And if three out of two-hundred Chill-dren had to go to the bathroom, how many Chill-dren does Cold Miner have left to beat the hell outta you with.\"");
                    break;
            }
            break;  
        case(163):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>I'm sorry. What do I have, again?");
                    break;
            }
            break;
        case(164):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"I thought I was gonna have to get captured without you.\"");
                    break;
            }
            break;    
        case(165):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Of course. How else am I supposed to greet my prom dates?");
                    break;
            }
            break; 
        case(166):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>'Cause it goes so well with all his other lies you believed.");
                    break;
            }
            break;
        case(167):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"They were in medium sized groups? Now, that would be fascinating.\"");
                    break;
            }
            break;   
        case(168):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>And going to the bathroom is done how . . .?");
                    break;
            }
            break;  
        case(169):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>What about groups of zero people? Has anyone ever tried that?");
                    break;
            }
            break;   
        case(170):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"Well, there's four positions for the four people, and the last is for Cold Miner's wallet.\"");
                    break;
            }
            break;  
        case(171):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>Because it doesn't need five people to stand on it. It needs YOU five people to stand on it! Geez. Put it together, will ya!");
                    break;
            }
            break;    
        case(172):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"I don't know, but it should've done something by now. I mean, come on. You guys have been standing on that thing for, like, ten minutes.\"");
                    break;
            }
            break;  
        case(173):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>Oh, come on. You didn't even see Cold Miner reveal himself yet.");
                    break;
                case(2):
                    $("#d").html("<b>Nator: </b>Yeah. Let us try and break out first before you call us dead.");
                    break;    
            }
            break;  
        case(174):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"Uh, hello? Elevator operator? Help! I'm trapped in here!\"");
                    break;
                case(2):
                    $("#d").html("<b>Bendy: </b>\"I'm sorry. But, legally, this is not an elevator and legally none of my business. Have a nice day.\"");
                    break;    
            }
            break;  
        case(175):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"If you know the name of the person you would like to bail you out, press 1! To order a bedroom where you can hide and cry by yourself, press 2! If you would like to replace the friends you're about to lose, please stay on the line and act like you're too busy to listen to them!\"");
                    break;
            }
            break;   
        case(176):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"I know. Can you believe someone named me that?\"");
                    break;
            }
            break;   
        case(177):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"You did? Okay. I guess that's probably true.\"");
                    break;
            }
            break;
        case(178):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"Doctor, my friend has ellipsis. Is she really okay?\"");
                    break;
            }
            break;
        case(179):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>I'm with you. I already took 911 off my speed dial.");
                    break;
            }
            break;
        case(180):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"If I buy five, I get a sixth for free.\"");
                    break;
            }
            break;   
        case(181):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Do you know anyone who can threaten this guy? I forgot to rehearse for this line.\"");
                    break;
            }
            break;  
        case(182):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>Oh, good. I hate it when moths get inside.");
                    break;
                case(2):
                    $("#d").html("<b>Bendy: </b>Not me. Those moths could go find help that's not Race.");
                    break;    
            }
            break; 
        case(183):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Phew. I thought I was gonna have to apologize.\"");
                    break;
            }
            break; 
        case(184):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>Hey, come on, Ref. She's totally on my roster.");
                    break;
                case(2):
                    $("#d").html("<b>Beauty: </b>Yeah, just like at my bribe money. Do I look like I'm really getting paid for this?");
                    break;    
            }
            break; 
        case(185):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"That's okay. Us cannibals will just have our dinner now. Thanks.\"");
                    break;
            }
            break; 
        case(186):
            max = 4;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"And I know a bunch of other predictable superhero lines from movies. Take this! All for one and one for all!\"");
                    break;
                case(2):
                    $("#d").html("<b>Tel-E: </b>\"For truth! For justice!\"");
                    break;     
                case(3):
                    $("#d").html("<b>Beauty: </b>\"With great power comes great responsibility!\"");
                    break; 
                case(4):
                    $("#d").html("<b>Bendy: </b>\"I am Groot!\"");
                    break; 
            }
            break;  
        case(187):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>\"Now, stay where I can see you this time. And don't bother the neighborhood kids!\"");
                    break;
            }
            break;
        case(188):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Geez. How many kids did he NOT get custody of?");
                    break;
            }
            break;  
        case(189):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>You think I'm a real hero? That's so nice of you.");
                    break;
            }
            break;
        case(190):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>No, but he's heir to his father's throne. Just give it time.");
                    break;
            }
            break;   
        case(191):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Come on. That prison looks a little fragile. Just lemme tighten those screws for you a bit so you can really keep 'em locked up.\"");
                    break;
            }
            break;
        case(192):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"Uh, the script says I'm supposed to disagree with you. Oh. You rewrote it? Okay. Fair enough.\"");
                    break;
            }
            break; 
        case(193):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"Oh, come on. I just asked if you could spare some change.\"");
                    break;
            }
            break;  
        case(194):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"Sure. You know how they say 'He's in a better place now'? We should go there now.\"");
                    break;
            }
            break;   
        case(195):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>\"And if it doesn't, I get to make up my own rules for Rock, Paper, Scissors.\"");
                    break;
            }
            break; 
        case(196):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>Oh, sure. What would you like next? A flame villain immune to water? A rock villain immunte to dynamite? A gun wielding villain immune to background checks?");
                    break;
                case(2):
                    $("#d").html("<b>Nator: </b>Ooh! How 'bout a villain powered by money who doesn't have to pay taxes?");
                    break;  
            }
            break;  
        case(197):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>Gee, second hand smoke hurts people more than I thought.");
                    break;
            }
            break;  
        case(198):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"If I say yes, will you surrender and leave me alone?\"");
                    break;
            }
            break;
         case(199):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"And put good ice sculptors out of business? You monster!\"");
                    break;
            }
            break;   
        case(200):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"I've got a plan. And it could be all yours for 19.99!\"");
                    break;
            }
            break;  
        case(201):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"What's that? I can't hear you! I could only hear that first thing.\"");
                    break;
            }
            break; 
        case(202):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"Don't use guns, kids, unless you add that extra l and hyphen. Then it's totally legal.\"");
                    break;
            }
            break;  
        case(203):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>Oh, he's thinking now? Great. I was worried this novella was gonna be too short.");
                    break; 
                case(2):
                    $("#d").html("<b>Tel-E: </b>Something's wrong with my telepathy. I'm just picking up static.");
                    break;     
            }
            break;
        case(204):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"Dang it. I forgot to ask them to return my car keys.\"");
                    break;
            }
            break;  
        case(205):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Yeah, this prison was made for five people. Come on. There's plenty of room.\"");
                    break;
            }
            break;
        case(206):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"Don't worry. We've worked on our act. Def Comedy Jam, here we come!\"");
                    break;
                case(2):
                    $("#d").html("<b>Beauty: </b>\"You ever notice guys without super speed? They run like this. Guys WITH super speed run like this.\"");
                    break;    
            }
            break; 
        case(207):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>Behold! A well known phrase turned into an anagram of itself.");
                    break;
            }
            break;  
        case(208):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>Boy, Race will do anything to not lead a team.");
                    break;
            }
            break; 
        case(209):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"Do I look like I ever make it this far?\"");
                    break;
            }
            break;   
        case(210):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"Who the hell took my thesaurus!?\"");
                    break;
            }
            break; 
        case(211):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"There are a lot of people who won't be your friend, so that's a lot of folks who didn't get captured.\"");
                    break;
            }
            break;  
        case(212):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>No. It was three friends. You forgot your change.");
                    break;
            }
            break;  
        case(213):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>Oh, sure. Blame the victims.");
                    break;
            }
            break; 
        case(214):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>\"Hey, we haven't all read that part.\"");
                    break;
            }
            break;   
        case(215):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"I like your audition, kid, but you are really over acting for this part. Next!\"");
                    break;
            }
            break;
        case(216):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"I can't even save them ten bucks with these pizza coupons. No one told me you need to spend twenty bucks first.\"");
                    break;
            }
            break; 
        case(217):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>\"Oh, right. I already introduced myself with my real name. What was it again?\"");
                    break;
            }
            break;
        case(218):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Oh, come on. I can't be the only one who finds this funny.\"");
                    break;
            }
            break;    
        case(219):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>Watch? What? No! You said you were gonna tell me. Showing is not telling!");
                    break;
            }
            break;    
        case(220):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>No. My doctor left her taser in me and I must have breathed too hard for the On button. Of course it's part of my powers!");
                    break;
            }
            break;  
        case(221):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"That's great! Can you help me out? I lost my jumper cables.\"");
                    break;
            }
            break; 
        case(222):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>\"How awful\", said no photographer ever.");
                    break;
            }
            break; 
        case(223):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"For example, did you know I used to throw banana peels in front of kids with super speed?\"");
                    break;
            }
            break;
        case(224):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"But, boy, am I glad this happy accident came to be.\"");
                    break;
            }
            break;
        case(225):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>She's right. With Race as our leader, just about everything is worse than getting captured by Cold Miner.\"");
                    break;
            }
            break; 
        case(226):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"NOOOOOOOOOOOOOOOOOOOOOOO! That's impossible!\"");
                    break;
                case(2):
                    $("#d").html("<b>Race: </b>\"Search your feelings. You know this to be true.\"");
                    break;    
            }
            break;  
        case(227):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Seriously? I could think of a way better twist than that.\"");
                    break;
                case(2):
                    $("#d").html("<b>Bendy: </b>\"Are you sure he's not your second cousin once removed? Did you check?\"");
                    break;    
            }
            break;
        case(228):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>Good news! I'm your real father. You're fired!");
                    break;
            }
            break;
        case(229):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"I know. He decides that, and he already gets fifty percent of our merchandise royalties. Can you believe that?\"");
                    break;
            }
            break; 
        case(230):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>Hey, we didn't ask for your life story. We . . . ugh. Here we go.");
                    break;
                case(2):
                    $("#d").html("<b>Beauty: </b>\"Well, our friends are about to be frozen, but, sure. We've got time to chat. Sit down. Tell me about you.\"");
                    break;    
            }
            break;
        case(231):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"I was so slow; I had to borrow my dad's police car to chase them.\"");
                    break;
            }
            break;  
        case(232):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\". . . Boy, I could sure go for tacos tonight.\"");
                    break;
            }
            break;
        case(233):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>Wait. Slow down, speed boy! Lemme write this down. I lost my flash cards.");
                    break;
            }
            break; 
        case(234):
            max = 3;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Seriously? I JUST said you look nothing like Keanu Reeves a few minutes ago.");
                    break;
                case(2):
                    $("#d").html("<b>Fourize: </b>I think his element is Speed because whenever someone sees him on a bus, they think it's gonna explode.");
                    break;  
                case(3):
                    $("#d").html("<b>Bendy: </b>You find me a guy with an element called Speed 2 and I'll show you a REAL failure of a hero.");
                    break; 
            }
            break;
        case(235):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>His element is Speed and no one thinks it's because Race has done a lot of drugs?");
                    break;
            }
            break; 
        case(236):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Gee, life must be one hell of a goalie.");
                    break;
            }
            break; 
        case(237):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>Well, no one expects HIM to be the best. Me? No problem.");
                    break;
            }
            break; 
        case(238):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>A toaster with a smiley face painted on would make a better leader than Race.");
                    break;
                case(2):
                    $("#d").html("<b>Race: </b>Yeah, well, I already mentioned you, Nator.");
                    break;    
            }
            break;  
        case(239):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>\"Okay, Race! Go stand in the corner and think about what you've . . . hey, where'd the corner of the room go?\"");
                    break;
            }
            break;
        case(240):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>\"I mean, my real best friend is my powers, but don't tell her I said that.\"");
                    break;
            }
            break;  
        case(241):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Since when do I have the powers of a makeup artist?");
                    break;
            }
            break; 
        case(242):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>Ooh! Pick me! Pick me! I've lead a team so much better than you as I've tried to destroy you.");
                    break;
                case(2):
                    $("#d").html("<b>Bendy: </b>He's hired.");
                    break;    
            }
            break;  
        case(243):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\". . . But here's why Joseph Stalin was a WAY better leader than you.\"");
                    break;
            }
            break; 
        case(244):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>So that's the secret then. If I'm gonna stop heroes, I need to steal their TVs.");
                    break;
            }
            break;    
        case(245):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>\"He wanted sidekicks. I wanted to focus on my superhero career. You know how things fall apart.\"");
                    break;
            }
            break; 
        case(246):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"Maybe Cold Miner will let me join his team as a janitor's intern if I beg hard enough.\"");
                    break;
            }
            break; 
        case(247):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Oh, Race, did you take the mountain, first aid kit, and cheetah with you into the matter transporter again?\"");
                    break;
            }
            break;   
        case(248):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"And they also come into your room while you sleep, steal your Charevo Gene from under your pillow, and leave you a quarter.\"");
                    break;
            }
            break; 
        case(249):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Hey! I'm the one opposing him, and that's the same thing you told me!");
                    break;
            }
            break; 
        case(250):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Uh, waiter? Can I get some dumplings with these fortune cookies?\"");
                    break;
            }
            break;   
        case(251):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"So the thirty of you will have to share your trophy when you all tie for first. Better call first dibs early!\"");
                    break;
            }
            break; 
        case(252):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>\"We are the ghosts of Charevo past, present, and future!");
                    break;
                case(2):
                    $("#d").html("<b>Beauty: </b>\"How dare you make your friends get captured on Christmas!");
                    break;    
            }
            break;
        case(253):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"And if it doesn't, you're helping a bunch of ingrates.\"");
                    break;
            }
            break;   
        case(254):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"Those fairies from my hands? No. But you should see the creatures that come outta my butt.\"");
                    break;
            }
            break;
        case(255):
            max = 3;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>Now, let's see. Do the Young Justice kids have any openings?");
                    break;
                case(2):
                    $("#d").html("<b>Beauty: </b>Sorry. They already have a guy with super speed. Are you good with spoilers? 'Cause you missed your chance for the job after season 2.");
                    break; 
                case(3):
                    $("#d").html("<b>Race: </b>Impulse, you jerk!");
                    break;
            }
            break;  
        case(256):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Ugh. Don't tell me you're also a ventriloquist.\"");
                    break;
            }
            break; 
        case(257):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>Really? Bad guys singing? Ugh. Just freeze us already.");
                    break;
                case(2):
                    $("#d").html("<b>Race: </b>Doesn't everyone love a classic coal mining shanty?");
                    break;    
            }
            break; 
        case(258):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>Okay, Cold Miner, we saved our city. You owe me an explanation!");
                    break;
                case(2):
                    $("#d").html("<b>Cold Miner: </b>Sure. Don't care.");
                    break;    
            }
            break; 
        case(259):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"Dude, we only asked to use an ice rink for two hours.\"");
                    break;
            }
            break;
        case(260):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Sorry. You're right. I should ask my boyfriend for permission before talking.\"");
                    break;
            }
            break;  
        case(261):
            max = 4;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>Go for the right hand! Go for the right hand!");
                    break;
                case(2):
                    $("#d").html("<b>Beauty: </b>No! The left!");
                    break; 
                case(3):
                    $("#d").html("<b>Fourize: </b>The right!");
                    break; 
                case(4):
                    $("#d").html("<b>Nator: </b>Take the left! The left! The left! No! The right! Take the right!");
                    break;    
            }
            break; 
        case(262):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"Eeny meeny miney mo . . .\"");
                    break;
            }
            break; 
        case(263):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"No! The other one! No! Go back to the first! No! Ughhhhh! Lemme use my lifeline!\"");
                    break;
            }
            break;
        case(264):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"As a consolation prize, please enjoy the What Rock Am I Holding home game!\"");
                    break;
            }
            break;   
        case(265):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>Geez. Read the name after quote. Who does that look like?");
                    break;
            }
            break; 
         case(266):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"I tried that, but some jerk keeps telling my mistakes where to find me.\"");
                    break;
            }
            break;   
        case(267):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"Seriously, go back! I'm mechanical. I don't have any ears.\"");
                    break;
            }
            break;  
        case(268):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Oh, sure. Just let me build you a hammock and get you a lemonade. Anything else you'd like?\"");
                    break;
            }
            break;  
        case(269):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>\"Whatever you're doing, just make sure you wash your hands when you're done.\"");
                    break;
            }
            break;
        case(270):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"You kids today have to learn! In my day, I had to walk through ten feet of snow for five miles to get to school.");
                    break;
            }
            break; 
        case(271):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>What did you call me?");
                    break;
                case(2):
                    $("#d").html("<b>Race: </b>No! Not you, Tel-E! Talkin' to the other guy.");
                    break;    
            }
            break; 
        case(272):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Alright. Someone get me my Rita Hayworth poster and I'll show you my stuff.");
                    break;
            }
            break; 
        case(273):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>Winners don't use drugs or super powered mining equipment.");
                    break;
            }
            break;  
        case(274):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>Marco!");
                    break;
                case(2):
                    $("#d").html("<b>Beauty: </b>Polo!");
                    break;    
            }
            break;  
        case(275):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"No. I'm a Japanese Snowgun!\"");
                    break;
            }
            break; 
        case(276):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>\"Seriously. These weapons are dangerous. Someone could get hurt.\"");
                    break;
            }
            break; 
        case(277):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Hi, I'm Beauty. You remember me? We actually had a couple battles with each other. That was with the Neo Brigade who I know you've fought before. I joined them just a few hours ago, so I'm sure we'll be fighting some more.\"");
                    break;
                case(2):
                    $("#d").html("<b>Race: </b>\"No! I told you DON'T break the ice with him! No ice breakers!");
                    break;    
            }
            break;
        case(278):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Well, it's about time. We ordered dessert, like, two hours ago.\"");
                    break;
            }
            break;  
        case(279):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"Thank you. Thank you. Oh, stop. Go on. No, stop. Please. Tell me more of how great I am. Oh, you shouldn't have. Keep going. We have more time.\"");
                    break;
            }
            break;
        case(280):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>Oh, my best rating yet.");
                    break;
            }
            break; 
        case(281):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>Uh . . . you guys had a line after that, right? I said you thought I was crazy, and you were supposed to disagree? Why do they keep cutting these things?");
                    break;
            }
            break;  
        case(282):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>And put it in the rejection pile, right?");
                    break;
            }
            break;  
        case(283):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>Well, that's the worst alarm clock I've ever seen.");
                    break;
            }
            break;
        case(284):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Also, tell him I'm gonna be a little late in returning his lawnmower this week.\"");
                    break;
            }
            break; 
        case(285):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Race being so gullible? Don't worry. We'll get him into counseling soon. He's paying, of course.\"");
                    break;
            }
            break;
        case(286):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>No. No. Won't work. Don't even try. I'm saying I'm still awake here.");
                    break;
            }
            break; 
        case(287):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Fall on my face down here like I did up there? Way ahead of you.\"");
                    break;
            }
            break;
        case(288):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"And for finding my lost car keys, which turned out to be in my other pants pocket . . .\"");
                    break;
            }
            break; 
        case(289):
            max = 3;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"This thumbtack, this box of paperclips . . .\"");
                    break;
                case(2):
                    $("#d").html("<b>Nator: </b>\"This math book, this picture frame of some guy's kids . . .\"");
                    break; 
                case(3):
                    $("#d").html("<b>Pyra: </b>\"This used sock, this two dollar pair of sunglasses. Look, we just need to clean out the Lost and Found box. Just take what you want.\"");
                    break;
            }
            break; 
        case(290):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Okay, a nine dollar gift card. That's my final offer!\"");
                    break;
            }
            break; 
        case(291):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Said everyone from some place where elections aren't allowed.\"");
                    break;
            }
            break;
        case(292):
            max = 3;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>Wait. What if I didn't stop Cold Miner? You're saying I wouldn't be you're friend?");
                    break;
                case(2):
                    $("#d").html("<b>Nator: </b>If you didn't stop Cold Miner, we'd be frozen and dead.");
                    break; 
                case(3):
                    $("#d").html("<b>Race: </b>Oh, right. Stopping him sounds like a real prerequisite.");
                    break; 
            }
            break;
        case(293):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"I already put this thing up on eBay. And you guys are NOT screwing up my feedback.\"");
                    break;
            }
            break; 
        case(294):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>That's right. We respect Race after all other people in this world have gained our respect.");
                    break;
            }
            break; 
        case(295):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Why, of course. I'd love to use this thing to destroy you.\"");
                    break;
            }
            break;
        case(296):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>No! Ask about your salary! What are the benefits being offered?");
                    break;
                case(2):
                    $("#d").html("<b>Bendy: </b>Negotiate your vacation time, girl! Oh man, this is a terrible acceptance of a job offer.");
                    break;    
            }
            break; 
        case(297):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>Ha! Electrocution joke. Always a classic.");
                    break;
            }
            break;  
        case(298):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"I'm a member of the team now. I vote we let her in!\"");
                    break;
            }
            break;  
        case(299):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>See, Beauty? Now, THAT'S honesty.");
                    break;
            }
            break;
        case(300):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"And, by that, I mean I succeeded in lying to you.");
                    break;
            }
            break; 
        case(301):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>Oh, come on. It ALREADY ended well! Did you not see me save you after keeping this secret? We can do it again if you want.");
                    break;
            }
            break; 
        case(302):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Fourize: </b>\"Oh, what am I saying? Blondes don't have minds of their own.\"");
                    break;
            }
            break;  
        case(303):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>So you're saying I need to fight MORE people on your team in order to succeed? Well, I assume the math makes sense on that. Sign her up already!\"");
                    break;
            }
            break; 
        case(304):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"Symmetrical.\"");
                    break;
            }
            break; 
        case(305):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Cold Miner: </b>\"About one and a half Billy Bartys");
                    break;
            }
            break; 
        case(306):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>\"Better than yours.\"");
                    break;
            }
            break;  
        case(307):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Yeah. And think of our marketing. You expect us to put a title called 'Ellie Bellavitz' up on the poster?\"");
                    break;
            }
            break;
        case(308):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"Ahhhhhh! Aliens! They've come to scare us with their hyphenated names!\"");
                    break;
            }
            break; 
        case(309):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Pyra: </b>Your WHOLE THING with you was that you dreamed of being a superhero. You seriously never thought of a name in that time?");
                    break;
                case(2):
                    $("#d").html("<b>Race: </b>\"Let's see. I got the powers. I got the helping people thing. What am I missing? Oh! I need a costume and a theme song!\"");
                    break;    
            }
            break; 
        case(310):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"Let's put all the abilities into the name generator and pull the giant lever! Woooooooo! Good name! Good name! Good name! Gimme a good name!\"");
                    break;
                case(2):
                    $("#d").html("<b>Pyra: </b>Yeah, you might wanna close your ears for this results.");
                    break;    
            }
            break; 
        case(311):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>\"This is the worst Sophie's Choice sequel I've ever seen.\"");
                    break;
            }
            break; 
        case(312):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Race: </b>\"I call no backsies!\"");
                    break;
            }
            break;
        case(313):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Bendy: </b>\"Ugh. Fine. Then can you at least give me back that pee I mailed you?\"");
                    break;
            }
            break;   
        case(314):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Nator: </b>\"I pitched \"Tyler Perry's Neo Brigade\" as the official team name, but I was instantly shot down.\"");
                    break;
                case(2):
                    $("#d").html("<b>Pyra: </b>It sounds like the Chief is gonna direct a movie about us. What happened? Roger Corman asked for too much money?");
                    break;    
            }
            break;
        case(315):
            max = 2;
            document.getElementById("next").setAttribute("style", "opacity: 1");
            document.getElementById("next").disabled = false;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Tel-E: </b>\"I have to read? What kind of hiring process is this?\"");
                    break;
                case(2):
                    $("#d").html("<b>Fourize: </b>\"That's it. I quit. Now, bring me the forms I need to read and fill out for my resignation. And it better be as short as a Delaware tourist brochure.\"");
                    break;    
            }
            break;  
        case(316):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>");
                    break;
            }
            break; 
        case(317):
            max = 1;
            document.getElementById("next").setAttribute("style", "opacity: .4");
            document.getElementById("next").disabled = true;
            switch (dialogue)
            {
                case(1):
                    $("#d").html("<b>Beauty: </b>");
                    break;
            }
            break;     
    }
}

function setDialogue(newDialogue)
{
    document.getElementById("prev").setAttribute("style", "opacity: .4");
    document.getElementById("prev").disabled = true;
    dialogue = 1;

    if (selectedDrop === 0)
    {
        DialogueChangeMenu();
    }
    else if (selectedDrop === 1 && newDialogue < 0)
    {
        commentaryDialogue = newDialogue;
        DialogueChangeMenu();
    }
    else if (selectedDrop === 2 && newDialogue > 0)
    {
        riffDialogue = newDialogue;
        DialogueChangeMenu();
    }
}

function changeMenu(change) {
    $("#dropbutton").text(change);

    document.getElementById("prev").setAttribute("style", "opacity: .4");
    document.getElementById("prev").disabled = true;

    if (change === "Normal")
    {
        selectedDrop = 0;
        dialogue = 1;
        DialogueChangeMenu();
        $(".noriffhighlight").removeClass("highlight");
        $(".nocommentaryhighlight").removeClass("highlight");
        //$("#story").empty();
        //$("#story").append("<div class = 'storysegment' ><p style = 'margin-left: 50px; margin-right: 50px;'>Testing</p></div>");

    }
    else if (change === "Character Commentary")
    {
        selectedDrop = 1;
        dialogue = 1;
        commentaryDialogue = 0;
        
        DialogueChangeMenu();
        //$("#story").empty();
        //$("#story").append("<div class = 'storysegment' ><p style = 'margin-left: 50px; margin-right: 50px;'>Testing</p></div>");
        $(".noriffhighlight").removeClass("highlight");
        //$("#story").empty();
        //$("#story").append("<div class = 'storysegment' ><p style = 'margin-left: 50px; margin-right: 50px;'>Testing</p></div>");
        $(".nocommentaryhighlight").addClass("highlight");
    }
    else if (change === "Character Riffing")
    {
        selectedDrop = 2;
        dialogue = 1;
        riffDialogue = 0;
        DialogueChangeMenu();
        $(".nocommentaryhighlight").removeClass("highlight");
        //$("#story").empty();
        //$("#story").append("<div class = 'storysegment' ><p style = 'margin-left: 50px; margin-right: 50px;'>Testing</p></div>");
        $(".noriffhighlight").addClass("highlight");
    }
}

function checkResolution() {
    //$(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    $(".storysegment").css({"width": (window.screen.width * .80)});
    $("#dropbutton, .dropdown-menu li").css({"width": (window.screen.width * .5), "cursor": "pointer"});

    segmentWidth = (window.screen.width * .80);
    buttonWidth = (window.screen.width * .5);

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

function resizeResolution() {
    //$(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    $(".storysegment").css({"width": segmentWidth});
    $("#dropbutton, .dropdown-menu li").css({"width": buttonWidth});

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