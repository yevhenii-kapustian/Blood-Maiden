'use client';
import React from 'react';
import './environmentassets.scss';

const assets = [
  {
    src: '/well.png',
    caption: 'THE LUMINOUS WELL-SAFE POINT',
  },
  {
    src: '/cross.png',
    caption: 'OBSIDIAN CROSS',
  },
  {
    src: '/lamp.png',
    caption: 'LAMP OF THE VEIL',
  },
];

const EnvironmentAssets = () => {
  return (
    <section className="environment-assets">
      <h2 className="section-title">Environmental Assets</h2>
      <div className="assets-grid">
        {assets.map((asset, index) => (
          <div className="asset-card" key={index}>
            <img src={asset.src} alt={asset.caption} />
            <p className="caption">{asset.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnvironmentAssets;