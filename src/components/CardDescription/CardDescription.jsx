import React from 'react';
import {
  Button,
  Card
} from 'react-bootstrap';

// A component of the video description
const DescriptionGroup = ({ title, description }) => (
  <Card>
    <Card.Body className="description-container">
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default DescriptionGroup;
