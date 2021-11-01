import React from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import CardComponent from "../components/CardComponent";
import Typography from "@mui/material/Typography";

function Favorites() {
  const favoriteItems = useSelector((state) => state.account.favoritePosts);

  console.log(favoriteItems);

  const Favorites = (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
    >
      {favoriteItems.map((post) => (
        <Grid item xs={12} md={4} sm={12}>
          <CardComponent
            key={post.title}
            title={post.title}
            slug={post.slug}
            author={post.author}
            image={post.image}
            body={post.body}
          />
        </Grid>
      ))}
    </Grid>
  );

  const NoFavorites = (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
    >
      <Grid item xs={12} md={4} sm={12}>
        <Typography component="h1" variant="h5">
          No favorite posts saved
        </Typography>
      </Grid>
    </Grid>
  );

  return (
    <>{favoriteItems ? Favorites : NoFavorites}</>
  );
}

export default Favorites;
