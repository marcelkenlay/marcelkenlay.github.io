import React from 'react';
import {Card, Col, Row, Tag, Typography} from "antd";
import {NavLink} from "react-router-dom";

export class ProjectCard extends React.Component {
     render() {
            const assets = require('./Resources/assets.js');
            return (
                <Card
                    style={{
                        width: 1200,
                        maxWidth: '100%',
                        margin: '2vh auto',
                        background: 'rgba(255, 255, 255, 0.9)'
                    }}
                >
                    <Row  type="flex" justify="center" align="middle" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} md={8}>
                            <div style={{alignItems:'centre'}}>
                                {this.props.projectInfo.image ? <img
                                    alt={this.props.projectInfo.imageDesc}
                                    src={assets[this.props.projectInfo.image]}
                                    style={{maxWidth: '100%', maxHeight: '250px', width:'auto'}}
                                />:
                                <img
                                    alt="Imperial College London Logo"
                                    src={assets["imperial_logo"]}
                                    style={{width: '80%', maxHeight: '250px'}}
                                />}
                            </div>
                        </Col>
                        <Col xs={24} md={16}>
                            <Row>
                                <Typography.Title style={{textAlign: 'left'}} level={3}>
                                    {this.props.projectInfo.title}
                                </Typography.Title>
                            </Row>
                            <Row style={{paddingBottom: '12px'}}>
                                <Col style={{textAlign: 'left'}} xs={12}>
                                    <Typography.Text type="secondary">
                                        {this.props.projectInfo.date}
                                    </Typography.Text>
                                </Col>
                                <Col style={{textAlign: 'right'}} xs={12}>
                                    {this.props.projectInfo.languages.map(
                                        language =>
                                            <Tag color="blue" key={language} style={{pointer: "inherit"}}>
                                                {language}
                                            </Tag>
                                    )}
                                </Col>
                            </Row>
                            <Typography.Paragraph style={{textAlign: 'left'}}>
                                {this.props.projectInfo.short_desc || this.props.projectInfo.paragraphs[0]}
                            </Typography.Paragraph>
                            {(this.props.projectInfo.paragraphs.length > 1 || this.props.projectInfo.short_desc) &&
                                <NavLink to={`/projects/${this.props.projectInfo.id}`} className='projectLink'>
                                    Read More
                                </NavLink>
                            }
                        </Col>
                    </Row>
                </Card>
            )
      }
}