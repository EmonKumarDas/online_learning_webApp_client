import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({CourseList}) => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl image-full my-5">
  <figure><img src={CourseList.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{CourseList.name}!</h2>
    <h2 className="card-title">Course Fee: ${CourseList.amount}</h2>
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <h2 className="card-title">/{CourseList.rating}</h2>
</div>
    
    <div className="card-actions justify-end mt-10">
      <Link to={`/detail/${CourseList.id}`}><button className="btn btn-primary">Course Details</button></Link>
      <button className="btn btn-primary">Download PDF</button>
    </div>
  </div>
</div>
</>
    );
};

export default Cart;