import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';

export function UserItem(props) {
  return (
    <Col md='4'>
      <Row>
        <Card style={{ marginBottom: '1rem' }}>
          <Card.Body>
            <Card.Title>{props.userinfo.name}</Card.Title>

            <Card.Text>
              <h5>Email: {props.userinfo.email}</h5>
              <h5>Country: {props.userinfo.country} </h5>
              <h5>Password: {props.userinfo.password} </h5>
            </Card.Text>
            <Card.Link href='#'>Edit </Card.Link>
            <Card.Link href='#'>Delete </Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </Col>
  );
}

export default UserItem;
