import { Skeleton, Stack, Paper, Grid, AspectRatio } from "@mantine/core";

function MessageSkeleton() {
  return (
    <Grid justify="flex-start" gap="md">
      <Grid.Col span="content">
        <Skeleton height={60} circle mb="xl" />
      </Grid.Col>
      <Grid.Col span="auto">
        <Paper p="xs" shadow="sm" className="arrow_box">
          <Stack spacing={1}>
            <Skeleton height={18} radius="xl" mb="xs" />
            <Skeleton height={28} radius="xl" />
          </Stack>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
function JobsListItemSkeleton() {
  return (
    <Grid.Col sm={2} md={3} lg={4}>
      <AspectRatio ratio={20 / 15} mx="auto">
        <Paper p="lg" shadow="md" w="100%">
          <Stack spacing={50} align="center">
            <Skeleton height={18} radius="xl" mb="xs" width={200} />
            <Skeleton height={28} radius="xl" width={150} bg="yellow.6" />
          </Stack>
        </Paper>
      </AspectRatio>
    </Grid.Col>
  );
}

export { MessageSkeleton, JobsListItemSkeleton };
