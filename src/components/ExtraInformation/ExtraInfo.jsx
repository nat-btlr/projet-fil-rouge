import {
  Row,
  Col,
  Card,
  Tab,
  Tabs,
  Container
} from 'react-bootstrap';
import './style.css';
import imgVideo2 from '../Images/carousel2.jpg';

// CREATING EXTRA CONTAINER //
const SimilarVideo = ({ image, title }) => (
  <Card className="similar-video-card">
    <div className="image-container">
      <Card.Img className="similar-video-image" variant="top" src={image} />
      <button className="play-button">&#9658;</button>
    </div>
    <Card.Body className="similar-video-container">
      <Card.Title>{title}</Card.Title>
    </Card.Body>
  </Card>
);

// A div with similar videos extra information

const SimilarVideos = () => (
  <>
  <Row className="similar-videos-row">
    <div className="similar-videos-slider">
      <SimilarVideo image={imgVideo2} title="Video 1" />
      <SimilarVideo image={imgVideo2} title="Video 2" />
      <SimilarVideo image={imgVideo2} title="Video 3" />
      <SimilarVideo image={imgVideo2} title="Video 4" />
      <SimilarVideo image={imgVideo2} title="Video 5" />
      <SimilarVideo image={imgVideo2} title="Video 6" />
      <SimilarVideo image={imgVideo2} title="Video 7" />
      <SimilarVideo image={imgVideo2} title="Video 8" />
    </div>
  </Row>
</>
);

// Creating a div that will appear with the click on More Info

const MoreInfoVideo = ({ description, details }) => (
  <Container className='more-info-container'>
    <Row>
      <h2>Description de la vidéo</h2>
      <span>{description}</span>
      <span>{details}</span>
    </Row>
  </Container>
);

const ExtraInfo = () => (
  <div className="extra-info-container">
    <Row className="extra-info-header">
      <Col>
        <Tabs
          defaultActiveKey="similarvideo"
          id="tab-video-info"
          className="mb-3"
        >
          <Tab eventKey="similarvideo" title="Ça peut vous intéresser">
            <SimilarVideos />
          </Tab>
          <Tab eventKey="moreinfo" title="En savoir plus">
            <MoreInfoVideo
              description="On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes)."
              details="Durée: 25 minutes"
            />
          </Tab>
        </Tabs>
      </Col>
    </Row>
  </div>
);

export default ExtraInfo;
