
import './page.css';

import Image from "next/image";
import RoboticArmLogo from './asstes/roboticArmLogo.jpg'

import P5Wrapper from './components/P5Wrapper';
import mySketch from './components/mySketch';

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="headingContainer">
        {/* <center> */}
          <Image
            src={RoboticArmLogo}
            alt="RoboticArmLogo"
            width={500}
            height={300}
          />
          <h1>Robotic Arm</h1>
        {/* </center> */}
      </div>
      <center>
        <P5Wrapper sketch={mySketch} />
      </center>
    </div>
  );
}
