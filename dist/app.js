"use strict";
var _a;
let navBtn = document.getElementById('bar');
let nav = document.querySelector('.navbar ul');
let showBar = document.getElementById('show');
let closeBar = document.getElementById('close');
navBtn.onclick = function () {
    nav.classList.add('show');
    showBar.style.top = '0';
};
closeBar.onclick = () => {
    showBar.style.top = '-670px';
};
window.onresize = () => {
    if (window.innerWidth <= 992) {
        nav.classList.add('show');
        showBar.style.top = '-670px';
    }
    else {
        nav.classList.remove('show');
    }
};
let counter = 1;
let bullotes = (_a = document.querySelector('.bullotes ul')) === null || _a === void 0 ? void 0 : _a.children;
console.log(bullotes);
setInterval(function () {
    var _a, _b, _c, _d;
    (_a = document.querySelector('.img.active')) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
    const myImg = document.querySelector(`.img-${counter}`);
    myImg === null || myImg === void 0 ? void 0 : myImg.classList.add('active');
    (_b = document.querySelector('.bull.active')) === null || _b === void 0 ? void 0 : _b.classList.remove('active');
    if ((_c = bullotes === null || bullotes === void 0 ? void 0 : bullotes.item(counter - 1)) === null || _c === void 0 ? void 0 : _c.getAttribute('data-src')) {
        (_d = bullotes.item(counter - 1)) === null || _d === void 0 ? void 0 : _d.classList.add('active');
    }
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 4000);
//# sourceMappingURL=app.js.map