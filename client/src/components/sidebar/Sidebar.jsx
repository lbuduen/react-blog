import './sidebar.css'

export default function Sidebar() {
  return (
    <aside>
      <div className="sidebar-item">
        <h4>About me</h4>
        <img src="https://picsum.photos/1920/1080?3" alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa pariatur doloribus at laboriosam error maxime vel inventore sint impedit necessitatibus, velit reprehenderit deserunt modi. Natus iusto tenetur aliquam pariatur cum.
        </p>
      </div>
      <div className="sidebar-item">
        <h4>Categories</h4>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sports</li>
          <li className="sidebar-list-item">Tech</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <h4>Follow us</h4>
        <div className="sidebar-social">
          <i className="sidebar-icon fa-brands fa-square-facebook"></i>
          <i className="sidebar-icon fa-brands fa-square-x-twitter"></i>
          <i className="sidebar-icon fa-brands fa-square-pinterest"></i>
          <i className="sidebar-icon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </aside>
  )
}
