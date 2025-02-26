import './page.css'
import TheTruth from "./components/TheTruth";

export default function Home() {
  return (
    <div className="mainContainer">
      <center>
        <h1 className="mainHeading">Guess the Truth</h1>
      </center>
      <TheTruth />
    </div>
  );
}
