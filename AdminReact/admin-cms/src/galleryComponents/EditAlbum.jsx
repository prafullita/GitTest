import React, { useEffect } from 'react'
import FooterComponent from '../Navigationbar/FooterComponent';
import HeaderComponent from '../Navigationbar/HeaderComponent';
import AddImageForm from './AddImageForm';

const EditAlbum=()=> {
    useEffect(()=>{
        document.title="Edit Album";
     
    }, []);

  return (
    <>
    {/* <HeaderComponent /> */}
    <div>
      {/* <h3 className='text-center'>Edit Album</h3> */}
      <AddImageForm/>
    </div>
    {/* <FooterComponent /> */}
    </>
  )
}

export default EditAlbum;
