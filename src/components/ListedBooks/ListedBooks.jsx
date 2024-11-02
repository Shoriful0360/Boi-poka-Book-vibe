

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import { getMarkStoreRead } from '../StoreData/MarkAsRead';
import Book from '../Book/Book';

const ListedBooks = () => {
    const allBooks = useLoaderData()
    const [readBook, setReadBook] = useState([])
    const [sort,setSort]=useState('');


    const handleSort=sortType=>{
          setSort(sortType)
          if(sort==='rating'){
            const sortReadBooks=[...readBook].sort((a,b)=>a.rating - b.rating)
            setReadBook(sortReadBooks)
          }
          if(sort==='no of pages'){
            const sortReadBooks=[...readBook].sort((a,b)=>a.totalPages - b.totalPages);
            setReadBook(sortReadBooks)
          }
    }



    useEffect(() => {
        const storeReadList = getMarkStoreRead();
        const storeReadListInt = storeReadList.map(id => parseInt(id));
        const readBooks = allBooks.filter(book => storeReadListInt.includes(book.bookId));
        setReadBook(readBooks)

    }, [])
    return (
        <div>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {
                        sort?`sort by :${sort}`:'sort by'
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=>handleSort('rating')}><a> Rating</a></li>
                    <li onClick={()=>handleSort('no of pages')}><a>No of pages</a></li>
                </ul>
            </div>


            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Read is done :{readBook.length}</h2>
                    <div className='grid mt-5 lg:grid-cols-3 gap-4 md:grid-cols-2'>
                        {
                            readBook.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Added to wishList</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ListedBooks;