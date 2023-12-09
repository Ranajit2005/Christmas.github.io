// console.log("Hellow");
res = document.getElementsByClassName("mc");
for(let i=1;i<75;i++){
    let stars = document.createElement('div');
    stars.classList.add('star');
    let size = Math.random() * 20;
    stars.style.fontSize = 10 + size + 'px';
    stars.style.left = Math.random() * innerWidth + 'px';
    stars.style.top = Math.random() * innerHeight + 'px';
    stars.style.filter = `hue-rotate(${i*5}deg)`;
    // res.style = `hue-rotate(${i*5}deg)`;
    document.querySelector('.sec').appendChild(stars);
}
function animationStars(){
    let AllStars = document.querySelectorAll('.star');
    let num = Math.floor(Math.random()*AllStars.length);
    AllStars[num].classList.toggle('animate');
}
setInterval(animationStars,50)

// res.style.top = 500 + 'px';
// res.innerText = "Hellow";

function changeTextColor(){
    res.style.color = GetRandom();
    setTimeout(changeTextColor(),1000);
}

function GetRandom(){
    let LIMIT_VALUE = 256;
    let red = GRN(LIMIT_VALUE);
    let green = GRN(LIMIT_VALUE);
    let blue = GRN(LIMIT_VALUE);
    return 'rgb('+red+','+green+','+blue+')';
}

function GRN(limt){
    let rn = Math.random();
    rn = rn * limt;
    rn = Math.floor(rn);
    return rn;
}
changeTextColor();