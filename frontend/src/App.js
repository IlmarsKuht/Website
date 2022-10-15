import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import Error from './components/Error'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./index.css"

function App() {
  return (
    <div className='container'>
      
      <BrowserRouter>
        <Routes>
        
          <Route path='/' element={<ProductList />}/>
          <Route path='addproduct' element={<AddProduct />} />
          <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
    
  );
}


export default App;
