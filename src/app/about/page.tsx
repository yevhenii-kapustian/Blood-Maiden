import './about.scss'
import AboutIntro from "@/components/AboutIntro";
import AboutGame from "@/components/AboutGame";

const About = () => {
    return (
        <>
            <div className="about">
                <AboutIntro />
                <AboutGame />
            </div>
        </>
    )
}

export default About;