import { useState } from "react"

const Furniture = ({changeFormValue, formValues, productError}) => {

    const initialFurnValues = { height: '', width: '', length: ''};
    const [furnFormValues, setFurnFormValues] = useState(initialFurnValues);

    const handleChange = (e) =>{
        const {id, value} = e.target;
        const object = furnFormValues;
        object[id] = value;
        setFurnFormValues({...furnFormValues, [id]:value});
        changeFormValue({...formValues, 'productInfo[]':Object.values(object)}) 

    }

    return (
        <div className='Furniture'>
            
            <label htmlFor="height">Height(CM)</label><br></br>
            <input type="number" id="height" name="productInfo[]" onChange={handleChange} value={furnFormValues.height}></input><br></br>

            <label htmlFor="width">Width(CM)</label><br></br>
            <input type="number" id="width" name="productInfo[]" onChange={handleChange} value={furnFormValues.width}></input><br></br>

            <label htmlFor="length">Length(CM)</label><br></br>
            <input type="number" id="length" name="productInfo[]" onChange={handleChange} value={furnFormValues.length}></input><br></br>
            {productError} 
            {!productError && <p>Please provide dimensions</p>}
        </div>
    )
}
  
  
  export default Furniture