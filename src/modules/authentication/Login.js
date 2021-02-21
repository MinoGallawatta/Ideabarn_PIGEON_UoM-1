import React, { useState } from "react";

import CustomButton from "../../components/sharedComponents/CustomButton";
import { useForm } from "react-hook-form";
import { Avatar, Grid, Icon, Typography } from "@material-ui/core";
import IconTextField from "../../components/sharedComponents/IconTextField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import firebase from "../../config/firebaseConfig"
// import Alert from '@material-ui/lab/Alert';
const schema = yup.object().shape({
  email: yup.string().email("Email must be a valid email").required("Required"),
  password: yup
    .string()
    .required("Required")
    .min(6, "Password must be at least 6 characters long"),
});

const Login = () => {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const authSubmitHandler = async (data) => {
    try {
      const authUser = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
      
          if (authUser.user == null) {
              const err = { message: 'Login Failed' };
              throw err;
          } else {
              return authUser.user;
          }
      
    } catch (error) {
      console.log(error)
      
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <form onSubmit={handleSubmit(authSubmitHandler)}>
          <Grid item container xs={12} justify="center">
            <Grid item>
              <Avatar
                style={{ width: 80, height: 80, backgroundColor: "#e77448" }}
              >
                <PersonIcon style={{ fontSize: "3rem" }} />
              </Avatar>
            </Grid>
          </Grid>

          <Grid item container xs={12} justify="center" className="p-2">
            <Grid item>
              <Typography variant="h5" color="textSecondary">
                Login
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {/* {errorMsg && <Alert severity="error">{errorMsg}</Alert>} */}
          </Grid>
          <Grid item xs={12}>
            <IconTextField
              label="Email*"
              inputRef={register}
              icon={<AccountCircleIcon />}
              name="email"
              error={errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <IconTextField
              label="Password*"
              inputRef={register()}
              type="password"
              icon={<LockIcon />}
              name="password"
              error={errors.password}
              helperText={errors.password?.message}
            />
          </Grid>
          <Grid item container xs={12} justify="center">
            <Grid item xs={6}>
              <CustomButton
                label="Login"
                type="submit"
                variant="contained"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <CustomButton
                label="Sign Up"
                component={Link}
                to="/signup"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default Login;
