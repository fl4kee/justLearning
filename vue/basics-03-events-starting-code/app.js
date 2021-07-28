const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName:''
    };
  },
  methods: {
    add(){
      this.counter = this.counter + 1;
    },
    sub(){
      this.counter = this.counter - 1;
    },
    setName(e){
      this.name = e.target.value;
    },
    submitForm(){
      alert('Form submited')
    },
    confirmInput(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');


// const addButton = document.querySelector('#add')
// const subButton = document.querySelector('#sub')
// let counter = document.querySelector('#counter')
// const userName = document.querySelector('#name')
// const input = document.querySelector('input')
// counter.textContent = 0

// addButton.addEventListener('click',() => {
//   counter.textContent = parseInt(counter.textContent)+ 1;
// })

// subButton.addEventListener('click',() => {
//   counter.textContent = parseInt(counter.textContent) - 1;
// })

// input.addEventListener('input', (e) => {
//   userName.textContent = e.target.value
// })

