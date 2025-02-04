import { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Alert,
  Collapse,
  Button,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import PageHeader from "./PageHeader";

const EmailForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [alertOpen, setAlertOpen] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_k5vm28g",
          "template_q6gs7ol",
          form.current,
          "ZUtwaqWrDeK1o7cNB"
        )
        .then(
          () => {
            setAlertOpen(true);
            setTimeout(() => {
              setAlertOpen(false);
            }, 3000);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <Box padding={2}>
      <Collapse in={alertOpen}>
        <Alert
          severity="success"
          onClose={() => setAlertOpen(false)}
          sx={{ marginBottom: "5px" }}
        >
          Email sent successfully!
        </Alert>
      </Collapse>
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <PageHeader title="Contact Me" />
        <TextField
          label="Name"
          name="user_name"
          variant="outlined"
          required
          InputProps={{
            style: { borderRadius: "12px" },
          }}
        />
        <TextField
          label="Email"
          name="user_email"
          type="email"
          variant="outlined"
          required
          InputProps={{
            style: { borderRadius: "12px" },
          }}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          variant="outlined"
          required
          InputProps={{
            style: { borderRadius: "12px" },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ borderRadius: "12px" }}
        >
          <Typography textTransform="lowercase">send</Typography>
        </Button>
      </form>
    </Box>
  );
};

export default EmailForm;
