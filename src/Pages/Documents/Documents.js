/** @format */

import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import DocumentForm from "./DocumentForm";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import { Paper, TableBody, TableCell, TableRow, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useTable from "../../components/useTable";
import * as DocumentSelect from "../../components/Controls/DocumentSelect";
import Buttons from "../../components/Controls/Buttons";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Popup from "../../components/Popup";
import ActionButton from "../../components/Controls/ActionButton";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
const numberFormat = (value) => new Intl.NumberFormat("de-DE").format(value);
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));

const headCells = [
  { id: "Radical", label: "Radical" },
  { id: "BanquePopulaire", label: "Banque Populaire" },
  { id: "Montant", label: "Montant (en MAD)" },
  { id: "Taux", label: "Taux" },
  { id: "Duree", label: "Durée" },
  { id: "DateE", label: "Date d'émission" },
  { id: "DateP", label: "Date de paiement" },
  { id: "TempsR", label: "Temps restant" },
  { id: "Statut", label: "Statut" },
  { id: "actions", label: "" },
];

export default function Documents() {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(DocumentSelect.getAllDocument());
  const { TblHead, TblContainer } = useTable(records, headCells);
  const [openPopup, setOpenPopup] = useState(false);

  const addOrEdit = (Document, resetForm) => {
    if (Document.id === 0) DocumentSelect.insertDocument(Document);
    else DocumentSelect.updateDocument(Document);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(DocumentSelect.getAllDocument());
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  return (
    <>
      <PageHeader
        title="Mes documents"
        subtitle="Vous pouvez ajouter et/ou modifier vos bons de caisse"
        icon={<AssignmentOutlinedIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <div className={classes.newButton}>
            <Buttons
              text="Ajouter Bon de Caisse"
              color="warning"
              startIcon={<AddCircleOutlineOutlinedIcon />}
              onClick={() => {
                setOpenPopup(true);
                setRecordForEdit(null);
              }}
            />
          </div>
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {records.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.Radical}</TableCell>
                <TableCell>{item.BanquePopulaire}</TableCell>
                <TableCell>{numberFormat(item.Montant)}</TableCell>
                <TableCell>{item.Taux}%</TableCell>
                <TableCell>{item.Duree} mois</TableCell>
                <TableCell>{item.DateE}</TableCell>
                <TableCell>{item.DateP}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <ActionButton>
                    <ModeEditOutlineIcon
                      color="primary"
                      fontSize="small"
                      onClick={() => {
                        openInPopup(item);
                      }}
                    />
                  </ActionButton>
                  <ActionButton>
                    <DeleteIcon color="error" fontSize="small" />
                  </ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
      </Paper>
      <Popup
        title="Formulaire du bon de caisse"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}>
        <DocumentForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
}
