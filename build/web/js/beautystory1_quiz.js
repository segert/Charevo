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
    $("#BeautyLeft1").show();
    $("#dialogue").text("Beauty: Hi");
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
                $("#dialogue").text("Beauty: Hi");
            }
            else if (dialogue === 2)
                $("#dialogue").text("Beauty: Well, if you're ready to go. Just hit next, and we\n\
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
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("1.	I just joined the Neo Brigade. What city is the team native to?");
                $("#answera").text("Minor City");
                $("#answerb").text("Grin City");
                $("#answerc").text("Gloom City");
                $("#answerd").text("Extreme City");
            }
        }
        else if (question === 1) {

            if (dialogue === 1)
            {
                $("#dialogue").text("Beauty: Fun fact: Our creator originally chose the name because its heroes were all kids. Of course, that will be a little redundant in the future.");
                //$("prevlevel1a").attr("style", "opacity: .6");
                $("nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '20%'});
                $("#dialogue").text("Nator: Hang on. Are we even supposed to talk about that?");
                //$("#prevlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").text("Beauty: We’re in a non-canon quiz game. We can say whatever we want in these.");
            }
            else if (dialogue === 4)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({right: '22%'});
                $("#dialogue").text("Bendy: Cool! No narrative or stage direction getting in my way now!");
            }
            else if (dialogue === 5)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").text("Race: And no fighting either. That’s a nice break.");
            }
            else if (dialogue === 6)
            {
                $("#BendyRight1").animate({right: '0px'}, function() {
                    $("#BendyRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").text("Tel-E: Right. Back to the question then. It’s worth noting that those other choices are real cities in our world. Minor City was also named from its first AND incumbent mayor appearing like a child. We’ll see him later on.");
            }
            else if (dialogue === 7)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").text("Pyra: Uh huh. I’m guessing we’re also Minor City because every other town has something interesting in it, and all we get is our kid mayor. Yeah, that’ll bring us some readers, all right.");
            }
            else if (dialogue === 8)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#RaceRight1").show();
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").text("Race: Hey, it’s not a competition, you guys.");
            }
            else if (dialogue === 9)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").text("Bendy: Still, that sports town does look fun.");
                //$("#nextlevel1a").attr("style", "opacity: .6");
            }
            else if (dialogue === 10)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 2;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("2.	Before I joined the Neo Brigade, I saw Race fighting someone. What was his name?");
                $("#answera").text("Cyhack");
                $("#answerb").text("Fourize");
                $("#answerc").text("Ninja");
                $("#answerd").text("Tammy Time");
            }
        }
        else if (question === 2) {

            if (dialogue === 1)
            {
                $("#FourizeRight1").show();
                $("#FourizeRight1").animate({right: '22%'});
                $("#dialogue").text("Fourize: And I also have the honor of winning the first battle seen in these stories.");
                //$("#prevlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").text("Race: You didn’t win. You just got away when the street froze. And why would you win anyway? Isn’t one of your Charevo Elements Inferiority?");
            }
            else if (dialogue === 3)
            {

                $("#dialogue").text("Fourize: Says the kid whose powers are the opposite of how he used to run? Besides, what does that say about you if you couldn’t stop a guy who’s all about inferiority?");
            }
            else if (dialogue === 4)
            {

                $("#dialogue").text("Race: Oh, I knew that was coming.");
            }
            else if (dialogue === 5)
            {

                $("#dialogue").text("Fourize: Seeing you with useful powers, that was a good feeling seeing you slip up and get nothing with them. It’s too bad we have friction. Otherwise, you’d be useless.");
            }
            else if (dialogue === 6)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").text("Beauty: Yeah, I’m sure the world would be perfect then. By the way, Fourize, what’s with the spelling of your name?");
            }
            else if (dialogue === 7)
            {

                $("#dialogue").text("Fourize: Ending it with “ize” makes it sound like a verb and hence much more menacing. Like, “You’ve been Fourized!”");
            }
            else if (dialogue === 8)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").text("Race: Giving an ineffective product a cool name doesn’t make it any better. Though as far as names being verbs go, it does sound cooler than mine.");
            }
            else if (dialogue === 9)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#FourizeRight1").animate({right: '0px'}, function() {
                    $("#FourizeRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                //  $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 3;
                dialogue = 0;
                //$("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("3.	The city was frozen in ice due to one villain and his henchmen. What was the name of this villain and group?");
                $("#answera").text("Cold Miner and the Ice Pack");
                $("#answerb").text("Cold Miner and the Chill-dren");
                $("#answerc").text("Cali-burr and the Ice Pack");
                $("#answerd").text("Cali-burr and the Chill-dren");
            }
        }
        else if (question === 3) {

            if (dialogue === 1)
            {
                $("#ColdMinerRight1").show();
                $("#ColdMinerRight1").animate({right: '22%'});
                $("#dialogue").text("Cold Miner: Don’t forget I’m immune to heat, which I’m sure Race forgot to tell you about.");
                // $("#prevlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").text("Race: Hey, the heat resilience wasn’t what kept me slow the whole time. I had a lot on my mind in that fight.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").text("Cold Miner: Sure. Things like “Oh, I am such a failure,” and “Why is Cold Miner so good at humiliating me in front of my friends?”");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").text("Race: No way.");
            }
            else if (dialogue === 5)
            {
                $("#ColdMinerRight1").animate({right: '0px'}, function() {
                    $("#ColdMinerRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").text("Tel-E: Though that wasn’t too far off.");
            }
            else if (dialogue === 6)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").text("Beauty: Fun fact: The first five stories were actually written after a few others. In addition, Cold Miner was originally conceived as a name our creator used in a later story that was meant to allude to a time an ice villain froze Bendy.");
            }
            else if (dialogue === 7)
            {
                $("#dialogue").text("Beauty: When it came time to introduce some new villains, our creator decided to flesh out Cold Miner into an actual character. And thus, Race’s torment expanded.");
            }
            else if (dialogue === 8)
            {

                $("#dialogue").text("Race: It had to be me, huh. Hey, why the name “Chill-dren” for his henchmen? That sounds so non-threatening to me.");
            }
            else if (dialogue === 9)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#ColdMinerRight1").show();
                $("#ColdMinerRight1").animate({right: '22%'});
                $("#dialogue").text("Cold Miner: And yet they threaten you so easily. Actually, they were originally going to be called the Ice Pack, but our creator discovered that some ice villains from DC comics already had that as their team name, so he settled on Chill-dren.");
            }
            else if (dialogue === 10)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").text("Beauty: Now I guess when people imagine your henchmen, they might think of building snowmen or making snow angels.");
            }
            else if (dialogue === 11)
            {
                $("#dialogue").text("Cold Miner: Quiet, you!");
            }
            else if (dialogue === 12)
            {
                $("#ColdMinerRight1").animate({right: '0px'}, function() {
                    $("#ColdMinerRight1").hide();
                });
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 4;
                dialogue = 0;
                //$("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("4.	For this question, I’ll accept the closest answer. About how long after meeting the Neo Brigade did Race recruit me to the team?");
                $("#answera").text("1 minute");
                $("#answerb").text("2 days");
                $("#answerc").text("5 days");
                $("#answerd").text("One week");
            }
        }
        else if (question === 4) {

            if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").text("Nator: The hiring process for a lot of office jobs takes nearly a month. How does becoming a protector of the city take such short time?");
                // $("#prevlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").text("Tel-E: Race’s HR must be as fast as him, I suppose.");
            }
            else if (dialogue === 3)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({right: '22%'});
                $("#dialogue").text("Bendy: Gee, Race, are you gonna propose to a girl you like as soon as you meet her too?");
            }
            else if (dialogue === 4)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").text("Race: I did NOT do that! I mean . . . I WON’T do that.");
            }
            else if (dialogue === 5)
            {
                $("#BendyRight1").animate({right: '0px'}, function() {
                    $("#BendyRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").text("Pyra: Sure. And yet committing to someone you’ll be living with as part of the Neo Brigade is COMPLETELY okay on the fly.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").text("Race: I was desperate! You saw my powers out there. I needed some extra force on our side.");
            }
            else if (dialogue === 7)
            {
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").text("Beauty: I guess this means I should be sending Cold Miner a gift basket for what he did, huh?");
            }
            else if (dialogue === 8)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").text("Tel-E: I won’t lie. It was pretty impulsive. But at least it worked out for us.");
            }
            else if (dialogue === 9)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").text("Nator: True. But there’s a difference between “It worked out” and “It WILL work out.”");
            }
            else if (dialogue === 10)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").text("Pyra: Even more is “It DIDN’T work out.” We’re lucky Beauty didn’t get us killed out there.");
            }
            else if (dialogue === 11)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({right: '22%'});
                $("#dialogue").text("Bendy: I know. “Okay, powerful girl, you’re in.” One hour later. “What? Your weakness is ice? Wow, did I screw up.”");
            }
            else if (dialogue === 12)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").text("Race: IT WORKED OUT! Can we let this go?");
            }
            else if (dialogue === 13)
            {
                $("#BendyRight1").animate({right: '0px'}, function() {
                    $("#BendyRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").text("Beauty: Yeah. It’s not like my weakness is ice. Although, my hair powers don’t work when I’m drenched in water.");
            }
            else if (dialogue === 14)
            {

                $("#dialogue").text("Race: You’re not helping.");
            }
            else if (dialogue === 15)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 5;
                dialogue = 0;
                //$("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("5.	What was the first thing the Chief did when I met him for the first time?");
                $("#answera").text("Give out paperwork");
                $("#answerb").text("Provide Intel on a crime");
                $("#answerc").text("Take roll call");
                $("#answerd").text("Arrest a team member");
            }
        }
        else if (question === 5) {

            if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").text("Nator: And that’s even if we’re just out doing innocent activity like going out for lunch or studying at the library.");
                // $("#prevlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").text("Pyra: And if we’re not there, it’s a violation. What is the point of roll call anyway? We’re not in some prison.");
            }
            else if (dialogue === 3)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#ChiefRight1").show();
                $("#ChiefRight1").animate({right: '22%'});
                $("#dialogue").text("Chief: Roll call is standard regulation. You question regulation, you question the law. And only criminals question the law!");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").text("Pyra: I don’t think criminals question the law. They just ignore it.");
            }
            else if (dialogue === 5)
            {
                $("#ChiefRight1").animate({right: '0px'}, function() {
                    $("#ChiefRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").text("Beauty: Anyway, fun fact: When the Chief took roll call, he chose to call our names as he read them rather than just see who was there as if he didn’t know his own team. This is loosely based on a scene from an episode of McHale’s Navy where Binghamton took a roll call.");
            }
            else if (dialogue === 6)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").text("Tel-E: And I believe the Chief was inspired by that character, yes?");
            }
            else if (dialogue === 7)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#ChiefRight1").show();
                $("#ChiefRight1").animate({right: '22%'});
                $("#dialogue").text("Chief: What? I’m no imitation! I’m my own person! Who are you citing with these accusations? Who? Who? Who?");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").text("Tel-E: Our creator, I believe. In fact, he was originally going to make you a gruff and grizzled police chief but felt a boss for the Neo Brigade who acted like a blowhard like Binghamton would be much more interesting.");
            }
            else if (dialogue === 9)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").text("Beauty: Come on, Chief. Accept it. You came from that character. You even got the same whiney and nasal voice.");
            }
            else if (dialogue === 10)
            {
                $("#dialogue").text("Chief: I should arrest every one of you right now for this outrage of trivia.");
            }
            else if (dialogue === 11)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").text("Pyra: Yeah, I’m sure your reputation was “perfect” up until this leaked.");
            }
            else if (dialogue === 12)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#ChiefRight1").animate({right: '0px'}, function() {
                    $("#ChiefRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 6;
                dialogue = 0;
                //$("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("6.	When we were contacted by a member of Cold Miner’s gang, what was the name our informant gave us?");
                $("#answera").text("Don Crimel");
                $("#answerb").text("Dan Crimel");
                $("#answerc").text("Don Primel");
                $("#answerd").text("Dan Primel");
            }
        }
        else if (question === 6) {

            if (dialogue === 1)
            {
                $("#RaceRight1").show();
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").text("Race: I guess it would make sense for the name to have “crime” right in the name.");
                //$("#prevlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#ColdMinerLeft1").show();
                $("#ColdMinerLeft1").animate({left: '22%'});
                $("#dialogue").text("Cold Miner: Hmph. Obviously, you didn’t read into the name too well. Don Crimel is an anagram for Cold Miner.");
            }
            else if (dialogue === 3)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").text("Tel-E: Truth be told, I actually did notice that.");
            }
            else if (dialogue === 4)
            {
                $("#ColdMinerLeft1").animate({left: '0px'}, function() {
                    $("#ColdMinerLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").text("Beauty: And you didn’t mention it to us, because . . .");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").text("Tel-E: What? I just thought it looked interesting. How was I supposed to know it meant he was the actual person?");
            }
            else if (dialogue === 6)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#ColdMinerLeft1").show();
                $("#ColdMinerLeft1").animate({left: '22%'});
                $("#dialogue").text("Cold Miner: Keeping the name in there was really just to make you look all the more pathetic for not realizing it was me.");
            }
            else if (dialogue === 7)
            {
                $("#ColdMinerLeft1").animate({left: '0px'}, function() {
                    $("#ColdMinerLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").text("Nator: Wait a minute. Tel-E, how did you know it was an anagram? You didn’t even see it spelled out.");
            }
            else if (dialogue === 8)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").text("Beauty: I guess she asked for the definition and country of origin and went from there.");
            }
            else if (dialogue === 9)
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
                question = 7;
                dialogue = 0;
                //$("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("7.	Where is Cold Miner’s hideout located?");
                $("#answera").text("The Minor City Park");
                $("#answerb").text("The Minor City Subway");
                $("#answerc").text("The Minor City Gym");
                $("#answerd").text("Minor City Penitentiary");
            }
        }
        else if (question === 7)
        {
            if (dialogue === 1)
            {
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").text("Pyra: Gee, Beauty, could you have made this any easier? Of course the guy who worked in a coal mine would be underground. You might as well have had the team HQ as an answer.");
                //$("#prevlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").text("Beauty: What? We’ve got a good mix of difficulty in this quiz. Now, I’ll tell you what would be cool is if Cold Miner’s lair was in a big blimp or something. Now, THAT would be a hard question for anyone not paying attention.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").text("Pyra: I don’t think he’d choose a blimp even if he was trying to mislead someone.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").text("Beauty: You’re right. If he used his pickaxe, the whole thing would get frozen and plummet to the ground. Unless the blimp could be flown and controlled remotely. How cool would that be?");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").text("Pyra: Yeah, sure. Give him some ideas. I’m sure we passed a suggestion box in his hideout.");
            }
            else if (dialogue === 6)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 8;
                dialogue = 0;
                //$("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("8.	How does Don Crimel communicate with us?");
                $("#answera").text("A magic gem");
                $("#answerb").text("Telepathic communication");
                $("#answerc").text("A team communicator");
                $("#answerd").text("A police radio");
            }
        }

        else if (question === 8)
        {
            if (dialogue === 1)
            {
                $("#RaceRight1").show();
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").text("Race: I still can’t believe you lost that thing, Bendy. You know the Chief makes us pay for those.");
                //$("#prevlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").text("Bendy: I’ll pay you back. I promise . . . later.");
            }
            else if (dialogue === 3)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").text("Pyra: Why do we even have those things? We can communicate through our Charevo Genes.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").text("Race: My dad wants to be able to contact us, so we need the communicators to include him.");
            }
            else if (dialogue === 5)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").text("Beauty: That sounds like the Chief. Always one to fit in with the cool kids.");
            }
            else if (dialogue === 6)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").text("Tel-E: Right. That, and Nator is still skeptical of the Charevo Gene’s features despite the evidence.");
            }
            else if (dialogue === 7)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").text("Nator: I’m still just not convinced it’s real. There is very little scientific reasoning for how it works.");
            }
            else if (dialogue === 8)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").text("Pyra: You use your will to open a communication channel through your gene, think of three Charevo Elements to add the person with that trinity, keep adding who you want to talk to, talk to them, then close it. There. Done.");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").text("Nator: That still sounds a little far-fetched.");
            }
            else if (dialogue === 10)
            {
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").text("Beauty: Someone write down the instructions and put it in a manual with a famous scientist’s name. I’m sure that’ll convince him.");

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
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 9;
                dialogue = 0;
                //$("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("9.	What did Cold Miner use to capture the Neo Brigade?");
                $("#answera").text("A fake computer");
                $("#answerb").text("A fake office");
                $("#answerc").text("A fake elevator");
                $("#answerd").text("A fake door");
            }
        }
        else if (question === 9)
        {
            if (dialogue === 1)
            {
                $("#ColdMinerRight1").show();
                $("#ColdMinerRight1").animate({right: '22%'});
                $("#dialogue").text("Cold Miner: That’s right. Whenever five people stand on that floor panel, the overhead tube closes on them. That’s why I made sure my Chill-dren were never in groups of five or more.");
                // $("#prevlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").text("Beauty: I’m assuming you thought five would pass by the trap and just step on it?");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").text("Cold Miner: They’re not the brightest henchmen to light the way in a mine.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").text("Beauty: Well, you set it to five people for your trap. I guess you weren’t expecting me to be there.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").text("Cold Miner: I knew Race would cut corners when he saw the city frozen. I just didn’t think he’d be hiring ringers so soon.");
            }
            else if (dialogue === 6)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").text("Race: Hey! I don’t need ringers to fight for me. I, uh, just need support from them. Totally different.");
            }
            else if (dialogue === 7)
            {
                $("#ColdMinerRight1").animate({right: '0px'}, function() {
                    $("#ColdMinerRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").text("Beauty: Anyway, fun fact: The idea of a number of people standing on an elevator and revealing a big surprise was based on the elevator scene from Metal Gear Solid. It seemed fitting since we spent most of our time using stealth in Cold Miner’s hideout.");

            }
            else if (dialogue === 8)
            {
                $("#dialogue").text("Race: Getting through a place with no surprises and no danger is fitting enough for me.");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").text("Beauty: Well, Race, I give your stealth game a one out of ten.");
            }
            else if (dialogue === 10)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 10;
                dialogue = 0;
                //$("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("10. When the Neo Brigade was trapped inside Cold Miner’s tube, why couldn’t Pyra break out?");
                $("#answera").text("Her powers were inactive");
                $("#answerb").text("There were no cracks in the tube");
                $("#answerc").text("She was unconscious");
                $("#answerd").text("She was afraid to use her powers");
            }
        }
        else if (question === 10)
        {
            if (dialogue === 1)
            {
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").text("Pyra: You say that, and yet how many times did I have to tell you I can’t teleport?");
                //$("#prevlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").text("Beauty: Aw, come on. What sounds cooler? Teleportation or body separation to fire ashes for speedy flight? Can’t we just call it teleportation?");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").text("Pyra: It is not the same thing. It would be like if Race could turn invisible, shrink in size, and reappear in another location. Do you think he would’ve gotten out of that tube?");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").text("Beauty: I guess not.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").text("Pyra: Right. Because he would have no room to get through. It is NOT teleportation.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").text("Beauty: Got it.");
            }
            else if (dialogue === 7)
            {
                $("#dialogue").text("Pyra: Thank you.");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").text("Beauty: How ‘bout “Pyro-technic transportation”? Can we call it that?");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").text("Pyra: Ugh.");
            }
            else if (dialogue === 10)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 11;
                dialogue = 0;
                //$("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("11. When Race and I escaped from being frozen, what was the last thing Cold Miner said to Race?");
                $("#answera").text("“The Race is over! You lose!”");
                $("#answerb").text("“Your time has run out!”");
                $("#answerc").text("“Just run away! That’s all the running you can do!”");
                $("#answerd").text("“You can hide, but you can’t run!”");
            }
        }
        else if (question === 11)
        {
            if (dialogue === 1)
            {
                $("#RaceRight1").show();
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").text("Race: Hey, I’m sure if he knew you better at the time, he’d make fun of you for hiding too.");
                //$("#prevlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").text("Beauty: Well, it’s not like we were fighting Cold Miner’s brother-in-law. If we were, there’d be no ice for you to slip on. Though, it would also mean he’d have some other material on you.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").text("Race: Uh . . . I’ll stick with Cold Miner.");
            }
            else if (dialogue === 4)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#ColdMinerLeft1").show();
                $("#ColdMinerLeft1").animate({left: '22%'});
                $("#dialogue").text("Cold Miner: Now, that it is a good choice.");
            }
            else if (dialogue === 5)
            {
                $("#ColdMinerLeft1").animate({left: '0px'}, function() {
                    $("#ColdMinerLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").text("Pyra: Okay. Hang on. What is with those other answer choices? Beauty, did you write those?");
            }
            else if (dialogue === 6)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").text("Beauty: Indeed, I did. You like ‘em?");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").text("Pyra: Ugh. We have enough crummy dialogue as it is. You couldn’t just pretend to make it look like we have something better?");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").text("Beauty: What? You mean like combine cheesy choices with serious choices? Well, sure. But between those three I used, how would I be able to choose the one to keep?");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").text("Pyra: If you couldn’t decide which one you liked most, it’d be easier to just leave them all out.");
            }
            else if (dialogue === 10)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 12;
                dialogue = 0;
                //$("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("12. How did Race become leader of the Neo Brigade?");
                $("#answera").text("He saved the Brigade from Cold Miner");
                $("#answerb").text("The team voted him as leader");
                $("#answerc").text("The Chief assigned him the job");
                $("#answerd").text("Race won the job in a raffle");
            }
        }
        else if (question === 12)
        {
            if (dialogue === 1)
            {
                $("#RaceRight1").show();
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").text("Race: Yeah, but it wasn’t my decision to agree to his decision.");
                //$("#prevlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").text("Pyra: Well, it also wasn’t your decision to be the Chief’s son. Now it looks like you get all the burdens that come with it.");
            }
            else if (dialogue === 3)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({right: '22%'});
                $("#dialogue").text("Bendy: I still can’t believe Race gets to be leader. I’ve endangered myself way more than he has.");
            }
            else if (dialogue === 4)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#ChiefLeft1").show();
                $("#ChiefLeft1").animate({left: '22%'});
                $("#dialogue").text("Chief: I’m the Chief, and the assignment of authority is mine and mine alone. If you don’t think my boy is good enough, then maybe you’re the one with the problem.");
            }
            else if (dialogue === 5)
            {
                $("#BendyRight1").animate({right: '0px'}, function() {
                    $("#BendyRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").text("Pyra: Oh, what? ‘Cause he’s your son and you’re perfect. I’m sure if you ran a track team, you’d make pre-speedy Race the team captain too.");
            }
            else if (dialogue === 6)
            {
                $("#ChiefLeft1").animate({left: '0px'}, function() {
                    $("#ChiefLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").text("Race: No. But he did start me every game when he coached pee-wee soccer. Ugh. I hate this job.");
            }
            else if (dialogue === 7)
            {
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").text("Beauty: And for the role of leader, the bidding starts at fifty dollars!");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").text("Race: I know you’re joking, but I’d go for lower than that.");
            }
            else if (dialogue === 9)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({right: '22%'});
                $("#dialogue").text("Bendy: I got five bucks and a bottle cap saying I win a free soda.");
            }
            else if (dialogue === 10)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#ChiefLeft1").show();
                $("#ChiefLeft1").animate({left: '22%'});
                $("#dialogue").text("Chief: No selling team roles!");
            }
            else if (dialogue === 11)
            {
                $("#ChiefLeft1").animate({left: '0px'}, function() {
                    $("#ChiefLeft1").hide();
                });
                $("#BendyRight1").animate({right: '0px'}, function() {
                    $("#BendyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 13;
                dialogue = 0;
                //$("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("13. Why did Race let me join the Neo Brigade so quickly?");
                $("#answera").text("He was desperate for more help");
                $("#answerb").text("He wanted a powerful ally to make him look good");
                $("#answerc").text("He wanted to cut corners in getting things done");
                $("#answerd").text("All of the above");
            }
        }
        else if (question === 13)
        {
            if (dialogue === 1)
            {
                $("#RaceRight1").show();
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").text("Race: Why’d you have to make the answers so similar? You couldn’t just put one that was different?");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").text("Beauty: Come on. What’s wrong with exposing your flaws? It makes you look relatable.");
            }
            else if (dialogue === 3)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").text("Pyra: And besides, I don’t think anyone would be fooled by an answer that said you were looking to protect Beauty from some terrible force.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").text("Race: Hey, I can save people. I saved you guys, didn’t I?");
            }
            else if (dialogue === 5)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").text("Nator: I don’t think getting us into trouble and then saving us counts as a point in rescuing for you.");
            }
            else if (dialogue === 6)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").text("Tel-E: It’s not the lead-up. It’s the end result that matters. I mean, by your logic, Race getting us captured and then saving us would be the same as him saving us and then getting us captured.");
            }
            else if (dialogue === 7)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").text("Race: Thanks, Tel-E.");
            }
            else if (dialogue === 8)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").text("Beauty: Ooh. Tel-E using logic on Nator. How will he retaliate?");
            }
            else if (dialogue === 9)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").text("Pyra: If he quotes Socrates, I am so out of here.");
            }
            else if (dialogue === 10)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").text("Nator: Well, let’s just say in the case of Race bringing Beauty in, when you buy a computer, you read the specs and don’t just go for the shiny one.");
            }
            else if (dialogue === 11)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").text("Bendy: Oh, so that’s why you never clean your gadgets. They only LOOK crummy for credibility. I’m guessing that’s why we have Pyra here too. KIDDING!");
            }
            else if (dialogue === 12)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").text("Beauty: You’re lucky you were quick on that.");
            }
            else if (dialogue === 13)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").text("Pyra: Next time, though. ");
            }
            else if (dialogue === 14)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 14;
                dialogue = 0;
                //$("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("14. In Race’s depression, one of his Charevo Fairies tells him “Helping others is what helps yourself.” Which Fairy said this?");
                $("#answera").text("The Determination Fairy");
                $("#answerb").text("The Improvement Fairy");
                $("#answerc").text("The Speed Fairy");
                $("#answerd").text("The Logic Fairy");
            }
        }
        else if (question === 14)
        {
            if (dialogue === 1)
            {
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").text("Tel-E: And I suppose if Nator was here, he would call the Charevo Fairies hallucinations to those who possess the Charevo Gene and object to his Logic Element being included with Race’s elements, which would be right before he denies the very concept of the Charevo Elements.");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").text("Nator: I . . . yeah. Thank you.");
            }
            else if (dialogue === 3)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").text("Beauty: Wow. You didn’t even need your mind reading for that one.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").text("Tel-E: Some things remain hidden from the general view. But Nator’s skepticism is right there in plain sight.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").text("Beauty: Hey, by the way. Do you know what causes the Charevo Fairies to come out and give their elemental guidance?");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").text("Tel-E: That is a question not even my Charevo Journal holds the answer to, I’m afraid.");
            }
            else if (dialogue === 7)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").text("Race: What about why the fairies look like half ourselves and half the symbols on our Charevo Emblems? Seriously, my Determination Fairy makes me look so weird as a mountain.");
            }
            else if (dialogue === 8)
            {
                $("#dialogue").text("Tel-E: True. But with your Speed Fairy, you do look kind of cute as a cheetah.");
            }
            else if (dialogue === 9)
            {
                $("#dialogue").text("Race: Really? Thanks.");
            }
            else if (dialogue === 10)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").text("Beauty: Not that you’d think so based on that little fear of yours.");
            }
            else if (dialogue === 11)
            {
                $("#dialogue").text("Race: Hey! Don’t mention that now!");
            }
            else if (dialogue === 12)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
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
                //$("#BeautyLeft1").animate({left: '22%'});
                $("input").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").text("");
                $("#submitanswer").show();
                $("#question").text("15. After Race stopped Cold Miner and melted all the ice in the city, the Chief gives him an award consisting of a medal and various items, which of the following was not one of the items?");
                $("#answera").text("A box of pens");
                $("#answerb").text("A stapler");
                $("#answerc").text("A bus pass");
                $("#answerd").text("A fast food gift card");
            }
        }
        else if (question === 15)
        {
            if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").text("Nator: Hang on. Race has super speed. Why did he need a bus pass?");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").text("Bendy: Same reason they have those moving walkways you can stand on even though you go the same speed as when you walk, I guess.");
            }
            else if (dialogue === 3)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").text("Race: Yeah, it’s not like when I run there’s no effort involved.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").text("Nator: Still, it just seems inefficient.");
            }
            else if (dialogue === 5)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").text("Beauty: Anyway, fun fact: Race’s award being a bunch of assorted items is actually based on an episode of the Simpsons where Homer stops a nuclear meltdown and is awarded with a plaque, a ham, a discount coupon book, and a thumbs up.");
            }
            else if (dialogue === 6)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({right: '22%'});
                $("#dialogue").text("Bendy: Aw. Why couldn’t the award be based on a story with a hero receiving gold? Now, that would be a happy ending.");
            }
            else if (dialogue === 7)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").text("Race: I don’t think my dad has any gold for job performance bonuses.");
            }
            else if (dialogue === 8)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#BendyRight1").animate({right: '0px'}, function() {
                    $("#BendyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '35%'});
                    //$("#nextlevel1a").attr("style", "opacity: .6");
                    nextline = 1;
                    question = 16;
                    dialogue = 0;

                    $("input").hide();
                    $("label").hide();
                    $("#question").hide();
                    $("#submitanswer").hide();
                    $("img").hide();
                    $("#BeautyLeft1").show();
                    $("#dialogue").text("Beauty: That's the end of that quiz. Let's see how you did.");

                });


            }
            
        }
        else if (question === 16)
            {
                if (dialogue === 1)
                {
                    $("#score").show();
                    $("#score").text("Your score: " + correct + "/15");
                    if(correct === 15)
                        $("#dialogue").text("Beauty: All right! Perfect score! 15 out of 15! Well done.");
                    else if(correct > 10)
                        $("#dialogue").text("Beauty: Hey, you got a " + correct + " out of 15. Nicely done.");
                    else if(correct > 5)
                        $("#dialogue").text("Beauty: Looks like you got a score of " + correct + " out of 15. Not bad.");
                    else if(correct > 1)
                        $("#dialogue").text("Beauty: Whoa. You only got " + correct + " out of 15 questions right. Good try. Maybe you'll do better next time.");
                    else
                        $("#dialogue").text("Beauty: Aw, what? You didn't get a single question right. Did you even read this story? Unless you're Race and you don't like reading about yourself, I'd go back and look at Story 1 for some reference.");
                }
                else if (dialogue === 2)
                {
                    $("#backquiz").show();
                    $("#dialogue").text("Now that you finished this, why not try another quiz? Just hit the button on the right to go back to the quiz menu.");
                }
                
            }

    }


    $("#submitanswer").click(function() {

        if (question === 1)
        {
            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").text("Beauty: That’s right. The name of our town is Minor City.");
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
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").text("");
                missed = 1;
            }
        }
        else if (question === 2)
        {
            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").text("Beauty: Correct. Race’s opponent was Fourize. He’s the leader of a group of teen villains we’ll see throughout the first five stories.");
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
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").text("");
                missed = 1;
            }
        }
        else if (question === 3)
        {
            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").text("Beauty: Right! It was Cold Miner. In addition to commanding his Chill-dren minions, he has the power of cryo-kinesis and additional strength and power from his pickaxe.");
                //$("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
                $("#BeautyLeft1").show();
                //$("#BeautyLeft1").animate({left: '350px'});
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").text("");
                missed = 1;
            }
        }
        else if (question === 4)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").text("Beauty: Yep. Not even five minutes in and Race let me join the Neo Brigade.");
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
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").text("");
                missed = 1;
            }
        }
        else if (question === 5)
        {
            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {

                $("#dialogue").text("Beauty: That is correct. Whenever the Chief visits the Neo Brigade HQ, roll call is the first thing he does.");
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
                $("#dialogue").text("");
                missed = 1;
            }
        }
        else if (question === 6)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").text("Beauty: That’s it. The informant, who turned out to be Cold Miner, went by the name Don Crimel.");
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
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").text("");
                missed = 1;
            }
        }
        else if (question === 7)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {

                $("#dialogue").text("Beauty: Correct. Cold Miner was operating from the subway.");
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
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").text("");
                missed = 1;
            }
        }
        else if (question === 8)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").text("");
            }
            else if ($("input[name=q]:checked").val() === "c")
            {

                $("#dialogue").text("Beauty: Correct. He used a Neo Brigade communicator to contact the team. It’s mine now, but used to be Bendy’s.");
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
                $("#dialogue").text("");
                missed = 1;
            }
        }
        else if (question === 9)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {

                $("#dialogue").text("Beauty: Yep. What we thought was an elevator was actually a trap for the team.");
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
                $("#dialogue").text("");
                missed = 1;
            }
        }
        else if (question === 10)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").text("Beauty: Correct. Pyra can only separate her body into ashes and smoke to fly through the air invisible. With no room for her fire to move through, she can’t go anywhere.");
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
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").text("");
                missed = 1;
            }
        }
        else if (question === 11)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").text("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {

                $("#dialogue").text("Beauty: That’s right. Cold Miner enjoyed taunting Race’s inability to run, so he decided to mock him for hiding as well.");
                //  $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
        }
        else if (question === 12)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").text("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").text("Beauty: Correct. Despite the team having a leader, the Chief is in charge of the Neo Brigade, and it was his decision to let Race lead us in the field.");
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
                $("#dialogue").text("");
                missed = 1;

            }
        }
        else if (question === 13)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").text("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").text("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "d")
            {

                $("#dialogue").text("Beauty: Yep. For someone like Race who’s in need of a cheat sheet, I was just in the right place at the right time.");
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

                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {

                $("#dialogue").text("Beauty: That’s right. The Charevo Fairies provide advice based on the Charevo Element they represent. In this case, it was Race’s Improvement Fairy that said this.");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").text("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").text("");
                missed = 1;

            }
        }
        else if (question === 15)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").text("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {

                $("#dialogue").text("Beauty: Correct. Race received a box of pens, a bus pass, a gift card, and an autographed baseball bat, but not a stapler.");
                $("#nextlevel1a").attr("style", "opacity: 1");
                nextline = 1;
                if(missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").text("");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").text("");
                missed = 1;

            }
        }

    });
});