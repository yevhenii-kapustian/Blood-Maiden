'use client';
import React from 'react';
import './levelEnvironments_1_2.scss';

const levelData = [
  {
    title: 'Level 1: Cemetery of Shadows',
    environments: [
      {
        name: 'Sanctuary Hollow',
        src: '/images/LevelEnvironments/Sanctuary Hollow.png',
      },
      {
        name: 'Blackveil Cemetery',
        src: '/images/LevelEnvironments/Blackveil cementery.png',
      },
      {
        name: 'The Waiting Casket',
        src: '/images/LevelEnvironments/Coffin.png',
      },
    ],
  },
  {
    title: 'Level 2: Nightroot Woods',
    environments: [
      {
        name: 'The Mossbound Vein',
        src: '/images/LevelEnvironments/the_mossbound_vein.png',
      },
      {
        name: 'Moonfen Hollow',
        src: '/images/LevelEnvironments/moonfen_hollow.png',
      },
      {
        name: 'Lanternreach Grove',
        src: '/images/LevelEnvironments/lanternreach_grove.png',
      },
    ],
  },
];

const LevelEnvironments = () => {
  return (
    <div className="level-environments">
      <h1 className="main-title">Level Environments</h1>
      {levelData.map((level, index) => (
        <div key={index} className="level-section">
          <h2 className="level-title">{level.title}</h2>
          <div className="environment-grid">
            {level.environments.map((env, idx) => (
              <div className="environment-card">
                    <div className="image-wrapper">
                        <img src={env.src} alt={env.name} />
                        <p className="env-label">{env.name}</p>
                    </div>
               </div>
            ))}
          </div>
            <div className="divider">
              <div className="marker" />
            </div>
        </div>
      ))}
    </div>
  );
};

export default LevelEnvironments;
