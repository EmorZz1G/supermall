import axios from "axios"


const axios8000 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000,
});

axios8000.interceptors.request.use((config) =>{
  console.log("intercept before requesting");
  return config;
},(err) =>{
  console.log("intercept before requesting err!!");
  return err;
});
axios8000.interceptors.response.use(res =>{
  console.log("intercept after");
  return res.data;
}, err =>{
  console.log("intercept err");
  return err;
});
export function request(config) {
  return axios8000(config);
}


export function axios2() {

}
