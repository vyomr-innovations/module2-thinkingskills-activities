import './page.css';
import RoboticArmLogo from './assets/roboticArmLogo.png';
import Image from 'next/image';
import SlideShow from './components/SlideShow'

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="headingContainer">
        <center>
          <Image
            src={RoboticArmLogo}
            alt="SmartHomeLogo"
            width={500}
            height={300}
          />
          <h1>Robotic Arm</h1>
        </center>
      </div>
      <hr />
      <br />

      <center>
        <SlideShow />
      </center>


    </div>
  );
}