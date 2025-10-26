// GestionMembres.jsx
import React, { useState, useEffect } from 'react';
import NavAdmin from '../NavAdmin/NavAdmin';
import './GestionMembres.css';
import CarrouselMembres from '../CarrouselMembres/CarrouselMembres';
import FooterAdmin from '../FooterAdmin/FooterAdmin';
import { Button, Form } from 'react-bootstrap';
import Profil from '../Images/profil.png';

const GestionMembres = () => {
  const [membres, setMembres] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredMembres, setFilteredMembres] = useState([]);
  const [searchError, setSearchError] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user"))?.token;
        const res = await fetch(`${apiUrl}/api/users`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {}
        });
        if (res.ok) {
          const data = await res.json();
          const users = Array.isArray(data) ? data.map(u => ({
            username: u.username,
            email: u.email,
            imageUrl: Profil,
            id: u.id
          })) : [];
          setMembres(users);
          setFilteredMembres(users);
        }
      } catch (err) {
        setMembres([]);
        setFilteredMembres([]);
      }
    };
    fetchUsers();
  }, [apiUrl]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setSearchError("");
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setFilteredMembres(membres);
      setSearchError("");
      return;
    }
    try {
      const token = JSON.parse(localStorage.getItem("user"))?.token;
      const params = new URLSearchParams();
      if (search.includes("@")) {
        params.append("email", search);
      } else {
        params.append("username", search);
      }
      const res = await fetch(`${apiUrl}/api/user/search?${params.toString()}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      });
      if (res.ok) {
        const user = await res.json();
        setFilteredMembres([{ username: user.username, email: user.email, imageUrl: Profil, id: user.id }]);
        setSearchError("");
      } else {
        setFilteredMembres([]);
        setSearchError("Pas d'utilisatier avec ces données.");
      }
    } catch (err) {
      setFilteredMembres([]);
      setSearchError("Pas d'utilisatier avec ces données.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cet utilisateur?")) return;
    try {
      const token = JSON.parse(localStorage.getItem("user"))?.token;
      const res = await fetch(`${apiUrl}/api/user/${id}`, {
        method: "DELETE",
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      });
      if (res.ok) {
        setMembres(prev => prev.filter(u => u.id !== id));
        setFilteredMembres(prev => prev.filter(u => u.id !== id));
      }
    } catch (err) {
    }
  };

  return (
    <>
      <NavAdmin />
      <h1 className='titre-gestion-membres'>Gestion des Membres</h1>
      <div className='container-gestion-membres'>
        <div className='container-gestion'>
          <div id='rech'>
            <h5>Rechercher un membre :</h5>
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="search"
                placeholder="Rechercher un membre"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={handleSearchChange}
              />
              <Button id="boutonRechercher" type="submit">Rechercher</Button>
            </Form>
          </div>
        </div>

        {searchError ? (
          <div className="search-error" style={{ textAlign: 'center', color: 'var(--prune)', margin: '30px 0', fontWeight: 'bold' }}>{searchError}</div>
        ) : (
          <CarrouselMembres membres={filteredMembres} onDelete={handleDelete} />
        )}
      </div>
      <FooterAdmin />
    </>
  );
};

export default GestionMembres;
