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
                $("#NinjaRight1").show();
                $("#NinjaRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Ninja:</b> They say a warrior is judged not by his strength but by the collective strength of those he can humiliate while remaining unscathed.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> Exactly who are you quoting on that?");
            }
            else if (dialogue === 3)
            {
                $("#NinjaRight1").animate({right: '0px'}, function() {
                    $("#NinjaRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Don’t listen to him. He’s just in his half-Zen half-jerk mode.");
            }
            else if (dialogue === 4)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#NinjaLeft1").show();
                $("#NinjaLeft1").animate({left: '22%'});
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
                $("#NinjaLeft1").animate({left: '0px'}, function() {
                    $("#NinjaLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Anyway, like a number of characters, Ninja was inspired by one from Teen Titans. In this case, Ninja came from Kyd Wykkyd.");


            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Pyra:</b> Except Ninja can talk. And somehow, his soft spoken words are still too big of a change.");
            }
            else if (dialogue === 9)
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
                question = 2;
                dialogue = 0;
                // $("#BeautyLeft1").animate({left: '22%'});
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
                $("#NinjaRight1").show();
                $("#NinjaRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Ninja:</b> Just to give her that look of a deranged killer in case she needed more of it.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> I was only trying to scare you. I wasn’t really gonna drop you.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Ninja:</b> So I can choose not to pay protection money when you come to collect?");
            }
            else if (dialogue === 4)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> Hang on. Why couldn’t you just teleport away when she held you like that?");
            }
            else if (dialogue === 5)
            {
                $("#dialogue").html("<b>Ninja:</b> Uh, same reason I was able to use your arm to shoot lasers without pressing any buttons. Nobody cares!");
            }
            else if (dialogue === 6)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Well said, Ninja. Well said. ");

            }
            else if (dialogue === 7)
            {
                 $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NinjaRight1").animate({right: '0px'}, function() {
                    $("#NinjaRight1").hide();
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
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Ugh. She is such an attention hog. Does she really need this big a role in this thing?");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> Well one of her Charevo Elements is Attention. And it's not like the attention of a town cryer ringing a bell to deliver news.");
            }
            else if (dialogue === 3)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#TrainorLeft1").show();
                $("#TrainorLeft1").animate({left: '22%'});
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
                $("#TrainorLeft1").animate({left: '0px'}, function() {
                    $("#TrainorLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Fun fact: Trainor is named after singer Meghan Trainor. When our creator wanted a pop star villain, he decided to give her a real pop star's name. As it turns out, Trainor was the only one he liked, so the name was chosen.");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Pyra:</b> Isn't that one of, like, the least controversial real-life singers? Kind of ironic a villain would have that name.");


            }
            else if (dialogue === 8)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#TrainorLeft1").show();
                $("#TrainorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Whitney Trainor:</b> It's always the person you least suspect.");


            }
            else if (dialogue === 9)
            {
                 $("#TrainorLeft1").animate({left: '0px'}, function() {
                    $("#TrainorLeft1").hide();
                });
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
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
                $("#PyraRight1").animate({right: '22%'});
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
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#TrainorLeft1").show();
                $("#TrainorLeft1").animate({left: '22%'});
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
                 $("#TrainorLeft1").animate({left: '0px'}, function() {
                    $("#TrainorLeft1").hide();
                });
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
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
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> Gee, Pyra, how do you think most music was enjoyed the first time?");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> Yeah, it wasn't just implanted into them so they could like it before they heard it.");
            }
            else if (dialogue === 3)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> You know what I mean.  You're paying money, standing in line, and making the drive there and back to listen to music you don't know. You can waste your time on that. Just don't waste mine.");
            }
            else if (dialogue === 4)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
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
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> Gee, our creator seems like a real open-minded guy, by which I mean he isn’t.");

            }
            else if (dialogue === 8)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> And yet, for some reason, you're NOT his favorite.");

            }
            else if (dialogue === 9)
            {
                 $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
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
                $("#BendyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Bendy:</b> But she still goes to school? Man, if I had her excuse, I'd just make it into one long vacation and just go skateboarding.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> It's not an excuse. It's a real problem I've had. Just because you're made of rubber with a big child-proof body, it doesn't mean others aren't at risk.");
            }
            else if (dialogue === 3)
            {
                $("#BendyRight1").animate({right: '0px'}, function() {
                    $("#BendyRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
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
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> See, this is why you would make a terrible counselor for someone like her.");

            }
            else if (dialogue === 7)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> I still find it weird that Mister Sensitive here is even allowed to go to school with a mechanical body full of guns. What school board approved of that?");

            }
            else if (dialogue === 8)
            {
                $("#dialogue").html("<b>Tel-E:</b> Given Nator's intellect, I suppose schools will do just about anything to get their test scores up.");

            }
            else if (dialogue === 9)
            {
                 $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
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
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Race:</b> You know, of all of us for my dad to arrest, for some reason, I always thought it would be Nator.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#NatorLeft1").show();
                $("#NatorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Nator:</b> What? You'd pick me over the alien? It's 'cause she's your best friend, right?");
            }
            else if (dialogue === 3)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Come on, Nator. Don't be mad. You do have those qualities that just scream out “Mad Scientist!”");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Nator:</b> I do not. Now, if anyone needs me, I'll be working on my ray gun for absorbing human skin.");
            }
            else if (dialogue === 5)
            {
                $("#NatorLeft1").animate({left: '0px'}, function() {
                    $("#NatorLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> He's trying to create his own organic body. I can already tell.");
            }
            else if (dialogue === 6)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> I still can't believe the Chief didn't trust me and thought I would commit a kidnapping.");

            }
            else if (dialogue === 7)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#ChiefLeft1").show();
                $("#ChiefLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Chief:</b> The mechanical kid's potentially criminal inventions notwithstanding, you can't be too careful with people from another planet. They could have some crazy powers they might use on you.");

            }
            else if (dialogue === 8)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Okay, who's gonna tell him?");

            }
            else if (dialogue === 9)
            {
                 $("#ChiefLeft1").animate({left: '0px'}, function() {
                    $("#ChiefLeft1").hide();
                });
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
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
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> And ironically, for that power to activate, people have to see her first.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#TrainorLeft1").show();
                $("#TrainorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Whitney Trainor:</b> There's nothing wrong with providing a nice little bonus for going to one of my shows. Some artists give free wristbands, I give you a view of happiness.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Pyra:</b> It's a good thing you don't have that mind control choice for a power. That's the only way you can get me to listen to your music, and that cannot happen.");
            }
            else if (dialogue === 4)
            {
                $("#TrainorLeft1").animate({left: '0px'}, function() {
                    $("#TrainorLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
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
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                });
                $("#TrainorRight1").show();
                $("#TrainorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Whitney Trainor:</b> It's one thing to make people see their nightmares and want to escape. It's another to make them see what they love and not want to leave. That's where my Charevo Element of Popularity comes in to sweeten up the sights.");

            }
            else if (dialogue === 8)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Too bad you don't have that fear power. You're popularity would be gone in an instant.");

            }
            else if (dialogue === 9)
            {
                $("#dialogue").html("<b>Whitney Trainor:</b> Oh, I think I'd manage. I could give myself a musical horror image and profit from that. It could be like Alice Cooper with more realistic horror effects.");

            }
            else if (dialogue === 10)
            {
                 $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#TrainorRight1").animate({right: '0px'}, function() {
                    $("#TrainorRight1").hide();
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
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Race:</b> How do you know she doesn't want to marry someone else?");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> I think I'd know.");
            }
            else if (dialogue === 3)
            {
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> So who was the one with the fantasy?");
            }
            else if (dialogue === 4)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> Well, if from what I know about relationships is a hundred percent accurate, which it must be, we can take into account the idea of opposites attract and seeming resentment hiding true love. It's Nator!");
            }
            else if (dialogue === 5)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> No way! Like I'd ever be interested in Tel-E.");
            }
            else if (dialogue === 6)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> Thank goodness.");

            }
            else if (dialogue === 7)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Are we really starting a witch hunt over a crush on Tel-E?");

            }
            else if (dialogue === 8)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> She's right. Let's ask Trainor.");

            }
            else if (dialogue === 9)
            {
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                });
                $("#TrainorRight1").show();
                $("#TrainorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Whitney Trainor:</b> If you're trying to get it out of me, I'm afraid all fantasies and dreams are confidential.");

            }
            else if (dialogue === 10)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Right. And I assume all four of those choices were real fantasy wardrobes you found too?");

            }
            else if (dialogue === 11)
            {
                $("#dialogue").html("<b>Whitney Trainor:</b> Well, you know how kids dream of being pirates. Though, strangely, I didn't find too many fantasies of people becoming me. Oh well. Maybe that'll change after my next album.");
            }
            else if (dialogue === 12)
            {
                 $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#TrainorRight1").animate({right: '0px'}, function() {
                    $("#TrainorRight1").hide();
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
                $("#TrainorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Whitney Trainor:</b> In other words, pretentious wind toy, pretentious string toy, and big pretentious string toy.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#Tel-ELeft1").show();
                $("#Tel-ELeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> I play clarinet. It doesn't look THAT pretentious.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Whitney Trainor:</b> Seeing as how you couldn't defend the instrument entirely, I don't know if any defense is gonna do it.");
            }
            else if (dialogue === 4)
            {
                $("#Tel-ELeft1").animate({left: '0px'}, function() {
                    $("#Tel-ELeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
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
                 $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#TrainorRight1").animate({right: '0px'}, function() {
                    $("#TrainorRight1").hide();
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
                $("#RaceRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Race:</b> And I guess she wasn't a fan of her family's music either.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#TrainorLeft1").show();
                $("#TrainorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Whitney Trainor:</b> My whole thing with my family is basically a more twisted version of the Jazz Singer. Except they're all musicians who think they're better than me.");
            }
            else if (dialogue === 3)
            {
                $("#dialogue").html("<b>Race:</b> Hey, I've had to live with the pressure of following in my family's footsteps in law enforcement. You don't see me tying my dad to his desk.");
            }
            else if (dialogue === 4)
            {
                $("#TrainorLeft1").animate({left: '0px'}, function() {
                    $("#TrainorLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> I've got a whole case of duct tape if you need it, though.");
            }
            else if (dialogue === 5)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#TrainorLeft1").show();
                $("#TrainorLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Whitney Trainor:</b> Oh, sure. You got to do his job better than him and he respects you for it. Poor you.");
            }
            else if (dialogue === 6)
            {
                $("#TrainorLeft1").animate({left: '0px'}, function() {
                    $("#TrainorLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Yeah, Race. It's not like the Chief has ever grilled you for not being able to tackle criminals like him in his prime.");

            }
            else if (dialogue === 7)
            {
                $("#dialogue").html("<b>Race:</b> No. But I still get notes today.");

            }
            else if (dialogue === 8)
            {
                 $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#RaceRight1").animate({right: '0px'}, function() {
                    $("#RaceRight1").hide();
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
                $("#TrainorRight1").animate({right: '22%'});
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
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> I find it hard to believe one of Trainor's Charevo Elements is fantasy. I thought she was all about popularity and all that other shallow stuff.");
            }
            else if (dialogue === 5)
            {
                $("#TrainorRight1").animate({right: '0px'}, function() {
                    $("#TrainorRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> To be fair, that is what you thought of me at first.");
            }
            else if (dialogue === 6)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#TrainorLeft1").show();
                $("#TrainorLeft1").animate({left: '22%'});
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
                 $("#TrainorLeft1").animate({left: '0px'}, function() {
                    $("#TrainorLeft1").hide();
                });
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
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
                $("#TrainorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Whitney Trainor:</b> In their fantasies, Bendy dreamed of being the next Captain D and Nator dreamed of being an Olympic mathematician. The latter’s math weapons were certainly a lovely sight for me.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Hang on. Let’s back up a bit. Olympic mathematician?");
            }
            else if (dialogue === 3)
            {
                $("#TrainorRight1").animate({right: '0px'}, function() {
                    $("#TrainorRight1").hide();
                });
                $("#NatorRight1").show();
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> A guy can dream, can’t he? One day we’ll have more intellectual sports that get celebrated every four years. And I’ll be its champion. It could happen.");
            }
            else if (dialogue === 4)
            {
                $("#dialogue").html("<b>Pyra:</b> Yeah, I don’t think inventing a sport that no one wants to play makes you a champion.");
            }
            else if (dialogue === 5)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#TrainorRight1").show();
                $("#TrainorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Whitney Trainor:</b> There’s nothing wrong with celebrating intelligence. That is my kind of guy, you know.");
            }
            else if (dialogue === 6)
            {
                $("#dialogue").html("<b>Pyra:</b> Speaking of not celebrating intelligence, Bendy wants to be Captain D. Someone wanna explain that?");

            }
            else if (dialogue === 7)
            {
                $("#TrainorRight1").animate({right: '0px'}, function() {
                    $("#TrainorRight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Bendy:</b> I don’t wanna do EVERYTHING he did. I just wanna be as cool as he used to be, and then take over his TV show.");

            }
            else if (dialogue === 8)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BeautyLeft1").show();
                $("#BeautyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Oh, enough shows get rebooted these days. If the good ones won’t be left alone, at least leave the bad shows out of this. ");

            }
            else if (dialogue === 9)
            {
                 $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyRight1").animate({right: '0px'}, function() {
                    $("#BendyRight1").hide();
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
                $("#NatorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Nator:</b> Not to interrupt, but I think we kind of gave this answer away a few questions back.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#RaceLeft1").show();
                $("#RaceLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Race:</b> I think this is for people who’ve been hitting the next button to skip all our dialogue.");
            }
            else if (dialogue === 3)
            {
                $("#NatorRight1").animate({right: '0px'}, function() {
                    $("#NatorRight1").hide();
                });
                $("#BeautyRight1").show();
                $("#BeautyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Beauty:</b> Well, in any case, Pyra can only really fight when she’s with people she doesn’t think will be afraid of her if she hurts them. Those are her friends and pretty much any villain.");
            }
            else if (dialogue === 4)
            {
                $("#RaceLeft1").animate({left: '0px'}, function() {
                    $("#RaceLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Yeah. After I burned my friend’s brother, there was no one I could be around. I know I can be hard on you guys sometimes. But I’m glad to have you all. Without you guys, I’d just be alone.");
            }
            else if (dialogue === 5)
            {
                $("#BeautyRight1").animate({right: '0px'}, function() {
                    $("#BeautyRight1").hide();
                });
                $("#Tel-ERight1").show();
                $("#Tel-ERight1").animate({right: '22%'});
                $("#dialogue").html("<b>Tel-E:</b> We’re always here for you, Pyra. Don’t ever forget that.");
            }
            else if (dialogue === 6)
            {
                $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> Man, way to go, Beauty. We had all this fun dialogue in these questions and you had to bring it down with Pyra’s problem. I’m sure no one’s gonna be skipping this section here.");

            }
            else if (dialogue === 7)
            {
                $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#PyraLeft1").show();
                $("#PyraLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Pyra:</b> Can I forget him?");

            }
            else if (dialogue === 8)
            {
                $("#Tel-ERight1").animate({right: '0px'}, function() {
                    $("#Tel-ERight1").hide();
                });
                $("#BendyRight1").show();
                $("#BendyRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Bendy:</b> And sarcastic Pyra is back! You’re welcome!");

            }
            else if (dialogue === 9)
            {
                 $("#PyraLeft1").animate({left: '0px'}, function() {
                    $("#PyraLeft1").hide();
                });
                $("#BendyRight1").animate({right: '0px'}, function() {
                    $("#BendyRight1").hide();
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
                $("#TrainorRight1").animate({right: '22%'});
                $("#dialogue").html("<b>Whitney Trainor:</b> A nice fantasy. Though I think her dream could’ve included a lot more people admiring her. I mean, come on, it’s a dream. Go big! This is real life and I wanted everyone to love me.");
                $("#nextlevel1a").attr("style", "opacity: 1");
            }
            else if (dialogue === 2)
            {
                $("#dialogue").html("<b>Beauty:</b> I don’t think the stage was big enough for a whole crowd of people from her fantasy.");
            }
            else if (dialogue === 3)
            {
                $("#TrainorRight1").animate({right: '0px'}, function() {
                    $("#TrainorRight1").hide();
                });
                $("#PyraRight1").show();
                $("#PyraRight1").animate({right: '22%'});
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
                $("#BeautyLeft1").animate({left: '0px'}, function() {
                    $("#BeautyLeft1").hide();
                });
                $("#BendyLeft1").show();
                $("#BendyLeft1").animate({left: '22%'});
                $("#dialogue").html("<b>Bendy:</b> I think it stacks up well with all those choices.");

            }
            else if (dialogue === 10)
            {
                $("#dialogue").html("<b>Pyra:</b> Don’t get any ideas. ");

            }
            else if (dialogue === 11)
            {
                 $("#BendyLeft1").animate({left: '0px'}, function() {
                    $("#BendyLeft1").hide();
                });
                $("#PyraRight1").animate({right: '0px'}, function() {
                    $("#PyraRight1").hide();
                    $("#BeautyLeft1").show();
                    $("#BeautyLeft1").animate({left: '22%'});
                });
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
            }
            
        }
        else if (question === 16)
            {
                if (dialogue === 1)
                {
                    $("#score").show();
                    $("#score").text("Your score: " + correct + "/15");
                    if(correct === 15)
                        $("#dialogue").html("<b>Beauty:</b> All right! Perfect score! 15 out of 15! Well done.");
                    else if(correct > 10)
                        $("#dialogue").html("<b>Beauty:</b> Hey, you got a " + correct + " out of 15. Nicely done.");
                    else if(correct > 5)
                        $("#dialogue").html("<b>Beauty:</b> Looks like you got a score of " + correct + " out of 15. Not bad.");
                    else if(correct > 1)
                        $("#dialogue").html("<b>Beauty:</b> Whoa. You only got " + correct + " out of 15 questions right. Good try. Maybe you'll do better next time.");
                    else
                        $("#dialogue").html("<b>Beauty:</b> Aw, what? You didn't get a single question right. Did you even read this story? Unless you're Race and you don't like reading about yourself, I'd go back and look at Story 1 for some reference.");
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
                $("#dialogue").html("<b>Beauty:</b> That’s right. Ninja was the one we faced off against.");
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
                $("#dialogue").html("<b>Beauty:</b> That’s right. Pyra held Ninja over a building like she was about to drop him.");
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
                $("#dialogue").html("<b>Beauty:</b> Correct. Whitney Trainor was her name and the villain of this story.");
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
                $("#dialogue").html("<b>Beauty:</b> Very good. Pyra had a lot to say about Trainor, but she had no problem with her voice.");
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
        else if (question === 5)
        {
            if ($("input[name=q]:checked").val() === "a")
            {
                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Very good. Pyra said if you don't know the songs, you can't enjoy the show.");
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
        else if (question === 6)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("<b>Beauty:</b> Correct. Pyra attends school remotely. Since she doesn't want to risk hurting anyone with her powers, she chooses to stay at home.");
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

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {

                $("#dialogue").html("<b>Beauty:</b> That's it. Tel-E was the one who got arrested.");
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
            }
            else if ($("input[name=q]:checked").val() === "c")
            {

                $("#dialogue").html("<b>Beauty:</b> Correct. Whitney Trainor can make people see what they've always wanted to see.");
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
        else if (question === 9)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("<b>Beauty:</b> Correct. Tel-E was wearing a wedding dress. Since Trainor can produce copies of a person's greatest fantasies, this would imply that someone wants to marry Tel-E.");
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
                $("#dialogue").html("<b>Beauty:</b> Very good. Brittney, Courtney, and Rodney Trainor play clarinet, violin, cello.");
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

                $("#dialogue").html("<b>Beauty:</b> That's right. Whitney Trainor has a lot of fans, but her family is not one of them. Since they had those problems growing up, she kidnapped her family for not supporting her.");
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

                $("#dialogue").html("");
                missed = 1;
            }
            else if ($("input[name=q]:checked").val() === "b")
            {
                $("#dialogue").html("<b>Beauty:</b> Correct. Trainor's fantasy fairy was the one who talked to her.");
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
                $("#dialogue").html("<b>Beauty:</b> That’s right. Bendy and Nator were the ones Trainor used to attack us.");
                missed = 1;

            }
            else if ($("input[name=q]:checked").val() === "c")
            {
                $("#dialogue").html("");
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
        else if (question === 14)
        {
            if ($("input[name=q]:checked").val() === "a")
            {

                $("#dialogue").html("<b>Beauty:</b> Exactly right. Despite Pyra’s tough and sarcastic exterior, she’s actually very shy and doesn’t like being in crowds out of fear that her powers will hurt others.");
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
                $("#dialogue").html("<b>Beauty:</b> That’s right. With Pyra not feeling like people liked her, her biggest dream was to be only admired and not feared.");
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

    });
});
