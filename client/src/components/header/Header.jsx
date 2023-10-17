import './header.css'

export default function Header() {
  return (
    <header>
      <div className="header-titles">
        <h5>React & Node</h5>
        <h3>Blog</h3>
      </div>
      <img className='header-img' src="https://picsum.photos/1920/1080" alt="" />
    </header>
  )
}
