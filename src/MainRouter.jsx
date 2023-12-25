import React from 'react'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import LoginPage from './components/LoginPage'
import CategoryPage from './pages/CategoryPage'
import RewardSpin from './components/RewardSpin'
import CongragulationPage from './pages/CongragulationPage'
import ProductsPage from './pages/ProductsPage'
import ShowProduct from './pages/ShowProduct'
function MainRouter() {
  return (
    <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/login"  element={<LoginPage/>}/>
        <Route path="/category"  element={<CategoryPage/>}/>
        <Route path="/reward"  element={<RewardSpin/>}/>
        <Route path="/cong"  element={<CongragulationPage/>}/>
        <Route path="/product"  element={<ProductsPage/>}/>
        <Route path="/showProduct"  element={<ShowProduct/>}/>
    </Routes>
  )
}

export default MainRouter