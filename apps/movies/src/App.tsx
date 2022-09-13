import React from 'react';
import { AppShell } from "ui";
import './App.css';

function App() {
  return (
    <div className="App">
      <AppShell title="Movies" routes={[
        {
          path: "/",
          element: () => <div>Home</div>,
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
