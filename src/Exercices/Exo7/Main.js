import React, {useState} from 'react';
import FoodItem from './FoodItem';

const Main = () => {
    const [ingredient, setIngredient] = useState({
        title: "",
        quantity: ""
    });

    // Ma liste sous forme d'état
    const [inputIngredient, setInputIngredient] = useState({
        title: "",
        quantity: ""
    });

    const [ingredients, setIngredients] = useState([
        { title: "Eau", quantity: "10cl"},
        { title: "Farine", quantity: "30g"},
        { title: "Pomme de terre", quantity: "1kg"}
    ])


    function handleSubmit(e) {

        e.preventDefault();
        setIngredient({
                title: inputIngredient.title,
                quantity: inputIngredient.quantity
        });
    }

  return (
    <main>
        <h1>Bienvenue sur mon site de recettes!</h1>

        <h2>Ajouter un ingrédient</h2>


        <form onSubmit={handleSubmit}>
            <label htmlFor="ingredientTitle">Titre de l'ingredient</label>

            <input type="text"
                value={inputIngredient.title}
                onChange={(e) => setInputIngredient({
                    ...inputIngredient,title: e.target.value}
                )}
            />

            <label htmlFor="ingredientQuantity">Quantité de l'ingrédient</label>
            <input type="text"
                value={inputIngredient.quantity}
                onChange={(e) => setInputIngredient({
                    ...inputIngredient,quantity: e.target.value
                })}
            />

            <button type="submit">OK</button>
        </form>

        <h2>Liste des ingrédients</h2>
        <ul>
            {/* Le .map */}
            {ingredients.map(function(ingredient) {
                return (<FoodItem title={ingredient.title} quantity={ingredient.quantity} />)
            })}

            <FoodItem title={ingredient.title} quantity={ingredient.quantity} />
        </ul>
    </main>


  )
}

export default Main