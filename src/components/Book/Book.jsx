

import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId,bookName,image,author,rating,tags,totalPages}=book
    return (
       <Link to={`/books/${bookId}`}>
        <div className="card rounded-2xl lg:px-8 sm:h-[500px] bg-white  shadow-xl">
  <figure className='py-8 rounded-2xl  bg-[#F3F3F3]  bg-'>
    <img
    className=' h-[166px] w-[110px] object-center rounded-2xl'
      src={image}
      alt="Book" />
  </figure>
  <div className='mt-4'>
    {
        tags.map(tag=><button className="btn bg-[#F4FCF3] btn-xs ml-3 sm:btn-sm border-none text-green-500 ">{tag}</button>)
    }
  </div>
  <div className="card-body">
    <h2 className="card-title text-black">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className='text-start'>By: {author}</p>
    <div className='border-b-2 border-dashed'></div>
    
    <div className="card-actions justify-start">
      <p className='text-start'>Fiction</p>
      <p>Pages: {totalPages}</p>
      <div className="rating flex items-center gap-2 rating-sm">
        <p>{rating}</p>
  <input type="radio" name="rating-9" className="mask mask-star-2" />
  
</div>

    </div>
  </div>
</div>
       </Link>
    );
};

export default Book;