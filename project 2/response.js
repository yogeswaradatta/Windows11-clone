let startMenu = document.getElementById('start');
let body = document.getElementById('body');

let hi = `<div class="hello" style="position: absolute;
                    z-index: 417047847385;
                    left: 0%;
                    top: 0%;
                    background-color: var(--hovColor);
                    height: 100vh;
                    width: 100%;
                    backdrop-filter: blur(5px);
                    ">
                    <div class="hello" style="position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    height: 10%;
                    width: 25%;
                    background-color: rgba(38, 38, 38, 0.866);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 12px;
                    color: var( --textcolor);">
                        <p>Not availablee...</p>
                    </div>
                    </div>
                            `;

let hello = document.getElementById('body1');

startMenu.addEventListener('click', function () {
    document.querySelector('.popup').classList.toggle("popActive");
    document.querySelector('.clicked').classList.toggle("hovActive");
    
})

let search = document.getElementById('search-box');
search.addEventListener('input', function () {
    let searched = search.value;
    let apps = document.getElementsByClassName('appimage');
    Array.from(apps).forEach(function (button) {
        let appName = button.getElementsByClassName('recappname')[0].innerText;
        if (appName.includes(searched)) {
            button.style.display = "flex";
        }
        else {
            button.style.display = "none";
        }
    })
})

let notApps = document.querySelectorAll('.center');
notApps.forEach(function(el){
    el.addEventListener('click', function () {
        
        hello.innerHTML = hi;
    
        body.appendChild(hello);
    
        setTimeout(() => {
            hello.innerHTML = "";
        }, 2000);
    })
})

let powerbutton = document.getElementById('pbutton');
powerbutton.addEventListener('click', function(){
    document.querySelector('.power-menu').classList.toggle("power-menu-vis");
})

let nada = document.querySelectorAll('.nada');
nada.forEach(function(el){
    el.addEventListener('click', function () {
        
        hello.innerHTML = `<div class="hello" style="position: absolute;
                                z-index: 417047847385;
                                left: 0%;
                                top: 0%;
                                background-color: var(--hovColor);
                                height: 100vh;
                                width: 100%;
                                backdrop-filter: blur(5px);
                                 ">
                                <div class="hello" style="position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%, -50%);
                                height: 10%;
                                width: 25%;
                                background-color: rgba(38, 38, 38, 0.866);
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border-radius: 12px;
                                color: var( --textcolor);">
                                <p>unavailable</p>
                                </div>
                                </div>
                                        `;
    
        body.appendChild(hello);
    
        setTimeout(() => {
            hello.innerHTML = "";
        }, 1500);
    })
})

let icc = document.querySelectorAll('.icc');
icc.forEach(function(el){
    el.addEventListener('click', function () {
        
        hello.innerHTML = `<div class="hello" style="position: absolute;
                                z-index: 417047847385;
                                left: 0%;
                                top: 0%;
                                background-color: var(--hovColor);
                                height: 100vh;
                                width: 100%;
                                backdrop-filter: blur(5px);
                                 ">
                                <div class="hello" style="position: absolute;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%, -50%);
                                height: 10%;
                                width: 25%;
                                background-color: rgba(38, 38, 38, 0.866);
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                border-radius: 12px;
                                color: var( --textcolor);">
                                <p>unavailable</p>
                                </div>
                                </div>
                                        `;
    
        body.appendChild(hello);
    
        setTimeout(() => {
            hello.innerHTML = "";
        }, 1500);
    })
})