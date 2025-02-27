import './page.css'
import TheFalse from "./components/TheFalse";

export default function Home() {
  return (
    <div className="mainContainer">
      <center>
        <h1 className="mainHeading">Guess the False Statement</h1>
      </center>
      <TheFalse />
    </div>
  );
}
