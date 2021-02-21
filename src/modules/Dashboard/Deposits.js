import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import EmailIcon from '@material-ui/icons/Email';
import SmsIcon from '@material-ui/icons/Sms';

var email = 21;
var sms = 343;

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title> Credit Balance</Title>
      
      <Typography component="p" variant="h6">
        <SmsIcon/>  {sms} SMS
      </Typography>
      <Typography component="p" variant="h6">
        <EmailIcon/> {email} Emails
      </Typography>
      <div>
        <Link color="primary" href="#"  >
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}