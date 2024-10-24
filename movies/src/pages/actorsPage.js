import React from "react";
import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const ActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('actors', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = actors.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavoriteActors = (actorId) => true 

  return (
    <PageTemplate
      title="Discover Actors"
      actors={actors}
      action={(actor) => {
        return <AddToFavoritesIcon actor={actor} />
      }}
    />
);
};
export default ActorsPage;