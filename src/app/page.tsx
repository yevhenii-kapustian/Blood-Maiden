<<<<<<< HEAD
import About from "./about/page";

export default function Home() {
  return <div>
    <About />
    
    Hello! hej</div>;
=======
import WelcomeSection from '@/components/WelcomeSection';
import LowerHome from "@/components/LowerHomeSection";

export default function Home() {
  return (
    <div>
      <WelcomeSection />
      <LowerHome />
    </div>
  )
>>>>>>> develop
}

