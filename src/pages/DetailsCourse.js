import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseContent from '../smallPages/CourseContent';
import { jsPDF } from "jspdf";
const DetailsCourse = () => {
    const detailsCourseData = useLoaderData();
    const CourseContents = detailsCourseData[0].contents.slice(1, 10);
    let downloadTxtFile = () => {
        const texts = detailsCourseData[0].description;
        const doc = new jsPDF();
        doc.text(texts, 10, 10);
        doc.save("two-by-four.pdf");
    }


    return (
        <div className="card w-full bg-base-100 mt-[100px]">
            <img src={detailsCourseData[0].image} alt="" />
            <button onClick={downloadTxtFile} className="my-4 mx-[100px] btn btn-outline btn-primary w-[40vw]">Download PDF</button>
            <div className="card-body">
                <h2 className="card-title">
                    {detailsCourseData[0].name}!
                    <div className="badge badge-secondary">NEW</div>
                </h2>

                <p>{detailsCourseData[0].description}</p>
                <p className='font-bold'>Course Fee: ${detailsCourseData[0].amount}</p>
                <h1 className='font-bold text-center text-3xl my-4'>What you Will learn from out Course?</h1>
                {
                    CourseContents.map(Content => <CourseContent
                        content={Content}
                    ></CourseContent>)
                }
                <div className="card-actions justify-center ">
                    <Link to={`/checkout/${detailsCourseData[0].id}`}> <button className="btn btn-outline btn-primary w-[40vw]">Get premium access</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsCourse;