import React,{ useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview'
import Category from '../category/category'

import { fetchCategoriesStart } from '../../store/categories/categories.action'


const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {      
          dispatch(fetchCategoriesStart());
      }, [dispatch]);
    
    return (
       <Routes>
        <Route index element={ <CategoriesPreview/>} />
        <Route path=':category' element={ <Category/>} />
       </Routes>
    )
}

export default Shop