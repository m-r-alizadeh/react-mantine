import { Grid, Paper, Stack, Text, Title, Skeleton } from "@mantine/core";
import useJobsStat from "../hooks/useJobsStat";
import {ErrorIcon} from "./ErrorIcon";



export default function JobsStat() {
  //, error, isFetching
  const { status, data } = useJobsStat();

  return (
    <Paper p="sm" w="80%" shadow="sm">
      <Grid>
        <Grid.Col span={6}>
          <Stack align="center" spacing="xs">
            <Text fz="xs" color="gray.8">Current Jobs</Text>
            {status === "loading" ? (
              <Skeleton height={26} width={26} />
            ) : status === "error" ? (
                <ErrorIcon/>
            ) : (
              <Title order={4} weight={500} className="primaryBlue">
                {data.current || "?"}
              </Title>
            )}
          </Stack>
        </Grid.Col>
        <Grid.Col span={6}>
          <Stack align="center" spacing="xs">
            <Text fz="xs" color="gray.8">All Time Jobs</Text>
            {status === "loading" ? (
              <Skeleton height={26} width={26} />
            ) : status === "error" ? (
                <ErrorIcon/>
            ) : (
              <Title order={4} weight={500} className="primaryBlue">
                {data.all || "?"}
              </Title>
            )}
          </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  );
}
