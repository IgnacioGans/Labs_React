import React from 'react';
import './TemplateTailwindRemking.css';
import HeroSectionTailwind from './TemplateTailwind/HeroSectionTailwind';
// import CardSampleTailwind from './SampleTailwind/CardSampleTailwind';
import BannerTailwind from './TemplateTailwind/BannerTailwind';
import CTASection from './TemplateTailwind/CTASectionTailwind';

const TemplateTailwindRemking = () => (
  <div className="TemplateTailwindRemking">
    {/* <CardSampleTailwind/> */}
    <BannerTailwind/>
    <HeroSectionTailwind/> 
    <CTASection/>
  </div>
);

export default TemplateTailwindRemking;