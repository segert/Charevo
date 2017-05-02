/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    
    character = sessionStorage.getItem("SessionCharacter");
    
    $("#paddingdiv").attr("style", "height: " + (window.screen.height / 2) + "px");
    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    if (character === "Beauty")
    {
        document.getElementById("hero").src = "images/beautyright1.png";
        document.getElementById("hero").alt = "Beauty Placeholder";
        
        document.getElementById("villain").src = "images/fourizeright1.png";
        document.getElementById("villain").alt = "Fourize Placeholder";
        
        document.getElementById("oth").src = "images/chiefright1.png";
        document.getElementById("oth").alt = "Chief Placeholder";
    }
    else if (character === "Tel-E")
    {
       document.getElementById("hero").src = "images/tel-eright1.png";
       document.getElementById("hero").alt = "Tel-E Placeholder";
       
       document.getElementById("villain").src = "images/fergusonright1.png";
       document.getElementById("villain").alt = "Christy Ferguson Placeholder";
       
       document.getElementById("oth").src = "images/chiefright1.png";
       document.getElementById("oth").alt = "Chief Placeholder";
    }
    else if (character === "Pyra")
    {
        document.getElementById("hero").src = "images/pyraright1.png";
        document.getElementById("hero").alt = "Pyra Placeholder";
        
        document.getElementById("villain").src = "images/trainorright1.png";
        document.getElementById("villain").alt = "Whitney Trainor Placeholder";
        
        document.getElementById("oth").src = "images/chiefright1.png";
        document.getElementById("oth").alt = "Chief Placeholder";
    }
    
    $("#heroes").click(function(){
        $("#heroesdiv").collapse("toggle");
    });
    
    $("#villains").click(function(){
        $("#villainsdiv").collapse("toggle");
    });
    
    $("#other").click(function(){
        $("#otherdiv").collapse("toggle");
    });
    
    $("#AllHero").click(function(){
        $("#herolist").empty();
        
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Beauty</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Tel-E</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Pyra</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Race</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Bendy</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Nator</a></li>");
        $("#herolist").append("<li class = 'charnames'>Negator</li>");
        $("#herolist").append("<li class = 'charnames'>Inflator</li>");
        
        $("#AllHero").attr("class", "active");
        $("#MinorHero").attr("class", "");
        $("#GrinHero").attr("class", "");
        $("#AllHero").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
        $("#MinorHero").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinHero").attr("style", "cursor: pointer; background-color: gold");
    });
    
    $("#MinorHero").click(function(){
        $("#herolist").empty();
        
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Beauty</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Tel-E</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Pyra</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Race</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Bendy</a></li>");
        $("#herolist").append("<li class = 'charnames'><a href = 'Characters/beauty.html'>Nator</a></li>");
        
        $("#AllHero").attr("class", "");
        $("#MinorHero").attr("class", "active");
        $("#GrinHero").attr("class", "");
        $("#AllHero").attr("style", "cursor: pointer; background-color: gold");
        $("#MinorHero").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
        $("#GrinHero").attr("style", "cursor: pointer; background-color: gold");
        
    });
    
    $("#GrinHero").click(function(){
        $("#herolist").empty();
        $("#herolist").append("<li class = 'charnames'>Negator</li>");
        $("#herolist").append("<li class = 'charnames'>Inflator</li>");
        
        $("#AllHero").attr("class", "");
        $("#MinorHero").attr("class", "");
        $("#GrinHero").attr("class", "active");
        $("#AllHero").attr("style", "cursor: pointer; background-color: gold");
        $("#MinorHero").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinHero").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
    });
    
    $("#AllVillain").click(function(){
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
        
        $("#AllVillain").attr("class", "active");
        $("#MinorVillain").attr("class", "");
        $("#GrinVillain").attr("class", "");
        $("#AllVillain").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
        $("#MinorVillain").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinVillain").attr("style", "cursor: pointer; background-color: gold");
    });
    
    $("#MinorVillain").click(function(){
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
        
        $("#AllVillain").attr("class", "");
        $("#MinorVillain").attr("class", "active");
        $("#GrinVillain").attr("class", "");
        $("#AllVillain").attr("style", "cursor: pointer; background-color: gold");
        $("#MinorVillain").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
        $("#GrinVillain").attr("style", "cursor: pointer; background-color: gold");
    });
    
    $("#GrinVillain").click(function(){
        $("#villainlist").empty();
        
        
        $("#AllVillain").attr("class", "");
        $("#MinorVillain").attr("class", "");
        $("#GrinVillain").attr("class", "active");
        $("#AllVillain").attr("style", "cursor: pointer; background-color: gold");
        $("#MinorVillain").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinVillain").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
    });
    
    $("#AllOther").click(function(){
        $("#otherlist").empty();
        
        $("#otherlist").append("<li class = 'charnames'>Chief Lou Trotter</li>");
        
        $("#AllOther").attr("class", "active");
        $("#MinorOther").attr("class", "");
        $("#GrinOther").attr("class", "");
        $("#AllOther").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
        $("#MinorOther").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinOther").attr("style", "cursor: pointer; background-color: gold");
    });
    
    $("#MinorOther").click(function(){
        $("#otherlist").empty();
        
        $("#otherlist").append("<li class = 'charnames'>Chief Lou Trotter</li>");
        
        $("#AllOther").attr("class", "");
        $("#MinorOther").attr("class", "active");
        $("#GrinOther").attr("class", "");
        $("#AllOther").attr("style", "cursor: pointer; background-color: gold");
        $("#MinorOther").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
        $("#GrinOther").attr("style", "cursor: pointer; background-color: gold");
    });
    
    $("#GrinOther").click(function(){
        $("#otherlist").empty();
        //$("#otherlist").append("<li class = 'charnames'>Negator</li>");
        
        $("#AllOther").attr("class", "");
        $("#MinorOther").attr("class", "");
        $("#GrinOther").attr("class", "active");
        $("#AllOther").attr("style", "cursor: pointer; background-color: gold");
        $("#MinorOther").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinOther").attr("style", "cursor: pointer; background-color: #ffff99; color: black;");
    });

});
