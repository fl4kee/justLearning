let input = prompt("What would you like to do? ")
const todos=['1', '2']
while(input !== 'quit' && input !=='q'){
    if (input === 'list'){
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
    } else if (input === 'new'){
        const newTodo = prompt('Ok, what is new todo?')
        todos.push(newTodo)
        console.log('Added new todo to the list')
    } else if (input ==='delete'){
        const index = parseInt(prompt('Ok enter index of what you want to delete: '))
        if (!Number.isNaN(index)){   
            const deleted = todos.splice(index, 1)
            console.log(`Ok ${deleted} is deleted`)
        }
        else{
            console.log('Uknown index')
        }
    }
    input = prompt("What would you like to do? ")
    
}
console.log("OK QUIT THE APP")