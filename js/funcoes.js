 function exibir_categoria(categoria) {
   let elementos = document.getElementsByClassName('box_produto')
   console.log(elementos)
   for (let i= 0; i<elementos.length; i++){
     console.log(elementos[i].id);
     if(categoria == elementos[i].id)
       elementos[i].style = "display: inline-block"
      else 
       elementos[i].style = "display:none"
    
   }
 }

 let exibir_todos = () => {
   let elementos = document.getElementsByClassName('box_produto')
   console.log(elementos)
   for (let i= 0; i<elementos.length; i++){
     elementos[i].style = "display:inline-block"
   }
 }

 let destaque = (imagem) => {
   console.log(imagem);
   if(imagem.width ==  300)
     imagem.width = 150
   else
     imagem.width = 300;
 }



// var A = 0; 

// var B = 1; 

// var R = 0; 

 

// for (let contador = 0; contador <= 10; contador++){ 

//     R = A + B; 

//     A = B; 

//     B = R; 

// } 

// console.log(B - A);