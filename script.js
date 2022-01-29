
const btnTwittar = document.getElementById('btn-tweetar').addEventListener('click',postar)



function postar(){
const container = document.getElementsByTagName('article')[0];
let caixaInput = document.getElementById('caixa').value
 






//menu interação
  const menuTweeter = `<span class="container-btn-tweet">
                            <label for="retweet" class="btn-tweet-post"><img src="/icones/fav-icon.png"></label>
                            <label for="like" class="btn-tweet-post"><img src="/icones/retweet-icon.png"></label>                            
                        </span>`


    if( caixaInput.length >=2 && caixaInput.length <= 250 ){
    var post = document.createElement('li');
    post.classList.add('tt')
    post.textContent = document.getElementById('caixa').value
    container.appendChild(post).innerHTML += menuTweeter
    document.getElementById('caixa').value= null;
    
    }else if (caixaInput.length <= 2){
    alert("Nos conte algo")

    }else{
    alert("O que acha de fazer um resumo de ate 250 caracteres")
}


}




//Botão lateral de twittar 

let btnTwittarLateral = document.getElementById('aside-btn-tweetar').addEventListener('click',tweetarLateral)
function tweetarLateral(){
  document.getElementById('caixa').focus()
}






