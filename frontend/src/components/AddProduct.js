import { useState, useEffect } from 'react'
import Book from './ProductTypes/Book'
import DVD from './ProductTypes/DVD'
import Furniture from './ProductTypes/Furniture'
import Header2 from './Extensions/Header2'
import Footer from './Extensions/Footer'

const AddProduct = () => {
    const [SKUS, setSKUS] = useState();
    useEffect(() => { fetch("http://localhost:9000/retrieveSKUS.php")
        .then(res => res.json())
        .then(
            (result) => {
                setSKUS(result);
                
            }
        )
    },[])
    const [myType, setMyType] = useState('DVD');

    const initialValues = { sku: [], name: [], price: [], 'productInfo[]': []};
    const requiredProductInputs = { DVD: 1, Book: 1, Furniture: 3};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:[value]});
    }
    const emptyInput = () => {
        setFormValues({...formValues, 'productInfo[]':[]});
        delete formErrors.productInfo;
    }

    const handleSubmit = (e) =>{
        setisSubmit(true);
        if(!validate(formValues)){
            e.preventDefault();
        } 
    }
    
    const validate= (values) =>{
        const errors = {};
        if(values.sku.filter(Boolean).length ===0){
            errors.sku = "SKU is required";
        }
        else if(values.sku[0].length >=35){
            errors.sku = "SKU must be less than 35 characters";
        }
        else if(SKUS.includes(values.sku[0])){
            errors.sku = "SKU already exists";
        }
        if(values.name.filter(Boolean).length ===0){
            errors.name = "Name is required";
        }
        else if(values.name[0].length >=65){
            errors.name = "Name must be less than 65 characters";
        }
        if(values.price.filter(Boolean).length ===0){
            errors.price = "Price is required";
        }
        if(values['productInfo[]'].filter(Boolean).length < requiredProductInputs[myType]){
            errors.productInfo = myType + " input field is required";
        }
        if(values['productInfo[]'].reduce((a,b) => a+b,0).length >= 66){ //adds a 0
            errors.productInfo = "Dimensions length must be less than 65";
        }

        
        setFormErrors(errors);
        if(Object.keys(errors).length === 0) return true;
        else return false;
    }

    return (
        
        <div>
            <Header2 />  
          
            <form  action="http://localhost:9000/addProduct.php" onSubmit={handleSubmit}  id="product_form" method="POST" className='AddProduct'>

                <label htmlFor="sku">SKU</label><br></br>
                <input 
                    type="text" 
                    id="sku" 
                    name="sku" 
                    value={formValues.sku}
                    onChange={handleChange}
                ></input>
                <p>{ isSubmit && formErrors.sku}</p><br></br>


                <label htmlFor="name">Name</label><br></br>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formValues.name}
                    onChange={handleChange}
                ></input>
                <p>{isSubmit && formErrors.name}</p><br></br>

                <label htmlFor="price">Price ($)</label><br></br>
                <input 
                    type="number" 
                    id="price" 
                    name="price" 
                    value={formValues.price}
                    onChange={handleChange}
                ></input>
                <p>{isSubmit && formErrors.price}</p>
                <br></br><br></br>

                <label htmlFor="productType">Type Switcher </label>
                <select name="productType" id="productType" onChange= {(e)=> { setMyType(e.target.value); emptyInput() }}>
                    <option value="DVD" id="DVD">DVD</option>
                    <option value="Book" id="Book">Book</option>
                    <option value="Furniture" id="Furniture">Furniture</option>  
                </select>
                { myType === 'DVD' && <DVD 
                    value={formValues.productInfo} 
                    changeFunction={handleChange} 
                    productError={formErrors.productInfo}
                /> }
                { myType === 'Furniture' && <Furniture 
                    formValues={formValues} 
                    changeFormValue={setFormValues} 
                    productError={formErrors.productInfo}
                /> }
                { myType === 'Book' && <Book 
                    value={formValues.productInfo} 
                    changeFunction={handleChange} 
                    productError={formErrors.productInfo}
                /> }
               
            </form>
         
            
            <Footer />
        </div>
    )
}
  
export default AddProduct

