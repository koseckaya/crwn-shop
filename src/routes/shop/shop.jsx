import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview'
import Category from '../category/category'

import { fetchCategoriesAsync } from '../../store/categories/categories.action'
import './shop.scss'

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {      
          dispatch(fetchCategoriesAsync());
      }, [dispatch]);
    
    return (
       <Routes>
        <Route index element={ <CategoriesPreview/>} />
        <Route path=':category' element={ <Category/>} />
       </Routes>
    )
}

export default Shop