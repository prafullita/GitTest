import { Carousel,CarouselItem } from "react-bootstrap";

const Carousels=()=>{
    return (
      <div className="col-md-12">
            <Carousel interval="5000">
                <CarouselItem>
                  <img className="d-block img-size" src="https://vidyanidhi.com/images/img3.jpg" alt="First img" />
                </CarouselItem>
                <CarouselItem>
                  <img className="d-block img-size" src="https://vidyanidhi.com/images/img18.jpg" alt="First img" />
                </CarouselItem>
                <CarouselItem>
                  <img className="d-block img-size" src={require("./images/1.jpg")} alt="First img" />
                </CarouselItem>
            </Carousel>
      </div>
      )
}

export default Carousels;