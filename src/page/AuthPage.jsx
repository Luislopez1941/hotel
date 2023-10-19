import React from "react";
import { useLocation } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import RegistrationForm from "../components/auth/RegistrationForm";
import PasswordResetVerifyForm from "../components/auth/PasswordResetVerifyForm";
import PasswordResetForm from "../components/auth/PasswordResetForm";

function AuthPage() {
  const location = useLocation();
  const currentPathname = location.pathname;

  if (currentPathname === "/login") {
    return <LoginForm />;
  } else if (currentPathname === "/registration") {
    return <RegistrationForm />;
  } else if (currentPathname === "/password-reset-account-verify") {
    return <PasswordResetVerifyForm />;
  } else if (currentPathname === "/password-reset") {
    return <PasswordResetForm />;
  } else {
    return <div>Página no encontrada</div>;
  }
}

export default AuthPage;
