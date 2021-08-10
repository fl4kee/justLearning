import styled from 'styled-components'
import NewUserForm from './components/users/NewUserForm'
import UsersList from './components/users/UsersList'
import { useState } from 'react'

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2 rem;
background: #1E1D1E;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: space-around;

`


function App() {

  
  const [data, setData] = useState([
    {username: 'kir', age: 26},
    {username: 'iri', age: 24}
])
  const onSubmitNewUserHandler =(newUser) => {
    setData((prev) => ([...prev, newUser]))
    console.log(data)
    
  }

  return (
    <AppWrapper>
      <NewUserForm onSubmitNewUser={onSubmitNewUserHandler}/>
      <UsersList data={data}/>
    </AppWrapper>
  );
}

export default App;
