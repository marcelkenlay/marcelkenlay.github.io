import * as React from 'react';
import {Layout} from "antd";
import {Header} from "../Header";
import {Main} from "../Main";
import {LinkedInLink} from "../Footer";
import {Switch, withRouter, Route} from 'react-router-dom';
import {Splash} from "../Splash";

const App = (props) => (
            <Switch>
                <Route path="/" exact>
                    <Splash/>
                </Route>
                <Route>
                    <Layout style={{background: 'inherit'}}>
                        <Layout.Header style={{background: 'rgba(0, 0, 0, 0.9)'}}>
                            <Header onSelect={url => props.history.push(url)} selected={props.location.pathname}/>
                        </Layout.Header>
                        <Layout.Content>
                            <Main/>
                        </Layout.Content>
                        <Layout.Footer style={{background: 'rgba(0, 0, 0, 0.9)', textAlign:'right'}}>
                            <LinkedInLink/>
                        </Layout.Footer>
                    </Layout>
                </Route>
            </Switch>);

export default withRouter(App);
