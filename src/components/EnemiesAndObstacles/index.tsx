'use client';
import React from 'react';
import './enemiesAndObstacles.scss';
import { Monster } from "@/types/type";
import { monsters } from '@/data/data';

const EnemiesAndObstacles: React.FC = () => {
  return (
    <div className="level-environments">
      <h1 className="main-title">Monster and obstacles</h1>

      <div className="level-section">
        <div className="environment-grid">
          {monsters.map((env: Monster, idx: number) => (
            <div key={idx} className="environment-card">
              <div className="image-wrapper">
                <img src={env.image} alt={env.name} />
                <p className="env-label">{env.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>  

    </div>
  );
};

export default EnemiesAndObstacles;
