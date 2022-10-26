import React, { useState } from 'react';
import { useEffect } from 'react';
import CourseListUi from '../smallPages/CourseListUi';

const LeftSide = () => {
    // loader:()=>fetch("http://localhost:5000/Course"),
    
    const [CourseData,setCourseData] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/Course").then(res=>res.json()).then(result=>setCourseData(result))
    },[])
    return (
        <div className='mt-[75px]'>
            {
                CourseData.map(CourseList=><CourseListUi
                key={CourseList.id}
                CourseList={CourseList}
                ></CourseListUi>
               
              )
            }
        </div>
    );
};

export default LeftSide;