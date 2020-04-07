import React from "react";
import PropTypes from "prop-types";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";

const PROP_TYPES = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  isLoading: PropTypes.bool,
};

const DEFAULT_PROPS = {
  posts: [],
  isLoading: false,
};

export default function PostsTable({ posts, isLoading }) {
  return (
    <TableContainer component={Paper}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Table aria-label="posts">
          <TableBody>
            {posts.map((post) => (
              <TableRow>
                <TableCell>
                  <a href={post.url} target="_blank" rel="noopender noreferrer">
                    <Typography>{post.title}</Typography>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}

PostsTable.propTypes = PROP_TYPES;
PostsTable.defaultProps = DEFAULT_PROPS;
