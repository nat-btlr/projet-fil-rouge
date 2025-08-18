// Carrousel.jsx
import { Row } from 'react-bootstrap';
import './Carrousel.css';
import imgVideo2 from '../Images/carousel2.jpg';

const Video = ({ image, title }) => (
  <div className="video-card">
    <img src={image} alt={title} className="video-thumbnail" />
    <p className="video-title">{title}</p>
  </div>
);

const Carrousel = () => (
  <Row className="videos-row">
    <div className="videos-slider">
      <Video image={imgVideo2} title="Vidéo 1" />
      <Video image={imgVideo2} title="Vidéo 2" />
      <Video image={imgVideo2} title="Vidéo 3" />
      <Video image={imgVideo2} title="Vidéo 4" />
      <Video image={imgVideo2} title="Vidéo 5" />
      <Video image={imgVideo2} title="Vidéo 6" />
      <Video image={imgVideo2} title="Vidéo 7" />
      <Video image={imgVideo2} title="Vidéo 8" />
      <Video image={imgVideo2} title="Vidéo 9" />
      <Video image={imgVideo2} title="Vidéo 10" />
      <Video image={imgVideo2} title="Vidéo 11" />
      <Video image={imgVideo2} title="Vidéo 12" />
    </div>
  </Row>
);

export default Carrousel;
