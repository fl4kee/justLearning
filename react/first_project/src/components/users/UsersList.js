import React from 'react'
import Card from '../UI/Card'
import UserItem from './UserItem'

import styled from 'styled-components'

const UsersListStyled = styled.ul`

`

const UsersList = (props) => {
    return (
        <Card>
            <UsersListStyled>
                {props.data.map(user => (
                    <UserItem username={user.username}
                              age={user.age}
                              key={user.id}/>
                ))}
            </UsersListStyled>
        </Card>

    )
}

export default UsersList