import React from 'react';
import {NavLink} from "react-router-dom";
import './Splash.css';
import {Col, Icon, Row} from "antd";

export const Splash = () => (
    <div style={{width: "100%", height:'100%', paddingTop: "40vh"}}>
        <div className='content'>
            <Row className='row'>
                <h1>
                    Marcel Kenlay
                </h1>
            </Row>
            <Row className='row' style={{width: '80%'}}>
                <h3>
                    Software Engineer
                </h3>
            </Row>
            <Row className='row' style={{width: '90%'}}>
                <h4>
                    Imperial 2020 Graduate | MEng Joint Maths & Computing
                </h4>
                <h4>
                    Software Engineer @ Bloomberg London
                </h4>
            </Row>
            <Row className='row' style={{width: '90%'}}>
            </Row>
            <Row>
                <Col xs={12} md={8} className='linkHolder'>
                    <NavLink to="cv" className='link'>
                        CV
                    </NavLink>
                </Col>
                <Col xs={12} md={8} className='linkHolder'>
                    <NavLink to="projects" className='link'>
                        Projects
                    </NavLink>
                </Col>
                <Col xs={24} md={8} className='linkHolder'>
                    <a href="https://www.linkedin.com/in/marcel-kenlay/" className='link'>
                        <Icon type="linkedin"/>
                    </a>
                </Col>
            </Row>
        </div>
    </div>
);