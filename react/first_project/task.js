const btn1 = document.querySelector('#btn1')
const body = document.querySelector('body')
btn1.addEventListener('click', () => {
  btn1.remove()
  const btn2 = document.createElement('button')
  btn2.innerText = 'button 2'
  body.appendChild(btn2)
  const btn3 = document.createElement('button')
  btn3.innerText = 'button 2'
  body.appendChild(btn3)
})
