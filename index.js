var button=['green','blue','red','yellow']
var gamepattern=[]
var userpattern=[]
var flag = 0;

$(document).on("keypress",function(){
if (flag==0){
    flag=1;
    $("h1").html("Level 0");
    nextSequence();}
});

$(".btn").on('click',function(){
        var userbutton = $(this).attr("id"); 
        animatebutton(userbutton);
        userpattern.push(userbutton);
        if (userpattern[userpattern.length-1]!=gamepattern[userpattern.length-1]){
            wrongaudio();
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
              }, 200);
            flag=0;
            $("h1").html("You lose! Press a key to start again");
            userpattern=[];
            gamepattern=[];
        }
        else{
            correctaudio(userpattern[userpattern.length-1]);
            $("h1").html("Level "+gamepattern.length);
            if(gamepattern.length==userpattern.length){
                userpattern=[];
                setTimeout(function () {
                    nextSequence();
                }, 1000);
                
            }
        }
});


function nextSequence(){
    var num = Math.floor(Math.random()*4);
    gamepattern.push(button[num]);
    animatebutton(button[num]);
    correctaudio(button[num]);
};
function animatebutton(color){
    $("#"+color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);   
}
function correctaudio(color){
    var audio = new Audio("sounds/"+color+".mp3");
    audio.play();
}
function wrongaudio(){
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
}


