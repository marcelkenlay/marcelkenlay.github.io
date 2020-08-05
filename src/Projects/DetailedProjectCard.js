import React from 'react';
import {Card, Col, Row, Tag, Typography} from "antd/lib/index";

export class DetailedProjectCard extends React.Component {

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
                <Row style={{paddingTop: '3vh'}}>
                    <Typography.Title style={{textAlign: 'center'}} level={1}>
                        {this.props.projectInfo.title}
                    </Typography.Title>
                </Row>
                <Row  type="flex" justify="center" align="middle" style={{paddingBottom: '3vh'}}>
                    <Col style={{textAlign: 'left'}} xs={12} md={11} lg={9}>
                        <Typography.Text type="secondary">
                            {this.props.projectInfo.date}
                        </Typography.Text>
                    </Col>
                    <Col style={{textAlign: 'right'}} xs={12} md={11} lg={9}>
                        {this.props.projectInfo.languages.map(
                            language =>
                                <Tag color="blue" key={language} style={{pointer: "inherit"}}>
                                    {language}
                                </Tag>
                        )}
                    </Col>
                </Row>
                <Row  type="flex" justify="center" align="middle" >
                    <Col xs={23} md={22} lg={20}>
                        {this.props.projectInfo.paragraphs.map(
                            paragraph =>
                                <Typography.Paragraph style={{textAlign: 'left'}}>
                                    {paragraph}
                                </Typography.Paragraph>)
                        }
                        {this.props.projectInfo.report_link && <Typography.Paragraph style={{textAlign: 'left'}}>
                            The report for this project can be found <a href={this.props.projectInfo.report_link}>here</a>.
                        </Typography.Paragraph>}
                    </Col>
                </Row>
                <Row  type="flex" justify="center" align="middle" >
                    {this.props.projectInfo.additional_images ?
                          this.props.projectInfo.additional_images.map(
                              (img, img_no) => <Col xs={24} lg={18} xl={12}>
                                  <div className="captionedImageBox">
                                      <img
                                          alt={img.name}
                                          onClick={() => window.open(assets[img.name])}
                                          src={assets[img.name]}
                                          style={{maxWidth: '100%', maxHeight: '400px', width:'auto', cursor: 'pointer'}}
                                      />
                                      <Typography.Paragraph style={{textAlign: 'center', margin: 'auto'}}>
                                          Image {img_no + 1}: {img.caption}
                                      </Typography.Paragraph>
                                  </div>
                              </Col>
                          )


                        : <Col xs={24} md={12}>
                            <div style={{alignItems:'centre'}}>
                                <img
                                    alt={this.props.projectInfo.imageDesc}
                                    src={assets[this.props.projectInfo.image]}
                                    style={{maxWidth: '100%', maxHeight: '500px', width:'auto'}}
                                />
                            </div>
                        </Col>
                    }
                </Row>
            </Card>
        )
    }
}