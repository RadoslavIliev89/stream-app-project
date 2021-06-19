import { Component } from 'react';

class GoogleAuth extends Component {
    state = { isSignedIn: null }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '787320682785-42suj23hsej67oe89ncat4o4l1ecrqd1.apps.googleusercontent.com',
                scope: 'email'
            })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                    this.auth.isSignedIn.listen(this.onAuthChange)
                })
        })
    };
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    onButtonClick = () => {
        if (this.state.isSignedIn) {
           return this.auth.signOut();
        }
        return this.auth.signIn();
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onButtonClick }>
                    <i className="google icon" />
                        Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui green google button" onClick={this.onButtonClick }>
                    <i className="google icon" />
                    Sign In
                </button>
            );
        }
    }


    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }

}
export default GoogleAuth;