import { Link } from "react-router-dom"
const Header2 = ({title}) => {

    return (
    <header className='header bb'>
        <h1 className="title p-1">{title}</h1>
        <button type="submit" form="product_form" className="btn">Save</button>
        <Link to='/' className="btn">CANCEL</Link>
    </header>
    )
}

Header2.defaultProps={
    title:'Product Add',
}
    

export default Header2