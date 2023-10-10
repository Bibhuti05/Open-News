import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import NewsCard from "./newscard";
import { useState, useRef, useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function NewsBoard({ data }) {
  const windowWidth = window.innerWidth;
  if (windowWidth < 600) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {data.map((item) => {
          return <NewsCard newsitem={item} key={item.id} sx={{ m: 3 }} />;
        })}
      </Box>
    );
  }
  console.log(windowWidth);
  return (
    <Box sx={{ width: "100%", padding: 10 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((item) => {
          return (
            <Grid item xs={6}>
              <NewsCard newsitem={item} key={item.id} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
