import React from 'react';
import { Link } from 'react-router-dom';
import {
  FcAndroidOs, FcMultipleDevices, FcKindle,
  FcDepartment, FcCalculator, FcFaq,
  FcViewDetails, FcShipped, FcGraduationCap
} from "react-icons/fc";
import './GetFreeQuote.css'; // Import your CSS file

function GetFreeQuote() {
  return (
    <div className="get-free-container">
      <h1>Get an Estimate of your Project</h1>
      <p>If you have an idea, it’s time to turn it into a reality & find the estimated cost</p>
      <h2>What type of project do you need?</h2>
      
     
      <div className="container">
        <div className="row">
          {/* Frame 1 */}
          <div className="col-sm-3 Getframe1">
            <Link to="/MobileApps">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcAndroidOs size={50} />
                </div>
                <p>How much to<br />make an App</p>
              </div>
            </Link>
          </div>

          {/* Frame 2 */}
          <div className="col-sm-3 Getframe1">
            <Link to="/Webdevelopment">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcMultipleDevices size={50} />
                </div>
                <p>Web Development<br/>Services</p>
              </div>
            </Link>
          </div>

          {/* Frame 3 */}
          <div className="col-sm-3 Getframe1">
            <Link to="/CMScost">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcKindle size={50} />
                </div>
                <p>How Much a <br /> CMS Cost</p>
              </div>
            </Link>
          </div>

          {/* Frame 4 */}
          <div className="col-sm-3 Getframe1">
            <Link to="/RealStates">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcDepartment size={50} />
                </div>
                <p>How Much To Make<br />Real-State App</p>
              </div>
            </Link>
          </div>

          {/* Frame 5 */}
          <div className="col-sm-3 Getframe1">
            <Link to="/CalculateCosts">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcCalculator size={50} />
                </div>
                <p>Calculate Blockchain <br />Based App Cost</p>
              </div>
            </Link>
          </div>

          {/* Frame 6 */}
          <div className="col-sm-3 Getframe1">
            <Link to="/Chatbot">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcFaq size={50} />
                </div>
                <p>How much a <br /> Chatbot Project Cost?</p>
              </div>
            </Link>
          </div>

          {/* Frame 7 */}
          <div className="col-sm-3 Getframe1">
         
          
            <Link to="/CalculateCosts">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcViewDetails size={50} />
                </div>
                <p>Calculate Restaurant <br /> Solution Cost </p>
              </div>
            </Link>
          </div>

          {/* Frame 8 */}
          <div className="col-sm-3 Getframe1">
            <Link to="/Restaurant">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcShipped size={50} />
                </div>
                <p>Calculate Restaurant <br /> Solution Cost </p>
              </div>
            </Link>
          </div>

          {/* Frame 9 */}
          <div className="col-sm-3 Getframe1">
            <Link to="/TestingProjects">
              <div className="Getframe-content">
                <div className="Geticon">
                  <FcGraduationCap size={50} />
                </div>
                <p>Academic-Cap  <br /> Services</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <p>
        Whether you need a mobile app, web app, CMS, or a Restaurant Solution, we have everything you need in one place! Choose the desired option to deploy
        your app and the features you need to include in your app to scale your business to newer heights.
      </p>
    </div>
  );
}



export default GetFreeQuote;


{/* <Link to="/contact">
<button className="custom-button2">Contact Us</button>
</Link> */}