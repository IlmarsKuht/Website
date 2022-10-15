import { Link } from "react-router-dom"

const Error = () => {
    return (
        <header className='Error'>
            <h1> the page does not exist</h1>
            <Link to='/'>Back home</Link>
        </header>
    )
  }
  
  
  export default Error