import React, {useState, useEffect} from 'react'

const Data = ({deleteFormList, setDeleteFormList}) => {
    const [items, setItems] = useState([]);
    const [isLoaded, setLoadState] = useState(false);


    useEffect(() => { fetch("http://localhost:9000/retrieveProducts.php")
    .then(res => res.json())
    .then(
        (result) => {
            setItems(result);
            setLoadState(true);
        }
    )
    },[])

    

    const editDeleteFormList = (e) => {
    
        if (e.target.checked){
            setDeleteFormList([...deleteFormList, { SKU: e.target.value }]);
        } 
        else  {
            const list= [...deleteFormList];
            let index = list.indexOf(e.target.value);
            list.splice(index, 1);
            setDeleteFormList(list);
        }
        
    }

    

    return (
        
        isLoaded === false ? 
            <></> //If products are still being fetched

        :items.length === 0 ? 
            <h1>Sorry, there are no products</h1>  //else if there are no products
                //else display the product list
                         
        :<div className='container'>  
            <div className="row gap-2">       
                {items.map(item=>(
                    <div key={item.SKU} className="col-12-xs col-5-sm col-3-xl">
                        <div className="product p-1">
                            <input type="checkbox" id="delete" name="delete" className="delete-checkbox" value={item.SKU} 
                            onChange={e => editDeleteFormList(e)}></input>
                            <p className='product-sku'>{item.SKU }</p> 
                            <p className='product-name'>{item.Name}</p>
                            <p className='product-price'>{item.Price} $</p>
                            <p className='product-info'>{item.ProductInfo} {item.Suffix}</p>
                        </div>
                    </div>
                ))}
            </div>
            <form id="deleteForm" action='http://localhost:9000/deleteProduct.php' method='POST'>
                {deleteFormList.map((deleteInput, index) => (
                      <input type="hidden" value={deleteInput.SKU} key={index} name="delete[]"></input>
                ))}
            </form>
        </div>
                
  )
}

export default Data;