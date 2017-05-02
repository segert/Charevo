/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    
    character = sessionStorage.getItem("SessionCharacter");
    $(".footerlist li").attr("style", "margin-right: " + (window.screen.width / 16) + "px");
    $("#maindiv").attr("style", "position:relative; width: " + window.screen.width + "px");
    //$("#maindiv2").attr("style", "position:relative; width: " + window.screen.width + "px");

    
    $("#allblogs").click(function(){
        
        $("#allblogs").attr("class", "active");
        $("#beautyblogs").attr("class", "");
        $("#teleblogs").attr("class", "");
        $("#pyrablogs").attr("class", "");
        $("#allblogs").attr("style", "cursor: pointer; background-color: #0066FF; color: white;");
        $("#beautyblogs").attr("style", "cursor: pointer; background-color: lightsteelblue");
        $("#teleblogs").attr("style", "cursor: pointer; background-color: lightsteelblue");
        $("#pyrablogs").attr("style", "cursor: pointer; background-color: lightsteelblue");
        
        $(".beautyblogtitle").show();
        $(".beautyblogfront").show();
        
        $(".teleblogtitle").show();
        $(".teleblogfront").show();
        
        $(".pyrablogtitle").show();
        $(".pyrablogfront").show();
        
       /* $("#herolist").empty();
        
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
        $("#GrinHero").attr("style", "cursor: pointer; background-color: gold"); */
    });
    
    $("#beautyblogs").click(function(){
        $("#allblogs").attr("class", "");
        $("#beautyblogs").attr("class", "active");
        $("#teleblogs").attr("class", "");
        $("#pyrablogs").attr("class", "");
        $("#allblogs").attr("style", "cursor: pointer; background-color: lightsteelblue");
        $("#beautyblogs").attr("style", "cursor: pointer; background-color: #0066FF; color: white;");
        $("#teleblogs").attr("style", "cursor: pointer; background-color: lightsteelblue");
        $("#pyrablogs").attr("style", "cursor: pointer; background-color: lightsteelblue");
        
        $(".beautyblogtitle").show();
        $(".beautyblogfront").show();
        
        $(".teleblogtitle").hide();
        $(".teleblogfront").hide();
        
        $(".pyrablogtitle").hide();
        $(".pyrablogfront").hide();
        
      /*  $("#herolist").empty();
        
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
        $("#GrinHero").attr("style", "cursor: pointer; background-color: gold"); */
        
    });
    
    $("#teleblogs").click(function(){
        $("#allblogs").attr("class", "");
        $("#beautyblogs").attr("class", "");
        $("#teleblogs").attr("class", "active");
        $("#pyrablogs").attr("class", "");
        $("#allblogs").attr("style", "cursor: pointer; background-color: lightsteelblue");
        $("#beautyblogs").attr("style", "cursor: pointer; background-color: lightsteelblue");
        $("#teleblogs").attr("style", "cursor: pointer; background-color: #0066FF; color: white;");
        $("#pyrablogs").attr("style", "cursor: pointer; background-color: lightsteelblue");
        
        $(".beautyblogtitle").hide();
        $(".beautyblogfront").hide();
        
        $(".teleblogtitle").show();
        $(".teleblogfront").show();
        
        $(".pyrablogtitle").hide();
        $(".pyrablogfront").hide();
        
      /*  $("#herolist").empty();
        $("#herolist").append("<li class = 'charnames'>Negator</li>");
        $("#herolist").append("<li class = 'charnames'>Inflator</li>");
        
        $("#AllHero").attr("class", "");
        $("#MinorHero").attr("class", "");
        $("#GrinHero").attr("class", "active");
        $("#AllHero").attr("style", "cursor: pointer; background-color: gold");
        $("#MinorHero").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinHero").attr("style", "cursor: pointer; background-color: #ffff99; color: black;"); */
    });
    
    $("#pyrablogs").click(function(){
        $("#allblogs").attr("class", "");
        $("#beautyblogs").attr("class", "");
        $("#teleblogs").attr("class", "");
        $("#pyrablogs").attr("class", "active");
        $("#allblogs").attr("style", "cursor: pointer; background-color: lightsteelblue");
        $("#beautyblogs").attr("style", "cursor: pointer; background-color: lightsteelblue");
        $("#teleblogs").attr("style", "cursor: pointer; background-color: lightsteelblue");
        $("#pyrablogs").attr("style", "cursor: pointer; background-color: #0066FF; color: white;");
        
        $(".beautyblogtitle").hide();
        $(".beautyblogfront").hide();
        
        $(".teleblogtitle").hide();
        $(".teleblogfront").hide();
        
        $(".pyrablogtitle").show();
        $(".pyrablogfront").show();
        
      /*  $("#herolist").empty();
        $("#herolist").append("<li class = 'charnames'>Negator</li>");
        $("#herolist").append("<li class = 'charnames'>Inflator</li>");
        
        $("#AllHero").attr("class", "");
        $("#MinorHero").attr("class", "");
        $("#GrinHero").attr("class", "active");
        $("#AllHero").attr("style", "cursor: pointer; background-color: gold");
        $("#MinorHero").attr("style", "cursor: pointer; background-color: gold");
        $("#GrinHero").attr("style", "cursor: pointer; background-color: #ffff99; color: black;"); */
    });


});
