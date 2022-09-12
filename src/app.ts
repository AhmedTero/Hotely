"use strict";

// NavBar
let navBtn = document.getElementById('bar') as HTMLButtonElement;
let nav = document.querySelector('.navbar ul') as HTMLUListElement;
let showBar = document.getElementById('show') as HTMLUListElement;
let closeBar = document.getElementById('close') as HTMLButtonElement;

navBtn.onclick = function() {
   nav.classList.add('show');
    showBar.style.top = '0';
}
closeBar.onclick = () =>{
    showBar.style.top = '-670px';
}

window.onresize = () => {
    if(window.innerWidth <= 992){
        nav.classList.add('show')
        showBar.style.top = '-670px';
    } else {
        nav.classList.remove('show')
    }
}

// Auto Slider
let counter = 1;
let bullotes = document.querySelector('.bullotes ul')?.children;
console.log(bullotes)
setInterval(function(){
    document.querySelector('.img.active')?.classList.remove("active");
    const myImg = document.querySelector(`.img-${counter}`);
    myImg?.classList.add('active');
    document.querySelector('.bull.active')?.classList.remove('active');
    if(bullotes?.item(counter-1)?.getAttribute('data-src')){
        bullotes.item(counter-1)?.classList.add('active');
    }
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 4000);

//# sourceMappingURL=app.js.map