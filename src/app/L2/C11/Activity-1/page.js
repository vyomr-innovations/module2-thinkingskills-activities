import './page.css';


import Turtle from './assets/turtle.png';
import Image from 'next/image';

import P5Wrapper from './components/P5Wrapper';
import mySketch from './components/mySketch';

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="headingContainer">
        <h1 className="heading">Drive Into the Future</h1>
        <Image alt="turtle" src={Turtle} />
      </div>
      <center>
        <P5Wrapper sketch={mySketch} />
      </center>
    </div>
  );
}
