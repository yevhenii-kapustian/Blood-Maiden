import MediaIntroduction from '@/components/MediaIntroduction';
import MediaTrailerSection from '@/components/MediaTrailerSection';
import MediaLevelsSection from '@/components/MediaLevelsSection';
import './media.scss'
import MediaEnvironmentAssets from '@/components/MediaEnvironmentAsset';

const Media = () => {
    return (
        <div className="media">
            <MediaTrailerSection />
            <MediaIntroduction />
            <MediaLevelsSection/>
            <MediaEnvironmentAssets />
        </div>
    )
}

export default Media;