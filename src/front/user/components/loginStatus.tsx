import * as React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {doLogout} from '../actions'

class LoginStatus extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout(e) {
        e.preventDefault();
        this.props.doLogout();
    }

    render() {
        const data = this.props.User.toObject();

        if (data.id == 1) var link = <Link to="/user">Login</Link>;
        else var link = <a onClick={this.logout} href="#">Logout</a>;

        return (
            <p className="text-right">Logged in as: <b>{data.userName}</b> ({link})</p>
        )
    }
}

const mapStateToProps = (state) => {
    const User = state.getIn(["User", "user"]);
    return {User};
};
/*
const mapDispatchToProps = (dispatch) => {
  return {
    doLogin:(credentials) => dispatch(doLogin(credentials))
  }
}
*/

const mapDispatchToProps = {doLogout};

var VisibleLoginStatus = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginStatus);

export default VisibleLoginStatus;