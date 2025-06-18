'use client';
import React from 'react';
import './levelEnvironments_1_2.scss';
import { levelData } from '@/data/data';
import { Environment, Level } from "@/types/type";

const LevelEnvironments: React.FC = () => {
  return (
    <div className="level-environments">
      <h1 className="main-title">Level Environments</h1>
      {levelData.map((level: Level, index: number) => (
        <div id={`${index}`} key={index} className="level-section">
          <h2 className="level-title">{level.title}</h2>
          <div className="environment-grid">
            {level.environments.map((env: Environment, idx: number) => (
              <div key={idx} className="environment-card">
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
