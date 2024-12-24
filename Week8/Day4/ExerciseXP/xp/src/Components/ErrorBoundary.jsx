import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false,
            error: null,
            info: null
        };
    }

    static getDerivedStateFromError(error){
        return {hasError: true};
    }

    componentDidCatch(error, info){
        this.setState({...this.state, error: error, info: info});
    }

    render(){
        if(this.state.hasError){
            return (
                <div>
                    <h1>something went wrong</h1>
                </div>
            )
        }
        return this.props.children; 
    }
}

export default ErrorBoundary;