import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "templates/Layout";
import FilterForm from "components/FilterForm";
import PostsTable from "components/PostsTable";

import CategoriesService from "services/CategoriesService";
import PostsService from "services/PostsService";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  const [category, setCategory] = useState("life");
  const [categories, setCategories] = useState([]);
  const [isCategoriesLoading, setCategoriesLoading] = useState(false);
  const [isPostsLoading, setPostsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchPosts();
  }, [fetchPosts, fetchCategories]);

  const fetchCategories = async () => {
    setCategoriesLoading(true);

    try {
      const { data } = await CategoriesService.fetchAll();

      setCategories(data);
      setCategoriesLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPosts = async () => {
    setPostsLoading(true);

    try {
      const { data } = await PostsService.fetchAll(category);

      setPosts(data);
      setPostsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterChange = (value) => {
    setCategory(value.target.value);
  };

  const handleFilterSubmit = () => {
    fetchPosts();
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
