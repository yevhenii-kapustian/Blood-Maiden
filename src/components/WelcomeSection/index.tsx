  'use client';

  import './index.scss';
  import Image from 'next/image';
  import { useEffect, useState } from 'react';
  import { useRouter } from 'next/navigation';

  export default function Index() {
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    useEffect(() => {
      setIsMobile(window.innerWidth <= 768);
    }, []);

    const handleClick = () => {
      if (isMobile) {
        window.location.href = 'https://yourgame.itch.io/blood-maiden';
      } else {
        router.push('/media#trailer');
      }
    };

    return (
      <section className="hero-section">
        <Image
          src="/images/hero-bg.png"
          alt="Background"
          fill
          className="hero-bg"
          priority
        />

        <div className="hero-content">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={300}
            height={120}
            className="hero-logo"
          />

          <p className="hero-tagline">
            Cursed by daylight. Fed by blood. <br />
            Bound for revenge. Uncover her truth.
          </p>

          <div className="ornate-button" onClick={handleClick}>
            <img
              src="/images/button-frame.png"
              alt="Button Frame"
              className="button-frame"
            />
            <div className="button-fill">
              WATCH THE TRAILER
            </div>
          </div>
        </div>
      </section>
    );
  }
