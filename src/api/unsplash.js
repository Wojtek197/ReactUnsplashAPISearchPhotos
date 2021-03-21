import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID xK_nJeIFMf_Ngd5DDNQEH2Xf2QB5-PQ677c6kuIA-YQ'
  }
});