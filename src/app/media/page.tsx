import MediaIntroduction from '@/components/MediaIntroduction';
import MediaTrailerSection from '@/components/MediaTrailerSection';
import MediaLevelsSection from '@/components/MediaLevelsSection';
import MonsterCodex from "@/components/MonsterCodex";

import './media.scss'
import AboutGalleryTitle from '@/components/AboutGalleryTitle';
import MediaEnvironmentAssets from '@/components/MediaEnvironmentAsset'; 

const Media = () => {
    return (
        <div className="media">
            <MediaTrailerSection />
            <MediaIntroduction />
            <MediaLevelsSection/>
            <AboutGalleryTitle/>
            <MediaEnvironmentAssets />
            <MonsterCodex />
        </div>
    )
}

export default Media;