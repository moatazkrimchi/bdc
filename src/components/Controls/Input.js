/** @format */

import { TextField } from "@mui/material";
import React from "react";

export default function Input(props) {
  const { name, label, value, onChange,error=null, type } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && {error:true, helperText:error})}
      type={type}
    />
  );
}
