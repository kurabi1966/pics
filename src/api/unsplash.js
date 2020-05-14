import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID hrcQl-My1wOR1PNDr2DY8tq1aOTz28_pPWqbXjFtNA0',
  },
});
