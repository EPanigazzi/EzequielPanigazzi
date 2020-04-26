$( document ).ready(function() {

    $("#footer").hide();

    $("#buttonSkill").click(function(){
        $("#skillsCard, #footer, #bottonUPContainer").show();
            

        setTimeout(function(){ 
            $(".progressLoad90").css("width","10%");
            $(".progressLoad70").css("width","10%");
            $(".progressLoad60").css("width","10%");
        }, 1500);

        setTimeout(function(){  
            $(".progressLoad90").css("width","30%");
            $(".progressLoad70").css("width","30%");
            $(".progressLoad60").css("width","30%");  
        }, 1700);

        setTimeout(function(){ 
            $(".progressLoad90").css("width","60%");
            $(".progressLoad70").css("width","60%");
            $(".progressLoad60").css("width","60%"); 
        }, 1900);

        setTimeout(function(){ 
            $(".progressLoad90").css("width","85%");
            $(".progressLoad70").css("width","75%");
            $(".progressLoad60").css("width","60%"); 
        }, 2100);
    });

    $(".bottonUPClass").click(function(){
        $("#skillsCard, #footer, #bottonUPContainer").hide();
        $(".progressLoad90").css("width","0%");
        $(".progressLoad70").css("width","0%");
        $(".progressLoad60").css("width","0%");
    });

    $("#headingOne").click(function(){
        $("#skillsCard, #footer, #bottonUPContainer").hide();
    });

});
