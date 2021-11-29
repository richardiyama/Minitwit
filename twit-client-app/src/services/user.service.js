import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://stormy-mesa-92667.herokuapp.com/api/user/';

class UserService {
  

  getUserDashboard() {
    return axios.get(API_URL + 'getuser', { headers: authHeader() });
  }

  getAllUser() {
    return axios.get(API_URL + 'getAllUser');
  }
}

export default new UserService();
