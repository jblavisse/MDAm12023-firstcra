import FoodItem from "./FoodItem";

function Main() {
    return (
        <main>
            <h1>Bienvenue sur mon site de recettes!</h1>
            <ul>
                <FoodItem title="Eau" quantity="10cl" />
                <FoodItem title="Farine" quantity="30g" />
                <FoodItem title="Pomme de terre" quantity="1kg" />
             </ul>
        </main>
    )
}

export default Main;