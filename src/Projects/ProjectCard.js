import React from 'react';
import {Card, Col, Row, Tag, Typography} from "antd";

export class ProjectCard extends React.Component {
      handleExpandClick = () => {
          this.setState(state => ({ expanded: !state.expanded }));
      };

      render() {
            const assets = require('./Resources/assets.js');

            return (
                <Card
                    style={{
                        width: 600,
                        maxWidth: '100%',
                        margin: '2vh auto',
                        background: 'rgba(255, 255, 255, 0.9)'
                    }}
                    cover={this.props.projectInfo.image &&
                        <div style={{alignItems:'centre'}}>
                                <img
                                    alt={this.props.projectInfo.imageDesc}
                                    src={assets[this.props.projectInfo.image]}
                                    style={{maxWidth: '100%', maxHeight: '350px', width:'auto'}}
                                />
                        </div>}
                >
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
                    {this.props.projectInfo.paragraphs.map(
                        paragraph =>
                            <Typography.Paragraph style={{textAlign: 'left'}}>
                                {paragraph}
                            </Typography.Paragraph>)
                    }
                </Card>
            )
      }
}