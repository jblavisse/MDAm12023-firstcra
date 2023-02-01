import FoodItem from "./FoodItem";
import {useState} from "react";

function Main() {
    const [title, setTitle] = useState("Hello World!");
    const [count, setCount] = useState(0);

    function handleClick() {
        setTitle("Olala, j'ai été changé");
        setCount(count+1);
    }

    return (
        <main>
            <h1>{title}</h1>

            <button onClick={handleClick}>
                Changer mon titre (déjà fait {count} fois)
            </button>
            <ul>
                <FoodItem title="Eau" quantity="10cl" />
                <FoodItem title="Farine" quantity="30g" />
                <FoodItem title="Pomme de terre" quantity="1kg" />
            </ul>
        </main>
    )
}

export default Main;