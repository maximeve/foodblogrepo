import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import sanityClient from "../client";
import CardComponent from "./CardComponent";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            author,
            body,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}>
        {posts.map((post) => 
          <Grid item xs={12} md={4} sm={12}>
            <CardComponent key={post.title} title={post.title} slug={post.slug} author={post.author._ref} image={post.mainImage.asset.url} body={post.body[0].children[0].text}/>
          </Grid>
        )}
      </Grid>
  );
}

export default Posts;
