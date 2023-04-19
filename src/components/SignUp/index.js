import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
// import jwt from "jsonwebtoken";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

import axios from "axios";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./index.css";

const initialValues = {
  fullName: "",
  dept: "DRS",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/./, "fullname is required")
    .required("fullname is required"),
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`[\]{}|\\:;"',./<>?])(?!.*\s).{8,}$/,
      "password contains one (uppercase,lowercase,digit)"
    )
    .required("password must contains 8 characters"),
  // department: Yup.object().required("Please select an option"),
});

// const options = [
//   { label: "DRS", id: 1 },
//   { label: "MarketPlace", id: 2 },
//   { label: "Sustainability", id: 3 },
// ];

const theme = createTheme();

// function createToken(payload) {
//   const secretKey = "mySecretKey"; // Replace this with your own secret key
//   const token = jwt.sign(payload, secretKey);
//   return token;
// }

export default function SignUp() {
  // const [age, setAge] = useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };

  // const payload = { username: "john", isAdmin: true };
  // const token = createToken(payload);
  // console.log(token);

  const handleSubmit = (values, { resetForm }) => {
    console.log("CHOCO11", values);
    // console.log("Clicked");
    axios
      .post("http://192.168.1.85:8095/api/signup", values)
      .then((res) => {
        toast.success(res.data, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        window.location.href = "/login";
      })
      .catch((res) => {
        toast.error(res.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    resetForm();
  };

  const toastMethod = () => (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );

  return (
    <div className="signup-container">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Box noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        autoComplete="given-name"
                        name="fullName"
                        required
                        fullWidth
                        id="firstName"
                        label="Full Name"
                        autoFocus
                      />
                      <div className="error">
                        <ErrorMessage name="fullName" />
                      </div>
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                      <div className="error">
                        <ErrorMessage name="email" />
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                      <div className="error">
                        <ErrorMessage name="password" />
                      </div>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-start">
                    <Grid item>
                      <Link to="/login" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            </Formik>
          </Box>
        </Container>
      </ThemeProvider>
      {toastMethod()}
    </div>
  );
}
