import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    width: 45%;
    background-color: #FFF;
    border-radius: 10px;
    padding: 1rem;
    margin: 20px auto 0;
`
const Card = (props) => {
    return (
        <CardWrapper>
            {props.children}
        </CardWrapper>
    )
}

export default Card
