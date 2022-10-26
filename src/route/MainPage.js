import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';
import LeftSide from '../pages/LeftSide';
import NavBar from '../pages/NavBar';
import Slider from '../pages/Slider';

const MainPage = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Slider></Slider>
           <div className='grid grid-cols-6 w-[98vw] m-auto'>
            <div className='col-span-2 p-5 mt-5'>
               <LeftSide></LeftSide>
            </div>
            <div className='col-span-4 p-5'>
                <Outlet></Outlet>
            </div>
            </div> 
            <Footer></Footer>
        </div>
    );
};



export default MainPage;