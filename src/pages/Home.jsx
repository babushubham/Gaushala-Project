import React from 'react'
import Layout from '../component/Layout/Layout'
import CTA from '../component/CTA';
import Herosection from '../component/Herosection';
import Marquee from '../component/Marquee';
import WhatWeDo from '../component/WhatWeDo';
import AboutUsComp from '../component/AboutUsComp';
import VisionMission from '../component/VisionMission';
import DonationSlider from '../component/DonationSlider';
import AdoptCow from '../component/AdoptCow';
import VisitMarquee from '../component/VisitMarquee';

const Home = () => {
  return (
    <>
      <Layout>
        <Marquee />
        <Herosection />
        <VisitMarquee/>
        <WhatWeDo />
        <AboutUsComp />
        <VisionMission />
        <DonationSlider />
        <AdoptCow />
        <CTA />
      </Layout>
    </>
  )
}

export default Home