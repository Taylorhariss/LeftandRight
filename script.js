let  kyrie = document.querySelector('.kyrie');
let  bron = document.querySelector('.bron');
let leftRight = document.querySelector('.leftRight');
let text = document.querySelector('p');

 // Choice A

 let basketball = document.querySelector('.basketball');
    basketball.style.display ="none";

    let player = document.querySelector('.player');
    player.style.display ="none";

let defense = document.querySelector('.defense');
    defense.style.display ="none";

let block = document.querySelector('.block');
    block.style.display ="none";

let poster = document.querySelector('.poster');
    poster.style.display ="none";

let celebrate = document.querySelector('.celebrate');
    celebrate.style.display ="none";


//kyrie
kyrie.addEventListener('click', function() {
    
console.log("you choose kyrie");
    leftRight.style.display ="none";
   kyrie.style.display ="none";
   bron.style.display ="none";
    basketball.style.display ="block";
    text.innerHTML ="to shoot click";

    
});

basketball.addEventListener('click', function() {

console.log("you single clicked");


player.style.display ="block";
basketball.style.display ="none";
text.innerHTML ="you made the shot, now click again";


});


player.addEventListener('click', function() {

    console.log("you got back on defense");
    leftRight.style.display ="none";
   kyrie.style.display ="none";
    bron.style.display ="none";
    player.style.display ="none";
    basketball.style.display ="none";
    defense.style.display = "block";
    text.innerHTML ="you got back on defense";

});

// Choice B
bron.addEventListener('click', function() {
    
    console.log("you choosed right");
        leftRight.style.display ="none";
        kyrie.style.display ="none";
        bron.style.display ="none";
        block.style.display ="block";
        text.innerHTML ="to block wheel";
    
        
    });

block.addEventListener('wheel', function() {

        console.log("you postered opponent");
        leftRight.style.display ="none";
        kyrie.style.display ="none";
       bron.style.display ="none";
        block.style.display ="none";
        poster.style.display ="block";
        text.innerHTML ="to poster click";

});

poster.addEventListener('click', function() {
        console.log("now you can celebrate");
        leftRight.style.display ="none";
        kyrie.style.display ="none";
        bron.style.display ="none";
        block.style.display ="none";
        poster.style.display ="none";
        celebrate.style.display ="block";
        text.innerHTML ="now celebrate";



});
    



