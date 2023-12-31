import axios from 'axios';
const baseUrl = 'https://notesback-bzcn.onrender.com/api/users';

const login = async (credentials) => {
  const response = await axios.get(baseUrl, credentials);
  return response.data;
};

console.log(baseUrl);
export default { login };
