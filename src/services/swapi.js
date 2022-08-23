import axios from 'axios'

const baseUrl = 'https://swapi.dev/api/';

export const getAllPeoples = async () => {
    const res = await axios.get(baseUrl + 'people');
    return res.data;
}
