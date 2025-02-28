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

        <div className="ins">
          <ol className="grid grid-cols-2 gap-x-4 list-decimal list-inside">
            <li>Help the sea turtle find laid eggs.</li>
            <li>Use keyboard arrow keys to move the turtle.</li>
            <li>Press spacebar to dig on that spot of the beach to check if eggs are present there or not.</li>
            <li>Press ‘h’ and space bar for hints.</li>
          </ol>
        </div>
        <P5Wrapper sketch={mySketch} />
      </center>
      <br />
    </div>
  );
}
