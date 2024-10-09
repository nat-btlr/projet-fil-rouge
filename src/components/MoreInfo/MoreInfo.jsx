import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MoreInfo = ({ video, onBack }) => (
  <div className="video-details-container">
    <Card>
      <Card.Body>
        <Card.Title>{video.title}</Card.Title>
        <Card.Text>
          Detailed information about the video goes here.
        </Card.Text>
        <Button onClick={onBack}>Back to Similar Videos</Button>
      </Card.Body>
    </Card>
  </div>
);

export default MoreInfo;
