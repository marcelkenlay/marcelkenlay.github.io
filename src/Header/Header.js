import * as React from 'react';
import {Menu} from "./Menu";
import {Col, Row, Typography} from "antd";

export function Header(props){
    return (
        <Row>
            <Col md={12} xs={0}>
                <Typography.Title style={{color: '#fff', fontSize: '32px', padding:'12px'}}>Marcel Kenlay </Typography.Title>
            </Col>
            <Col md={12} xs={24} style={{textAlign: 'right'}}>
                <Menu {...props}/>
            </Col>
        </Row>);
}