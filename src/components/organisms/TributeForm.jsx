import React, { useState } from 'react';
import InputField from '../atoms/InputField';
import TextArea from '../atoms/TextArea';
import Button from '../atoms/Button';
import './TributeForm.css';

const TributeForm = ({ addTribute, showTributes }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    age: '',
    discovery: '',
    favoriteAlbum: '',
    favoriteSong: '',
    otherArtists: '',
    otherGenres: '',
    tribute: ''
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTribute(formState);
    setFormState({
      name: '',
      email: '',
      age: '',
      discovery: '',
      favoriteAlbum: '',
      favoriteSong: '',
      otherArtists: '',
      otherGenres: '',
      tribute: ''
    });
  };

  return (
    <div className="tribute-form">
      <h2>Formulario sobre Michael Jackson</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Nombre" name="name" value={formState.name} onChange={handleChange} required />
        <InputField label="Correo" type="email" name="email" value={formState.email} onChange={handleChange} required />
        <InputField label="¿Qué edad tienes?" name="age" value={formState.age} onChange={handleChange} required />
        <InputField label="¿Cómo conociste al artista?" name="discovery" value={formState.discovery} onChange={handleChange} required />
        <InputField label="¿Cuál es tu álbum favorito de Michael Jackson?" name="favoriteAlbum" value={formState.favoriteAlbum} onChange={handleChange} required />
        <InputField label="¿Cuál es tu canción favorita de Michael Jackson?" name="favoriteSong" value={formState.favoriteSong} onChange={handleChange} required />
        <InputField label="¿Qué otro artista conoces?" name="otherArtists" value={formState.otherArtists} onChange={handleChange} required />
        <InputField label="¿Qué otro género escuchas?" name="otherGenres" value={formState.otherGenres} onChange={handleChange} required />
        <TextArea label="Dedícale unas palabras a Michael Jackson" name="tribute" value={formState.tribute} onChange={handleChange} required />
        <Button type="submit">Agregar</Button>
      </form>
      <Button onClick={showTributes}>Mostrar Respuestas</Button>
    </div>
  );
};

export default TributeForm;
