import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded';
import CropOriginalRoundedIcon from '@material-ui/icons/CropOriginalRounded';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import PageviewOutlinedIcon from '@material-ui/icons/PageviewOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { Card, CardActions, CardContent, RadioGroup, ButtonGroup } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Controller } from "react-hook-form";
import ReactHookFormDatePicker from '../../components/sharedComponents/ReactHookFormDatePicker';
import ReactHookFormSelect from '../../components/sharedComponents/ReactHookFormSelect';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));




function getSteps() {
  return ['SELECT', 'CONFIGURE', 'SETTINGS', 'MESSAGE', 'CREATE'];
}

function getStepContent(stepIndex, register, control) {


  switch (stepIndex) {
    case 0:
      return (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <label className="form-label mb-1" for="name">Type the campaign name</label><br />
            <TextField inputRef={register} variant="outlined" name="name" fullWidth className="bg-white mb-2" />
          </Grid>
          <Grid item xs={6}>
            <label className="form-label mb-1" for="name">Campaign time to launch</label><br />
            <ReactHookFormDatePicker name="time" control={control} />
          </Grid>
          <Grid item xs={6}>
            <label className="form-label mb-1" for="fname">Type</label><br />
            <ReactHookFormSelect
              name="type"
              control={control}
              variant="outlined"
              defaultValue={""}
              fullWidth
            >
              <MenuItem value={10}>Broadcast Campaing</MenuItem>
              <MenuItem value={20}>Trigger Campaing</MenuItem>
            </ReactHookFormSelect>
          </Grid>
          <Grid item xs={6}>
            <label className="form-label mb-1" for="fname">Select an event you want to trigger</label><br />
            <ReactHookFormSelect
              name="event"
              control={control}
              variant="outlined"
              defaultValue={""}
              fullWidth
            >
              <MenuItem value={10}>Christmas wish</MenuItem>
              <MenuItem value={20}>Promotions on tuesday</MenuItem>
              <MenuItem value={30}>Sales on New Year</MenuItem>
            </ReactHookFormSelect>
          </Grid>
        </Grid>
      );
    case 1:
      return (
        <Grid container xs={12} spacing={2}>
          <Grid item xs={6}>
            <label className="form-label mb-1" for="fname">Select the customers</label><br />
            <ReactHookFormSelect
              name="customers"
              control={control}
              variant="outlined"
              defaultValue={""}
              fullWidth
            >
              <MenuItem value={10}>All the customers</MenuItem>
              <MenuItem value={20}>Filter the customers</MenuItem>
              <MenuItem value={30}>Import the customers through CSV file/Excel file</MenuItem>
            </ReactHookFormSelect>
          </Grid>
          <Grid item xs={6}>
          <label className="form-label mb-1" for="fname">Select the tag</label><br />
            <ReactHookFormSelect
              name="event"
              control={control}
              variant="outlined"
              defaultValue={""}
              fullWidth
            >
              <MenuItem value={10}>Below_21</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
              <MenuItem value={30}>Married</MenuItem>
              <MenuItem value={30}>Mobile</MenuItem>
              <MenuItem value={30}>Broadband</MenuItem>
            </ReactHookFormSelect>
          </Grid>
          </Grid>

      );
    case 2:
      return (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <label className="form-label mb-1" for="fname">Select the Channel Type</label><br />
            <ReactHookFormSelect
              name="channelType"
              control={control}
              variant="outlined"
              defaultValue={""}
              fullWidth
            >
              <MenuItem value="SMS">SMS</MenuItem>
              <MenuItem value="Email">Email</MenuItem>
            </ReactHookFormSelect>
          </Grid>
          <Grid item xs={6}>
            <label className="form-label mb-1" for="fname">Sender ID</label><br />
            <ReactHookFormSelect
              name="senderId"
              control={control}
              variant="outlined"
              defaultValue={""}
              fullWidth
            >
              <MenuItem value={10}>DialogBB</MenuItem>
              <MenuItem value={20}>DialogBills</MenuItem>
              <MenuItem value={30}>Dialog-Star-Points</MenuItem>
            </ReactHookFormSelect>
          </Grid>
        </Grid>
      );

    case 3:
      return (
        <Grid container xs={12} >
          <Grid item xs={12}>
            <label className="form-label mb-1" for="name">Start creating the message here...</label><br />
            <TextField inputRef={register} variant="outlined" name="message" multiline rows={4} fullWidth className="bg-white mb-2" />
          </Grid>
          <Grid item xs={12}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button
                variant="contained"
                color="primary"
                //className={classes.button}
                startIcon={<SentimentSatisfiedRoundedIcon />}
              >
                Emoji
              </Button>
              <Button
                variant="contained"
                color="primary"
                //className={classes.button}
                startIcon={<CropOriginalRoundedIcon />}
              >
                Template
      </Button>
              <Button
                variant="contained"
                color="primary"
                //className={classes.button}
                startIcon={<BackspaceOutlinedIcon />}
              >
                CLEAR
      </Button>
              <Button
                variant="contained"
                color="primary"
                //className={classes.button}
                startIcon={<PageviewOutlinedIcon />}
              >
                View Sample
      </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      );


    case 4:
      return (
          <Grid container xs={12} >
            <Typography gutterBottom>
              Campaign Name
      </Typography>
            <Typography gutterBottom>
              Channel
      </Typography>
            <Typography gutterBottom>
              SenderID
      </Typography>
            <Typography gutterBottom>
              Selected customers
      </Typography>
            <Typography gutterBottom>
              Launch on
      </Typography>
          </Grid>
      );
   // default:
   //   return 'Unknown step';
  }

}
export default function HorizontalLabelPositionBelowStepper() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const { register, control } = useForm()


  return (
    <div className={classes.root}>
      <h4>Create Camapign</h4>
      <Card>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <CardContent>
          <form>
            {getStepContent(activeStep, register, control)}
          </form>
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="outlined"
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}
          >
            Back
              </Button>
          <Button color="primary" variant="contained" onClick={handleNext} endIcon={activeStep === steps.length - 1 ? <SendOutlinedIcon /> : null}>
            {activeStep === steps.length - 1 ? 'Send' : 'Next'}
        
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
