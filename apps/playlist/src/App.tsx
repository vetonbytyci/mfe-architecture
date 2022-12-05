import React from "react";
import { AppShell } from "ui";

import { Playlist } from "playlist-content";
import { MoviesContent } from "movies-content";

// @ts-ignore
const MoviesContentRuntime = React.lazy(() => import("movies/Movies"));

class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
  },
  {
    hasError: boolean;
  }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <MoviesContent />;
    }

    return this.props.children;
  }
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
            element: () => (
              <ErrorBoundary>
                <MoviesContentRuntime />
              </ErrorBoundary>
            ),
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
