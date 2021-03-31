import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {loginActions} from '../redux/actions/mahasiswa.actions'

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const mahasiswa = useSelector(state => state.mahasiswa)
  console.log('mahasiswa dari store', mahasiswa);
  const [loginState, setLoginState] = useState({
    name: "",
    password: "",

  })

  const handleChange = (event) => {
    setLoginState({
      ...loginState,
      [event.target.name]: event.target.value,
    });
  };

  console.log(loginState);

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={(event) => {
        dispatch(loginActions(loginState, event, history));
      }}>
        <input
          type="text"
          name="name"
          value={loginState.name}
          placeholder="Masukan nama anda"
          onChange={(event) => handleChange(event)}
        />

        <input
          type="password"
          name="password"
          value={loginState.password}
          placeholder="Masukan password anda"
          onChange={(event) => handleChange(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
