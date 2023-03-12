import { IconAlertCircle } from "@tabler/icons-react";
import { Alert } from "@mantine/core";

function ErrorIcon() {
  return <IconAlertCircle size={20} color="red" />;
}
function ErrorBox() {
  return (
    <Alert
      icon={<IconAlertCircle size="1rem" />}
      title="Data retrieval failed"
      color="red"
    >
      We're sorry, but we were unable to retrieve the data you requested from
      our server. Please check your internet connection and try again later. If
      the problem persists, please contact our support team for assistance.
    </Alert>
  );
}

export { ErrorIcon, ErrorBox };
