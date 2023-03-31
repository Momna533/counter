const btns = document.querySelectorAll(".btn");
const value = document.querySelector(".value");
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(btn.classList.contains("increase")){
            value.innerHTML++;
        }else if(btn.classList.contains("decrease")){
            value.innerHTML--;
        }else{
            value.innerHTML = 0;
        }
        if(value.innerHTML > 0){
            value.style.color = "green";
        }
        if(value.innerHTML < 0){
            value.style.color = "red";
        }
        if(value.innerHTML == 0){
            value.style.color = "black";
        }
    })
})