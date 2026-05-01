import React from "react";
class ErrorBoundary extends React.Component{

    constructor(props){
        super(props);
        this.state ={hasError: false};
    }

    static getDerivedStateFromError(){
        return {hasError: true};

    }

    componentDidCatch(error, info){
        console.log("Error:", error);
        console.log("Error info:", info);
    }

    render(){

        // if(this.state.hasError){
        //     return <h2>Something went wrong. This is Error Boundary</h2>;
        // }

        if (this.state.hasError) {
  return (
    <div>
    <h2>This is Error Boundary</h2>
      <h2>Oops! Something went wrong.</h2>
      <button onClick={() => window.location.reload()}>
        Reload Page
      </button>
    </div>
  );
}

        return this.props.children;
    }
}

export default ErrorBoundary;