import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import ActorsPage from "./pages/actorsPage";
import ActorDetailPage from "./pages/actorDetailsPage";
import ActorsContextProvider from "./contexts/actorsContext";
import FavoriteActorsPage from "./pages/favoriteActorsPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <ActorsContextProvider>
            <Routes>
              <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/movies/nowplaying" element={<NowPlayingMoviesPage />} />
              <Route path="/movies/mustwatch" element={<MustWatchMoviesPage />} />
              <Route path="/movies/toprated" element={<TopRatedMoviesPage />} />
              <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/actors" element={<ActorsPage />} />
              <Route path="/actors/favorites" element={<FavoriteActorsPage />} />
              <Route path="/actors/:id" element={<ActorDetailPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={ <Navigate to="/" /> } />
              <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            </Routes>
          </ActorsContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);