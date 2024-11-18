import React from 'react';
import './Networkings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faGlobe, faServer } from '@fortawesome/free-solid-svg-icons';

function Networkings() {
  return (
    <div>
      <div className='Networking'>
        <h1 className='Networking-h1'>Active Passive Networking</h1>
        <p className="networkings-paragraph">
        Active-Passive Networking refers to a configuration where two or more network devices, 
        links, or systems are set up in such a way that one is actively handling traffic while the 
        other is in a passive or standby state. This setup is typically used to ensure high availability,
         redundancy, and failover protection for critical network infrastructure.
         If the active component fails, the passive component quickly takes over to maintain the continuity of services.
        </p>
      </div>
      <div className="Networking-container">
        <div className="Networking-item">
          <FontAwesomeIcon icon={faDesktop} size="3x" className='icons1'/>
          <h2>Our portfolio</h2>
          <p>We specialize in creating and optimizing high-quality, custom webportal & Mobile App for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use interface for clients.</p>
          <a href="#readmore1" className="read-more">Read More</a>
          <div id="readmore1" className="more-info"></div>
        </div>
        <div className="Networking-item">
          <FontAwesomeIcon icon={faGlobe} size="3x" className='icons1' />
          <h2>Passive Networking Solutions</h2>
          <p>We are the premier Information Technologies provider, delivering cutting-edge solutions that redefine industry standards.</p>
          <a href="#readmore2" className="read-more">Read More</a>
          <div id="readmore2" className="more-info"></div>
        </div>
        <div className="Networking-item">
          <FontAwesomeIcon icon={faServer} size="3x" className='icons1'/>
          <h2>Active Network</h2>
          <p>Experience the expertise of our top-tier project management trainers, dedicated to educating both aspiring candidates and corporate professionals.</p>
          <a href="#readmore3" className="read-more">Read More</a>
          <div id="readmore3" className="more-info"></div>
        </div>
      </div>
    </div>
  );
}

export default Networkings;
