import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Box } from "@mui/material";

export default function NewsCard({ newsitem }) {
  if (newsitem) {
    var pic = "";
    try {
      if (newsitem.media[0]["media-metadata"][1].url) {
        pic = newsitem.media[0]["media-metadata"][1].url;
      } else {
        throw new Error("img not found");
      }
    } catch (error) {
      pic = "";
    }

    return (
      <Card sx={{ maxWidth: 345, borderRadius: 3, m: 1 }}>
        <CardMedia sx={{ height: 140 }} image={pic} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {newsitem.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {newsitem.abstract}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <Card sx={{ maxWidth: 345, width: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
