/** @format */

import React from "react";
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import banquePrivee from '../images/bPrivee.png'
import logo from '../images/logo-gbp.svg'

export default function Header() {
  return (
    <AppBar
      position="static"
      style={{ transform: "translateZ(0)", backgroundColor: "#fff" }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
          <img className='LogoBanquePrivee' src={banquePrivee} alt="" style={{width:"150px", lenght:"150px"}}/>
          <img className='logo' src={logo} alt="" style={{width:"200px", lenght:"200px"}}/>
          </Grid>
          <Grid item sm></Grid>
          <Grid item alignItems="center">
            <IconButton>
              <LogoutIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
