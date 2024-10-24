import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import FaceIcon from "@mui/icons-material/Face";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {  // Don't miss this!
    const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Actor Information
      </Typography>

      <Typography variant="h6" component="p">
        Name: {actor.name}
      </Typography>

      <Paper component="ul" sx={{ ...root }}>
        <Chip
          icon={<StarRate />}
          label={`Popularity: ${actor.popularity}`}
          sx={{ ...chip }}
        />
        <Chip label={`Gender: ${actor.gender === 1 ? "Female" : "Male"}`} sx={{ ...chip }} />
        <Chip
          label={`Known For: ${actor.known_for_department}`}
          sx={{ ...chip }}
          icon={<FaceIcon />}
        />
      </Paper>

      </>
  );
};
export default ActorDetails ;