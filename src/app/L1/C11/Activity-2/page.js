import './page.css'
import Shop from './components/Shop'
import ShopImg from './assets/shop.jpg';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="headingContainer">
        <h1 className="mainHeading">The Savvy Store</h1>
        <Image className="logo" src={ShopImg} alt="logo" />
      </div>
      <hr />
      <Shop />
    </div>
  );
}
