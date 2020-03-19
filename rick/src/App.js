import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [character, setCharacter] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
      const data = await response.json();

      console.log(data);
      setCharacter(data.results);
    }
    fetchData();
  }, []);

  return (
    <ul className="cards" >
      {character.map(cha => (
        <li key={cha.id} className="cards__item">
          <div className="card">
          
            <img className="card__image" src={cha.image} alt={cha.name} />
          
            <div className="card__content">
              <div className="card__title">{cha.name}</div>

                <div className="card__list">  
                  <div className="card__status">
                    <p>Status</p>
                    <p className="orange">{cha.status}</p>
                  </div>

                  <div className="card__status">
                    <p>Epecies</p>
                    <p className="orange">{cha.species}</p>
                  </div>

                  <div className="card__status">
                    <p>Gender</p>
                    <p className="orange">{cha.gender}</p>
                  </div>

                  <div className="card__status">
                    <p>Origin</p>
                    <p className="orange">{cha.origin.name}</p>
                  </div>

                  <div className="card__status">
                    <p>Last Location</p>
                    <p className="orange">{cha.location.name}</p>
                  </div>
                </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

