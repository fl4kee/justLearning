import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const NewUserFormStyled = styled.form`
    & > div{
        display: flex;
        flex-direction: column;
    }
    label{
        font-weight: bold;
    }
    input{
        margin-bottom: 0.9rem;
        width: 100%;
    }
    input:focus{
        border: 3px solid #6E2ccc;
        outline: none;
    }

`


const NewUserForm = (props) => {
    const [newUsername, SetNewUsername] = useState('')
    const [newAge, SetNewAge] = useState('')
    const[error, setError] = useState()

    const closeModal = () => {
        setError()
    }
    const onChangeUsernameHandler = (event) => {
        SetNewUsername(event.target.value)
    }
    const onChangeAgeHandler = (event) => {
        SetNewAge(event.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()

        if (newUsername.trim().length === 0 || newAge.trim().length === 0) {
            setError({
                title: 'Missing credentials',
                message: 'Username and age are required'
            })
            return 
        }
        if (+newAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Age must be greater than 0'
            })
            return
        }
        props.onSubmitNewUser({
            username: newUsername,
            age: newAge,
            id: Math.random()
        })
        SetNewUsername('')
        SetNewAge('')


    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onCloseModal = {closeModal}/>}
            <Card>
                <NewUserFormStyled onSubmit={onSubmitHandler}>
                    <div>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input value={newUsername} type="text" id="username" name="username" onChange={onChangeUsernameHandler}></input>
                        </div>
                        <div>
                            <label htmlFor="age">Age(Years)</label>
                            <input value={newAge} type="number" id="age" name="age" onChange={onChangeAgeHandler}></input>
                        </div>
                    </div>
                    <Button type="submit">Add user</Button>
                </NewUserFormStyled>
            </Card>
        </>
    )
}

export default NewUserForm
