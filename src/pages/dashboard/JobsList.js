import { useCallback } from "react";
import {
  Center,
  Title,
  Stack,
  Text,
  Paper,
  Grid,
  Button,
  AspectRatio,
  Group,
  Loader,
} from "@mantine/core";
import { ErrorBox } from "../../components/ErrorIcon";
import { JobsListItemSkeleton } from "../../components/Skeletons";
import useJobsList from "../../hooks/useJobsList";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/Variables";

export default function JobsList() {
  //, error, isFetching
  const { status, data, isFetching } = useJobsList();
  const navigate = useNavigate();

  const navigateToDetail = useCallback(
    (id) => {
      navigate(`${PATHS.jobDetail}/${id}`);
    },
    [navigate]
  );

  return (
    <AnimatePresence>
      <Stack
        component={motion.div}
        animate={status === "success" ? "open" : "closed"}
      >
        <Group spacing="xs">
          <Title px="md" py="xl" order={1} fw={400}>
            Current Jobs
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
            <BuildItems data={data} navigateToDetail={navigateToDetail} />
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

function BuildItems({ data, navigateToDetail }) {
  if (data.length === 0) return <NoMessages />;
  return data.map((item, index) => (
    <JobItem data={item} key={index} navigateToDetail={navigateToDetail} />
  ));
}

function JobItem({ data, navigateToDetail }) {
  return (
    <Grid.Col sm={2} md={3} lg={4}>
      <AspectRatio ratio={20 / 15} mx="auto">
        <Paper
          p="lg"
          shadow="md"
          w="100%"
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Stack spacing={50} align="center">
            <Title order={4} color="gray.9" fw={500}>
              {data?.title || "Unknown"}
            </Title>
            <Button
              color="yellow.6"
              miw={150}
              onClick={() => {
                navigateToDetail(data?.id || 0);
              }}
            >
              View
            </Button>
          </Stack>
        </Paper>
      </AspectRatio>
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
