import React from 'react';

import Intro from 'components/elements/Intro/Intro';
import Booking from 'components/elements/Booking/Booking';
import Steps from 'components/elements/Steps/Steps';
import Locations from 'components/elements/Locations/Locations';
import Tour from 'components/elements/Tour/Tour';
import AboutUs from 'components/elements/AboutUs/AboutUs';
import Testimonials from 'components/elements/Testimonials/Testimonials';
import SocialFeed from 'components/elements/SocialFeed/SocialFeed';
import ContactUs from 'components/elements/ContactUs/ContactUs';
import Footer from 'components/elements/Footer/Footer';

function Home() {
  return (
    <>
      <Intro />
      <Booking />
      <Steps />
      <Locations />
      <Tour />
      <AboutUs />
      <Testimonials />
      <SocialFeed />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
