/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    
    $("section").attr("style", "margin-top: 50px; padding-bottom: 100px; width:100%; height: " + window.screen.height + "px");
    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    $(".quizimageleft").css({"top": (window.screen.height * .32), "height": (window.screen.height * .5), "width": (window.screen.width * .25)});
    $(".quizimageright").css({"top": (window.screen.height * .32), "height": (window.screen.height * .5), "width": (window.screen.width * .25)});

    $("#backquiz").css({"top": (window.screen.height * .508), "left": (window.screen.width * .76), "height": (window.screen.height * .078), "width": (window.screen.width * .19)});
    $("#score").css({"top": (window.screen.height * .2)});


    $("#score").hide();
    $("#prevlevel1a").attr("style", "opacity: .6");
    $("#backquiz").hide();
    $("input").hide();
    $("label").hide();
    $("#question").hide();
    $("#submitanswer").hide();
    $("img").hide();
    $("#searchIcon").show();
    $("#BeautyLeft1").show();
    $("#dialogue").html("<b>Beauty:</b> Hi");
    $("#BeautyLeft1").animate({left: (window.screen.width * .35)});
    
    var position = document.getElementById("menudiv").clientHeight;


    if (question === 0 || question === 16)
    {
        $(".quizimageleft:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .35), "height": (window.screen.height * .5), "width": (window.screen.width * .25)});
    }
    else
        $(".quizimageleft:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .22), "height": (window.screen.height * .5), "width": (window.screen.width * .25)});
    $(".quizimageright:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .48), "height": (window.screen.height * .5), "width": (window.screen.width * .25)});
    $(".quizheading").css({"top": position, "height": (window.screen.height * .1), "width": (window.screen.width * .69)});
    $(".submitdiv").css({"top": position, "left": (window.screen.width * .69), "height": (window.screen.height * .1), "width": (window.screen.width * .31)});

    $("#formdiv").hide();
    //$("#backquiz").show();



    if (window.screen.width > 700)
    {
        $(".selector1").css({"top": (window.screen.height * .166667), "left": (window.screen.width * .0385)});
        $(".selector2").css({"top": (window.screen.height * .166667), "left": (window.screen.width * .462)});
        $(".selector3").css({"top": (window.screen.height * .25), "left": (window.screen.width * .0385)});
        $(".selector4").css({"top": (window.screen.height * .25), "left": (window.screen.width * .462)});

        $(".answer1label").css({"top": (window.screen.height * .193), "left": (window.screen.width * .041)});
        $(".answer2label").css({"top": (window.screen.height * .193), "left": (window.screen.width * .465)});
        $(".answer3label").css({"top": (window.screen.height * .276), "left": (window.screen.width * .041)});
        $(".answer4label").css({"top": (window.screen.height * .276), "left": (window.screen.width * .465)});

        $(".answer1").css({"top": (window.screen.height * .166667), "left": (window.screen.width * .069)});
        $(".answer2").css({"top": (window.screen.height * .166667), "left": (window.screen.width * .5)});
        $(".answer3").css({"top": (window.screen.height * .25), "left": (window.screen.width * .069)});
        $(".answer4").css({"top": (window.screen.height * .25), "left": (window.screen.width * .5)});



    }
    else
    {
        if (question === 0 || question === 16)
        {
            $(".quizimageleft:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .35), "height": (window.screen.height * .5), "width": (window.screen.width * .45)});
        }
        else
        {
            $(".quizimageleft:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .22), "height": (window.screen.height * .5), "width": (window.screen.width * .45)});
        }
        $(".quizimageleft").css({"top": (window.screen.height * .39), "width": (window.screen.width * .45), "height": (window.screen.height * .5)});
        $(".quizimageright").css({"top": (window.screen.height * .39), "width": (window.screen.width * .45), "height": (window.screen.height * .5)});
        $("section").attr("style", "margin-top: 50px; padding-bottom: 0px; width:100%; height: " + window.screen.height + "px");
        $("#backquiz").css({"top": (window.screen.height * .508), "left": (window.screen.width * .73), "height": (window.screen.height * .118), "width": (window.screen.width * .25)});
    }

    $(window).resize(function () {
        if (question === 0 || question === 16)
        {
            $(".quizimageleft:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .35), "height": (window.screen.height * .5), "width": (window.screen.width * .25)});
        }
        else
            $(".quizimageleft:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .22), "height": (window.screen.height * .5), "width": (window.screen.width * .25)});

        $(".quizimageright:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .48), "height": (window.screen.height * .5), "width": (window.screen.width * .25)});
        $(".quizheading").css({"top": (window.screen.height * .061), "height": (window.screen.height * .1), "width": (window.screen.width * .70)});
        $(".submitdiv").css({"top": (window.screen.height * .061), "left": (window.screen.width * .70), "height": (window.screen.height * .1), "width": (window.screen.width * .31)});

        $("#backquiz").css({"top": (window.screen.height * .508), "left": (window.screen.width * .76), "height": (window.screen.height * .078), "width": (window.screen.width * .19)});
        $("#score").css({"top": (window.screen.height * .2)});

        if (window.screen.width > 700)
        {
            $(".selector1").css({"top": (window.screen.height * .166667), "left": (window.screen.width * .0385)});
            $(".selector2").css({"top": (window.screen.height * .166667), "left": (window.screen.width * .462)});
            $(".selector3").css({"top": (window.screen.height * .25), "left": (window.screen.width * .0385)});
            $(".selector4").css({"top": (window.screen.height * .25), "left": (window.screen.width * .462)});

            $(".answer1label").css({"top": (window.screen.height * .193), "left": (window.screen.width * .041)});
            $(".answer2label").css({"top": (window.screen.height * .193), "left": (window.screen.width * .465)});
            $(".answer3label").css({"top": (window.screen.height * .276), "left": (window.screen.width * .041)});
            $(".answer4label").css({"top": (window.screen.height * .276), "left": (window.screen.width * .465)});

            $(".answer1").css({"top": (window.screen.height * .166667), "left": (window.screen.width * .069)});
            $(".answer2").css({"top": (window.screen.height * .166667), "left": (window.screen.width * .5)});
            $(".answer3").css({"top": (window.screen.height * .25), "left": (window.screen.width * .069)});
            $(".answer4").css({"top": (window.screen.height * .25), "left": (window.screen.width * .5)});
        }
        else
    {
        if (question === 0 || question === 16)
        {
            $(".quizimageleft:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .35), "height": (window.screen.height * .5), "width": (window.screen.width * .45)});
        }
        else
        {
            $(".quizimageleft:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .22), "height": (window.screen.height * .5), "width": (window.screen.width * .45)});
        }
        $(".quizimageleft").css({"top": (window.screen.height * .39), "width": (window.screen.width * .45), "height": (window.screen.height * .5)});
        $(".quizimageright").css({"top": (window.screen.height * .39), "width": (window.screen.width * .45), "height": (window.screen.height * .5)});
        $("section").attr("style", "margin-top: 50px; padding-bottom: 0px; width:100%; height: " + window.screen.height + "px");
    }
    });


    $("#nextlevel1a").click(function() {

        if (nextline === 1)
        {
            dialogue++;
            //$("#prevlevel1a").attr("style", "opacity: 1");
            dialoguechange();
        }
    });
    $("#prevlevel1a").click(function() {
        if (dialogue > 1)
        {
            //dialogue--;
            //dialoguechange();
        }

    });
    function dialoguechange() {
        if (question === 0)
        {
            if (dialogue === 1)
            {
                $("#dialogue").html("<b>Beauty:</b> Hi");
            }
            else if (dialogue === 2)
                $("#dialogue").html("<b>Beauty:</b> Well, if you're ready to go. Just hit next, and we\n\
can start the quiz.");
            else if (dialogue === 3)
            {
                dialogue = 0;
                question = 1;
                nextline = 0;
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("1. When the Chief made the Brigade watch some CPR training video, what villain did we have to thank for getting us out of it?");
                $("#answera").text("Fourize");
                $("#answerb").text("Cyhack");
                $("#answerc").text("Ninja");
                $("#answerd").text("Tammy Time");
            }
        }
        else if (question === 1) {
            if (dialogue === 1)
            {
                $("#TammyRight1").show();
                $("#TammyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Tammy Time:</b> Gee, I thought I was just the class clown in regular school. Who knew I’d be so popular in another classroom?");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> So I see you take the class clown role pretty seriously. Why do I get the feeling you're not the only clown character that exists in this world?");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Tammy Time:</b> If I'm the first one you see, I'll be happy to start a trend. Everyone loves a fun girl.");
            }
            else if (dialogue === 4)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Bendy:</b> You ain’t as good as me, though. Why don’t you go back to talking to yourself while everyone else talks to me?");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Tammy Time:</b> You mean your Charevo Fairies? Hate to ruin it for you, but they represent who you are. You’ve been talking to yourself too, and you’re JUST LIKE ME! Hahahaha!");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Bendy:</b> Nuh uh! People only THINK I’m nuts. And unlike you, that has yet to be confirmed. I’m the cooler one and everyone knows it, right Beauty?");

            }
            else if (dialogue === 7)
            {
                $("#TammyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#TammyRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Beauty:</b> Well, Tammy does have some cool powers. I mean, there’s self-duplication, duplication of anything she touches, flight, the ability to enlarge her head to a dangerous size . . .");

            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Bendy:</b> I can do that too! I mean, it’s not as strong, but it counts for something.");

            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Beauty:</b> Well, as a side note, like a lot of characters in our world, Tammy was inspired by a character from Teen Titans, which, for her, was Billy Numerous. In fact, she was originally going to be a boy before our creator decided she would be better as a girl.");

            }
            else if (dialogue === 10)
            {
                $("#BeautyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#TammyRight1").show();
                $("#TammyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Tammy Time:</b> And before I got all these abilities I have right now. You like?");

            }
            else if (dialogue === 11)
            {
                $("#dialogue").html("<b>Bendy:</b> Hmph. I’m not jealous. I’m not jealous of your powers at all.");
            }
            else if (dialogue === 12)
            {
                $("#dialogue").html("<b>Tammy Time:</b> And why should you be? Oh right. ‘Cause you’ve got that one power, and I have manymanymanymanymanymanyMANY! Hahahaha! Yep. You knew that line was coming.");
            }
            else if (dialogue === 13)
            {
                $("#dialogue").html("<b>Bendy:</b> Well, I’m not jealous of your catchphrase either.");
            }
            else if (dialogue === 14)
            {
                $("#TammyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#TammyRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Beauty:</b> Nobody asked, but okay.");
            }
            else if (dialogue === 15)
            {
                 $("#BendyLeft1").animate({left: '-50px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#BeautyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#BeautyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 2;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("2. When Bendy was watching Captain D’s TV show, which of the following was NOT one of my many criticisms of the show?");
                $("#answera").text("It doesn’t feature female characters positively");
                $("#answerb").text("It is not appropriate for kids");
                $("#answerc").text("It follows the same basic plot formula every episode");
                $("#answerd").text("The overacting");
            }
        }
        else if (question === 2) {
            if (dialogue === 1)
            {
                $("#CaptainDRight1").show();
                $("#CaptainDRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Captain D:</b> Hmph. That depends who you ask. Would you mind telling those protesting parents the Neo Brigade approves Captain D’s show for kids?");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> Oh, I’m not putting my name anywhere near that show.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Captain D:</b> If you do, you get a free t-shirt.");
            }
            else if (dialogue === 4)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Bendy:</b> I think I already have one of those shirts. I’ll have to pass on that, D.");
            }
            else if (dialogue === 5)
            {
                $("#CaptainDRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#CaptainDRight1").hide();
                });
                $("#RaceRight1").show();
                $("#RaceRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Race:</b> Bendy, I thought you were over this guy.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Bendy:</b> I am. Captain D was bad, but his show wasn’t. It had action and excitement and . . . and action.");

            }
            else if (dialogue === 7)
            {
                $("#RaceRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#RaceRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Beauty:</b> And all those other complaints I had.");

            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Bendy:</b> Come on. You can’t still have a problem with that show. You like fighting people. That’s the show for you then.");

            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Beauty:</b> Once again, that show has, like, such poor use of characters. For all the women they have on that show, they could at least show them resist being a damsel in distress like I do.");

            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Bendy:</b> Yeah, but if they did that, there’d be less cool stuff like saving them for Captain D to do.");

            }
            else if (dialogue === 11)
            {
                $("#dialogue").html("<b>Beauty:</b> Ugh. Given the girls you know, and I can only assume the others we’ll meet in the future, I find it hard to believe you’re fine with that show not having any strong female characters.");
            }
            else if (dialogue === 12)
            {
                $("#dialogue").html("<b>Bendy:</b> Hey, you can’t spell “Strong female characters” without “Strong male characters.”");
            }
            else if (dialogue === 13)
            {
                $("#dialogue").html("<b>Beauty:</b> And that was Bendy the Mansplainer, ladies and gentlemen.");
            }
            else if (dialogue === 14)
            {
                 $("#BendyLeft1").animate({left: '-50px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#BeautyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#BeautyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 3;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("3. Besides Bendy, who else is a fan of Captain D?");
                $("#answera").text("Race");
                $("#answerb").text("Pyra");
                $("#answerc").text("Nator");
                $("#answerd").text("The Chief");
            }
        }
        else if (question === 3) {
            if (dialogue === 1)
            {
                $("#RaceRight1").show();
                $("#RaceRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Race:</b> What are you talking about? He likes us just fine.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {$("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Pyra:</b> Yeah, but he made you the leader.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Race:</b> Fair point.");
            }
            else if (dialogue === 4)
            {
                $("#RaceRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#RaceRight1").hide();
                });
                $("#ChiefRight1").show();
                $("#ChiefRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Chief:</b> Are you saying what I favor is wrong? I should take away your lunch discounts at the police station for that!");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Pyra:</b> So we criticize you and we’re punished. Captain D tries to hurt a bunch of people and you’re lenient on him. Yeah, that sounds like you.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Chief:</b> Captain D is a man who defies danger to help others. I refuse to let you slander him with this nonsense.");

            }
            else if (dialogue === 7)
            {
                $("#PyraLeft1").animate({left: '-50px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Beauty:</b> Chief, take it from the girl with Fiction as a Charevo Element. (whispering) He didn’t actually do that stuff. That was a TV show.");

            }
            else if (dialogue === 8)
            {
                $("#ChiefRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#ChiefRight1").hide();
                });
                $("#RaceRight1").show();
                $("#RaceRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Race:</b> My dad is just one step away from making Beauty’s character transformations members of the Neo Brigade.");

            }
            else if (dialogue === 9)
            {
                 $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#RaceRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#RaceRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 4;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("4. At Minor City Coliseum, which of the following did Captain D boast in his intro?");
                $("#answera").text("He’s so daring, he never mixes black with yellow");
                $("#answerb").text("He’s so daring, he makes his insurance lawyers sweat just looking at him");
                $("#answerc").text("He’s so daring, he never chooses truth");
                $("#answerd").text("Both a and b");
            }
        }
        else if (question === 4) {
            if (dialogue === 1)
            {
                $("#CaptainDRight1").show();
                $("#CaptainDRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Captain D:</b> Black and yellow are the warning colors. You don’t think I’d put that stuff in any of my stunts.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> So I guess when you see a speed limit sign, you just consider that a challenge?");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Captain D:</b> Or a recommendation. I mean what is a speed limit when you think about it?");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Beauty:</b> Seeing as how that’s probably the least dangerous thing you’ve done, I’ll just drop the subject and we can get back to that intro of yours.");
            }
            else if (dialogue === 5)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Bendy:</b> You sure know how to boast a performance. I’ll give you that.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Captain D:</b> Well, as a daredevil, there are many dangers to run at and survive. But it says a lot about a man who can make lawyers nervous.");

            }
            else if (dialogue === 7)
            {
                $("#BendyLeft1").animate({left: '-50px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Nator:</b> Just one question. When you do get hurt, what exactly do you put on your insurance claim?");

            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Captain D:</b> I don’t get hurt, fool. I’m invincible. But if I did get injured, I’d probably take a few liberties in describing what happened. So if I try to run through fire, I’d just say it was dark and cold and I got too close to a resource for fixing those problems.");

            }
            else if (dialogue === 9)
            {
                $("#NatorLeft1").animate({left: '-50px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Pyra:</b> Right. And if you tried to survive being in a cage with lions, you’d say you didn’t want them to feel lonely and they became angry from being neglected by people in the past.");

            }
            else if (dialogue === 10)
            {
                $("#PyraLeft1").animate({left: '-50px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Beauty:</b> Or if you tried to jump the Grand Canyon on a motorcycle, you’d say you were taking a shortcut through Arizona and the state forgot to fill a large pothole.");

            }
            else if (dialogue === 11)
            {
                $("#dialogue").html("<b>Captain D:</b> Hey, that’s pretty good. I think I’ll use that one.");
            }
            else if (dialogue === 12)
            {
                 $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#CaptainDRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#CaptainDRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 5;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("5. When Captain D offers Bendy VIP passes to visit him at his TV taping, Race says they have to go to the CPR training that day. What excuse does the Chief make in allowing him to go?");
                $("#answera").text("The room for the training will be painted that day");
                $("#answerb").text("The room for the training will probably be destroyed again anyway");
                $("#answerc").text("Safety doesn’t have to be first");
                $("#answerd").text("Bendy has plenty of sick days to use");
            }
        }
        else if (question === 5) {
            if (dialogue === 1)
            {
                $("#PyraRight1").show();
                $("#PyraRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Pyra:</b> That’s some nice reasoning there. We’ll probably lose the room again the same way so what’s the point of going in? I’d like to see someone get out of going to school for suggesting the possibility of a snow day on a ninety degree day.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> The Chief says it’ll probably happen. Why risk the chance of getting snowed in?");
            }
            else if (dialogue === 3)
            {
                $("#PyraRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#PyraRight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Bendy:</b> I know. We’re all gonna die. What’s the point of going outside?");
            }
            else if (dialogue === 4)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#ChiefLeft1").show();
                $("#ChiefLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Chief:</b> That’s enough outta you kids!");
            }
            else if (dialogue === 5)
            {
                $("#BendyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#BendyRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Nator:</b> Yeah. He’s a cop. He doesn’t wanna break Murphy’s Law.");
            }
            else if (dialogue === 6)
            {
                $("#NatorRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#NatorRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Beauty:</b> Hey, Chief. Since someone’s probably going to break into your office, do you want me to destroy a few police files? ");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Chief:</b> Don’t you pull any hypothetical scenarios on me! You’re already a problem here! I still can’t believe you got invited and I didn’t. That extra pass should’ve been mine! Mine! Mine! Mine!");

            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Beauty:</b> In context, yes. But, in retrospect, you probably wouldn’t have picked up on Captain D’s little crime spree if you had gone.");

            }
            else if (dialogue === 9)
            {
                $("#ChiefLeft1").animate({left: '-50px'}, function() {
                    $("#ChiefLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Pyra:</b> Right. Like you put a stop to it yourself?");

            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Beauty:</b> No. But I know how to make Bendy feel guilty.");

            }
            else if (dialogue === 11)
            {
                 $("#PyraLeft1").animate({left: '-50px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BeautyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#BeautyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 6;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("6. What was the fourth rule Bendy gave me for meeting Captain D?");
                $("#answera").text("Don’t ask personal questions to embarrass Bendy");
                $("#answerb").text("I must pretend to be Bendy’s girlfriend");
                $("#answerc").text("If I show off my powers, I can’t make myself look better than Bendy");
                $("#answerd").text("Don’t look him in the eye too long");
            }
        }
        else if (question === 6) {
            if (dialogue === 1)
            {
                $("#BendyRight1").show();
                $("#BendyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Bendy:</b> And surprisingly, you are not that good of an actor.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> Neither is Captain D, but you think he’s just fine.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Bendy:</b> At least he takes direction.");
            }
            else if (dialogue === 4)
            {
                $("#BendyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#BendyRight1").hide();
                });
                $("#CaptainDRight1").show();
                $("#CaptainDRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Captain D:</b> Criticize my acting all you want. My show’s got sixty-five episodes and counting.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Beauty:</b> You say it’s sixty-five episodes. It’s really just the same episode repeated in sixty-four different ways.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Captain D:</b> You wanna say that again? Go ahead. I dare ya. Insult Captain D again and see what happens.");

            }
            else if (dialogue === 7)
            {
                
                $("#dialogue").html("<b>Beauty:</b> Okay. I’d have an easier time pretending to be Bendy’s girlfriend than any of the women try with you on your show.");


            }
            else if (dialogue === 8)
            {
                $("#CaptainDRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#CaptainDRight1").hide();
                });
                $("#ChiefRight1").show();
                $("#ChiefRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Chief:</b> Beauty! Cease your disrespectful yammering at once!");
            }
            else if (dialogue === 9)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#CaptainDLeft1").show();
                $("#CaptainDLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Captain D:</b> Thanks, Louie.");

            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Chief:</b> Always a pleasure.");

            }
            else if (dialogue === 11)
            {
                $("#ChiefRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#ChiefRight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Bendy:</b> Man, the Chief was quick on that one.");
            }
            else if (dialogue === 12)
            {
                $("#CaptainDLeft1").animate({left: '-50px'}, function() {
                    $("#CaptainDLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Beauty:</b> I think I found Captain D’s next love interest for his show. ");
            }
            else if (dialogue === 13)
            {
                 $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#BendyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 7;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("7. As protesters are complaining about Captain D being a bad influence for kids, one of the objections was his show not having a disclaimer for people to not imitate what they see. How did Bendy defend his hero on this?");
                $("#answera").text("The producers could have been told disclaimers don’t attract an audience");
                $("#answerb").text("The show had to be edited down so tightly, there was no room for the disclaimer");
                $("#answerc").text("The show’s censors just weren’t doing their jobs, so it wouldn’t be Captain D’s fault");
                $("#answerd").text("There was a disclaimer in the middle of the show as a hidden Easter Egg for kids to find, and it’s meant to be hidden, because it makes it fun, unlike less creative shows");
            }
        }
        else if (question === 7)
        {
            if (dialogue === 1)
            {
                $("#PyraRight1").show();
                $("#PyraRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Pyra:</b> I gotta say, you really need to read the story to get this one. All those other choices sound like something Bendy could’ve said.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#CaptainDLeft1").show();
                $("#CaptainDLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Captain D:</b> My fans know how to show their devotion. What can I say?");
            }
            else if (dialogue === 3)
            {
                $("#PyraRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#PyraRight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Bendy:</b> Yeah, well, that’s the last you’re getting outta me. Now that I know for sure you’re not a good influence on anyone, you fight your own debates.");
            }
            else if (dialogue === 4)
            {
                $("#CaptainDLeft1").animate({left: '-50px'}, function() {
                    $("#CaptainDLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Pyra:</b> How come you defended him so well, but when Nator accused me of eating the last of those brownies the Chief gave us, which you knew about, you couldn’t think of an excuse for me?");
            }
            else if (dialogue === 5)
            {
                
                $("#dialogue").html("<b>Bendy:</b> Inspire me with some cool daredevil stunts and I’ll give you five excuses for next time.");
            }
            else if (dialogue === 6)
            {
                $("#PyraLeft1").animate({left: '-50px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#CaptainDLeft1").show();
                $("#CaptainDLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Captain D:</b> So Bendy’s done with me, but we can still see how daredevils and actual heroes are ranked for him.");

            }
            else if (dialogue === 7)
            {
                $("#BendyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#BendyRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Beauty:</b> Right. Well, fun fact here: That whole run about Bendy responding to accusations and criticism against Captain D with all those questions is based on a bit from comedian Greg Warren.");

            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Beauty:</b> In the bit, Warren talks about coaching high school wrestling with one of the kids asking him ridiculous questions and imagining this kid becoming a defense attorney with questions like those.");

            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Beauty:</b> Our creator loved listening to this and thought something similar would be funny for Bendy to do to defend Captain D. It certainly does fit with the story’s theme of hero worship.");

            }
            else if (dialogue === 10)
            {
                $("#CaptainDLeft1").animate({left: '-50px'}, function() {
                    $("#CaptainDLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Pyra:</b> True. Bendy sure liked sticking up for his hero turned enemy. I’ll bet if you showed him a photo of Captain D hurting someone, he’d deny it and blame you for killing trees by printing the picture.");

            }
            else if (dialogue === 11)
            {
                $("#dialogue").html("<b>Beauty:</b> And do nothing when he sees some clear cutting.");
            }
            else if (dialogue === 12)
            {
                $("#PyraLeft1").animate({left: '-50px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Bendy:</b> You’re just jealous no one ever looked up to you two.");
            }
            else if (dialogue === 13)
            {
                $("#BeautyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Pyra:</b> Going after the accuser, huh? Even in post-hero-worship, it still goes on.");
            }
            else if (dialogue === 14)
            {
                 $("#BendyLeft1").animate({left: '-50px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#PyraRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#PyraRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 8;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("8. In the middle of Bendy’s internal conflict of having to keep Captain D’s true nature a secret, which of his Charevo Fairies appears to give him advice?");
                $("#answera").text("Overconfidence");
                $("#answerb").text("Flexibility");
                $("#answerc").text("Defiance");
                $("#answerd").text("Imagination");
            }
        }

        else if (question === 8)
        {
            if (dialogue === 1)
            {
                $("#BendyRight1").show();
                $("#BendyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Bendy:</b> You’d think with an element called Defiance, it was gonna encourage me to not do what you wanted. Nope! All it does is give guilt.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> Well, what’d you expect? It’s not like the angel and devil on the shoulder to give conflicting advice. They all give different advice that leads to the same goal. That’s what’s so cool about them.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Bendy:</b> So it would be three against one for me on that? No fair. I can see why Nator doesn’t want to believe in them.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Beauty:</b> They give good advice. Remember what the Defiance one told you? “Sometimes, it's easy to defy rules one sets for you, but harder to defy the beliefs you choose.” That’s kinda true.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Bendy:</b> It’s pretty deep. I’ll give you that.");
            }
            else if (dialogue === 6)
            {
                 $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#BendyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 9;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("9. What villain did we find attacking the Minor City gym?");
                $("#answera").text("Cold Miner");
                $("#answerb").text("Cremate");
                $("#answerc").text("The Roaster");
                $("#answerd").text("Ventrillo");
            }
        }
        else if (question === 9)
        {
            if (dialogue === 1)
            {
                $("#CremateRight1").show();
                $("#CremateRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Cremate:</b> Hello? Someone mention my name?");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Pyra:</b> Get lost, Cremate. We're busy here.");
            }
            else if (dialogue === 3)
            {
                $("#CremateRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#CremateRight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Bendy:</b> Hey, we're not too busy to not learn something about a new character.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Pyra:</b> Says the self-proclaimed ladies’ man with Cremate present?");
            }
            else if (dialogue === 5)
            {
                $("#BendyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#BendyRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Beauty:</b> Don't worry, Pyra. We'll make this quick. Anyway, as Bendy would probably notice, Cremate's a model, but she’s also an accomplished boxer, so it makes sense she decided to cause trouble at a gym.");
            }
            else if (dialogue === 6)
            {
                $("#PyraLeft1").animate({left: '-50px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#CremateLeft1").show();
                $("#CremateLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Cremate:</b> It was either that or a beauty school. Screwing up how others look is fun, but humiliating the tough ones is much more fun.");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Beauty:</b> Fun fact: Cremate was originally going to be called Steam Mate, but because of one big element of a certain story she appears in later, that name could not be used, so it was substituted for Cremate.");

            }
            else if (dialogue === 8)
            {
                $("#CremateLeft1").animate({left: '-50px'}, function() {
                    $("#CremateLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Pyra:</b> I suppose that fits her well. You’d have to associate being around her with being dead first.");

            }
            else if (dialogue === 9)
            {
                $("#BeautyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#CremateRight1").show();
                $("#CremateRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Cremate:</b> Unlike you where they wouldn’t be caught dead in your proximity.");

            }
            else if (dialogue === 10)
            {
                 $("#PyraLeft1").animate({left: '-50px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#CremateRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#CremateRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 10;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("10. Cremate has the unique ability to drain people of their looks to grow more powerful. Why did she not drain Pyra?");
                $("#answera").text("Captain D stopped her");
                $("#answerb").text("She forgot");
                $("#answerc").text("She was busy fighting me");
                $("#answerd").text("She didn’t think Pyra was worth draining");
            }
        }
        else if (question === 10)
        {
            if (dialogue === 1)
            {
                $("#CremateRight1").show();
                $("#CremateRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Cremate:</b> What can I say? I’ve been a girl in high school. I know what works. Too bad Pyra doesn’t know that for her face.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Pyra:</b> Excuse me? You know scars don’t come off so easily.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Cremate:</b> Oh, I’m sorry. Did you want me to suggest a good conditioner to cover all that up? I’m sure some of it won’t be scared of you.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Pyra:</b> Ugh. Let’s just skip this question.");
            }
            else if (dialogue === 5)
            {
                 $("#PyraLeft1").animate({left: '-50px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#CremateRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#CremateRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 11;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").html("11. When Captain D knocked out Cremate, what did he say the D stood for?");
                $("#answera").text("Dead or alive");
                $("#answerb").text("Deez muscles");
                $("#answerc").text("Dare to beware");
                $("#answerd").text("Don’t mess with Captain D");
            }
        }
        else if (question === 11)
        {
            if (dialogue === 1)
            {
                $("#CaptainDRight1").show();
                $("#CaptainDRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Captain D:</b> And if you’re referring the name to someone else, the D would stand for “Dem muscles.” It works in multiple scenarios.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Nator:</b> What if someone refers to you with you not being present?");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Captain D:</b> Then it would be “Dat guy’s muscles.”");
            }
            else if (dialogue === 4)
            {
                $("#NatorLeft1").animate({left: '-50px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Bendy:</b> Geez. Pick a catchphrase, man.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Captain D:</b> At least I have one. Get a TV show and maybe you can tell me more about that.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Bendy:</b> Really? Can you get me a part on your show?");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Captain D:</b> I’ll put in a word with my casting director.");

            }
            else if (dialogue === 8)
            {
                $("#BendyLeft1").animate({left: '-50px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Beauty:</b> Speaking of catch phrases, Captain D saying the D stood for different things is based on Sanford and Son where Fred would say his middle initial stood for something new depending on the scene.");

            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Captain D:</b> Sounds like my show’s gonna make it to a hundred-thirty-six episodes then.");

            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Beauty:</b> Yeah, one-thirty-six broadcasts in reruns, maybe.");

            }
            else if (dialogue === 11)
            {
                 $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#CaptainDRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#CaptainDRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 12;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("12. When the Brigade scolds Bendy for covering up Captain D’s crimes, which of us tell him there’s nothing wrong with thinking someone can be good?");
                $("#answera").text("Race");
                $("#answerb").text("Nator");
                $("#answerc").text("Tel-E");
                $("#answerd").text("Pyra");
            }
        }
        else if (question === 12)
        {
            if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Nator:</b> Unless that person has nothing good about them. Then it’s not worth trying.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Tel-E:</b> But if you can see something not inherently bad about them, then there could be some good you just can’t see.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Nator:</b> Uh huh. But that’s like saying one percent of something can lead to eighty percent, which is just unlikely.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Tel-E:</b> Well, that’s if that percent is based on what you know and not what you’re willing to know.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Nator:</b> That makes no sense. Why would you say something bad could be entirely good? It’s just not that probable.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Tel-E:</b> Only when you look on the outside. It’s like taking some food that’s cold and a bit hard. You won’t like it as you see it, but once you put it in the microwave, you’ll see that it’s actually pretty good.");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Nator:</b> Do you honestly think that applies to morality. I mean, really.");

            }
            else if (dialogue === 8)
            {
                $("#Tel-ELeft1").animate({left: '-50px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Beauty:</b> Hey! Take it outside, you two! Mom’s busy here!");

            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Beauty:</b> Anyway, just keep Tel-E’s views on seeing the good in someone in mind. It will come up later on.");

            }
            else if (dialogue === 10)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Tel-E:</b> Nator, would you not welcome a stranger into your home during a storm just because you were suspicious of them?");

            }
            else if (dialogue === 11)
            {
                $("#dialogue").html("<b>Nator:</b> Well, is my home within walking distance of someone else’s, probably yours?");
            }
            else if (dialogue === 12)
            {
                $("#Tel-ELeft1").animate({left: '-50px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Beauty:</b> Hey, what did I say about having debates in the house, you kids?");
            }
            else if (dialogue === 13)
            {
                 $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#NatorRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 13;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("13. When I tried to talk Bendy into confronting Captain D, I told him a story about meeting my own hero. What was her name?");
                $("#answera").text("Tara Wahlgren");
                $("#answerb").text("Mary Kay Burson");
                $("#answerc").text("Grey Summer");
                $("#answerd").text("Vanessa Walch");
            }
        }
        else if (question === 13)
        {
            if (dialogue === 1)
            {
                $("#BendyRight1").show();
                $("#BendyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Bendy:</b> Ha! A voice actor? My hero does all the best stunts on TV. He may have been a villain, but at least he was cool.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> At least my hero actually has range and good acting when she works on a show.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Bendy:</b> Whoa! Whoa! It’s not a competition here.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Beauty:</b> Fun fact: I mentioned my hero to Bendy when I talked about how hard it is to imagine a person you look up to having a dark side to them. As such, the name Mary Kay Burson is named after real-life voice actors Mary Kay Bergman and Greg Burson.");
            }
            else if (dialogue === 5)
            {
                $("#BendyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#BendyRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Tel-E:</b> Why those two?");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Beauty:</b> Well, Bergman and Burson were brilliant actors, but the later parts of their lives were . . . well, let’s just say a little unhappy.");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Tel-E:</b> Why? What happened?");

            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Beauty:</b> I’d rather not say.");

            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Tel-E:</b> No? Very well. I’ll just read your mind to gain this information.");

            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Tel-E:</b> . . . Oh . . . Uh, I see. Ahem . . . Let’s just go to the next question then.");

            }
            else if (dialogue === 11)
            {
                 $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ERight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#Tel-ERight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 14;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("14. How does Bendy defeat Captain D?");
                $("#answera").text("He got Captain D to use up all his acquired power");
                $("#answerb").text("He neutralized Captain D’s invincibility");
                $("#answerc").text("He talked Captain D into giving up");
                $("#answerd").text("He got Captain D caught in the building demolition");
            }
        }
        else if (question === 14)
        {
            if (dialogue === 1)
            {
                $("#BendyRight1").show();
                $("#BendyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Bendy:</b> No doubt loosely based on Muhammad Ali, am I right?");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Race:</b> I’m just glad you were there to get hurt for us. I wouldn’t wanna be you for any amount of attacks.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Bendy:</b> That’s right. You need a punching bag? I’m your guy.");
            }
            else if (dialogue === 4)
            {
                $("#RaceLeft1").animate({left: '-50px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#CaptainDLeft1").show();
                $("#CaptainDLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Captain D:</b> How ‘bout you and I trade roles and I’ll let you be Captain D for a day?");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Bendy:</b> For real? That’d be so cool! I . . . wait a minute. You want me to punch you so you can gain all that strength back. Well, you can forget it!");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Captain D:</b> I’ll let you wear my costume.");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Bendy:</b> I’ll get back to you on that. ");

            }
            else if (dialogue === 8)
            {
                 $("#CaptainDLeft1").animate({left: '-50px'}, function() {
                    $("#CaptainDLeft1").hide();
                });
                $("#BendyRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#BendyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 15;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .22)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("15. When the Chief is distraught over seeing Captain D get arrested, what does he yell out as he chases the police van?");
                $("#answera").text("He wants to go to Captain D’s next TV taping");
                $("#answerb").text("He wants Captain D to sign his badge");
                $("#answerc").text("He wants Captain D to record his voicemail");
                $("#answerd").text("He wants Captain D to sign his gun");
            }
        }
        else if (question === 15)
        {
            if (dialogue === 1)
            {
                $("#PyraRight1").show();
                $("#PyraRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Pyra:</b> Yeah, that’s a nice advertisement for the Minor City police department.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> “Come to Minor City! Our cops don’t mind!”");
            }
            else if (dialogue === 3)
            {
                $("#PyraRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#PyraRight1").hide();
                });
                $("#ChiefRight1").show();
                $("#ChiefRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Chief:</b> Stop defaming our city! You represent this town, you know!");
            }
            else if (dialogue === 4)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Pyra:</b> And yet you wanted to give Captain D your gun?");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Chief:</b> He’s not a bad guy! He’s just misunderstood. When I was your age, I had a criminal record. You think I can’t be good? You don’t trust me? You don’t think I can’t be in charge of a gun?");
            }
            else if (dialogue === 6)
            {
                $("#PyraLeft1").animate({left: '-50px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Race:</b> Dad, just lie and say you didn’t have your gun loaded and we can move on.");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Chief:</b> I won’t have anyone tell me I can’t admire a man like Captain D just because you all decided to make him look bad. ");

            }
            else if (dialogue === 8)
            {
                $("#RaceLeft1").animate({left: '-50px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: (window.screen.width * .22)});
                $("#dialogue").html("<b>Bendy:</b> Get over it, Chief. If I can stop worshipping Captain D to a degree, maybe you put an end to this and then, I don’t know, you could start giving that praise and admiration to your own team and police force who protect the city.");

            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Chief:</b> Never!");

            }
            else if (dialogue === 10)
            {
                 $("#BendyLeft1").animate({left: '-50px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#ChiefRight1").animate({left: (window.screen.width * .78)}, function() {
                    $("#ChiefRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .35)});
                    
                    nextline = 1;
                    question = 16;
                    dialogue = 0;

                    $("input").hide();
                    $("label").hide();
                    $("#question").hide();
                    $("#submitanswer").hide();
                    $("img").hide();
                    $("#BeautyLeft1").show();
                    $("#dialogue").html("<b>Beauty:</b> That's the end of that quiz. Let's see how you did.");
                });
                
            }
        }
        else if (question === 16)
        {
            if (dialogue === 1)
            {
                $("#score").show();
                $("#score").text("Your score: " + correct + "/15");
                if (correct === 15)
                    $("#dialogue").html("<b>Beauty:</b> All right! Perfect score! 15 out of 15! Well done.");
                else if (correct > 10)
                    $("#dialogue").html("<b>Beauty:</b> Hey, you got a " + correct + " out of 15. Nicely done.");
                else if (correct > 5)
                    $("#dialogue").html("<b>Beauty:</b> Looks like you got a score of " + correct + " out of 15. Not bad.");
                else if (correct > 1)
                    $("#dialogue").html("<b>Beauty:</b> Whoa. You only got " + correct + " out of 15 questions right. Good try. Maybe you'll do better next time.");
                else
                    $("#dialogue").html("<b>Beauty:</b> Aw, what? You didn't get a single question right. Did you even read this story? Unless you're Race and you don't like reading about yourself, I'd go back and look at Story 1 for some reference.");
            }
            else if (dialogue === 2)
            {
                $("#backquiz").show();
                $("#dialogue").html("<b>Beauty:</b> Now that you've finished this, why not try another quiz? Just hit the button on the right to go back to the quiz menu.");
            }

        }

    }


    $("#submitanswer").click(function() {

        if (question === 1)
        {
            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Correct. Tammy Time was the one who disrupted our class.");
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
        }
        else if (question === 2)
        {
            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> That’s right. Of all the things wrong with Captain D’s show, being appropriate for kids is not one of them.");
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("");
                missed = 1;
            }
        }
        else if (question === 3)
        {
            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Yep. The Chief is quite a big fan of the daredevil and his show. It doesn’t seem like much of a surprise, seeing as how he doesn’t have such great taste in anything.");
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
                $("#BeautyLeft1").show();
                //$("#BeautyLeft1").animate({left: '350px'});
            }
        }
        else if (question === 4)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Correct. Captain D said those first two before he started his show. I know. They’re weird. But he’s an unusual guy.");
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
        }
        else if (question === 5)
        {
            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> That’s right. After Tammy Time trashed the classroom at the police station, the Chief suggested it might be destroyed again and canceled the class so Bendy could get those VIP passes.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "c")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("");
                missed = 1;
            }
        }
        else if (question === 6)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Yes. I’m afraid that’s correct. In following the example of Captain D’s stupid show, Bendy wanted me act like I was his girlfriend to impress his hero.");
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("");
                missed = 1;
            }
        }
        else if (question === 7)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {

                $("#dialogue").html("<b>Beauty:</b> That is correct. Bendy mentioned the editing in his defense of Captain D’s show not having a disclaimer for kids to not imitate what they saw.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("");
                missed = 1;
            }
        }
        else if (question === 8)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("<b>Beauty:</b> Correct. The Charevo Fairy that spoke to him then was Defiance.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("");
                missed = 1;
            }
        }
        else if (question === 9)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> That is correct. Cremate was the villain.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "c")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("");
                missed = 1;
            }
        }
        else if (question === 10)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> That’s right. Cremate’s kind of a beauty snob, so she felt like not draining Pyra of her looks was worth more to her than actually doing it.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
        }
        else if (question === 11)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Correct. Captain D said it was “Deez muscles” at that time as he flexed his arms.");
                //  $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {

                $("#dialogue").html("");
                missed = 1;
            }
        }
        else if (question === 12)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("<b>Beauty:</b> Very good. As the optimist of the team, Tel-E was one who mentioned seeing good in others as being completely reasonable.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();

            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("");
                missed = 1;

            }
        }
        else if (question === 13)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Very good. Like our creator, I’m a fan of animation and voice actors, and Mary Kay Burson is my favorite.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "d")
            {

                $("#dialogue").html("");
                missed = 1;
            }
        }
        else if (question === 14)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("<b>Beauty:</b> Correct. Captain D’s power increases when he gets attacked. So rather than attack, Bendy let him use it all up by taking his hits.");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "b")
            {

                $("#dialogue").html("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("");
                missed = 1;

            }
        }
        else if (question === 15)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {

                $("#dialogue").html("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Yes. That’s it. The Chief loves Captain D so much, he was going to let him sign his gun.");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();

            }
        }

    });
});
