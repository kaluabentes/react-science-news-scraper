import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "templates/Layout";
import FilterForm from "components/FilterForm";

import CategoriesService from "services/CategoriesService";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  const [category, setCategory] = useState("Life");
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);

    try {
      const { data } = await CategoriesService.fetchAll();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterChange = (value) => {
    setCategory(value.target.value);
  };

  return (
    <Layout title="ScienceNewsScraper">
      <Typography variant="h4" className={classes.title}>
        Posts
      </Typography>
      <FilterForm
        value={category}
        isLoading={isLoading}
        categories={categories.map((c) => c.name)}
        onChange={handleFilterChange}
      />
    </Layout>
  );
}
