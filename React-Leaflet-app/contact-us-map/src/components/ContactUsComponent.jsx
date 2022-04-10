import React from "react";
import Enquiryform from "./Enquiryform";
import Addresscomponent from "./Addresscomponent";
import Map from "./Map";

function ContactUsComponent() {
  return (
    <div>
      <div className="container">
        <Map />
      </div>
      <div className="container">
        <div className="row">
          <Enquiryform />
          <Addresscomponent />
        </div>
      </div>
    </div>
  );
}

export default ContactUsComponent;
