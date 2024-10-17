import React from 'react'
import Hero from './Hero'
import Detail from './Detail'
import Team from './Team'
import Certificate from './Certificate'
import { Scroll } from 'lucide-react'
import ScrollToTopButton from '@/app/_components/ScrollToTopButton'
export const metadata = {
  title: "About Us - Elix Solution Sdn. Bhd.",
  description: "About Elix Solution",
};
function about() {
  
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Detail />
      <Team />
      <Certificate />
      <ScrollToTopButton />
    </div>
  )
}

export default about