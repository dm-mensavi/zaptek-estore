import React from 'react'
import FeaturesSection from './components/FeaturesSection';
import GameGenres from './components/GameGenres';
import BestSeller from './components/BestSeller';
import PopularGames from './components/PopularGames';
import ComingSoon from './components/ComingSoon';
import ReviewSection from './components/ReviewSection';
import FooterSection from './components/FooterSection';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <FeaturesSection />
      <GameGenres />
      <BestSeller />
      <PopularGames />
      <ComingSoon />
      <ReviewSection />
      <FooterSection />
    </div>
  );
}

export default App;
