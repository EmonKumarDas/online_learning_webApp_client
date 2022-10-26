import React, { useEffect, useState } from 'react';
import Cart from '../smallPages/Cart';

const HomePage = () => {
    const [CourseData,setCourseData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/Course").then(res=>res.json()).then(result=>setCourseData(result))
    },[])
    return (
        <>

            <p className='mb-5 text-5xl font-bold'>Start Your Learning</p>
            {
            <div className='my-5 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
            {
                CourseData.map(CourseList=><Cart
                key={CourseList.id}
                CourseList={CourseList}
                ></Cart>
               
              )
            }
        </div>
            }
        </>
    );
};

export default HomePage;