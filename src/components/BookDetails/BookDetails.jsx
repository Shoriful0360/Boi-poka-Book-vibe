
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList } from '../StoreData/MarkAsRead';
import { addWishListData } from '../Wishlist/WishLish';

const BookDetails = () => {
    const data = useLoaderData();
    const { bookId } = useParams();
    const id=parseInt(bookId)
    const book=data.find(book=>book.bookId===id)
    const {image,author,bookName,category,review,totalPages,tags,publisher,yearOfPublishing,rating}=book
    

    const handleMardAsRead=(id)=>{
        addToStoreReadList(id)
    }

    const handleAddWishList=(id)=>{
      addWishListData(id)
    }

    return (
        <div>
            <h2 className='text-lg font-bold'>Book Details:     {bookId}</h2>
            <div className="hero  min-h-screen">
  <div className="hero-content flex-col  lg:flex-row">
  <div className='bg-[#EDEDED]  p-16 rounded-2xl'>
  <img
      src={image}
      className="max-w-sm  rounded-lg shadow-2xl" />
  </div>
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      {/* <p className='font-semibold'>By: {author}</p> */}
      <div className='divider'></div>
      <p>{category}</p>
      <div className='divider'></div>
      <p className="py-6">
      <small className='text-lg font-bold'>Review: </small>{review}
      </p>
      <div className='flex gap-5 items-center'>
        <h1 className=' text-lg font-bold '>Tags</h1>
        {
            tags.map((tag,idx)=><p className='text-green-500' key={idx}>#{tag}</p>)
        }
      </div>
      <div className='divider'></div>
      <div>
        <p>Number of Pages: <small className='text-lg font-semibold'>{totalPages}</small></p>
        <p>Publisher: <small className='text-lg font-semibold'>{publisher}</small></p>
        <p>Year of Publishing: <small className='text-lg font-semibold'>{yearOfPublishing}</small></p>
        <p>Rating: <small className='text-lg font-semibold'>{rating}</small></p>
        
      </div>
      <div className='flex items-center gap-3 justify-center mt-2'>
            <button onClick={()=>handleMardAsRead(bookId)} className='btn bg-success text-white'>Mark As Read</button>
            <button onClick={()=>handleAddWishList(bookId)} className='btn bg-success text-white'>Wishlist</button>
        </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default BookDetails;