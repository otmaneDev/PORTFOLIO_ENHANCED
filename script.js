let li = document.querySelectorAll("li");
let icons = document.querySelectorAll(".fo");
let span = document.querySelectorAll("span");
let befores = document.querySelector(".before");


for(let i =0;i<5;i++){
   li[i].onclick = function(){
    if(i<2){
    scroll({
        top:750*i,
        behavior:"smooth"
    })
}else{
    scroll({
        top:730*(i+1),
        behavior:"smooth"
    })
}  
   }
}
onscroll=function(){
    if(scrollY >= 750 &&scrollY<2150){
        icons[1].style.color = "#05C137";
        span[1].style.color = "#05C137";
        befores.style.top = "196px";
        
    }else{
        icons[1].style.color = "black";
        span[1].style.color = "black";
        

    }
    if(scrollY <750){
        icons[0].style.color = "#05C137";
        span[0].style.color = "#05C137";
        befores.style.top = "100px";
    }else{
        icons[0].style.color = "black";
        span[0].style.color = "black";
        

    }
    if(scrollY >= 2150 &&scrollY<2800){
        icons[2].style.color = "#05C137";
        span[2].style.color = "#05C137";
        befores.style.top = "292px";
    }else{
        icons[2].style.color = "black";
        span[2].style.color = "black";
        

    }
    if(scrollY >= 2800 &&scrollY<3500){
        icons[3].style.color = "#05C137";
        span[3].style.color = "#05C137";
        befores.style.top = "388px";
    }else{
        icons[3].style.color = "black";
        span[3].style.color = "black";
        

    }
    if(scrollY >= 3500){
        icons[4].style.color = "#05C137";
        span[4].style.color = "#05C137";
        befores.style.top = "484px";
    }else{
        icons[4].style.color = "black";
        span[4].style.color = "black";
        

    }
    if(scrollY >= 400 ){
        up.style.display="block";
    }
    else{
        up.style.display="none";
    }
   
}

let up=document.getElementById('hell');
up.onclick=function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}

/* animations*/


const sr = ScrollReveal();
sr.reveal('.one',{
    duration:2000,
    distance:'100px',
    origin:'bottom',
    delay:100,
    reset: true
});
sr.reveal('.two',{
    duration:2000,
    distance:'100px',
    origin:'bottom',
    delay:200,
    reset: true
});
sr.reveal('.tree',{
    duration:2000,
    distance:'100px',
    origin:'bottom',
    delay:300,
    reset: true
});
sr.reveal('.four',{
    duration:2000,
    distance:'100px',
    origin:'bottom',
    delay:400,
    reset: true
});
sr.reveal('.five',{
    duration:2000,
    distance:'100px',
    origin:'bottom',
    delay:500,
    reset: true
});
sr.reveal('.imgg',{
    duration:1000,
    distance:'100px',
    origin:'right',
    reset: true
});




