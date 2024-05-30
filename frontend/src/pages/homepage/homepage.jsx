import React from 'react';
import './homepage.css'
import { useState ,useEffect} from 'react';
import Filter from '../../components/filterbar/filter'
import Displayproducts from '../../components/displayproducts/displayproducts';
import allproducts from '../../assets/allproduct'; // Assuming you have product data in allproducts
import Searchfilter from '../../components/searchfilter/searchfilter';

const Homepage = () => {

  const [products] = useState(allproducts)
    // Your product data array
  

  
  const [filteredProducts, setFilteredProducts] = useState(allproducts); // Assuming you have product data in allproducts


  
   
  return (
    <div className='homepage'>
         <Searchfilter products={allproducts}  setFilteredProducts={setFilteredProducts}/>
        
             <div className="content">
             <Filter products={products} setFilteredProducts={setFilteredProducts} />
              <Displayproducts   products={filteredProducts}/>
     
             </div>

           
        </div>

        
      


    
  );
}

export default Homepage;
