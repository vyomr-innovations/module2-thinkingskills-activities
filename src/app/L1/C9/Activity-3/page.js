import './page.css'
import ProsAndCors from './components/ProsAndCors'

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="headingContainer">
        <h1 className="mainHeading">The Pros and Cons Ladder</h1>
      </div>
      <hr />
      <ProsAndCors />
    </div>
  );
}
