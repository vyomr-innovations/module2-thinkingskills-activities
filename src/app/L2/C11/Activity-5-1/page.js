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
        <P5Wrapper sketch={mySketch} />
      </center>
    </div>
  );
}
