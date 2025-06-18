import Image from 'next/image';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="left">
          <ul className="features">
            <li>3D rogue lite side-scroller | Speed based combat Platformer</li>
            <li>Blood-bending Combat</li>
            <li>Victorian Aesthetic</li>
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
        <div className='linkedIn'>
          <Image src="/Ichio-Footer.png" alt="itch.io" width={24} height={24} />
          <a target='_blank' href="https://itch.io/">itch.io</a>
        </div>
        <div className="center">
          <p className='text'>© 2025 Group 7 Studios. All Rights Reserved.</p>
          <a target='_blank' href="https://itch.io/docs/legal/privacy-policy">Privacy Policy</a> | <a target='_blank' href="https://itch.io/docs/legal/terms">Terms Of Use</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;