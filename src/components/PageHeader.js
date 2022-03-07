/** @format */

import { Card, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  pageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(3),
    backgroundColor: "#ffe8d9",
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#AE431E",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const { title, subtitle, icon } = props;
  return (
    <Paper elevation={0} square>
      <div className={classes.pageHeader}>
        <Card style={{ borderRadius: "12px" }}>
          <div className={classes.pageIcon}>{icon}</div>
        </Card>

        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subtitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
