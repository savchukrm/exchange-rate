import axios from 'axios';

export const gettingRate = async (have, want, amount) => {
  const options = {
    method: 'GET',
    url: `https://api.api-ninjas.com/v1/convertcurrency?want=${want}&have=${have}&amount=${amount}`,
    headers: { 'X-Api-Key': 'eHSodlkTDceOG1d88CipQ==Ox4MwEdRZFa7DrLN' },
    responseType: 'json',
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
