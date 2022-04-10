import React from "react";
import { Card,CardImage,CardBody,Paragraph,CardFooter,Button } from "reactstrap";
import placement from "./images/placement.jpg"


const Alumni=()=>{

    return(
        <div className="row">
        <div className="col-md-4 mb-3">
           <Card className="cardss">
            <img src="https://us.123rf.com/450wm/pandavector/pandavector1901/pandavector190105596/126045803-vector-design-of-avatar-and-dummy-logo-collection-of-avatar-and-image-stock-symbol-for-web-.jpg?ver=6" alt="Card Image" className="imgs"/>

            <CardBody>
                <h5 color="gray">Prafullita Patil</h5>
                <p color="gray">
                I thank C-DAC for giving such novel opportunity to enhance technical knowledge and for overall 
                personality grooming. C-DAC is an excellent institute. The entire placement system and recruitment
                 procedure is a great example of systematic management. I'm really thankful to the entire team of C-DAC 
                (Teaching/Non-Teaching/Technical/Non-Technical/TPO/Admin) for their contribution to my success.
                </p>
            </CardBody>
        </Card>
        </div>
        <div className="col-md-4 mb-3">
           <Card className="cardss" >
            <img src="https://cdn-icons-png.flaticon.com/512/194/194931.png" alt="Card Image" className="imgs"/>

            <CardBody>
                <h5 color="gray">Sarvesh Patil</h5>
                <p color="gray">
                I am glad to be a part of C-DAC which has helped me to stand up on my feet. I owe a lot to all my Mentors in the Training as with their support I've reached such great heights.It was a very good journey at C-DAC. The Placement team was very supportive and enthusiastic and took 
                the genuine pain to place the students in the best possible companies with best salary packages in the market.
                </p>
            </CardBody>
        </Card>
        </div>
        <div className="col-md-4 mb-3">
           <Card className="cardss">
            <img src="https://www.clipartmax.com/png/middle/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png" alt="Card Image" className="imgs"/>

            <CardBody>
                <h5 color="gray">Ravindra Kumar</h5>
                <p color="gray">
                This was the superb journey full of knowledge and enthusiasm. For me,
                 the best part is that it made me a proficient programmer from a confused student. Every faculty, 
                 every department played its major role to enhance me whether it was teaching staff or placement team. 
                 They taught me to struggle not to give up. 
                Now I am proud of being a CDACian. Thanx to my institute, Teachers and to whole CDAC family.
                </p>
            </CardBody>
        </Card>
        </div>
        </div>
    )
}

export default Alumni;