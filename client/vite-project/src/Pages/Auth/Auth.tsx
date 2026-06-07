import { useForm, type SubmitHandler } from "react-hook-form";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { useAuthStore } from "../../store/authStore";

import styles from "./styles.module.scss";
import { logo_text } from "./content";

import logo from "../../assets/images/logo.png";

type Inputs = {
  username: string;
  password: string;
};

function Auth() {
  const login = useAuthStore((state) => state.login);
  const error = useAuthStore((state) => state.error);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await login(data);
  };

  return (
    <Box className={styles.auth_page_wrapper}>
      <Box component="div" className={styles.logo_headline}>
        <Box component="img" src={logo} width={"100%"}></Box>
        <Typography
          className={styles.misc_text}
          sx={{ fontSize: "24px", marginBottom: "1em" }}
        >
          {logo_text.logo_heading}
        </Typography>
        <Typography className={styles.misc_text} sx={{ fontSize: "20px" }}>
          {logo_text.logo_description}
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className={styles.auth_page_wrapper_form}
      >
        <Box className={styles.form_buttons}>
          <Button variant="text" className={styles.button}>
            Log in
          </Button>
          <Button variant="text" className={styles.button}>
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
            {...register("username", { required: true })}
          />
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
            {...register("password", { required: true })}
          />
          {error && (
            <Typography component="span" sx={{color: "red"}}>
              {error}
            </Typography>
          )}
          <Typography component="span" className={styles.misc_text}>
            {" "}
            Forgot your password?
          </Typography>
          <Button type="submit" className={styles.auth_button}>
            Log in
          </Button>
          <Divider>
            <Typography className={styles.misc_text}>
              Don't have an account?
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                {" "}
                Sign up
              </Typography>
            </Typography>
          </Divider>
        </Stack>
      </Box>
    </Box>
  );
}

export default Auth;
