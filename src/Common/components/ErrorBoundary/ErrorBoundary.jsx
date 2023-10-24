import React from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      // github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md
      // Error path
      return (
        <BaseLayout>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <h2>Something went wrong. Please refresh page</h2>
            <br />
            <details style={{ whiteSpace: "pre-wrap", width: 100 }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        </BaseLayout>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
