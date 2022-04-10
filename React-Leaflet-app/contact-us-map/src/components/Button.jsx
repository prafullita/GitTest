import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => 
{
  return (
    <div>
        <div className="container my-3" >
      <div className="row">
        <div className="col-3">
        <Link to="/getP" className="btn btn-primary mb2 ">Python Images</Link>
        </div>
        <div className="col-3">
        
        </div>
        <div className="col-3">
        
        </div>
        <div className="col-3">
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default Button