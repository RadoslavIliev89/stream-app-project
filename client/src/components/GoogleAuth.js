import { Component } from 'react';

import { connect } from 'react-redux';
import { signIn, signOut } from './action';

class GoogleAuth extends Component {
   
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '787320682785-42suj23hsej67oe89ncat4o4l1ecrqd1.apps.googleusercontent.com',
                scope: 'email'
            })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange)
                })
        })
    };
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();

        }
    }

    onButtonClick = () => {
        if (this.props.isSignedIn) {
            return this.auth.signOut();
        }
        return this.auth.signIn();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onButtonClick}>
                    <i className="google icon" />
                        Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui green google button" onClick={this.onButtonClick}>
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

};

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);