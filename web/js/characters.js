/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    character = sessionStorage.getItem("SessionCharacter");

    $("#paddingdiv").attr("style", "height: " + (window.screen.height / 2) + "px");
    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");
    
    $(".characterinfo").css({"width": (window.screen.width * .85)});
        $(".characterheader").css({"width": (window.screen.width * .85)});
    
    if (window.screen.width < 700)
    {
        $("#hero").css({"right": "10px"});
        $("#villain").css({"right": "10px"});
        $("#oth").css({"right": "10px"});
    }
    
    
    $(window).resize(function () {
        $(".characterinfo").css({"width": (window.screen.width * .85)});
        $(".characterheader").css({"width": (window.screen.width * .85)});
        //$(".navbar").css({"width": (window.screen.width * .90)});

        
    });
    

    dialogue = 1;
    max = 0;

    var beautyBold = "Beauty: ";
    beautyBold = beautyBold.bold();
    var teleBold = "Tel-E: ";
    teleBold = teleBold.bold();
    var pyraBold = "Pyra: ";
    pyraBold = pyraBold.bold();

    if (character === "Beauty")
    {
        document.getElementById("hero").src = "images/beautyright1.png";
        document.getElementById("hero").alt = "Beauty Placeholder";

        document.getElementById("villain").src = "images/fourizeright1.png";
        document.getElementById("villain").alt = "Fourize Placeholder";

        document.getElementById("oth").src = "images/chiefright1.png";
        document.getElementById("oth").alt = "Chief Placeholder";

        document.getElementById("d").innerHTML = beautyBold + "And here we have all our characters! Hang on. First click on the Heroes, Villains, and Other Characters titles to reveal the names as they're categorized.";

        max = 4;

    }
    else if (character === "Tel-E")
    {
        document.getElementById("hero").src = "images/tel-eright1.png";
        document.getElementById("hero").alt = "Tel-E Placeholder";

        document.getElementById("villain").src = "images/fergusonright1.png";
        document.getElementById("villain").alt = "Christy Ferguson Placeholder";

        document.getElementById("oth").src = "images/chiefright1.png";
        document.getElementById("oth").alt = "Chief Placeholder";

        document.getElementById("d").innerHTML = teleBold + "And here's where you can see all the heroes, villains, and other characters in our stories. Just click each category to reveal them.";

        max = 3;
    }
    else if (character === "Pyra")
    {
        document.getElementById("hero").src = "images/pyraright1.png";
        document.getElementById("hero").alt = "Pyra Placeholder";

        document.getElementById("villain").src = "images/trainorright1.png";
        document.getElementById("villain").alt = "Whitney Trainor Placeholder";

        document.getElementById("oth").src = "images/chiefright1.png";
        document.getElementById("oth").alt = "Chief Placeholder";

        document.getElementById("d").innerHTML = pyraBold + "So this is the page that lists all our characters. Pretty self explanatory. Just click on those words to reveal some names.";

        max = 4;
    }

    $("#heroes").click(function () {
        $("#heroesdiv").collapse("toggle");
    });

    $("#villains").click(function () {
        $("#villainsdiv").collapse("toggle");
    });

    $("#other").click(function () {
        $("#otherdiv").collapse("toggle");
    });

    $("#AllHero").click(function () {
        $("#herolist").empty();

        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Beauty</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Tel-E</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Pyra</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Race</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Bendy</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Nator</a></li>");
        $("#herolist").append("<li class = 'charnames'>Negator</li>");
        $("#herolist").append("<li class = 'charnames'>Inflator</li>");

        if (character === "Beauty")
        {
            document.getElementById("hero").src = "images/beautyright1.png";
            document.getElementById("hero").alt = "Beauty Placeholder";
            $("#hero").show();
        }
        else if (character === "Tel-E")
        {
            document.getElementById("hero").src = "images/tel-eright1.png";
            document.getElementById("hero").alt = "Tel-E Placeholder";
            $("#hero").show();
        }
        else if (character === "Pyra")
        {
            document.getElementById("hero").src = "images/pyraright1.png";
            document.getElementById("hero").alt = "Pyra Placeholder";
            $("#hero").show();
        }

        $("#AllHero").attr("class", "active");
        $("#MinorHero").attr("class", "");
        $("#GrinHero").attr("class", "");
        $("#AllHero").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
        $("#MinorHero").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinHero").attr("style", "cursor: pointer; background-color: gold");
    });

    $("#MinorHero").click(function () {
        $("#herolist").empty();

        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Beauty</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Tel-E</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Pyra</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Race</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Bendy</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Nator</a></li>");

        if (character === "Beauty")
        {
            document.getElementById("hero").src = "images/beautyright1.png";
            document.getElementById("hero").alt = "Beauty Placeholder";
            $("#hero").show();
        }
        else if (character === "Tel-E")
        {
            document.getElementById("hero").src = "images/tel-eright1.png";
            document.getElementById("hero").alt = "Tel-E Placeholder";
            $("#hero").show();
        }
        else if (character === "Pyra")
        {
            document.getElementById("hero").src = "images/pyraright1.png";
            document.getElementById("hero").alt = "Pyra Placeholder";
            $("#hero").show();
        }

        $("#AllHero").attr("class", "");
        $("#MinorHero").attr("class", "active");
        $("#GrinHero").attr("class", "");
        $("#AllHero").attr("style", "cursor: pointer; background-color: gold");
        $("#MinorHero").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
        $("#GrinHero").attr("style", "cursor: pointer; background-color: gold");

    });

    $("#GrinHero").click(function () {
        $("#herolist").empty();
        $("#herolist").append("<li class = 'charnames'>Negator</li>");
        $("#herolist").append("<li class = 'charnames'>Inflator</li>");

        if (character === "Beauty")
        {
            document.getElementById("hero").src = "";
            document.getElementById("hero").alt = "";
            $("#hero").hide();
        }
        else if (character === "Tel-E")
        {
            document.getElementById("hero").src = "";
            document.getElementById("hero").alt = "";
            $("#hero").hide();
        }
        else if (character === "Pyra")
        {
            document.getElementById("hero").src = "";
            document.getElementById("hero").alt = "";
            $("#hero").hide();
        }

        $("#AllHero").attr("class", "");
        $("#MinorHero").attr("class", "");
        $("#GrinHero").attr("class", "active");
        $("#AllHero").attr("style", "cursor: pointer; background-color: gold");
        $("#MinorHero").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinHero").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
    });

    $("#AllVillain").click(function () {
        $("#villainlist").empty();

        $("#villainlist").append("<li class = 'charnames'>Fourize</li>");
        $("#villainlist").append("<li class = 'charnames'>Dinomight</li>");
        $("#villainlist").append("<li class = 'charnames'>Tammy Time</li>");
        $("#villainlist").append("<li class = 'charnames'>Ninja</li>");
        $("#villainlist").append("<li class = 'charnames'>Cyhack</li>");
        $("#villainlist").append("<li class = 'charnames'>Cold Miner</li>");
        $("#villainlist").append("<li class = 'charnames'>Christy Ferguson</li>");
        $("#villainlist").append("<li class = 'charnames'>Captain D</li>");
        $("#villainlist").append("<li class = 'charnames'>Whitney Trainor</li>");
        $("#villainlist").append("<li class = 'charnames'>One and Oh</li>");

        if (character === "Beauty")
        {
            document.getElementById("villain").src = "images/fourizeright1.png";
            document.getElementById("villain").alt = "Fourize Placeholder";
            $("#villain").show();
        }
        else if (character === "Tel-E")
        {
            document.getElementById("villain").src = "images/fergusonright1.png";
            document.getElementById("villain").alt = "Christy Ferguson Placeholder";
            $("#villain").show();
        }
        else if (character === "Pyra")
        {
            document.getElementById("villain").src = "images/trainorright1.png";
            document.getElementById("villain").alt = "Whitney Trainor Placeholder";
            $("#villain").show();
        }

        $("#AllVillain").attr("class", "active");
        $("#MinorVillain").attr("class", "");
        $("#GrinVillain").attr("class", "");
        $("#AllVillain").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
        $("#MinorVillain").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinVillain").attr("style", "cursor: pointer; background-color: gold");
    });

    $("#MinorVillain").click(function () {
        $("#villainlist").empty();

        $("#villainlist").append("<li class = 'charnames'>Fourize</li>");
        $("#villainlist").append("<li class = 'charnames'>Dinomight</li>");
        $("#villainlist").append("<li class = 'charnames'>Tammy Time</li>");
        $("#villainlist").append("<li class = 'charnames'>Ninja</li>");
        $("#villainlist").append("<li class = 'charnames'>Cyhack</li>");
        $("#villainlist").append("<li class = 'charnames'>Cold Miner</li>");
        $("#villainlist").append("<li class = 'charnames'>Christy Ferguson</li>");
        $("#villainlist").append("<li class = 'charnames'>Captain D</li>");
        $("#villainlist").append("<li class = 'charnames'>Whitney Trainor</li>");
        $("#villainlist").append("<li class = 'charnames'>One and Oh</li>");

        if (character === "Beauty")
        {
            document.getElementById("villain").src = "images/fourizeright1.png";
            document.getElementById("villain").alt = "Fourize Placeholder";
            $("#villain").show();
        }
        else if (character === "Tel-E")
        {
            document.getElementById("villain").src = "images/fergusonright1.png";
            document.getElementById("villain").alt = "Christy Ferguson Placeholder";
            $("#villain").show();
        }
        else if (character === "Pyra")
        {
            document.getElementById("villain").src = "images/trainorright1.png";
            document.getElementById("villain").alt = "Whitney Trainor Placeholder";
            $("#villain").show();
        }

        $("#AllVillain").attr("class", "");
        $("#MinorVillain").attr("class", "active");
        $("#GrinVillain").attr("class", "");
        $("#AllVillain").attr("style", "cursor: pointer; background-color: gold");
        $("#MinorVillain").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
        $("#GrinVillain").attr("style", "cursor: pointer; background-color: gold");
    });

    $("#GrinVillain").click(function () {
        $("#villainlist").empty();

        if (character === "Beauty")
        {
            document.getElementById("villain").src = "";
            document.getElementById("villain").alt = "";
            $("#villain").hide();
        }
        else if (character === "Tel-E")
        {
            document.getElementById("villain").src = "";
            document.getElementById("villain").alt = "";
            $("#villain").hide();
        }
        else if (character === "Pyra")
        {
            document.getElementById("villain").src = "";
            document.getElementById("villain").alt = "";
            $("#villain").hide();
        }


        $("#AllVillain").attr("class", "");
        $("#MinorVillain").attr("class", "");
        $("#GrinVillain").attr("class", "active");
        $("#AllVillain").attr("style", "cursor: pointer; background-color: gold");
        $("#MinorVillain").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinVillain").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
    });

    $("#AllOther").click(function () {
        $("#otherlist").empty();

        $("#otherlist").append("<li class = 'charnames'>Chief Lou Trotter</li>");

        if (character === "Beauty")
        {
            document.getElementById("oth").src = "images/chiefright1.png";
            document.getElementById("oth").alt = "Chief Placeholder";
            $("#oth").show();
        }
        else if (character === "Tel-E")
        {
            document.getElementById("oth").src = "images/chiefright1.png";
            document.getElementById("oth").alt = "Chief Placeholder";
            $("#oth").show();
        }
        else if (character === "Pyra")
        {
            document.getElementById("oth").src = "images/chiefright1.png";
            document.getElementById("oth").alt = "Chief Placeholder";
            $("#oth").show();
        }

        $("#AllOther").attr("class", "active");
        $("#MinorOther").attr("class", "");
        $("#GrinOther").attr("class", "");
        $("#AllOther").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
        $("#MinorOther").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinOther").attr("style", "cursor: pointer; background-color: gold");
    });

    $("#MinorOther").click(function () {
        $("#otherlist").empty();

        $("#otherlist").append("<li class = 'charnames'>Chief Lou Trotter</li>");

        if (character === "Beauty")
        {
            document.getElementById("oth").src = "images/chiefright1.png";
            document.getElementById("oth").alt = "Chief Placeholder";
        }
        else if (character === "Tel-E")
        {
            document.getElementById("oth").src = "images/chiefright1.png";
            document.getElementById("oth").alt = "Chief Placeholder";
        }
        else if (character === "Pyra")
        {
            document.getElementById("oth").src = "images/chiefright1.png";
            document.getElementById("oth").alt = "Chief Placeholder";
        }

        $("#AllOther").attr("class", "");
        $("#MinorOther").attr("class", "active");
        $("#GrinOther").attr("class", "");
        $("#AllOther").attr("style", "cursor: pointer; background-color: gold");
        $("#MinorOther").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
        $("#GrinOther").attr("style", "cursor: pointer; background-color: gold");
    });

    $("#GrinOther").click(function () {
        $("#otherlist").empty();
        //$("#otherlist").append("<li class = 'charnames'>Negator</li>");

        if (character === "Beauty")
        {
            document.getElementById("oth").src = "";
            document.getElementById("oth").alt = "";
            $("#oth").hide();
        }
        else if (character === "Tel-E")
        {
            document.getElementById("oth").src = "";
            document.getElementById("oth").alt = "";
            $("#oth").hide();
        }
        else if (character === "Pyra")
        {
            document.getElementById("oth").src = "";
            document.getElementById("oth").alt = "";
            $("#oth").hide();
        }

        $("#AllOther").attr("class", "");
        $("#MinorOther").attr("class", "");
        $("#GrinOther").attr("class", "active");
        $("#AllOther").attr("style", "cursor: pointer; background-color: gold");
        $("#MinorOther").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinOther").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
    });

});

function next() {
    if (dialogue < max)
    {
        dialogue++;
        DialogueChangeMenu();
        document.getElementById("prev").setAttribute("style", "opacity: 1");
    }
    if (dialogue === max)
        document.getElementById("next").setAttribute("style", "opacity: .6");
}

function prev() {
    if (dialogue > 1)
    {
        dialogue--;
        DialogueChangeMenu();
        document.getElementById("next").setAttribute("style", "opacity: 1");
    }
    if (dialogue === 1)
        document.getElementById("prev").setAttribute("style", "opacity: .6");
}

function DialogueChangeMenu() {
    var beautyBold = "Beauty: ";
    beautyBold = beautyBold.bold();
    var teleBold = "Tel-E: ";
    teleBold = teleBold.bold();
    var pyraBold = "Pyra: ";
    pyraBold = pyraBold.bold();

    if (character === "Beauty")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = beautyBold + "And here we have all our characters! Hang on. First click on the Heroes, Villains, and Other Characters titles to reveal the names as they're categorized.";
                break;
            case(2):
                document.getElementById("d").innerHTML = beautyBold + "If you click and see those character lists, you'll notice me first on the list! Sorry. Just cool seeing myself among real superheroes. But, anyway, you can click on some names that are linked to character pages if you wanna learn more about each of them.";
                break;
            case(3):
                document.getElementById("d").innerHTML = beautyBold + "You can also select from the cities in the tabs above to further categorize the characters based on the series they're from.";
                break;
            case(4):
                document.getElementById("d").innerHTML = beautyBold + "And, yes, there are other heroes in our world, so our creator's just gonna tease you with that for now. But, for now, just take a look at the folks from Minor City.";
                break;
        }

    }
    if (character === "Tel-E")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = teleBold + "And here's where you can see all the heroes, villains, and other characters in our stories. Just click each category to reveal them.";
                break;
            case(2):
                document.getElementById("d").innerHTML = teleBold + "If you haven't selected a character from the search bar above, you can click on the ones that have their own character page available to see more information on them.";
                break;
            case(3):
                document.getElementById("d").innerHTML = teleBold + "For now, we only have the people of Minor City, though that selection tab should give you some hint as to what city will be visited next.";
                break;
        }

    }
    if (character === "Pyra")
    {
        switch (dialogue)
        {
            case(1):
                document.getElementById("d").innerHTML = pyraBold + "So this is the page that lists all our characters. Pretty self explanatory. Just click on those words to reveal some names.";
                break;
            case(2):
                document.getElementById("d").innerHTML = pyraBold + "And if you got some more clicks in you, you can also visit a page for a character if he or she has one linked here.";
                break;
            case(3):
                document.getElementById("d").innerHTML = pyraBold + "You can also filter out the names by selecting from the city tab, which is pretty useless right now since you're only gonna be reading about people from Minor City.";
                break;
            case(4):
                document.getElementById("d").innerHTML = pyraBold + "Oh, you noticed another city? Yeah, that's just our creator not telling you what he's working on. Personally, I would've just left it out so I wouldn't have to answer any questions about it.";
                break;
        }
    }

}