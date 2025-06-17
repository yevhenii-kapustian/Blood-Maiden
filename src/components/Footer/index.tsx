import Image from 'next/image';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="left">
          <ul className="features">
            <li>3D Roguelike | Speedrunner | Combat Platformer</li>
            <li>Bloodbending Combat</li>
            <li>Gothic Aesthetic</li>
            <li>High-Difficulty Gameplay</li>
            <li>Female Protagonist</li>
          </ul>
        </div>

        <div className="right">
          <div className='ageContainer'>
            <h3 className='ageLimit'>16+</h3>
          </div>
        </div>
      </div>

      <div className="bottom">
        <Image src="/Ichio-Footer.png" alt="itch.io" width={24} height={24} />
        <a target='_blank' href="https://itch.io/">itch.io</a>
        <p className="center">
          © 2025 Group 7 Studios. All Rights Reserved.
          <a target='_blank' href="https://itch.io/docs/legal/privacy-policy">Privacy Policy</a> | <a target='_blank' href="https://itch.io/docs/legal/terms">Terms Of Use</a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;