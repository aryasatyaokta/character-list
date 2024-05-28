import React from 'react';

export default function CharacterByLocation({ assignedCharacters }) {
  return (
    <div id="characters-by-location" className="container mt-5">
    <h3 className='mb-5' style={{ fontWeight: 'bold' }}>Characters By Location</h3>
    <div className="row">
        {Object.keys(assignedCharacters).map(location => (
        <div key={location} className="col-md-4 mb-4">
            <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title">Location: {location}</h5>
                {assignedCharacters[location].map(char => (
                <div key={char.id} className="mb-3">
                    <p className="card-text">Name: {char.name}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
        ))}
    </div>
    </div>

  );
}
