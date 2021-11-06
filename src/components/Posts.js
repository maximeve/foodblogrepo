import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import sanityClient from "../client";
import CardComponent from "./CardComponent";
import { useSelector } from "react-redux";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchArray, setSearchArray] = useState(null);
  const searchedItem = useSelector((state) => state.account.search);

  useEffect(() => {
    (async function () {
      await sanityClient
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
        .then((data) => {
          setPosts(data);
          console.log(posts);
        })
        .catch(console.error);
    })();
  }, []);

  useEffect(() => {
    if (searchedItem.length > 0 ){
      let result = posts.findIndex((e) => e.title === searchedItem);
      if(result !== -1){
        setSearchArray([posts[result]]);
      }
    } else {
      setSearchArray(null)
    } 
  }, [searchedItem]);

  return (
    <>
      {searchArray === null ? (
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
        >
          {posts.map((post) => (
            <Grid item xs={12} md={4} sm={12}>
              <CardComponent
                key={post.title}
                title={post.title}
                slug={post.slug}
                author={post.author._ref}
                image={post.mainImage.asset.url}
                body={post.body}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
        >
          {searchArray.map((post) => (
            <Grid item xs={12} md={4} sm={12}>
              <CardComponent
                key={post.title}
                title={post.title}
                slug={post.slug}
                author={post.author._ref}
                image={post.mainImage.asset.url}
                body={post.body}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default Posts;
