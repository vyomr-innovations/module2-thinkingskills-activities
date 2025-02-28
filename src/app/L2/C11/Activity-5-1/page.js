import './page.css';

import Logo from './assets/logo.jpg';
import Image from "next/image";

import P5Wrapper from './components/P5Wrapper';
import mySketch from './components/mySketch';

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="headingContainer">
        <h1 className="heading">Drive Into the Future</h1>
        <Image alt='logo' src={Logo} />
      </div>

      <center>
      <div className="ins">
          <ol className="grid grid-cols-2 gap-x-4 list-decimal list-inside">
            <li>Park the car in the yellow spot without hitting the obstacles.</li>
            <li>Use keyboard arrow keys to move the car.</li>
            <li>If you hit obstacles press r to restart.</li>          
            <li>Once the car is parked successfully manually, press s and see how car gets parked automatically.</li>
          </ol>
        </div>
        <P5Wrapper sketch={mySketch} />
      </center>
    </div>
  );
}
