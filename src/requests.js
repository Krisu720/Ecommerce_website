import axios from "axios";

// const BASE_URL = "http://localhost:3001/api/";
const BASE_URL = "http://192.168.100.67:3001/api/";
export let userData;
let USER_TOKEN;
if(localStorage.key(0)!==null) {
    userData = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    USER_TOKEN = `Baerer ${userData.currentUser !== null ? userData.currentUser.accessToken : null}`
}


console.log(USER_TOKEN)
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: USER_TOKEN },
});
