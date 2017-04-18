/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {

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
    $("#BeautyLeft1").animate({left: '35%'});


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
                $("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("#searchSubmit").hide();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("1.	In the beginning, Nator gets us thrown out of a movie theater. What was the name of the theater?");
                $("#answera").text("Minor City Multiplex");
                $("#answerb").text("Minor City Cinema");
                $("#answerc").text("Minor City Multiplexor");
                $("#answerd").text("Minor City Cinerama");
            }
        }
        else if (question === 1) {

            if (dialogue === 1)
            {
                $("#RaceRight1").show();
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Race:</b> Um. Is that a typo? Why would a movie theater be called a multiplexor?");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> Heh heh heh. You don’t see why it’s funny?");
            }
            else if (dialogue === 3)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> If we don’t see why up front, it’s probably not funny.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Nator:</b> A multiplexor is a piece of computer hardware that takes one of 2<sup>n</sup> possible inputs from an n-bit selector to produce a single output through a data path. As you can see, the name sounds like the name of a movie theater, which is a multiplex, so you can see the humor in it.");
            }
            else if (dialogue === 5)
            {
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Ughhhhhh.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Nator:</b> What?");
            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Beauty:</b> Nothing. It's just . . . in those first four stories, we had trivia with references to movies, TV shows, video games, musicians, and comedians. And now we're down to computer science?");
            }
            else if (dialogue === 8)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> It's Nator's story, so I guess we're on his turf now.");
            }
            else if (dialogue === 9)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> Well, our creator wrote this while he was majoring in computer science. Besides, what's wrong with smart references? Logic is what makes the world make sense. There's no reason it can't be fun too.");
            }
            else if (dialogue === 10)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Ugh. This should NOT have been the last story.");
            }
            else if (dialogue === 11)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 2;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("2.	After getting thrown out of the theater, we found one of our villains using an earthquake device on the city. What was this villain’s name?");
                $("#answera").text("Fourize");
                $("#answerb").text("Dinomight");
                $("#answerc").text("Ninja");
                $("#answerd").text("Cyhack");
            }
        }
        else if (question === 2) {
            if (dialogue === 1)
            {
                $("#CyhackRight1").show();
                $("#CyhackRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Cyhack:</b> What can I say? The Cyhack knows how to attract an audience. All you need to do is use more of the Cyhack.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> Does the Cyhack know when to shut up and mind her own business?");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Cyhack:</b> I never got any of my friends thrown out of a movie theater. And I wasn't the one talking about my earthquake device in front of the Boole twins to get it stolen. That's right. I read the story too.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Nator:</b> Eh, why should I be listening to you? As Beauty's pointed out, you're just some rip-off of a character from that Teen Titans show.");
            }
            else if (dialogue === 5)
            {
                $("#CyhackRight1").animate({right: '0px'}, function() {
                    $("#CyhackRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Uh . . . so are you, Nator.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Nator:</b> Say what?");
            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Beauty:</b> In fact, when our creator had the idea of using me, one of his first original characters, in a Teen Titans-like world, he used a number of those characters as a template for who this world's characters would be before he developed all the characters further. And for someone who was inspired by Gizmo, I think Cyhack turned out pretty well.");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Nator:</b> Hmph. That depends who you ask.");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Beauty:</b> Come on, Nator, you don't think a female cyborg is cool? At least give some respect for a girl who's awesome at science.");
            }
            else if (dialogue === 10)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#CyhackLeft1").show();
                $("#CyhackLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Cyhack:</b> The Cyhack approves of this fangirl.");
            }
            else if (dialogue === 11)
            {
                $("#CyhackLeft1").animate({left: '0px'}, function() {
                    $("#CyhackLeft1").hide();
                });
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 3;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("3.	When it is revealed the Boole twins are villains, what names do they go by?");
                $("#answera").text("One and Oh");
                $("#answerb").text("One and Un");
                $("#answerc").text("One and No");
                $("#answerd").text("True and Un");
            }
        }
        else if (question === 3) {
            if (dialogue === 1)
            {
                $("#RaceRight1").show();
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Race:</b> Wasn't Oh's name originally Un? You know, like a prefix for negation?");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#OneLeft1").show();
                $("#OneLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>One:</b> True. But it was finally settled on One and Oh.");
            }
            else if (dialogue === 3)
            {
                $("#OneLeft1").animate({left: '0px'}, function() {
                    $("#OneLeft1").hide();
                });
                $("#OhLeft1").show();
                $("#OhLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Oh:</b> I'm sure you all know that in computer science, one is the binary digit to represent a true statement, and oh, or zero, represents a false statement.");
            }
            else if (dialogue === 4)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> So we have some other people besides Nator making computer science references? This seems like a good time for the rest of us to go to the bathroom.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Oh:</b> Go ahead. It's not like our real names, Tiffany and Elsa Boole, are at all interesting.");
            }
            else if (dialogue === 6)
            {
                $("#OhLeft1").animate({left: '0px'}, function() {
                    $("#OhLeft1").hide();
                });
                $("#OneLeft1").show();
                $("#OneLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>One:</b> Boole is short for Boolean, the type for a variable with a true or false value. And our first names are meant to contain the words “if” and “else” as a reference to if-else statements in computer science.");
            }
            else if (dialogue === 7)
            {
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> How come you get the smart names and I'm named after fictional robots? Ugh. Even here, you have to one-up me?");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>One:</b> Don't worry, Nator. If you ever want to join us, your name can be Two.");
            }
            else if (dialogue === 9)
            {
                $("#OneLeft1").animate({left: '0px'}, function() {
                    $("#OneLeft1").hide();
                });
                $("#OhLeft1").show();
                $("#OhLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Oh:</b> Just in case people couldn't already tell what doesn’t belong.");
            }
            else if (dialogue === 10)
            {
                $("#OhLeft1").animate({left: '0px'}, function() {
                    $("#OhLeft1").hide();
                });
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 4;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("4. Which Boole twin asked Bendy out at school?");
                $("#answera").text("One");
                $("#answerb").text("Oh");
                $("#answerc").text("Both");
                $("#answerd").text("Neither");
            }
        }
        else if (question === 4) {
            if (dialogue === 1)
            {
                $("#BendyRight1").show();
                $("#BendyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Bendy:</b> Oh? I thought it was One. That's Tiffany, right?");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> Yeah, but she's also the truth teller and the one who asked you out said she had a lot of respect for us and she liked you. You know that's not true.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Bendy:</b> So she lied? And I went out with a different girl? Oh man, this would be way easier if I had just gone out with them both.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Nator:</b> Well, they like to switch each other to make people look stupid. Don't be so surprised.");
            }
            else if (dialogue === 5)
            {
                $("#BendyRight1").animate({right: '0px'}, function() {
                    $("#BendyRight1").hide();
                });
                $("#OhRight1").show();
                $("#OhRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Oh:</b> In Nator's case, we're not really needed for that.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Nator:</b> I know you're the liar, Oh. That insult means nothing.");
            }
            else if (dialogue === 7)
            {
                $("#OhRight1").animate({right: '0px'}, function() {
                    $("#OhRight1").hide();
                });
                $("#OneRight1").show();
                $("#OneRight1").animate({right: '22%'});
                $("#dialogue").html("<b>One:</b> You realize not all insults have to be based on facts.");
            }
            else if (dialogue === 8)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> If they were, I'm sure Nator would just be debunking a bunch of “yo momma” jokes.");
            }
            else if (dialogue === 9)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#OneRight1").animate({right: '0px'}, function() {
                    $("#OneRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 5;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("5. After school, what did I see Nator working on?");
                $("#answera").text("The HQ’s doorbell");
                $("#answerb").text("A new weapon");
                $("#answerc").text("A robot puppy");
                $("#answerd").text("A biometric terminal");
            }
        }
        else if (question === 5) {
            if (dialogue === 1)
            {
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> So the police station is right next door, yet we need our own security for keeping things safe? Seems kinda pointless that we had to wait to give the earthquake device to the Chief.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> Still, you can never be too safe. I always like to keep a good security system, and biometrics is a great method.");
            }
            else if (dialogue === 3)
            {
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                });
                $("#OhRight1").show();
                $("#OhRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Oh:</b> Yeah, that thing protected you REAL good.");
            }
            else if (dialogue === 4)
            {
                $("#OhRight1").animate({right: '0px'}, function() {
                    $("#OhRight1").hide();
                });
                $("#OneRight1").show();
                $("#OneRight1").animate({right: '22%'});
                $("#dialogue").html("<b>One:</b> Scanning fingerprints is quite effective. Too bad you didn't know my sister could shapeshift and have her own copy of a person's fingerprints.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Nator:</b> I was planning on using brainwave scanners too. I'm working on it now as a matter of fact.");
            }
            else if (dialogue === 6)
            {
                $("#OneRight1").animate({right: '0px'}, function() {
                    $("#OneRight1").hide();
                });
                $("#OhRight1").show();
                $("#OhRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Oh:</b> Sure. And I'm Jim Carrey.");
            }
            else if (dialogue === 7)
            {
                $("#OhRight1").animate({right: '0px'}, function() {
                    $("#OhRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Here's an idea. How 'bout a password that only we would know and our bodies wouldn't?");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Nator:</b> Pff. Passwords are outdated.");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Beauty:</b> In other words, you're too good for them.");
            }
            else if (dialogue === 10)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 6;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("6. At the end of their date, what did Tiffany do before she and Bendy left together?");
                $("#answera").text("She asked rapid fire yes or no questions");
                $("#answerb").text("She gave him a big kiss");
                $("#answerc").text("She used her powers to make Bendy smarter than Nator");
                $("#answerd").text("She told him she never really liked him");
            }
        }
        else if (question === 6) {

            if (dialogue === 1)
            {
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> Interesting how One tricked him, but Oh is the one with the Deception element.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#OhLeft1").show();
                $("#OhLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Oh:</b> I taught her well and it paid off for all of us with your yes man there.");
            }
            else if (dialogue === 3)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Bendy sure knows how to pay attention when a girl talks, huh?");
            }
            else if (dialogue === 4)
            {
                $("#OhLeft1").animate({left: '0px'}, function() {
                    $("#OhLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> Hey, I was feeling relaxed. I didn’t know I was gonna be taking a pop quiz on a date.");
            }
            else if (dialogue === 5)
            {
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                });
                $("#OneRight1").show();
                $("#OneRight1").animate({right: '22%'});
                $("#dialogue").html("<b>One:</b> I bet you’ve tried to practice with those compatibility tests in magazines though.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Bendy:</b> Hey, I got a fifteen out of twenty one time.");
            }
            else if (dialogue === 7)
            {
                $("#OneRight1").animate({right: '0px'}, function() {
                    $("#OneRight1").hide();
                });
                $("#OhRight1").show();
                $("#OhRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Oh:</b> Too bad you missed a key question that was worth everything with One, and I’m sure you’ll miss it again in a few minutes.");
            }
            else if (dialogue === 8)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> That’s what happens when you don’t read the terms and conditions in full.");
            }
            else if (dialogue === 9)
            {
                $("#OhRight1").animate({right: '0px'}, function() {
                    $("#OhRight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Bendy:</b> It wasn’t my fault. It’s not like I can see an invisible contract that comes my way. She could’ve tricked any one of you guys.");
            }
            else if (dialogue === 10)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> Not me. I’d never date her to lead up to the question in the first place.");
            }
            else if (dialogue === 11)
            {
                $("#BendyRight1").animate({right: '0px'}, function() {
                    $("#BendyRight1").hide();
                });
                $("#OneRight1").show();
                $("#OneRight1").animate({right: '22%'});
                $("#dialogue").html("<b>One:</b> I don’t think you have any other options available.");
            }
            else if (dialogue === 12)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#OneRight1").animate({right: '0px'}, function() {
                    $("#OneRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 7;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("7. When Nator and I finish spying on Bendy and Tiffany, what did Nator say was impossible to obtain with the Boole twins?");
                $("#answera").text("Satisfiability");
                $("#answerb").text("Satisfaction");
                $("#answerc").text("Peace of Mind");
                $("#answerd").text("Peace in general");
            }
        }
        else if (question === 7)
        {
            if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> This is based on how in algorithms, it is almost impossible for an interpretation of a formula to make the formula true.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> No . . . kidding.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Nator:</b> In fact, this is determined from a problem being undecidable if there is no way of constructing an algorithm to always get a correct answer. In other words, satisfiability is undecidable. You can try and try and try and try, but you can't get no satisfiability.");
            }
            else if (dialogue === 4)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Okay. Throwing in cool references doesn't make you cool after that.");
            }
            else if (dialogue === 5)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#OhLeft1").show();
                $("#OhLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Oh:</b> I'm sure you won't mind if we check your conclusion to that proof, Nator.");
            }
            else if (dialogue === 6)
            {
                $("#OhLeft1").animate({left: '0px'}, function() {
                    $("#OhLeft1").hide();
                });
                $("#OneLeft1").show();
                $("#OneLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>One:</b> Satisfiability is undecidable for first-order-logic, but in propositional logic, it is actually quite possible to achieve satisfiability.");
            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Nator:</b> Ugh. Can you two learn to butt out sometime?");
            }
            else if (dialogue === 8)
            {
                $("#OneLeft1").animate({left: '0px'}, function() {
                    $("#OneLeft1").hide();
                });
                $("#OhLeft1").show();
                $("#OhLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Oh:</b> Maybe when you learn satisfiability.");
            }
            else if (dialogue === 9)
            {
                $("#OhLeft1").animate({left: '0px'}, function() {
                    $("#OhLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> They were only trying to clarify a slight error you made, Nator.");
            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Nator:</b> Shut up.");
            }
            else if (dialogue === 11)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Gee, Nator. You hate One and Oh. You hate Cyhack. You don't think Tel-E's as smart as she is or believe what she tells us about the Charevo Gene. You seem to have a problem with smart women.");
            }
            else if (dialogue === 12)
            {
                $("#dialogue").html("<b>Nator:</b> You wouldn't think that if Cyhack was a guy, which she originally was going to be. Thanks a lot, creator.");
            }
            else if (dialogue === 13)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 8;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("8. During the Chief’s surprise roll call, who in the Neo Brigade was not present?");
                $("#answera").text("Beauty");
                $("#answerb").text("Bendy");
                $("#answerc").text("Nator");
                $("#answerd").text("They were all present");
            }
        }

        else if (question === 8)
        {
            if (dialogue === 1)
            {
                $("#ChiefRight1").show();
                $("#ChiefRight1").animate({right: '22%'});
                $("#OhRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Chief:</b> And for missing roll call, I’m going to double Bendy’s assigned paperwork for next Monday at the station.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> What? But I was kidnapped. That totally counts as an alibi.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Chief:</b> Well, you intentionally had someone stand in your place during roll call, and that is against the rules!");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Bendy:</b> You . . . you can’t do that! Since when is the victim here responsible for something small like standing in line while our names are called?");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Chief:</b> Perhaps you’d prefer I punish you by making Nator go out with both of those One and Oh girls.");
            }
            else if (dialogue === 6)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> Me do what now? No thank you!");
            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Chief:</b> I command you to!");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Nator:</b> What? No! You can’t! That . . . I would never!");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Chief:</b> You will go out with them and that is an order!");
            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Nator:</b> But . . . I . . . I . . .");
            }
            else if (dialogue === 11)
            {
                $("#ChiefRight1").fadeOut();
                $("#OhRight1").fadeIn("slow");
                
                $("#dialogue").html("<b>Oh:</b> And no hesitation from you it would seem.");
            }
            else if (dialogue === 12)
            {
                $("#ChiefRight1").animate({right: '0px'}, function() {
                    
                });
                $("#dialogue").html("<b>Nator:</b> Oh? You . . . what’s going on?");
            }
            else if (dialogue === 13)
            {
                $("#OhRight1").animate({right: '0px'}, function() {
                    $("#OhRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Well, that explains that. Oh was just disguised as the Chief. Quite convincingly, I’d say.");
            }
            else if (dialogue === 14)
            {
                $("#dialogue").html("<b>Nator:</b> That is not funny, Oh!");
            }
            else if (dialogue === 15)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#OhRight1").show();
                $("#OhRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Oh:</b> Teehee. I agree.");
            }
            else if (dialogue === 16)
            {
                $("#dialogue").html("<b>Nator:</b> Liar.");
            }
            else if (dialogue === 17)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#OhRight1").animate({right: '0px'}, function() {
                    $("#OhRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 9;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("9. When it was revealed that Oh had the power to shapeshift, who did she attack the Chief as?");
                $("#answera").text("Race");
                $("#answerb").text("Bendy");
                $("#answerc").text("Pyra");
                $("#answerd").text("Beauty");
            }
        }
        else if (question === 9)
        {
            if (dialogue === 1)
            {
                $("#RaceRight1").show();
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Race:</b> Gee, someone seeing Pyra hurt one of her own? That’s not gonna help her much.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Ugh. I do not need this. Do you know how much damage I’ve had to undo to build a helpful image?");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Beauty:</b> Still, better for it to happen to the Chief than someone else.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Pyra:</b> Having my name as part of a source of danger to anyone is just enough to make me look bad. There’s no way I can let that happen.");
            }
            else if (dialogue === 5)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> Hey, your inner struggle was from the last story. We’re focusing on me now.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Pyra:</b> Well, I thought I was talking, but apparently someone else knew better.");
            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Nator:</b> Just wanna keep people focused here. ");
            }
            else if (dialogue === 8)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 10;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("10. The first time Nator asked One and Oh questions to determine who was the liar and who was the truth teller, how did they respond when he asked if the earthquake device was still in the HQ?");
                $("#answera").text("“I would tell you it is not”");
                $("#answerb").text("“We would both tell you it is”");
                $("#answerc").text("“My sister would tell you it is”");
                $("#answerd").text("“My sister would tell you it is not”");
            }
        }
        else if (question === 10)
        {
            if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> Well, this simply comes down to getting both One and Oh to tell a lie. Obviously, they can’t say the exact same thing, but they can say what they would say in their scenario.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> So One can tell the truth by saying Oh would lie and Oh could lie by saying One would lie. In this case, both stick to their true and false statements while providing false information.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Nator:</b> Hey, I wanted to say that.");
            }
            else if (dialogue === 4)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Okay. Let’s go back to the beginning again. Nator didn’t get his way.");
            }
            else if (dialogue === 5)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 11;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("11. What was One and Oh’s response when asked what 2 plus 2 was?");
                $("#answera").text("“I’m the truth teller and the answer is 1”");
                $("#answerb").text("“I’m the truth teller and the answer is 4”");
                $("#answerc").text("“I’m the liar or the answer is 1”");
                $("#answerd").text("“I’m the liar or the answer is 4”");
            }
        }
        else if (question === 11)
        {
           if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> And as I mentioned before, this is an example of a conjunction of statements. For One, she’s giving a true AND true statement, which is true. And Oh is giving a false AND true statement, which is false. Of course, these are both possible for them to say.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Race:</b> With the way these two pair up and respond, I wouldn’t wanna gather any information from them. I don’t know who to trust and who not to trust.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Nator:</b> Just do what I do and don’t trust either of them.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Race:</b> You know, these girls were based on that old riddle with the liars and truth tellers. In that, you need to figure out what to ask to distinguish them. You’d think if you continued talking to people like that, you could figure out who was what.");
            }
            else if (dialogue === 5)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#OneRight1").show();
                $("#OneRight1").animate({right: '22%'});
                $("#dialogue").html("<b>One:</b> We’re not stupid. We know how to speak to keep people from knowing who’s true and who’s false.");
            }
            else if (dialogue === 6)
            {
                $("#OneRight1").animate({right: '0px'}, function() {
                    $("#OneRight1").hide();
                });
                $("#OhRight1").show();
                $("#OhRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Oh:</b> We’re just that good at knowing the logic, which includes all the negations One uses to steal someone’s powers . . . and I had waffles for breakfast today.");
            }
            else if (dialogue === 7)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Yeah, that’s how you hide your identity.");
            }
            else if (dialogue === 8)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#OhRight1").animate({right: '0px'}, function() {
                    $("#OhRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 12;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("12. Before Tel-E read One and Oh’s minds, what did I suggest they needed to distinguish them?");
                $("#answera").text("A lie detector test");
                $("#answerb").text("A giant nose");
                $("#answerc").text("A nervous stomach");
                $("#answerd").text("A bad poker face");
            }
        }
        else if (question === 12)
        {
            if (dialogue === 1)
            {
                $("#RaceRight1").show();
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Race:</b> A lie detector would be pretty redundant for them if you knew who they were and wanted information from them.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> True. There’s not much reason to check on them since they’d have ways of revealing themselves.");
            }
            else if (dialogue === 3)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#OhRight1").show();
                $("#OhRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Oh:</b> Well, I’m One and I’ll bet you couldn’t tell when I try to lie.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Nator:</b> You? You’re Oh. You’re not One.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Oh:</b> Of course I’m One. As a true statement, One has the ability to steal powers just by asking for them <span style = 'font-size: 30%;'>and I’m One.</span>");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Nator:</b> Huh. That is a true statement.");
            }
            else if (dialogue === 7)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Come on. Of course you’re Oh. We can see your name in the dialogue box.");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Oh:</b> Yeah, I can see Oh’s name too <span style = 'font-size: 30%;'> and I’m One </span>. It’s clearly a mistake <span style = 'font-size: 30%;'> and I’m One.</span>");
            }
            else if (dialogue === 9)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> It’s still true. And with no “and” in between. That is One.");
            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Oh:</b> And to further verify my identity with the truth, you, Nator, have no future as a hero or an intellectual and have the mental capacity of a protoplasm.");
            }
            else if (dialogue === 11)
            {
                $("#dialogue").html("<b>Nator:</b> A conjunctive statement from One? That can’t be true.");
            }
            else if (dialogue === 12)
            {
                $("#dialogue").html("<b>Oh:</b> Ha! Gotcha like you’d get me! My sister, One, would disagree and say you were right and I really am Oh!");
            }
            else if (dialogue === 13)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> How’d you do that? It must’ve been that fine print at the end of your text, right?");
            }
            else if (dialogue === 14)
            {
                $("#dialogue").html("<b>Oh:</b> Just because I have to lie, it doesn’t mean you have to hear the whole thing, and I really wanted you to. It works when I mutter and whisper lies and just not follow the rule at all.");
            }
            else if (dialogue === 15)
            {
                $("#dialogue").html("<b>Beauty:</b> True, true, and false. OH yeah.");
            }
            else if (dialogue === 16)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#OhRight1").animate({right: '0px'}, function() {
                    $("#OhRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 13;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("13. During our first battle with One and Oh, how did One respond when Nator asked who was Oh?");
                $("#answera").text("“I’m Oh”");
                $("#answerb").text("“She’s Oh”");
                $("#answerc").text("“I’m Oh and I’m not Oh”");
                $("#answerd").text("“I’m Oh or I’m not Oh”");
            }
        }
        else if (question === 13)
        {
            if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> This is an example of a disjunctive statement where if you say a bunch of false statements and then add a true one with the word or, the whole thing is true.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#OneLeft1").show();
                $("#OneLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>One:</b> And if you do one statement or the opposite, the result is always One.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Nator:</b> As in true, not her.");
            }
            else if (dialogue === 4)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#RaceRight1").show();
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Race:</b> Hey, since I’m assuming you’ll be going to court for your crimes, are they gonna have to make you swear to tell the truth, the whole truth, and nothing but the truth?");
            }
            else if (dialogue === 5)
            {
                $("#OneLeft1").animate({left: '0px'}, function() {
                    $("#OneLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> I think she’ll just look at the judge and go, “Seriously?”");
            }
            else if (dialogue === 6)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> Not true. Her powers could be neutralized and she’d have the option to lie.");
            }
            else if (dialogue === 7)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#OneLeft1").show();
                $("#OneLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>One:</b> Plus, that whole “nothing but the truth” part would kind of make it difficult to couple the truth with lies as part of one whole true statement.");
            }
            else if (dialogue === 8)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#RaceRight1").show();
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Race:</b> If they didn’t have them neutralized, how can Oh be under oath?");
            }
            else if (dialogue === 9)
            {
                $("#OneLeft1").animate({left: '0px'}, function() {
                    $("#OneLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> I think God would be cool with her situation.");
            }
            else if (dialogue === 10)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#OhRight1").show();
                $("#OhRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Oh:</b> And I’d be the best testimony ever to grace a courtroom. You can count on that.");
            }
            else if (dialogue === 11)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> And whatever lawyers call you as a witness for anything is totally losing their job.");
            }
            else if (dialogue === 12)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#OhRight1").animate({right: '0px'}, function() {
                    $("#OhRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 14;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("14. During our first battle with One and Oh, what did the twins say Nator was slower than?");
                $("#answera").text("Race without his powers");
                $("#answerb").html("An O(n<sup>12</sup>) algorithm");
                $("#answerc").text("A car with no wheels");
                $("#answerd").text("A traveling salesman");
            }
        }
        else if (question === 14)
        {
            if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> It’s a reference to the algorithmic problem of constructing the shortest possible path on a graph that visits each vertex exactly once and returns to the start. It’s an NP-complete problem that is very difficult to complete.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> And it alludes to a traveling salesman going from location to location to make a sale in the shortest amount of time for efficiency. Yes?");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Nator:</b> Yep. It’s efficiency is very slow.");
            }
            else if (dialogue === 4)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> Hmm. What if the salesman knows he can sell all his stuff to one guy at a certain place? He’d save all his time right there.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Nator:</b> It doesn’t work that way, Bendy.");
            }
            else if (dialogue === 6)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Or instead of going to each place himself, why doesn’t he just call or email them and give everyone the same information all from one place?");
            }
            else if (dialogue === 7)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#OhRight1").show();
                $("#OhRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Oh:</b> Yeah, I’m sure you’ll pass an algorithms class with that answer.");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Beauty:</b> Okay. I get it. It’s slow. By the way, Nator, you gave me those answer choices, and one of them seems quite odd.");
            }
            else if (dialogue === 9)
            {
                $("#OhRight1").animate({right: '0px'}, function() {
                    $("#OhRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> The O(n<sup>12</sup>) algorithm?");
            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Beauty:</b> I was gonna say the car with no wheels because that could be, like, a really fast hover-car. But what’s the other one supposed to be, anyway?");
            }
            else if (dialogue === 11)
            {
                $("#dialogue").html("<b>Nator:</b> An algorithm’s efficiency uses Big O notation for the worst possible time given variable n iterations. I don’t know why they didn’t use that as the insult. O(n<sup>12</sup>) time is extremely slow.");
            }
            else if (dialogue === 12)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#OhLeft1").show();
                $("#OhLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Oh:</b> Oh, we’re not that mean.");
            }
            else if (dialogue === 13)
            {
                $("#OhLeft1").animate({left: '0px'}, function() {
                    $("#OhLeft1").hide();
                });
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 15;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("15. When we looked at the diagram with One and Oh’s Charevo Emblems, how did we determine their location?");
                $("#answera").text("It was the Boole’s own secret language");
                $("#answerb").text("It was arranged to represent a specific cipher code");
                $("#answerc").text("It was arranged to represent binary");
                $("#answerd").text("None of the above");
            }
        }
        else if (question === 15)
        {
            if (dialogue === 1)
            {
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> Careful. We mustn’t use the C word in front of Nator.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> So everyone who has powers from the Charevo Gene has a Charevo Emblem and Nator doesn’t believe in the correlation? How is it this guy was the one I trusted to save us?");
            }
            else if (dialogue === 3)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> Hey, I believe in the mark on the hand being a side effect of having the Charevo Gene, but I just don’t think it’s based on anything else. There are no elements involved in it.");
            }
            else if (dialogue === 4)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Have you even been to the rest of this website? It explains the whole thing.");
            }
            else if (dialogue === 5)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Anyway, it’s a good thing Nator knew binary or we would never have found the twins.");
            }
            else if (dialogue === 6)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#OneLeft1").show();
                $("#OneLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>One:</b> I’d say it was better for you that our names were One and Oh. I doubt you would’ve succeeded without the use of binary.");
            }
            else if (dialogue === 7)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> Well, I stopped you the first time. So I think it proves I’m not as dumb as a plant as you might say.");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>One:</b> Hmph. Since you cracked our code, you’ll read into this pretty well. My sister would probably tell you you’re a dumb 01000110 01110101 011000011 . . .");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Nator:</b> Whoa! Whoa! We’re supposed to be family friendly here!");
            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>One:</b> What? I was gonna say you’re a dumb Fuchsia. You know, the flower native to the Caribbean. You did mention being dumb as plant.");
            }
            else if (dialogue === 11)
            {
                $("#dialogue").html("<b>Nator:</b> Oh . . . I see.");
            }
            else if (dialogue === 12)
            {
                $("#OneLeft1").animate({left: '0px'}, function() {
                    $("#OneLeft1").hide();
                });
                $("#OhLeft1").show();
                $("#OhLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Oh:</b> Though, if you wanna be called the other thing, I think your friends would be fine with it.");
            }
            else if (dialogue === 13)
            {
                $("#OhLeft1").animate({left: '0px'}, function() {
                    $("#OhLeft1").hide();
                });
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 16;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("16. What did Nator ask One and Oh to determine who was who?");
                $("#answera").text("“What would you both say if I asked which of you was One?”");
                $("#answerb").text("“What would your sister say if I asked which of you was One?”");
                $("#answerc").text("“What would you both say if I asked which of you was Oh?”");
                $("#answerd").text("“What would your sister say if I asked which of you was Oh?”");
            }
        }
        else if (question === 16)
        {
            if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> It’s pretty simple since you just have to think of how they would respond differently versus how they would respond identically.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> If it’s so simple, why did it take so long for you to come up with the question?");
            }
            else if (dialogue === 3)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> I think he just wanted to get me out of his way first.");
            }
            else if (dialogue === 4)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> In other words, get his competition out of the way.");
            }
            else if (dialogue === 5)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#OneRight1").show();
                $("#OneRight1").animate({right: '22%'});
                $("#dialogue").html("<b>One:</b> Also, he needed a girl’s help on how to think of a way to fight us. I’m surprised he was able to swallow his pride at all for that.");
            }
            else if (dialogue === 6)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> I can let others help me any time I want. In fact, I’ll let Tel-E explain how the question distinguishes you two right now.");
            }
            else if (dialogue === 7)
            {
                $("#OneRight1").animate({right: '0px'}, function() {
                    $("#OneRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> Why thank you, Nator. Ahem. Well, since One can only tell the truth and Oh can only lie, when asked who the liar is, they will give different answers. To get the same response, we simply negate Oh's answer . . .");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Nator:</b> By asking what she would say if asked who the liar was, which would be the same for One, so they would both be telling the truth! Phew. Sorry, I just couldn't do it.");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Tel-E:</b> I had an inkling that was to come.");
            }
            else if (dialogue === 10)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Race:</b> This is the same guy who won't let you win a Chess game when he's clearly gonna lose.");
            }
            else if (dialogue === 11)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 17;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("17. After One copied Oh’s powers, why couldn’t she speak?");
                $("#answera").text("Too much new power hurt her throat");
                $("#answerb").text("She couldn’t tell the truth and lie at the same time");
                $("#answerc").text("Her Charevo Fairies appeared and advised her not to talk");
                $("#answerd").text("Beauty transformed into a character that muted her");
            }
            
        }
        else if (question === 17)
        {
            if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> This is based on how in computer science, a boolean variable can't be assigned both a true and false value. Doing this would only produce an error. Therefore, One couldn't talk.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> That was quite clever of you to think of that rule when considering the side effects of their powers.");
            }
            else if (dialogue === 3)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> I feel like that was less of Nator being clever and more of our creator just trying to point out why One doesn't just copy Oh's powers and why Oh doesn't shapeshift into One so they could have all of each other's powers.");
            }
            else if (dialogue === 4)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#OneLeft1").show();
                $("#OneLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>One:</b> Truth be told, it was the latter.");
            }
            else if (dialogue === 5)
            {
                $("#OneLeft1").animate({left: '0px'}, function() {
                    $("#OneLeft1").hide();
                });
                $("#OhLeft1").show();
                $("#OhLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Oh:</b> Because you just know if Nator was reading the story, he'd be calling us out on how we weren't using our abilities to their maximum potential, and he'd also complain that he wasn't featured in this too much.");
            }
            else if (dialogue === 6)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> I wouldn't do that! If there's one thing I'd point out, it's why Tel-E didn't figure out your plan from the beginning with her telepathy. If she did, we wouldn't have had to deal with the twins.");
            }
            else if (dialogue === 7)
            {
                $("#OhLeft1").animate({left: '0px'}, function() {
                    $("#OhLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> If she did, then we'd have no story.");
            }
            else if (dialogue === 8)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#OneRight1").show();
                $("#OneRight1").animate({right: '22%'});
                $("#dialogue").html("<b>One:</b> And then Nator REALLY wouldn't be featured in this.");
            }
            else if (dialogue === 9)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#OneRight1").animate({right: '0px'}, function() {
                    $("#OneRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '35%'});
                    $("#nextlevel1a").attr("style", "opacity: .6");
                    nextline = 1;
                    question = 18;
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
        else if (question === 18)
            {
                if (dialogue === 1)
                {
                    $("#score").show();
                    $("#score").text("Your score: " + correct + "/17");
                    if(correct === 17)
                        $("#dialogue").html("<b>Beauty:</b> All right! Perfect score! 17 out of 17! Well done.");
                    else if(correct > 12)
                        $("#dialogue").html("<b>Beauty:</b> Hey, you got a " + correct + " out of 17. Nicely done.");
                    else if(correct > 5)
                        $("#dialogue").html("<b>Beauty:</b> Looks like you got a score of " + correct + " out of 17. Not bad.");
                    else if(correct > 1)
                        $("#dialogue").html("<b>Beauty:</b> Whoa. You only got " + correct + " out of 17 questions right. Good try. Maybe you'll do better next time.");
                    else
                        $("#dialogue").html("<b>Beauty:</b> Aw, what? You didn't get a single question right. Did you even read this story? You might wanna go back and read it.");
                }
                else if (dialogue === 2)
                {
                    $("#backquiz").show();
                    $("#dialogue").html("Now that you finished this, why not try another quiz? Just hit the button on the right to go back to the quiz menu.");
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
                
                $("#dialogue").html("<b>Beauty:</b> Correct. The Minor City Multiplexor was the name of the theater.");
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
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
        else if (question === 2)
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
                
                $("#dialogue").html("<b>Beauty:</b> That's right. Cyhack was her name. Interesting note: of the five villains the Neo Brigade faced in the beginning of each story, Cyhack had the biggest role by both making an appearance at the end of one and being a key factor in the story.");
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
        }
        else if (question === 3)
        {
            if ($("input[name=q]:checked").val() === "a")
            {
                
                $("#dialogue").html("<b>Beauty:</b> That's right. One and Oh were the names they used. Fun fact: Our creator had the idea for these two after doing a few brain teasers that had the classic town of liars and truth tellers.");
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
                $("#BeautyLeft1").show();
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
        else if (question === 4)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                
                $("#dialogue").html("<b>Beauty:</b> Very good. Oh was the one who asked him out.");
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
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
        else if (question === 5)
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
                
                $("#dialogue").html("<b>Beauty:</b> That's right. Nator was working on the security system for a room in the HQ that required biometrics.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
        }
        else if (question === 6)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("<b>Beauty:</b> Correct. One has the ability to take away someone's abilities if she asks for them and the person says yes. By making Bendy say yes over and over to other questions and slipping this question in at the end, she was able to steal his powers.");
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
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
        else if (question === 7)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                
                $("#dialogue").html("<b>Beauty:</b> Correct. He mentioned satisfiability being impossible.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
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
        else if (question === 8)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                
                $("#dialogue").html("<b>Beauty:</b> Correct. Bendy was the one who was not there. It was actually Oh who took his place by shapeshifting into his form..");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
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
        else if (question === 9)
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

                $("#dialogue").html("<b>Beauty:</b> That’s right. Oh was disguised as Pyra when the Chief was hurt.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
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
                
                $("#dialogue").html("<b>Beauty:</b> That is correct. This is the kind of answer they would both give. I’d tell you why this is it, but I think this is where Nator wants to come in.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
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
        else if (question === 11)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                
                $("#dialogue").html("<b>Beauty:</b> Very good. They both claimed to tell the truth while providing the correct answer.");
                //  $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
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
                
                $("#dialogue").html("<b>Beauty:</b> Correct. I said Oh needed a large nose, an obvious reference to Pinocchio.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
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
        else if (question === 13)
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

                $("#dialogue").html("<b>Beauty:</b> Correct. One said she was Oh or she wasn’t.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
        }
        else if (question === 14)
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
                
                $("#dialogue").html("<b>Beauty:</b> Very good. They said Nator was slower than a traveling salesman, whatever that means.");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();

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
                
                $("#dialogue").html("<b>Beauty:</b> That’s right. Their Charevo Emblems were meant to represent ones and zeroes as binary. Nator was able to translate it into the word “Beach.”");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
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
        else if (question === 16)
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
                
                $("#dialogue").html("<b>Beauty:</b> Very good. He asked what both would tell us if asked who was Oh.");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
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
        else if (question === 17)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Correct. She couldn't lie and tell the truth.");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
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

    });
});
