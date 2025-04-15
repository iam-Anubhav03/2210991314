import axios from 'axios';

const BASE_URL = "http://20.244.56.144/evaluation-service";

export const getUsers = async () => {
  const res = await axios.get(`${BASE_URL}/users`);
  return res.data.users;
};

// You'll add getPosts and getComments later based on the other screenshots.
