import MediaIntroduction from '@/components/MediaIntroduction';
import MediaTrailerSection from '@/components/MediaTrailerSection';
import MediaLevelsSection from '@/components/MediaLevelsSection';
import LevelEnvironments from '@/components/LevelEnvironments_1_2';

import './media.scss'
import AboutGalleryTitle from '@/components/AboutGalleryTitle';

const Media = () => {
    return (
        <div className="media">
            <MediaTrailerSection />
            <MediaIntroduction />
            <MediaLevelsSection/>
            <AboutGalleryTitle/>
            <LevelEnvironments />
        </div>
    )
}

export default Media;