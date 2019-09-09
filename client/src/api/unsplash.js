import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID e6751beb50f53e429cc4171f2f96a68e0b6873ecf16dc593a6c7b751e2107d2e'
  }
});
