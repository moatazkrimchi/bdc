/** @format */

import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import ActionButton from "./Controls/ActionButton";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <ActionButton
            onClick={() => {
              setOpenPopup(false);
            }}>
            <CancelIcon color="error" />
          </ActionButton>
        </div>
      </DialogTitle>
      <DialogContent>{children} </DialogContent>
    </Dialog>
  );
}
