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

    beautyrotations = 0;
    telerotations = 0;
    pyrarotations = 0;

    if (sessionStorage.getItem("firstPage") === null)
    {
        sessionStorage.setItem("firstPage", "the Switch Character page");
        sessionStorage.setItem("memory", "the Switch Character page");
        sessionStorage.setItem("currentPage", "the Switch Character page");
    }
    else
    {
        if (sessionStorage.getItem("currentPage") !== "the Switch Character page")
        {
            sessionStorage.setItem("memory", sessionStorage.getItem("memory").toString() + ", the Switch Character page");
        }
        sessionStorage.setItem("currentPage", "the Switch Character page");


    }
    if (sessionStorage.getItem("Cyhack") === "true")
    {
        $("#3").remove();
    }

    if (sessionStorage.getItem("Cyhack") !== "true")
    {
        $("#d").html("<b>Cyhack:</b> And here we have the character selection screen. You started with me, but if you wanna hear from someone else as your new host, just select them on this page. Go ahead. I'm not the only one with a story and insight in this world.");
        $('#myCarousel').on('slide.bs.carousel', function (ev) {
            var id = ev.relatedTarget.id;

            if (id === "0")
            {

                $("#d").html("<b>Cyhack:</b> Ooh, look at me. I'm Beauty. I look like I'm in such a good mood all the time and have so much fun with everything I do, which has nothing to do with the fact that I'm the main character in these stories. I'm the pretty girl, but I don't like being the pretty girl, and that's what makes me relatable, and that's why you should pick me as the host.");

            }
            else if (id === "1")
            {

                $("#d").html("<b>Cyhack:</b> 'Ello 'ello. I'm an alien! And I have an alien name! It's Tel-E, which sounds like what I call a TV, because even though I'm from another planet, I have an accent that sounds like I'm from England. I know you think that's a stupid idea, because I can read minds. Cheerio then, 'cause I see you're 'bout to skip right over me selection.");
            }
            else if (id === "2")
            {

                $("#d").html("<b>Cyhack:</b> Oh, is that a visitor? Well, I'm Pyra and I'm so depressed about not having more friends. But I'm not too sad that I won't be a sarcastic jerk around other people to punish them for being my friend. Ooh. I don't like a lot of people. But I don't wanna be alone. I'm sad. I don't care. I'm sad. I don't care. I have all these social problems, but I think you should choose me to hang out with on this site.");

            }
            else if (id === "3")
            {
                $("#d").html("<b>Cyhack:</b> Ooh. Look at me, I'm Cyhack. I . . . Wait. Uh oh. I shouldn't be here. Uh, hey there. No need to choose me. I'm already around. Just choose one of the other girls. What are you lookin' at? Go look at someone else! And click someone else! Just not me!");

            }
        });
    }
    else if (character === "Tel-E")
    {
        $("#a0").attr("class", "");
        $("#a1").attr("class", "active");
        $("#0").attr("class", "item");
        $("#1").attr("class", "item active");
        $("#d").html("<b>Tel-E:</b> I see you've returned to the character selection page. No problem. Just choose from any of the other girls available on this menu and they'll help guide you through this site just as I have. I'll be right here if you wish to bring me back as host.");


        $('#myCarousel').on('slide.bs.carousel', function (ev) {
            var id = ev.relatedTarget.id;

            if (id === "0")
            {
                if ((pyrarotations / 2) === 21)
                {
                    $(".left").click(function () {
                        $("#2").remove();
                        pyrarotations++;
                    });
                }
                beautyrotations++;
                if ((pyrarotations / 2) >= 21)
                {
                    $("#d").html("<b>Beauty:</b> Hi! I'm Beauty. Though, you . . . wait. Have you seen Pyra? Ugh. Lemme guess. You took too long to choose a host didn't you? Sorry about that.");

                }
                else
                    $("#d").html("<b>Beauty:</b> Hi! I'm Beauty. Though, you probably already knew that since I'm the default character. Anyway, if you liked me at the start, I can talk to you some more. Just give me a click and I'll be your host again.");
            }
            else if (id === "1")
            {
                if ((pyrarotations / 2) === 21)
                {
                    $(".right").click(function () {
                        $("#2").remove();
                        pyrarotations++;
                    });
                }

                if ((pyrarotations / 2) >= 21)
                {
                    $("#d").html("<b>Tel-E:</b> Hello again. Sorry if you were expecting someone else. There's only the three of us girls to choose from as . . . wait. Where did Pyra go? Oh dear. Sorry. She's usually shy around others. What? She was impatient with you? Oh. Right then. Well, just me and Beauty here for now.");

                }
                else if (beautyrotations >= 1 && pyrarotations >= 1)
                {
                    telerotations++;
                    $("#d").html("<b>Tel-E:</b> Hello again. Sorry if you were expecting someone else. There's only the three of us girls to choose from as your host. I know. It would be nice for the gentlemen to be here to guide you as well, but we were the only ones called in for this. Feel free to select anyone available for now.");
                }
                else
                    $("#d").html("<b>Tel-E:</b> I see you've returned to the character selection page. No problem. Just choose from any of the other girls available on this menu and they'll help guide you through this site just as I have. I'll be right here if you wish to bring me back as host.");

            }
            else if (id === "2")
            {
                if ((pyrarotations / 2) >= 20)
                {
                    $("#d").html("<b>Pyra:</b> Alright. That's it. I can't do this anymore. You rotating me like this without choosing someone for this long is making me too sick and dizzy. See ya. You won't see me here again as long as you're here. I'm not kidding. I'm gettin' outta here. Peace out, folks.");
                    pyrarotations++;
                }
                else if ((pyrarotations / 2) >= 10)
                {
                    pyrarotations++;
                    $("#d").html("<b>Pyra:</b> Ugh. Could you pick a host already? Some of us get pretty dizzy here if you keep spinning the carousel like this, you know. ");

                }
                else
                {
                    pyrarotations++;
                    $("#d").html("<b>Pyra:</b> Oh, hey. So . . . I guess I'm Pyra. Yeah. Alright, look, I know I'm not that happy and trivia focused like the other two, but if you just wanna hear me stick it to our creator and his ideas, then just choose me. Or don't. I'm not trying to make you or anything.");
                }
            }
            else if (id === "3")
            {
                $("#d").html("<b>Cyhack:</b> Testing");

            }
        });
    }
    else if (character === "Pyra")
    {
        $("#a0").attr("class", "");
        $("#a2").attr("class", "active");
        $("#0").attr("class", "item");
        $("#2").attr("class", "item active");
        //$("#1").remove()
        $("#d").html("<b>Pyra:</b> Oh. You wanna hang with someone else? Okay. That's cool. I don't care. Beauty and Tel-E have time too. Just pick one of them and they'll be your new friend. I'll be here if you change your mind. Really . . . go ahead. I'm . . . I'm fine.");


        $('#myCarousel').on('slide.bs.carousel', function (ev) {
            var id = ev.relatedTarget.id;

            if (id === "0")
            {
                if ((pyrarotations / 2) === 21)
                {
                    $(".left").click(function () {
                        $("#2").remove();
                        pyrarotations++;
                    });
                }
                beautyrotations++;
                if ((pyrarotations / 2) >= 21)
                {
                    $("#d").html("<b>Beauty:</b> Hi! I'm Beauty. Though, you . . . wait. Did Pyra just leave? I didn't know we could do that. Well, Tel-E and I are still here if you'd like either of us as your host. Seriously? She just left?");

                }
                else
                    $("#d").html("<b>Beauty:</b> Hi! I'm Beauty. Though, you probably already knew that since I'm the default character. Anyway, if you liked me at the start, I can talk to you some more. Just give me a click and I'll be your host again.");
            }
            else if (id === "1")
            {
                if ((pyrarotations / 2) === 21)
                {
                    $(".right").click(function () {
                        $("#2").remove();
                        pyrarotations++;
                    });
                }
                telerotations++;
                if ((pyrarotations / 2) >= 21)
                {
                    $("#d").html("<b>Tel-E:</b> Hello. I am Tel-E Vega of . . . Uh oh. I'm sensing impatience and absence. Did something happen? And where's Pyra? She . . . oh. You must've taken too long then. Right. Just me and Beauty for now.");

                }
                else
                    $("#d").html("<b>Tel-E:</b> Hello. I am Tel-E Vega of Planet Knowlgia. I've only been on Earth for a little less than a year, but I'm more knowledgable than you think. So if you'd like some more details on this world, why not select me as your host? Go on then.");
            }
            else if (id === "2")
            {
                if ((pyrarotations / 2) >= 20)
                {
                    $("#d").html("<b>Pyra:</b> Alright. That's it. I'm gettin' outta here. You rotating me over and over without choosing anyone is making me too sick and dizzy. Seriously, I gotta go. I don't even know why I'm here at all. I'm your current host. What are you gonna do? Pick me twice? You can just go to the home page and see me again. You don't need me here. Later.");
                    pyrarotations++;
                }
                else if ((pyrarotations / 2) >= 10)
                {
                    pyrarotations++;
                    $("#d").html("<b>Pyra:</b> Ugh. Could you pick a host already? Some of us get pretty dizzy here if you keep spinning the carousel like this, you know. ");

                }
                else if (beautyrotations >= 1 && telerotations >= 1)
                {
                    pyrarotations++;
                    $("#d").html("<b>Pyra:</b> Well, look who's back. What? You wanted a fourth person to be here? Well, too bad. Our creator didn't wanna write for more than three hosts, and, for some reason, I got chosen as one of those hosts. So you can take another trip around this selection for someone if you want, but it's not gonna change.");
                }
                else
                    $("#d").html("<b>Pyra:</b> Oh. You wanna hang with someone else? Okay. That's cool. I don't care. Beauty and Tel-E have time too. Just pick one of them and they'll be your new friend. I'll be here if you change your mind. Really . . . go ahead. I'm . . . I'm fine.");

            }
        });
    }
    else
    {

        $("#d").html("<b>Beauty:</b> And here we have the character selection screen. You started with me, but if you wanna hear from someone else as your new host, just select them on this page. Go ahead. I'm not the only one with a story and insight in this world.");
        $('#myCarousel').on('slide.bs.carousel', function (ev) {
            var id = ev.relatedTarget.id;

            if (id === "0")
            {
                if ((pyrarotations / 2) === 21)
                {
                    $(".left").click(function () {
                        $("#2").remove();
                        pyrarotations++;
                    });
                }

                if ((pyrarotations / 2) >= 21)
                {
                    $("#d").html("<b>Beauty:</b> Hi! Me again. So . . . wait. Where'd Pyra go? She was just here on the left. No? Uh . . . okay then. I was gonna remind you Tel-E and Pyra are still available, but I guess it's just Tel-E then. Take your time. We'll both still be here.");

                }
                else if (pyrarotations >= 1 && telerotations >= 1)
                {
                    beautyrotations++;
                    $("#d").html("<b>Beauty:</b> Hi. Me again. So . . . yeah. You started with me, but you can still hear from someone else as your new host. Tel-E and Pyra are the only other ones. So don't just skip them this time. Give one of 'em a pick.");
                }
                else
                    $("#d").html("<b>Beauty:</b> And here we have the character selection screen. You started with me, but if you wanna hear from someone else as your new host, just select them on this page. Go ahead. I'm not the only one with a story and insight in this world.");

            }
            else if (id === "1")
            {
                if ((pyrarotations / 2) === 21)
                {
                    $(".right").click(function () {
                        $("#2").remove();
                        pyrarotations++;
                    });
                }

                telerotations++;
                if ((pyrarotations / 2) >= 21)
                {
                    $("#d").html("<b>Tel-E:</b> Hello. I am Tel-E Vega of Planet . . . hang on. Did this selection menu just get smaller?");

                }
                else
                    $("#d").html("<b>Tel-E:</b> Hello. I am Tel-E Vega of Planet Knowlgia. I've only been on Earth for a little less than a year, but I'm more knowledgable than you think. So if you'd like some more details on this world, why not select me as your host? Go on then.");
            }
            else if (id === "2")
            {
                if ((pyrarotations / 2) >= 20)
                {
                    $("#d").html("<b>Pyra:</b> Alright. That's it. I'm gettin' outta here. You rotating me like this without choosing someone for this long is making me too sick and dizzy. See ya. You won't see me here again as long as you're here. I'm not kidding. I'm leaving. Peace out, folks.");
                    pyrarotations++;
                }
                else if ((pyrarotations / 2) >= 10)
                {
                    pyrarotations++;
                    $("#d").html("<b>Pyra:</b> Ugh. Could you pick a host already? Some of us get pretty dizzy here if you keep spinning the carousel like this, you know. ");

                }
                else
                {
                    pyrarotations++;
                    $("#d").html("<b>Pyra:</b> Oh, hey. So . . . I guess I'm Pyra. Yeah. Alright, look, I know I'm not that happy and trivia focused like the other two, but if you just wanna hear me stick it to our creator and his ideas, then just choose me. Or don't. I'm not trying to make you or anything.");
                }
            }
        });
    }


});

function incrementSwitch(newCharacter) {
    if (newCharacter !== character && newCharacter !== "Cyhack")
    {
        if (sessionStorage.getItem("switches") === null)
        {
            sessionStorage.setItem("switches", 1);
        }
        else
        {
            sessionStorage.setItem("switches", parseInt(sessionStorage.getItem("switches")) + 1);
        }

        if (newCharacter === "Beauty")
        {
            sessionStorage.setItem("SessionCharacter", "Beauty");
            
            if (sessionStorage.getItem("beautySwitches") === null)
            {
                sessionStorage.setItem("beautySwitches", 1);
            }
            else
            {
                sessionStorage.setItem("beautySwitches", parseInt(sessionStorage.getItem("beautySwitches")) + 1);
            }
        }
        else if(newCharacter === "Tel-E")
        {
            sessionStorage.setItem("SessionCharacter", "Tel-E");
            
            if (sessionStorage.getItem("tel-eSwitches") === null)
            {
                sessionStorage.setItem("tel-eSwitches", 1);
            }
            else
            {
                sessionStorage.setItem("tel-eSwitches", parseInt(sessionStorage.getItem("tel-eSwitches")) + 1);
            }
        }
        else if(newCharacter === "Pyra")
        {
            sessionStorage.setItem("SessionCharacter", "Pyra");
            
            if (sessionStorage.getItem("pyraSwitches") === null)
            {
                sessionStorage.setItem("pyraSwitches", 1);
            }
            else
            {
                sessionStorage.setItem("pyraSwitches", parseInt(sessionStorage.getItem("pyraSwitches")) + 1);
            }
        }
    }
    else if(newCharacter === "Cyhack")
    {
        sessionStorage.setItem("Cyhack", "false");
    }

}

function checkResolution() {
    //$(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    sectionWidth = window.screen.width;

    $("#myCarousel").css({"width": (window.screen.screen * .85)});

    carouselWidth = (window.screen.screen * .85);

    if (window.screen.height < 600 && window.screen.width < 600 && window.screen.height < window.screen.width)
    {
        $("section").css({"height": (window.screen.height * 2.8)});
        sectionHeight = (window.screen.height * 2.8);
    }
    else if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("section").css({"height": (window.screen.height * 1.9)});
        sectionHeight = (window.screen.height * 1.9);
    }
    else if (window.screen.height > 600)
    {
        $("section").css({"height": (window.screen.height * 1.15)});
        sectionHeight = (window.screen.height * 1.15);
    }
    else
    {
        $("section").css({"height": (window.screen.height * 1.65)});
        sectionHeight = (window.screen.height * 1.65);
    }
    //$("section").css({"height": (window.screen.height * 1.05)});
}

function resizeResolution() {
    //$(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + sectionWidth + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    $("#myCarousel").css({"width": carouselWidth});

    if (window.screen.height < 600 && window.screen.width < 600 && window.screen.height < window.screen.width)
    {
        $("section").css({"height": sectionHeight});
    }
    else if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("section").css({"height": sectionHeight});
    }
    else if (window.screen.height > 600)
        $("section").css({"height": sectionHeight});
    else
        $("section").css({"height": sectionHeight});
    //$("section").css({"height": (window.screen.height * 1.05)});
}