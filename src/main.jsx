import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddProduct from './components/AddProduct/AddProduct';
import Company from './components/Company/Company';
import BrnadInfo from './components/BrnadInfo/BrnadInfo';
import Contact from './Pages/Contact/Contact';
import LatestProduct from './Pages/LatestProduct/LatestProduct';
import Details from './components/Details/Details';
import AuthProvider from './components/AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/', 
        element: <Home></Home>
      },
      {
        path: '/login', 
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/company',
        element: <Company></Company>
      },
      {
        path: '/brandinfo/:brand_name',
        element: <BrnadInfo></BrnadInfo>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/latesProduct',
        element: <LatestProduct></LatestProduct>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`) 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
