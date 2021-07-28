// const auth = async (username, password) =>{
//     if(!username || !password){
//         throw 'Missing credentials'
//     }
//     if (password === 'wow'){
//         return 'You logged in'
//     }
//     else {
//         throw 'Wrong password'
//     }
// }

// async function auth_res(){
//     try{
//       await auth()
//       console.log('Logged in')
//     }
//     catch(e){
//         console.log(e)
//     }
// }

// auth_res()



// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...")
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })

// const req = async () => {
//     try{
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     }
//     catch (e){
//         console.log("OH NO! ERROR!", e)
//     }
// }
// req()



const asyncf = async () =>{
    try{
        const data = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(data.data.ticker.price)
    }
    catch(e) {
        console.log("OH NO! ERROR!", e)
    }
    
}
asyncf()