import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import DashBord from './components/DashBord/DashBord.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
   erorElement:<ErrorPage></ErrorPage>,
   children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/dashBord',
      element:<DashBord></DashBord>
    },
    {
      path:'/books/:bookId',
      loader:()=>fetch('/booksData.json'),
      element:<BookDetails></BookDetails>
    },
    {
      path:'/listedBooks',
      loader: ()=>fetch('/booksData.json'),
     element: <ListedBooks></ListedBooks> 
    }
   ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <ToastContainer />
  </StrictMode>,
)
