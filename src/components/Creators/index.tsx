'use client';
import React from 'react';
import './creators.scss';
import { gameCreators } from '@/data/data';
import CreatorsItem from './CreatorsItem';
import { title } from 'process';

const Creators = () => {
  return (
    <div className="creators-container">
      <h2 className="section-title">CONTENT CREATORS</h2>

      <div className="creators-grid">

        <CreatorsItem creatorsTeam={gameCreators.get("management")} title='Management' />
        <CreatorsItem creatorsTeam={gameCreators.get("designers")} title='Designers' />
        <CreatorsItem creatorsTeam={gameCreators.get("artist")} title='Artists' />
        <CreatorsItem creatorsTeam={gameCreators.get("programmers")} title='Programmers' />

      </div>

    </div>
  );
};

export default Creators;
