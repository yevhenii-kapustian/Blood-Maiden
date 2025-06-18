import './media.scss'
import MediaIntroduction from '@/components/MediaIntroduction';
import MediaTrailerSection from '@/components/MediaTrailerSection';
import MediaLevelsSection from '@/components/MediaLevelsSection';
import MediaEnvironmentAssets from '@/components/MediaEnvironmentAsset';
import MonsterCodex from "@/components/MonsterCodex";
import AboutGalleryTitle from '@/components/AboutGalleryTitle';

const Media = () => {
    return (
        <div className="media">
            <MediaTrailerSection />
            <MediaIntroduction />
            <MediaLevelsSection/>
            <MediaEnvironmentAssets />
            <AboutGalleryTitle/>
            <MonsterCodex />
        </div>
    )
}

export default Media;