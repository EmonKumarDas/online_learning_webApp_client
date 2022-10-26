import React from 'react';
import { Link } from 'react-router-dom';

const CourseListUi = ({CourseList}) => {
    return (
        <div className='mt-5'>
             <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box"> 
               <Link to={`/detail/${CourseList.id}`}><div className="collapse-title text-xl font-medium">
                  {CourseList.name}
                </div></Link> 
               
              </div>
        </div>
    );
};

export default CourseListUi;