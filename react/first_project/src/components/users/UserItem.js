import React from 'react'
import styled from 'styled-components'

const StyledUser = styled.div`
    border: 1px solid black;
    padding: 0.2em 0.6em;
    margin: 10px 10px;
`

const UserItem = (props) => {
    return(
        <StyledUser>
            <p>{props.username} ({props.age} years old)</p>
        </StyledUser>
    )
}

export default UserItem
