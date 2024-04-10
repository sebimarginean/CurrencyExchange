import axios from "axios";

export const fetchData = async () => {
  const url =
    "http://data.fixer.io/api/latest?access_key=YOUR_KEY";
  try {
    const price = await axios.get(url);
    return price;
  } catch (error) {
    return error;
  }
};
