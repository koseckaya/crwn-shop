//import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { createAction } from "../../utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPES } from './categories.types';



export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)

export const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START)

export const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, categoriesArray)

export const fetchCategoriesFailed = (error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED, error)

// export const fetchCategoriesAsync = () => async (dispatch) => {
//     dispatch(fetchCategoriesStart())

//     try {
//         const categoriesArray = await getCategoriesAndDocuments('categories')
//         dispatch(fetchCategoriesSuccess(categoriesArray))
//     } catch (error) {
//         dispatch(fetchCategoriesFailed(error))
//     }


// }