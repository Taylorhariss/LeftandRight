let  left = document.querySelector('.left');
let  right = document.querySelector('.right');
let leftRight = document.querySelector('.leftRight');
let text = document.querySelector('p');

 // Choice A
let basketball = document.querySelector('.basketball');
basketball.style.display ="none";


left.addEventListener('click', function() {

    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    basketball.style.display ="block";

    text.innerHTML ="to shoot double click"

});