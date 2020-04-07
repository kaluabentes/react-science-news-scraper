import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "templates/Layout";
import FilterForm from "components/FilterForm";
import PostsTable from "components/PostsTable";

import usePostsApi from "hooks/usePostsApi";
import useCategoriesApi from "hooks/useCategoriesApi";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  const [category, setCategory] = useState("life");
  const [{ posts, isLoading: isPostsLoading }, fetchPosts] = usePostsApi();
  const { categories, isLoading: isCategoriesLoading } = useCategoriesApi();

  const handleFilterChange = (value) => {
    setCategory(value.target.value);
  };

  const handleFilterSubmit = () => {
    fetchPosts(category);
  };

  return (
    <Layout title="ScienceNewsScraper">
      <Typography variant="h4" className={classes.title}>
        Posts
      </Typography>
      <FilterForm
        value={category}
        isLoading={isCategoriesLoading}
        categories={categories}
        onChange={handleFilterChange}
        onSubmit={handleFilterSubmit}
      />
      <PostsTable isLoading={isPostsLoading} posts={posts} />
    </Layout>
  );
}
