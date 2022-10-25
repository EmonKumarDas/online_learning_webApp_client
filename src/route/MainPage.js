import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from '../pages/LeftSide';
import NavBar from '../pages/NavBar';

const MainPage = () => {
    return (
        <div>
           <NavBar></NavBar>
           <div className='flex'>
            <div>
               <LeftSide></LeftSide>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            </div> 
        </div>
    );
};

export default MainPage;