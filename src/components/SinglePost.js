import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
const BlockContent = require('@sanity/block-content-to-react');

function SinglePost() {
    const [postData,setPostData] = useState(null)
    const params = useParams()

    useEffect(async() => {
        await sanityClient.fetch(
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
      }, []);

      console.log(postData)

    return (
        <Container maxWidth="lg">
        { postData === null ? '' : <>
        <h1>{postData[0].title}</h1>
        <img src={postData[0].mainImage.asset.url} width="100%"/>
        <BlockContent blocks={postData[0].body} /></>}
        </Container>
    )
}

export default SinglePost
