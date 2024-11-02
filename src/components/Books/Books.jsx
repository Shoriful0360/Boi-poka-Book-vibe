
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [book,setBook]=useState([])

useEffect(()=>{
    fetch('booksData.json')
    .then(res=>res.json())
    .then(data=>setBook(data))
},[])

    return (
        <div>
            <h1 className='text-lg font-bold mb-5'>Books</h1>
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2'>
                {
                    book.map(book=><Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;