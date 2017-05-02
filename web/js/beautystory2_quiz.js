/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    
    $("section").attr("style", "margin-top: 50px; padding-bottom: 100px; width:100%; height: " + window.outerHeight + "px");
    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

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
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("1.	In the beginning, we fought someone who was attacking the museum. What was the attacker’s name?");
                $("#answera").text("Cyhack");
                $("#answerb").text("Ninja");
                $("#answerc").text("Dinomight");
                $("#answerd").text("Dinophant");
            }
        }
        else if (question === 1) {
            if (dialogue === 1)
            {
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> Well, you certainly know how to pack your information in.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#DinomightLeft1").show();
                $("#DinomightLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Dinomight:</b> All the information you need to know is how to hit, where to hit, and how hard to hit it. I’m Dinomight, baby!");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Tel-E:</b> Hmph. Typical. All fight and no thought from you.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Dinomight:</b> I don’t need no thoughts to get this buff. And I don’t need no thinkin’ for gettin’  girls like you interested neither.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Tel-E:</b> Well, I’d prefer my mind to tell me that would be a terrible idea. Of course, given one of your Charevo Elements being Ignorance, I take it you don’t even know why your name was changed.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Dinomight:</b> I had another name? Well, shoot, then who was usin’ my current name then?");
            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Tel-E:</b> The name was changed to Dinomight as soon as our creator had the idea for him to create explosions with his fists as a power.");
            }
            else if (dialogue === 8)
            {
                $("#DinomightLeft1").animate({left: '0px'}, function() {
                    $("#DinomightLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> I find it more interesting that our creator gave you a British accent and made Dinomight southern. I guess you can never have too much contrast in a smart versus stupid conflict.");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Tel-E:</b> Well, I wouldn’t consider that a fair judgment in comparing us based on intellect.");
            }
            else if (dialogue === 10)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#DinomightRight1").show();
                $("#DinomightRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Dinomight:</b> And who’s you callin’ stupid? Why I oughta knock you out faster ‘an a runaway pickup goin’ into a mule. I mean, I would if I knew how fast the truck was goin’ an’ if that mule had a protective plate in its head, but . . . what were we talkin’ about?");
            }
            else if (dialogue === 11)
            {
                $("#DinomightRight1").animate({right: '0px'}, function() {
                    $("#DinomightRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> I take it back. Judge away.");
            }
            else if (dialogue === 12)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
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
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("2.	After Dinomight was defeated, how did he escape?");
                $("#answera").text("He teleported away");
                $("#answerb").text("He tunneled through the ground");
                $("#answerc").text("A mysterious figure assisted him");
                $("#answerd").text("He didn’t escape");
            }
        }
        else if (question === 2) {
            if (dialogue === 1)
            {
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> Suggesting the possibility of foreshadowing in lieu of confirming an act as foreshadowing. Well played.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> All I can say is we’ll definitely see more of that figure later on.");
            }
            else if (dialogue === 3)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#DinomightRight1").show();
                $("#DinomightRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Dinomight:</b> Yer darn right you will. We got us a stronger force that’ll make y’all look like li’l ants under our feet.");
            }
            else if (dialogue === 4)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> Under your feet, Dinomight, I can’t say that’s very little.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Dinomight:</b> Oh yeah? Well, our new guy’s a real wimp. So next to him, you’ll look real small, ‘cause he’s the scrawniest sucker you ever did see.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Tel-E:</b> I can’t say you’re selling him as a threat too well now.");
            }
            else if (dialogue === 7)
            {
                $("#DinomightRight1").animate({right: '0px'}, function() {
                    $("#DinomightRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> But you can trust me in knowing the potential of it. By the way, I like how we’re acting like we’re talking about a future event as if we don’t know what happens.");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Tel-E:</b> It’s probably best not to mention it. Dinomight’s brain would probably explode.");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Beauty:</b> If it’s HIS brain, would that be a firecracker?");
            }
            else if (dialogue === 10)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#DinomightLeft1").show();
                $("#DinomightLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Dinomight:</b> Hey! . . . I don’t get it.");
            }
            else if (dialogue === 11)
            {
                $("#DinomightLeft1").animate({left: '0px'}, function() {
                    $("#DinomightLeft1").hide();
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
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("3.	At our school’s summer quiz bowl, who was the host?");
                $("#answera").text("Chief Lou Trotter");
                $("#answerb").text("Christy Ferguson");
                $("#answerc").text("Principal George Chang");
                $("#answerd").text("None of the above");
            }
        }
        else if (question === 3) {
            if (dialogue === 1)
            {
                $("#FergusonRight1").show();
                $("#FergusonRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Christy Ferguson:</b> Hold it. I’m the trivia girl here. I’ll take this one.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> What? Uh, that’s okay. I got this. So, as I was saying, regarding Christy Ferguson . . .");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> I’m named after comedian TV hosts Chris Hardwick and Craig Ferguson.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Beauty:</b> Hey! I wanted to say that!");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> When our creator decided to have a villain who was a game show host, he wanted to stay away from the generic clean-cut nice guy “you can win a brand new car” type of host as he preferred ones who were actual comedians.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Beauty:</b> Are you even listening to me?");
            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> And while most comic hosts wear suits, he decided to give me casual wear with a leather jacket just to add some contrast between myself and how most game show hosts are seen.");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Beauty:</b> Excuse me? I’m supposed to present this here.");
            }
            else if (dialogue === 9)
            {
                $("#FergusonRight1").animate({right: '0px'}, function() {
                    $("#FergusonRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> She is quite knowledgeable on this subject, though. I say we let her have this one.");
            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Beauty:</b> Ugh. This is annoying, but she is good at this. . . . All right.");
            }
            else if (dialogue === 11)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
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
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("4.	In the quiz bowl, what was the last question that Tel-E missed?");
                $("#answera").text("What is the three-hundred-twenty-fifth digit of pi?");
                $("#answerb").text("What is the three-hundred-twenty-sixth digit of pi?");
                $("#answerc").text("What is the three-hundred-twenty-seventh digit of pi?");
                $("#answerd").text("What is the three-hundred-twenty-eighth digit of pi?");
            }
        }
        else if (question === 4) {
            if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> I’m assuming that was because that was the same question I asked her after Dinomight beat her silly.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Bendy:</b> Yeah. ‘Cause for Nator, the digits of pi is his version of “How many fingers am I holding up?”");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Beauty:</b> Right. And that has NOTHING to do with him trying to prove he’s smarter than everyone else.");
            }
            else if (dialogue === 4)
            {
                $("#BendyRight1").animate({right: '0px'}, function() {
                    $("#BendyRight1").hide();
                });
                $("#FergusonRight1").show();
                $("#FergusonRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Christy Ferguson:</b> So he’s copying my thing, huh? It’s a shame since I know more than him.");
            }
            else if (dialogue === 5)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> You’re not smarter than me.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> Oh no? Tell me. When is our creator’s birthday?");
            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Nator:</b> What? How should I know?");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> Wrong answer! It’s March 27th. In fact, the number 327 shows up in our stories quite often because of that date. But then you would have known that since that was the reason digit 327 of pi was asked.");
            }
            else if (dialogue === 9)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> It’s a good thing you didn’t use one of your question cards on him there.");
            }
            else if (dialogue === 10)
            {
                $("#FergusonRight1").animate({right: '0px'}, function() {
                    $("#FergusonRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> It sure would be an interesting question if our creator was born on March 14th.");
            }
            else if (dialogue === 11)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#FergusonLeft1").show();
                $("#FergusonLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Christy Ferguson:</b> At 3:09 pm.");
            }
            else if (dialogue === 12)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> And 26 seconds.");
            }
            else if (dialogue === 13)
            {
                $("#FergusonLeft1").animate({left: '0px'}, function() {
                    $("#FergusonLeft1").hide();
                });
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
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
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("5.	The Chief sent us a report on people who went missing. What was included in the report?");
                $("#answera").text("Several yearbooks containing photos of the missing people.");
                $("#answerb").text("Videos of several of the people being asked trivia questions by Christy Ferguson on the street");
                $("#answerc").text("Ransom videos with the people included");
                $("#answerd").text("Videos of several of the people on Christy Ferguson’s TV show");
            }
        }
        else if (question === 5) {
            if (dialogue === 1)
            {
                $("#FergusonRight1").show();
                $("#FergusonRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Christy Ferguson:</b> Plus it never hurts to expose stupidity. Well, I guess it hurts some people’s egos and reputations, but what do I care? I get free comedy out of it.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> You certainly seem awfully sadistic about making people feel stupid. Wouldn’t it be better to at least highlight the moments of people answering correctly?");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> Oh sure. And then maybe I’ll congratulate contestants with a friendly compliment and give points for wrong answers just to make everyone feel like a winner. What are you, a network executive?");
            }
            else if (dialogue === 4)
            {
                $("#FergusonRight1").animate({right: '0px'}, function() {
                    $("#FergusonRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> No offense, Tel-E, but I would not watch your show.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Tel-E:</b> Come now. Isn’t rewarding success better than laughing at failure?");
            }
            else if (dialogue === 6)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#FergusonRight1").show();
                $("#FergusonRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Christy Ferguson:</b> And THAT is why you’re the least funny member of your team. Fun fact: me asking people questions on the street is based on Jay Leno’s Jaywalking bit on the Tonight Show.");
            }
            else if (dialogue === 7)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> And your show Host Conquer is based on the Battle of the Jaywalk All-Stars segment.");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> Both of which require much failure in answering questions for the segments to live.");
            }
            else if (dialogue === 9)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> This planet can be so cruel sometimes. I know I may snicker at it, but you’ll never find me setting someone up to fail intentionally.");
            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> Nice girls finish last, whereas my ratings were fantastic.");
            }
            else if (dialogue === 11)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#FergusonRight1").animate({right: '0px'}, function() {
                    $("#FergusonRight1").hide();
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
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("6.	I showed the Brigade a hilarious video of the Chief on Host Conquer. What was the subject of his Supreme Court related question he got wrong?");
                $("#answera").text("Miranda Rights");
                $("#answerb").text("Search and Seizure");
                $("#answerc").text("Warrant for entering a home");
                $("#answerd").text("A Right to a Speedy Trial");
            }
        }
        else if (question === 6) {

            if (dialogue === 1)
            {
                $("#ChiefRight1").show();
                $("#ChiefRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Chief:</b> Are you kids talking about that TV appearance again? You’d better not be, or everyone will be doing mandatory exercise for a month.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> No, Chief. We’re just talking about how to kill Race without you knowing. Nothing that’ll upset you or anything.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Chief:</b> Do I look like a man you can make jokes with?");
            }
            else if (dialogue === 4)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#FergusonLeft1").show();
                $("#FergusonLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Christy Ferguson:</b> I don’t know. Can you show me that episode you were in again?");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Chief:</b> Ferguson! That’s enough mockery from you! I swear you will pay for that defamation of my intelligence you displayed.");
            }
            else if (dialogue === 6)
            {
                $("#FergusonLeft1").animate({left: '0px'}, function() {
                    $("#FergusonLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Chief, I don’t think anyone would say your intelligence was poorly represented in that video.");
            }
            else if (dialogue === 7)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Yeah, it seemed pretty accurate to me.");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Chief:</b> Shut up, you two! I’m trying to get an apology out of this poor excuse for a game show presenter.");
            }
            else if (dialogue === 9)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#FergusonLeft1").show();
                $("#FergusonLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Christy Ferguson:</b> Wow, Trotter. You arrested me and yet you’re madder at me for doing my job than I am at you for doing yours. Even I’ve moved on from that.");
            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Chief:</b> There’s no moving on! I should sue you for broadcasting that show with me in it and making me look like a fool.");
            }
            else if (dialogue === 11)
            {
                $("#FergusonLeft1").animate({left: '0px'}, function() {
                    $("#FergusonLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> A cop suing for accurate depiction of character? Yeah, that’s just what our legal system needs.");
            }
            else if (dialogue === 12)
            {
                $("#ChiefRight1").animate({right: '0px'}, function() {
                    $("#ChiefRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> All we need is for the Chief to get mad over coffee that’s too hot and Ferguson’s got all the material she’ll need.");
            }
            else if (dialogue === 13)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
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
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("7.	When Christy Ferguson was giving the Chief hints in the Host Conquer video I showed, her producer wasn’t happy. What did she then make fun of her producer for not knowing?");
                $("#answera").text("The capital of Illinois");
                $("#answerb").text("The name of a TV character from the 1960’s");
                $("#answerc").text("The population of California after the gold rush");
                $("#answerd").text("The Chief Justice of the Supreme Court in 1966");
            }
        }
        else if (question === 7)
        {
            if (dialogue === 1)
            {
                $("#AlRight1").show();
                $("#AlRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Al:</b> We kind of had limited time when we did Host Conquer, so I really needed her to get going.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#FergusonLeft1").show();
                $("#FergusonLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Christy Ferguson:</b> So I guess Earl Warren’s name means nothing to you then. See, that’s why I’m the host and you’re whatever you are.");
            }
            else if (dialogue === 3)
            {
                $("#AlRight1").animate({right: '0px'}, function() {
                    $("#AlRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Al seems like a good sidekick for someone who needs to keep track of time.");
            }
            else if (dialogue === 4)
            {
                $("#FergusonLeft1").animate({left: '0px'}, function() {
                    $("#FergusonLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> It never hurts to have someone along as a guide, I suppose.");
            }
            else if (dialogue === 5)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#FergusonRight1").show();
                $("#FergusonRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Christy Ferguson:</b> He doesn’t do a whole lot when I’m doing my hosting duties, but he’s good to keep around for preparation. Here’s a little side note: I mentioned I was named after Craig Ferguson. Well, me insulting Al was based on how Craig would insult his producer Michael on the Late Late Show whenever he would disapprove of Craig swearing too much or going over the time he was given.");
            }
            else if (dialogue === 6)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Going after the authority that you work with? I wish we could do that with the Chief.");
            }
            else if (dialogue === 7)
            {
                $("#FergusonRight1").animate({right: '0px'}, function() {
                    $("#FergusonRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> I don’t think he’d go along with that.");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Beauty:</b> Yeah, and I guess we’re not that funny either. It would kind of lose some of the sting.");
            }
            else if (dialogue === 9)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#FergusonRight1").show();
                $("#FergusonRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Christy Ferguson:</b> Well, for us, our creator is actually a big fan of Craig Ferguson and while watching him talk to his producer, he thought the idea of a comedian having someone act as a reluctant designated straight man would be fun for me to use.");
            }
            else if (dialogue === 10)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#AlLeft1").show();
                $("#AlLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Al:</b> The dialogue in this question is actually becoming a bit too dense. We should probably wrap it up now.");
            }
            else if (dialogue === 11)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> Oh, what? You don’t like hearing women talk? You are such a sexist. And I suppose you already knew this trivia yourself? Why don’t we just let you present all this information on your own? I’m sure everyone would love to see that. Or better yet, instead of just telling me to shut up, why not just tell everyone to keep hitting the next button over and over until they get to the next question if you’re already gonna be so passive aggressive about all this.");
            }
            else if (dialogue === 12)
            {
                $("#AlLeft1").animate({left: '0px'}, function() {
                    $("#AlLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Wow. It’s like watching a live TV show right in front of me.");
            }
            else if (dialogue === 13)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#FergusonRight1").animate({right: '0px'}, function() {
                    $("#FergusonRight1").hide();
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
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("8.	When Christy Ferguson revealed herself to have superpowers, which of the following was not one of her Charevo Elements?");
                $("#answera").text("Presentation");
                $("#answerb").text("Comedy");
                $("#answerc").text("Knowledge");
                $("#answerd").text("Competition");
            }
        }

        else if (question === 8)
        {
            if (dialogue === 1)
            {
                $("#FergusonRight1").show();
                $("#FergusonRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Christy Ferguson:</b> Of course. Like the network executives whom I used to work for, my own Charevo Gene doesn’t think I’m funny.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> I guess this means you’re gonna have to kidnap your own gene, huh?");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> Yeah yeah. You read the story. Good for you. How did I not get the Comedy Element? I earned that thing.");
            }
            else if (dialogue === 4)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> Well, the Charevo Gene only has three elements, so maybe it just means you’re more of a smart and charismatic game show host and there was no room for the comedy part of you. Presentation does also have a piece of comedy in it.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> So that’s my consolation prize then? Fine. I guess it’ll do.");
            }
            else if (dialogue === 6)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Hey, I’m stuck with the element of Femininity. At least you didn’t have something labeling you as a female comedian.");
            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> I think not having the Comedy Element is the female comedian label. That’s right. I know what people think. ");
            }
            else if (dialogue === 8)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#FergusonRight1").animate({right: '0px'}, function() {
                    $("#FergusonRight1").hide();
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
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("9.	Christy Ferguson offered to help Tel-E by giving her new abilities if she answered her questions correctly. What did she offer if she got the first question right?");
                $("#answera").text("Teleportation of herself and others");
                $("#answerb").text("Improved energy projection");
                $("#answerc").text("Super Speed");
                $("#answerd").text("Invincibility");
            }
        }
        else if (question === 9)
        {
            if (dialogue === 1)
            {
                $("#RaceRight1").show();
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Race:</b> And that’s how she was able to escape and kidnap my dad. Uh, not that I’m blaming her for that.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> And yet you decided to bring it up?");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Race:</b> What? I’m just saying the teleportation power was how Ferguson took my dad. It applies to the question.");
            }
            else if (dialogue === 4)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> It doesn’t seem like the question was the cause of this.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Race:</b> Oh . . . uh . . . sorry. I know you didn’t know about her powers. I’m past this now.");
            }
            else if (dialogue === 6)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> Someone’s getting a little too defensive for stating his facts.");
            }
            else if (dialogue === 7)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Arrest Race at once!");
            }
            else if (dialogue === 8)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Race:</b> Okay, I’m sorry! I didn’t mean to seem like I was angry.");
            }
            else if (dialogue === 9)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> Teehee. Relax, Race. We’re just teasing.");
            }
            else if (dialogue === 10)
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
                question = 10;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("10. During our fight with Christy Ferguson in the police station, what was the resulting consequence when Tel-E couldn’t answer her last question?");
                $("#answera").text("Her legs were tied together");
                $("#answerb").text("A blast of lightning hit her");
                $("#answerc").text("She was levitated to the wall");
                $("#answerd").text("She was teleported away");
            }
        }
        else if (question === 10)
        {
            if (dialogue === 1)
            {
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Too bad she didn’t use it on Bendy. He could withstand that attack and give Ferguson the satisfaction of saying he’s wrong.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> Yep. That’s my job: Taking hits and satisfying the ladies.");
            }
            else if (dialogue === 3)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#FergusonLeft1").show();
                $("#FergusonLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Christy Ferguson:</b> Do you really think I’d be dumb enough to use an electric attack on rubber? That’d be like asking Beauty a question on comic books or asking Nator a question on computer science or asking Race a question on how to fail in life. It’s a terrible strategy.");
            }
            else if (dialogue === 4)
            {
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                });
                $("#RaceRight1").show();
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Race:</b> Yeah? Well, it wouldn’t be a perfect strategy on Tel-E since you forgot to provide some defense against lightning in case she got the question right.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> Believe me, her lack of mind reading in battle was all the defense I needed.");
            }
            else if (dialogue === 6)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> You didn’t know she wouldn’t do it.");
            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> I know everything. Believe me; I knew she wouldn’t do it. I mean, if she passed on cheating for teleportation, the ability that makes walking obsolete, I think we can skip the test and put her on the honor roll.");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Beauty:</b> She did it at the end to save us, though. Did you know that was coming?");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> Eh, I know for next time.");
            }
            else if (dialogue === 10)
            {
                $("#FergusonLeft1").animate({left: '0px'}, function() {
                    $("#FergusonLeft1").hide();
                });
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
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
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("11. When we tried different things to get Tel-E to use her telepathy to gain an advantage over others, what did Nator try to do?");
                $("#answera").text("Play Tel-E in a Chess game");
                $("#answerb").text("Offer Tel-E to keep whatever she blindly identifies");
                $("#answerc").text("Play Tel-E in a game of Poker");
                $("#answerd").text("Give Tel-E electric shocks if she couldn’t identify a card");
            }
        }
        else if (question === 11)
        {
            if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> You call it cruel. I call it getting the job done.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Get what done? Your electrotherapy didn’t even work.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Nator:</b> Oh yeah? Well, I believe my idea was the last one we tried. And after that, Tel-E finally used her telepathy in battle.");
            }
            else if (dialogue === 4)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> I think there was some other stuff that happened in between.");
            }
            else if (dialogue === 5)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Nator’s pretty much like an actor who watches a movie he’s in and leaves whenever he’s not on screen.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Beauty:</b> In other words, my parents during one of my school plays.");
            }
            else if (dialogue === 7)
            {
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> Well, he was kind of right in that somebody needed to get hurt for me to use my telepathy. Let’s see how long it takes him to jump for credit on that one.");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Beauty:</b> Well, fun fact: The idea of guessing a card using mind reading to avoid electric shocks is based on a scene in Ghostbusters.");
            }
            else if (dialogue === 9)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Oh great. So now Nator’s probably gonna use this as evidence for some claim that he’s as likeable as Bill Murray.");
            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Beauty:</b> That claim will be quickly debunked. I can assure you.");
            }
            else if (dialogue === 11)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
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
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("12. What reason did Tel-E give for not using her telepathy to harm others");
                $("#answera").text("She was taught not to abuse her powers");
                $("#answerb").text("She wants to honor the women of her home planet");
                $("#answerc").text("She believes it is dishonorable");
                $("#answerd").text("All of the above");
            }
        }
        else if (question === 12)
        {
            if (dialogue === 1)
            {
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> On my home planet of Knowlgia, we use our powers to help us in our daily lives, but never to use against others. I know superheroes are very much admired on Earth for their abilities and what they do, but we Knowlgians are peaceful and respect everyone by limiting our powers.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> I’m guessing they don’t have villains on your planet?");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Tel-E:</b> Not so much. No.");
            }
            else if (dialogue === 4)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> So you wouldn’t use telepathy to get ahead of someone at all?");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Tel-E:</b> Not unless there were others I would be helping in the process.");
            }
            else if (dialogue === 6)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> This is like some ethics test for you every day, huh.");
            }
            else if (dialogue === 7)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> Okay. So would you use telepathy to catch a criminal to get the reward money, even if you weren’t really going to hurt the guy?");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Tel-E:</b> Not if I was gaining something from it.");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Bendy:</b> Okay. What if that reward money was being donated to some research company that would help them cure some disease and save hundreds of lives?");
            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Tel-E:</b> To help others and not myself, that I would do.");
            }
            else if (dialogue === 11)
            {
                $("#dialogue").html("<b>Bendy:</b> Interesting. Now, what if the money would still be donated, but instead of capturing the guy, you have to kill him? Would you do it?");
            }
            else if (dialogue === 12)
            {
                $("#dialogue").html("<b>Tel-E:</b> What? Of course not! I mean, sure, I’d want to save those lives, but . . . well . . . I wouldn’t kill anyone, but is there some other way to help those people?");
            }
            else if (dialogue === 13)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> See? Ethics is hard.");
            }
            else if (dialogue === 14)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
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
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("13. What was the name of the game show host who replaced Christy Ferguson?");
                $("#answera").text("Alex Barker");
                $("#answerb").text("Walter Williams");
                $("#answerc").text("Joan Oliver");
                $("#answerd").text("Craig Wick");
            }
        }
        else if (question === 13)
        {
            if (dialogue === 1)
            {
                $("#FergusonRight1").show();
                $("#FergusonRight1").animate({right: '22%'});
                $("#dialogue").html("Christy Ferugson: Calling that guy a game show host is like calling Tel-E a fighter. There are way better ones than him.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> I’d argue with you, but I do like to be more peaceful in general. I often feel guilty just hating someone.");
            }
            else if (dialogue === 3)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> I take it you still have a grudge against the new guy?");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> Barker’s not a host. He’s a broadcaster. Just because he can present the news, it doesn’t mean he can be entertaining.");
            }
            else if (dialogue === 5)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> The game itself is still entertaining enough.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> Sure. If you can call his lack of personality presenting the questions exciting.");
            }
            else if (dialogue === 7)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> As Barker is a game show host, it’s worth noting that he’s named after long-time hosts Alex Trebek and Bob Barker.");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> And those two suits represent the generic type of game show host Barker’s supposed to be. That’s why our creator decided to deviate from the traditional host and made me a comedian.");
            }
            else if (dialogue === 9)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> And I’m guessing he then decided to deviate from a comedian by making you a woman. BURN!");
            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Christy Ferguson:</b> Oh yeah. And I assume he decided to deviate from the smart and heroic superhero by coming up with you.");
            }
            else if (dialogue === 11)
            {
                $("#dialogue").html("<b>Bendy:</b> . . . Touche.");
            }
             else if (dialogue === 12)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Nicely done, Christy.");
            }
            else if (dialogue === 13)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#FergusonRight1").animate({right: '0px'}, function() {
                    $("#FergusonRight1").hide();
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
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("14. During our final encounter with Christy Ferguson, what comedian did she reference when she asked Nator a question?");
                $("#answera").text("Jerry Lewis");
                $("#answerb").text("Bob Hope");
                $("#answerc").text("Lou Costello");
                $("#answerd").text("Shemp Howard");
            }
        }
        else if (question === 14)
        {
            if (dialogue === 1)
            {
                $("#BendyRight1").show();
                $("#BendyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Bendy:</b> Nator got a math question wrong? Someone take note. The apocalypse is nigh!");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> Shut up. It wasn’t a real math problem.");
            }
            else if (dialogue === 3)
            {
                $("#BendyRight1").animate({right: '0px'}, function() {
                    $("#BendyRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> You had a problem doing the math. That’s a pretty good math problem.");
            }
            else if (dialogue === 4)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> You have to admit that was the right question to both stump and humiliate Nator. Beating him at his own game goes a long way.");
            }
            else if (dialogue === 5)
            {
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> But it was a trick question! You can’t hold that against me!");
            }
            else if (dialogue === 6)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Oh please. That’s like saying you deserve credit for missing a test question just because you didn’t read the directions.");
            }
            else if (dialogue === 7)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> I think for a multiple choice question where you have to choose the one that’s not true, Nator would be the first to complain if the word “not” wasn’t in bold and caps.");
            }
            else if (dialogue === 8)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> Say what you want. I looked at the video of that Abbott and Costello thing, and the math in that is entirely inconsistent.");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Beauty:</b> Well done, Nator. Point out mistakes in a comedy bit in your effort to discredit it. I’m sure everyone cares what you think on the subject.");
            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Nator:</b> As they should.");
            }
            else if (dialogue === 11)
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
                question = 15;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("15. In considering whether to use her telepathy to fight, which of Tel-E’s Charevo Fairies told her “When going against beliefs, one's mind can endure guilt. When rejecting a crucial opportunity, one's mind can suffer from regret”?");
                $("#answera").text("The Optimism Fairy");
                $("#answerb").text("The Knowledge Fairy");
                $("#answerc").text("The Thought Fairy");
                $("#answerd").text("The Intelligence Fairy");
            }
        }
        else if (question === 15)
        {
            if (dialogue === 1)
            {
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> It sure was some helpful guidance. I knew I didn’t want to abuse my powers, but losing my friends would far outweigh the guilt.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> It’s kind of a weird thing to say. Do this one thing, you’re wrong. Do the opposite, you’re still wrong? What kind of help is that supposed to be?");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Tel-E:</b> It’s open to interpretation, but when combined with the guidance of the other Charevo Fairies, the message is clear.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Pyra:</b> I know. But it could’ve said the second one was the important one.");
            }
            else if (dialogue === 5)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> I don’t think our Charevo Fairies are meant to force everything at us.");
            }
            else if (dialogue === 6)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> Unless you’re evil. ");
            }
            else if (dialogue === 7)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
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
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("16. What question did Tel-E use her telepathy to answer to defeat Christy Ferguson?");
                $("#answera").text("What did Ferguson have for breakfast?");
                $("#answerb").text("When is Ferguson’s birthday?");
                $("#answerc").text("What is Ferguson’s sister’s name?");
                $("#answerd").text("What number was Ferguson thinking of?");
            }
        }
        else if (question === 16)
        {
            if (dialogue === 1)
            {
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> I must admit it was clever of Ferguson to choose a large number with a decimal as if I had to remember eight-billion had 10 digits in it.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> Hey, it can be hard without the commas.");
            }
            else if (dialogue === 3)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> Still, it seemed like a pointless move after seeing that Ferguson’s mind was read for those other questions. Why didn’t she just continue to use her acquired powers to fight instead of asking a question and lose right away?");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Tel-E:</b> Who am I, Ferguson’s tactician?");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Nator:</b> Well, you’re reading minds more. You should know. I mean, really, she had a bunch of new abilities. She could’ve easily beaten you if she tried that.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Tel-E:</b> Well, I’m sorry she didn’t destroy me then.");
            }
            else if (dialogue === 7)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#FergusonRight1").show();
                $("#FergusonRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Christy Ferguson:</b> Thanks for the tip, though. I’ll be sure to try that next time.");
            }
            else if (dialogue === 8)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Well, if Nator’s not too busy telling villains how to beat us, fun fact here: the number Ferguson was thinking of was eighty-three-billion-four-point-seven. This is a reference to the video game Ratchet and Clank: A Crack in Time where this is Clank’s favorite number.");
            }
            else if (dialogue === 9)
            {
                $("#FergusonRight1").animate({right: '0px'}, function() {
                    $("#FergusonRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> So if it wasn’t some random number for Ferguson, it was for someone else.");
            }
            else if (dialogue === 10)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '35%'});
                    $("#nextlevel1a").attr("style", "opacity: .6");
                    nextline = 1;
                    question = 17;
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
        else if (question === 17)
        {
            if (dialogue === 1)
            {
                $("#score").show();
                $("#score").text("Your score: " + correct + "/16");
                if (correct === 16)
                    $("#dialogue").html("<b>Beauty:</b> All right! Perfect score! 16 out of 16! Well done.");
                else if (correct > 10)
                    $("#dialogue").html("<b>Beauty:</b> Hey, you got a " + correct + " out of 16. Nicely done.");
                else if (correct > 5)
                    $("#dialogue").html("<b>Beauty:</b> Looks like you got a score of " + correct + " out of 16. Not bad.");
                else if (correct > 1)
                    $("#dialogue").html("<b>Beauty:</b> Whoa. You only got " + correct + " out of 16 questions right. Good try. Maybe you'll do better next time.");
                else
                    $("#dialogue").html("<b>Beauty:</b> Aw, what? You didn't get a single question right. Did you even read this story? I know Tel-E doesn't like to cheat in games, but you are allowed to read Knowledge is Power ahead of time.");
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

                $("#dialogue").html("<b>Beauty:</b> Correct. The bulky and super strong brute, Dinomight, was our opponent. Fun fact: A number of characters, including the Neo Brigade, were inspired by characters from Teen Titans. Dinomight was based on a character named Mammoth. And since a mammoth has characteristics of an elephant from an era close to when the dinosaurs were around, Dinomight’s name was originally “Dinophant.”");
                //$("#prevlevel1a").attr("style", "opacity: .6");
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
                $("#dialogue").html("<b>Beauty:</b> That’s right. Before we could apprehend Dinomight, some dark figure appeared and helped him. Now, I know what you’re thinking. Deus ex machina or foreshadowing?");
                //$("#prevlevel1a").attr("style", "opacity: .6");
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
        else if (question === 3)
        {
            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Correct. The quiz bowl’s host was the woman who turned out to be the villain Christy Ferguson. Fun fact . . .");
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
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {

                $("#dialogue").html("<b>Beauty:</b> Good job! It was in fact the three-hundred-twenty-seventh digit of pi that Tel-E was asked.");
                //$("#prevlevel1a").attr("style", "opacity: .6");
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
        else if (question === 5)
        {
            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Yes! Those videos were of the people who went missing. And Ferguson was asking them all questions for her own personal gain with her powers.");
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

                $("#dialogue").html("<b>Beauty:</b> That’s right. The Chief was asked about the Miranda v. Arizona case. Now, I know that might not be the easiest question to get. But for the Chief to miss it while both being a cop and being given hints, you have to admit, it’s fun to watch.");
                //$("#prevlevel1a").attr("style", "opacity: .6");
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
        else if (question === 7)
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
                $("#dialogue").html("<b>Beauty:</b> Correct. Ferguson’s producer, Al, didn’t know the Chief Justice of 1966, which Ferguson questioned when he interrupted her to get her to stop giving hints.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();

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
                $("#dialogue").html("<b>Beauty:</b> That’s right. Ferguson’s Charevo Elements are Presentation, Knowledge, and Competition, but not Comedy.");
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
        else if (question === 9)
        {
            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").html("<b>Beauty:</b> Correct. Ferguson offered Tel-E the power of teleportation first, which she gained herself when Tel-E answered incorrectly.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
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
        else if (question === 10)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> That’s right. Ferguson used lightning to attack Tel-E before she got away.");
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
        else if (question === 11)
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

                $("#dialogue").html("<b>Beauty:</b> Correct. All those choices were ideas members of the Brigade tried, but Nator chose to be a bit crueler by using electric shocks.");
                //  $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
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
                $("#dialogue").html("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "d")
            {

                $("#dialogue").html("<b>Beauty:</b> That’s right. Of all of us, Tel-E is the least willing to use her powers for violence. And that includes using it unfairly for her benefit.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();

            }
        }
        else if (question === 13)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                
                $("#dialogue").html("<b>Beauty:</b> Correct. Alex Barker, the Minor City news reporter, was the new host of Host Conquer after Christy Ferguson got fired.");
                // $("#prevlevel1a").attr("style", "opacity: .6");
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
                $("#dialogue").html("<b>Beauty:</b> Very good. Ferguson’s question was a reference to Abbott and Costello’s 13 x 7 = 28 bit.");
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
                $("#dialogue").html("<b>Beauty:</b> Right. That piece of advice came from her Thought Fairy.");
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
                
                $("#dialogue").html("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Correct. The ultimate test of whether your mind is being read: The number you’re thinking of!");
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
