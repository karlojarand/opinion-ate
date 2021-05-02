import axios from 'axios';

const client = axios.create({
  baseURL: 'https://outside-in-dev-api.herokuapp.com/rQk5gRFbEyNmeefmcpsmXnLiSjA0GrXc',
});

 const api = {

  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
   },
 };

 export default api;