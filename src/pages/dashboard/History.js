
import {
  Center,
  Title,
  Stack,
  Text,
  Paper,
  Grid,

  Group,
  Loader,

} from "@mantine/core";
import { ErrorBox } from "../../components/ErrorIcon";
import { JobsListItemSkeleton } from "../../components/Skeletons";
import useHistoryList from "../../hooks/useHistoryList";
import { motion, AnimatePresence } from "framer-motion";

export default function History() {
  //, error, isFetching
  const { status, data, isFetching } = useHistoryList();

  return (
    <AnimatePresence>
      <Stack
        component={motion.div}
        animate={status === "success" ? "open" : "closed"}
      >
        <Group spacing="xs">
          <Title px="md" py="xl" order={1} fw={400}>
            Your Jobs History
          </Title>
          {isFetching && <Loader color="orange" size="sm" variant="dots" />}
        </Group>

        {status === "loading" ? (
          <Grid p="md">
            <BuildSkeletons count={3} />
          </Grid>
        ) : status === "error" ? (
          <ErrorBox />
        ) : (
          <Grid p="md">
            <BuildItems data={data} />
          </Grid>
        )}
      </Stack>
    </AnimatePresence>
  );
}

function BuildSkeletons({ count }) {
  let tempArray = new Array(count).fill("");
  return tempArray.map((item, index) => <JobsListItemSkeleton key={index} />);
}

function BuildItems({ data }) {
  if (data.length === 0) return <NoMessages />;
  return data.map((item, index) => <JobItem data={item} key={index} />);
}

function JobItem({ data }) {
  return (
    <Grid.Col sm={6} md={6} lg={4}>
      
        <Paper
          p="md"
          shadow="md"
          w="100%"
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Stack align="flex-start" w="100%">
            <Title order={4} color="gray.9" fw={500}>
              {data?.title || "Unknown"}
            </Title>
            <Grid w="100%">
              <Grid.Col md={6} sm={12}>
                <Group spacing="xs">
                  <Title order={6} className="primaryBlue">
                    ID No:
                  </Title>
                  <Text fz="sm" color="gray.6">
                    {data?.id || "?"}
                  </Text>
                </Group>
              </Grid.Col>
              <Grid.Col md={6} sm={12}>
                <Group spacing="xs">
                  <Title order={6} className="primaryBlue">
                    Order No:
                  </Title>
                  <Text fz="sm" color="gray.6">
                    {data?.orderNumber || "?"}
                  </Text>
                </Group>
              </Grid.Col>
              <Grid.Col md={6} sm={12}>
                <Group spacing="xs">
                  <Title order={6} className="primaryBlue">
                    Req No:
                  </Title>
                  <Text fz="sm" color="gray.6">
                    {data?.reqNumber || "?"}
                  </Text>
                </Group>
              </Grid.Col>
              <Grid.Col md={6} sm={12}>
                <Group spacing="xs">
                  <Title order={6} className="primaryBlue">
                    Dnd Date:
                  </Title>
                  <Text fz="sm" color="gray.6">
                    {data?.endDate || "?"}
                  </Text>
                </Group>
              </Grid.Col>
            </Grid>
          </Stack>
        </Paper>
     
    </Grid.Col>
  );
}

function NoMessages() {
  return (
    <Center>
      <Text color="gray.6" size="md">
        You don't have any Job yet.
      </Text>
    </Center>
  );
}
