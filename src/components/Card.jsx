export default function Card(props){
    const {id, openSpots, coverImg = "person1", location = "unknown", title = "i'm new here", price = 0} = props
    const {rating,reviewCount} = props.stats
    const textBadge = openSpots > 0 ? "AVAILABLE" : "SOLD OUT" 
    return(
        <div id={id} className="card">
            <div className="card-badge">{textBadge}</div>
            <img className="card-photo" src={`src/assets/${coverImg}`} alt="Image of a person" />
            <div className="card-content">
                <img src="src\assets\Star.png" alt="Star" />
                <span>{rating}</span>
                <span className="gray">({reviewCount})•  </span>
                <span className="gray">{location}</span>
            </div>
            <p className="card-title">{title}</p>
            <p className="card-price"><span className="bold">From {price}</span> / person</p>
        </div>
    );
}