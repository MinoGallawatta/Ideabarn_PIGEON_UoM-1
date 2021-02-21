import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, tag, status, reach) {
  return { id, date, name, tag, status, reach };
}

const rows = [
  createData(
    0,
    "16 Mar, 2020",
    "Christmas Wish",
    "christmas, employee, customer",
    "Completed",
    300
  ),
  createData(
    1,
    "21 Sep, 2020",
    "New Year",
    "new year, employee",
    "Completed",
    600
  ),
  createData(
    2,
    "12 December, 2020",
    "Promotion",
    "Promo, customers",
    "Completed",
    800
  ),
  createData(
    3,
    "16 Jan, 2021",
    "Bonus Announcement",
    "bonus, employee",
    "Completed",
    1200
  ),
  createData(4, "23 Feb, 2021", "Salary", "salary, employee", "Pending", 1500),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Campaign</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Campaign Name</TableCell>
            <TableCell>Campaign Tag</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Reach</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.tag}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right">{row.reach}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="/Orders" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
