import './page.css'

import Sequence from './components/Sequence'

export default function Home() {
  return (
    <div className="mainConatiner">
      <center>
        <h1 className="headingContaienr">Fix the Sequence</h1>
      </center>
      <Sequence />
    </div>
  );
}
