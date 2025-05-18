function dicephoto(dicevalue, imgClass) {
    document.querySelector("." + imgClass).setAttribute("src", "./photos/" + dicevalue + ".png");
    console.log("Setting image:", "./photos/" + dicevalue + ".png");
}
function play(){
    
    //generate a random number between 1-6;
    var dice1=Math.floor(Math.random()*6)+1;
    
    var dice2=Math.floor(Math.random()*6)+1;
    if(dice1>dice2){
        document.querySelector("h1").innerHTML="Player 1 is Winner";
    }
    else if(dice1<dice2){
        document.querySelector("h1").innerHTML="Player 2 is Winner";
    }
    else{
        document.querySelector("h1").innerHTML="Draw!! , Try again";
    }
    dicephoto(dice1,"img1");
    dicephoto(dice2,"img2");
}