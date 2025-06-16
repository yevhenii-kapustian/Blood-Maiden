'use client';

import './index.scss';
import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg-wrapper">
        <Image
          src="/images/hero-bg.png"
          alt="Blood Maiden Background"
          fill
          className="hero-bg"
          priority
        />
      </div>

      <div className="hero-content">
        <Image
          src="/images/logo.png"
          alt="Blood Maiden Logo"
          width={300}
          height={120}
          className="hero-logo"
        />

        <p className="hero-tagline">
          Cursed by light. Fed by blood. Driven by vengeance
        </p>

        {/* Desktop ornate button */}
        <div className="desktop-button">
          <iframe
            src="/WelcomeSection/button.html"
            title="Watch the Trailer Button"
            className="button-iframe"
          ></iframe>
        </div>

        {/* Mobile button stack */}
        <div className="mobile-buttons">
          <a href="https://yourgame.itch.io/blood-maiden" className="mobile-button">Watch the Trailer</a>
          <a href="https://yourgame.itch.io/blood-maiden" className="mobile-button itch">
            <span>Download</span>
            <img src="/images/itch-icon.png" alt="Itch.io" className="itch-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
