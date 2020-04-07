import { useEffect, useState } from "react";

import PostsService from "services/PostsService";

export default function usePostsApi() {
  const [category, setCategory] = useState("life");
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const { data } = await PostsService.fetchAll(category);

        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [category]);

  return [{ posts, isLoading }, setCategory];
}
