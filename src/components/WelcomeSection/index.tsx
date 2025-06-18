'use client';

import './index.scss';
import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <img
          src="/images/hero-bg.png"
          alt="Blood Maiden Background"
          className="hero-bg"
        />

      <div className="hero-content">
        <div className='hero-content-items'>
          <img
            src="/images/logo.png"
            alt="Blood Maiden Logo"
            className="hero-logo"
          />
          <h1 className="hero-tagline">
            Cursed by light. Fed by blood. Driven by vengeance
          </h1>

          <div className='button-frame'>
                <Image src="/images/frame.png" alt='frame button' width={1000} height={1000}/>
            <div className='button-frame-description'>
                <a href="/media#trailer">Watch the trailer</a>
            </div>
          </div>
        </div>
      </div>
      </div>

    </section>
  );
}
