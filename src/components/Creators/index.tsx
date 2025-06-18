'use client';
import React from 'react';
import './creators.scss';
import { gameCreators } from '@/data/data';
import CreatorsItem from './CreatorsItem';


const Creators = () => {
  return (
    <div className="creators-container">
      <h1 className="section-title">CONTENT CREATORS</h1>

      <div className="creators-grid">

        <CreatorsItem creatorsTeam={gameCreators.get("designers")} title='Designers' />
        <CreatorsItem creatorsTeam={gameCreators.get("artist")} title='Artists' />
        <CreatorsItem creatorsTeam={gameCreators.get("programmers")} title='Programmers' />
        <CreatorsItem creatorsTeam={gameCreators.get("frontend developer")} title='Frontend-Developer' />
        <CreatorsItem creatorsTeam={gameCreators.get("management")} title='Management' />
        <CreatorsItem creatorsTeam={gameCreators.get("ux-designer")} title='UX-Designer' /> 

      </div>

    </div>
  );
};

export default Creators;
