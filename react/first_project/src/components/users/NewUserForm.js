import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../UI/Card'
import Button from '../UI/Button'
import Modal from '../Modal'
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

    const onChangeUsernameHandler = (event) => {
        SetNewUsername(event.target.value)
    }
    const onChangeAgeHandler = (event) => {
        SetNewAge(event.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()

        if(newUsername.trim().length === 0 || newAge.trim().length === 0){
            const error = 'Username and age are required'
            console.log(error)
            return Modal
        }
        if(newAge < 0){
            const error = 'Age cannot be less then 0'
            console.log(error)
            return
        }
        props.onSubmitNewUser ({
            username: newUsername,
            age: newAge,
            id: Math.random()
        })
        SetNewUsername('')
        SetNewAge('')

            
    }

    return (
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
                <Button />
            </NewUserFormStyled>
        </Card>
    )
}

export default NewUserForm
