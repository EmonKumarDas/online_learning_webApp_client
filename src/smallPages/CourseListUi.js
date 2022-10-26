import React from 'react';

const CourseListUi = ({CourseList}) => {
    return (
        <div className='mt-5'>
             <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box"> 
                <div className="collapse-title text-xl font-medium">
                  {CourseList.name}
                </div>
               
              </div>
        </div>
    );
};

export default CourseListUi;