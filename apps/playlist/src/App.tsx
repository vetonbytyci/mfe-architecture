import React from "react";
import { AppShell } from "ui";

import { Playlist } from "playlist-content";
import { MoviesContent } from "movies-content";
import ErrorBoundary from "error-boundary";

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
const MoviesContentRuntime = React.lazy(() => import("movies/Movies"));

function MoviesContentRoute() {
  return (
    <ErrorBoundary fallBackComponent={<MoviesContent />}>
      <MoviesContentRuntime />
    </ErrorBoundary>
  );
}

function App() {
  return (
    <div className="App">
      <AppShell
        title="Playlist"
        colorScheme="dark"
        routes={[
          {
            path: "/",
            element: MoviesContentRoute,
          },
          {
            path: "/playlist",
            element: Playlist,
          },
        ]}
        navLinks={[
          {
            label: "Home",
            path: "/",
          },
          {
            label: "Playlist",
            path: "/playlist",
          },
        ]}
      />
    </div>
  );
}

export default App;
