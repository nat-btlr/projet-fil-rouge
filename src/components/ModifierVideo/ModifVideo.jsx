import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // récupère l'id depuis l'URL
import NavAdmin from '../NavAdmin/NavAdmin';
import FooterAdmin from '../FooterAdmin/footeradmin';
import { Form, Button, Container } from 'react-bootstrap';
import './style.css';

const ModifierVideo = () => {
  const { id } = useParams(); // ex: /modifier-video/3 → id = 3
  const [video, setVideo] = useState(null);
  const [isApiAvailable, setIsApiAvailable] = useState(true);

  // Récupérer la vidéo
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await fetch(`http://localhost:5000/videos/${id}`); // URL API à adapter
        if (!res.ok) throw new Error('API non disponible');
        const data = await res.json();
        setVideo(data);
      } catch (error) {
        console.warn('⚠ API non dispo, utilisation des données mock');
        setIsApiAvailable(false);
        // Données fictives
        setVideo({
          id: id,
          titre: "Titre",
          categorie: "Catégorie",
          auteur: "Auteur",
          description: "Description",
          image: '/images/pexels_1.jpg'

        });
      }
    };

    fetchVideo();
  }, [id]);

  // Mettre à jour les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo((prev) => ({ ...prev, [name]: value }));
  };

  // Enregistrer les modifications
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isApiAvailable) {
      alert("Pas d'API dispo, les changements ne sont pas enregistrés.");
      return;
    }
    try {
      const res = await fetch(`http://localhost:5000/videos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(video)
      });
      if (!res.ok) throw new Error('Erreur API');
      alert('Vidéo mise à jour avec succès !');
    } catch (error) {
      alert('Erreur lors de la mise à jour');
    }
  };

  if (!video) return <p>Chargement...</p>;

  return (
    <>
      <NavAdmin />
      <Container className="my-4">
        <h1 className="text-center">Modifier une vidéo</h1>
        <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
          <div className="text-center mb-3">
            <img src={video.image} alt={video.titre} style={{ width: '200px', height: 'auto' }} />
          </div>
          <Form.Group className="mb-3">
            <Form.Label>Titre</Form.Label>
            <Form.Control
              type="text"
              name="titre"
              value={video.titre}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Catégorie</Form.Label>
            <Form.Control
              type="text"
              name="categorie"
              value={video.categorie}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Auteur</Form.Label>
            <Form.Control
              type="text"
              name="auteur"
              value={video.auteur}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={4}
              value={video.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className='btn-enregistrer' type="submit">ENREGISTRER</Button>
        </Form>
      </Container>
      <FooterAdmin />
    </>
  );
};

export default ModifierVideo;