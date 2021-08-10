import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background: #4C0B57;
    color: white;
    padding: 0.3rem 1rem;

    &:hover{
        background: #6E2080;
    }

`

const Button = () => {
    return(
        <StyledButton> Add User </StyledButton>
    )
}

export default Button