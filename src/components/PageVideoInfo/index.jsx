import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
  CloseButton,
  ButtonGroup,
  Button
} from 'react-bootstrap';
import './style.css';

import ExtraInfo from '../ExtraInformation/ExtraInfo';
import DescriptionGroup from '../CardDescription/CardDescription';
import Footer from '../Footer';

// A function to be implement for it to loop over video covers
import imgVideo from '../Images/test41.jpg';

// A component that assembles the page
const PageVideoInfo = () => {
  const navigate = useNavigate();

  const handleCloseButton = () => {
    navigate('/videocategorysante');
  };

  const videoUrl = "http://localhost:8080/video1.mp4"

  return (
  <Container className="video-info-container">
    <Row className="image-container">
      <CloseButton className="closeButton" onClick={handleCloseButton}/>
      {/* <img id="video-cover" src={imgVideo} alt="Woman with an apple"/> */}
      <video
        controls
        width="720"
        height="480"
      >
        <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
    </Row>
    <Row className="info-container">
      <Col className="buttons-video" sm={4}>
        <Button size="lg" className="play-button-big">
          LECTURE
        </Button>
        <ButtonGroup className="action-buttons">
          <Button className="rounded-circle">
            Partager
          </Button>
          <Button className="rounded-circle">
            Favoris
          </Button>
          <Button className="rounded-circle">
            Save
          </Button>
        </ButtonGroup>
      </Col>
      <Col className="description-video" sm={8}>
        <DescriptionGroup title="Nom de la vidéo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla magna ut erat dignissim vulputate. Nunc posuere fringilla scelerisque. Curabitur vel nulla pretium, pharetra mi vitae, tempor neque." />
      </Col>
    </Row>
    <Row className="extra-container">
      <ExtraInfo />
    </Row>
    <Footer />
    </Container>
  );
};

export default PageVideoInfo;
