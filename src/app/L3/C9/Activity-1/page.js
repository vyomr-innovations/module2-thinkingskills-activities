import './page.css'
import TheStory from './components/TheStory'

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="headingContainer">
        <h1 className="mainHeading">The Superhero’s Mission</h1>
      </div>
      <hr />
      <TheStory />
    </div>
  );
}
