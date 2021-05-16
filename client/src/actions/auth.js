import { AUTH } from "../constants/actionTypes";

import * as api from "../api/index";

import Swal from "sweetalert2";

export const signin = (formData, history) => async (dispatch) => {
  try {
    //log in the user
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    Swal.fire({
      icon: "error",
      text: `${error.response.data.message}`,
      confirmButtonColor: "#3f51b5",
    });
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //sign up the user

    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (error) {
    Swal.fire({
      icon: "error",
      text: `${error.response.data.message}`,
      confirmButtonColor: "#3f51b5",
    });
    console.log(error);
  }
};
