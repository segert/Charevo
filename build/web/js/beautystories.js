/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {

    $("#story1").mouseover(function() {
        storydescription(1);
        $(this).clearQueue().stop();
        $("#story1").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);
        
        
    });
    $("#story2").mouseover(function() {
        storydescription(2);
        $(this).clearQueue().stop();
        $("#story2").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);
    });
    $("#story3").mouseover(function() {
        storydescription(3);
        $(this).clearQueue().stop();
        $("#story3").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);
    });
    $("#story4").mouseover(function() {
        storydescription(4);
        $(this).clearQueue().stop();
        $("#story4").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);
    });
    $("#story5").mouseover(function() {
        storydescription(5);
        $(this).clearQueue().stop();
        $("#story5").animate({backgroundColor: "#0066FF", color: "#FFFFFF"}, 400);
    });
    
    $("#story1").mouseout(function() {
        document.getElementById("d").innerHTML = "";
        $(this).clearQueue().stop();
        $("#story1").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story2").mouseout(function() {
        document.getElementById("d").innerHTML = "";
        $(this).clearQueue().stop();
        $("#story2").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story3").mouseout(function() {
        document.getElementById("d").innerHTML = "";
        $(this).clearQueue().stop();
        $("#story3").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story4").mouseout(function() {
        document.getElementById("d").innerHTML = "";
        $(this).clearQueue().stop();
        $("#story4").animate({backgroundColor: "", color: "#000000"}, 400);
    });
    $("#story5").mouseout(function() {
        document.getElementById("d").innerHTML = "";
        $(this).clearQueue().stop();
        $("#story5").animate({backgroundColor: "", color: "#000000"}, 400);
    });

function storydescription(story) {

    if (character === "Beauty") {
        switch (story)
        {
            case(1):
                document.getElementById("d").innerHTML = "Beauty: Alright! This is the one where I join the Neo Brigade! And also struggle to become accepted by them. Yeah!";
                
                break;
            case(2):
                document.getElementById("d").innerHTML = "Beauty: Game shows? Trivia? Someone not wanting to cheat? Now I'm excited!";
                break;
            case(3):
                document.getElementById("d").innerHTML = "Beauty: It's the one where we get to see a little too much risk being taken. And, for me, too much of a certain person's TV show.";
                break;
            case(4):
                document.getElementById("d").innerHTML = "Beauty: Oh! Here's where I get to see myself battling all kinds of monsters with my friends! I don't do it, but I get to see it.";
                break;
            case(5):
                document.getElementById("d").innerHTML = "Beauty: If you like seeing people who act like those who think they're smarter than you, this one's for you. Would I lie to you?";
                break;
        }
    }
    else if (character === "Tel-E") {
        switch (story)
        {
            case(1):
                document.getElementById("d").innerHTML = "Tel-E: Hello World";
                break;
            case(2):
                document.getElementById("d").innerHTML = "Tel-E: Hi";
                break;
            case(3):
                document.getElementById("d").innerHTML = "Tel-E: Hello World";
                break;
            case(4):
                document.getElementById("d").innerHTML = "Tel-E: Hi";
                break;
            case(5):
                document.getElementById("d").innerHTML = "Tel-E: lsdkfjsl";
                break;
        }
    }
    else
    {
        switch (story)
        {
            case(1):
                document.getElementById("d").innerHTML = "Beauty: Hello World";
                break;
            case(2):
                document.getElementById("d").innerHTML = "Beauty: Hi";
                break;
            case(3):
                document.getElementById("d").innerHTML = "Beauty: Hello World";
                break;
            case(4):
                document.getElementById("d").innerHTML = "Beauty: Hi";
                break;
            case(5):
                document.getElementById("d").innerHTML = "Beauty: lsdkfjsl";
                break;
        }
    }
}
});