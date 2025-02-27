import './page.css'
import Objs from './components/Objs'

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="headingContainer">
        <h1 className="mainHeading">The Innovation Challenge</h1>
      </div>
      <hr />
      <Objs />
    </div>
  );
}
