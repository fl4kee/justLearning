import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { CardWrapper } from './Card'
import Backdrop from './Backdrop'
import ReactDOM from 'react-dom'

const ModalWrapperStyled = styled(CardWrapper)`
        position: fixed;
        top: 30vh;
        left: 30%;
        width: 40%;
        z-index: 100;
        overflow: hidden;
        padding: 0;

        .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 10;
        background: rgba(0, 0, 0, 0.75);
        }

        .header {
        background: #4f005f;
        padding: 1rem;
        }

        .header h2 {
        margin: 0;
        color: white;
        }

        .content {
        padding: 1rem;
        }

        .actions {
        padding: 1rem;
        display: flex;
        justify-content: flex-end;
        }
`



const BackdropElement = (props) => {
    return <Backdrop {...props}/>
}

const ModalElement = (props) => {
    return <ModalWrapperStyled {...props}>
        <header className="header">
            <h2>{props.title}</h2>
        </header>
        <div className="content">
            <p>{props.message}</p>
        </div>
        <footer className="actions">
            <Button>Okay</Button>
        </footer>
    </ModalWrapperStyled>
}


const ModalWrapper = (props) => {
    const closeModalHandler = () => {
        props.onCloseModal()
    }
    return (
        <>
            {ReactDOM.createPortal(<BackdropElement onClick={closeModalHandler}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalElement onClick={closeModalHandler} title={props.title} message={props.message}/>, document.getElementById('overlay-root'))}
        </>
    )
}

export default ModalWrapper