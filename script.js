let light=document.getElementsByTagName("img")[0];
let main=document.getElementById("main");
light.addEventListener("click",()=>{
    if(light.src.match("img/sunrise.avif")){
        main.style.backgroundColor="black";
        main.style.color="white";
        light.title="Switch to darkmode";
       
        light.src="img/darkbackground.avif";



    
    }
    else{
        main.style.backgroundColor="white";
        main.style.color="black";
        light.title="Switch to whitemode";
        light.src="img/sunrise.avif";
        
    }
});