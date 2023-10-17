import './write.css'

export default function Write() {
  return (
    <div className='write'>
      <img src="https://picsum.photos/1920/1080?8" alt="" />

      <form>
        <div className="form-group">
          <label htmlFor="fileInput">
            <i className="fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input type="text" placeholder='Title' autoFocus />
        </div>
        <div className="form-group">
          <textarea placeholder='Tell your story'></textarea>
        </div>
        <button>Publish</button>
      </form>
    </div>
  )
}
