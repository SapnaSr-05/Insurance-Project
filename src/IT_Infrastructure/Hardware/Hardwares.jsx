import React from 'react';
import './Hardwares.css'; // Don't forget to create and link your CSS file

function Hardwares() {
  return (
    <div className="container2">
      <div className="title2">
        <h1>Hardware</h1>
        <p>
        Hardware refers to the physical components that make up a computer or electronic device. 
        These are the parts you can touch and see, in contrast to software, which consists of the programs and 
        instructions that run on the hardware.
       
        It's the physical infrastructure that software works on to enable a computer to perform 
        functions like input, output, storage, communication, and processing.
        </p>
      </div>
      <div className="hardware-info2">
        <div className="left-paragraph2">
          <p>
          Hardware is different from software, which is the programs that run on a computer. 
          Software is the intangible part of the device that lets the user interact with the hardware and command it to 
          perform specific tasks. 
          </p>
          <div className="computers-list">
        <ul>
          <li>The CPU is essential for executing programs and running the operating system.</li>
          <li>Devices that are connected to the computer externally, like printers, scanners, external hard drives, and USB devices.</li>
          <li>The more RAM a system has, the more data and programs it can handle at once.</li>
          <li>Components located inside the computer case, such as the CPU, RAM, storage devices, and motherboard.</li>
          <li>Includes fans, heat sinks, or liquid cooling systems to keep hardware components, especially the CPU and GPU, from overheating.</li>
          <li>Devices that display or produce data for the user.</li>
          <li>Handles rendering images, video, and animations.</li>
          <li>The storage device (like an SSD or HDD) holds the original photo and saves your changes.</li>
      </ul>
        </div>
        </div>
        <div className="right-image2">
          <img src="./Img/ha1.jpg" alt=""  />
        </div>
      </div>
    </div>
  );
}

export default Hardwares;
