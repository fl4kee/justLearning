const score1 = document.querySelector('#p1score');
const score2 = document.querySelector('#p2score');
const button1 = document.querySelector('#p1Button');
const button2 = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const topScore = document.querySelector('#topscore');


function addScore(x){
    x.innerText = parseInt(x.innerText) + 1;
}

function win(score1, score2){
    if (parseInt(score1.innerText) === parseInt(topScore.value)){
        button1.disabled = true;
        button2.disabled = true;
        score1.classList.add('green')
        score2.classList.add('red')   
    }
    else if (parseInt(score2.innerText) === parseInt(topScore.value)){
        button1.disabled = true;
        button2.disabled = true;
        score2.classList.add('green')
        score1.classList.add('red')   
    }
}


button1.addEventListener('click', function(){
   addScore(score1);
   win(score1, score2)

})
button2.addEventListener('click', function(){
   addScore(score2);
   win(score1, score2)
})

reset.addEventListener('click', function(){
    score1.innerText='0';
    score2.innerText='0';
    button1.disabled = false;
    button2.disabled = false;
    
    score1.classList.remove('red')
    score1.classList.remove('green')
    score2.classList.remove('green')
    score2.classList.remove('red')
})