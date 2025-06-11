'use client';
import React from 'react';
import './creators.scss';
import { gameCreators } from '@/data/data';




const Creators = () => {
  return (
    <div className="credits-section">
  

       {gameCreators.get("designers")?.map((item, index) => <div> {item.name} and their link is: {item.link} and role: {item.role} </div>)}
       {gameCreators.get("programmers")?.map((item, index) => <div> {item.name} and their link is: {item.link} and role: {item.role} </div>)}
       {gameCreators.get("management")?.map((item, index) => <div> {item.name} and their link is: {item.link} and role: {item.role} </div>)}
       {gameCreators.get("artist")?.map((item, index) => <div> {item.name} and their link is: {item.link} and role: {item.role} </div>)}
    </div>
  );
};

export default Creators;
