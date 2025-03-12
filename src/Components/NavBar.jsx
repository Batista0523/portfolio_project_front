import React from 'react'
import { Link, useParams } from 'react-router-dom'



function NavBar() {

  

  return (
    
    <div>
      <Link to='/'>Home</Link>
      <br />
      {/* <Link to={`/oneProject/${id}`}>One Project</Link> */}
      <Link to='/updateProject'>Update Project</Link>
      <br />
      <Link to='/allProjects'>All Projects</Link>
    </div>
  )
}

export default NavBar
