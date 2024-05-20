import React from 'react'
import Hero from '@/components/Hero'
import Infoboxes from "@/components/Infoboxes"
import HomeProperties from "@/components/HomeProperties"
import Footer from "@/components/Footer"
import connectDB from "@/config/database"
import FeaturedProperty from "@/components/FeaturedProperty"
const Home = async() => {
  await connectDB();
  return (
    <div>
      <Hero/>
      <Infoboxes/>
      <FeaturedProperty/>
      
      <HomeProperties/>
    </div>
    
  )
}

export default Home