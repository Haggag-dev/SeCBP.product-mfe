import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
});

class APIClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  get = () => axiosInstance.get(this.endpoint).then((res) => res.data);
}

export default APIClient;
