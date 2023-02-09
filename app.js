let user = document.querySelector("input");
let btn = document.querySelector("button");
let result = document.querySelector(".result");
let words =["APPLE","ORANGE","BANANA"];





btn.addEventListener("click",()=>{
if(user.value == words[0] || user.value == words[1] ||user.value == words[2]){
    result.classList.toggle("results");
    result.innerHTML = "CORRECT";
}else{
    result.classList.add("wrong");
    result.innerHTML = "WRONG";
}
if(user.value == ""){
    result.innerHTML = "please input your answer";
}
})

result.addEventListener("click",()=>{
    result.classList.remove("wrong");
    result.classList.remove("remove");
})

result.addEventListener("click",()=>{
    result.classList.remove("remove");
})