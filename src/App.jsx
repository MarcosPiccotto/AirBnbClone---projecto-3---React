import "./App.css";
import Nabvar from "./components/Nabvar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            <Nabvar />
            <Hero />
            <div>
				<Card></Card>
			</div>
        </div>
    );
}

export default App;
