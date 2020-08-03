import * as React from 'react';
import {Layout} from "antd";
import {Header} from "../Header";
import {Main} from "../Main";
import {LinkedInLink} from "../Footer";
import {Switch, Route, withRouter, HashRouter} from 'react-router-dom';
import {Splash} from "../Splash";

const App = (props) => (
            <HashRouter>
                <Switch>
                    <Route path="/" exact>
                        <Splash/>
                    </Route>
                    <Route>
                        <Layout style={{background: 'inherit'}}>
                            <Layout.Header style={{background: 'rgba(0, 0, 0, 0.9)'}}>
                                <Header onSelect={url => window.location.replace(url)} selected={window.location.hash}/>
                            </Layout.Header>
                            <Layout.Content>
                                <Main/>
                            </Layout.Content>
                            <Layout.Footer style={{background: 'rgba(0, 0, 0, 0.9)', textAlign:'right'}}>
                                <LinkedInLink/>
                            </Layout.Footer>
                        </Layout>
                    </Route>
                </Switch>
            </HashRouter>);

    export default withRouter(App);
