import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";

import ToastAlert from "../../components/toast-alert/toast-alert";
import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks";
import { LoginPageState } from "../../types/redux";
import "./Login.css";

export default function Login() {
  const loginState: LoginPageState = useAppSelector(
    (state: RootState) => state.login
  );

  const navigate = useNavigate();

  // const handle = (event: any) => {
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case "email":
  //       setFormData({ ...formdata, email: value });

  //       setError({
  //         ...error,
  //         email: regexForEmail.test(value) ? "" : "Email is not valid",
  //       });
  //       break;
  //     case "password":
  //       setFormData({ ...formdata, password: value });
  //       setError({
  //         ...error,
  //         password: regForPassword.test(value) ? "" : "password is not valid",
  //       });
  //       break;
  //   }
  // };
  useEffect(() => {
    if (!loginState.loading && loginState.data && !loginState.error) {
      ToastAlert("Logged In", "success");
      navigate("/landing");
    } else if (!loginState.loading && !loginState.data && loginState.error) {
      ToastAlert(`${loginState.error}!!!`, "error");
    }
  }, [loginState]);

  return (
    <>
      {loginState.loading ? (
        <Loader />
      ) : (
        <div className="d-flex align-items-center auth px-0 mt-3 login">
          test
        </div>
      )}
    </>
  );
}
