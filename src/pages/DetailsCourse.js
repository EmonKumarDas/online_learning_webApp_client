import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsCourse = () => {
    const detailsCourseData = useLoaderData();
    console.log(detailsCourseData[0].name)
  
    return (
        <div className="card card-side bg-base-100 shadow-xl mt-[100px] h-[60vh] w-[60vw]">
        <img className='h-[60vh] w-[30vw]' src={detailsCourseData[0].image} alt="Movie"/>
        <div className="card-body">
          <h2 className="card-title">{detailsCourseData[0].name}</h2>
          <p>{detailsCourseData[0].description}</p>
          <p>${detailsCourseData[0].amount}</p>
          {/* <p>{detailsCourseData[0].description}</p> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">CheckOut</button>
          </div>
        </div>
      </div>
    );
};

export default DetailsCourse;