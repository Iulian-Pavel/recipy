import { useForm, type SubmitHandler } from "react-hook-form";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";

import styles from "./styles.module.scss";

import logo from "../../assets/images/logo.png";

type Inputs = {
  username: string;
  password: string;
};

function Auth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Box className={styles.auth_page_wrapper}>
      <Box component="img" src={logo} width={"50%"}></Box>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className={styles.auth_page_wrapper_form}
      >
        <Box className={styles.form_buttons}>
          <Button
            variant="text"
            className={styles.button}
          >
            Log in
          </Button>
          <Button
            variant="text"
            className={styles.button}
          >
            Sign up
          </Button>
        </Box>
        <Stack direction="column" spacing={5}>
          <TextField
            id="outline-required"
            label={
              <Box
                sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
              >
                <EmailIcon />
                <Typography component="span">
                  Enter your username or email
                </Typography>
              </Box>
            }
            placeholder="Enter your username or email"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <Typography component="span">Username is required</Typography>
          )}
          <TextField
            id="outline-required"
            label={
              <Box
                sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
              >
                <LockIcon />
                <Typography component="span">Enter your password</Typography>
              </Box>
            }
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <Typography component="span">Password is required</Typography>
          )}
          <Typography component="span" className={styles.misc_text}> Forgot your password?</Typography>
          <Button type="submit" className={styles.auth_button}>
            Log in
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Auth;
