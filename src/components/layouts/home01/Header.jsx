import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import links from '../links';
import menus from '../menus';
import bloglinks from '../bloglinks';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <header id="header" className="header header-style1">
                <div className="container">
                    <div className="flex-header d-flex justify-content-between align-items-center">
                        <div className="socials-list-hd s1 hv1">
                            <Link to={{pathname: "https://www.youtube.com/@ilavas19"}} target="_blank">
                                <i className="fa fa-youtube" aria-hidden="true"/>
                            </Link>
                            <Link to={{pathname: "https://x.com/MindfulLava"}} target="_blank">
                                <i className="fa fa-twitter" aria-hidden="true"/>
                            </Link>
                            <Link to={{pathname: "https://www.instagram.com/_lava_95999/"}} target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true"/>
                            </Link>
                        </div>
                        <div className="content-menu d-lg-flex">
                            <div className="nav-wrap">
                                <nav id="mainnav" className="mainnav">
                                    <ul className="menu ace-responsive-menu" data-menu-style="horizontal">
                                        <li><Link to="/" className="active">Home</Link>
                                            <ul className="sub-menu">
                                                {
                                                    links.map(data => (
                                                        <li key={data.id}>
                                                            <Link to={data.tolink} onClick={() => {
                                                                window.location.href = data.tolink
                                                            }} className={data.id === 1 ? "active" : ""}>
                                                                {data.namelink}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                        {
                                            menus.map(menu => (
                                                <li key={menu.id}><Link to={menu.tomenu}
                                                                        className="click-model">{menu.namemenu}</Link>
                                                </li>
                                            ))
                                        }
                                        <li><Link to="#">Blog</Link>
                                            <ul className="sub-menu">
                                                {
                                                    bloglinks.map(data => (
                                                        <li key={data.id}>
                                                            <Link to={data.toblog} onClick={() => {
                                                                window.location.href = data.toblog
                                                            }}>
                                                                {data.nameblog}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="hire-me-s1 btn-general btn-hv-common d-lg-flex align-items-center">
                                <Link to={{pathname: "https://topmate.io/lavanyaa_santhosh"}} target="_blank"
                                      className="btn-inner border-corner2 lt-sp08 text-white">Talk To Me</Link>
                            </div>
                        </div>
                        <div dir="rtl" className="btn-menu mobile-header__menu-button">
                            <div className="line line-1"/>
                            <div className="line line-2"/>
                            <div className="line line-3"/>
                            <div className="line line-4"/>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
