import './topbar.css'
import profile from '../../assets/profile.png'
import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div className='top'>
      <div className="top-left">
        <i className="top-icon fa-brands fa-square-facebook"></i>
        <i className="top-icon fa-brands fa-square-x-twitter"></i>
        <i className="top-icon fa-brands fa-square-pinterest"></i>
        <i className="top-icon fa-brands fa-square-instagram"></i>
      </div>
      <nav className="top-center">
        <ul className="top-list">
          <li className="top-list-item"><Link to="/">Home</Link></li>
          <li className="top-list-item">About</li>
          <li className="top-list-item">Contact</li>
          <li className="top-list-item"><Link to="write">Write</Link></li>
          <li className="top-list-item">Logout</li>
        </ul>
      </nav>
      <div className="top-right">
        <Link to='settings'><img className='top-img' src={profile} alt="" /></Link>
        <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
