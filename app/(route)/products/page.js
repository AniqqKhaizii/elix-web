import React from 'react'
import Hero from './Hero'
import Products from './Products'
import ScrollToTopButton from '@/app/_components/ScrollToTopButton';
export const metadata = {
  title: "Our Products - Elix Solution Sdn. Bhd.",
  description: "Products Elix Solution",
};
function products() {
  return (
    <div className="overflow-x-hidden">
        <Hero />
        <Products />
        <ScrollToTopButton />
    </div>
  )
}

export default products