import './about.scss'
import AboutIntro from "@/components/AboutIntro";
import AboutGame from "@/components/AboutGame";
import AboutGalleryTitle from '@/components/AboutGalleryTitle';

const About = () => {
    return (
        <>
            <div className="about">
                <AboutIntro />
                <AboutGame />
                <AboutGalleryTitle/>
            </div>
        </>
    )
}

export default About;