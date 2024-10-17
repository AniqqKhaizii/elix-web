import React from 'react'
import Hero from './Hero'
import Spkb from './Spkb'
import ScrollToTopButton from '@/app/_components/ScrollToTopButton';
export const metadata = {
  title: "Our Solutions - Elix Solution Sdn. Bhd.",
  description: "Solutions by Elix Solution",
};
function solutions() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Spkb />
      <ScrollToTopButton />
    </div>
  )
}

export default solutions