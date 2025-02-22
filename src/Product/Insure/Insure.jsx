import React from 'react';
import './Insure.css'; // Import the CSS file for the Insure component
import 'bootstrap/dist/css/bootstrap.min.css';




function Insure() {
  return (
    
    <div className="insure-container4">
       <h2 className="title4">
        <span>Insure</span>
        <span className="italic-red">IT</span>
        <span className="white-background">Pro</span>
      </h2>
      <div className="content4">
        <div className="text">
          <p>
          "InsureIT Pro" is single window login platform for Employee, Business Associates and Customers to Insurance Brokers digital journey. The portal offers products like Motor, Health, Life, Personal accident insurance online.<br/>

           Intuitive dashboards transform complex data into simple identifies patterns. (Using Jasper Reporting tool).<br/>

           Process applications, Verify data, Determine eligibility, and automate processes.<br/>

           Easy Performance Monitoring of individual Products vs Employee & Business Partners.<br/>
          "InsureIT Pro" is single window login platform for Employee, Business Associates and Customers to Insurance Brokers digital journey. The portal offers products like Motor, Health, Life, Personal accident insurance online.<br/>

          </p>
        </div>
        <div className="image-container4">
        <img src={`${process.env.PUBLIC_URL}/Img/p1.jpeg`} alt="" />
        </div>
      
      
      </div>
      
    </div>
    
  );
}

export default Insure;
