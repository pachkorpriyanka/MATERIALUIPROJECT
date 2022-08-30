import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
export const Navbar = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={9}></Grid>
        <Link to="/signin">Sign in</Link>
        <Grid item xs={1}>
          <Link to="/about">About</Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/contactus">Contact us</Link>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
};
