import "./App.css";
import { CatList } from "./components/CatList";
import DogList from "./components/DogList";

function App() {
  return (
    <main>
      <h1>The Cat Corral</h1>
      <CatList></CatList>

      <h1>The Dog Pen</h1>
      <DogList></DogList>
    </main>
  );
}

export default App;
