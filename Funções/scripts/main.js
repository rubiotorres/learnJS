alert("Olá, Mundo!");
var a=1;

var str = "Esse link é daora";
var result = str.link("www.google.com");
document.write("<p>"+result+"<\p>");
function mOver(obj){
    obj.innerHTML="Thanks"
}
function mOut(obj){
    obj.innerHTML="Passe aqui!!!"

    
}
function mudavariavel(){
    if(a==1){
      a=2;
    }
    else{
      a=1;
    }
    mudaImagem(a);
    alert(a);
  }
  
function mudaImagem(obj){
        alert(obj);
        if(obj==1){
            document.getElementById("verde").src="imagens/vermelho.png";   
            
        } 
        else if(obj==2){
            document.getElementById("verde").src="imagens/verde.png";

        }
}