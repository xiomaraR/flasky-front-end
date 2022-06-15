import "./App.css";
import { CatList } from "./components/CatList";
import DogList from "./components/DogList";

const catData = [
  {
    name: "Whiskers",
    chipNumber: "13579",
  },
  {
    name: "Fang",
    chipNumber: "82672",
  },
  {
    name: "Beetle",
    chipNumber: "02468",
  },
];
function App() {
  return (
    <main>
      <h1>The Cat Corral</h1>
      <CatList cats={catData} />

      <h1>The Dog Pen</h1>
      <DogList></DogList>
    </main>
  );
}

export default App;
