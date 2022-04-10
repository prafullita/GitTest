import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
import base_url from '../api/bootapi'
import { Link } from 'react-router-dom'

const Gallary = () => {

    const [images, setImages] = useState([])
    

    useEffect(() => {
      
        axios.get(`${base_url}/getImage`).then((response)=>{
            setImages(response.data);
            
            
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }, [])

    

  return (
    <div>
        <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {
          images.map((value)=>{
            return (
             <div className="col mt-3" key={value.imgId}>
                <img src={value.imgUrl} className='img-fluid' alt="image" />
             </div>
            );
          })
        }
      </div>
    </div>
    </div>
  )
}

export default Gallary