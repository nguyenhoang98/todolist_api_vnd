import axios from "axios";

function handleAxios(url, method, data) {
  return axios({
    url: url,
    method: method,
    data: data,
  });
}
export default handleAxios;
