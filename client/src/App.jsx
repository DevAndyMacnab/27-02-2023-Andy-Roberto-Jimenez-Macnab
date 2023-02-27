import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from "./pages/NotFound"
import ProductsPage from './pages/ProductsPage'
import Navbar from './components/NavBar'
import ProductForm from './pages/ProductForm'
import BranchForm from './pages/BranchForm'
import { ManageContextProvider } from './context/ManageContext'
import BranchPage from './pages/BranchPage'


function App() {
  return (
    <div>
      <Navbar />
      <ManageContextProvider>
        <div>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/sucursales" element={<BranchPage/>}/>

            <Route path="/nuevoproducto" element={<ProductForm/>}/>
            <Route path="/editarproducto/:id" element={<ProductForm />} />

            <Route path="/nuevasucursal" element={<BranchForm/>}/>
            <Route path="/editarsucursal/:id" element={<BranchForm/>}/>

          </Routes>
        </div>
      </ManageContextProvider>

    </div>


  )
}

export default App;

