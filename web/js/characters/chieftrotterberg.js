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
        document.getElementById("d").innerHTML = beautyBold + "And now we come to the character page of the Neo Brigade's boss, Chief Lou Trotterberg. Now, unlike the heroes and villains, the Chief has no powers, Charevo Emblem, or Charevo Fairies to display, although he does have a bio you can check out below.";
        max = 5;
    }
    else if (character === "Tel-E")
    {
        document.getElementById("d").innerHTML = teleBold + "This is the character page for the Neo Brigade's employer, Chief Lou Trotterberg. You'll see a photo of him up top as well as a bio section below if you'd like to learn a little more about him. Um. What else? Uh, there is a bottom menu for the site if you scroll down to the end as well. I suggest you get through this small section quickly, because I feel I must make an exit soon.";
        max = 10;
    }
    else if (character === "Pyra")
    {
        document.getElementById("d").innerHTML = pyraBold + "And here we have the character page of the leader of the Neo Brigade. No. Not Race. The guy who's really in charge. That's his dad, Minor City Police Chief Lou Trotterberg.";
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

    var chiefBold = "Chief: ";
    chiefBold = chiefBold.bold();


    if (character === "Tel-E")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = teleBold + "This is the character page for the Neo Brigade's employer, Chief Lou Trotterberg. You'll see a photo of him up top as well as a bio section below if you'd like to learn a little more about him. Um. What else? Uh, there is a bottom menu for the site if you scroll down to the end as well. I suggest you get through this small section quickly, because I feel I must make an exit soon.";
                break;
            case(2):
                document.getElementById("d").innerHTML = chiefBold + "Hold it right there, you blue space speeder!";
                break;
            case(3):
                document.getElementById("d").innerHTML = teleBold + "Well, I sensed this coming.";
                break;
            case(4):
                document.getElementById("d").innerHTML = chiefBold + "What are you doing giving your superior such minimal advertisement to your visitors? You kids have so much about yourselves yet the one you work for gets THIS? I will not have it! I order you to pad this out further!";
                break;
            case(5):
                document.getElementById("d").innerHTML = teleBold + "Well, I think we've put in a sufficient amount, but if you desire some padding, I'm sure our creator can include some CSS for that and add some more white space to make the scroll bar slightly smaller to present the illusion of extra content.";
                break;
            case(6):
                document.getElementById("d").innerHTML = chiefBold + "Oh, so you'll deceive innocent people in an attempt to be on your boss' good side, will you? There's no crime your alien brain won't conceive of that your body will execute. I'd rather have a blank page than allow such an insult take place at your hand.";
                $("section").fadeIn(1000);
                $(this).clearQueue().stop();
                break;
            case(7):
                document.getElementById("d").innerHTML = teleBold + "Well, your wish is my command then.";
                $("section").fadeOut(1000);
                $(this).clearQueue().stop();
                break;
            case(8):
                document.getElementById("d").innerHTML = chiefBold + "What? No! No! Put it back! Put it back! I'm begging you! Put my small content back! Please! This is all I have!";
                break;
            case(9):
                document.getElementById("d").innerHTML = teleBold + "Teehee. Now, which of those crimes would you rather arrest me for?";
                $("section").fadeIn(1000);
                $(this).clearQueue().stop();
                break;
            case(10):
                document.getElementById("d").innerHTML = chiefBold + "The one where you took away my page content! The one where you took away my page content! Now, please! Please don't do that again!";
                break;
        }

    }
    else if (character === "Pyra")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = pyraBold + "And here we have the character page of the leader of the Neo Brigade. No. Not Race. The guy who's really in charge. That's his dad, Minor City Police Chief Lou Trotterberg.";
                break;
            case(2):
                document.getElementById("d").innerHTML = pyraBold + "Alright. Let's see what we got. Ummmm . . . well, there's the Chief's picture. And, uh, we got the guy's bio below his feet. I guess that's it. Alright. Let's go to the next page.";
                break;
            case(3):
                document.getElementById("d").innerHTML = chiefBold + "Just a minute, there, missy! What is all this brevity about? You think I'm so insignificant as a character that I can be skipped over as if these stories could function perfectly if I never existed?";
                break;
            case(4):
                document.getElementById("d").innerHTML = pyraBold + "Yes.";
                break;
            case(5):
                document.getElementById("d").innerHTML = chiefBold + "Oh, so you admit your slanderous claim! Or is it libelous? I don't know if this text counts as us writing to be honest. But, anyway, you admit to your defamatory remarks!";
                break;
            case(6):
                document.getElementById("d").innerHTML = pyraBold + "What do you mean defamatory? It's true. Our creator didn't have you in Beauty's stories in the beginning, and they were pretty good as they were. In fact, our creator only came up with you in a desperate attempt to add something new, because me and a bunch of us were just ripoffs of Teen Titans characters.";
                break;
            case(7):
                document.getElementById("d").innerHTML = chiefBold + "So you admit I add something unique to the table! And yet you think I'm nothing!";
                break;
            case(8):
                document.getElementById("d").innerHTML = pyraBold + "Well, if I'm being honest, the scenes with you do seem a little shoe-horned in and slows the story down.";
                break;
            case(9):
                document.getElementById("d").innerHTML = chiefBold + "I'm telling you, I am essential! I practically built the Neo Brigade! I deserve more!";
                break;
            case(10):
                document.getElementById("d").innerHTML = pyraBold + "You built the Neo Brigade? Yeah. You built ONE of us. And your workmanship is a little shotty, seeing as how he's so scrawny and could barely run for ten minutes before he got his powers.";
                break;
            case(11):
                document.getElementById("d").innerHTML = chiefBold + "I built you and I can break you down if I must!";
                break;
        }
    }
    else
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = beautyBold + "And now we come to the character page of the Neo Brigade's boss, Chief Lou Trotterberg. Now, unlike the heroes and villains, the Chief has no powers, Charevo Emblem, or Charevo Fairies to display, although he does have a bio you can check out below.";
                break;
            case(2):
                document.getElementById("d").innerHTML = chiefBold + "Are you saying I'm not interesting!? I'll have you know I've served in the Minor City police force for over twenty years. How come none of my greatest efforts were highlighted in my biographical section of this web location?";
                break;
            case(3):
                document.getElementById("d").innerHTML = beautyBold + "It's not that they were never important. It's just that the specifics of them aren't exactly relevant to your character. I mean, you can't expect us to go through your whole life for this thing.";
                break;
            case(4):
                document.getElementById("d").innerHTML = chiefBold + "What do you mean not relevant? I'll have you know my perfect attendance record has been the envy of my officers for years. That is the very foundation of my permanent record.";
                break;
            case(5):
                document.getElementById("d").innerHTML = beautyBold + "That's . . . fine. Although, perfect attendance isn't exactly the foundation of compelling and relevant character trivia on this site. Believe me, I'd love to pad this page out to get it to the average length, but I just feel like it would stick out a bit. You understand, right? Right?";
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
