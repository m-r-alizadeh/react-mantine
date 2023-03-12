import { useNavigate } from "react-router-dom";
import { Center, Stack, Loader, Text } from "@mantine/core";
import { PATHS } from "../utils/Variables";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(PATHS.app);
  });

  return (
    <Center h="100%">
      <Stack
        align="center"
        component={motion.div}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Loader color="gray" />
        <Text color="gray.6">Redirecting...</Text>
      </Stack>
    </Center>
  );
}
