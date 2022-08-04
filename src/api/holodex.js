import axios from "axios";

export default axios.create({
  baseURL: 'https://holodex.net/api/v2',
  headers: {
    Authorization: 
      'Bearer 982128ac-62e7-4f40-ba0c-dddb35119f1b'
  }
});

