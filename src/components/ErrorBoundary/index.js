import React from 'react';

class ErrorBoundary extends React.Component {
  constructor() {
      super();

      this.state = {
        hasError: false
      }
  }

  static getDerivedStateFromError(error) {
    // process the error
    return {
      hasError: true
    }
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
      if (this.hasError) {
          return <div>Something went wrong</div>
      }
      return this.props.children;
  }
}

export default ErrorBoundary;