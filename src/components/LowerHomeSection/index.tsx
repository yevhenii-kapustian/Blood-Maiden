'use client';

import { useState } from 'react';
import styles from './LowerHome.module.scss';
import Image from 'next/image';
import { gameFeatures, gameInformation, gameSettings } from '@/data/data';

export default function LowerHome() {
  const [activeTab, setActiveTab] = useState<'features' | 'about' | 'controls'>('features');

  const features = gameFeatures.get('title')?.text || [];
  const subtitles = gameFeatures.get('subtitle')?.text || [];
  const descriptions = gameInformation.get('description')?.text || [];
  const keyboard = gameSettings.get('keyboard')?.text || [];
  const controller = gameSettings.get('controller')?.text || [];

  return (
    <section className={styles.lowerHome}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          {/* Desktop layout */}
          <div className={styles.desktopOnly}>
            <div className={styles.title}>
              <p>THE PAST ISN’T DEAD-IT THIRST FOR REVENGE.</p>
              <p>SLAY MONSTERS. KILL THE KING’S MEN.</p>
              <p>UNCOVER FORBIDDEN POWER. BECOME A LEGEND.</p>
            </div>

            <div className={styles.download}>
              <span>DOWNLOAD NOW ON</span>
              <a
                href="https://futuregames.itch.io/blood-maiden"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/ITCHIO, CTA-link to website.png"
                  alt="itch.io"
                  width={150}
                  height={50}
                />
              </a>
            </div>

            <div className={styles.threeColumnGrid}>
              <div className={styles.column}>
                <Image
                  src="/images/ChatGPT Image 1 juni 2025 13_56_15 2.png"
                  alt="Gameplay Left"
                  width={200}
                  height={200}
                  className={styles.sideImage}
                />
                <h3>GAME FEATURES</h3>
                <ul>
                  {features.map((feature, idx) => (
                    <li key={idx}>
                      <strong>{feature}</strong> <br /> {subtitles[idx] || ''}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.column}>
                <Image
                  src="/images/STAMP - Logo.png"
                  alt="Stamp Logo"
                  width={150}
                  height={150}
                  className={styles.middleImage}
                />
              </div>

              <div className={styles.column}>
                <Image
                  src="/images/ChatGPT Image 1 juni 2025 13_56_15 2.png"
                  alt="Gameplay Right"
                  width={200}
                  height={200}
                  className={styles.sideImage}
                />
                <h3>WHAT IS BLOOD MAIDEN?</h3>
                <ul>
                  {descriptions.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>

                <h3>CONTROL SETTINGS</h3>
                <p><strong>Keyboard:</strong></p>
                <ul>
                  {keyboard.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>

                <p><strong>Controller:</strong></p>
                <ul>
                  {controller.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className={styles.mobileOnly}>
            <div className={styles.buttonGroup}>
              {['about', 'features', 'controls'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as typeof activeTab)}
                  className={activeTab === tab ? styles.active : ''}
                >
                  <span>
                    {tab === 'about'
                      ? 'WHAT IS BLOOD MAIDEN?'
                      : tab === 'features'
                      ? 'GAME FEATURES'
                      : 'CONTROL SETTINGS'}
                  </span>
                  <span className={styles.arrow}>›</span>
                </button>
              ))}
            </div>

            <div className={styles.tabContent}>
              {activeTab === 'features' && (
                <>
                  <h3>Game Features</h3>
                  <ul>
                    {features.map((feature, idx) => (
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
                    {descriptions.map((desc, idx) => (
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
                    {keyboard.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                  <p><strong>Controller:</strong></p>
                  <ul>
                    {controller.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className={styles.title}>
              <p>THE PAST ISN’T DEAD-IT THIRST FOR REVENGE.</p>
              <p>SLAY MONSTERS. KILL THE KING’S MEN.</p>
              <p>UNCOVER FORBIDDEN POWER. BECOME A LEGEND.</p>
            </div>

            <div className={styles.threeColumnGrid}>
              {['sideImage', 'middleImage', 'sideImage'].map((className, idx) => (
                <div key={idx} className={styles.column}>
                  <Image
                    src={
                      idx === 1
                        ? '/images/STAMP - Logo.png'
                        : '/images/ChatGPT Image 1 juni 2025 13_56_15 2.png'
                    }
                    alt={idx === 1 ? 'Stamp Logo' : `Gameplay ${idx === 0 ? 'Left' : 'Right'}`}
                    width={idx === 1 ? 150 : 200}
                    height={idx === 1 ? 150 : 200}
                    className={styles[className]}
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
