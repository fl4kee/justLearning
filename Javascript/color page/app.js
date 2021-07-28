function randomColor(){
    let bg = {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255),
        background : function background() {
             return `rgb(${this.red},${this.green},${this.blue})`
    }
}
   return bg;
}

let button = document.querySelector('#button');
let body = document.querySelector('#container');
let h1 = document.querySelector('h1');

button.addEventListener('click', function() {
    h1.innerText = randomColor().background();
    body.bgColor = randomColor().background();
})

