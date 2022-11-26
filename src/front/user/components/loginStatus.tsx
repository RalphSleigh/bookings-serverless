import * as React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {doLogout} from '../actions'

import { storageFactory } from "storage-factory";
//@ts-ignore
const local = storageFactory(() => localStorage);

class LoginStatus extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
        this.toggle_theme = this.toggle_theme.bind(this);
        this.get_theme = this.get_theme.bind(this);
    }

    logout(e) {
        e.preventDefault();
        this.props.doLogout();
    }

    toggle_theme(e) {
        //@ts-ignore
        const all_css = [...document.styleSheets]

        if(this.get_theme() === "light") {
            local.setItem("theme", "dark")
            all_css.filter(s => s.href && s.href.includes("light")).forEach(s => {
                s.disabled = true
                s.media="NOT_ALL"
            })
            all_css.filter(s => s.href && s.href.includes("dark")).forEach(s => {
                s.disabled = false
                s.media="ALL"
            })
        } else {
            local.setItem("theme", "light")
            all_css.filter(s => s.href && s.href.includes("light")).forEach(s => {
                s.disabled = false
                s.media="ALL"
            })
            all_css.filter(s => s.href && s.href.includes("dark")).forEach(s => {
                s.disabled = true
                s.media="NOT_ALL"
            })
        }
        this.forceUpdate()
        e.preventDefault();
    }

    get_theme(): string {
        const stored = local.getItem("theme")
        if(stored) return stored

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return "dark"
        }

        return "light"
    }

    render() {
        const data = this.props.User.toObject();

        if (data.id == 1) var link = <Link to="/user">Login</Link>;
        else var link = <a onClick={this.logout} href="#">Logout</a>;

        const theme_icon = this.get_theme() === "light" ? "☀️" : "🌙"

        return (
            <p className="text-right">Logged in as: <b>{data.userName}</b> ({link}) <span onClick={this.toggle_theme}>{theme_icon}</span></p>
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