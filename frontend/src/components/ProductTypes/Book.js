const Book = ({value, changeFunction, productError}) => {
    return (
        <div className='Book'>
            
            <label htmlFor="Book">Weight(KG)</label><br></br>
            <input 
                type="number" 
                id="weight" 
                name="productInfo[]" 
                value={value} 
                onChange={changeFunction}
            ></input><br></br>
            {productError} 
            {!productError && <p>Please provide weight</p>}
        </div>
    )
}
  
  
  export default Book