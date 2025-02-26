import './page.css'

import Mystery from './components/Mystery'

export default function Home() {
  return (
    <div className="mainConatiner">
      <center>
        <h1 className="headingContaienr">Mystery Solver</h1>
      </center>
      <hr />
      <Mystery />
    </div>
  );
}
