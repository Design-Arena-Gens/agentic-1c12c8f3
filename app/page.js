'use client';

import { useState } from 'react';
import './globals.css';

const engines = [
  {
    id: 1,
    marque: 'BMW',
    modele: 'M3 Competition',
    moteur: '3.0L I6 Twin-Turbo',
    puissance: '510 ch',
    couple: '650 Nm',
    annee: 2023,
    consommation: '10.8 L/100km',
    emissions: '246 g/km CO2',
    prix: '€€€€',
    points: ['Performances exceptionnelles', 'Sonorité remarquable', 'Fiabilité éprouvée'],
    image: '🏎️'
  },
  {
    id: 2,
    marque: 'Mercedes-AMG',
    modele: 'A45 S',
    moteur: '2.0L I4 Turbo',
    puissance: '421 ch',
    couple: '500 Nm',
    annee: 2023,
    consommation: '8.9 L/100km',
    emissions: '203 g/km CO2',
    prix: '€€€€',
    points: ['Moteur 4 cylindres le plus puissant', 'Transmission intégrale 4MATIC+', 'Technologie de pointe'],
    image: '🚗'
  },
  {
    id: 3,
    marque: 'Porsche',
    modele: '911 GT3',
    moteur: '4.0L Flat-6',
    puissance: '510 ch',
    couple: '470 Nm',
    annee: 2023,
    consommation: '12.4 L/100km',
    emissions: '283 g/km CO2',
    prix: '€€€€€',
    points: ['Moteur atmosphérique pure', 'Précision chirurgicale', 'Sonorité emblématique'],
    image: '🏁'
  },
  {
    id: 4,
    marque: 'Honda',
    modele: 'Civic Type R',
    moteur: '2.0L I4 Turbo VTEC',
    puissance: '330 ch',
    couple: '420 Nm',
    annee: 2023,
    consommation: '7.9 L/100km',
    emissions: '180 g/km CO2',
    prix: '€€€',
    points: ['Meilleur rapport qualité-prix', 'Fiabilité Honda légendaire', 'Très efficient'],
    image: '🏆'
  },
  {
    id: 5,
    marque: 'Toyota',
    modele: 'GR Yaris',
    moteur: '1.6L I3 Turbo',
    puissance: '261 ch',
    couple: '360 Nm',
    annee: 2023,
    consommation: '7.1 L/100km',
    emissions: '161 g/km CO2',
    prix: '€€€',
    points: ['Moteur 3 cylindres exceptionnel', 'AWD rallye-spec', 'Compact et agile'],
    image: '🥇'
  },
  {
    id: 6,
    marque: 'Audi',
    modele: 'RS3',
    moteur: '2.5L I5 Turbo',
    puissance: '400 ch',
    couple: '500 Nm',
    annee: 2023,
    consommation: '9.3 L/100km',
    emissions: '212 g/km CO2',
    prix: '€€€€',
    points: ['5 cylindres unique', 'Sonorité distinctive', 'Quattro ultra performance'],
    image: '🎯'
  },
  {
    id: 7,
    marque: 'Ford',
    modele: 'Mustang GT',
    moteur: '5.0L V8',
    puissance: '450 ch',
    couple: '529 Nm',
    annee: 2023,
    consommation: '11.8 L/100km',
    emissions: '269 g/km CO2',
    prix: '€€€',
    points: ['V8 atmosphérique classique', 'Son américain authentique', 'Prix accessible'],
    image: '🐎'
  },
  {
    id: 8,
    marque: 'Mazda',
    modele: 'MX-5',
    moteur: '2.0L I4 Skyactiv-G',
    puissance: '184 ch',
    couple: '205 Nm',
    annee: 2023,
    consommation: '6.6 L/100km',
    emissions: '150 g/km CO2',
    prix: '€€',
    points: ['Efficience remarquable', 'Plaisir de conduite pur', 'Très économique'],
    image: '🌟'
  },
  {
    id: 9,
    marque: 'Volkswagen',
    modele: 'Golf R',
    moteur: '2.0L I4 TSI',
    puissance: '320 ch',
    couple: '420 Nm',
    annee: 2023,
    consommation: '7.8 L/100km',
    emissions: '177 g/km CO2',
    prix: '€€€',
    points: ['Polyvalence exceptionnelle', 'Technologie 4Motion', 'Utilisation quotidienne'],
    image: '⚡'
  },
  {
    id: 10,
    marque: 'Alpine',
    modele: 'A110 S',
    moteur: '1.8L I4 Turbo',
    puissance: '292 ch',
    couple: '340 Nm',
    annee: 2023,
    consommation: '7.3 L/100km',
    emissions: '165 g/km CO2',
    prix: '€€€€',
    points: ['Légèreté et équilibre', 'Moteur central arrière', 'Design français unique'],
    image: '🇫🇷'
  }
];

export default function Home() {
  const [filter, setFilter] = useState('tous');
  const [sortBy, setSortBy] = useState('puissance');

  const filteredEngines = engines.filter(engine => {
    if (filter === 'tous') return true;
    if (filter === 'sport') return parseInt(engine.puissance) > 350;
    if (filter === 'eco') return parseFloat(engine.consommation) < 8;
    if (filter === 'prix') return engine.prix.length <= 3;
    return true;
  });

  const sortedEngines = [...filteredEngines].sort((a, b) => {
    if (sortBy === 'puissance') return parseInt(b.puissance) - parseInt(a.puissance);
    if (sortBy === 'eco') return parseFloat(a.consommation) - parseFloat(b.consommation);
    if (sortBy === 'prix') return a.prix.length - b.prix.length;
    return 0;
  });

  return (
    <div className="container">
      <header className="header">
        <h1>🏎️ Meilleurs Moteurs Essence 2023-2025</h1>
        <p className="subtitle">Guide complet des meilleurs moteurs essence modernes</p>
      </header>

      <div className="filters">
        <div className="filter-group">
          <label>Filtrer par:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="select">
            <option value="tous">Tous les moteurs</option>
            <option value="sport">Sportifs (&gt;350ch)</option>
            <option value="eco">Économiques (&lt;8L/100km)</option>
            <option value="prix">Prix abordable</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Trier par:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select">
            <option value="puissance">Puissance</option>
            <option value="eco">Consommation</option>
            <option value="prix">Prix</option>
          </select>
        </div>
      </div>

      <div className="grid">
        {sortedEngines.map((engine) => (
          <div key={engine.id} className="card">
            <div className="card-header">
              <span className="emoji">{engine.image}</span>
              <div>
                <h2>{engine.marque} {engine.modele}</h2>
                <p className="year">{engine.annee}</p>
              </div>
            </div>

            <div className="engine-info">
              <div className="badge">{engine.moteur}</div>
            </div>

            <div className="specs">
              <div className="spec">
                <span className="label">Puissance</span>
                <span className="value">{engine.puissance}</span>
              </div>
              <div className="spec">
                <span className="label">Couple</span>
                <span className="value">{engine.couple}</span>
              </div>
              <div className="spec">
                <span className="label">Consommation</span>
                <span className="value">{engine.consommation}</span>
              </div>
              <div className="spec">
                <span className="label">Émissions</span>
                <span className="value">{engine.emissions}</span>
              </div>
              <div className="spec">
                <span className="label">Prix</span>
                <span className="value">{engine.prix}</span>
              </div>
            </div>

            <div className="points">
              <h3>Points forts:</h3>
              <ul>
                {engine.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>Données basées sur les spécifications constructeurs 2023-2025</p>
      </footer>
    </div>
  );
}
