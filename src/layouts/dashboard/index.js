import { Outlet } from "react-router-dom";
import { AppShell, Header, MediaQuery, Aside } from "@mantine/core";
import DashNavbar from "./DashNavbar";
import DashHeader from "./DashHeader";
import DashAside from "./DashAside";

export default function DashboardLayout() {
  return (
    <AppShell
      bg="gray.1"
      padding="xs"
      navbar={
        <DashNavbar width={{ base: 300 }} height={500} p="xs">
          {/* Navbar content */}
        </DashNavbar>
      }
      header={
        <Header height={60} p="xs">
          {<DashHeader />}
        </Header>
      }
      aside={
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <Aside hiddenBreakpoint="sm" width={{ sm: 300, lg: 400 }}>
            <DashAside />
          </Aside>
        </MediaQuery>
      }
    >
      <Outlet />
    </AppShell>
  );
}
