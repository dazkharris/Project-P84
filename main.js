canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    

    if((keyPressed >97 && keyPressed<=122)||(keyPressed >=65 && keyPressed<=90))
    {
        alphabetkey();
        document.getElementById("d1").innerHTML="You pressed the alphabet key";
        console.log("alphabet key");
    }

if(keyPressed == "38"
    up();
    console.log("up");
}



function alphabetkey()
{
    img_image="Alkpey.png";
}