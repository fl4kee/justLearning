import React from 'react'
import styled from 'styled-components'

const BackdropStyled = styled.div`
  position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 10;
        background: rgba(0, 0, 0, 0.75);
`
const Backdrop = (props) => {
  return (
    <BackdropStyled {...props}>
    </BackdropStyled>
  )
}

export default Backdrop