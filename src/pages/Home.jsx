import React from 'react';
import Hero from '../components/Hero/Hero';
import BlogsComp from '../components/Blogs/BlogsComp';
import Places from '../components/Places/Places';
import Testimonial from '../components/Testimonial/Testimonial';
import Banner from '../components/Banner/Banner';
import BannerPic from '../components/BannerPic/BannerPic';
import BannerImg from '../assets/cover-women.jpg';
import Banner2 from '../assets/travel-cover2.jpg';
import OrderPopup from '../components/OrderPopup/OrderPopup';
import Img from '../assets/places/rinjani.jpg';

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <img src={Img} alt="rinjani" className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]" />

          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
