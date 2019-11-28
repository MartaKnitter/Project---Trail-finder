import React, {Component} from "react";
import './navigation.css';
import logo from './logo.png';

class Navigation extends Component {
    render() {
        return (
            <>
                <section className="banner-background">
                    <nav className="navigation-bar container">
                        <img src={logo} className="logo" alt="" />
                        <ul className="menu-list">
                            <li className="navigation-item"><a href="/" className="link">About us</a></li>
                            <li className="navigation-item"><a href="/" className="link">Find your trail</a></li>
                            <li className="navigation-item"><a href="/" className="link">Contact</a></li>
                        </ul>
                    </nav>
                </section>
            </>
        )
    }

}

export default Navigation;