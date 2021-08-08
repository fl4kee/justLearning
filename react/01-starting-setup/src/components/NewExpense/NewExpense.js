import React, {useState} from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const[clicked, setClicked] = useState(false)
    const addButtonHandler = () => {
        setClicked(!clicked)
    }

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setClicked(!clicked)
    }
    return <div className="new-expense">
        
        {!clicked && <button onClick = {addButtonHandler}> Add New Expense</button>}  
        {clicked && <ExpenseForm clicked = {addButtonHandler} onSaveExpenseData = {SaveExpenseDataHandler}/>}
    </div>
};

export default NewExpense