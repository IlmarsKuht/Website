import Header from './Extensions/Header'
import Footer from './Extensions/Footer'
import Data from './data'
import { useState } from 'react'

const ProductList = () => {

  const [deleteFormList, setDeleteFormList] = useState([]);
  const [isSubmit, setisSubmit] = useState(false);

  const handleSubmit = (e) => {
    if(deleteFormList.length === 0) {
      e.preventDefault();
      setisSubmit(true);
    }
  }

    return (
      
      <div className='ProductList'>
        <Header title='Product List' handleSubmit={handleSubmit} submitted={isSubmit}/>
        <Data deleteFormList={deleteFormList} setDeleteFormList={setDeleteFormList}/>
        <Footer />
          
      </div>
    )
  }
  
  
  export default ProductList