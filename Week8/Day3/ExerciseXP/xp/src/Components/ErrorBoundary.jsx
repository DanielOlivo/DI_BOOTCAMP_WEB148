import React, {useState, useEffect} from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        hasError: false ,
        error: '',
        errorInfo: ''
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({hasError: this.state.hasError, error: error, errorInfo: info});
    // console.log('boundary', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
            </details>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;