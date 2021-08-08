import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // Устанавливается изначальный стэйт 
    // и извлекаем значение стэйта и изменяющую функцию
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // Пишем функции изменяющие стэйт
    const titleChangeHandler = (event) => { setEnteredTitle(event.target.value) }
    const amountChangeHandler = (event) => { setEnteredAmount(event.target.value) }
    const dateChangeHandler = (event) => { setEnteredDate(event.target.value) }
    // При сабмите формы извлекаем нужные данные
    const submitHandler = (e) => {
        e.preventDefault()
        const expenseData = ({
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        })
        props.onSaveExpenseData(expenseData)
        //Обнуляем данные
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    // Рендерим
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                {/* В значении value хранится текущий стэйт, уже обнуленный */}
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Expense</button>
            <button type="button" onClick = {props.clicked}>Cancel</button>
        </div>
    </form>
}

export default ExpenseForm