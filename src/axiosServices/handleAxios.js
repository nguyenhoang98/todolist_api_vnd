import axios from "axios";

function handleAxios(url, method, data) {
  return axios.create({
    url: url,
    method: method,
    data: data,
  });
}

export default handleAxios;
