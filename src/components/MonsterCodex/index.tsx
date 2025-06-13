// pages/index.tsx
import Head from 'next/head';
import './monsterCodex.scss';

type Monster = {
  name: string;
  image: string;
};

const monsters: Monster[] = [
  { name: 'YAMI-CHAN', image: '/images/monsters/yami-chan.png' },
  { name: 'KRYVAK', image: '/images/monsters/kryvak.png' },
  { name: 'THE JOKER', image: '/images/monsters/the-joker.png' },
  { name: 'THORNED BLASPHEMER', image: '/images/monsters/thorned-blasphemer.png' },
  { name: 'THE BLACK WARDEN', image: '/images/monsters/the-black-warden.png' },
  { name: 'WENDIGO', image: '/images/monsters/wendigo.png' },
  { name: 'GOLEM', image: '/images/monsters/golem.png' },
  { name: 'LYCAN', image: '/images/monsters/lycan.png' },
];

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
        <h1 className="monsters-title">MONSTERS CODEX</h1>
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
