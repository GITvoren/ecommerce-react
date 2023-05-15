import products from '../assets/css/products.css'
import ProductCard from '../components/ProductCard.js'
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner.js';


function Products(){

     const [ activeproducts, setActiveProducts] = useState([])
     const [isLoading, setIsLoading] = useState(true)

     useEffect(() => {
          fetch(`${process.env.REACT_APP_API_URL}/products/`)
          .then( res => res.json())
          .then( data => {
               setActiveProducts(data.map(activeproduct => {
                    return(
                         <ProductCard key= {activeproduct._id} activeproductdata= {activeproduct} />
                    )
               }))

		 setIsLoading(false)
          })
     })
     return(
          <div className="container">
		{
		 (isLoading)
		?
         	 <Spinner />
		:
          <>
               <h1 className="products-page-title">Our Products</h1>
               <div className="grid-container">
                    {activeproducts}      
               </div>
          </>
		}
          </div>
     )
}

export default Products;