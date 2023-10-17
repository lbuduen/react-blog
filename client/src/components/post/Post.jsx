import './post.css'

export default function Post() {
  return (
    <article>
      <img className='post-img' src="https://picsum.photos/1920/1080?5" alt="" />
      <div className="post-info">
        <div className="post-categories">
          <span className="post-category">Music</span>
          <span className="post-category">Life</span>
        </div>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia maxime ex adipisci exercitationem placeat enim accusamus excepturi illum odio magnam necessitatibus possimus, facere error aspernatur voluptatibus pariatur eaque perspiciatis! Nostrum.
      </p>
    </article>
  )
}
