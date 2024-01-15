import React from 'react'
import { Link } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from "../components/Menu";


const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
           </div>
           <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <Link>
                <img src={Delete} alt="" />
              </Link>
           </div>
        </div>
      
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi!</h1>
        <p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe, distinctio voluptate harum, unde rerum nulla eveniet ab soluta assumenda, expedita eligendi earum! Libero, alias?</p>
            <br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nihil non voluptas dolorum repellendus error at. Commodi temporibus dolorum officiis praesentium voluptatum porro consequuntur, ipsam impedit voluptatem a ea iste saepe error nemo obcaecati, enim amet dolor iusto illo! Nam culpa numquam, laudantium enim atque dolor cumque voluptatem rerum quod facilis modi adipisci aut repellendus doloribus harum qui. Iusto, voluptatem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis saepe, distinctio voluptate harum, unde rerum nulla eveniet ab soluta assumenda, expedita eligendi earum! Libero, alias?</p>
            <br />
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nihil non voluptas dolorum repellendus error at. Commodi temporibus dolorum officiis praesentium voluptatum porro consequuntur, ipsam impedit voluptatem a ea iste saepe error nemo obcaecati, enim amet dolor iusto illo! Nam culpa numquam, laudantium enim atque dolor cumque voluptatem rerum quod facilis modi adipisci aut repellendus doloribus harum qui. Iusto, voluptatem.
            </p>
        </p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single