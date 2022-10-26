import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOutPage = () => {
    const enrollInfo = useLoaderData();
    console.log(enrollInfo)
    return (
        <div>
            <p>ch page</p>
        </div>
    );
};

export default CheckOutPage;