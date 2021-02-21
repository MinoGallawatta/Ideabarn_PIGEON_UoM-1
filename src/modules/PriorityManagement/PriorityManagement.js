import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import Paper from '@material-ui/core/Paper';
import "./PriorityManagement.scss"
import { Avatar, Grid, Icon, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Title from './Title';
import { palette, spacing, typography } from '@material-ui/system';

function change(index, priorityList, setPriorityList, up=true) {
  const array = [...priorityList]
  if(up) {
    array[index] = array.splice(index-1, 1, array[index])[0];
  } else {
    array[index] = array.splice(index+1, 1, array[index])[0];

  }
  setPriorityList(array)
}

function PriorityManagement() {
  const initList = [
    {title:"Priority Management", name: "Christmas Campaign"},
    {title:"Priority Management 2", name: "Christmas Campaign"},
    {title:"Priority Management 3", name: "Christmas Campaign"},
  ]
  const [priorityList, setPriorityList] = useState(initList)
  return (
    <div >
      {priorityList.map((item, index) => <div>
        <Title>{item.title}</Title>
        <Grid item container xs={12} justify="center" spacing="2" >
          <Grid item xs={8}>
            <Paper className="one">{item.name} <Typography></Typography></Paper>
          </Grid>
          <Grid item xs={4} className="one">
            {index !== priorityList.length - 1 && <Button onClick={() => change(index, priorityList, setPriorityList, false)} variant="contained" color="primary" className="mr-2" ><KeyboardArrowDownIcon /></Button>}
            {index !== 0 && <Button onClick={() => change(index, priorityList, setPriorityList, true)} variant="contained" color="primary" ><KeyboardArrowUpIcon /> </Button>}
          </Grid>

        </Grid>
      </div>)}
    </div>
  );
}

export default PriorityManagement;