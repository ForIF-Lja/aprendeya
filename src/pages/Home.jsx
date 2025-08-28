import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import CursosSection from '../components/CursosSection'
import TestimoniosSection from '../components/TestimoniosSection'
import ContactoSection from '../components/ContactoSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <InfoSection />
      <CursosSection />
      <TestimoniosSection />
      <ContactoSection />
      <Footer />
    </div>
  )
}

export default Home