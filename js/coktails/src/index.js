import fetch from 'node-fetch';
import {
  printCocktailBegginingWithLetter,
  printExtravagantCocktails,
  printPrettyCocktails,
} from './logger.js';

const checkIsExtravagentCocktail = (cocktail) => {
  return cocktail['strIngredient5'] !== null;
  // const numOfIngredients = Object.entries(cocktail).filter(
  //   ([key, value]) => key.startsWith('strIngredient') && value !== null
  // ).length;

  // return numOfIngredients > 4;
};

const getArrayofIngredients = (cocktail) => {
  return Object.entries(cocktail)
    .filter(([key, value]) => key.startsWith('strIngredient') && value !== null)
    .map(([key, value]) => value);
};

const getArrayofIngredientsAndQuantities = (cocktail) => {
  return Object.entries(cocktail)
    .filter(([key, value]) => key.startsWith('strIngredient') && value !== null)
    .map(([key, value], index) => ({
      name: value,
      quantity: cocktail[`strMeasure${index + 1}`],
    }));
};
// getArrayofIngredientsAndQuantities
const prettifyCocktailsResult = ({
  cocktails,
  ingredientsWithQuantities = false,
}) => {
  return cocktails.map((cocktail) => {
    const { idDrink: id, strDrink: name } = cocktail;

    const ingredients = ingredientsWithQuantities
      ? getArrayofIngredientsAndQuantities(cocktail)
      : getArrayofIngredients(cocktail);

    return { name, id, ingredients };
  });
};


const showCocktailsWithIngredientsQuantites = ({ cocktails }) => {
  const prettyCocktails = prettifyCocktailsResult({
    cocktails,
    ingredientsWithQuantities: true,
  });

  printPrettyCocktails({
    cocktails: prettyCocktails,
    title: 'Cocktails with ingredient quantity',
  });
};

const showAlcoholicAndNonAlcoholicCokctails = ({ cocktails }) => {
  // const alcoholic = cocktails.filter((cocktail) => cocktail.strAlcoholic === 'Alcoholic')
  // const nonAlcoholic = cocktails.filter((cocktail) => cocktail.strAlcoholic !== 'Alcoholic')

  let alcoholic = [];
  let nonAlcoholic = [];
  cocktails.forEach((cocktail) => {
    cocktail.strAlcoholic === 'Alcoholic'
      ? alcoholic.push(cocktail)
      : nonAlcoholic.push(cocktail);
  });

  const prettyAlcoholic = prettifyCocktailsResult({
    cocktails: alcoholic,
    ingredientsWithQuantities: true,
  });
  const prettyNonAlcoholic = prettifyCocktailsResult({
    cocktails: nonAlcoholic,
    ingredientsWithQuantities: true,
  });

  printPrettyCocktails({ cocktails: prettyAlcoholic, title: 'Alcoholic' });
  printPrettyCocktails({
    cocktails: prettyNonAlcoholic,
    title: 'Non Alcoholic',
  });
};

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g';

fetch(url)
  .then((res) => res.json())
  .then(({ drinks: cocktails }) => {
    printCocktailBegginingWithLetter({
      letter: 'G',
      cocktails,
    });

    const extravagantCocktails = cocktails.filter(checkIsExtravagentCocktail);
    // printExtravagantCocktails({ cocktails: extravagantCocktails });

    const prettyCocktails = prettifyCocktailsResult({ cocktails });

    printPrettyCocktails({ cocktails: prettyCocktails });

    const CocktailsWithQuantity = prettifyCocktailsResult({
      cocktails,
      ingredientsWithQuantities: true,
    });

    printPrettyCocktails({
      cocktails: CocktailsWithQuantity,
      ingredientsWithQuantities: true,
    });

    showCocktailsWithIngredientsQuantites({ cocktails });

    showAlcoholicAndNonAlcoholicCokctails({ cocktails });
  });
