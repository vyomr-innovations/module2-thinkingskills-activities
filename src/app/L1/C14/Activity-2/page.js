'use client'

import './page.css'

import Logo from './assets/logo.png';
import Image from 'next/image'

import Mystery from './components/Mystery'

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="headingContainer" id="headingContainer">
        <h1 className="mainHeading">Mystery Box!</h1>
        <Image className="logo" src={Logo} alt="log" />
      </div>
      <hr />
      <Mystery />
    </div>
  );
}
