import AuthService from "../../utils/AuthService";
import { Center, Stack, Loader, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/Variables";

export default function Logout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  useEffect(() => {
    queryClient.removeQueries();
    AuthService.logout().then(() => {
      navigate(PATHS.login);
    });
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
