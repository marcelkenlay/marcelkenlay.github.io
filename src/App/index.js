import * as React from 'react';
import {Layout} from "antd";
import {Header} from "../Header";
import {Main} from "../Main";
import {LinkedInLink} from "../Footer";
import {withRouter} from 'react-router-dom';

const App = (props) => (
        <Layout style={{background: 'inherit'}}>
            <Layout.Header style={{background: 'rgba(40, 40, 40, 0.9)'}}>
                <Header onSelect={url => props.history.push(url)} selected={props.location.pathname}/>
            </Layout.Header>
            <Layout.Content>
                <Main/>
            </Layout.Content>
            <Layout.Footer style={{background: 'rgba(40, 40, 40, 0.9)', textAlign:'right'}}>
                <LinkedInLink/>
            </Layout.Footer>
        </Layout>);

export default withRouter(App);
