const app = Vue.createApp({
    data(){
        return{
            output: '',
            output2: '',
            confirmed: ''
        }
    },
    methods:{
        showAlert() {
            alert('Hello there!')
        },
        outputFunc(e){
            this.output = e.target.value
        },
        outputFunc2(e){
            this.output2 = e.target.value
        },
        confirmedOutput(){
            this.confirmed = this.output2
        }
    }
}).mount('#assignment')