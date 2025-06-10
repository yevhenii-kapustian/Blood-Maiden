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
        <Image src="Pegi18.png" alt="Pegi18.png" width={100} height={100} />
        <Image src="Fear.png" alt="Fear" width={100} height={100} />
        <Image src="BadLanguage.png" alt="Bad Language" width={100} height={100} />
        <Image src="Violence.png" alt="Violence" width={100} height={100} />
        <Image src="P.png" alt="Available on PC" width={100} height={100} />
      </div>
      </div>

      <div className="bottom">
      <Image src="Ichio-Footer.png" alt="itch.io" width={24} height={24} />
      <a href="https://itch.io/">itch.io</a>  
      <p className="center">
        © 2025 Group 7 Studios. All Rights Reserved.
      <a href="https://itch.io/docs/legal/privacy-policy">Privacy Policy</a> | <a href="https://itch.io/docs/legal/terms">Terms Of Use</a>
      </p>
      </div>

    </footer>
  );
};

export default Footer;