import React from "react";
import AuthService from "../utils/AuthService";
import { useForm } from "@mantine/form";
import {
  Stack,
  Flex,
  Image,
  TextInput,
  PasswordInput,
  Button,
} from "@mantine/core";
import { IconMail, IconLock } from "@tabler/icons-react";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import { PATHS } from "../utils/Variables";



export default function LoginForm() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const submitLoginForm = (data) => {
  
    AuthService.login(data.email, data.password).then(
        () => {
            notifications.show({
                
                message: 'Welcome back! We are glad to see you again.',
                color: 'green',
            });
            navigate(PATHS.app);
        },
        error => {
            const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

            notifications.show({
                title: 'Error',
                message: resMessage,
                color: 'red',
              })
        }
    );
  };

  return (
    <Flex
      align={{ md: "center", sm: "start" }}
      justify={{ md: "center", sm: "start" }}
      h="100%"
      w="100%"
      direction="column"
      mx="auto"
      maw="300px"
      py={{ base: "md", md: "0" }}
    >
      <Image maw="80%" mx="auto" src="/logo.png" alt="Logo" />
      <form
        onSubmit={form.onSubmit((values) => {
          submitLoginForm(values);
        })}
      >
        <Stack mt={20}>
          <TextInput
            placeholder="Email"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
            icon={<IconMail size="1rem" />}
          />
          <PasswordInput
            placeholder="Password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Passwords must be at least 6 characters"
            }
            radius="md"
            icon={<IconLock size="1rem" />}
          />
          <Button type="submit" radius="md" color="yellow">
            Login
          </Button>
        </Stack>
      </form>
    </Flex>
  );
}
