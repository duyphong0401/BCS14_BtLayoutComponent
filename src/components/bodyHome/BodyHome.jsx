import React from 'react'
import BannerHome from '../bannerHome/BannerHome'
import CardHome from '../cardHome/CardHome'

const BodyHome = () => {
  return (
    <div className='container px-lg-5 mt-3'>
      <BannerHome />
      <div className='mt-3'><CardHome /></div>
      
    </div>
  )
}

export default BodyHome
