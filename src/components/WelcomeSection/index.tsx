'use client';

import './index.scss';
import Image from 'next/image';
import { JSX, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Index(): JSX.Element 
{  const [isMobile, setIsMobile] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (): void => {
    if (isMobile) {
      window.location.href = 'https://yourgame.itch.io/blood-maiden';
    } else {
      router.push('/media#trailer');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter') handleClick();
  };

  return (
    <section className="hero-section">
      <div className="hero-bg-wrapper">
        <Image
          src="/images/hero-bg.png"
          alt="Blood Maiden Background"
          layout="fill"
          priority
          className="hero-bg"
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
          Cursed by daylight. Fed by blood. <br />
          Bound for revenge. Uncover her truth.
        </p>

        <div
          className="ornate-button"
          onClick={handleClick}
          onKeyDown={handleKeyPress}
          role="button"
          tabIndex={0}
        >
          <img
            src="/images/button-frame.png"
            alt="Golden Frame"
            className="button-frame"
          />
          <img
            src="/images/button-label.png"
            alt="Watch the Trailer"
            className="button-label"
          />
        </div>
      </div>
    </section>
  );
}
