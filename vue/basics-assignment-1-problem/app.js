const app = Vue.createApp({
    data(){
        return {
            name: 'Kirill',
            age: 26,
            image: 'https://sun9-10.userapi.com/impf/c837226/v837226145/a8f0/G4S-MuwEOEU.jpg?size=1280x849&quality=96&sign=c999454f9bd9af848e2006036b31d8c2&type=album'
        }
    },
    methods: {
        random(){
            return Math.floor(Math.random()* 2)
    }
}}).mount('#assignment')