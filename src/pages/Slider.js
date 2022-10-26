import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className="w-[98vw] m-auto border">
 <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">HELLO THERE!</h1>
      <p className="mb-5">Online courses are the modern version of courses: you can create and share learning content in an organized way that allows users to progress in their understanding of a certain topic. It consists basically on a curriculum, or study plan, organized in units.</p>
      <Link to=""><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
</div>
    );
};

export default Slider;