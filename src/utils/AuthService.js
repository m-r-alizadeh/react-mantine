import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}/auth`;
const token = {
  accessToken: "sdkpjty098e4ytehtgiewhgipudsy084yispdhgsdhgpsoeiyh",
  expires_at: "2023-03-07T13:42:02.044Z",
  Username: "JavaInUse",
};

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL, {
        username,
        password,
      })
      .then((response) => {
        //console.log(response)
        localStorage.setItem("user", JSON.stringify(token));
        //! if (response.data.accessToken) {
        //!   localStorage.setItem("user", JSON.stringify(response.data));
        //!  }

        return response.data;
      });
  }

  logout() {
    // console.log("logout")

    //document.location = "/";
    return new Promise(function (resolve, reject) {
      localStorage.removeItem("user");
      setTimeout(() => resolve("done"), 1000);
    });
  }

  // register(username, email, password) {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password
  //   });
  // }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
const AuthServices = new AuthService();
export default AuthServices;
