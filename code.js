let btns = document.getElementsByClassName("btn");

let texto =document.getElementsByClassName("text");

for(let i=0; i<btns.length; i++){
    console.log("Ciclo "+i)
    btns[i].addEventListener('click', function(){
        console.log("Tengo addlistener. Soy boton nº: "+btns[i]);
        texto[i].classList.replace(texto[i],"display=block");
        
        /** 
        let buttonStyle =getComputedStyle(this);
        let  buttonBGColor = buttonStyle["backgroundColor"];
        document.body.style.backgroundColor=buttonBGColor;*/
    })
}