import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  CloseButton,
  ButtonGroup,
  Button,
  Form
} from 'react-bootstrap';
import './PageVideoInfo.css';

import DescriptionGroup from '../CardDescription/CardDescription';
import Footer from "../Footer/Footer";
import Navigation from '../Navigation/Nav';

const PageVideoInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const { url, title, description } = location.state || {};
  const apiUrl = import.meta.env.VITE_API_URL;
  const [video, setVideo] = useState(location.state || null);


  // --- Лайки ---
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (id) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = storedUser?.token;
      axios
        .get(`${apiUrl}/api/likes/${id}`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {}
        })
        .then((res) => {
          setLikes(res.data);
        })
        .catch((err) => {
          console.error("Erreur récupération likes:", err);
        });
    }
  }, [id, apiUrl]);

const handleLike = async () => {
  try {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("storedUser:", storedUser);
    const token = storedUser?.token;
    const userId = storedUser?.id;
    if (!userId) {
      alert("Vous devez être connecté pour liker.");
      return;
    }
    const response = await axios.post(
      `${apiUrl}/api/likes`,
      {
        userId: userId,
        videoId: parseInt(id, 10),
      },
      {
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      }
    );

    if (response.status === 200) {
      const countRes = await axios.get(`${apiUrl}/api/likes/${id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      });
      setLikes(countRes.data);
    }
  } catch (err) {
    console.error("Erreur ajout like:", err);
    alert(err.response?.data || "Impossible d'ajouter un like");
  }
};

  // Comments section
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (comment.trim() === "") return;
    setComments([{ text: comment, date: new Date().toLocaleString() }, ...comments]);
    setComment("");
  };

  const handleCloseButton = () => {
    navigate(-1);
  };

  return (
    <>
      <Navigation />
      <Container className="video-info-container">
        <Row className="image-container">
          <CloseButton className="closeButton" onClick={handleCloseButton} />
          {video && video.url ? (
            <video controls width="100%" height="auto">
              <source src={url} type="video/mp4" />
              Votre navigateur ne prend pas en charge la vidéo.
            </video>
          ) : (
            <p>Vidéo introuvable</p>
          )}
        </Row>

        <Row className="info-container align-items-center mt-3">
          <Col sm={2} className="d-flex align-items-center">
            <Button onClick={handleLike} className="me-2">
              👍 Liker
            </Button>
            {likes > 0 && <span>{likes}</span>}
          </Col>
          <Col sm={10}>
            <DescriptionGroup
              title={title || "Titre non disponible"}
              description={description || "Aucune description"}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <h5>Commentaires</h5>
          <Form className="mb-3 d-flex">
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Ajouter un commentaire..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button onClick={handleAddComment} className="ms-2">
              Commenter
            </Button>
          </Form>
          <div className="comments-list">
            {comments.length === 0 ? (
              <p>Aucun commentaire</p>
            ) : (
              comments.map((c, idx) => (
                <div key={idx} className="comment-item mb-2 p-2 border rounded">
                  <p className="mb-1">{c.text}</p>
                  <small className="text-muted">{c.date}</small>
                </div>
              ))
            )}
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PageVideoInfo;