import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import Home from '../pages/Home';
import CharacterList from '../pages/CharacterList';
import CharacterModal from '../component/CharacterModal';
import CharacterByLocation from '../pages/CharacterByLocation';
import Footer from '../component/Footer';
import { db } from '../config/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function MainPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(null);
  const [assignedCharacters, setAssignedCharacters] = useState({});
  const [showModal, setShowModal] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  const assignLocation = async (locationName) => {
    if (!locationName.trim()) {
      alert('Please enter a valid location name.');
      return;
    }

    if (!character) {
      alert('Please select a character.');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'characters'), { name: character.name, location: locationName });
      alert('Character assigned to location successfully.');
      setAssignedCharacters(prevState => ({
        ...prevState,
        [locationName]: [...(prevState[locationName] || []), { name: character.name, id: docRef.id }]
      }));
    } catch (error) {
      console.error('Error adding character:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const charactersCollection = collection(db, 'characters');
      const snapshot = await getDocs(charactersCollection);
      const assignedChars = {};
      snapshot.forEach(doc => {
        const { name, location } = doc.data();
        if (!assignedChars[location]) {
          assignedChars[location] = [];
        }
        assignedChars[location].push({ name, id: doc.id });
      });
      setAssignedCharacters(assignedChars);
    };
    fetchData();
  }, []);

  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      <Navbar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <Home />
      <CharacterList characters={characters} onCharacterClick={(character) => { setCharacter(character); setShowModal(true); }} />
      {showModal && character && (
        <CharacterModal character={character} onClose={() => setShowModal(false)} onAssignLocation={assignLocation} />
      )}
      <CharacterByLocation assignedCharacters={assignedCharacters} />
      <Footer />
    </div>
  );
}
