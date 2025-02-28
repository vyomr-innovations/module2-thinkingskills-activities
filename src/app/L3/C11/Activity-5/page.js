
import './page.css';

import Image from "next/image";
import RoboticArmLogo from './asstes/roboticArmLogo.jpg'

import P5Wrapper from './components/P5Wrapper';
import mySketch from './components/mySketch';

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="headingContainer">
        <Image
          src={RoboticArmLogo}
          alt="RoboticArmLogo"
          width={500}
          height={300}
        />
        <h1>Robotic Arm</h1>
      </div>


      <center>
        <div className="ins">
          <ol className="grid grid-cols-2 gap-x-4 list-decimal list-inside">
            <li>Use your mouse to move the robotic arm.</li>
            <li>Pick up objects in circular shape by clicking on them.</li>
            <li>Place them to their respective coloured rectangle.</li>
          </ol>
        </div>
        <P5Wrapper sketch={mySketch} />
      </center>
    </div>
  );
}
