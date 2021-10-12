import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import sanityClient from "../client";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CardComponent(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [authors, setAuthors] = React.useState([]);
  const [author, setAuthor] = React.useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            _id
          }`
      )
      .then((data) => setAuthors(data))
      .catch(console.error);
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let x = authors.filter((e) => {
    return e._id === props.author;
  });

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        // title={author}
        // subheader="September 14, 2016"
      />
      <Link to={`/${props.slug.current}`}>
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt={props.title}
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.body}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CardComponent;
