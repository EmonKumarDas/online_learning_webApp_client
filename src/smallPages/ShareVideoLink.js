import React from 'react';


const ShareVideoLink = ({video,currentVideo}) => {
    return (
        <div className="collapse-content">
                        <p className='cursor-pointer text-white hover:bg-slate-700 p-5 rounded' onClick={()=>currentVideo(video.video_)}>{video.video_}</p>
                    </div>
    );
};

export default ShareVideoLink;