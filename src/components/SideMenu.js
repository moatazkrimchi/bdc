/** @format */

import React from "react";
import { makeStyles } from "@mui/styles";

const styles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "200px",
    height: "100%",
    backgroundColor: "#e37830",
  },
});

export default function SideMenu() {
  const classes = styles();
  return (
    <styles>
      <div className={classes.sideMenu}></div>
    </styles>
  );
}
