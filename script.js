let  left = document.querySelector('.left');
let  right = document.querySelector('.right');
let leftRight = document.querySelector('.leftRight');
let text = document.querySelector('p');

 // Choice A

 let basketball = document.querySelector('.basketball');
    basketball.style.display ="none";

    let player = document.querySelector('.player');
    player.style.display ="none";
//left
left.addEventListener('click', function() {
    
console.log("you choosed left");
    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    basketball.style.display ="block";
    text.innerHTML ="to shoot click";

    
});

basketball.addEventListener('click', function() {

console.log("you single clicked");
leftRight.style.display ="none";
left.style.display ="none";
right.style.display ="none";
player.style.display ="block";
basketball.style.display ="none";
text.innerHTML ="you made the shot";


});




