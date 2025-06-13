'use client';
import React from 'react';
import './creators.scss';
import { gameCreators } from '@/data/data';

const Creators = () => {
  return (
    <div className="creators-container">    
     <h2 className="section-title">CONTENT CREATORS</h2>  
  
      <div className="creators-grid">
        <div className="grid-card">
        <ul>
        <h3 >MANAGEMENT</h3>
        {gameCreators.get("management")?.map((item, index) => (
        <li key={index}>
        <ul>
        <li>{item.name} - {item.role}</li>
        <li className="list-menu"><a href={item.link}>{item.name} | LinkedIn </a></li>
        </ul>
        </li>
       ))}
       </ul>
       </div>


      
      <ul>
       <h3 >DESIGNERS</h3>
      {gameCreators.get("designers")?.map((item, index) => (
        <li key={index}>
      <ul>
        <li>{item.name} - {item.role}</li>
        <li className="list-menu"><a href={item.link} className="red">{item.name} | LinkedIn</a></li>
      </ul>
     </li>
      ))}
    </ul>


    
      <ul>
      <h3 >ARTIST</h3>
      {gameCreators.get("artist")?.map((item, index) => (
      <li key={index}>
      <ul>
        <li>{item.name} - {item.role}</li>
        <li className="list-menu"><a href={item.link}>{item.name} | LinkedIn</a></li>
      </ul>
     </li>
      ))}
    </ul>


    
      <ul>
      <h3 >PROGRAMMERS</h3>
      {gameCreators.get("programmers")?.map((item, index) => (
      <li key={index}>
      <ul>
        <li>{item.name} - {item.role}</li>
        <li className="list-menu"><a href={item.link}>{item.name} | LinkedIn</a></li>
      </ul>
     </li>
      ))}
    </ul>

    </div> 

    </div>
  );
};

export default Creators;
