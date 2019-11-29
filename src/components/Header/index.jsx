import React, {Component} from "react";
// import img from './altitude-clouds-cold-daylight-417173.jpg';
import './Header.css';


class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <section className="header">
                        <div className="header-content container">
                            <h1 className="h1-header">Find Your Trail in Orlando</h1>
                            <p className="paragraph-header">
                                Browse our trail database and choose the one that's right for you</p>
                            <div className="button"><a href="#navigationfilter" className="linkbutton">Find trail</a></div>
                        </div>
                    </section>
                </header>
            </>
        )
    }

}

export default Header;