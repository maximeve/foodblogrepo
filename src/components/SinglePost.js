import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const BlockContent = require("@sanity/block-content-to-react");

function SinglePost() {
  const [postData, setPostData] = useState(null);
  const [authorID, setAuthorID] = React.useState(null);
  const [authorData, setAuthorData] = React.useState([]);
  const params = useParams();

  useEffect(() => {
    (async function () {
      await sanityClient
        .fetch(
          `*[_type == "post" && title match '${params.slug}']{
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
        .then((data) => setPostData(data))
        .catch(console.error);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      await sanityClient
        .fetch(
          `*[_type == "author"]{
                name,
                _id,
                "imageUrl": image.asset->url
              }`
        )
        .then((data) => setAuthorData(data))
        .catch(console.error);
    })();
  }, []);

  useEffect(() => {
    var x = authorData.map((e) => e._id === postData[0].author._ref);
    var y = x.findIndex((e) => e === true);
    setAuthorID(authorData[y]);
  }, [authorData]);

  const loadedPost = (
    <Container maxWidth="lg">
      {postData === null ? (
        ""
      ) : (
        <>
          <h1>{postData[0].title}</h1>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              aria-label="author"
              src={authorID ? authorID.imageUrl : ""}
            ></Avatar>
            <h3 style={{ paddingLeft: "10px"}}>{authorID ? authorID.name : ""}</h3>
          </Box>
          <img src={postData[0].mainImage.asset.url} width="100%" />
          <BlockContent blocks={postData[0].body} />
        </>
      )}
    </Container>
  );

  const LoadingPost = (
    <Container maxWidth="lg">
      {postData === null ? (
        ""
      ) : (
        <>
          <h1>{postData[0].title}</h1>
          <Avatar aria-label="author" src=""></Avatar>
          <h3>Loading</h3>
          <img src="" width="100%" />
          <BlockContent />
        </>
      )}
    </Container>
  );

  return (
    <>{postData !== null && authorID !== null ? loadedPost : LoadingPost}</>
  );
}

export default SinglePost;
