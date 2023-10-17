import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='single-post'>
      <div className="wrapper">
        <img src="https://picsum.photos/1920/1080?10" alt="" />
        <h1>
          Lorem ipsum dolor sit amet.
          <div className="edit">
            <i className="fa-regular fa-pen-to-square"></i>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="info">
          <span className='author'>Author: <b>Leo</b></span>
          <span className="date">1 hour ago</span>
        </div>
        <p className='description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime veniam quia inventore est. Voluptate saepe maxime quibusdam blanditiis ratione?
          Aspernatur inventore sunt quo blanditiis officiis adipisci quasi.
          Aliquid, ab corporis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime veniam quia inventore est. Voluptate saepe maxime quibusdam blanditiis ratione?
          Aspernatur inventore sunt quo blanditiis officiis adipisci quasi.
          Aliquid, ab corporis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime veniam quia inventore est. Voluptate saepe maxime quibusdam blanditiis ratione?
          Aspernatur inventore sunt quo blanditiis officiis adipisci quasi.
          Aliquid, ab corporis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime veniam quia inventore est. Voluptate saepe maxime quibusdam blanditiis ratione?
          Aspernatur inventore sunt quo blanditiis officiis adipisci quasi.
          Aliquid, ab corporis.
        </p>
      </div>
    </div>
  )
}
