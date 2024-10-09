import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Row,
  Col,
  Card
} from 'react-bootstrap';
import './style.css';
import imgVideo1 from '../Images/test4.jpg';
import imgVideo2 from '../Images/carousel2.jpg';

const SousCategoryVideo = ({ image, title }) => {
  const navigate = useNavigate();

  const handlePlayButton = () => {
    navigate('/pagevideoinfo');
  };
  return (
  <Card className="sous-category-video-card">
    <div className="image-container">
      <Card.Img className="sous-category-video-image" variant="top" src={image} />
      <button onClick={handlePlayButton} className="play-button">&#9658;</button>
    </div>
    <Card.Body className="sous-category-video-container">
      <Card.Title>{title}</Card.Title>
    </Card.Body>
  </Card>
  );
};

const SousCategory = ({ titlecategory }) => (
  <>
    <Row className="sous-category-header">
      <Col>
        <h2>{titlecategory}</h2>
      </Col>
    </Row>
    <Row className="sous-category-videos-row">
      <div className="sous-category-videos-slider">
        <SousCategoryVideo image={imgVideo1} title="Video 1" />
        <SousCategoryVideo image={imgVideo2} title="Video 2" />
        <SousCategoryVideo image={imgVideo2} title="Video 3" />
        <SousCategoryVideo image={imgVideo2} title="Video 4" />
        <SousCategoryVideo image={imgVideo2} title="Video 5" />
        <SousCategoryVideo image={imgVideo2} title="Video 6" />
        <SousCategoryVideo image={imgVideo2} title="Video 7" />
        <SousCategoryVideo image={imgVideo2} title="Video 8" />
      </div>
    </Row>
  </>
);

export default SousCategory;
