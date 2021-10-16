import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

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

  console.log(authorID);

  return (
    <Container maxWidth="lg">
      {postData === null ? (
        ""
      ) : (
        <>
          <h1>{postData[0].title}</h1>
          <Avatar
            aria-label="author"
            src={authorID ? authorID.imageUrl : ""}
          ></Avatar>
          <h3>{authorID ? authorID.name : ""}</h3>
          <img src={postData[0].mainImage.asset.url} width="100%" />
          <BlockContent blocks={postData[0].body} />
        </>
      )}
    </Container>
  );
}

export default SinglePost;
