import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { PATHS } from "../utils/Variables";

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return <>{children}</>;
  } else {
    return <Navigate to={PATHS.login} />;
  }
}
