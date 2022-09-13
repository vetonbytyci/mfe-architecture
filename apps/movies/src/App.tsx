import React from 'react';
import { AppShell } from "ui";
import MoviesContent from './MoviesContent';


function App() {
  return (
    <div className="App">
      <AppShell title="Movies" routes={[
        {
          path: "/",
          element: MoviesContent,
        },
        {
          path: "/playlist",
          element: () => <div>Playlist</div>,
        }
      ]}
        navLinks={[
          {
            label: "Home",
            path: "/",
          },
          {
            label: "Playlist",
            path: "/playlist",
          }
        ]} 
      />
    </div>
  );
}

export default App;
