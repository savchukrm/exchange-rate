import axios from 'axios';

export const compareRate = async (param) => {
  const options = {
    method: 'GET',
    url: `https://v6.exchangerate-api.com/v6/2fd8328346327ff9b8443f04/pair/${param}/UAH`,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
