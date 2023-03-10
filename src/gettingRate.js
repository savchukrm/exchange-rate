import axios from 'axios';

export const gettingRate = async () => {
  const options = {
    method: 'GET',
    url: `https://v6.exchangerate-api.com/v6/2fd8328346327ff9b8443f04/latest/USD`,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
