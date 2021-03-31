import axios from "axios";
// constant
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";

// function dari const
export const setRegister = (data) => {
  return {
    type: REGISTER,
    payload: data,
  };
};

export const setLogin = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

//register
// isi dari functionnya
export const registerActions = (values, event, history) => (dispatch) => {
  event.preventDefault();
  console.log("register actions values", values);

  return axios
    .post("https://pertemuan30-jwt-auth.herokuapp.com/auth/register", values)
    .then((response) => {
      console.log("response dari server register", response);
      dispatch(setRegister(response.data.data));
      history.push("/login");
    })
    .catch((error) => {
      console.log(error);
    });
};

//login
// isi dari functionnya
export const loginActions = (values, event, history) => {
  return function(dispatch){
    event.preventDefault();

    console.log(values);
    console.log(event);
    console.log(history);

    axios.post('https://pertemuan30-jwt-auth.herokuapp.com/auth/login', values)
    .then((response) => {
      console.log("response login dari server", response);

      if(response.data.token !== undefined){
        localStorage.setItem('token', response.data.token);
        dispatch(setLogin(response.data.token));
        history.push('/')
      }else {
        alert("Password Anda Salah")
      }
    })
    .catch((error) => console.log(error));
  }
}

