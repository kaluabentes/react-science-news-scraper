import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { AppBar, Typography, Toolbar } from "@material-ui/core";

import Main from "components/Main";

const PROP_TYPES = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const DEFAULT_PROPS = {
  title: "",
};

export default function Layout({ title, children }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
      <Main>{children}</Main>
    </>
  );
}

Layout.propTypes = PROP_TYPES;
Layout.defaultProps = DEFAULT_PROPS;
