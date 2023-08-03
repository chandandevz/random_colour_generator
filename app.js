let btn = document.querySelector("#btn");

function getColor(){
    let color = '0123456789ABCDEF';
    let pre = "#";
    
    for(let i= 0; i<6; i++){
    pre=pre+color[Math.floor(Math.random()*16)];
    }
    document.body.style.backgroundColor = pre;
    document.querySelector("#hex").innerText = pre;
}

getColor();
btn.addEventListener("click",getColor);