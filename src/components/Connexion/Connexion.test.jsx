import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import Connexion from './Connexion';

// Mock de axios
vi.mock('axios');

// Mock de useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Composant wrapper pour les tests (nécessaire pour React Router)
const ConnexionWrapper = () => (
  <BrowserRouter>
    <Connexion />
  </BrowserRouter>
);

describe('Connexion Component Tests', () => {
  beforeEach(() => {
    // Réinitialiser les mocks avant chaque test
    vi.clearAllMocks();
    localStorage.clear();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  // Test 1 : Vérifier que le titre "Se Connecter" s'affiche correctement
  it('1. Affiche le titre "Se Connecter"', () => {
    render(<ConnexionWrapper />);
    const titre = screen.getByText(/Se Connecter/i);
    expect(titre).toBeInTheDocument();
  });

  // Test 2 : Vérifier que les champs email et mot de passe sont présents
  it('2. Affiche les champs email et mot de passe', () => {
    render(<ConnexionWrapper />);
    const emailInput = screen.getByPlaceholderText(/Entrer votre email/i);
    const passwordInput = screen.getByPlaceholderText(/Entrer votre mot de passe/i);
    
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  // Test 3 : Vérifier que l'utilisateur peut saisir des données dans ces champs
  it('3. Permet la saisie dans les champs email et mot de passe', () => {
    render(<ConnexionWrapper />);
    const emailInput = screen.getByPlaceholderText(/Entrer votre email/i);
    const passwordInput = screen.getByPlaceholderText(/Entrer votre mot de passe/i);

    // Simuler la saisie
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Vérifier les valeurs
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });

  // Test 4 : Vérifier que le bouton "Connexion" est présent et cliquable
  it('4. Affiche le bouton Connexion et il est cliquable', () => {
    render(<ConnexionWrapper />);
    const button = screen.getByRole('button', { name: /Connexion/i });
    
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  // Test 5 : Vérifier que le lien "Créer un compte" s'affiche
  it('5. Affiche le lien "Créer un compte"', () => {
    render(<ConnexionWrapper />);
    const texte = screen.getByText(/Pas de compte ?/i);
    const lien = screen.getByRole('link', { name: /Créer un compte/i });
    
    expect(texte).toBeInTheDocument();
    expect(lien).toBeInTheDocument();
    expect(lien).toHaveAttribute('href', '/inscription');
  });

  // Test 6 : Vérifier l'affichage d'un message d'erreur en cas d'échec de connexion
  it('6. Affiche un message d\'erreur en cas d\'échec de connexion', async () => {
    // Mock d'une réponse d'erreur d'axios
    axios.post.mockRejectedValueOnce(new Error('User not found'));

    render(<ConnexionWrapper />);
    
    const emailInput = screen.getByPlaceholderText(/Entrer votre email/i);
    const passwordInput = screen.getByPlaceholderText(/Entrer votre mot de passe/i);
    const button = screen.getByRole('button', { name: /Connexion/i });

    // Remplir le formulaire
    fireEvent.change(emailInput, { target: { value: 'wrong@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    
    // Soumettre le formulaire
    fireEvent.click(button);

    // Attendre l'affichage du message d'erreur
    await waitFor(() => {
      const errorMessage = screen.getByText(/Aucun utilisateur trouvé avec cet e-mail/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  // Test 7 : Vérifier le stockage des données utilisateur et la redirection en cas de succès
  it('7. Stocke les données utilisateur et redirige vers /homeauth en cas de succès', async () => {
    // Mock d'une réponse de succès d'axios
    const mockUserData = {
      id: 1,
      token: 'fake-jwt-token',
      username: 'testuser',
      email: 'test@example.com',
      role: 'MEMBER'
    };

    axios.post.mockResolvedValueOnce({
      status: 200,
      data: mockUserData
    });

    render(<ConnexionWrapper />);
    
    const emailInput = screen.getByPlaceholderText(/Entrer votre email/i);
    const passwordInput = screen.getByPlaceholderText(/Entrer votre mot de passe/i);
    const button = screen.getByRole('button', { name: /Connexion/i });

    // Remplir le formulaire
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    // Soumettre le formulaire
    fireEvent.click(button);

    // Attendre que la requête soit effectuée
    await waitFor(() => {
      // Vérifier le localStorage
      const storedUser = JSON.parse(localStorage.getItem('user'));
      expect(storedUser).toEqual(mockUserData);
      
      // Vérifier la redirection
      expect(mockNavigate).toHaveBeenCalledWith('/homeauth');
    });
  });

  // Test 8 : Vérifier que les champs sont réinitialisés après une connexion réussie
  it('8. Réinitialise les champs après une connexion réussie', async () => {
    // Mock d'une réponse de succès d'axios
    const mockUserData = {
      id: 1,
      token: 'fake-jwt-token',
      username: 'testuser',
      email: 'test@example.com',
      role: 'MEMBER'
    };

    axios.post.mockResolvedValueOnce({
      status: 200,
      data: mockUserData
    });

    render(<ConnexionWrapper />);
    
    const emailInput = screen.getByPlaceholderText(/Entrer votre email/i);
    const passwordInput = screen.getByPlaceholderText(/Entrer votre mot de passe/i);
    const button = screen.getByRole('button', { name: /Connexion/i });

    // Remplir le formulaire
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    // Vérifier que les champs contiennent les valeurs
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');

    // Soumettre le formulaire
    fireEvent.click(button);

    // Attendre que les champs soient réinitialisés
    await waitFor(() => {
      expect(emailInput.value).toBe('');
      expect(passwordInput.value).toBe('');
    });
  });
});