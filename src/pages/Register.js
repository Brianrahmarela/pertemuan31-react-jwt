import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {registerActions} from '../redux/actions/mahasiswa.actions'

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state);
  console.log("is logged dari store", isLogged);

  const [register, setRegister] = useState({
    name: "",
    password: "",
  });
  console.log(register);

  const handleChange = (event) => {
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(event) => {
        dispatch(registerActions(register, event, history));
      }}>
        <input
          type="text"
          name="name"
          value={register.name}
          placeholder="Masukan nama anda"
          onChange={(event) => handleChange(event)}
        />

        <input
          type="password"
          name="password"
          value={register.password}
          placeholder="Masukan password anda"
          onChange={(event) => handleChange(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
