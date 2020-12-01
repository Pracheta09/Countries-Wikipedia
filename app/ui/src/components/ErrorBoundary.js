import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null
    };
  }


  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error: error,
      info: info
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops, something went wrong :(</h1>
          <p><b>The error: </b>{this.state.error.toString()}</p>
          <p><b>Where it occured: </b>{this.state.info.componentStack}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary
