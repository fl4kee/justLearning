// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const ul = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const quantityValue = form.elements.qty
    const productValue = form.elements.product
    
    const li = document.createElement('li')
    li.innerText = `${quantityValue.value} ${productValue.value}`
    ul.appendChild(li)
    
    quantityValue.value='';
    productValue.value='';
    
})