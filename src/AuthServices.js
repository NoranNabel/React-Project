// import axios from "axios"

// const URL = "http://localhost:3000";

// class AuthService {
//     login(email, password) {
//         return axios.post(URL + "/login", {
//             email,
//             password
//         })
//             .then((res) => {
//                 if (res.data.accessToken) {
//                     localStorage.setItem("userToken", JSON.stringify(res.data))
//                 }
//                 return res.data;
//             })
//     }
//     logout() {
//         localStorage.removeItem("userToken");
//     }
//     signup(userName,email,password,address) {
//         return axios.post(URL + "/signup", {
//             userName,email,password,address
//         });
//     }
//     getCurrentUser() {
//         return JSON.parse(localStorage.getItem("user"));
//     }
// }

// export default new AuthService();

import axios from "axios";

const API_URL = "http://localhost:3001";
class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("userToken", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("userToken");
  }
  
  signup(name, email, password) {
    return axios.post(API_URL + "/users", {
      //   username,
      name,
      email,
      password,
      //   address
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("userToken"));
  }
}
export default new AuthService();
