import React, { useState } from 'react';
import CustomButton from '../../components/sharedComponents/CustomButton';
import { useForm } from 'react-hook-form'
import { Avatar, Grid, Icon, Typography } from '@material-ui/core'
import IconTextField from '../../components/sharedComponents/IconTextField'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock'
import { Link } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import EmailIcon from '@material-ui/icons/Email';
import firebase from "../../config/firebaseConfig"


const schema = yup.object().shape({
  email: yup.string().email('Email must be a valid email').required('Required'),
  password: yup.string().required('Required').min(6, 'Password must be at least 6 characters long'),
  retypePassword: yup
  .string()
  .oneOf([yup.ref('password'), null, ''], 'Passwords must match')
  .required('Required')
});

export default function Signup() {

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const authSubmitHandler = async data => {
    try {
      const authUser = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
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
              <Avatar style={{ width: 80, height: 80, backgroundColor: '#e77448' }}>
                <LockOutlinedIcon style={{ fontSize: '3rem' }} />
              </Avatar>
            </Grid>
          </Grid>
          <Grid item container xs={12} justify="center" className="p-2">
            <Grid item>
              <Typography variant="h5" color="textSecondary">Sign Up</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {/* {errorMsg && <Alert severity="error">{errorMsg}</Alert>} */}
          </Grid>
          <Grid item xs={12}> 
            
            <Grid item xs ={12}>
              <IconTextField
                label="First Name*"
                inputRef={register}
                icon={<AccountCircleIcon />}
                name="firstname"
                error={errors.name}
                helperText={errors.name?.message}
              />
            </Grid>
           
            <Grid item xs={12}>
              <IconTextField
                label="Last Name*"
                inputRef={register}
                icon={<AccountCircleIcon />}
                name="lastname"
                error={errors.name}
                helperText={errors.name?.message}
              />
            </Grid> 
          </Grid>
          <Grid item xs={12}>
            <IconTextField
              label="Email*"
              inputRef={register}
              icon={<EmailIcon />}
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
          <Grid item xs={12}>
            <IconTextField
              label="Comfirm Password*"
              inputRef={register()}
              type="password"
              icon={<LockIcon />}
              name="retypePassword"
              error={errors.retypePassword}
              helperText={errors.retypePassword?.message}
            />
          </Grid>
          <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
              />I have read and I agree with the <a href ="/terms">terms and conditions</a>
            </Grid>
          <Grid item container xs={12} justify="center">
            <Grid item xs={12}>
              <CustomButton label="Sign Up" type="submit" variant="contained" fullWidth />
            </Grid>
          </Grid>
          <Grid container justify="center">
          <Grid item>
                <a href ="/Login">Already have an account? Log in</a>          
            </Grid>
          </Grid>
        </form>
      
      </div>
    </>
  )
}