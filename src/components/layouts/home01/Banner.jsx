import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Banner extends Component {
    render() {
        return (
            <div className="section slide-personal-Intro-first">
                <section className="banner-section s1" id="home">
                    <div className="container">
                        <div className="content-text position-relative">
                            <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.3s">
                                <h1 className="cd-headline clip is-full-width title mg-b29 text-white">
                                    <span>Need </span>
                                    <span className="cd-words-wrapper color-d4">
                            <b className="is-visible">Help?</b>
                            <b>Healing?</b>
                            </span>
                                </h1>
                                <p className="lt-sp03 mg-b60 text-white">
                                    I’m Lavanyaa Santhosh, a compassionate and experienced psychologist dedicated to
                                    helping
                                    individuals,<br/>
                                    couples, and families overcome challenges and achieve emotional
                                    well-being.
                                </p>
                            </div>
                            <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <div className="fl-btn btn-general btn-hv-border">
                                    <Link to={{pathname: "https://topmate.io/lavanyaa_santhosh"}}
                                          className="border-corner5 f-w500 lt-sp095 text-white ">Book a Session</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Banner;

