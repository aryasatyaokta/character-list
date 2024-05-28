import React, { useState } from 'react';

export default function CharacterModal({ character, onClose, onAssignLocation }) {
  const [locationName, setLocationName] = useState('');

  const handleAssignLocation = () => {
    onAssignLocation(locationName);
    setLocationName('');
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{character.name} Details</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="card-text">Species: {character.species}</p>
            <p className="card-text">Status: {character.status}</p>
            <p className="card-text">Origin: {character.origin.name}</p>

            <div className="form-group">
              <label htmlFor="locationInput">Location:</label>
              <input
                type="text"
                className="form-control"
                id="locationInput"
                placeholder="Enter location"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleAssignLocation}>Assign Location</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
