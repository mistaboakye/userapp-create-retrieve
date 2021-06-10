import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UserItem from './UserItem';

function Users(props) {
  return (
    <Container>
      <Row>
        {props.usersdata.map((user, index) => {
          return <UserItem userinfo={user} key={index} />;
        })}
      </Row>
    </Container>
  );
}

export default Users;
