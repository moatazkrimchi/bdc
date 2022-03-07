/** @format */

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

export default function RadioButton(props) {
  const { name, value, onChange, formLabel } = props;

  return (
    <>
      <FormControl>
        <Grid container>
          <Grid xs={2}>
            <FormLabel>{formLabel}</FormLabel>
          </Grid>
          <Grid>
            <RadioGroup row name={name} value={value} onChange={onChange}>
              <FormControlLabel
                value="Anonyme"
                control={<Radio />}
                label="Anonyme"
              />
              <FormControlLabel
                value="Au porteur"
                control={<Radio />}
                label="Au porteur"
              />
            </RadioGroup>
          </Grid>
        </Grid>
      </FormControl>
    </>
  );
}
