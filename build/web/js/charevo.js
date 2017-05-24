/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$(document).ready(function () {


    checkResolution();

    $(window).resize(function () {
        resizeResolution();
    });
    
    $(window).on("orientationchange", function (event) {
        checkResolution();
    });

    var characters = ["Beauty", "Tel-E", "Pyra"];
    //switchcharacter = "";
    //if(sessionStorage.getItem("SessionCharacter") === null)
    switchcharacter = parent.document.URL.substring(parent.document.URL.indexOf('?char=') + 6, parent.document.URL.length);
    //else
    //   switchcharacter = sessionStorage.getItem("SessionCharacter");
    if (characters.includes(switchcharacter))
        sessionStorage.setItem("SessionCharacter", switchcharacter);

    if (sessionStorage.getItem("SessionCharacter") !== null)
        character = sessionStorage.getItem("SessionCharacter");
    else
    {
        sessionStorage.setItem("SessionCharacter", "Beauty");
        character = "Beauty";
    }

    document.getElementById("d").innerHTML = character;
    //else
    // character = "Beauty";
    dialogue = 1;
    max = 0;
    //document.getElementById("d").innerHTML = switchcharacter;

    var beautyBold = "Beauty: ";
    beautyBold = beautyBold.bold();
    var teleBold = "Tel-E: ";
    teleBold = teleBold.bold();
    var pyraBold = "Pyra: ";
    pyraBold = pyraBold.bold();

    if (character === "Tel-E")
    {
        document.getElementById("d").innerHTML = teleBold + "Hello. Thank you for selecting me as your host. I'm Tel-E. And, like Beauty, I'll be guiding you throughout this site to share some information, though perhaps a bit more in detail.";
        document.getElementById("character").src = "images/tel-eleft1.png";
        document.getElementById("character").alt = "Tel-E Placeholder";
        max = 6;
    }
    else if (character === "Pyra")
    {
        document.getElementById("d").innerHTML = pyraBold + "Hey. So you've chosen me, Pyra as your host. Now, Beauty may be the cheerful and friendly guide and Tel-E's the more detail-oriented one. Me? I'm here to make this site honest.";
        document.getElementById("character").src = "images/pyraleft1.png";
        document.getElementById("character").alt = "Pyra Placeholder";
        max = 6;
    }
    else
    {
        document.getElementById("d").innerHTML = beautyBold + "Hi there. I'm Beauty. And welcome to the Charevo website! I'll be your host and guide for this site. Just keep an eye on this dialogue box for what I have to say and just press the Next and Prev buttons.";
        document.getElementById("character").src = "images/beautyleft1.png";
        document.getElementById("character").alt = "Beauty Placeholder";
        max = 6;
    }
    //else
    //   document.getElementById("d").innerHTML = "Beauty: Hello World ";

});



function test() {
    x++;

}

function setcharacter(selected) {
    character = selected;
}

function getcharacter() {
    return character;
}


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
                document.getElementById("d").innerHTML = teleBold + "Hello. Thank you for selecting me as your host. I'm Tel-E. And, like Beauty, I'll be guiding you throughout this site to share some information, though perhaps a bit more in detail.";
                break;
            case(2):
                document.getElementById("d").innerHTML = teleBold + "If you select from the About tab, you can learn about other characters in addition to my favorite subject, the Charevo Gene. If you haven't heard of it, give the page a visit and I can tell you!";
                break;
            case(3):
                document.getElementById("d").innerHTML = teleBold + "And from the Stories tab, you can read some tales featuring myself and the Neo Brigade. It's always nice to have some reading material available.";
                break;
            case(4):
                document.getElementById("d").innerHTML = teleBold + "Once you've read those stories, you can make them even more fun by taking a quiz on what you read. Isn't that nice. It's a great method of motivating your memory if you can make a game out of reading.";
                break;
            case(5):
                document.getElementById("d").innerHTML = teleBold + "I'll keep talking to you with as much detail as I can, but if you'd prefer a different point of view, you can always return to the Switch Character page and choose someone else.";
                break;
            case(6):
                document.getElementById("d").innerHTML = teleBold + "I mean, I AM native to a planet with the most intellectual women in the universe and have the knowledge to back that up and help others, but I won't mind. Go on then.";
                break;
        }

    }
    else if (character === "Pyra")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = pyraBold + "Hey. So you've chosen me, Pyra as your host. Now, Beauty may be the cheerful and friendly guide and Tel-E's the more detail-oriented one. Me? I'm here to make this site honest.";
                break;
            case(2):
                document.getElementById("d").innerHTML = pyraBold + "So if you wanna learn about my friends, my enemies, and what any of us have in common, select the appropriate pages from the About tab.";
                break;
            case(3):
                document.getElementById("d").innerHTML = pyraBold + "You can also select from the Stories tab if you wanna read some free novellas. What are they and why so short, you ask? Well, just think of them as TV episodes as opposed to movies because we don't have that kind of budget on this site.";
                break;
            case(4):
                document.getElementById("d").innerHTML = pyraBold + "Now, I know what you're thinking. Aren't these just five prequel stories to a novel we don't even need? Look, these novellas are free, okay? You don't like 'em? Well, what do you have to complain about?";
                break;
            case(5):
                document.getElementById("d").innerHTML = pyraBold + "Anyway, if you read those, but don't wanna stop there, you can take a quiz on them. That's right. We're testing you after giving a reading assignment. So get to work.";
                break;
            case(6):
                document.getElementById("d").innerHTML = pyraBold + "Of course, if you've had enough of me, you can always switch to one of the other girls. I don't care. Go for it. I mean . . . not that I want you to.";
                break;
        }

    }
    else
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = beautyBold + "Hi there. I'm Beauty. And welcome to the Charevo website! I'll be your host and guide for this site. Just keep an eye on this dialogue box for what I have to say and just press the Next and Prev buttons.";
                break;
            case(2):
                document.getElementById("d").innerHTML = beautyBold + "If you wanna learn more about my world, including our power source as well as my friends and enemies, select it from the About tab above.";
                break;
            case(3):
                document.getElementById("d").innerHTML = beautyBold + "You can also select from the Stories tab if you'd like to read some samples of me and my friends' adventures.";
                break;
            case(4):
                document.getElementById("d").innerHTML = beautyBold + "If you read those stories and think you know them well, you can take a quiz based on them where you might learn some neat trivia from that trivia.";
                break;
            case(5):
                document.getElementById("d").innerHTML = beautyBold + "I'll continue to guide you with my own point of view, though if you'd like to hear from one of my other friends, just go to the Switch Character page from the Miscellaneous tab.";
                break;
            case(6):
                document.getElementById("d").innerHTML = beautyBold + "So have fun. Believe me, I'm new here, and I got that all taken care of.";
                break;
        }

    }
}

function checkResolution(){
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");
    
    if (window.screen.width > 1300 && window.screen.height > 1500)
    {
        $("#character").css({"width": (window.screen.width / 1.55)});
        $("#character").css({"height": (window.screen.height / 1.14)});
        $("section").css({"height": (window.screen.height * 0.85)});
        
        characterWidth = (window.screen.width / 1.55);
        characterHeight = (window.screen.height / 1.14);
        sectionHeight = (window.screen.height * .85);
    }
    else if (window.screen.width > 1000 && window.screen.height > 1000)
    {
        $("#character").css({"width": (window.screen.width / 1.5)});
        $("#character").css({"height": (window.screen.height / 1.44)});
        $("section").css({"height": (window.screen.height * 1.05)});
        
        characterWidth = (window.screen.width / 1.5);
        characterHeight = (window.screen.height / 1.44);
        sectionHeight = (window.screen.height * 1.05);
    }
    else if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("#character").css({"width": (window.screen.width / 2.4)});
        $("#character").css({"height": (window.screen.height / .8)});
        $("section").css({"height": (window.screen.height * 1.45)});
        
        characterWidth = (window.screen.width / 2.4);
        characterHeight = (window.screen.height / .8);
        sectionHeight = (window.screen.height * 1.45);
    }
    else if (window.screen.width > 1000)
    {
        $("#character").css({"width": (window.screen.width / 2.7)});
        $("#character").css({"height": (window.screen.height / 1.44)});
        $("section").css({"height": (window.screen.height * 1.05)});
        
        characterWidth = (window.screen.width / 2.7);
        characterHeight = (window.screen.height / 1.44);
        sectionHeight = (window.screen.height * 1.05);
    }
    else
    {
        $("#character").css({"width": (window.screen.width / 1.4)});
        $("#character").css({"height": (window.screen.height / 1.44)});
        $("section").css({"height": (window.screen.height * 1.05)});
        
        characterWidth = (window.screen.width / 1.4);
        characterHeight = (window.screen.height / 1.44);
        sectionHeight = (window.screen.height * 1.05);
    }


    
}

function resizeResolution(){
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");
    
    if (window.screen.width > 1300 && window.screen.height > 1500)
    {
        $("#character").css({"width": characterWidth});
        $("#character").css({"height": characterHeight});
        $("section").css({"height": sectionHeight});
    }
    else if (window.screen.width > 1000 && window.screen.height > 1000)
    {
        $("#character").css({"width": characterWidth});
        $("#character").css({"height": characterHeight});
        $("section").css({"height": sectionHeight});
    }
    else if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("#character").css({"width": characterWidth});
        $("#character").css({"height": characterHeight});
        $("section").css({"height": sectionHeight});
    }
    else if (window.screen.width > 1000)
    {
        $("#character").css({"width": characterWidth});
        $("#character").css({"height": characterHeight});
        $("section").css({"height": sectionHeight});
    }
    else
    {
        $("#character").css({"width": characterWidth});
        $("#character").css({"height": characterHeight});
        $("section").css({"height": sectionHeight});
    }


    
}
