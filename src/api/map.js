import axios from 'axios';

export const fetchMapData = async (cardId) => {
  const response = await axios.get(`/api/map?cardId=${cardId}`);
  return response.data;
};