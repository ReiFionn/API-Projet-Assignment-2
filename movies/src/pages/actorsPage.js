import React from "react";
import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoriteActorsIcon from '../components/cardIcons/addToFavoriteActors';

const ActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('actors', getActors);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favoriteActors = actors.filter(a => a.favorite)
  localStorage.setItem('favoriteActors', JSON.stringify(favoriteActors))
  const addToFavoriteActors = (actorId) => true 

  return (
    <PageTemplate
      title="Discover Actors"
      actors={actors}
      action={(actor) => {
        return <AddToFavoriteActorsIcon actor={actor} />
      }}
    />
);
};
export default ActorsPage;