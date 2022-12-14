import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';
import LeftSide from '../pages/LeftSide';
import NavBar from '../pages/NavBar';
import Slider from '../pages/Slider';

const MainPage = () => {
    return (
        <div className='w-[98vw] m-auto'>
           <NavBar></NavBar>
           <Slider></Slider>
           <div className='grid grid-cols-6 w-[98vw] m-auto'>
            <div className='lg:col-span-2 md:col-span-6 col-span-6 p-5 mt-5'>
               <LeftSide></LeftSide>
            </div>
            <div className='lg:col-span-4 md:col-span-6 col-span-6 p-5'>
                <Outlet></Outlet>
            </div>
            </div> 
            <Footer></Footer>
        </div>
    );
};



export default MainPage;