import './page.css'

import Sequence from './components/Sequence'

export default function Home() {
  return (
    <div className="mainConatiner">
      <center>
        <h1 className="headingContaienr">Time Management Challenge</h1>
      </center>
      <hr />
      <Sequence />
    </div>
  );
}
