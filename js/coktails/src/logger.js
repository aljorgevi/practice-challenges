const extractCocktailsNames = (cocktails) => cocktails.map((c) => c.strDrink);

export const printCocktailBegginingWithLetter = ({ letter, cocktails }) => {
  const cocktailsNames = cocktails.map((c) => `"${c.strDrink}"`);

  console.log(`**Cokctials beginning with ${letter}**

  Totals: ${cocktails.length}

  Names: ${cocktailsNames.join(', ')}
  `);
};

export const printExtravagantCocktails = ({ cocktails }) => {
  const cocktailsName = extractCocktailsNames(cocktails);

  console.log(`**Cokctials with more than 4 ingredients:**

${cocktailsName.join('\n')}
  `);
};

export const printPrettyCocktails = ({
  cocktails,
  title = '**coktials with just id/name/ingredients:**',
}) => {
  const listOfCocktails = cocktails.map((c) => JSON.stringify(c)).join('\n\n');
  // const title = ingredientsWithQuantities
  //   ? 'Cocktails with ingredient quantity'
  //   : '**coktials with just id/name/ingredients:**';

  console.log(`${title}


  ${listOfCocktails}


  `);
};
