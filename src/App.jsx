import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';
import Cart from './components/Cart/Cart';
import Brands from './components/Brands/Brands';
import NotFound from './components/NotFound/NotFound';
import CounterContextProvider from './context/CounterContext.js';
import { useContext, useEffect } from 'react';
import { userContext } from './context/UserContext.js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import CartContextProvider from './context/CartContext.js';
import { Provider } from 'react-redux'

import { Toaster } from 'react-hot-toast';
import store from './redux/store';
import Adress from './components/Adress/Adress';
import AllOrdars from './components/AllOrdars/AllOrdars';
import WishList from './components/WishList/WishList';

let routers = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <ProtectedRoute> <Home /></ProtectedRoute> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'products', element: <ProtectedRoute> <Products /></ProtectedRoute> },
      { path: 'categories', element: <ProtectedRoute>  <Categories /></ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute> <Brands /></ProtectedRoute> },
      { path: 'allorders', element: <ProtectedRoute> <AllOrdars /></ProtectedRoute> },
      { path: 'address/:cartId', element: <ProtectedRoute> <Adress /></ProtectedRoute> },
      { path: 'wishlist', element: <ProtectedRoute> <WishList /></ProtectedRoute> },
      { path: 'productDetails/:id', element: <ProtectedRoute> <ProductDetails /></ProtectedRoute> },
      { path: '*', element: <NotFound /> },

    ]
  }
])
function App() {

  let { setToken } = useContext(userContext)
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {

      setToken(localStorage.getItem('token'))
    }
  }, [])

  return (
    <>
    <Provider store={store}>
    <CartContextProvider>
          <CounterContextProvider>
      <RouterProvider router={routers}>

      </RouterProvider>
    </CounterContextProvider>
    </CartContextProvider>
    <Toaster />
    </Provider>


    </>

    

  );
}

export default App;
