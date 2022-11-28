import axios from 'axios';

const token = 'd63025a4925c000adbeae7f657e46694d4a6a748';

let config = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Token ' + token,
  },
};

export const getDadata = async query => {
  try {
    const {data} = await axios.post(
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
      {query},
      config,
    );
    console.log(data.suggestions);
    return data.suggestions;
  } catch (e) {
    console.error(e);
  }
};
