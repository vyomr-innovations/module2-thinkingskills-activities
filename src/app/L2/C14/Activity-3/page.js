import './page.css';


import Words from './assets/words.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="headingContainer">
        <h1 className="heading">Six-Word Story Titles</h1>
      </div>

      <center>
      <Image alt="Words" src={Words} />
      </center>
    </div>
  );
}
