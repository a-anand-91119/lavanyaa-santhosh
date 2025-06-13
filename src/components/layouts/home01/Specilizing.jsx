import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Design, NumberCount} from './specilizing/index';

class Specilizing extends Component {
    constructor(props){
        super(props);
        this.state = {
            design : [
                {
                    id: 1,
                    iconbox: 'iconbox-s1 d-sm-flex align-items-center',
                    iconcolor: 'iconbox-icon color1',
                    spanicon: 'icon-designer',
                    title: 'Relationship and Family Dynamics',
                    text01: "Enhancing relationships and resolving interpersonal conflicts.",
                    text02: 'I help couples and families strengthen their bonds through effective communication.'
                },
                {
                    id: 2,
                    iconbox: 'iconbox-s1 d-sm-flex justify-content-lg-center align-items-center mgl-iconbox-s1',
                    iconcolor: 'iconbox-icon color2 color1',
                    spanicon: 'icon-designer',
                    title: 'Trauma and PTSD Counseling',
                    text01: "Specializing in helping individuals recover from traumatic experiences.",
                    text02: 'I provide a safe and empathetic environment to process past trauma.'
                },
                {
                    id: 3,
                    iconbox: 'iconbox-s1 d-sm-flex justify-content-lg-end align-items-center mgr-iconbox-s1',
                    iconcolor: 'iconbox-icon color3',
                    spanicon: 'icon-brand',
                    title: 'Addiction Recovery Support',
                    text01: "Guiding individuals to overcome substance and behavioral addictions.",
                    text02: 'I use evidence-based methods to address the root causes of addiction.'
                }
            ]
        }
    }
    render() {
        return (
            <div className="section slide-personal-Intro-third slide-dark bg-white">
                <section className="specilizing-in s1" id="services">
                    <div className="container">
                        <div className="flat-title">
                            <h2 className="title-section color-d12 animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">I am Specialized in</h2>
                        </div>
                        <div className="row position-relative z-index1">
                            {
                                this.state.design.map(data => (
                                    <Design key={data.id} data={data}/>
                                ))
                            }
                            <div className="flat-spacer" data-desktop="0" data-mobile="0" data-smobile="0"></div>
                            <div className="fact">
                                {/*<NumberCount />*/}
                                <div className="btn-contact bg-s1 text-center">
                                    <h5 className="title color-d12">Something troubling you? Let’s talk.</h5>
                                    {/*<Link to={{pathname: "https://topmate.io/lavanyaa_santhosh"}} target="_blank" className="email color-s1 color-d14">Get Free Exploratory Session</Link>*/}
                                    <Link to={{pathname: "https://topmate.io/lavanyaa_santhosh"}} target="_blank" className="email color-s1 color-d14">Get Free Exploratory Session</Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="featured-post animate-element wow delay5 fadeInRight" data-wow-delay="0.5s">
                        <img src="images/section/09.png" alt="images" />
                    </div>
                </section>
            </div>
        );
    }
}

export default Specilizing;
