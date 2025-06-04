// components/LowerHome/LowerHome.jsx
import styles from './LowerHome.module.scss';
import Image from 'next/image';

export default function LowerHome() {
  return (
    <section className={styles.lowerHome}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <p>The past isn’t dead. It thirsts for revenge.</p>
            <p>Slay monsters. Kill the king's men.</p>
            <p>Uncover forbidden power. Become a legend.</p>
          </h2>

          <div className={styles.download}>
            <span>DOWNLOAD NOW ON</span>
            <Image
              src="/images/ITCHIO, CTA-link to website.png"
              alt="itch.io"
              width={150}
              height={50}
            />
          </div>

          {/* ✅ New "What is Blood Maiden" Row */}
<div className={styles.introRow}>


  {/* ✅ 3 Images in a Row */}
  <div className={styles.imageRow}>
    <Image
      src="/images/ChatGPT Image 1 juni 2025 13_56_15 2.png"
      alt="Gameplay Scene 1"
      width={300}
      height={200}
      priority
    />
    <Image
      src="/images/STAMP - Logo.png"
      alt="Gameplay Scene 2"
      width={100}
      height={100}
      priority
    />
    <Image
      src="/images/ChatGPT Image 1 juni 2025 13_56_15 2.png"
      alt="Gameplay Scene 3"
      width={300}
      height={200}
      priority
    />
  </div>
</div>


          <div className={styles.columns}>
            <div className={styles.column}>
              <h3>Game Features</h3>
              <ul>
                <li><strong>Blood Bending Mechanic</strong> – Morph blood into deadly weapon forms: blades, whips, projectiles, and more.</li>
                <li><strong>High-Difficulty Combat Platforming</strong> – Every mistake is lethal.</li>
                <li><strong>Speedrun-Oriented Levels</strong> – Time-limited, fast-paced levels.</li>
                <li><strong>Rogue-Like Progression</strong> – Die, learn, return stronger.</li>
                <li><strong>Powerful Protagonist</strong> – A fierce female with blood magic.</li>
                <li><strong>Stylized Checkpoints</strong> – Save at fountains.</li>
                <li><strong>Modular Environment Props</strong> – Gravestones, streetlamps, and interactive objects.</li>
              </ul>
            </div>


            <div className={styles.column}>
                <h3>What is Blood Maiden?</h3>
                 <ul>
                <li>Blood Sheding. Revenge. Combat. </li>
                <li>Slay Monster. Master Time Based Levels</li>
              </ul>
                
              <h3>Control Settings</h3>
              <p><strong>Keyboard:</strong></p>
              <ul>
                <li>Movement: A = Left, D = Right (or Arrow Keys)</li>
                <li>Jump: SPACEBAR</li>
                <li>Dagger Attack: LEFT MOUSE</li>
                <li>Blood Gun Attack: RIGHT MOUSE</li>
                <li>Dash: SHIFT</li>
                <li>Grappling Hook: E</li>
                <li>Switch Dagger/Rapier: Q</li>
              </ul>

              <p><strong>Controller:</strong></p>
              <ul>
                <li>Movement: Thumb Stick</li>
                <li>Jump: X/A</li>
                <li>Dagger Attack: □/X</li>
                <li>Blood Gun: LT</li>
                <li>Dash: ○/B</li>
                <li>Switch Weapon: △/Y</li>
                <li>Grappling Hook: RB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
