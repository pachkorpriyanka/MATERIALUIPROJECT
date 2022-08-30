import { Button, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Grid
        container
        style={{
          textAlign: "center",
          Width: "50px",
          height: "50px",
          backgroundColor: "White",
        }}
      >
        <Grid item xs={3}>
          <label> Arrival Date</label>
          <br />
          <input type="Date" />
        </Grid>

        <Grid item xs={3}>
          <label> Departure Date</label>
          <br />
          <input type="Date" />
        </Grid>
        <Grid item xs={3}>
          <label>person</label>
          <br />
          <input type="text" />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained">Book Now</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
