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

    if (sessionStorage.getItem("firstPage") === null)
    {
        sessionStorage.setItem("firstPage", "the Level 4 Beauty Quiz");
        sessionStorage.setItem("memory", "the Level 4 Beauty Quiz");
        sessionStorage.setItem("currentPage", "the Level 4 Beauty Quiz");
    }
    else
    {
        if (sessionStorage.getItem("currentPage") !== "the Level 4 Beauty Quiz")
        {
            sessionStorage.setItem("memory", sessionStorage.getItem("memory").toString() + ", the Level 4 Beauty Quiz");
        }
        sessionStorage.setItem("currentPage", "the Level 4 Beauty Quiz");


    }

    question11acount = 0;
    question11bcount = 0;
    question11ccount = 0;


    $("#nextlevel1a").click(function () {

        if (nextline === 1)
        {
            dialogue++;
            //$("#prevlevel1a").attr("style", "opacity: 1");
            dialoguechange();
        }
    });
    $("#prevlevel1a").click(function () {
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
                $("#dialogue").html("<b>Beauty:</b> Hey, guys. As you can see, I'll be hosting the quiz for the novella, To Love or to Die (as in me or you will). Now, if you're one of those people who like to take quizzes on fiction before going through the reading material, good for you. For the rest of you, standard disclaimer: SPOILERS AHEAD! Please read the novella before continuing. Thank you.");
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
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                document.getElementById("nextlevel1a").disabled = true;
                $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("1. When the Neo Brigade and I were taking a tour of Minor City University, we encountered one of our frequent villains. Who was it?");
                $("#answera").text("Fourize");
                $("#answerb").text("Cyhack");
                $("#answerc").text("Ninja");
                $("#answerd").text("Joey Ex");
            }
        }
        else if (question === 1) {
            if (dialogue === 1)
            {
                $("#NinjaRight1").fadeIn();
                $("#NinjaRight1").css({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Ninja:</b> They say a warrior is judged not by his strength but by the collective strength of those he can humiliate while remaining unscathed.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Tel-E:</b> Exactly who are you quoting on that?");
            }
            else if (dialogue === 3)
            {
                //$("#NinjaRight1").animate({left: (window.screen.width * .78)}, function () {
                //    $("#NinjaRight1").hide();
                //});
                $("#NinjaRight1").fadeOut();
                $("#PyraRight1").show();
                $("#PyraRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Pyra:</b> Don’t listen to him. He’s just in his half-Zen half-jerk mode.");
            }
            else if (dialogue === 4)
            {
                $("#Tel-ELeft1").animate({left: '-50px'}, function () {
                    $("#Tel-ELeft1").hide();
                });
                $("#NinjaLeft1").fadeIn();
                $("#NinjaLeft1").css({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Ninja:</b> I put on a good act when I need it. Half-Zen half-jerk is just a clouded image of one who’s all dangerous. Not that you’re Zen or a jerk, Pyra.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Pyra:</b> Watch it.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Ninja:</b> What? I can’t discuss a theme of this story? I thought you liked literacy.");

            }
            else if (dialogue === 7)
            {
                //$("#NinjaLeft1").animate({left: '-50px'}, function () {
                //    $("#NinjaLeft1").hide();
                //});
                $("#NinjaLeft1").fadeOut();
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Beauty:</b> Anyway, like a number of characters, Ninja was inspired by one from Teen Titans. In this case, Ninja came from Kyd Wykkyd.");


            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Pyra:</b> Except Ninja can talk. And somehow, his soft spoken words are still too big of a change.");
            }
            else if (dialogue === 9)
            {
                //$("#BeautyLeft1").animate({left: '-50px'}, function () {
                    //$("#BeautyLeft1").hide();
                //});
                $("#PyraRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#PyraRight1").hide();
                    //$("#BeautyLeft1").show();
                    //$("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                });
                //$("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                // $("#prevlevel1a").attr("style", "opacity: .6");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                document.getElementById("nextlevel1a").disabled = true;
                nextline = 0;
                question = 2;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("2. After Pyra defeated Ninja, what did she do with him before looking at the fire she started?");
                $("#answera").text("She burned his face");
                $("#answerb").text("She held him over a building");
                $("#answerc").text("She punched him out");
                $("#answerd").text("She let him go");
            }

        }
        else if (question === 2) {
            if (dialogue === 1)
            {
                $("#NinjaRight1").fadeIn();
                $("#NinjaRight1").css({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Ninja:</b> Just to give her that look of a deranged killer in case she needed more of it.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Pyra:</b> I was only trying to scare you. I wasn’t really gonna drop you.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Ninja:</b> So I can choose not to pay protection money when you come to collect?");
            }
            else if (dialogue === 4)
            {
                $("#PyraLeft1").animate({left: '-50px'}, function () {
                    $("#PyraLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Nator:</b> Hang on. Why couldn’t you just teleport away when she held you like that?");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Ninja:</b> Uh, same reason I was able to use your arm to shoot lasers without pressing any buttons. Nobody cares!");
            }
            else if (dialogue === 6)
            {
                $("#NatorLeft1").animate({left: '-50px'}, function () {
                    $("#NatorLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Beauty:</b> Well said, Ninja. Well said. ");

            }
            else if (dialogue === 7)
            {
                //$("#BeautyLeft1").animate({left: '-50px'}, function () {
                    //$("#BeautyLeft1").hide();
                //});
                $("#NinjaRight1").fadeOut(function () {
                    //$("#NinjaRight1").hide();
                    //$("#BeautyLeft1").show();
                    //$("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                document.getElementById("nextlevel1a").disabled = true;
                nextline = 0;
                question = 3;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("3. After we helped Brittney, she mentioned a concert her sibling was going to have at the college. What was this sibling’s name?");
                $("#answera").text("Linda Trainor");
                $("#answerb").text("Courtney Trainor");
                $("#answerc").text("Rodney Trainor");
                $("#answerd").text("Whitney Trainor");
            }
        }
        else if (question === 3) {
            if (dialogue === 1)
            {
                $("#PyraRight1").show();
                $("#PyraRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Pyra:</b> Ugh. She is such an attention hog. Does she really need this big a role in this thing?");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> Well one of her Charevo Elements is Attention. And it's not like the attention of a town cryer ringing a bell to deliver news.");
            }
            else if (dialogue === 3)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#TrainorLeft1").show();
                $("#TrainorLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Whitney Trainor:</b> And just how big a role would you have wanted me to have? Did you want me to take over the world or kill someone in your team?");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Pyra:</b> You framed one of my best friends. I think you stretched it out quite a bit.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Whitney Trainor:</b> Don't pin that one on me. It's not my fault my parents' store had security cameras.");
            }
            else if (dialogue === 6)
            {
                $("#TrainorLeft1").animate({left: '-50px'}, function () {
                    $("#TrainorLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Beauty:</b> Fun fact: Trainor is named after singer Meghan Trainor. When our creator wanted a pop star villain, he decided to give her a real pop star's name. As it turns out, Trainor was the only one he liked, so the name was chosen.");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Pyra:</b> Isn't that one of, like, the least controversial real-life singers? Kind of ironic a villain would have that name.");


            }
            else if (dialogue === 8)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#TrainorLeft1").show();
                $("#TrainorLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Whitney Trainor:</b> It's always the person you least suspect.");


            }
            else if (dialogue === 9)
            {
                $("#TrainorLeft1").animate({left: '-50px'}, function () {
                    $("#TrainorLeft1").hide();
                });
                $("#PyraRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#PyraRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                document.getElementById("nextlevel1a").disabled = true;
                nextline = 0;
                question = 4;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("4. Which of the following is not one of the reasons Pyra gives for not liking Whitney Trainor?");
                $("#answera").text("Her auto tune");
                $("#answerb").text("She acts too phony at times");
                $("#answerc").text("Her voice");
                $("#answerd").text("Her wardrobe");
            }
        }
        else if (question === 4) {
            if (dialogue === 1)
            {
                $("#PyraRight1").show();
                $("#PyraRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Pyra:</b> That being said, I'm glad this story just has text and no audio.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> Somehow, I feel like you wouldn't be any happier if the lyrics of any of her songs were printed here.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Pyra:</b> That is a fair assumption.");
            }
            else if (dialogue === 4)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#TrainorLeft1").show();
                $("#TrainorLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Whitney Trainor:</b> So someone has a problem with how I sing?");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Pyra:</b> Gee, what gave it away?");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Whitney Trainor:</b> Okay, Mom, just what do you have against my singing?");

            }
            else if (dialogue === 7)
            {

                $("#dialogue").html("<b>Pyra:</b> See choice a, princess. Like our creator, I'm no fan of the auto tune. And all those trendy pop songs get way too much play these days.");


            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Whitney Trainor:</b> You know, if you want, I can do show tunes.");
            }
            else if (dialogue === 9)
            {
                $("#TrainorLeft1").animate({left: '-50px'}, function () {
                    $("#TrainorLeft1").hide();
                });
                $("#PyraRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#PyraRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                document.getElementById("nextlevel1a").disabled = true;
                nextline = 0;
                question = 5;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("5. What was the rationale Pyra gave for why it wouldn’t make sense for someone like her, or any of us, to go to a Whitney Trainor concert?");
                $("#answera").text("The tickets are too expensive");
                $("#answerb").text("She doesn’t know any of her songs");
                $("#answerc").text("It’s too crowded");
                $("#answerd").text("All of the above");
            }
        }
        else if (question === 5) {
            if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Nator:</b> Gee, Pyra, how do you think most music was enjoyed the first time?");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Bendy:</b> Yeah, it wasn't just implanted into them so they could like it before they heard it.");
            }
            else if (dialogue === 3)
            {
                $("#NatorRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#NatorRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Pyra:</b> You know what I mean.  You're paying money, standing in line, and making the drive there and back to listen to music you don't know. You can waste your time on that. Just don't waste mine.");
            }
            else if (dialogue === 4)
            {
                $("#BendyLeft1").animate({left: '-50px'}, function () {
                    $("#BendyLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Beauty:</b> I think it's worth noting that Pyra's reasoning for not going to a concert where you wouldn't know any of the songs is based on something our creator has always believed with concerts.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Pyra:</b> So that's why I'm his favorite then.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Beauty:</b> In addition, Pyra and I also mention our dislike for those t-shirts that feature an artist’s tour dates because they’re only relevant for a limited time. That is also based on our creator’s opinions.");

            }
            else if (dialogue === 7)
            {
                $("#PyraRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#PyraRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Nator:</b> Gee, our creator seems like a real open-minded guy, by which I mean he isn’t.");

            }
            else if (dialogue === 8)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Tel-E:</b> And yet, for some reason, you're NOT his favorite.");

            }
            else if (dialogue === 9)
            {
                $("#Tel-ELeft1").animate({left: '-50px'}, function () {
                    $("#Tel-ELeft1").hide();
                });
                $("#NatorRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#NatorRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                document.getElementById("nextlevel1a").disabled = true;
                nextline = 0;
                question = 6;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("6. When I went to my first day of school in Minor City, what did I learn about Pyra?");
                $("#answera").text("She attends class remotely");
                $("#answerb").text("She wears a mask to school");
                $("#answerc").text("She pretends to be very social");
                $("#answerd").text("Everyone thinks she has a boyfriend");
            }
        }
        else if (question === 6) {

            if (dialogue === 1)
            {
                $("#BendyRight1").show();
                $("#BendyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Bendy:</b> But she still goes to school? Man, if I had her excuse, I'd just make it into one long vacation and just go skateboarding.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Pyra:</b> It's not an excuse. It's a real problem I've had. Just because you're made of rubber with a big child-proof body, it doesn't mean others aren't at risk.");
            }
            else if (dialogue === 3)
            {
                $("#BendyRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#BendyRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Nator:</b> I still don't see why you don't just go in like the rest of us. Sure, Bendy's safe, but we all have powers that can hurt people and we're around everyone.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Pyra:</b> Well, I'm sorry if you don't feel guilty for hurting people by accident.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Nator:</b> All I'm saying is I think you're making too big a deal of this.");
            }
            else if (dialogue === 6)
            {
                $("#PyraLeft1").animate({left: '-50px'}, function () {
                    $("#PyraLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Tel-E:</b> See, this is why you would make a terrible counselor for someone like her.");

            }
            else if (dialogue === 7)
            {
                $("#NatorRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#NatorRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Beauty:</b> I still find it weird that Mister Sensitive here is even allowed to go to school with a mechanical body full of guns. What school board approved of that?");

            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Tel-E:</b> Given Nator's intellect, I suppose schools will do just about anything to get their test scores up.");

            }
            else if (dialogue === 9)
            {
                $("#Tel-ELeft1").animate({left: '-50px'}, function () {
                    $("#Tel-ELeft1").hide();
                });
                $("#BeautyRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#BeautyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                document.getElementById("nextlevel1a").disabled = true;
                nextline = 0;
                question = 7;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("7. After Trainor gives a preview of her show in town, which member of the Neo Brigade does the Chief arrest for allegedly kidnapping Trainor’s parents?");
                $("#answera").text("Race");
                $("#answerb").text("Tel-E");
                $("#answerc").text("Pyra");
                $("#answerd").text("Bendy");
            }
        }
        else if (question === 7)
        {
            if (dialogue === 1)
            {
                $("#RaceRight1").show();
                $("#RaceRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Race:</b> You know, of all of us for my dad to arrest, for some reason, I always thought it would be Nator.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Nator:</b> What? You'd pick me over the alien? It's 'cause she's your best friend, right?");
            }
            else if (dialogue === 3)
            {
                $("#RaceRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#RaceRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Beauty:</b> Come on, Nator. Don't be mad. You do have those qualities that just scream out “Mad Scientist!”");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Nator:</b> I do not. Now, if anyone needs me, I'll be working on my ray gun for absorbing human skin.");
            }
            else if (dialogue === 5)
            {
                $("#NatorLeft1").animate({left: '-50px'}, function () {
                    $("#NatorLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Bendy:</b> He's trying to create his own organic body. I can already tell.");
            }
            else if (dialogue === 6)
            {
                $("#BeautyRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#BeautyRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Tel-E:</b> I still can't believe the Chief didn't trust me and thought I would commit a kidnapping.");

            }
            else if (dialogue === 7)
            {
                $("#BendyLeft1").animate({left: '-50px'}, function () {
                    $("#BendyLeft1").hide();
                });
                $("#ChiefLeft1").show();
                $("#ChiefLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Chief:</b> The mechanical kid's potentially criminal inventions notwithstanding, you can't be too careful with people from another planet. They could have some crazy powers they might use on you.");

            }
            else if (dialogue === 8)
            {
                $("#Tel-ERight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#Tel-ERight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Pyra:</b> Okay, who's gonna tell him?");

            }
            else if (dialogue === 9)
            {
                $("#ChiefLeft1").animate({left: '-50px'}, function () {
                    $("#ChiefLeft1").hide();
                });
                $("#PyraRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#PyraRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                document.getElementById("nextlevel1a").disabled = true;
                nextline = 0;
                question = 8;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("8. When Pyra and I watched a video of Whitney Trainor, we discovered she had powers of her own. What ability did these include?");
                $("#answera").text("The ability to put people in mind control when she sings");
                $("#answerb").text("The ability to produce weaponized music notes when she sings");
                $("#answerc").text("The ability to put people in a trance of seeing what they love");
                $("#answerd").text("The ability to put people in a trance of seeing what they fear");
            }
        }

        else if (question === 8)
        {
            if (dialogue === 1)
            {
                $("#PyraRight1").show();
                $("#PyraRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Pyra:</b> And ironically, for that power to activate, people have to see her first.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#TrainorLeft1").show();
                $("#TrainorLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Whitney Trainor:</b> There's nothing wrong with providing a nice little bonus for going to one of my shows. Some artists give free wristbands, I give you a view of happiness.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Pyra:</b> It's a good thing you don't have that mind control choice for a power. That's the only way you can get me to listen to your music, and that cannot happen.");
            }
            else if (dialogue === 4)
            {
                $("#TrainorLeft1").animate({left: '-50px'}, function () {
                    $("#TrainorLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Beauty:</b> Interestingly, two of those choices are powers another character will have in a later story.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Pyra:</b> So I dodged a bullet, but the gun's still loaded? Well, that's just great.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Beauty:</b> Don't worry. I'm not gonna spoil anything, but that mind control won't be to make you like Trainor. I am a little curious why the power of making people see their biggest fears wasn't used though.");

            }
            else if (dialogue === 7)
            {
                $("#PyraRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#PyraRight1").hide();
                });
                $("#TrainorRight1").show();
                $("#TrainorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Whitney Trainor:</b> It's one thing to make people see their nightmares and want to escape. It's another to make them see what they love and not want to leave. That's where my Charevo Element of Popularity comes in to sweeten up the sights.");

            }
            else if (dialogue === 8)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Pyra:</b> Too bad you don't have that fear power. You're popularity would be gone in an instant.");

            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Whitney Trainor:</b> Oh, I think I'd manage. I could give myself a musical horror image and profit from that. It could be like Alice Cooper with more realistic horror effects.");

            }
            else if (dialogue === 10)
            {
                $("#PyraLeft1").animate({left: '-50px'}, function () {
                    $("#PyraLeft1").hide();
                });
                $("#TrainorRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#TrainorRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                document.getElementById("nextlevel1a").disabled = true;
                nextline = 0;
                question = 9;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("9. When the Chief shows us a video of Tel-E committing a crime, what is she wearing?");
                $("#answera").text("A wedding dress");
                $("#answerb").text("A pirate costume");
                $("#answerc").text("A police uniform");
                $("#answerd").text("Whitney Trainor’s outfit");
            }
        }
        else if (question === 9)
        {
            if (dialogue === 1)
            {
                $("#RaceRight1").show();
                $("#RaceRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Race:</b> How do you know she doesn't want to marry someone else?");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Tel-E:</b> I think I'd know.");
            }
            else if (dialogue === 3)
            {
                $("#RaceRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#RaceRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Beauty:</b> So who was the one with the fantasy?");
            }
            else if (dialogue === 4)
            {
                $("#Tel-ELeft1").animate({left: '-50px'}, function () {
                    $("#Tel-ELeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Bendy:</b> Well, if from what I know about relationships is a hundred percent accurate, which it must be, we can take into account the idea of opposites attract and seeming resentment hiding true love. It's Nator!");
            }
            else if (dialogue === 5)
            {
                $("#BeautyRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#BeautyRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Nator:</b> No way! Like I'd ever be interested in Tel-E.");
            }
            else if (dialogue === 6)
            {
                $("#BendyLeft1").animate({left: '-50px'}, function () {
                    $("#BendyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Tel-E:</b> Thank goodness.");

            }
            else if (dialogue === 7)
            {
                $("#NatorRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#NatorRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Pyra:</b> Are we really starting a witch hunt over a crush on Tel-E?");

            }
            else if (dialogue === 8)
            {
                $("#Tel-ELeft1").animate({left: '-50px'}, function () {
                    $("#Tel-ELeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Beauty:</b> She's right. Let's ask Trainor.");

            }
            else if (dialogue === 9)
            {
                $("#PyraRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#PyraRight1").hide();
                });
                $("#TrainorRight1").show();
                $("#TrainorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Whitney Trainor:</b> If you're trying to get it out of me, I'm afraid all fantasies and dreams are confidential.");

            }
            else if (dialogue === 10)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Pyra:</b> Right. And I assume all four of those choices were real fantasy wardrobes you found too?");

            }
            else if (dialogue === 11)
            {
                $("#dialogue").html("<b>Whitney Trainor:</b> Well, you know how kids dream of being pirates. Though, strangely, I didn't find too many fantasies of people becoming me. Oh well. Maybe that'll change after my next album.");
            }
            else if (dialogue === 12)
            {
                $("#PyraLeft1").animate({left: '-50px'}, function () {
                    $("#PyraLeft1").hide();
                });
                $("#TrainorRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#TrainorRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                document.getElementById("nextlevel1a").disabled = true;
                nextline = 0;
                question = 10;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("10. What instruments do Whitney Trainor’s siblings play?");
                $("#answera").text("Piano, violin, viola");
                $("#answerb").text("Piano, clarinet, cello");
                $("#answerc").text("Clarinet, violin, cello");
                $("#answerd").text("Viola for all three");
            }
        }
        else if (question === 10)
        {
            if (dialogue === 1)
            {
                $("#TrainorRight1").show();
                $("#TrainorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Whitney Trainor:</b> In other words, pretentious wind toy, pretentious string toy, and big pretentious string toy.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Tel-E:</b> I play clarinet. It doesn't look THAT pretentious.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Whitney Trainor:</b> Seeing as how you couldn't defend the instrument entirely, I don't know if any defense is gonna do it.");
            }
            else if (dialogue === 4)
            {
                $("#Tel-ELeft1").animate({left: '-50px'}, function () {
                    $("#Tel-ELeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Beauty:</b> After you attacked your brother and sister's music hall, I don't think anyone needs to mention how you still don't like classical music.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Whitney Trainor:</b> You think I'd want pop music shut out of my life from my family when I was growing up? We're coming close to making amends, but classical should just go extinct at this point.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Beauty:</b> Gee, any other music genres you wanna go after?");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Whitney Trainor:</b> I don't have a beef with any other music. It's just the music of my family.");

            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Beauty:</b> Right. I'm just imagining if you were a family of comedians, you'd probably be playing in comedy clubs before targeting vaudeville theaters or something.");

            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Whitney Trainor:</b> It's possible. In some other dimension perhaps.");

            }
            else if (dialogue === 10)
            {
                //$("#BeautyLeft1").animate({left: '-50px'}, function () {
                    //$("#BeautyLeft1").hide();
                //});
                $("#TrainorRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#TrainorRight1").hide();
                    //$("#BeautyLeft1").show();
                    //$("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                document.getElementById("nextlevel1a").disabled = true;
                nextline = 0;
                question = 11;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("11. Which of the following is one of the reasons for Whitney Trainor kidnapping her family?");
                $("#answera").text("They prohibited her from playing non-classical music");
                $("#answerb").text("She was jealous of her siblings");
                $("#answerc").text("She received hate mail from them");
                $("#answerd").text("All of the above");
            }
        }
        else if (question === 11)
        {
            if (dialogue === 1)
            {
                $("#RaceRight1").show();
                $("#RaceRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Race:</b> And I guess she wasn't a fan of her family's music either.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#TrainorLeft1").show();
                $("#TrainorLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Whitney Trainor:</b> My whole thing with my family is basically a more twisted version of the Jazz Singer. Except they're all musicians who think they're better than me.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Race:</b> Hey, I've had to live with the pressure of following in my family's footsteps in law enforcement. You don't see me tying my dad to his desk.");
            }
            else if (dialogue === 4)
            {
                $("#TrainorLeft1").animate({left: '-50px'}, function () {
                    $("#TrainorLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Bendy:</b> I've got a whole case of duct tape if you need it, though.");
            }
            else if (dialogue === 5)
            {
                $("#BendyLeft1").animate({left: '-50px'}, function () {
                    $("#BendyLeft1").hide();
                });
                $("#TrainorLeft1").show();
                $("#TrainorLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Whitney Trainor:</b> Oh, sure. You got to do his job better than him and he respects you for it. Poor you.");
            }
            else if (dialogue === 6)
            {
                $("#TrainorLeft1").animate({left: '-50px'}, function () {
                    $("#TrainorLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Beauty:</b> Yeah, Race. It's not like the Chief has ever grilled you for not being able to tackle criminals like him in his prime.");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Race:</b> No. But I still get notes today.");

            }
            else if (dialogue === 8)
            {
                //$("#BeautyLeft1").animate({left: '-50px'}, function () {
                    //$("#BeautyLeft1").hide();
                //});
                $("#RaceRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#RaceRight1").hide();
                    //$("#BeautyLeft1").show();
                    //$("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                });
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                document.getElementById("nextlevel1a").disabled = true;
                nextline = 0;
                question = 12;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("12. What was the element of the Charevo Fairy that encouraged Trainor to keep her family as hostages, preventing her from having second thoughts?");
                $("#answera").text("Popularity");
                $("#answerb").text("Fantasy");
                $("#answerc").text("Music");
                $("#answerd").text("Attention");
            }
        }
        else if (question === 12)
        {
            if (dialogue === 1)
            {
                $("#TrainorRight1").show();
                $("#TrainorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Whitney Trainor:</b> That Fairy sure has some interesting timing. I thought I might've gone easy on my family before it came out.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> So when it said “Those who stand in the way of your greatest fantasies are meant to be destroyed!”, it all made perfect sense like you've heard it before?");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Whitney Trainor:</b> It got the point across.");
            }
            else if (dialogue === 4)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Pyra:</b> I find it hard to believe one of Trainor's Charevo Elements is fantasy. I thought she was all about popularity and all that other shallow stuff.");
            }
            else if (dialogue === 5)
            {
                $("#TrainorRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#TrainorRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Beauty:</b> To be fair, that is what you thought of me at first.");
            }
            else if (dialogue === 6)
            {
                $("#PyraLeft1").animate({left: '-50px'}, function () {
                    $("#PyraLeft1").hide();
                });
                $("#TrainorLeft1").show();
                $("#TrainorLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Whitney Trainor:</b> I'm still about all that. What? You don’t think I can have something else? The world of fantasy provides so much wonder and variety that reality so sadly lacks.");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Beauty:</b> In a reality where some people have superpowers, that must be some wonder you’re looking at.");

            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Whitney Trainor:</b> Well, Beauty, I should at least thank you for sharing your imagination with me. Having people love you is awesome, but how many pop stars get to summon dragons and fight someone with an electric sword?");

            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Beauty:</b> In this country? Probably just you.");

            }
            else if (dialogue === 10)
            {
                $("#TrainorLeft1").animate({left: '-50px'}, function () {
                    $("#TrainorLeft1").hide();
                });
                $("#BeautyRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#BeautyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                });
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                document.getElementById("nextlevel1a").disabled = true;
                nextline = 0;
                question = 13;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("13. When Pyra and I fought Trainor, the pop star summoned members of the Neo Brigade looking like how they wanted to see themselves in Trainor’s trance. Which two Brigade members did Trainor use on us?");
                $("#answera").text("Race and Tel-E");
                $("#answerb").text("Tel-E and Bendy");
                $("#answerc").text("Bendy and Nator");
                $("#answerd").text("Pyra and Beauty");
            }
        }
        else if (question === 13)
        {
            if (dialogue === 1)
            {
                $("#TrainorRight1").show();
                $("#TrainorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Whitney Trainor:</b> In their fantasies, Bendy dreamed of being the next Captain D and Nator dreamed of being an Olympic mathematician. The latter’s math weapons were certainly a lovely sight for me.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Pyra:</b> Hang on. Let’s back up a bit. Olympic mathematician?");
            }
            else if (dialogue === 3)
            {
                $("#TrainorRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#TrainorRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Nator:</b> A guy can dream, can’t he? One day we’ll have more intellectual sports that get celebrated every four years. And I’ll be its champion. It could happen.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Pyra:</b> Yeah, I don’t think inventing a sport that no one wants to play makes you a champion.");
            }
            else if (dialogue === 5)
            {
                $("#NatorRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#NatorRight1").hide();
                });
                $("#TrainorRight1").show();
                $("#TrainorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Whitney Trainor:</b> There’s nothing wrong with celebrating intelligence. That is my kind of guy, you know.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Pyra:</b> Speaking of not celebrating intelligence, Bendy wants to be Captain D. Someone wanna explain that?");

            }
            else if (dialogue === 7)
            {
                $("#TrainorRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#TrainorRight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Bendy:</b> I don’t wanna do EVERYTHING he did. I just wanna be as cool as he used to be, and then take over his TV show.");

            }
            else if (dialogue === 8)
            {
                $("#PyraLeft1").animate({left: '-50px'}, function () {
                    $("#PyraLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Beauty:</b> Oh, enough shows get rebooted these days. If the good ones won’t be left alone, at least leave the bad shows out of this. ");

            }
            else if (dialogue === 9)
            {
                //$("#BeautyLeft1").animate({left: '-50px'}, function () {
                    //$("#BeautyLeft1").hide();
                //});
                $("#BendyRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#BendyRight1").hide();
                    //$("#BeautyLeft1").show();
                    //$("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                });
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                document.getElementById("nextlevel1a").disabled = true;
                nextline = 0;
                question = 14;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("14. What was Pyra’s reason for not wanting to fight Trainor?");
                $("#answera").text("She didn’t want to hurt innocent people");
                $("#answerb").text("She secretly liked Trainor");
                $("#answerc").text("She didn’t think her powers would work");
                $("#answerd").text("She thought she would hurt Beauty");
            }
        }
        else if (question === 14)
        {
            if (dialogue === 1)
            {
                $("#NatorRight1").show();
                $("#NatorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Nator:</b> Not to interrupt, but I think we kind of gave this answer away a few questions back.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Race:</b> I think this is for people who’ve been hitting the next button to skip all our dialogue.");
            }
            else if (dialogue === 3)
            {
                $("#NatorRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#NatorRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Beauty:</b> Well, in any case, Pyra can only really fight when she’s with people she doesn’t think will be afraid of her if she hurts them. Those are her friends and pretty much any villain.");
            }
            else if (dialogue === 4)
            {
                $("#RaceLeft1").animate({left: '-50px'}, function () {
                    $("#RaceLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Pyra:</b> Yeah. After I burned my friend’s brother, there was no one I could be around. I know I can be hard on you guys sometimes. But I’m glad to have you all. Without you guys, I’d just be alone.");
            }
            else if (dialogue === 5)
            {
                $("#BeautyRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#BeautyRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Tel-E:</b> We’re always here for you, Pyra. Don’t ever forget that.");
            }
            else if (dialogue === 6)
            {
                $("#PyraLeft1").animate({left: '-50px'}, function () {
                    $("#PyraLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Bendy:</b> Man, way to go, Beauty. We had all this fun dialogue in these questions and you had to bring it down with Pyra’s problem. I’m sure no one’s gonna be skipping this section here.");

            }
            else if (dialogue === 7)
            {
                $("#BendyLeft1").animate({left: '-50px'}, function () {
                    $("#BendyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Pyra:</b> Can I forget him?");

            }
            else if (dialogue === 8)
            {
                $("#Tel-ERight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#Tel-ERight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Bendy:</b> And sarcastic Pyra is back! You’re welcome!");

            }
            else if (dialogue === 9)
            {
                $("#PyraLeft1").animate({left: '-50px'}, function () {
                    $("#PyraLeft1").hide();
                });
                $("#BendyRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#BendyRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                });
                // $("#prevlevel1a").attr("style", "opacity: .6");
                $("#nextlevel1a").attr("style", "opacity: .6");
                nextline = 0;
                question = 15;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: (window.screen.width * .18)});
                $("input").not("#searchSubmit").show();
                $("label").show();
                $("#question").show();
                $("#dialogue").html("");
                $("#submitanswer").show();
                $("#question").text("15. What did Trainor try to show Pyra before she was defeated?");
                $("#answera").text("A version of Whitney Trainor that wasn’t popular");
                $("#answerb").text("Beauty not being in the Neo Brigade");
                $("#answerc").text("A version of Pyra as a hero beloved by everyone");
                $("#answerd").text("A version of herself marrying Bendy");
            }
        }
        else if (question === 15)
        {
            if (dialogue === 1)
            {
                $("#TrainorRight1").show();
                $("#TrainorRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Whitney Trainor:</b> A nice fantasy. Though I think her dream could’ve included a lot more people admiring her. I mean, come on, it’s a dream. Go big! This is real life and I wanted everyone to love me.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> I don’t think the stage was big enough for a whole crowd of people from her fantasy.");
            }
            else if (dialogue === 3)
            {
                $("#TrainorRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#TrainorRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({left: (window.screen.width * .48)});
                $("#dialogue").html("<b>Pyra:</b> I know this is where I’d talk more about how I don’t want to be feared, but . . .");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Beauty:</b> Oh. Sorry. You don’t like talking about it. We can move on.");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Pyra:</b> Not that. Who put that fourth choice there?");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Beauty:</b> Oh, that one about you being married to Bendy? Well, I’m sure it was the first choice people could eliminate.");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Pyra:</b> Still, why that of all impossibilities?");

            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Beauty:</b> Well, there was a fantasy of Tel-E in a wedding dress. It’s possible someone could have confused you for her.");

            }
            else if (dialogue === 9)
            {
                $("#BeautyLeft1").animate({left: '-50px'}, function () {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: (window.screen.width * .18)});
                $("#dialogue").html("<b>Bendy:</b> I think it stacks up well with all those choices.");

            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Pyra:</b> Don’t get any ideas. ");

            }
            else if (dialogue === 11)
            {
                $("#BendyLeft1").animate({left: '-50px'}, function () {
                    $("#BendyLeft1").hide();
                });
                $("#PyraRight1").animate({left: (window.screen.width * .78)}, function () {
                    $("#PyraRight1").hide();
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
            if (sessionStorage.getItem("Cyhack") === "true")
            {
                if (dialogue === 1)
                {
                    if (sessionStorage.getItem("quizVisits") === null)
                    {
                        sessionStorage.setItem("quizVisits", 1);
                    }
                    else
                    {
                        sessionStorage.setItem("quizVisits", parseInt(sessionStorage.getItem("quizVisits")) + 1);
                    }

                    if (sessionStorage.getItem("highscore") === null)
                    {
                        sessionStorage.setItem("highscore", "0 out of 15");
                        sessionStorage.setItem("highscoredecimal", 0);
                    }
                    else
                    {
                        if (parseFloat(sessionStorage.getItem("highscoredecimal")) < 0)
                        {
                            sessionStorage.setItem("highscore", "0 out of 15");
                            sessionStorage.setItem("highscoredecimal", 0);
                        }
                    }

                    $("#score").show();
                    $("#score").text("Your score: " + correct + "/15");
                    if (correct === 15)
                        $("#dialogue").html("<b>Beauty:</b> All right! Perfect score! 15 out of 15! Well done.");
                    else if (correct > 10)
                        $("#dialogue").html("<b>Beauty:</b> Hey, you got a " + correct + " out of 15. Nicely done.");
                    else if (correct > 1)
                        $("#dialogue").html("<b>Beauty:</b> Looks like you got a score of " + correct + " out of 15.");
                    else
                        $("#dialogue").html("<b>Beauty:</b> Aw, what? You didn't get a single question right. Did you even read this story? Unless you're Race and you don't like reading about yourself, I'd go back and look at Story 1 for some reference.");
                }
                else if (dialogue === 2 && correct === 0)
                {
                    document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                    document.getElementById("nextlevel1a").disabled = true;
                    $("#backquiz").show();
                    $("#dialogue").html("<b>Beauty:</b> Now that you've finished this, why not try another quiz? Just hit the button on the right to go back to the quiz menu.");
                }
                else if (dialogue === 2)
                {

                    $("#dialogue").html("<b>Cyhack:</b> Heh heh heh. Let me check that score for ya, blondie.");
                }
                else if (dialogue === 3)
                {
                    correct = 0;
                    $("#score").text("Your score: " + correct + "/15");
                    $("#dialogue").html("<b>Beauty:</b> Huh? Wait! What? . . . Did I read that score wrong? Uh . . . okay. It looks like you got a 0. Sorry about that.");
                }
                else if (dialogue === 4)
                {
                    document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                    document.getElementById("nextlevel1a").disabled = true;
                    $("#backquiz").show();
                    $("#dialogue").html("<b>Beauty:</b> Think you can improve on your failure? Try again by going back to the quiz menu and do a different one. You have the best of the Cyhack's wishes for more lousy luck, loser.");
                }

            }
            else
            {
                if (sessionStorage.getItem("quizVisits") === null)
                {
                    sessionStorage.setItem("quizVisits", 1);
                }
                else
                {
                    sessionStorage.setItem("quizVisits", parseInt(sessionStorage.getItem("quizVisits")) + 1);
                }

                if (sessionStorage.getItem("highscore") === null)
                {
                    sessionStorage.setItem("highscore", correct + " out of 15");
                    sessionStorage.setItem("highscoredecimal", (correct / 15));
                }
                else
                {
                    if (parseFloat(sessionStorage.getItem("highscoredecimal")) < (correct / 15))
                    {
                        sessionStorage.setItem("highscore", correct + " out of 15");
                        sessionStorage.setItem("highscoredecimal", (correct / 15));
                    }
                }

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
                        $("#dialogue").html("<b>Beauty:</b> Aw, what? You didn't get a single question right. Did you even read this story?");
                }
                else if (dialogue === 2)
                {
                    document.getElementById("nextlevel1a").setAttribute("style", "opacity: .4");
                    document.getElementById("nextlevel1a").disabled = true;
                    $("#backquiz").show();
                    $("#dialogue").html("Now that you finished this, why not try another quiz? Just hit the button on the right to go back to the quiz menu.");
                }

            }
        }

    }


    $("#submitanswer").click(function () {

        if (question === 1)
        {
            $("#answera").text("Fourize");
            $("#answerb").text("Cyhack");
            $("#answerc").text("Ninja");
            $("#answerd").text("Joey Ex");
            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").html("<b>Beauty:</b> Fourize was not the villain. I wouldn't count on him being as inconspicuous in messing with people as the actual guy. Give it another try.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Nope. Not Cyhack. Trust me. I PROMISE we'll get to her. Just be patient. Of course, I'm assuming you've taken those other quizzes and kept guessing her in those first couple questions.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("<b>Beauty:</b> That’s right. Ninja was the one we faced off against.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Nope. That's a different guy from a different team in a different city. Try again.");
                missed = 1;
            }
        }
        else if (question === 2)
        {

            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").html("<b>Beauty:</b> No, she didn't burn his face. In a position like that, I don't think Pyra would be that cruel.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> That’s right. Pyra held Ninja over a building like she was about to drop him.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("<b>Beauty:</b> Nope. She didn't punch him out. Try again.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Sorry. She didn't let him go. Race let him go at the very end, but Pyra didn't exactly do the same before she spotted the fire.");
                missed = 1;
            }
        }
        else if (question === 3)
        {

            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").html("<b>Beauty:</b> Nope. Linda's her mom. Try again.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Sorry. Courtney wasn't the sister sibling we were looking for. Try again.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("<b>Beauty:</b> No. Rodney's her brother, but not the one with the concert. Give it another shot.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Correct. Whitney Trainor was her name and the villain of this story.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
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

                $("#dialogue").html("<b>Beauty:</b> No, Pyra didn't let the auto tune slip through the cracks with those complaints she gave.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Sorry. Pyra consistently took issue with Trainor's phony display of herself by pretending to be so nice all the time to be popular. Give it another try.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("<b>Beauty:</b> Very good. Pyra had a lot to say about Trainor, but she had no problem with her voice.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Uh, no. I think you could've eliminated that choice right away. I mean, just look what Trainor's wearing and how she contrasts to how Pyra looks. Now, to me, Pyra is beautiful, but you can see what I'm getting at.");
                missed = 1;
            }
        }
        else if (question === 5)
        {

            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").html("<b>Beauty:</b> No. She didn't have a problem with the tickets being too expensive. That's certainly not a thing that would be on her mind since she wasn't the one who would be paying. Try again.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Very good. Pyra said if you don't know the songs, you can't enjoy the show.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "c")
            {

                $("#dialogue").html("<b>Beauty:</b> Well, I could see how the concert being too crowded would be a problem for someone like Pyra, so I'm not saying you weren't paying attention. But you weren't paying enough attention to know the answer to this particular question. That's okay, though. Try again.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Ah. Gotcha. It's not the all of the above choice this time! It was before, but not now. Sure, these are all possible choices for Pyra, but I just put this one in 'cause I couldn't think of a fourth choice that would be good enough. So good luck picking it from those other three.");
                missed = 1;
            }
        }
        else if (question === 6)
        {

            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("<b>Beauty:</b> Correct. Pyra attends school remotely. Since she doesn't want to risk hurting anyone with her powers, she chooses to stay at home.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> No. She doesn't wear a mask to school. Seriously, she's not ashamed of her scars or anything. Also, there's no reverse secret identity thing going on either. So no. No mask involved.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("<b>Beauty:</b> Sorry. She didn't pretend to be social. After all she criticized Whitney Trainor for, she wouldn't be doing the same thing. Although, now that I think about it, that might be a little more interesting to see as a story point where there's these parallels between her and Trainor. Then again, there is a little of that towards the end, so just forget what I said.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Sorry. Everyone doesn't think she has a boyfriend. That being said, I would love to see her with someone. Just to see another person love her. But that wasn't the case. Try again.");
                missed = 1;
            }
        }
        else if (question === 7)
        {

            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("<b>Beauty:</b> No. The Chief didn't arrest his son. I really don't think that would happen if he had evidence of Race being the culprit. Although, this kinda makes me wanna know what Race would have to do for his dad to arrest him.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {

                $("#dialogue").html("<b>Beauty:</b> That's it. Tel-E was the one who got arrested.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("<b>Beauty:</b> Sorry. It wasn't Pyra who got arrested. Now, that would be interesting since it's partly her story and Trainor would've framed her. But, luckily for her, that wasn't the story she had. Try again.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Sorry. Bendy wasn't the one who got arrested. And, on a personal note, I don't think he'd look as good in the outfit we saw.");
                missed = 1;
            }
        }
        else if (question === 8)
        {

            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("<b>Beauty:</b> Nope. It wasn't a mind control thing. Try again.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> No, we didn't see any music notes from her. We saw a lot of weird stuff from her powers, but she didn't have to sing for that to happen.");
            }
            else if ($("input[name=q]:checked").val() === "c")
            {

                $("#dialogue").html("<b>Beauty:</b> Correct. Whitney Trainor can make people see what they've always wanted to see.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Oh! Close! Actually, I don't know if that counts as close if it's the exact opposite. Anyway, in terms of the words, you're close. So just go ahead and pick that other choice.");
                missed = 1;
            }
        }
        else if (question === 9)
        {

            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("<b>Beauty:</b> Correct. Tel-E was wearing a wedding dress. Since Trainor can produce copies of a person's greatest fantasies, this would imply that someone wants to marry Tel-E.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Sorry. She wasn't dressed like a pirate. Admittedly, it would be a welcome substitute for her formal dress, but, unfortunately, it wasn't meant to be.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "c")
            {

                $("#dialogue").html("<b>Beauty:</b> No. She wasn't in a police uniform. Try again.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Uh, no. Not Whitney Trainor's outfit. I don't know why anyone would be picturing her like that. Then again, I was the one who put the false choice there, so I'll have to ask myself first, I suppose.");
                missed = 1;
            }
        }
        else if (question === 10)
        {

            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("<b>Beauty:</b> Sorry. IT's not piano, violin, and viola. Try again.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Nope. They don't play the combination of piano, clarinet, and cello.");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("<b>Beauty:</b> Very good. Brittney, Courtney, and Rodney Trainor play clarinet, violin, cello.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Incorrect. Whitney Trainor's siblings don't all play viola. That is actually the instrument played by our creator and his two siblings. At least, that's if you count our creator playing the instrument if you ignore how much he stinks at it.");
                missed = 1;
            }
        }
        else if (question === 11)
        {
            
            if ($("input[name=q]:checked").val() === "a")
            {
                question11acount++;
                if (question11acount < 30 && (question11bcount < 300 || question11ccount < 300))
                {
                    missed = 1;
                    $("#dialogue").html("<b>Beauty:</b> True. She was prohibited from playing other music. What else? Hint hint.");
                }
                else if (question11acount < 80 && (question11bcount < 300 || question11ccount < 300))
                {
                    missed = 1;
                    $("#dialogue").html("<b>Beauty:</b> Okay. What part of 'That's not the right answer' don't you understand? Because that is not the correct answer. Please try again . . . with a different answer.");
                }
                else if (question11acount < 150 && (question11bcount < 300 || question11ccount < 300))
                {
                    missed = 1;
                    $("#dialogue").html("<b>Beauty:</b> Again, no! Stop guessing that! It's not a! Don't think if you keep guessing it I'll just mark it as correct. Because that's so not happening.");
                }
                else if (question11acount >= 300)
                {
                    missed = 0;
                    $("#dialogue").html("<b>Beauty:</b> Ugh. Alright! Fine! You win! I'll give you the point! There. Now, select choice d so we can move along. Just stop picking this answer.");
                }
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                question11bcount++;
                if (question11bcount < 30 && (question11acount < 300 || question11ccount < 300))
                {
                    missed = 1;
                    $("#dialogue").html("<b>Beauty:</b> She was jealous of her siblings? Well, if this was about someone all of us know pretty well, he'd agree this was true. But for Trainor, not quite.");
                }
                else if (question11bcount < 80 && (question11acount < 300 || question11ccount < 300))
                {
                    missed = 1;
                    $("#dialogue").html("<b>Beauty:</b> Okay. What part of 'That's not the right answer' don't you understand? Because that is not the correct answer. Please try again . . . with a different answer.");
                }
                else if (question11bcount < 150 && (question11acount < 300 || question11ccount < 300))
                {
                    missed = 1;
                    $("#dialogue").html("<b>Beauty:</b> Again, no! Stop guessing that! It's not b! Don't think if you keep guessing it I'll just mark it as correct. Because that's so not happening.");
                }
                else if (question11bcount >= 300)
                {
                    missed = 0;
                    $("#dialogue").html("<b>Beauty:</b> Ugh. Alright! Fine! You win! I'll give you the point! There. Now, select choice d so we can move along. Just stop picking this answer.");
                }

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                question11ccount++;
                if (question11ccount < 30 && (question11acount < 300 || question11bcount < 300))
                {
                    missed = 1;
                    $("#dialogue").html("<b>Beauty:</b> She received hate mail from them? Okay. Good. What else?");
                }
                else if (question11ccount < 80 && (question11acount < 300 || question11bcount < 300))
                {
                    missed = 1;
                    $("#dialogue").html("<b>Beauty:</b> Okay. What part of 'That's not the right answer' don't you understand? Because that is not the correct answer. Please try again . . . with a different answer.");
                }
                else if (question11ccount < 150 && (question11acount < 300 || question11bcount < 300))
                {
                    missed = 1;
                    $("#dialogue").html("<b>Beauty:</b> Again, no! Stop guessing that! It's not c! Don't think if you keep guessing it I'll just mark it as correct. Because that's so not happening.");
                }
                else if (question11ccount >= 300)
                {
                    missed = 0;
                    $("#dialogue").html("<b>Beauty:</b> Ugh. Alright! Fine! You win! I'll give you the point! There. Now, select choice d so we can move along. Just stop picking this answer.");
                }
            }
            else if ($("input[name=q]:checked").val() === "d")
            {

                $("#dialogue").html("<b>Beauty:</b> That's right. Whitney Trainor has a lot of fans, but her family is not one of them. Since they had those problems growing up, she kidnapped her family for not supporting her.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
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

                $("#dialogue").html("<b>Beauty:</b> Sorry. It wasn't the Popularity Fairy.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Correct. Trainor's fantasy fairy was the one who talked to her.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("<b>Beauty:</b> Nope. Not the Music Fairy. Mostly, because she doesn't have the Music Element to produce a Music Fairy, which is a shame, because I'd like to hear that kind of guidance. Like, do you think the guidance would be given in song? Actually, I guess it wouldn't matter since you can't hear any of it, so never mind.");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Sorry. It wasn't the Attention Fairy. Give it another shot.");
                missed = 1;

            }
        }
        else if (question === 13)
        {

            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("<b>Beauty:</b> No. Not Race and Tel-E. We've already seen enough of Trainor using Tel-E against us. It's only fair some other Brigade members get a turn.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Nope. Not Tel-E and Bendy. Come on, guys. Let's maybe not accuse the alien girl of looking worse than she already has. Thanks.");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("<b>Beauty:</b> That’s right. Bendy and Nator were the ones Trainor used to attack us.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();

            }
            else if ($("input[name=q]:checked").val() === "d")
            {

                $("#dialogue").html("<b>Beauty:</b> No, it wasn't me and Pyra. We weren't fighting ourselves. Although, Trainor did create a version of Pyra later on and she also used parts of my own fantasies to attack us. Now, you're still wrong, but that's just a little fact.");
                missed = 1;
            }
        }
        else if (question === 14)
        {

            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("<b>Beauty:</b> Exactly right. Despite Pyra’s tough and sarcastic exterior, she’s actually very shy and doesn’t like being in crowds out of fear that her powers will hurt others.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();
            }
            else if ($("input[name=q]:checked").val() === "b")
            {

                $("#dialogue").html("<b>Beauty:</b> No, she doesn't like Trainor. That's all there is to say on that.");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("<b>Beauty:</b> Uh, no. Pyra knows her powers work just fine, which is kinda the problem if you catch my drift.");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> Well . . . she thought she would hurt SOMEBODY. Was it me? Not really. Don't worry. I have no problem with that. Really. It's cool. Just try another choice.");
                missed = 1;

            }
        }
        else if (question === 15)
        {

            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("<b>Beauty:</b> Nope. Not a version of an unpopular Trainor. I think it's safe to assume anything about Whitney Trainor is pretty vacant from Pyra's mind. Even all the negative stuff. Just none of it is probably enough for her.");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {

                $("#dialogue").html("<b>Beauty:</b> No. Not me not being in the Neo Brigade. For Pyra, that's more of a memory than a fantasy. Try again.");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("<b>Beauty:</b> That’s right. With Pyra not feeling like people liked her, her biggest dream was to be only admired and not feared.");
                document.getElementById("nextlevel1a").setAttribute("style", "opacity: 1");
                document.getElementById("nextlevel1a").disabled = false;
                nextline = 1;
                if (missed === 0)
                    correct++;
                missed = 0;
                $("#submitanswer").hide();

            }
            else if ($("input[name=q]:checked").val() === "d")
            {
                $("#dialogue").html("<b>Beauty:</b> A version of herself married to Bendy? Well, as much as I'd like to see that, that's not what we're looking for. But I'll keep a lookout for that for the future just in case.");
                missed = 1;

            }
        }

    });
});

function checkResolution()
{
    $("section").attr("style", "margin-top: 50px; padding-bottom: 100px; width:100%; height: " + window.screen.height + "px");
    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    $(".quizimageleft").css({"top": (window.screen.height * .32), "height": (window.screen.height * .5), "width": (window.screen.width * .35)});
    $(".quizimageright").css({"top": (window.screen.height * .32), "left": (window.screen.width * .8), "height": (window.screen.height * .5), "width": (window.screen.width * .35)});

    $("#backquiz").css({"top": (window.screen.height * .508), "left": (window.screen.width * .76), "height": (window.screen.height * .078), "width": (window.screen.width * .19)});
    $("#score").css({"top": (window.screen.height * .2)});


    $("#score").hide();
    document.getElementById("prevlevel1a").setAttribute("style", "opacity: .4");
    document.getElementById("prevlevel1a").disabled = true;
    $("#backquiz").hide();
    $("input").hide();
    $("label").hide();
    $("#question").hide();
    $("#submitanswer").hide();
    $("img").hide();
    $("#searchIcon").show();
    $("#BeautyLeft1").show();
    $("#dialogue").html("<b>Beauty:</b> Hey, guys. As you can see, I'll be hosting the quiz for the novella, To Love or to Die (as in me or you will). Now, if you're one of those people who like to take quizzes on fiction before going through the reading material, good for you. For the rest of you, standard disclaimer: SPOILERS AHEAD! Please read the novella before continuing. Thank you.");
    $("#BeautyLeft1").animate({left: (window.screen.width * .35)});

    var position = document.getElementById("menudiv").clientHeight;


    if (question === 0 || question === 16)
    {
        $(".quizimageleft:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .35), "height": (window.screen.height * .5), "width": (window.screen.width * .3)});
    }
    else
        $(".quizimageleft:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .22), "height": (window.screen.height * .5), "width": (window.screen.width * .3)});
    $(".quizimageright:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .8), "left": (window.screen.width * .48), "height": (window.screen.height * .5), "width": (window.screen.width * .3)});

    if (window.screen.width > 550 && window.screen.width < 700 && window.screen.height > 900)
    {
        $(".quizheading").css({"top": position, "height": (window.screen.height * .07), "width": (window.screen.width * .69)});
        $(".submitdiv").css({"top": position, "left": (window.screen.width * .69), "height": (window.screen.height * .07), "width": (window.screen.width * .31)});
    }
    else
    {
        $(".quizheading").css({"top": position, "height": (window.screen.height * .1), "width": (window.screen.width * .69)});
        $(".submitdiv").css({"top": position, "left": (window.screen.width * .69), "height": (window.screen.height * .1), "width": (window.screen.width * .31)});
    }

    $("#formdiv").hide();
    //$("#backquiz").show();



    if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("section").css({"height": (window.screen.height * 1.9)});

        $(".selector1").css({"top": (window.screen.height * .226667), "left": (window.screen.width * .0385)});
        $(".selector2").css({"top": (window.screen.height * .226667), "left": (window.screen.width * .462)});
        $(".selector3").css({"top": (window.screen.height * .35), "left": (window.screen.width * .0385)});
        $(".selector4").css({"top": (window.screen.height * .35), "left": (window.screen.width * .462)});

        $(".answer1label").css({"top": (window.screen.height * .263), "left": (window.screen.width * .041)});
        $(".answer2label").css({"top": (window.screen.height * .263), "left": (window.screen.width * .465)});
        $(".answer3label").css({"top": (window.screen.height * .386), "left": (window.screen.width * .041)});
        $(".answer4label").css({"top": (window.screen.height * .386), "left": (window.screen.width * .465)});

        $(".answer1").css({"top": (window.screen.height * .226667), "left": (window.screen.width * .069)});
        $(".answer2").css({"top": (window.screen.height * .226667), "left": (window.screen.width * .5)});
        $(".answer3").css({"top": (window.screen.height * .35), "left": (window.screen.width * .069)});
        $(".answer4").css({"top": (window.screen.height * .35), "left": (window.screen.width * .5)});

        $(".quizimageleft").css({"top": (window.screen.height * .42), "width": (window.screen.width * .4), "height": (window.screen.height * .54)});
        $(".quizimageright").css({"top": (window.screen.height * .42), "left": (window.screen.width * .8), "width": (window.screen.width * .4), "height": (window.screen.height * .54)});
        $("#backquiz").css({"top": (window.screen.height * .508), "left": (window.screen.width * .73), "height": (window.screen.height * .158), "width": (window.screen.width * .25)});
    }
    else if (window.screen.width > 700)
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

        if (window.screen.height > 1000)
        {
            $(".quizimageleft").css({"top": (window.screen.height * .39), "width": (window.screen.width * .4), "height": (window.screen.height * .5)});
            $(".quizimageright").css({"top": (window.screen.height * .39), "left": (window.screen.width * .8), "width": (window.screen.width * .4), "height": (window.screen.height * .5)});
        }

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
        $(".quizimageright").css({"top": (window.screen.height * .39), "left": (window.screen.width * .8), "width": (window.screen.width * .45), "height": (window.screen.height * .5)});
        $("section").attr("style", "margin-top: 50px; padding-bottom: 0px; width:100%; height: " + window.screen.height + "px");
        $("#backquiz").css({"top": (window.screen.height * .508), "left": (window.screen.width * .73), "height": (window.screen.height * .118), "width": (window.screen.width * .25)});
    }
}

function checkResolution2()
{
    //$("section").attr("style", "margin-top: 50px; padding-bottom: 100px; width:100%; height: " + window.screen.height + "px");
    $("section").css({"margin-top": "50px", "padding-bottom": "100px", "width": window.screen.width, "height": window.screen.height});


    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    sectionWidth = window.screen.width;
    sectionHeight = window.screen.height;

    $(".quizimageleft").css({"top": (window.screen.height * .32), "height": (window.screen.height * .5), "width": (window.screen.width * .35)});
    $(".quizimageright").css({"top": (window.screen.height * .32), "height": (window.screen.height * .5), "width": (window.screen.width * .35)});

    quizimageTop = (window.screen.height * .32);
    quizimageHeight = (window.screen.height * .5);
    quizimageWidth = (window.screen.width * .35);

    $("#backquiz").css({"top": (window.screen.height * .508), "left": (window.screen.width * .76), "height": (window.screen.height * .078), "width": (window.screen.width * .19)});
    $("#score").css({"top": (window.screen.height * .2)});

    backquizTop = (window.screen.height * .508);
    backquizLeft = (window.screen.width * .76);
    backquizHeight = (window.screen.height * .078);
    backquizWidth = (window.screen.width * .19);

    scoreTop = (window.screen.height * .2);


    $("#score").hide();
    document.getElementById("prevlevel1a").setAttribute("style", "opacity: .4");
    document.getElementById("prevlevel1a").disabled = true;
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

    startLeft = (window.screen.width * .35);

    var position = document.getElementById("menudiv").clientHeight;


    if (question === 0 || question === 16)
    {
        $(".quizimageleft:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .35), "height": (window.screen.height * .5), "width": (window.screen.width * .3)});

        leftvisibleTop = (window.screen.height * .32);
        leftvisibleLeft = (window.screen.width * .35);
        leftvisibleHeight = (window.screen.height * .5);
        leftvisibleWidth = (window.screen.width * .3);
    }
    else
    {
        $(".quizimageleft:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .22), "height": (window.screen.height * .5), "width": (window.screen.width * .3)});

        leftvisibleTop = (window.screen.height * .32);
        leftvisibleLeft = (window.screen.width * .22);
        leftvisibleHeight = (window.screen.height * .5);
        leftvisibleWidth = (window.screen.width * .3);
    }
    $(".quizimageright:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .48), "height": (window.screen.height * .5), "width": (window.screen.width * .3)});

    rightvisibleLeft = (window.screen.width * .48);


    if (window.screen.width > 550 && window.screen.width < 700 && window.screen.height > 900)
    {
        $(".quizheading").css({"top": position, "height": (window.screen.height * .07), "width": (window.screen.width * .69)});
        $(".submitdiv").css({"top": position, "left": (window.screen.width * .69), "height": (window.screen.height * .07), "width": (window.screen.width * .31)});

        headingHeight = (window.screen.height * .07);
        headingWidth = (window.screen.width * .69);

        submitLeft = (window.screen.width * .69);
        submitHeight = (window.screen.height * .07);
        submitWidth = (window.screen.width * .31);
    }
    else
    {
        $(".quizheading").css({"top": position, "height": (window.screen.height * .1), "width": (window.screen.width * .69)});
        $(".submitdiv").css({"top": position, "left": (window.screen.width * .69), "height": (window.screen.height * .1), "width": (window.screen.width * .31)});

        headingHeight = (window.screen.height * .1);
        headingWidth = (window.screen.width * .69);

        submitLeft = (window.screen.width * .69);
        submitHeight = (window.screen.height * .1);
        submitWidth = (window.screen.width * .31);
    }

    $("#formdiv").hide();
    //$("#backquiz").show();



    if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("section").css({"height": (window.screen.height * 1.9)});

        sectionHeight = (window.screen.height * 1.9);

        $(".selector1").css({"top": (window.screen.height * .226667), "left": (window.screen.width * .0385)});
        $(".selector2").css({"top": (window.screen.height * .226667), "left": (window.screen.width * .462)});
        $(".selector3").css({"top": (window.screen.height * .35), "left": (window.screen.width * .0385)});
        $(".selector4").css({"top": (window.screen.height * .35), "left": (window.screen.width * .462)});

        $(".answer1label").css({"top": (window.screen.height * .263), "left": (window.screen.width * .041)});
        $(".answer2label").css({"top": (window.screen.height * .263), "left": (window.screen.width * .465)});
        $(".answer3label").css({"top": (window.screen.height * .386), "left": (window.screen.width * .041)});
        $(".answer4label").css({"top": (window.screen.height * .386), "left": (window.screen.width * .465)});

        $(".answer1").css({"top": (window.screen.height * .226667), "left": (window.screen.width * .069)});
        $(".answer2").css({"top": (window.screen.height * .226667), "left": (window.screen.width * .5)});
        $(".answer3").css({"top": (window.screen.height * .35), "left": (window.screen.width * .069)});
        $(".answer4").css({"top": (window.screen.height * .35), "left": (window.screen.width * .5)});

        selector12Top = (window.screen.height * .226667);
        selector13Left = (window.screen.width * .0385);
        selector24Left = (window.screen.width * .462);
        selector34Top = (window.screen.height * .35);

        answer12labelTop = (window.screen.height * .263);
        answer13labelLeft = (window.screen.width * .041);
        answer24labelLeft = (window.screen.width * .465);
        answer34labelTop = (window.screen.height * .386);

        answer12Top = (window.screen.height * .226667);
        answer13Left = (window.screen.width * .069);
        answer24Left = (window.screen.width * .5);
        answer34Top = (window.screen.height * .35);

        $(".quizimageleft").css({"top": (window.screen.height * .42), "width": (window.screen.width * .4), "height": (window.screen.height * .54)});
        $(".quizimageright").css({"top": (window.screen.height * .42), "width": (window.screen.width * .4), "height": (window.screen.height * .54)});
        $("#backquiz").css({"top": (window.screen.height * .508), "left": (window.screen.width * .73), "height": (window.screen.height * .158), "width": (window.screen.width * .25)});

        quizimageTop = (window.screen.height * .42);
        quizimageWidth = (window.screen.width * .4);
        quizimageHeight = (window.screen.height * .54);


        backquizTop = (window.screen.height * .508);
        backquizLeft = (window.screen.width * .73);
        backquizHeight = (window.screen.height * .158);
        backquizWidth = (window.screen.width * .25);
    }
    else if (window.screen.width > 700)
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

        selector12Top = (window.screen.height * .166667);
        selector13Left = (window.screen.width * .0385);
        selector24Left = (window.screen.width * .462);
        selector34Top = (window.screen.height * .25);

        answer12labelTop = (window.screen.height * .193);
        answer13labelLeft = (window.screen.width * .041);
        answer24labelLeft = (window.screen.width * .465);
        answer34labelTop = (window.screen.height * .276);

        answer12Top = (window.screen.height * .166667);
        answer13Left = (window.screen.width * .069);
        answer24Left = (window.screen.width * .5);
        answer34Top = (window.screen.height * .25);

        if (window.screen.height > 1000)
        {
            $(".quizimageleft").css({"top": (window.screen.height * .39), "width": (window.screen.width * .4), "height": (window.screen.height * .5)});
            $(".quizimageright").css({"top": (window.screen.height * .39), "width": (window.screen.width * .4), "height": (window.screen.height * .5)});

            quizimageTop = (window.screen.height * .39);
            quizimageWidth = (window.screen.width * .4);
            quizimageHeight = (window.screen.height * .5);
        }

    }
    else
    {
        if (question === 0 || question === 16)
        {
            $(".quizimageleft:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .35), "height": (window.screen.height * .5), "width": (window.screen.width * .45)});

            leftvisibleTop = (window.screen.height * .32);
            leftvisibleLeft = (window.screen.width * .35);
            leftvisibleHeight = (window.screen.height * .5);
            leftvisibleWidth = (window.screen.width * .45);
        }
        else
        {
            $(".quizimageleft:visible").css({"top": (window.screen.height * .32), "left": (window.screen.width * .22), "height": (window.screen.height * .5), "width": (window.screen.width * .45)});

            leftvisibleTop = (window.screen.height * .32);
            leftvisibleLeft = (window.screen.width * .22);
            leftvisibleHeight = (window.screen.height * .5);
            leftvisibleWidth = (window.screen.width * .45);
        }

        $(".quizimageleft").css({"top": (window.screen.height * .39), "width": (window.screen.width * .45), "height": (window.screen.height * .5)});
        $(".quizimageright").css({"top": (window.screen.height * .39), "width": (window.screen.width * .45), "height": (window.screen.height * .5)});
        //$("section").attr("style", "margin-top: 50px; padding-bottom: 0px; width:100%; height: " + window.screen.height + "px");
        $("section").css({"margin-top": "50px", "padding-bottom": "0px", "width": window.screen.width, "height": window.screen.height});

        $("#backquiz").css({"top": (window.screen.height * .508), "left": (window.screen.width * .73), "height": (window.screen.height * .118), "width": (window.screen.width * .25)});

        quizimageTop = (window.screen.height * .39);
        quizimageWidth = (window.screen.width * .45);
        quizimageHeight = (window.screen.height * .5);

        backquizTop = (window.screen.height * .508);
        backquizLeft = (window.screen.width * .73);
        backquizHeight = (window.screen.height * .118);
        backquizWidth = (window.screen.width * .25);
    }
}

function resizeResolution()
{
    //$("section").attr("style", "margin-top: 50px; padding-bottom: 100px; width:100%; height: " + window.screen.height + "px");
    $("section").css({"margin-top": "50px", "padding-bottom": "100px", "width": sectionWidth, "height": sectionHeight});


    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");


    $(".quizimageleft").css({"top": quizimageTop, "height": quizimageHeight, "width": quizimageWidth});
    $(".quizimageright").css({"top": quizimageTop, "height": quizimageHeight, "width": quizimageWidth});


    $("#backquiz").css({"top": backquizTop, "left": backquizLeft, "height": backquizHeight, "width": backquizWidth});
    $("#score").css({"top": scoreTop});


    $("#score").hide();
    document.getElementById("prevlevel1a").setAttribute("style", "opacity: .4");
    document.getElementById("prevlevel1a").disabled = true;
    $("#backquiz").hide();
    $("input").hide();
    $("label").hide();
    $("#question").hide();
    $("#submitanswer").hide();
    $("img").hide();
    $("#searchIcon").show();
    $("#BeautyLeft1").show();
    $("#dialogue").html("<b>Beauty:</b> Hi");
    //$("#BeautyLeft1").animate({left: startLeft});


    var position = document.getElementById("menudiv").clientHeight;


    if (question === 0 || question === 16)
    {
        $(".quizimageleft:visible").css({"top": leftvisibleTop, "left": leftvisibleLeft, "height": leftvisibleHeight, "width": leftvisibleWidth});

    }
    else
    {
        $(".quizimageleft:visible").css({"top": leftvisibleTop, "left": leftvisibleLeft, "height": leftvisibleHeight, "width": leftvisibleWidth});

    }
    $(".quizimageright:visible").css({"top": leftvisibleTop, "left": rightvisibleLeft, "height": leftvisibleHeight, "width": leftvisibleWidth});



    if (window.screen.width > 550 && window.screen.width < 700 && window.screen.height > 900)
    {
        $(".quizheading").css({"top": position, "height": headingHeight, "width": headingWidth});
        $(".submitdiv").css({"top": position, "left": submitLeft, "height": submitHeight, "width": submitWidth});

    }
    else
    {
        $(".quizheading").css({"top": position, "height": headingHeight, "width": headingWidth});
        $(".submitdiv").css({"top": position, "left": submitLeft, "height": submitHeight, "width": submitWidth});

    }

    $("#formdiv").hide();
    //$("#backquiz").show();



    if (window.screen.height < 900 && window.screen.width < 900 && window.screen.height < window.screen.width)
    {
        $("section").css({"height": sectionHeight});

        $(".selector1").css({"top": selector12Top, "left": selector13Left});
        $(".selector2").css({"top": selector12Top, "left": selector24Left});
        $(".selector3").css({"top": selector34Top, "left": selector13Left});
        $(".selector4").css({"top": selector34Top, "left": selector24Left});

        $(".answer1label").css({"top": answer12labelTop, "left": answer13labelLeft});
        $(".answer2label").css({"top": answer12labelTop, "left": answer24labelLeft});
        $(".answer3label").css({"top": answer34labelTop, "left": answer13labelLeft});
        $(".answer4label").css({"top": answer34labelTop, "left": answer24labelLeft});

        $(".answer1").css({"top": answer12Top, "left": answer13Left});
        $(".answer2").css({"top": answer12Top, "left": answer24Left});
        $(".answer3").css({"top": answer34Top, "left": answer13Left});
        $(".answer4").css({"top": answer34Top, "left": answer24Left});

        $(".quizimageleft").css({"top": quizimageTop, "width": quizimageWidth, "height": quizimageHeight});
        $(".quizimageright").css({"top": quizimageTop, "width": quizimageWidth, "height": quizimageHeight});
        $("#backquiz").css({"top": backquizTop, "left": backquizLeft, "height": backquizHeight, "width": backquizWidth});

    }
    else if (window.screen.width > 700)
    {
        $(".selector1").css({"top": selector12Top, "left": selector13Left});
        $(".selector2").css({"top": selector12Top, "left": selector24Left});
        $(".selector3").css({"top": selector34Top, "left": selector13Left});
        $(".selector4").css({"top": selector34Top, "left": selector24Left});

        $(".answer1label").css({"top": answer12labelTop, "left": answer13labelLeft});
        $(".answer2label").css({"top": answer12labelTop, "left": answer24labelLeft});
        $(".answer3label").css({"top": answer34labelTop, "left": answer13labelLeft});
        $(".answer4label").css({"top": answer34labelTop, "left": answer24labelLeft});

        $(".answer1").css({"top": answer12Top, "left": answer13Left});
        $(".answer2").css({"top": answer12Top, "left": answer24Left});
        $(".answer3").css({"top": answer34Top, "left": answer13Left});
        $(".answer4").css({"top": answer34Top, "left": answer24Left});


        if (window.screen.height > 1000)
        {
            $(".quizimageleft").css({"top": quizimageTop, "width": quizimageWidth, "height": quizimageHeight});
            $(".quizimageright").css({"top": quizimageTop, "width": quizimageWidth, "height": quizimageHeight});

        }

    }
    else
    {
        if (question === 0 || question === 16)
        {
            $(".quizimageleft:visible").css({"top": leftvisibleTop, "left": leftvisibleLeft, "height": leftvisibleHeight, "width": leftvisibleWidth});

        }
        else
        {
            $(".quizimageleft:visible").css({"top": leftvisibleTop, "left": leftvisibleLeft, "height": leftvisibleHeight, "width": leftvisibleWidth});

        }

        $(".quizimageleft").css({"top": quizimageTop, "width": quizimageWidth, "height": quizimageHeight});
        $(".quizimageright").css({"top": quizimageTop, "width": quizimageWidth, "height": quizimageHeight});
        //$("section").attr("style", "margin-top: 50px; padding-bottom: 0px; width:100%; height: " + window.screen.height + "px");
        $("section").css({"margin-top": "50px", "padding-bottom": "0px", "width": sectionWidth, "height": sectionHeight});

        $("#backquiz").css({"top": backquizTop, "left": backquizLeft, "height": backquizHeight, "width": backquizWidth});

    }
}