import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import produce from 'immer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardActions, CardContent, Grid, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';

const Notes = props => props.data.map(note => <div style={{ width: '50%' }} className="btn btn-secondary m-1 p-3">{note.text}<br /></div>);

export default () => {
  const { register, handleSubmit } = useForm();
  const data = [{ text: 'hi' }, { text: 'this is test' }]

  return (
    <React.Fragment>
      <h4>Notes</h4>
      <form>
        <TextField
          id="outlined-multiline-flexible"
          placeholder="Add a new note"
          multiline
          inputRef={register}
          className="my-2"
          style={{ backgroundColor: 'white' }}
          fullWidth
          rows={4}
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">Add Note</Button>
      </form>
      <Grid container className="py-4" spacing={2}>
        {data.map(d => (
          <Grid item xs={4}>
            <Card>
              <CardContent>
                {d.text}
              </CardContent>
              <CardActions>
                <Button color="primary">Edit</Button>
                <Button color="primary">Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};