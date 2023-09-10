let p_El = document.getElementById("p_el")
let pc_El = document.getElementById("pc_el")
let btn =document.getElementById("sub_btn")
let SEl = document.getElementById("ele")
btn.addEventListener("click",function(){
    if(p_El.value!=pc_El.value)
    {
       SEl.textContent+="Password not same "
        
    }
})