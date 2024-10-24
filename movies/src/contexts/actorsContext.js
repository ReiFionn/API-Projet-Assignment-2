import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )

  const addToFavoriteActors = (actor) => {
    let newFavorites = [];
    if (!favorites.includes(actor.id)){
      newFavorites = [...favorites, actor.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  console.log(favorites)
  
  const removeFromFavoriteActors = (actor) => {
    setFavorites( favorites.filter(
      (mId) => mId !== actor.id
    ) )
  };

  return (
    <ActorsContext.Provider
      value={{
        favorites,
        addToFavoriteActors,
        removeFromFavoriteActors,
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;