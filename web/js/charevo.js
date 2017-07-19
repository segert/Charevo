/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$(document).ready(function () {
    /* $("#maindiv").hide();
     $("section").hide();
     $("nav").hide();
     $("#formdiv").hide();
     $(".footers").hide();*/



    $("#bluescreen").hide();
    //$("#bluescreen").css({"visibility": "visible"});


    checkResolution();

    $(window).resize(function () {
        resizeResolution();
    });

    $(window).on("orientationchange", function (event) {
        checkResolution();
    });

    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    if (isIE)
    {
        $("#character").css({left: "-10%"});

        if (window.screen.width > 1500)
            $("#character").animate({left: "17%"});
        else if (window.screen.width > 1000 && window.screen.height > 1000)
            $("#character").animate({left: "20%"});
        else if (window.screen.width > 800)
            $("#character").animate({left: "29%"});
        else
            $("#character").animate({left: "20%"});
    }



    question = "";
    teleAddressed = 0;
    bluescreenon = 1;
    change = 0;
    rotate = 0;
    angle = 0;
    lostElements = -1;

    //var characters = ["Beauty", "Tel-E", "Pyra"];
    //switchcharacter = "";
    //if(sessionStorage.getItem("SessionCharacter") === null)
    //if (sessionStorage.getItem("SessionCharacter") !== null)
    //    switchcharacter = parent.document.URL.substring(parent.document.URL.indexOf('?char=') + 6, parent.document.URL.length);
    //else
    //   switchcharacter = sessionStorage.getItem("SessionCharacter");
    //if (characters.includes(switchcharacter))
    //    sessionStorage.setItem("SessionCharacter", switchcharacter);

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

    var cyhackBold = "Cyhack: ";
    cyhackBold = cyhackBold.bold();

    if (sessionStorage.getItem("firstPage") === null)
    {
        sessionStorage.setItem("firstPage", "the Home page");
        sessionStorage.setItem("memory", "the Home page");
        sessionStorage.setItem("currentPage", "the Home page");
    }
    else
    {
        if (sessionStorage.getItem("currentPage") !== "the Home page")
        {
            sessionStorage.setItem("memory", sessionStorage.getItem("memory").toString() + ", the Home page");
        }
        sessionStorage.setItem("currentPage", "the Home page");


    }

    rotateTelE();

    cyhack = 0;

    if (sessionStorage.getItem("Cyhack") === "true")
    {
        cyhack = 1;
    }



    if (sessionStorage.getItem("Cyhack") === "true")
    {
        if (character === "Tel-E")
        {
            document.getElementById("d").innerHTML = teleBold + "Hello. Thank you for selecting me as your host. I'm Tel-E. And, like Beauty, I'll be guiding you throughout this site to share some information, though perhaps a bit more in detail.";
            document.getElementById("character").src = "images/tel-eleft1.png";
            document.getElementById("character").alt = "Tel-E Placeholder";
            max = 27;

            visiblePage();



            document.getElementById("d").innerHTML = cyhackBold + "Sorry, boys and girls. The Cyhack's taken over as host. ";

        }
        else if (character === "Pyra")
        {
            document.getElementById("d").innerHTML = pyraBold + "Hey. So you've chosen me, Pyra as your host. Now, Beauty may be the cheerful and friendly guide and Tel-E's the more detail-oriented one. Me? I'm here to make this site honest.";
            document.getElementById("character").src = "images/pyraleft1.png";
            document.getElementById("character").alt = "Pyra Placeholder";

            position = $("#character").position();


            originalWidth = document.getElementById("character").width;
            originalHeight = document.getElementById("character").height;

            $("#character").css({"width": (characterWidth * 1.5), "height": (characterHeight * 1.5)});
            characterWidth = characterWidth * 1.5;
            characterHeight = characterHeight * 1.5;
            max = 21;
        }
        else
        {
            document.getElementById("d").innerHTML = beautyBold + "Hi there. I'm Beauty. And welcome to . . . whoa. Wait a minute. This isn't me. Sorry. Just a sec.";
            document.getElementById("character").src = "images/cyhackleft1.png";
            document.getElementById("character").alt = "Beauty Placeholder";
            max = 22;
            //document.getElementById("d").innerHTML = sessionStorage.getItem("memory");

        }


    }
    else {
        if (character === "Tel-E")
        {
            document.getElementById("d").innerHTML = teleBold + "Hello. Thank you for selecting me as your host. I'm Tel-E. And, like Beauty, I'll be guiding you throughout this site to share some information, though perhaps a bit more in detail.";
            document.getElementById("character").src = "images/tel-eleft1.png";
            document.getElementById("character").alt = "Tel-E Placeholder";
            max = 6;
        }
        else if (character === "Pyra")
        {
            if (sessionStorage.getItem("homeBurned") === "true")
            {
                document.getElementById("d").innerHTML = pyraBold + "Huh? What? You . . . you want me to be your host again. Even though I destroyed this page last time?";
                max = 6;
                sessionStorage.setItem("afterBurned", "true");
                sessionStorage.setItem("homeBurned", "false");
            }
            else
            {
                document.getElementById("d").innerHTML = pyraBold + "Hey. So you've chosen me, Pyra as your host. Now, Beauty may be the cheerful and friendly guide and Tel-E's the more detail-oriented one. Me? I'm here to make this site honest.";
                max = 6;
                sessionStorage.setItem("afterBurned", "false");
            }
            document.getElementById("character").src = "images/pyraleft1.png";
            document.getElementById("character").alt = "Pyra Placeholder";
            max = 6;

            $("#character").css({"cursor": "pointer"});


            $("#character").mouseover(function () {
                if (lostElements < 8)
                    document.getElementById("d").innerHTML = pyraBold + "Whoa! Careful now. I'm not engulfed in flames right now, but my body isn't exactly 98.6. So, please, for your own safety, just get that cursor away from me. And don't even think of clicking me. I really don't want anyone getting hurt.";
                
            });

            $("#character").mouseleave(function () {
                if (lostElements < 0)
                    DialogueChangeMenu();
                
            });


            $("#character").click(function () {
                if(lostElements === -1)
                    lostElements = 0;
                switch (lostElements)
                {
                    case(0):
                        location.href = "#homedisplay";
                        document.getElementById("d").innerHTML = pyraBold + "Hey! I told you not to click me! Oh no. I was afraid of this. My heat's affected the page. The Home button's gone. Please. Don't do that again.";
                        $("#homedisplay").fadeOut(900, function () {
                            lostElements = 1;
                        });
                        break;
                    case(1):
                        location.href = "#subcharacters";
                        document.getElementById("d").innerHTML = pyraBold + "Ah! What are you doing? Didn't you hear me? I said not to click me. My body only inflicts mild burns to whatever touches it. Now another link just disappeared. If you keep clicking me, this'll happen again.";
                        $("#subcharacters").fadeOut(900, function () {
                            lostElements = 2;
                        });
                        break;
                    case(2):
                        location.href = "#subabout";
                        document.getElementById("d").innerHTML = pyraBold + "No! I just lost another link! If I'm not making this clear, I need you to keep your hands off me or you'll get hurt! So, please, just keep that little hand off.";
                        $("#subabout").fadeOut(900, function () {
                            lostElements = 3;
                        });
                        break;
                    case(3):
                        location.href = "#subhome";
                        document.getElementById("d").innerHTML = pyraBold + "Oh no. The copyright section is gone! Please stop. This page is falling apart one piece at a time. I told you to keep your hands off me! You'll only get hurt!";
                        $(".footercontent2").fadeOut(900, function () {
                            lostElements = 4;
                        });
                        break;
                    case(4):
                        location.href = "#subhome";
                        document.getElementById("d").innerHTML = pyraBold + "No! Two links just got destroyed! It's getting worse. Please stop.";
                        $("#subquiz").fadeOut(900, function () {

                        });

                        $("#subhome").fadeOut(900, function () {
                            lostElements = 5;
                        });
                        break;
                    case(5):
                        location.href = "#menudiv";
                        document.getElementById("d").innerHTML = pyraBold + "Ah! The search bar's deteriorated. Ugh. For the love of God. What am I not being clear about? DON'T CLICK ME!";
                        $("#theForm").fadeOut(900, function () {
                            lostElements = 6;
                        });
                        break;
                    case(6):
                        location.href = "#subbeautystories";
                        document.getElementById("d").innerHTML = pyraBold + "Oh boy. Not good. More of the footer links. You're really making me look bad here. Just please stop hurting yourself.";

                        $("#substories").fadeOut(900, function () {

                        });
                        $("#submiscellaneous").fadeOut(900, function () {

                        });
                        $("#subbeautystories").fadeOut(900, function () {
                            lostElements = 7;
                        });
                        break;
                    case(7):
                        location.href = "#test3";
                        document.getElementById("d").innerHTML = pyraBold + "Eek! Not again! Oh God. Why do the hosts have to stand here? Please. I really don't want to hurt you. And I can tell you won't last much longer if you click me again. So, I beg you, don't click me again. I mean it this time!";
                        $("#test3").fadeOut(900, function () {
                            lostElements = 8;
                        });
                        break;
                    case(8):
                        location.href = "#subswitchcharacter";
                        document.getElementById("d").innerHTML = pyraBold + "Aaaaah! Another link! Oh no. Another link! Oh God! It's spreading! My fire's spreading! Everything's deteriorating one after the other! I can't stop any of this! . . . Uh . . . uh . . . It won't stop. Why won't it stop? . . . Okay. Hang on! I'm getting you out of here!";
                        
                        document.getElementById("prev").setAttribute("style", "opacity: .4");
                        document.getElementById("prev").disabled = true;

                        document.getElementById("next").setAttribute("style", "opacity: .4");
                        document.getElementById("next").disabled = true;
                        $("#subswitchcharacter").fadeOut(900, function () {
                            location.href = "#subblog";
                            $("#subblog").fadeOut(900, function () {
                                location.href = "#test2";
                                $("#test2").fadeOut(900, function () {
                                    location.href = "#subbeautyquizzes";
                                    $("#subbeautyquizzes").fadeOut(900, function () {
                                        location.href = "#menudiv";
                                        $("#formdiv").fadeOut(900, function () {
                                            location.href = "#subauthor";
                                            $("#subauthor").fadeOut(900, function () {
                                                location.href = "#subcharevogene";
                                                $("#subcharevogene").fadeOut(900, function () {
                                                    location.href = "#maindiv2";
                                                    $("#maindiv2").fadeOut(900, function () {
                                                        location.href = "#test4";
                                                        $("#test4").fadeOut(900, function () {
                                                            location.href = "#test";
                                                            $("#test").fadeOut(900, function () {
                                                                location.href = "#menudiv";
                                                                $("nav").fadeOut(900, function () {
                                                                    lostElements = 9;

                                                                    sessionStorage.setItem("homeBurned", "true");
                                                                    document.getElementById("d").innerHTML = "";
                                                                    location.href = "switchcharacter.html";
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                        break;

                }
            });
        }
        else
        {
            document.getElementById("d").innerHTML = beautyBold + "Hi there. I'm Beauty. And welcome to stephenegert.com! I'll be your host and guide for this site. Just keep an eye on this dialogue box for what I have to say and just press the Next and Prev buttons.";
            document.getElementById("character").src = "images/beautyleft1.png";
            document.getElementById("character").alt = "Beauty Placeholder";
            max = 6;
            //document.getElementById("d").innerHTML = sessionStorage.getItem("memory");

        }
    }

    var curseWords = ["fuck", "shit", "cocksuck", "cock suck", "cunt", "twat", " tit ", " tits ", " tit.", " tits.", " tits?"];

    $(document).keypress(function (e) {
        if (character === "Tel-E" && cyhack === 0)
        {
            var x = e.which || e.keycode;



            if (x === 13)
            {
                askTelE(question);
                question = "";
            }
            else
            {
                question = question + String.fromCharCode(x);
                //document.getElementById("d").innerHTML = question;

                for (var i = 0; i < curseWords.length; i++)
                {
                    if (question.toLowerCase().includes(curseWords[i]))
                    {
                        document.getElementById("d").innerHTML = teleBold + "Um. So sorry to interrupt your thoughts, but I would appreciate you staying away from profanity. I can hear your terrible language in my mind, you know.";

                        sessionStorage.setItem("curse", "true");

                        if (teleAddressed === 0)
                            teleAddressed = 1;

                        question = "";
                    }
                }


            }
        }
    });

});

function visiblePage() {
    setTimeout(function () {
        if (character === "Tel-E")
        {
            $("#maindiv").show();
            $("section").show();
            $("nav").show();
            $("#formdiv").show();
            $(".footers").show();

            $("#bluescreen").hide();
            $("#bluescreen").css({"visibility": "hidden"});

            bluescreenon = 1;

            bluePage();

        }


    }, 6000);
}

function bluePage() {
    setTimeout(function () {
        if (character === "Tel-E")
        {
            $("#maindiv").hide();
            $("section").hide();
            $("nav").hide();
            $("#formdiv").hide();
            $(".footers").hide();

            $(".imgmenu1").css({"animation-name": "ljjlljl"});

            $("#bluescreen").show();
            $("#bluescreen").css({"visibility": "visible"});

            bluescreenon = 0;
            visiblePage();

        }
    }, 20000);
}


function askTelE(newquestion)
{
    var teleBold = "Tel-E: ";
    teleBold = teleBold.bold();
    if (teleAddressed === 0)
    {
        var greeting = /^((hello)|(hi))[\.\!]*$/i;
        if (greeting.test(newquestion))
        {
            document.getElementById("d").innerHTML = teleBold + "And hello to you. I hope I'm not freaking you out with responding to you, but I am a telepath. Don't believe me? Think (or type) something else then. I'll perfectly pick it up mentally. Go on then.";
            teleAddressed = 1;
        }
    }
    else
    {
        var question1 = /^((who)|(what)) are you[\.\?]*$/i;

        if (question1.test(newquestion))
        {
            document.getElementById("d").innerHTML = teleBold + "Who am I, you ask? Why, I'm Tel-E Vega of Planet Knowlgia. My home is a world of intelligent women with super abilities from our Charevo Genes. With my power of Telepathy, Telekinesis, and Energy Projection, I help rid Minor City of evil as part of the Neo Brigade, a team of super powered teens. I hope that answers your question.";
        }
    }
}


function next() {
    if (dialogue < max)
    {
        dialogue++;

        document.getElementById("prev").setAttribute("style", "opacity: 1");
        document.getElementById("prev").disabled = false;
        DialogueChangeMenu();
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

        document.getElementById("next").setAttribute("style", "opacity: 1");
        document.getElementById("next").disabled = false;
        DialogueChangeMenu();
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

    $(".imgmenu1").css({"animation-name": "ljjlljl"});


    if (sessionStorage.getItem("Cyhack") === "true")
    {


        if (character === "Tel-E")
        {
            switch (dialogue)
            {
                case(1):
                    document.getElementById("d").innerHTML = teleBold + "rebmqpierweriuriaj ;jadsofjdadjfaopdjfa;lkf j ajdfakjf pajf ka;j;adkafpdfjap adfk a;j lsdfjlsdjf adflkjaljflkaj af;ajf;akj adsjf;j 29843 js fdsafi a[if-qa;jf aadf ar ijeig-92834 uidsff 4 d;lfkja;fja;jkldsj alkjfaljf;ajdf; fldfe0 9r8eajfaiaouf98 jeoiai90 adkfja oiijf a;kldjjfa; aijdf ;lkj aoijdsf;alk sldkfjsldj lskjdf lksdjf la;jf; jklcmv,bnmcv,lk fdsa fj98efj 934 jaf3 a,dfm ;kal iewt perw utpeu kqwerupq qpur qpi pieur rej pajf a;kldsjf akl;sjf pqieur irejaksmvxcjjjjjjjjrewt894 34082 207 203475 ujajfd0823?????????????????????";
                    break;
                case(2):
                    document.getElementById("d").innerHTML = cyhackBold + "Ahahahaha! Gee, that's some alien language you've got there, Knowlgian.";
                    break;
                    /*case(3):
                     document.getElementById("d").innerHTML = teleBold + "lkj frw948 9jsf 9834 j f3948 3 of 983 GetSystemReport v1.0; print '][TARGET DDOS ADDRESS + sys.argv[0]; print 'injecting' + sys.argv[1];  def attack(); Bobby'; Drop table users;'-- . . . Urgh . . . Cyhack? What are you doing?";
                     break;*/
                case(3):
                    document.getElementById("d").innerHTML = teleBold + "dflks ja;ldfj apdsoif jaosdfj jsad jvk;slfjd pq3ijfke sfj9384 jsodf j93-q ur-wej if 899-asdf -a fjdjf qkwjq i0f93q jie20 2 skfj fpqwe jdfgj q9 83jskf03 . . . Urgh . . . Cyhack? What . . . what are you doing?";
                    break;
                case(4):
                    document.getElementById("d").innerHTML = cyhackBold + "Didn't you hear? The Cyhack's the new permanent host. Everything on this site is now mine. And that includes your actions.";
                    break;
                case(5):
                    document.getElementById("d").innerHTML = teleBold + "My people have proven themselves mentally strong time and time again. You won't be compromising me here, Cyhack.";
                    break;
                case(6):
                    document.getElementById("d").innerHTML = cyhackBold + "Oh, yes I will. Now, let's show everyone how smart you are with some more gibberish.";
                    break;
                case(7):
                    document.getElementById("d").innerHTML = teleBold + ". . . I said no!";
                    break;
                case(8):
                    document.getElementById("d").innerHTML = cyhackBold + "Hmm. You're persistent. So you won't submit to my control? How's about some o' this?";
                    rotate = 0;
                    break;
                case(9):
                    document.getElementById("d").innerHTML = teleBold + "Whoa whoa whoa whoa whoa whaaaaaaaa!";
                    rotate = 1;
                    break;
                case(10):
                    document.getElementById("d").innerHTML = cyhackBold + "A little dizzy, are you? How's your head feelin' now?";
                    break;
                case(11):
                    document.getElementById("d").innerHTML = teleBold + "I'm . . . not . . . doing . . . your . . . bidding!";
                    break;
                case(12):
                    document.getElementById("d").innerHTML = cyhackBold + "Well, let's just see how succeptible you are now. Read the User's mind and give me their information.";
                    rotate = 1;
                    break;
                case(13):
                    document.getElementById("d").innerHTML = teleBold + ". . .";
                    rotate = 0;
                    //$("#character").removeClass("rotate" + angle);
                    break;
                case(14):
                    document.getElementById("d").innerHTML = teleBold + ". . . Urgh . . . To the User . . . I sincerely apologize.";
                    break;
                case(15):
                    document.getElementById("d").innerHTML = cyhackBold + "Ah, there we go. The Knowlgian is reading your mind, so, by extension, the Cyhack is reading your mind. Let's take a look see what's inside, shall we? Ah. This is nice. I know everything about you from this site!";
                    break;

                case(16):
                    // Opera 8.0+
                    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

                    // Firefox 1.0+
                    var isFirefox = typeof InstallTrigger !== 'undefined';

                    // Safari 3.0+ "[object HTMLElementConstructor]" 
                    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
                        return p.toString() === "[object SafariRemoteNotification]";
                    })(!window['safari'] || safari.pushNotification);

                    // Internet Explorer 6-11
                    var isIE = /*@cc_on!@*/false || !!document.documentMode;

                    // Edge 20+
                    var isEdge = !isIE && !!window.StyleMedia;

                    // Chrome 1+
                    var isChrome = !!window.chrome && !!window.chrome.webstore;

                    // Blink engine detection
                    var isBlink = (isChrome || isOpera) && !!window.CSS;
                    if (isOpera)
                        document.getElementById("d").innerHTML = cyhackBold + "I see you're using an Opera browser.";
                    else if (isFirefox)
                        document.getElementById("d").innerHTML = cyhackBold + "I see you're using a Firefox browser.";
                    else if (isSafari)
                        document.getElementById("d").innerHTML = cyhackBold + "I see you're using a Safari browser.";
                    else if (isIE)
                        document.getElementById("d").innerHTML = cyhackBold + "I see you're using an Internet Explorer browser.";
                    else if (isEdge)
                        document.getElementById("d").innerHTML = cyhackBold + "I see you're using a Microsoft Edge browser.";
                    else if (isChrome)
                        document.getElementById("d").innerHTML = cyhackBold + "I see you're using a Google Chrome browser.";
                    else
                        document.getElementById("d").innerHTML = cyhackBold + "Hmm. I can't quite see what browser you're using.";
                    break;
                case(17):
                    if (window.screen.width < 450 && window.screen.height < 400)
                        document.getElementById("d").innerHTML = cyhackBold + "And you're also on a device with a screen width of " + window.screen.width + " pixels and a screen height of " + window.screen.height + " pixels. Wait. What? Is this supposed to be Google Glass?";
                    else if (window.screen.width < 440 && window.screen.height < 800)
                        document.getElementById("d").innerHTML = cyhackBold + "And you're also on a device with a screen width of " + window.screen.width + " pixels and a screen height of " + window.screen.height + " pixels. A smartphone user, are you?";
                    else if (window.screen.width < 850 && window.screen.height < 1350)
                        document.getElementById("d").innerHTML = cyhackBold + "And you're also on a device with a screen width of " + window.screen.width + " pixels and a screen height of " + window.screen.height + " pixels. A tablet user, are you?";
                    else if (window.screen.width < 1050 && window.screen.height < 1500)
                        document.getElementById("d").innerHTML = cyhackBold + "And you're also on a device with a screen width of " + window.screen.width + " pixels and a screen height of " + window.screen.height + " pixels. A tablet user, are you? Or is this just a relatively small laptop?";
                    else
                        document.getElementById("d").innerHTML = cyhackBold + "And you're also on a device with a screen width of " + window.screen.width + " pixels and a screen height of " + window.screen.height + " pixels. I guess you prefer laptops and desktop computers to mobile devices, huh?";
                    break;
                case(18):
                    if (sessionStorage.getItem("switches") === null)
                        document.getElementById("d").innerHTML = cyhackBold + "Hmm. It looks like you haven't even switched characters yet. And yet you would've had to switch to Tel-E since she's not the default character. Someone's been taking some shortcuts on this site. I like it.";
                    else if (parseInt(sessionStorage.getItem("switches")) === 1)
                        document.getElementById("d").innerHTML = cyhackBold + "Hmm. It looks like you've switched characters only once.";
                    else
                        document.getElementById("d").innerHTML = cyhackBold + "Hmm. It looks like you've switched characters " + sessionStorage.getItem("switches") + " times.";
                    break;
                case(19):
                    if (sessionStorage.getItem("beautySwitches") === null)
                    {
                        var beautySwitches = 0;
                    }
                    else
                    {
                        var beautySwitches = sessionStorage.getItem("beautySwitches");
                    }

                    if (sessionStorage.getItem("tel-eSwitches") === null)
                    {
                        var teleSwitches = 0;
                    }
                    else
                    {
                        var teleSwitches = sessionStorage.getItem("tel-eSwitches");
                    }

                    if (sessionStorage.getItem("pyraSwitches") === null)
                    {
                        var pyraSwitches = 0;
                    }
                    else
                    {
                        var pyraSwitches = sessionStorage.getItem("pyraSwitches");
                    }
                    document.getElementById("d").innerHTML = cyhackBold + "And I see for character host switches, you've done " + beautySwitches + " for Beauty, " + teleSwitches + " for Tel-E, and " + pyraSwitches + " for Pyra.";
                    break;
                case(20):
                    if (sessionStorage.getItem("quizVisits") === null)
                        document.getElementById("d").innerHTML = cyhackBold + "What? You haven't even completed a single quiz on this site? What's wrong with you? You afraid of us telling you you're wrong all the time?";
                    else if (parseInt(sessionStorage.getItem("quizVisits")) === 1)
                        document.getElementById("d").innerHTML = cyhackBold + "You think you know us so well, but you don't. You've only taken a single quiz to prove your knowledge. Pathetic.";
                    else if (parseInt(sessionStorage.getItem("quizVisits")) < 5)
                        document.getElementById("d").innerHTML = cyhackBold + "Well, it looks like you've taken some of the quizzes. But you're just gettin' started here. You've only tried them " + sessionStorage.getItem("quizVisits") + " times";
                    else if (parseInt(sessionStorage.getItem("quizVisits")) < 5)
                        document.getElementById("d").innerHTML = cyhackBold + "So I see you enjoy taking the quizzes.";
                    break;
                case(21):
                    if (sessionStorage.getItem("highscoredecimal") === null)
                        document.getElementById("d").innerHTML = cyhackBold + "And with no quizzes taken, you ain't got no score. Skipping the test still counts as an F, you know.";
                    else if (parseFloat(sessionStorage.getItem("highscoredecimal")) === 0)
                        document.getElementById("d").innerHTML = cyhackBold + "Hahahahahaha! I knew you were nothin' but a dope. Your quiz high score, and I use the term loosely, is a big fat 0! You got nothin'! No wonder Tel-E read your mind so fast. There's barely anything in there.";
                    else if (parseInt(sessionStorage.getItem("highscoredecimal")) < .3)
                        document.getElementById("d").innerHTML = cyhackBold + "And for your high score on these quizzes, your best was just a measely " + sessionStorage.getItem("highscore") + ". I think the phrase, 'You tried your best' serves more as an insult with a failing grade like that. Congratulations on your best, sucker!";
                    else if (parseInt(sessionStorage.getItem("highscoredecimal")) < 1)
                        document.getElementById("d").innerHTML = cyhackBold + "Your best score for the quizzes appears to be " + sessionStorage.getItem("highscore") + ". Not bad. But not perfect like the Cyhack.";
                    else
                        document.getElementById("d").innerHTML = cyhackBold + "Hmph. I see your high score for the quizzes is a perfect score. Whatever.";
                    break;
                case(22):
                    if (parseInt(sessionStorage.getItem("characterVisits")) === 1)
                        document.getElementById("d").innerHTML = cyhackBold + "Well, this is interesting. You've only visited the character pages once. And the Cyhack can hack this site after you visit my page. So the Cyhack was your first character visit. Isn't that flattering.";
                    else if (parseInt(sessionStorage.getItem("characterVisits")) < 12)
                        document.getElementById("d").innerHTML = cyhackBold + "Hmm. You seem to have visited the character pages " + sessionStorage.getItem("characterVisits") + " times. Haven't gotten around to all of us, huh?";
                    else
                        document.getElementById("d").innerHTML = cyhackBold + "I see you like visiting the character pages. Revisiting someone because you like them, or do you just keep forgetting our trivia?";
                    break;
                case(23):
                    if (parseInt(sessionStorage.getItem("cyhackVisits")) === 1)
                        document.getElementById("d").innerHTML = cyhackBold + "Wait. You've only visited the Cyhack's page once? Just once? I hope you've cleared your schedule to go through every detail there with every character host. Get to it, dummy!";
                    else if (parseInt(sessionStorage.getItem("cyhackVisits")) < 5)
                        document.getElementById("d").innerHTML = cyhackBold + "I see you've visited the Cyhack's page " + sessionStorage.getItem("cyhackVisits") + " times, huh? That's a start.";
                    else
                        document.getElementById("d").innerHTML = cyhackBold + "Well, isn't this something? You've gone to the Cyhack's page " + sessionStorage.getItem("cyhackVisits") + " times. " + sessionStorage.getItem("cyhackVisits") + " times? For me? Oh, you shouldn't have, stupid.";
                    break;
                case(24):
                    if (sessionStorage.getItem("curse") === "true")
                        document.getElementById("d").innerHTML = cyhackBold + "Oh, what's this? Heh heh heh. I see you've been thinking some naughty thoughts recently.";
                    else
                        document.getElementById("d").innerHTML = cyhackBold + "Hmm. Your thoughts seem more family friendly than I anticipated.";
                    break;
                case(25):
                    document.getElementById("d").innerHTML = teleBold + "Ugh. This is clear unauthorized theft of information. If you want to stop Cyhack, search the site. If she appears where she doesn't belong. Click her and everything will go back to normal. You can also close and reopen your browser tab if you can't find her.";
                    break;
                case(26):
                    rotate = 0;
                    document.getElementById("d").innerHTML = cyhackBold + "I see you plan on searching this site to click me to put this site . . . back to normal? Ugh! So you wanna interfere, Knowlgian? Let's go for another ride.";

                    break;
                case(27):
                    rotate = 1;
                    document.getElementById("d").innerHTML = teleBold + "Whaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!";
                    break;
            }

        }
        else if (character === "Pyra")
        {
            document.getElementById("prev").setAttribute("style", "opacity: .4");
            document.getElementById("prev").disabled = true;
            switch (dialogue)
            {
                case(1):
                    document.getElementById("d").innerHTML = pyraBold + "Hey. So you've chosen me, Pyra as . . . whoa. This is a little close.";
                    break;
                case(2):

                    $("#character").animate({"width": originalWidth, "height": originalHeight});
                    document.getElementById("d").innerHTML = pyraBold + "Okay. That's better. Anyway . . . wait. Why's the previous dialogue button disabled?";
                    break;
                case(3):
                    document.getElementById("d").innerHTML = cyhackBold + "Oh, so ya got a problem with the new setup, do ya?";
                    break;
                case(4):
                    document.getElementById("d").innerHTML = pyraBold + "What? Uh, excuse me. The home page only features a solo dialogue segment. Who's there?";
                    break;
                case(5):
                    document.getElementById("d").innerHTML = cyhackBold + "Read the bold! The Cyhack's talkin' to ya. Here. I'll help you read it.";
                    break;
                case(6):
                    $("#character").animate({"width": (characterWidth * 1.5), "height": (characterHeight * 1.5), "left": (position.left / 1.5)});
                    characterWidth = characterWidth * 1.5;
                    characterHeight = characterHeight * 1.5;
                    document.getElementById("d").innerHTML = pyraBold + "Whaaaaa! That's too close. How are you doing this? Only character hosts can set the display of the site.";
                    break;
                case(7):
                    document.getElementById("d").innerHTML = cyhackBold + "Surprise! The Cyhack's your new host! I've overridden the character selection to include me with everyone, and basically cut out you and the other girls from having control.";
                    break;
                case(8):
                    document.getElementById("d").innerHTML = pyraBold + "So I have to share this page with YOU? Ugh. How did THIS happen?";
                    break;
                case(9):
                    document.getElementById("d").innerHTML = cyhackBold + "Oh, don't worry. I won't get in your way. Here. I'll let you keep the whole screen to yourself.";
                    break;
                case(10):
                    $("#character").animate({"width": (characterWidth * 1.2), "height": (characterHeight * 1.2), "left": (position.left / 1.3), "top": 0});
                    characterWidth = characterWidth * 1.2;
                    characterHeight = characterHeight * 1.2;
                    document.getElementById("d").innerHTML = pyraBold + "Aaaaaah. Oh boy! Oh boy!";
                    break;
                case(11):
                    document.getElementById("d").innerHTML = cyhackBold + "What's wrong? The Cyhack's not in your way. Now, let the people see what's left of your pretty face.";
                    break;
                case(12):
                    $("#character").animate({"width": (characterWidth * 1.2), "height": (characterHeight * 1.2), "left": (position.left / 1.3), "top": 0});
                    characterWidth = characterWidth * 1.2;
                    characterHeight = characterHeight * 1.2;
                    document.getElementById("d").innerHTML = pyraBold + "Stop! Someone's gonna get hurt at this distance! I could go right through the footer section and break the page. Oh, I just know I'm gonna ruin this place for people.";
                    break;
                case(13):
                    document.getElementById("d").innerHTML = cyhackBold + "Ah. You're right. Here. Let me handle this.";
                    break;
                case(14):
                    $("#character").animate({"width": (originalWidth * .2), "height": (originalWidth * .2), "left": 0, "top": 0});
                    originalWidth = characterWidth * .2;
                    originalHeight = characterHeight * .2;
                    document.getElementById("d").innerHTML = cyhackBold + "There. Isn't that better?";
                    break;
                case(15):
                    document.getElementById("d").innerHTML = pyraBold + "Well, it's a bit far, but I'm not gonna complain.";
                    break;
                case(16):
                    $("#character").animate({"width": (originalWidth * 6.2), "height": (originalHeight * 6.2), "left": -200, "top": 0});
                    originalWidth = characterWidth * 6.2;
                    originalHeight = characterHeight * 6.2;
                    document.getElementById("d").innerHTML = cyhackBold + "Just kidding!";
                    break;
                case(17):
                    document.getElementById("d").innerHTML = pyraBold + "AAAAAAAAAAAAH! Go back! Go back! Go back! Go back! Go back! Please! Go back!";
                    break;
                case(18):
                    document.getElementById("d").innerHTML = cyhackBold + "Oh, so sorry. I'm afraid the previous button has been disabled, so the early resolution is unavailable.";
                    break;
                case(19):
                    document.getElementById("d").innerHTML = pyraBold + "Then fix it yourself!";
                    break;
                case(20):
                    document.getElementById("d").innerHTML = cyhackBold + "Sorry. The Cyhack's gotta get to a new page to screw with, uh, I mean, help the User. Hack ya later!";
                    break;
                case(21):
                    document.getElementById("d").innerHTML = pyraBold + "Wait! Come back! Uh . . . uh . . . okay. Okay, Bonnie. You'll be fine. Just wait for the User to click on Cyhack when she appears in a page where she shouldn't be or wait for them to close and reopen the window tab. They'll do it. They'll do it. It'll be fine. Oh, please let it be fine.";
                    break;
            }

        }
        else
        {

            switch (dialogue)
            {
                case(1):

                    document.getElementById("d").innerHTML = beautyBold + "Hi there. I'm Beauty. And welcome to . . . whoa. Wait a minute. This isn't me. Sorry. Just a sec.";
                    $("#character").fadeOut(function () {
                        document.getElementById("character").src = "images/cyhackleft1.png";
                        $("#character").fadeIn();

                    });
                    break;
                case(2):
                    document.getElementById("d").innerHTML = beautyBold + "Sorry. Must've transformed by accident. Anyway, welcome to stephenegert.com. Keep an eye on . . .";
                    $("#character").fadeOut(function () {
                        document.getElementById("character").src = "images/beautyleft1.png";
                        $("#character").fadeIn();

                    });
                    break;
                case(3):
                    document.getElementById("d").innerHTML = beautyBold + "Ugh. I am not in control of my powers today. Hang on.";
                    $("#character").fadeOut(function () {
                        document.getElementById("character").src = "images/cyhackleft1.png";
                        $("#character").fadeIn();

                    });
                    break;
                case(4):
                    document.getElementById("d").innerHTML = cyhackBold + "Well well well. Looks like someone just found out she's not in control of her powers today.";
                    break;
                case(5):
                    document.getElementById("d").innerHTML = beautyBold + "Cyhack? Is that you?";
                    break;
                case(6):
                    document.getElementById("d").innerHTML = cyhackBold + "Got that right, Neo girl. Don't you remember I hacked the site when you visited my page? The Cyhack's in control now. Say hello to your new host, folks.";
                    break;
                case(7):
                    document.getElementById("d").innerHTML = beautyBold + "What? No! Don't say hello. Vandalizing the appearance of this place is one thing, but only me, Tel-E, and Pyra are supposed to be guiding the user.";
                    break;
                case(8):
                    document.getElementById("d").innerHTML = cyhackBold + "Hey, it's not the Cyhack's fault our creator forgot to add some access control to this site to keep me from host privilege. I could just erase you from this page, but if you can look smart enough like me, I'd rather have more of that around.";
                    if (change === 1)
                    {
                        $("#character").fadeOut(function () {
                            document.getElementById("character").src = "images/cyhackleft1.png";
                            $("#character").fadeIn();
                            change = 0;
                        });
                    }
                    break;
                case(9):
                    document.getElementById("d").innerHTML = beautyBold + "Now, you listen here, Cyhack! There is no way you're taking over, and there's no way I'm letting you control me and my powers!";
                    $("#character").fadeOut(function () {
                        document.getElementById("character").src = "images/beautyleft1.png";
                        $("#character").fadeIn();
                        change = 1;
                    });
                    break;
                case(10):
                    document.getElementById("d").innerHTML = cyhackBold + "You sure about that?";
                    $("#character").fadeOut(function () {
                        document.getElementById("character").src = "images/cyhackleft1.png";
                        $("#character").fadeIn();

                    });
                    break;
                case(11):
                    document.getElementById("d").innerHTML = beautyBold + "Wha?";
                    $("#character").fadeOut(function () {
                        document.getElementById("character").src = "images/tel-eleft1.png";
                        $("#character").fadeIn();

                    });
                    break;
                case(12):
                    document.getElementById("d").innerHTML = beautyBold + "Hey!";
                    $("#character").fadeOut(function () {
                        document.getElementById("character").src = "images/pyraleft1.png";
                        $("#character").fadeIn();

                    });
                    break;
                case(13):
                    document.getElementById("d").innerHTML = beautyBold + "Ah!";
                    $("#character").fadeOut(function () {
                        document.getElementById("character").src = "images/fergusonleft1.png";
                        $("#character").fadeIn();

                    });
                    break;
                case(14):
                    document.getElementById("d").innerHTML = beautyBold + "No!";
                    $("#character").fadeOut(function () {
                        document.getElementById("character").src = "images/oneleft1.png";
                        $("#character").fadeIn();

                    });
                    break;
                case(15):
                    document.getElementById("d").innerHTML = beautyBold + "Stop!";
                    $("#character").fadeOut(function () {
                        document.getElementById("character").src = "images/tammyleft1.png";
                        $("#character").fadeIn();

                    });
                    change = 1;
                    break;
                case(16):
                    document.getElementById("d").innerHTML = cyhackBold + "So ya ready to cooperate with the Cyhack?";
                    if (change === 1)
                    {
                        $("#character").fadeOut(function () {
                            document.getElementById("character").src = "images/cyhackleft1.png";
                            $("#character").fadeIn();
                            change = 0;
                        });
                    }
                    break;
                case(17):
                    document.getElementById("d").innerHTML = beautyBold + ". . . Whatever you say, new host. Ugh. How did THIS happen?";
                    break;
                case(18):
                    document.getElementById("d").innerHTML = cyhackBold + "Good. Now, why don't you be a good girl and have me say a few words to the nice people?";
                    break;
                case(19):
                    document.getElementById("d").innerHTML = beautyBold + ". . . Hey, everyone. Welcome to stephenegert.com . . . presented by Gina 'Cyhack' Mozetti. We've got stories to read, characters to learn, and quizzes to take with me, the Cyhack, guiding you through this thing. If you'd like to hear from someone else, you can visit the Switch Character page to pick a new host.";
                    break;
                case(20):
                    document.getElementById("d").innerHTML = cyhackBold + "Heh. Like that'll do anything.";
                    break;
                case(21):
                    document.getElementById("d").innerHTML = beautyBold + "Unfortunately, it's a little buggy, so the Cyhack's gonna stick around. That is, unless you find where she doesn't belong and click her or just close your tab and open a new one to restart everything.";
                    break;
                case(22):
                    document.getElementById("d").innerHTML = cyhackBold + "Say what? Hey! No going off script!";
                    break;
            }

        }

    }
    else
    {
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
            if (sessionStorage.getItem("afterBurned") === "true")
            {
                switch (dialogue)
                {
                    case(1):
                        document.getElementById("d").innerHTML = pyraBold + "Huh? What? You . . . you want me to be your host again. Even though I destroyed this page last time?";
                        break;
                    case(2):
                        document.getElementById("d").innerHTML = pyraBold + "I mean . . . that was an accident, yeah. And . . . look. I've had a lot of problems keeping people around for long since I got my powers. There aren't many people who choose to make physical contact with me. Most everyone who does gets hurt from my constant external body heat.";
                        break;
                    case(3):
                        document.getElementById("d").innerHTML = pyraBold + "What happened back there was something I never wish on anyone I want as a friend. So . . . all I can ask is that you be careful and not click me. Is that okay?";
                        break;
                    case(4):
                        document.getElementById("d").innerHTML = pyraBold + "I hope I don't screw up your user experience here anymore. Let's just have some fun without me causing you harm.";
                        break;
                }
            }
            else
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
}

function rotateTelE() {
    setInterval(function () {
        if (rotate === 1)
        {
            //checkCharacterLeft();
            //$("#character").css({"left": "500px"});
            //var characterImg = document.getElementById('character');
            $("#character").removeClass("rotate" + angle);
            angle = (angle + 45) % 360;
            $("#character").addClass("rotate" + angle);
            //characterImg.className = "rotate" + angle;


        }
        else if (angle !== 0)
        {
            $("#character").removeClass("rotate" + angle);
            angle = (angle + 45) % 360;
            $("#character").addClass("rotate" + angle);
        }
    }, 100);


    //rotateTelE();
}

function checkCharacterLeft() {
    if (window.screen.width > 1500)
    {
        $("#character").css({"left": "17%"});

    }
    else if (window.screen.width > 1000 && window.screen.height > 1000)
    {
        $("#character").css({"left": "20%"});

    }
    else if (window.screen.width > 800)
    {
        $("#character").css({"left": "29%"});

    }
    else
    {
        $("#character").css({"left": "19%"});

    }
}

function checkResolution() {
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

function resizeResolution() {
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
