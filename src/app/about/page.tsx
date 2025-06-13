import AboutIntro from "@/components/AboutIntro";
import AboutMainSection from "@/components/AboutMainSection";
import './about.scss'

const About = () => {
    return (
        <div className="about">
            <AboutIntro />
            <AboutMainSection />
        </div>
    )
}

export default About;