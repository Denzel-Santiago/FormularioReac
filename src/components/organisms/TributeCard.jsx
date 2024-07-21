import React from 'react';
import './TributeCard.css';

const TributeCard = ({ tribute }) => {
  return (
    <div className="card">
      <div className="tools">
        <div className="circle_red"></div>
        <div className="circle yellow"></div>
        <div className="circle green"></div>
      </div>
      <div className="content">
        <h3>{tribute.name}</h3>
        <p><strong>Correo:</strong> {tribute.email}</p>
        <p><strong>Edad:</strong> {tribute.age}</p>
        <p><strong>Conoció al artista:</strong> {tribute.discovery}</p>
        <p><strong>Álbum favorito:</strong> {tribute.favoriteAlbum}</p>
        <p><strong>Canción favorita:</strong> {tribute.favoriteSong}</p>
        <p><strong>Otros artistas:</strong> {tribute.otherArtists}</p>
        <p><strong>Otros géneros:</strong> {tribute.otherGenres}</p>
        <p><strong>Tributo:</strong> {tribute.tribute}</p>
      </div>
    </div>
  );
};

export default TributeCard;
