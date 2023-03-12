import {
  Flex,
  Image,
  ActionIcon,
  Group,
  MediaQuery,
  Drawer,
  Indicator,
} from "@mantine/core";
import { IconLogout, IconMessage } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import DashAside from "./DashAside";
import useMessages from "../../hooks/useMessages";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/Variables";

export default function DashHeader() {
  const [opened, { open, close }] = useDisclosure(false);
  const { status, data } = useMessages();
  const navigate = useNavigate();

  return (
    <>
      <Flex align={{ md: "center" }} justify="space-between">
        <Image
          height="40"
          width="auto"
          src="/logo.png"
          alt="Logo"
          fit="contain"
        />
        <Group spacing="xs">
          <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <Indicator
              color="yellow"
              inline
              disabled={
                status === "loading" || status === "error" ? true : false
              }
              label={
                status === "loading" || status === "error" ? "0" : data.length
              }
              size={16}
            >
              <ActionIcon variant="default" size={30} onClick={open}>
                <IconMessage color="gray" size={18} />
              </ActionIcon>
            </Indicator>
          </MediaQuery>
          <ActionIcon
            variant="default"
            size={30}
            onClick={() => {
              navigate(PATHS.logout);
            }}
          >
            <IconLogout color="gray" size={18} />
          </ActionIcon>
        </Group>
      </Flex>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        className="primaryBlueBg"
      >
        <DashAside />
      </Drawer>
    </>
  );
}
