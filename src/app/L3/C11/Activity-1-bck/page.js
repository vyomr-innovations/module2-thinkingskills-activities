import './page.css';
import Image from 'next/image';
import LemonadeStandLogo from './assets/LemonadeStandLogo.jpeg'
import MainTable from './components/MainTable';

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="headingContainer">
        <center>
          <Image
            src={LemonadeStandLogo}
            alt="lemonadeStandLogo"
            width={500}
            height={300}
          />
          <h1>The Lemonade Stand</h1>
        </center>
      </div>
      <MainTable />
    </div>
  );
}