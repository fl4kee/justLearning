import React from 'react'
import styled from 'styled-components'
import ModalWrapper from './UI/ModalWrapper'

const ModalStyled = styled.div`
    background: white;
`

const Modal = () => {
    return(
        <ModalWrapper>
            <ModalStyled>
                <h1>Hello there</h1>
            </ModalStyled>
        </ModalWrapper>
    )
}

export default Modal