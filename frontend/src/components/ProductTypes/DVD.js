const DVD = ({value, changeFunction, productError}) => {
    return (
        <div className='DVD'>
            
            <label htmlFor="DVD">Size(MB)</label><br></br>
            <input 
                type="number" 
                id="size" 
                name="productInfo[]" 
                value={value} 
                onChange={changeFunction}
            ></input><br></br>
            {productError} 
            {!productError && <p>Please provide size</p>}
        </div>
    )
}
  
export default DVD