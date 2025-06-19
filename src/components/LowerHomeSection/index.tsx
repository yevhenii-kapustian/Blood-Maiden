'use client';

import { useState } from 'react';
import Image from 'next/image';
import './LowerHome.scss';
import { gameFeaturesPrimary, gameFeaturesSecondary, gameInformation, gameSettings } from '@/data/data';
import LowerInfoItem from './LowerInfoItem';
import LowerInfoItemMobile from './LowerInfoItemMobile';

export default function LowerHome() {
  const [activeTab, setActiveTab] = useState<'features' | 'about' | 'controls'>('features');

  const descriptions: string[] = gameInformation.get('description')?.text || [];

  return (
    <section className="lowerHome">
      <div className="overlay">
        <div className="content">
          {/* Desktop Layout */}
          <div className="desktopOnly">
            <div className="title">
              <h3>Enter a Bloodstained Dance of Death and Magic</h3>
              <p>In this rogue-lite adventure, death — and spilling your own blood — is the only way to learn. Driven by the exquisite crimson liquid, cut and slash your way through a relentless throng of foes.

                Uncover the filthy secrets of a twisted version of Victorian London — a city ruled by an undead king, driven mad by Masonic knowledge of eternal life. There, your reflexes will be tested thousands of times, and you’ll lose most of those battles.

                But when death comes, don’t despair — it’s the key to your power. And to yourself.  </p>
            </div>

            <div className="download">
              <span>DOWNLOAD NOW ON</span>
              <a
                href="https://futuregames.itch.io/blood-maiden"
                target="_blank"
                rel="noopener noreferrer"
                className='itchioButton'
              >
                <Image
                  src="/images/ITCHIO, CTA-link to website.png"
                  alt="itch.io"
                  width={150}
                  height={50}
                />
              </a>
            </div>

            <div className="threeColumnGrid">
              <div className="column">
                <Image
                  src="/images/ChatGPT Image 1 juni 2025 13_56_15 2.png"
                  alt="Gameplay Left"
                  width={200}
                  height={200}
                  className="sideImage"
                />

                <div className='space' />
                <LowerInfoItem text={gameFeaturesPrimary.get('title')?.text} subtitle={gameFeaturesPrimary.get('subtitle')?.text} title='GAME FEATURES' />

              </div>

              <div className="column">
                <Image
                  src="/images/STAMP - Logo.png"
                  alt="Stamp Logo"
                  width={150}
                  height={150}
                  className="middleImage"
                />
              </div>

              <div className="column">
                <Image
                  src="/images/ChatGPT Image 1 juni 2025 13_56_15 2.png"
                  alt="Gameplay Right"
                  width={200}
                  height={200}
                  className="sideImage"
                />
                <div className='space' />
                <LowerInfoItem text={gameFeaturesSecondary.get('title')?.text} subtitle={gameFeaturesSecondary.get('subtitle')?.text} title='GAME FEATURES' />
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="mobileOnly">
            {/* <div className="buttonGroup">
              {(['about', 'features', 'controls'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={activeTab === tab ? 'active' : ''}
                >
                  <span>
                    {tab === 'about'
                      ? 'WHAT IS BLOOD MAIDEN?'
                      : tab === 'features'
                      ? 'GAME FEATURES'
                      : 'CONTROL SETTINGS'}
                  </span>
                  <span className="arrow">›</span>
                </button>
              ))}
            </div>

            <div className="tabContent">
              {activeTab === 'features' && (
                <>
                  <h3>Game Features</h3>
                  <ul>
                    {features.map((feature: string, idx: number) => (
                      <li key={idx}>
                        <strong>{feature}</strong> <br /> {subtitles[idx] || ''}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'about' && (
                <>
                  <h3>What is Blood Maiden?</h3>
                  <ul>
                    {descriptions.map((desc: string, idx: number) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'controls' && (
                <>
                  <h3>Control Settings</h3>
                  <p><strong>Keyboard:</strong></p>
                  <ul>
                    {keyboard.map((line: string, idx: number) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                  <p><strong>Controller:</strong></p>
                  <ul>
                    {controller.map((line: string, idx: number) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </>
              )}
            </div> */}

            <>
              <div className='tabContent'>
                <h3>GAME FEATURES</h3>
                <LowerInfoItemMobile
                  textPrimary={gameFeaturesPrimary.get('title')?.text}
                  subtitlePrimary={gameFeaturesPrimary.get('subtitle')?.text}
                  textSecondary={gameFeaturesSecondary.get('title')?.text}
                  subtitleSecondary={gameFeaturesSecondary.get('subtitle')?.text} />
              </div>
            </>

            <div className="download">
              <a
                href="https://futuregames.itch.io/blood-maiden"
                target="_blank"
                rel="noopener noreferrer"
                className='itchioButton'
              >
                <Image
                  src="/images/ITCHIO, CTA-link to website.png"
                  alt="itch.io"
                  width={150}
                  height={50}
                />
              </a>
            </div>
            <div className='space' />
            <div className="title">
              <h3>Enter a Bloodstained Dance of Death and Magic</h3>
              <p>In this rogue-lite adventure, death — and spilling your own blood — is the only way to learn. Driven by the exquisite crimson liquid, cut and slash your way through a relentless throng of foes.

                Uncover the filthy secrets of a twisted version of Victorian London — a city ruled by an undead king, driven mad by Masonic knowledge of eternal life. There, your reflexes will be tested thousands of times, and you’ll lose most of those battles.

                But when death comes, don’t despair — it’s the key to your power. And to yourself.  </p>
            </div>

            <div className="threeColumnGrid">
              {['sideImage', 'middleImage', 'sideImage'].map((className, idx) => (
                <div key={idx} className="column">
                  <Image
                    src={
                      idx === 1
                        ? '/images/STAMP - Logo.png'
                        : '/images/ChatGPT Image 1 juni 2025 13_56_15 2.png'
                    }
                    alt={idx === 1 ? 'Stamp Logo' : `Gameplay ${idx === 0 ? 'Left' : 'Right'}`}
                    width={idx === 1 ? 150 : 200}
                    height={idx === 1 ? 150 : 200}
                    className={className}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
