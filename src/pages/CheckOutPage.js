import React from 'react';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import {useLoaderData } from 'react-router-dom';
import ShareVideoLink from '../smallPages/ShareVideoLink';

const CheckOutPage = () => {
    const enrollInfo = useLoaderData();
    const EnrollData = enrollInfo[0];
    const video = EnrollData.content;
    let curentVideo = (video)=>{
        setIsPlay(true)
        setVideos(video)
        
    }
    let [videos,setVideos] = useState(video[0].video_);
    let [isPlay,setIsPlay] = useState(false);
    return (
        <div className="card w-full bg-base-100 mt-[100px]">
             <h1 className='mb-5 text-center text-3xl font-bold text-white bg-slate-800 p-5'>{EnrollData.name}</h1>
            <div className='lg:ml-[100px] md:ml-[150px] w-10'>
            <ReactPlayer url={videos}></ReactPlayer>
            </div>
           
            <div className="card-body">
               
                {
                    video.map(video=><div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        {video.title}
                    </div>
                    <ShareVideoLink 
                    video={video} 
                    currentVideo = {curentVideo}
                    isPlay={isPlay}
                    ></ShareVideoLink>
                </div>)
                }

            </div>
        </div>
    );
};

export default CheckOutPage;