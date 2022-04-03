import fetch from 'node-fetch';

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g';

const getAll = () => {
  const request = fetch(baseUrl).then((response) => response.json());
  return request.then((response) => response.drinks);
};

export default { getAll };
