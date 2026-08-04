import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import WhyCorelane from './components/WhyCorelane'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingSocialMenu from './components/FloatingSocialMenu'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg relative selection:bg-brand-accent/30 selection:text-brand-text">
      {/* Global Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[120px] animate-ambient-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-teal-900/10 blur-[150px] animate-ambient-glow" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <TechStack />
          <Portfolio />
          <Process />
          <WhyCorelane />
          <Pricing />
          <Testimonials />
          <Team />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
      
      {/* Floating Action Button */}
      <FloatingSocialMenu />
    </div>
  )
}
