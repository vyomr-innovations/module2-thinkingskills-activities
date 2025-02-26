import './page.css';
import SlideShow from './components/SlideShow'

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="headingContainer">
        <center>
          <br />
          <h1>Moral dilemma</h1>
        </center>
      </div>
      <hr />
      <br />

      <center>
        <SlideShow />
      </center>


    </div>
  );
}