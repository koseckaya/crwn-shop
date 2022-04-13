import './category.scss'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Fragment, useEffect, useState } from 'react'
import ProductCard from '../../components/product-card/product-card'
import Spinner from '../../components/spinner/spinner'
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector'

const Category = () => {
    const { category } = useParams()
    const isLoading = useSelector(selectCategoriesIsLoading)
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            {isLoading ? (<Spinner />) :
                (<div className='category-container'>
                    {products && products.map((product) => <ProductCard key={product.id} product={product} />
                    )}
                </div>)
            }

        </Fragment>

    )

}

export default Category