import { Flex, Image, Title, Stack, ScrollArea } from "@mantine/core";
import JobsStat from "../../components/JobsStat";
import Messages from "../../components/Messages";
import AuthService from "../../utils/AuthService";

export default function DashAside() {
  return (
    <Flex justify="start" direction="column" className="aside" h="100%">
      <ScrollArea h="100%">
        <Stack align="center" w="100%">
          <Image
            width={100}
            height={100}
            src={null}
            alt="Avatar"
            radius="50%"
            pt="md"
            withPlaceholder
          />
          <Title order={4} weight={500} color="white">
            Welcome {AuthService.getCurrentUser()?.Username || "?"}
          </Title>
          <JobsStat />
          <Messages grow />
        </Stack>
      </ScrollArea>
    </Flex>
  );
}
