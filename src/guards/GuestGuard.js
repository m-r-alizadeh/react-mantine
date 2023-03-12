import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { PATHS } from "../utils/Variables";

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default function GuestGuard({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return <Navigate to={PATHS.app} />;
  } else {
    return <>{children}</>;
  }
}
