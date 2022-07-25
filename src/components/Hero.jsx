import PhotoGrid from "../assets/photo-grid.png";

export default function Hero() {
    return (
        <section>
            <img className="photo-grid" src={PhotoGrid} alt="photo grid" />
            <div className="hero-content">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind
                    hosts—all without leaving home.
                </p>
            </div>
        </section>
    );
}
