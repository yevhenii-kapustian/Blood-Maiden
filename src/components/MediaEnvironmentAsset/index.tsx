import { environmentPictures } from '@/data/data';
import './mediaEnvironmentAssets.scss';



  /*const assets = [
    {
      src: '/well.png',
      caption: 'THE LUMINOUS WELL-SAFE POINT',
    },
    {
      src: '/stone.png',
      caption: 'OBSIDIAN CROSS',
    },
    {
      src: '/lamp.png',
      caption: 'LAMP OF THE VEIL',
    },
  ];*/

  const MediaEnvironmentAssets = () => {
  return (
    <section className="environment-assets">
      {/* <h2 className="section-title" id='assets'>Environmental</h2> */}
      <div className="assets-grid">
        {environmentPictures.map((asset, index) => (
          <div className="asset-card" key={index}>
                {asset.name === "luminous" ? <h2 className='section-title'>Environmental</h2> : undefined}
              <div>
                <img src={asset.src} alt={asset.caption} />
                <p className="caption">{asset.caption}</p>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaEnvironmentAssets;