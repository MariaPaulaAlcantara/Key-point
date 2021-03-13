//-----------------ROLAGEM LATERAL-------------------//
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}


//-----------------FOGUETE-----------------------//
//Faz ele se movimentar//
//document.addEventListener("mousemove", function(e){
  //  var rocket = document.querySelector(".rocket");
 //   rocket.style.left = e.offsetX + "px";
  //  rocket.style.top = e.offsetY + "px";
//})


//function stars(){
   // let count = 50;
   // let scene = document.querySelector('.scene');
  //  let i = 0;

  //  while(i < count){
  //      let star = document.createElement("i");
  //      let x = Math.floor(Math.random() * window.innerWidth);
//
  //      let duration = Math.random() * 1;
  //      let h = Math.random() * 100;

  //      star.style.left = x + "px";
  //      star.style.width = 1 + "px";
  //      star.style.height = 50 + h + "px";
  //      star.style.animationDuration = duration + "s";

 //       scene.appendChild(star);
 //       i++
  //  }
//}
//stars();



//-----------------MENU-------------------//

function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg")
}

//------------------CHAT BOT-------------------//

function mostraTexto() {
    var inPergunta = document.getElementById("inFazerPrgt");
    var outResposta = document.getElementById("outResposta");

   

    //Conteudo do campo de entrada
    var pergunta = inPergunta.value;



    var palavrasChave1 = 'certificados';
    var palavrasChave2 = 'ajuda';
    var palavrasChave3 = 'faculdade';
    var palavrasChave4 = 'php';
    var palavrasChave5 = 'empregos';

    var erro = outResposta.textContent = "Ops, faça outra pergunta, se tiver com dificuldade de encontrar respostas digite: ajuda";
    var limparCampo = inPergunta.value = "";

    

    if(pergunta.match(/[A-Z]/g)){
        
        outResposta.textContent = "Não pode ter letras maiusculas"
        
        limparCampo;

    } else if(pergunta == palavrasChave1 ) {
        //Conteudo do paragrafo
        

        outResposta.textContent = "Que bom que você perguntou sobre meus " + pergunta + "." + " Faço diversos cursos online na Alura e já conto com 14 certificados de conclusão. Para ter acesso aos certicados completos acesse meu likedin e obtenha todas as informações necessárias. ";   
        limparCampo;

    } else {
        erro;
        inPergunta.value = "";

    } if(pergunta == palavrasChave2 ) {
        //Conteudo do paragrafo
        outResposta.textContent = "Que bom que você decidiu pedir ajuda.. Aqui vai algumas palavrinhas para você pesquisar: certificados, faculdade, empregos, php"; 
         limparCampo;

    } else {
        erro;
        limparCampo;

    } if(pergunta == palavrasChave3 ) {
        //Conteudo do paragrafo
        outResposta.textContent = "Atualmente(2021) estou no segundo periodo do curso ciências da computação. Com ótimas notas concluí as materias de, banco de dados, computação em nuvem, desenvolvimento web e lógica de programação em Python.";  
         limparCampo;
         
    }   else {
        erro;
        limparCampo;

    } if(pergunta == palavrasChave4 ) {
        //Conteudo do paragrafo
         outResposta.textContent = "Foi no meu primeiro periodo da faculdade em que tive o primeiro contato com php ao realizar um trabalho cujo objetivo era fazer um site conectado ao banco de dados. Sem o menor tipo de experiência com php, me esforcei e me dediquei para poder aprender a linguagem no prazo de 2 semanas. A nota final que recebi pelo trabalho foi 9";   
    } else {
        erro;
        limparCampo;
    }  if(pergunta == palavrasChave5 ) {
        //Conteudo do paragrafo
         outResposta.textContent = "Ainda não tive oportunidades de trabalhar na área da tecnologia. Realizei apenas um site de loja em wordpress, porem infelizmente ele não está mais no ar por falta de pagamento a hospedagem. Estou a proucura de qualquer tipo de oportunidades na área.";   
    } else {
        erro;
        limparCampo;
    }


    
}

var btIr = document.getElementById("btIr");
    btIr.addEventListener("click", mostraTexto);