import React from "react";
import { useEffect } from "react";
const Aboutus=()=>{
  useEffect(()=>{
    document.title="About Us";
  
},[]);
    return (
        <div>
        <div className="container">
       
            <div className='App'>
            <h1 className='un'>ABOUT US</h1>
            <h5>We are an advance computer training centre producing dynamic software enginners.</h5>
            <h5>we are here to make a differnce and to make india IT Ready.</h5>
            </div>
            <div className='row'>
            <div className="col-md-6">
            <h2>We believe:</h2>
              To learn and work successfully in an increasingly information-rich
              society, one must be able to use technology effectively and
              creatively. This applies to all strata of society...students,
              teachers, professionals, homemakers and senior citizens
           
    
            </div>
            <div className="col-md-6">
            <h2 >Our Mission:</h2>
              To learn and work successfully in an increasingly information-rich
              society, one must be able to use technology effectively and
              creatively. This applies to all strata of society...students,
              teachers, professionals, homemakers and senior citizens
            </div> 
            
             <h3 className='center mt-5'>What We Offer</h3>
            </div> 
            
            <div className='row mt-5' >
              <div className='col-md-4'>
              <div className="columnt">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h3>Customized Workshops </h3>
                      <h3>to empower the user</h3>
                      {/* <h4 >Flip me!</h4> */}
                    </div>
                    <div className="flip-card-back">
                      <h5>
                        These workshops are designed keeping in mind the individual
                        needs of students, teachers, professionals, homemakers and
                        Senior Citizens.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className='col-md-4'>
              <div className="columnt">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <h3>Maharashtra State Certificate in Information Technology  </h3>
                      <h3>( MS-CIT )</h3>
                      {/* <h4 >Flip me!</h4> */}
                    </div>
                    <div className="flip-card-back">
                      <h5>
                      As an Authorized Learning Centre of Maharashtra Knowledge Corporation
    (MKCL) we offer MS-CIT which aims at making the participants smart users of
    computers by learning Word, Excel, PowerPoint and Internet though practical
    case studies.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
    
    </div>
     <div className='col-md-4'>
     <div className="columnt">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front cardss">
                      <h3>Post Graduate Diploma in Advanced Computing </h3>
                      <h3>(PG DAC )</h3>
                      {/* <h4 >Flip me!</h4> */}
                    </div>
                    <div className="flip-card-back cardss">
                    <div className="pt-2 pb-5 pl-5 pr-5 ">
                      <h5 className="text-left">
                      As an Authorized training centre of CDAC's Advanced Computing Training
    School we offer PG DAC. (C-DAC is the Centre for Development in Advanced
    Computing, an initiative of the Ministry of IT, Government of India)
    B.E and B.Tech graduates from across the country are selected for this PG
    Diploma through C-DAC's All India Common Admission Test.
    
                      </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
     </div>
    
            </div>
             
           
        </div>
      <h6 className='center mt-3'>For details: www.vidyanidhi.com </h6>
        </div>
        
      );
    }


export default Aboutus;