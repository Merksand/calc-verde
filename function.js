let botones = document.getElementsByClassName("print")
let pantalla = document.querySelector(".display") 
let clear   = document.querySelector(".allDelete")
let borrar = document.querySelector(".delete")
let igual = document.querySelector(".igual")
let panta= document.querySelector(".panta")
let coco= document.querySelector(".coco")
let array = Array.from(botones)
array.forEach((e)=>{
    e.addEventListener("click",()=>{
        //e.style.background="#245"
        
        pantalla.innerHTML +=  e.innerHTML
        
        coco.innerHTML += e.innerHTML
    }) 
})

clear.addEventListener("click",()=>{
    pantalla.innerHTML = ""
})
borrar.addEventListener("click",()=>{
    pantalla.innerHTML = pantalla.innerHTML.slice(0,-1)
})
igual.addEventListener("click",()=>{
    pantalla.innerHTML =eval( pantalla.innerHTML)
})
