import React from "react";

class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
    fallBackComponent?: React.ReactNode;
  },
  {
    hasError: boolean;
  }
> {
  constructor(props: {
    children: React.ReactNode;
    fallBackComponent: React.ReactNode;
  }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    const { hasError } = this.state;
    const { children, fallBackComponent } = this.props;

    if (hasError) {
      return fallBackComponent;
    }

    return children;
  }
}

export default ErrorBoundary;
