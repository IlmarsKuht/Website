import { Link } from "react-router-dom";

const Header = ({title, handleSubmit, submitted}) => {
  return (
    <header className="header bb">
      <h1 className="title p-1">{title}</h1>
      <div className="navbar"> 
        <Link to='/addproduct' className="btn">ADD</Link>
        <button onClick={handleSubmit} className='btn' type="submit" form="deleteForm">MASS DELETE</button>
        {submitted && <p>No items selected to delete</p>}
      </div>
      
    </header>
  )
}

Header.defaultProps={
    title:'Product List',
}
    

export default Header