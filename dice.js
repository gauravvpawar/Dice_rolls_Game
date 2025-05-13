//alert('Hello Gaurav');

var randomNum1=Math.floor(Math.random()*6)+1;

var dicerandomImg ="dice"+ randomNum1+".png"; 

var randomSource = "Images/"+dicerandomImg;

var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSource);


var randomNum2=Math.floor(Math.random()*6)+1;
var randomSource2 ="Images/dice"+randomNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSource2);


if(randomNum1>randomNum2)
{
    document.querySelector("h1").innerHTML="Player 1 win!";
}
else if(randomNum2>randomNum1)
{
    document.querySelector("h1").innerHTML="Player 2 win!";
}
else{
    document.querySelector("h1").innerHTML = "Game Draw!";
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        location.reload(); // or window.location.reload();
    }
});
