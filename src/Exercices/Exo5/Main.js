import React, {useState} from 'react';
import FoodItem from './FoodItem';

const Main = () => {

    const [ingredient, setIngredient] = useState("");
    const [inputIngredient, setInputIngredient] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        setIngredient(inputIngredient);
    }

  return (
    <main>
        <h1>Bienvenue sur mon site de recettes!</h1>

        <h2>Ajouter un ingrédient</h2>


        <form onSubmit={handleSubmit}>
            <input type="text"
                value={inputIngredient}
                onChange={(e) => setInputIngredient(e.target.value)}
            />
            <button type="submit">OK</button>
        </form>

        <h2>Liste des ingrédients</h2>
        <ul>
            <FoodItem title="Eau" quantity="10cl" />
            <FoodItem title="Farine" quantity="30g" />
            <FoodItem title="Pomme de terre" quantity="1kg" />
            <FoodItem title={ingredient} quantity="" />
        </ul>
    </main>


  )
}

export default Main