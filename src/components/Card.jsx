export default function Card(props){
    const {condition, img = "src/assets/person1.png", quality, text, price} = props
    console.log(img)
    return(
        <div>
            <img src={img} alt="Person image" />
            <span>hola</span>
        </div>
    );
}