import MediaIntroduction from '@/components/MediaIntroduction';
import MediaTrailerSection from '@/components/MediaTrailerSection';
import MediaLevelsSection from '@/components/MediaLevelsSection';

import './media.scss'

const Media = () => {
    return (
        <div className="media">
            <MediaTrailerSection />
            <MediaIntroduction />
            <MediaLevelsSection/>
        </div>
    )
}

export default Media;