import React from 'react'
import styled from 'styled-components'

const ModalWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.8);
    position: absolute;
`

const ModalWrapper = (props) => {
    return(
        <ModalWrapperStyled>
            {props.children}
        </ModalWrapperStyled>
    )
}

export default ModalWrapper