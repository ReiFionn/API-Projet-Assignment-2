import React, { useState } from "react";
import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoriteActorsIcon from '../components/cardIcons/addToFavoriteActors';
import { Pagination } from "@mui/material";

const ActorsPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['actors', currentPage], () => getActors(currentPage));

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(data.total_results);

  // Redundant, but necessary to avoid app crashing.
  const favoriteActors = actors.filter(a => a.favorite)
  localStorage.setItem('favoriteActors', JSON.stringify(favoriteActors))
  const addToFavoriteActors = (actorId) => true 

  return (
    <>
      <PageTemplate
        title="Discover Actors"
        actors={actors}
        action={(actor) => {
          return <AddToFavoriteActorsIcon actor={actor} />
        }}
      />
      <Pagination
        style={{ marginTop: '25px', display: 'flex', justifyContent: 'center' }}
        count={totalPages}
        color="secondary"
        onChange={handlePageChange}
        page={currentPage}
        size="large"
      />
    </>
  );
};
export default ActorsPage;