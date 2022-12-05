import { AppShell } from "ui";

import { MoviesContent } from "movies-content";
import { Playlist } from "playlist-content";

function App() {
  return (
    <div className="App">
      <AppShell
        title="Movies"
        routes={[
          {
            path: "/",
            element: MoviesContent,
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
