import React from 'react'
import axios from 'axios'
import base_url from '../api/bootapi'
import { useState ,useEffect} from 'react'

const GetPython = () => {

    const [python, setPython] = useState([])

    useEffect(() => {
      
        axios.get(`${base_url}/getImage/python`).then((response)=>{
            setPython(response.data);
            
            
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
            python.map((value)=>{
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

export default GetPython