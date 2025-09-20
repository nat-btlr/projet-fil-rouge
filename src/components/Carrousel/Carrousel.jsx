import { Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Carrousel.css';
import { isValidCategory } from '../../constants/categories';

const Video = ({ id, title, url, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/video/${id}`, { state: { url, title, description } });
  };

  return (
    <div className="video-card" onClick={handleClick}>
      <video className="video-thumbnail">
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-info">
        <p className="video-title">{title}</p>
        {description && <p className="video-description">{description}</p>}
      </div>
    </div>
  );
};

const Carrousel = ({ categoryName }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchVideos = async () => {
      console.log('Fetching videos for category:', categoryName);

      if (!isValidCategory(categoryName)) {
        setError('Invalid category');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(
          `${apiUrl}/public/getvideos?category=${categoryName}`
        );

        console.log('Response status:', response.status);
        console.log('Response data:', response.data);

        if (response.status === 200) {
          if (Array.isArray(response.data)) {
            setVideos(response.data);
            setError(null);
          } else {
            console.error('Expected array but got:', typeof response.data);
            setVideos([]);
          }
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Loading error');
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    if (categoryName) {
      fetchVideos();
    }
  }, [categoryName, apiUrl]);

  if (loading) {
    return (
      <Row className="videos-row">
        <div className="videos-slider">
          <p>Loading...</p>
        </div>
      </Row>
    );
  }

  if (error) {
    return (
      <Row className="videos-row">
        <div className="videos-slider">
          <p>{error}</p>
        </div>
      </Row>
    );
  }

  return (
    <Row className="videos-row">
      <div className="videos-slider">
        {videos.length === 0 ? (
          <p>No videos found for this category</p>
        ) : (
          videos.map((video, index) => (
            <Video
              key={video.id || index}
              id={video.id || index}
              title={video.title}
              url={video.url}
              description={video.description}
            />
          ))
        )}
      </div>
    </Row>
  );
};

export default Carrousel;
