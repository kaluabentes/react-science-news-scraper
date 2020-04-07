import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles.module.css";

const PROP_TYPES = {
  categories: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
};

const DEFAULT_PROPS = {
  categories: [],
  value: "",
  onSubmit: () => {},
  onChange: () => {},
  isLoading: false,
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: theme.spacing(2),
    minWidth: 120,
  },
}));

export default function FilterForm({
  value,
  categories,
  onChange,
  onSubmit,
  isLoading,
}) {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="categoriesSelect">Category</InputLabel>
            <Select
              labelId="categoriesSelect"
              value={value}
              onChange={onChange}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button onClick={onSubmit} variant="contained" color="primary">
            Filtrar
          </Button>
        </>
      )}
    </div>
  );
}

FilterForm.propTypes = PROP_TYPES;
FilterForm.defaultProps = DEFAULT_PROPS;
