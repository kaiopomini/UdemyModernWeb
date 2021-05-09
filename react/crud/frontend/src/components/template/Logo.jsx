import {Link} from 'react-router-dom'

import './Logo.css'
import logo from '../../assets/images/logo.png'
const Logo = props => {
  return (
    <aside className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
    </aside>
  )
}

export default Logo