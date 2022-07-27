import "./App.css";
import Nabvar from "./components/Nabvar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
function App() {
	
    const cards = data.map((item) => (
		<Card
			//id={item.id}	
			// using spread operator
			{...item}
			// without spread operator
			// items={items}

			// whithout enclosing the data in a object
			// img={item.coverImg}
			// rating={item.stats.rating}
			// reviewCount={item.stats.reviewCount}
			// country={item.location}
			// title={item.title}
			// price={item.price}
			// openSpots={item.openSpots}
		></Card>
	));

	return (
		<div className="App">
			<Nabvar />
			<Hero />
			<div className="cards-list">
                {cards}
            </div>
		</div>
	);
}

export default App;
