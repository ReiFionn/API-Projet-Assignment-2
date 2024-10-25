import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getActorRoles } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default function ActorRoles({ actor }) {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getActorRoles(actor.id).then((roles) => {
      setRoles(roles);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="roles table">
        <TableHead>
          <TableRow>
            <TableCell >Title</TableCell>
            <TableCell align="center">Character</TableCell>
            <TableCell align="center">Release Date</TableCell>
            <TableCell align="center">Overview</TableCell>
            <TableCell align="right">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((r) => (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.title || r.original_title || "Unknown"}
              </TableCell>
              <TableCell align="center">{r.character || "N/A"}</TableCell>
              <TableCell align="center">{r.release_date || "Unknown"}</TableCell>
              <TableCell align="center">{excerpt(r.overview)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}