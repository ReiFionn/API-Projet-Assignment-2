import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CakeIcon from "@mui/icons-material/Cake";
import PlaceIcon from "@mui/icons-material/Place";
import PopularityIcon from "@mui/icons-material/Whatshot";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import PersonIcon from "@mui/icons-material/Person";
import ActorRoles from "../actorRoles";


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

      <Typography variant="h6" component="p">
        Biography: { actor.biography || "Biography not available." }
      </Typography>

      <Paper component="ul" sx={{ ...root }}>
                <Chip icon={<CakeIcon />} label={`Born: ${actor.birthday || "Unknown"}`} />
                {actor.deathday && (
                    <Chip icon={<AccessTimeIcon />} label={`Died: ${actor.deathday}`} />
                )}
                <Chip
                    icon={<PlaceIcon />}
                    label={`Place of Birth: ${actor.place_of_birth || "Unknown"}`}
                />
                <Chip icon={<PopularityIcon />} label={`Popularity: ${actor.popularity.toFixed(1)}`} />
                <Chip label={`Department: ${actor.known_for_department || "N/A"}`} />
      </Paper>

      <Paper component="ul" sx={{ ...root }}>
                <li>
                    <Chip label="Also Known As" sx={{ ...chip }} color="primary" />
                </li>
                {actor.also_known_as && actor.also_known_as.length > 0 ? (
                    actor.also_known_as.map((aka, index) => (
                        <li key={index}>
                            <Chip label={aka} sx={{ ...chip }} />
                        </li>
                    ))
                ) : (
                    <Chip label="No alternative names" sx={{ ...chip }} />
                )}
      </Paper>

      <Fab
          color="secondary"
          variant="extended"
          onClick={() => setDrawerOpen(true)}
          sx={{
              position: 'fixed',
              bottom: '1em',
              right: '1em'
          }}
      >
          <PersonIcon />
          Known Roles
      </Fab>

      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <ActorRoles actorId={actor.id} />
      </Drawer>

      </>
  );
};
export default ActorDetails ;