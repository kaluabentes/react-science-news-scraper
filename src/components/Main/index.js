import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";

import styles from "./styles.module.css";

const PROP_TYPES = {
  children: PropTypes.node.isRequired,
};

export default function Main({ children }) {
  return (
    <main className={styles.main}>
      <Container>{children}</Container>
    </main>
  );
}

Main.propTypes = PROP_TYPES;
