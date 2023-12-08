import React from 'react';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarra from './Componentes/NavBarra/NavBarra';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './Componentes/Cart/Cart';
import Checkout from './Componentes/Checkout/Checkout';
import Footer from './Componentes/Footer/Footer';


const App = () => {
  return (
    <>

      <BrowserRouter>
        <CarritoProvider>
          <NavBarra />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h2>Sitio En Construcción </h2>} />
          </Routes>
          </CarritoProvider>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App