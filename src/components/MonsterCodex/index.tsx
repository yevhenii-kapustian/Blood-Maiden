// pages/index.tsx
import Head from 'next/head';
import './monsterCodex.scss';
import {monsters} from '../../data/data'

export default function MonstersCodex() {
  return (
    <>
      <Head>
        <title>Monsters Codex</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="monsters-container">
        <h2 className="monsters-title">ENEMIES AND OBSTACLES</h2>
        <div className="monsters-grid">
          {monsters.map((monster) => (
            <div key={monster.name} className="monster-wrapper">
              <div className="monster-card">
                <img
                  src={monster.image}
                  alt={monster.name}
                  className="monster-image"
                />
              </div>
              <div className="monster-label">{monster.name}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
