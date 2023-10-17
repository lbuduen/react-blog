import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
      <div className="wrapper">
        <div className="titles">
          <span className="update">Update your account</span>
          <span className="delete">Delete your account</span>
        </div>
        <form>
          <label>Profile picture</label>
          <div className="profile-pic">
            <img src="https://picsum.photos/1920/1080?6" alt="" />
            <label>
              <i className="fa-regular fa-circle-user"></i>
              <input type="file" style={{ display: 'none' }} />
            </label>
          </div>
          <label>
            Username: <input type="text" placeholder='lbuduen' />
          </label>
          <label>
            Email: <input type="email" placeholder='lbuduen@gmail.com' />
          </label>
          <label>
            Password: <input type="password" />
          </label>
          <button>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
