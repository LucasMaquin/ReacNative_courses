import axios from 'axios';

// https://api.hgbrasil.com/weather?key=76bce48c&lat=-23.682&lon=-46.875

export const key = '76bce48c';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;

