import reactLogo from "./assets/react.svg";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      Projets
      <ul>
        <a href="/projects/ultimate-powerbank/">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </ul>
    </>
  );
}

export default App;
