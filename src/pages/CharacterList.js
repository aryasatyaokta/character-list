import React from 'react';

export default function CharacterList({ characters, onCharacterClick }) {
  return (
    <div id="character-list" className="container mt-5">
      <div className="row">
        <h3 className='mb-5' style={{ fontWeight: 'bold' }}>Character List</h3>
        {characters.map(character => (
          <div key={character.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={character.image} className="card-img-top" alt={character.name} />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">Species: {character.species}</p>
                <p className="card-text">Status: {character.status}</p>
                <p className="card-text">Origin: {character.origin.name}</p>
                <button className="btn btn-primary" onClick={() => onCharacterClick(character)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
