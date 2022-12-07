import { ProductsContext } from '../context/ProductContext'
import { useContext } from 'react'

export const useProductssContext = () => {
  const context = useContext(ProductsContext)

  if (!context) {
    throw Error('useProductsContext must be used inside an ProductsContextProvider')
  }

  return context
}