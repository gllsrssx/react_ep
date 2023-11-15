import React from 'react';

class ErrorPage extends React.Component {
    goBack = () => {
        if(this.props.setCurrentComponent) {
            this.props.setCurrentComponent('home');
        }
    }

    render() {
        return (
            <div>
                <h1>Error</h1>
                <p>Sorry, something went wrong.</p>
                <button onClick={this.goBack}>Go Back</button>
            </div>
        );
    }
}

export default ErrorPage;