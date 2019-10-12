import React from 'react';
import {NavLink} from "react-router-dom";
import './Splash.css';
import {Col, Row} from "antd";

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
                    MEng Joint Maths & Computing 2020 Graduate
                </h4>
                <h4>
                    Imperial College London
                </h4>
            </Row>
            <Row className='row' style={{width: '90%'}}>
            </Row>
            <Row>
                <Col xs={12}>
                    <NavLink to="/cv" className='link'>
                        CV
                    </NavLink>
                </Col>
                <Col xs={12}>
                    <NavLink to="/projects" className='link'>
                        Projects
                    </NavLink>
                </Col>
            </Row>
        </div>
    </div>
);