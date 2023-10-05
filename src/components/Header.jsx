import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <section className="header-container">
      <Link to='/'>
        <h1 >Notes</h1>
      </Link>
    </section>
  )
}

export default Header