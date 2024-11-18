import React from 'react';
import './DataCenter.css'; // Don't forget to create and link your CSS file

function DataCenter() {
  return (
    <div className="data-center-container">
      <div className="data-center-title">
        <h1>Data Center Services</h1>
        <p>Data center services refer to the various services provided by data centers to store,
         manage, and distribute data and applications for businesses, organizations, and individuals.
          A data center is a physical facility that houses servers, storage systems, 
        networking equipment, and other infrastructure to support the operations of IT systems.
        These services are essential for businesses and organizations that require reliable, secure, and scalable computing resources, 
        but do not want to manage their own physical infrastructure.
        </p>
      </div>

      <div className="data-center-content">
        <div className="data-center-left">
          <h2>Benefits of Data Centers Services</h2>
          <ul>
            <li>High Availability and Uptime</li>
            <li>Scalability and Flexibility</li>
            <li>Cost Efficiency</li>
            <li>Improved Security</li>
            <li>Disaster Recovery and Business Continuity</li>
            {/* Add more items as needed */}
          </ul>
        </div>

        <div className="data-center-right">
          <h2>Advantage Data Centers Services</h2>
          <ul>
            <li>Improved Data Management</li>
            <li>Scalability and Flexibility</li>
            <li>Cost Efficiency</li>
            <li>Enhanced Security</li>
            <li>Better Decision-Making</li>
            {/* Add more items as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DataCenter;
