import React, {useState} from 'react';
import FoodItem from './FoodItem';

const Main = () => {

    // 1. Initialisation des états

    // Etat pour ma donnée dynamique (nouvel ingrédient)
    const [ingredient, setIngredient] = useState({
        title: "",
        quantity: ""
    });

    // Etat pour mes champs du formulaire d'ajout d'ingrédient
    const [inputIngredient, setInputIngredient] = useState({
        title: "",
        quantity: ""
    });


    function handleSubmit(e) {

        e.preventDefault();
        // 4. Met en place l'ingrédient qui est créé
        setIngredient({
                title: inputIngredient.title,
                quantity: inputIngredient.quantity
        });
    }

  return (
    <main>
        <h1>Bienvenue sur mon site de recettes!</h1>

        <h2>Ajouter un ingrédient</h2>


        <form onSubmit={handleSubmit}>  {/* 3. Soumission du formulaire */}
            <label htmlFor="ingredientTitle">Titre de l'ingredient</label>

            {/* 2. Remplissage des champs */}
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
            <FoodItem title="Eau" quantity="10cl" />
            <FoodItem title="Farine" quantity="30g" />
            <FoodItem title="Pomme de terre" quantity="1kg" />

            {/* 5. Les valeurs dans ingredient sont affichées */}
            <FoodItem title={ingredient.title} quantity={ingredient.quantity} />
        </ul>
    </main>


  )
}

export default Main