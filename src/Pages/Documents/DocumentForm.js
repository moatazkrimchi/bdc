/** @format */
import Buttons from "../../components/Controls/Buttons";
import { Grid } from "@mui/material";
import { UseForm, Form } from "../../components/UseForm";
import Input from "../../components/Controls/Input";
import RadioButton from "../../components/Controls/RadioButton";
import Select from "../../components/Controls/Select";
import DatePicker from "../../components/Controls/DatePicker";
import * as DocumentSelect from "../../components/Controls/DocumentSelect";
import { useEffect } from "react";

const initialFValues = {
  id: 0,
  DateP: new Date(),
  DateE: new Date(),
  BanquePopulaire: "",
  Radical: "",
  Montant: "",
  Ordre: "Anonyme",
  Duree: "",
  Taux: "",
};

export default function DocumentForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = () => {
    let temp = {};
    temp.Radical =
      values.Radical.length === 7
        ? ""
        : "le radical est composé de 7 caractères.";
    temp.BanquePopulaire =
      values.BanquePopulaire.length !== 0 ? "" : "Ce champ est obligatoire.";
    temp.Duree = values.Duree.length !== 0 ? "" : "Ce champ est obligatoire.";
    temp.Ordre = values.Ordre ? "" : "Ce champ est obligatoire.";
    temp.Montant =
      values.Montant >= 500000
        ? ""
        : "Le montant est un nombre supérieur ou égal à 500.000 Dh.";
    temp.Taux = values.Taux ? "" : "Ce champ est obligatoire.";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };
  const { values, handleInputChange, errors, setErrors, setValues, resetForm } =
    UseForm(initialFValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Input
            name="Radical"
            label="Radical"
            value={values.Radical}
            onChange={handleInputChange}
            type="number"
            error={errors.Radical}
          />
          <Select
            name="BanquePopulaire"
            label="Banque Populaire"
            value={values.BanquePopulaire}
            onChange={handleInputChange}
            options={DocumentSelect.getBP()}
            error={errors.BanquePopulaire}
          />
          <Input
            name="Montant"
            label="Montant (en Dirham)"
            value={values.Montant}
            onChange={handleInputChange}
            type="number"
            error={errors.Montant}
          />
          <Input
            name="Taux"
            label="Taux (%)"
            value={values.Taux}
            onChange={handleInputChange}
            type="number"
            error={errors.Taux}
          />
        </Grid>
        <Grid item xs={6}>
          <RadioButton
            formLabel="Ordre"
            name="Ordre"
            value={values.Ordre}
            onChange={handleInputChange}
          />
          <DatePicker
            name="DateE"
            label="Date d'émission"
            value={values.DateE}
            onChange={handleInputChange}
          />
          <Select
            name="Duree"
            label="Durée d'épargne"
            value={values.Duree}
            onChange={handleInputChange}
            options={DocumentSelect.getDuree()}
            error={errors.Duree}
          />
          <DatePicker
            name="DateP"
            label="Date de paiment"
            value={values.DateP}
            onChange={handleInputChange}
            minDate={values.DateE}
          />
        </Grid>
      </Grid>
      <Buttons type="submit" text="Envoyer" color="warning" />
      <Buttons text="Annuler" color="inherit" onClick={resetForm} />
    </Form>
  );
}
