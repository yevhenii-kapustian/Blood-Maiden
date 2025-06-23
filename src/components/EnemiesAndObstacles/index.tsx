'use client';
import React from 'react';
import './enemiesAndObstacles.scss';
import { Monster } from "@/types/type";
import { monsters } from '@/data/data';

const EnemiesAndObstacles: React.FC = () => {
  return (
    <div id='enemies' className="level-monster">
      <h2 className="monster-title">Enemies and obstacles</h2>

      <div className="monster-section">
        <div className="monster-grid">
          {monsters.map((env: Monster, idx: number) => (
            <div key={idx} className="monster-card">
              <div className="image-wrapper">
                <img src={env.image} alt={env.name} />
                <p className="monster-label">{env.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>  

    </div>
  );
};

export default EnemiesAndObstacles;
