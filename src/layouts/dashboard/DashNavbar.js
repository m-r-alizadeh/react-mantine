import { useCallback } from "react";
import { useState } from "react";
import {
  Navbar,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  rem,
} from "@mantine/core";
import {
  IconHome2,
  IconCalendarTime,
  IconLogout,
  IconMail,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/Variables";

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.white,
    opacity: 0.85,

    "&:hover": {
      opacity: 1,
      backgroundColor: theme.fn.lighten(theme.colors.yellow[5], 0.1),
    },
  },

  active: {
    opacity: 1,
    "&, &:hover": {
      backgroundColor: theme.fn.lighten(theme.colors.yellow[5], 0.15),
    },
  },
}));

function NavbarLink({ icon: Icon, label, active, onClick }) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const navData = [
  { icon: IconHome2, label: "Home", path: PATHS.app },
  { icon: IconMail, label: "Messages", path: "" },
  { icon: IconCalendarTime, label: "History", path: PATHS.history },
  { icon: IconLogout, label: "Logout", path: PATHS.logout },
];

export default function DashNavbar() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const goToPage = useCallback(
    (path, index) => {
      //console.log(path);
      if (path !== "") {
        setActive(index);
        navigate(path);
      }
    },
    [navigate]
  );

  const links = navData.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => goToPage(link.path, index)}
    />
  ));

  return (
    <Navbar
      width={{ base: 80 }}
      p="md"
      sx={(theme) => ({
        backgroundColor: theme.colors.yellow[6],
      })}
    >
      <Navbar.Section>
        <Stack justify="center" spacing={4}>
          {links}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
