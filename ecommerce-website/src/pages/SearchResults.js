import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import product from '../data/product-data.json'

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); //used ChatGPT for help on these 3 lines
  const searchTerm = searchParams.get('term');

  let [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()

    })
    let getProducts = async () => {
        let response = await fetch('/api/product/') 
        let data = await response.json()

        setProducts(data)
    }

  //product filter
  const filteredProducts = products.filter( item =>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
        <div className ="scroll-container">
            <div id="scroll-container-Recomendation">
                {
                  filteredProducts.length === 0 ? (
                    <p>No items match your search</p>
                  ) :
                  filteredProducts.map(item => {
                    return(
                      <Link to={"/Product_Page/"+item.id}><img src={item.productImages} alt={""}/></Link >       
                      )
                    }
                  )

                }
                            
            </div>       
        </div>
    </div>
  );
};

export default SearchResults;