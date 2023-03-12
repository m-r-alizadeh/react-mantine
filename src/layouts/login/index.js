import { Outlet } from "react-router-dom";
import { Container } from "@mantine/core";
import "../../css/login.scss";

export default function LoginLayout() {
  return (
    <div className="login-layout">
      <Container size="md" px={0} h={"100%"}>
        <Outlet />
      </Container>
    </div>
  );
}
