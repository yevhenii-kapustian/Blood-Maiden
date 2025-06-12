import AboutMainsection from "@/components/AboutMainsection";
import AboutIntro from "@/components/AboutIntro";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <AboutIntro />
      <AboutMainsection />
    </div>
  );
};

export default About;
