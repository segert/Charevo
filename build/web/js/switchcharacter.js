/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {

    character = sessionStorage.getItem("SessionCharacter");
    //$(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");
    
    
    if (window.screen.height > 600)
        $("section").css({"height": (window.screen.height * 1.05)});
    else
        $("section").css({"height": (window.screen.height * 1.65)});
    //$("section").css({"height": (window.screen.height * 1.05)});

    $(window).resize(function () {
        if (window.screen.height > 600)
        $("section").css({"height": (window.screen.height * 1.05)});
    else
        $("section").css({"height": (window.screen.height * 1.65)});

    });
    
    

    if (character === "Beauty")
    {
        $("#d").html("<b>Beauty:</b> And here we have the character selection screen. You started with me, but if you wanna hear from someone else as your new host, just select them on this page. Go ahead. I'm not the only one with a story and insight in this world.");
        $('#myCarousel').on('slide.bs.carousel', function(ev) {
        var id = ev.relatedTarget.id;

        if(id === "0")
            $("#d").html("<b>Beauty:</b> And here we have the character selection screen. You started with me, but if you wanna hear from someone else as your new host, just select them on this page. Go ahead. I'm not the only one with a story and insight in this world.");
        else if(id === "1")
            $("#d").html("<b>Tel-E:</b> Hello. I am Tel-E Vega of Planet Knowlgia. I've only been on Earth for a little less than a year, but I'm more knowledgable than you think. So if you'd like some more details on this world, why not select me as your host? Go on then.");
        else if(id === "2")
            $("#d").html("<b>Pyra:</b> Oh, hey. So . . . I guess I'm Pyra. Yeah. Alright, look, I know I'm not that happy and trivia focused like the other two, but if you just wanna hear me stick it to our creator and his ideas, then just choose me. Or don't. I'm not trying to make you or anything.");
    });
    }
    if (character === "Tel-E")
    {
        $("#a0").attr("class", "");
        $("#a1").attr("class", "active");
        $("#0").attr("class", "item");
        $("#1").attr("class", "item active");
        $("#d").html("<b>Tel-E:</b> I see you've returned to the character selection page. No problem. Just choose from any of the other girls available on this menu and they'll help guide you through this site just as I have. I'll be right here if you wish to bring me back as host.");
       
        
        $('#myCarousel').on('slide.bs.carousel', function(ev) {
        var id = ev.relatedTarget.id;

        if(id === "0")
            $("#d").html("<b>Beauty:</b> Hi! I'm Beauty. Though, you probably already knew that since I'm the default character. Anyway, if you liked me at the start, I can talk to you some more. Just give me a click and I'll be your host again.");
        else if(id === "1")
            $("#d").html("<b>Tel-E:</b> I see you've returned to the character selection page. No problem. Just choose from any of the other girls available on this menu and they'll help guide you through this site just as I have. I'll be right here if you wish to bring me back as host.");
        else if(id === "2")
            $("#d").html("<b>Pyra:</b> Oh, hey. So . . . I guess I'm Pyra. Yeah. Alright, look, I know I'm not that happy and trivia focused like the other two, but if you just wanna hear me stick it to our creator and his ideas, then just choose me. Or don't. I'm not trying to make you or anything.");
    });
    }
    else if (character === "Pyra")
    {
        $("#a0").attr("class", "");
        $("#a2").attr("class", "active");
        $("#0").attr("class", "item");
        $("#2").attr("class", "item active");
        $("#d").html("<b>Pyra:</b> Oh. You wanna hang with someone else? Okay. That's cool. I don't care. Beauty and Tel-E have time too. Just pick one of them and they'll be your new friend. I'll be here if you change your mind. Really . . . go ahead. I'm . . . I'm fine.");
    
        
        $('#myCarousel').on('slide.bs.carousel', function(ev) {
        var id = ev.relatedTarget.id;

        if(id === "0")
            $("#d").html("<b>Beauty:</b> Hi! I'm Beauty. Though, you probably already knew that since I'm the default character. Anyway, if you liked me at the start, I can talk to you some more. Just give me a click and I'll be your host again.");
        else if(id === "1")
            $("#d").html("<b>Tel-E:</b> Hello. I am Tel-E Vega of Planet Knowlgia. I've only been on Earth for a little less than a year, but I'm more knowledgable than you think. So if you'd like some more details on this world, why not select me as your host? Go on then.");
        else if(id === "2")
            $("#d").html("<b>Pyra:</b> Oh. You wanna hang with someone else? Okay. That's cool. I don't care. Beauty and Tel-E have time too. Just pick one of them and they'll be your new friend. I'll be here if you change your mind. Really . . . go ahead. I'm . . . I'm fine.");
    });
    }

    
});