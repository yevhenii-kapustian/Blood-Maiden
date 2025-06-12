'use client';
import React from 'react';
import './creators.scss';
import { gameCreators } from '@/data/data';

const Creators = () => {
  return (
    <div className="creators-container">
      <h2 className="section-title">CONTENT CREATORS</h2>

      <div className='creators-grid'>
        <h3 className="management">MANAGEMENT</h3>
        <ul>
        {gameCreators.get("management")?.map((item, index) => (
        <li key={index}>
        <ul>
        <li>Name: {item.name}</li>
        <li>Link: <a href={item.link}>{item.link}</a></li>
        <li>Role: {item.role}</li>
        </ul>
        </li>
       ))}
       </ul>


      <h3 className="designers">DESIGNERS</h3>
      <ul>
      {gameCreators.get("designers")?.map((item, index) => (
      <li key={index}>
      <ul>
        <li>Name: {item.name}</li>
        <li>Link: <a href={item.link} className='link'>{item.link}</a></li>
        <li>Role: {item.role}</li>
      </ul>
     </li>
      ))}
    </ul>


    <h3 className="artist">ARTIST</h3>
      <ul>
      {gameCreators.get("artist")?.map((item, index) => (
      <li key={index}>
      <ul>
        <li>Name: {item.name}</li>
        <li>Link: <a href={item.link}>{item.link}</a></li>
        <li>Role: {item.role}</li>
      </ul>
     </li>
      ))}
    </ul>


    <h3 className="programmers">PROGRAMMERS</h3>
      <ul>
      {gameCreators.get("programmers")?.map((item, index) => (
      <li key={index}>
      <ul>
        <li>Name: {item.name}</li>
        <li>Link: <a href={item.link}>{item.link}</a></li>
        <li>Role: {item.role}</li>
      </ul>
     </li>
      ))}
    </ul>

    </div> 

    </div>
  );
};

export default Creators;
