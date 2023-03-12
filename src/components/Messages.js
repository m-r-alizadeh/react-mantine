import {
  Image,
  Title,
  Stack,
  Center,
  Text,
  Paper,
  Grid,
} from "@mantine/core";
import useMessages from "../hooks/useMessages";
import {ErrorIcon} from "./ErrorIcon";
import { MessageSkeleton } from "./Skeletons";

export default function Messages() {
  //, error, isFetching
  const { status, data } = useMessages();

  return (
    <Stack w="80%" pt="lg">
      <Center>
        <Text fz="xs" color="white">
          Recent Messages
        </Text>
      </Center>

      {status === "loading" ? (
        <MessageSkeleton />
      ) : status === "error" ? (
        <ErrorIcon />
      ) : (
        <BuildItems data={data} />
      )}
    </Stack>
  );
}

function BuildItems({ data }) {
  if (data.length === 0) return <NoMessages />;
  return data.map((item, index) => <MessageItem data={item} key={index} />);
}

function MessageItem({ data }) {
  return (
    <Grid justify="flex-start" gap="md">
      <Grid.Col span="content">
        <Image
          width={60}
          height={60}
          src={data?.image || null}
          alt="Avatar"
          radius="50%"
          fit="cover"
          withPlaceholder
        />
      </Grid.Col>
      <Grid.Col span="auto">
        <Paper p="xs" shadow="sm" className="arrow_box">
          <Stack spacing={1}>
            <Title order={6} color="blue.9">
              {data?.title || "Unknown"}
            </Title>
            <Text fz="xs" color="gray.7" lh={1.3}>
              {data?.text || "Unknown"}
            </Text>
          </Stack>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}

function NoMessages() {
  return (
    <Center>
      <Text color="gray.6" size="md">You don't have any messages</Text>
    </Center>
  );
}