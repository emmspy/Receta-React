import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
        );
        const data = await response.json();
        setCocktails(data.drinks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCocktails();
  }, []);

  return (
    <>
      <Navbar />
      <div className="cocktail-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cocktails.map((cocktail) => (
          <div
            key={cocktail.idDrink}
            className="cocktail-card p-11 bg-white rounded-lg shadow-md">
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="cocktail-details">
              <h2 className="text-xl font-semibold mb-2">
                {cocktail.strDrink}
              </h2>
              <p className="text-gray-700">{cocktail.strInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
