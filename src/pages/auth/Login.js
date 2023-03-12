import { Grid, Flex, Image, Paper } from "@mantine/core";
import LoginForm from "../../components/LoginForm";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <Flex align="center" h="100%" w="100%" p="sm">
      <Paper
        shadow="lg"
        radius="md"
        mx="auto"
        w="100%"
        component={motion.div}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <Grid
          gutter={0}
          w="100%"
          align={{ md: "center", sm: "start" }}
          justify={{ md: "center", sm: "start" }}
          className="login-form"
        >
          <Grid.Col sm={12} md={7} lg={8}>
            <Image
              maw="100%"
              mx="auto"
              w="auto"
              src="/login-bg.jpg"
              alt="Random image"
              fit="cover"
            />
          </Grid.Col>

          <Grid.Col sm={12} md={5} lg={4}>
            <LoginForm />
          </Grid.Col>
        </Grid>
      </Paper>
    </Flex>
  );
}
