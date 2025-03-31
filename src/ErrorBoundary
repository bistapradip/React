import React from "react"; 

// Define the main App component
const App = () => {
  return (
    <div style={{ display: "flex" }}> {/* Use flexbox for layout */}
      <ErrorBoundary> {/* Wrap Card1 inside ErrorBoundary */}
        <Card1 />
      </ErrorBoundary>
      <Card2 /> {/* Card2 is outside ErrorBoundary */}
    </div>
  );
};

// Define the ErrorBoundary class component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; // Initialize state with hasError as false
  }

  static getDerivedStateFromError(error) {
    // This method is triggered when an error occurs in a child component
    // It updates the state so that the fallback UI is shown
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // This method logs the error details for debugging purposes
    console.error("Error Caught:", error, info);
  }

  render() {
    // If an error has occurred, show fallback UI
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    // Otherwise, render child components normally
    return this.props.children;
  }
}

// Define Card1 component
function Card1() {
  throw new Error("Error in Card1"); // This will cause an error in Card1
  return (
    <div
      style={{
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "row",
        padding: 10,
        margin: 10,
      }}
    >
      Hii thereee
    </div>
  );
}

// Define Card2 component
function Card2() {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "row",
        padding: 10,
        margin: 10,
      }}
    >
      Hii thereee
    </div>
  );
}

export default App; // Export the App component
