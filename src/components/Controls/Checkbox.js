/** @format */

import React from "react";
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";

export default function Checkbox(props) {
  const {error=null, name, label, value, onChange } = props;

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={onChange}
          />
        }
        label={label}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
