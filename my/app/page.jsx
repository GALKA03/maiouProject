import Image from 'next/image'
import Hero from './components/Hero'
import Garanty from './components/Garanty'
import PartnersSections from './components/PartnersSection'
import AboutSection from './siamo/(components)/AboutSection'
import Productions from './components/Productions'
export default function Home() {
  return (
    <>
    <Hero />
      <Garanty />
      <Productions />
      <PartnersSections />
     
    </>
  )
    
}
