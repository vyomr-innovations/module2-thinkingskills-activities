import './page.css';
import SmartHomeLogo from './assets/smartHomeLogo.jpg';
import Image from 'next/image';
import SmartHome from './components/SmartHome'

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="headingContainer">
        <center>
          <Image
            src={SmartHomeLogo}
            alt="SmartHomeLogo"
            width={500}
            height={300}
          />
          <h1>Smart Home</h1>
        </center>
      </div>
      <hr />
      <br />

      <center>
        <SmartHome />
      </center>


    </div>
  );
}