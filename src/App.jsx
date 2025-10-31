import React from 'react'
import Header from './Components/Header'
import HeroSec from './Components/HeroSec'
import PricingSection from './Components/PricingSection'
import TeamSection from './Components/TeamSection'
import Footer from './Components/Footer'
import Content from './Components/Content'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSec/>
      <Content/>
      <PricingSection/>
      <TeamSection/>
      <Footer/>
    </div>
  )
}

export default App
