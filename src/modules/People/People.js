import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

function People() {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory()
  return (
    <React.Fragment>
      <h4>Add Contacts</h4>
      <div className="mb-2">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <label className="form-label mb-1" for="fname">First name:</label><br/>
          <TextField inputRef={register} variant="outlined" name="fname" fullWidth className="bg-white mb-2"/>
          <label className="form-label mb-1" for="lname">Last name:</label>
          <TextField inputRef={register} variant="outlined" name="lname" fullWidth className="bg-white mb-2"/>
          <label className="form-label mb-1" for="Email">E-mail:</label>
          <TextField inputRef={register} variant="outlined" name="email" fullWidth className="bg-white mb-2"/>
          <label className="form-label mb-1" for="Tags">Tags:</label>
          <TextField inputRef={register} variant="outlined" name="tags" fullWidth className="bg-white mb-2"/>
          <Button variant="contained" className="mr-2" color="primary" type="submit">Create</Button>
          <Button variant="contained" className="mr-2" color="primary" onClick={() => history.push('/CsvReading')} > Add Contacts in Bulk</Button>
          <Button variant="outlined" className="mr-2" color="primary">Cancel</Button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default People;