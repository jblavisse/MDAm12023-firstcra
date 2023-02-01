import FoodItem from "./FoodItem";
import {useState} from "react";

function Main() {
    const [title, setTitle] = useState("Hello World!");

    return (
        <main>
            <h1>{title}</h1>

            <ul>
                <FoodItem title="Eau" quantity="10cl" />
                <FoodItem title="Farine" quantity="30g" />
                <FoodItem title="Pomme de terre" quantity="1kg" />
            </ul>
        </main>
    )
}

export default Main;